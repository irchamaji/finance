import * as React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import type { Allocation } from '@/lib/database'
import { calculateAllocation, getAllocationIcon } from '@/lib/finance'
import { useSettings, formatNumber, formatCurrency } from '@/lib/settings'
import { TrendingUp } from 'lucide-react'


interface IncomeCalculatorProps {
  allocations: Allocation[]
}

interface CalculationResult extends Allocation {
  amount: number
}

export function IncomeCalculator({ allocations }: IncomeCalculatorProps) {
  const { currency } = useSettings()
  const [income, setIncome] = React.useState('')
  const [displayIncome, setDisplayIncome] = React.useState('')
  const [results, setResults] = React.useState<CalculationResult[]>([])
  const [error, setError] = React.useState('')

  const handleIncomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value
    const numericValue = input.replace(/[^0-9.]/g, '')
    setIncome(numericValue)
    setDisplayIncome(numericValue)
  }

  const handleIncomeBlur = () => {
    if (income) {
      const formatted = formatNumber(income, currency)
      setDisplayIncome(formatted)
    }
  }

  const handleIncomeFocus = () => {
    setDisplayIncome(income)
  }

  const handleCalculate = () => {
    setError('')
    setResults([])

    const incomeValue = parseFloat(income)
    if (!income || incomeValue <= 0) {
      setError('Please enter a valid income amount')
      return
    }

    if (allocations.length === 0) {
      setError('Please add at least one allocation')
      return
    }

    try {
      const calculatedResults = calculateAllocation(incomeValue, allocations)
      setResults(calculatedResults as CalculationResult[])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Calculation failed')
    }
  }

  const totalAllocated = results.reduce((sum, r) => sum + r.amount, 0)
  const incomeValue = parseFloat(income) || 0
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
          <CardDescription className="text-xs sm:text-sm">Enter your income to calculate allocations</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 sm:space-y-4">
          <div className="space-y-1.5 sm:space-y-2">
            <Label htmlFor="income" className="text-xs sm:text-sm">Received Income</Label>
            <div className="flex flex-col sm:flex-row">
              <Input
                id="income"
                type="text"
                placeholder="0"
                value={displayIncome}
                onChange={handleIncomeChange}
                onBlur={handleIncomeBlur}
                onFocus={handleIncomeFocus}
                className="text-sm h-9 sm:h-10 flex-1"
              />
              <Button onClick={handleCalculate} className="text-sm sm:text-base h-9 sm:h-10 sm:w-fit w-full">
                Calculate
              </Button>
            </div>
          </div>

          {error && (
            <div className="rounded-md bg-destructive/10 p-2.5 sm:p-3 text-xs sm:text-sm text-destructive">{error}</div>
          )}
        </CardContent>
      </Card>

      {results.length > 0 && (
        <Card className="border-0 shadow-md lg:border">
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
                        <div className="flex-shrink-0 p-1.5 rounded-md bg-primary/10">
                          <IconComponent size={14} className="sm:block hidden text-primary" />
                          <IconComponent size={12} className="sm:hidden text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-xs sm:text-sm truncate">{result.name}</h3>
                          <p className="text-xs text-muted-foreground truncate">{result.destination}</p>
                        </div>
                      </div>
                      <div className="text-right flex-shrink-0">
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
                <span className="font-semibold">Remaining</span>
                <span className={`font-bold text-sm sm:text-base ${remaining >= 0 ? 'text-green-600 dark:text-green-400' : 'text-destructive'}`}>
                  {formatCurrency(remaining, currency)}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
