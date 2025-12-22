import * as React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'
import type { Allocation, Income } from '@/lib/database'
import { getAllIncomes } from '@/lib/database'
import { calculateAllocation } from '@/lib/finance'
import { useSettings, formatCurrency } from '@/lib/settings'
import { TrendingUp } from 'lucide-react'

interface AllocationStatsProps {
  allocations: Allocation[]
}

interface CalculationResult extends Allocation {
  amount: number
}

export function AllocationStats({ allocations }: AllocationStatsProps) {
  const { currency } = useSettings()
  const [incomes, setIncomes] = React.useState<Income[]>([])

  // Load incomes from database
  React.useEffect(() => {
    let mounted = true
    
    const loadIncomes = async () => {
      const dbIncomes = await getAllIncomes()
      if (mounted) {
        setIncomes(dbIncomes)
      }
    }
    
    loadIncomes()
    
    // Listen for income changes from income-calculator
    const handleStorageChange = () => loadIncomes()
    window.addEventListener('dexie-change', handleStorageChange)
    
    return () => {
      mounted = false
      window.removeEventListener('dexie-change', handleStorageChange)
    }
  }, [])

  // Calculate total income (same as income-calculator)
  const incomeValue = React.useMemo(() => {
    return incomes.reduce((sum, income) => sum + (parseFloat(income.value) || 0), 0)
  }, [incomes])

  // Calculate results using the same logic as income-calculator
  const results = React.useMemo(() => {
    if (incomeValue <= 0 || allocations.length === 0) return []
    
    try {
      const calculatedResults = calculateAllocation(incomeValue, allocations)
      return (calculatedResults as CalculationResult[]).sort((a, b) => b.amount - a.amount)
    } catch {
      return []
    }
  }, [incomeValue, allocations])

  // Calculate totals (same as income-calculator)
  const totalAllocated = React.useMemo(() => {
    return results.reduce((sum, r) => sum + r.amount, 0)
  }, [results])

  const remaining = React.useMemo(() => {
    return incomeValue - totalAllocated
  }, [incomeValue, totalAllocated])

  // Prepare chart data
  const chartData = React.useMemo(() => {
    if (results.length === 0) return []

    const allocationsData = results.map(result => ({
      name: result.name,
      value: result.amount,
      allocation: result
    }))

    // Only add remaining if positive (don't show deficit in pie chart)
    return [
      ...allocationsData,
      ...(remaining > 0 ? [{ name: 'Remaining', value: remaining, allocation: null }] : [])
    ]
  }, [results, remaining])

  // Generate grey colors for allocations
  const getAllocationColors = (count: number): string[] => {
    const colors: string[] = []
    for (let i = 0; i < count; i++) {
      const intensity = Math.floor(80 + (i * 120) / Math.max(count - 1, 1))
      colors.push(`rgb(${intensity}, ${intensity}, ${intensity})`)
    }
    return colors
  }

  const allocationColors = React.useMemo(() => {
    const count = results.length
    return getAllocationColors(count)
  }, [results.length])

  const getColor = (index: number, name: string): string => {
    if (name === 'Remaining') {
      return 'rgb(34, 197, 94)' // Green for remaining
    }
    return allocationColors[index] || '#666'
  }

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0]
      return (
        <div className="rounded-lg border bg-background p-2 shadow-sm">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-medium">{data.name}</span>
            <span className="text-xs text-muted-foreground">
              {formatCurrency(data.value, currency)}
            </span>
            <span className="text-xs text-muted-foreground">
              {((data.value / incomeValue) * 100).toFixed(1)}%
            </span>
          </div>
        </div>
      )
    }
    return null
  }

  if (incomeValue <= 0 || allocations.length === 0) {
    return null
  }

  return (
    <Card className="border-0 shadow-md lg:border">
      <CardHeader>
        <CardTitle className="text-lg sm:text-xl flex items-center gap-2">
          <TrendingUp size={18} className="sm:block hidden text-primary" />
          <TrendingUp size={16} className="sm:hidden text-primary" />
          Allocation Overview
        </CardTitle>
        <CardDescription className="text-xs sm:text-sm">
          Visual breakdown of your money allocation
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={getColor(index, entry.name)} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
        
        <div className="space-y-2 text-xs sm:text-sm">
          {remaining !== 0 && (
            <div className="flex justify-between pt-2 border-t">
              <span className="font-semibold">{remaining >= 0 ? 'Remaining' : 'Deficit'}</span>
              <span className={`font-bold text-sm sm:text-base ${
                remaining >= 0 ? 'text-green-600 dark:text-green-400' : 'text-destructive'
              }`}>
                {((Math.abs(remaining) / incomeValue) * 100).toFixed(1)}%
              </span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
