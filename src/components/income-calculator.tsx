import * as React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import type { Allocation } from '@/lib/database'
import { calculateAllocation, getAllocationIcon } from '@/lib/finance'
import { useSettings, formatNumber, formatCurrency } from '@/lib/settings'
import { TrendingUp, Plus, X } from 'lucide-react'


interface IncomeCalculatorProps {
  allocations: Allocation[]
}

interface CalculationResult extends Allocation {
  amount: number
}

export function IncomeCalculator({ allocations }: IncomeCalculatorProps) {
  const { currency, incomes, updateIncome, addIncome, removeIncome } = useSettings()
  const [results, setResults] = React.useState<CalculationResult[]>([])
  const [error, setError] = React.useState('')
  const nextIdRef = React.useRef(2)

  // Auto-calculate whenever incomes or allocations change
  React.useEffect(() => {
    const totalIncome = incomes.reduce((sum, income) => sum + (parseFloat(income.value) || 0), 0)
    
    if (totalIncome <= 0 || allocations.length === 0) {
      setResults([])
      setError('')
      return
    }

    try {
      const calculatedResults = calculateAllocation(totalIncome, allocations)
      const sortedResults = (calculatedResults as CalculationResult[]).sort((a, b) => b.amount - a.amount)
      setResults(sortedResults)
      setError('')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Calculation failed')
      setResults([])
    }
  }, [incomes, allocations])

  const handleIncomeChange = React.useCallback((id: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value
    const numericValue = input.replace(/[^0-9.]/g, '')
    updateIncome(id, { value: numericValue, displayValue: numericValue })
  }, [updateIncome])

  const handleDescriptionChange = React.useCallback((id: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    updateIncome(id, { description: value })
  }, [updateIncome])

  const handleIncomeBlur = React.useCallback((id: number) => {
    const income = incomes.find(i => i.id === id)
    if (income?.value) {
      const formatted = formatNumber(income.value, currency)
      updateIncome(id, { displayValue: formatted })
    }
  }, [incomes, currency, updateIncome])

  const handleIncomeFocus = React.useCallback((id: number) => {
    const income = incomes.find(i => i.id === id)
    if (income) {
      updateIncome(id, { displayValue: income.value })
    }
  }, [incomes, updateIncome])

  const handleAddIncome = () => {
    addIncome({ id: nextIdRef.current, value: '', displayValue: '', description: '' })
    nextIdRef.current += 1
  }

  const handleRemoveIncome = (id: number) => {
    if (incomes.length > 1) {
      removeIncome(id)
    }
  }

  const totalAllocated = results.reduce((sum, r) => sum + r.amount, 0)
  const incomeValue = incomes.reduce((sum, income) => sum + (parseFloat(income.value) || 0), 0)
  const remaining = incomeValue - totalAllocated

  return (
    <div className="space-y-4 sm:space-y-6">
      <Card className="border-0 shadow-md lg:border">
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl flex items-center gap-2">
            <TrendingUp size={18} className="sm:block hidden text-primary" />
            <TrendingUp size={16} className="sm:hidden text-primary" />
            Income Calculator
          </CardTitle>
          <CardDescription className="text-xs sm:text-sm">Enter your income(s) to calculate allocations</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 sm:space-y-4">
          <div className="space-y-1.5 sm:space-y-2">
            <Label htmlFor="income" className="text-xs sm:text-sm">Received Incomes</Label>
            <div className="space-y-2">
              {incomes.map((income, index) => (
                <div key={income.id} className="flex gap-2">
                  <Input
                    type="text"
                    placeholder="Description (optional)"
                    value={income.description}
                    onChange={(e) => handleDescriptionChange(income.id, e)}
                    className="text-sm h-9 sm:h-10 flex-1"
                  />
                  <Input
                    id={index === 0 ? 'income' : undefined}
                    type="text"
                    placeholder="0"
                    value={income.displayValue}
                    onChange={(e) => handleIncomeChange(income.id, e)}
                    onBlur={() => handleIncomeBlur(income.id)}
                    onFocus={() => handleIncomeFocus(income.id)}
                    className="text-sm h-9 sm:h-10 flex-1"
                  />
                  {incomes.length > 1 && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => handleRemoveIncome(income.id)}
                      className="h-9 sm:h-10 w-9 sm:w-10 shrink-0 text-destructive hover:text-destructive"
                    >
                      <X size={16} />
                    </Button>
                  )}
                </div>
              ))}
            </div>
            <div className="flex gap-2 mt-2 items-center">
              <div className="flex-1 flex items-center justify-between rounded-md text-primary bg-muted/30 px-2 sm:px-2 h-8 sm:h-10">
                <span className="text-xs sm:text-sm font-medium">Total Income</span>
                <span className="text-sm sm:text-base font-bold">{formatCurrency(incomeValue, currency)}</span>
              </div>
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={handleAddIncome}
                className="h-9 sm:h-10 w-9 sm:w-10 shrink-0"
              >
                <Plus size={16} />
              </Button>
            </div>
          </div>

          {error && (
            <div className="rounded-md bg-destructive/10 p-2.5 sm:p-3 text-xs sm:text-sm text-destructive">{error}</div>
          )}
        </CardContent>
      </Card>

      {results.length > 0 && (
        <Card className="border-0 shadow-md lg:border" id="allocation-results">
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl">Allocation Breakdown</CardTitle>
            <CardDescription className="text-xs sm:text-sm">Here's where your money will go</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 sm:space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {results.map((result, index) => {
                const IconComponent = getAllocationIcon(result.name)
                return (
                  <div key={index} className="space-y-2 rounded-lg border border-border/50 bg-muted/30 p-3 sm:p-4">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2 flex-1 min-w-0">
                        <div className="shrink-0 p-1.5 rounded-md bg-primary/10">
                          <IconComponent size={14} className="sm:block hidden text-primary" />
                          <IconComponent size={12} className="sm:hidden text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-xs sm:text-sm truncate">{result.name}</h3>
                          <p className="text-xs text-muted-foreground truncate">{result.destination}</p>
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="font-bold text-sm sm:text-base">{formatCurrency(result.amount, currency)}</p>
                        {result.proportion && (
                          <p className="text-xs text-muted-foreground">{result.proportion}%</p>
                        )}
                      </div>
                    </div>
                    <div className="h-1.5 sm:h-2 w-full overflow-hidden rounded-full bg-muted">
                      <div
                        className="h-full bg-primary transition-all duration-500"
                        style={{ width: `${(result.amount / incomeValue) * 100}%` }}
                      />
                    </div>
                  </div>
                )
              })}
            </div>

            <Separator className="my-3 sm:my-4" />

            <div className="space-y-2 text-xs sm:text-sm">
              <div className="flex justify-between font-medium">
                <span>Total Income</span>
                <span className="font-bold">{formatCurrency(incomeValue, currency)}</span>
              </div>
              <div className="flex justify-between font-medium">
                <span>Total Allocated</span>
                <span className="font-bold">{formatCurrency(totalAllocated, currency)}</span>
              </div>
              <div className="flex justify-between pt-2 border-t">
                <span className="font-semibold">{remaining >= 0 ? 'Remaining' : 'Deficit'}</span>
                <span className={`font-bold text-sm sm:text-base ${remaining >= 0 ? 'text-green-600 dark:text-green-400' : 'text-destructive'}`}>
                  {formatCurrency(Math.abs(remaining), currency)}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
