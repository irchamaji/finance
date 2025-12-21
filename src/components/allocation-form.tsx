import * as React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import type { Allocation } from '@/lib/database'
import { validateAllocation } from '@/lib/finance'
import { useSettings, formatNumber } from '@/lib/settings'
import { Plus } from 'lucide-react'

interface AllocationFormProps {
  onAdd: (allocation: Allocation) => void
}

export function AllocationForm({ onAdd }: AllocationFormProps) {
  const { currency } = useSettings()
  const [name, setName] = React.useState('')
  const [destination, setDestination] = React.useState('')
  const [allocationType, setAllocationType] = React.useState<'proportion' | 'nominal'>('proportion')
  const [value, setValue] = React.useState('')
  const [displayValue, setDisplayValue] = React.useState('')
  const [errors, setErrors] = React.useState<string[]>([])

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value
    
    // Allow empty string
    if (input === '') {
      setValue('')
      setDisplayValue('')
      return
    }
    
    // Only allow numbers and a single decimal point
    const decimalRegex = /^\d*\.?\d*$/
    if (!decimalRegex.test(input)) {
      return
    }
    
    if (allocationType === 'proportion') {
      setValue(input)
      setDisplayValue(input)
    } else {
      setValue(input)
      setDisplayValue(input)
    }
  }

  const handleValueBlur = () => {
    if (allocationType === 'nominal' && value) {
      const formatted = formatNumber(value, currency)
      setDisplayValue(formatted)
    }
  }

  const handleValueFocus = () => {
    if (allocationType === 'nominal') {
      setDisplayValue(value)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setErrors([])

    const allocation: Allocation = {
      name,
      destination,
      proportion: allocationType === 'proportion' ? parseFloat(value) : undefined,
      nominal: allocationType === 'nominal' ? parseFloat(value) : undefined,
      timestamp: Date.now()
    }

    const validationErrors = validateAllocation(allocation)
    if (validationErrors.length > 0) {
      setErrors(validationErrors)
      return
    }

    onAdd(allocation)
    setName('')
    setDestination('')
    setValue('')
    setDisplayValue('')
    setAllocationType('proportion')
  }

  return (
    <Card className="border-0 shadow-md lg:border">
      <CardHeader>
        <CardTitle className="text-lg sm:text-xl">Add Allocation</CardTitle>
        <CardDescription className="text-xs sm:text-sm">Create a new money allocation</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
          <div className="space-y-1.5 sm:space-y-2">
            <Label htmlFor="name" className="text-xs sm:text-sm">Allocation Name</Label>
            <Input
              id="name"
              placeholder="e.g., Emergency Fund"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="text-sm h-9 sm:h-10"
            />
          </div>

          <div className="space-y-1.5 sm:space-y-2">
            <Label htmlFor="destination" className="text-xs sm:text-sm">Destination</Label>
            <Input
              id="destination"
              placeholder="e.g., Savings Account"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="text-sm h-9 sm:h-10"
            />
          </div>

          <div className="space-y-3 sm:space-y-4">
            <div className="space-y-2">
              <Label className="text-xs sm:text-sm">Type</Label>
              <RadioGroup value={allocationType} onValueChange={(val) => setAllocationType(val as 'proportion' | 'nominal')} className="flex gap-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="proportion" id="proportion" />
                  <Label htmlFor="proportion" className="text-xs sm:text-sm font-normal cursor-pointer">Proportion (%)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="nominal" id="nominal" />
                  <Label htmlFor="nominal" className="text-xs sm:text-sm font-normal cursor-pointer">Fixed Amount</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-1.5 sm:space-y-2">
              <Label htmlFor="value" className="text-xs sm:text-sm">
                {allocationType === 'proportion' ? 'Percentage' : 'Amount'}
              </Label>
              <Input
                id="value"
                type="text"
                inputMode="decimal"
                placeholder={allocationType === 'proportion' ? '0-100' : '0'}
                value={allocationType === 'proportion' ? value : displayValue}
                onChange={handleValueChange}
                onBlur={handleValueBlur}
                onFocus={handleValueFocus}
                className="text-sm h-9 sm:h-10"
              />
            </div>
          </div>

          {errors.length > 0 && (
            <div className="rounded-md bg-destructive/10 p-2.5 sm:p-3">
              <ul className="space-y-0.5 sm:space-y-1 text-xs sm:text-sm text-destructive">
                {errors.map((error, i) => (
                  <li key={i}>• {error}</li>
                ))}
              </ul>
            </div>
          )}

          <Button type="submit" className="w-full text-sm sm:text-base h-9 sm:h-10">
            <Plus size={16} className="sm:block hidden" />
            <Plus size={14} className="sm:hidden" />
            <span className="ml-1.5">Add Allocation</span>
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
