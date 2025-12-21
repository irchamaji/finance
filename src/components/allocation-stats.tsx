import * as React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts'
import type { Allocation } from '@/lib/database'
import { useSettings, formatCurrency } from '@/lib/settings'
import { TrendingUp } from 'lucide-react'

interface AllocationStatsProps {
  allocations: Allocation[]
}

export function AllocationStats({ allocations }: AllocationStatsProps) {
  const { currency, incomes } = useSettings()

  // Calculate total income
  const totalIncome = React.useMemo(() => {
    return incomes.reduce((sum, income) => sum + (parseFloat(income.value) || 0), 0)
  }, [incomes])

  // Calculate chart data
  const chartData = React.useMemo(() => {
    if (totalIncome <= 0 || allocations.length === 0) return []

    const allocatedAmounts = allocations.map((allocation) => {
      const amount = allocation.proportion
        ? (totalIncome * allocation.proportion) / 100
        : allocation.nominal || 0
      return { name: allocation.name, value: amount, allocation }
    })

    // Sort by value in descending order (biggest first)
    const sortedAllocations = allocatedAmounts.sort((a, b) => b.value - a.value)

    const totalAllocated = sortedAllocations.reduce((sum, item) => sum + item.value, 0)
    const remaining = totalIncome - totalAllocated

    return [
      ...sortedAllocations,
      ...(remaining > 0 ? [{ name: 'Remaining', value: remaining, allocation: null }] : [])
    ]
  }, [totalIncome, allocations])

  // Generate grey colors for allocations (dark to light grey)
  const getAllocationColors = (count: number): string[] => {
    const colors: string[] = []
    for (let i = 0; i < count; i++) {
      const intensity = Math.floor(80 + (i * 120) / Math.max(count - 1, 1))
      colors.push(`rgb(${intensity}, ${intensity}, ${intensity})`)
    }
    return colors
  }

  const allocationColors = React.useMemo(() => {
    const count = chartData.filter(item => item.name !== 'Remaining').length
    return getAllocationColors(count)
  }, [chartData])

  const getColor = (index: number, name: string): string => {
    if (name === 'Remaining') {
      return 'rgb(34, 197, 94)' // Green for remaining (green-600)
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
              {((data.value / totalIncome) * 100).toFixed(1)}%
            </span>
          </div>
        </div>
      )
    }
    return null
  }

  if (totalIncome <= 0 || allocations.length === 0) {
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
              // label={({ name, percent }) => `${name} ${((percent ?? 0) * 100).toFixed(0)}%`}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={getColor(index, entry.name)} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            {/* <Legend /> */}
          </PieChart>
        </ResponsiveContainer>
        
        <div className="space-y-2 text-xs sm:text-sm">
          {/* <div className="flex justify-between font-medium">
            <span>Total Income</span>
            <span className="font-bold">{formatCurrency(totalIncome, currency)}</span>
          </div>
          <div className="flex justify-between font-medium">
            <span>Total Allocated</span>
            <span className="font-bold">
              {formatCurrency(
                chartData
                  .filter(item => item.name !== 'Remaining')
                  .reduce((sum, item) => sum + item.value, 0),
                currency
              )}
            </span>
          </div> */}
          {(() => {
            const totalAllocated = chartData
              .filter(item => item.name !== 'Remaining')
              .reduce((sum, item) => sum + item.value, 0)
            const remaining = totalIncome - totalAllocated
            const isPositive = remaining >= 0
            const percentage = (Math.abs(remaining) / totalIncome * 100).toFixed(1)
            
            if (remaining === 0) return null
            
            return (
              <div className="flex justify-between pt-2 border-t">
                <span className="font-semibold">{isPositive ? 'Remaining' : 'Deficit'}</span>
                <span className={`font-bold text-sm sm:text-base ${
                  isPositive ? 'text-green-600 dark:text-green-400' : 'text-destructive'
                }`}>
                  {isPositive ? ''+percentage : '-'}%
                </span>
              </div>
            )
          })()}
        </div>
      </CardContent>
    </Card>
  )
}
