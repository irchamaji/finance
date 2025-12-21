import * as React from 'react'
import { db, type Allocation } from '@/lib/database'
import { AllocationForm } from '@/components/allocation-form'
import { AllocationsDialog } from '@/components/allocations-dialog'
import { IncomeCalculator } from '@/components/income-calculator'
import { Card, CardContent } from '@/components/ui/card'

export function FinanceCalculator() {
  const [allocations, setAllocations] = React.useState<Allocation[]>([])
  const [isLoading, setIsLoading] = React.useState(true)

  // Load allocations from database on mount
  React.useEffect(() => {
    const loadAllocations = async () => {
      try {
        const data = await db.allocations.toArray()
        setAllocations(data)
      } catch (error) {
        console.error('Failed to load allocations:', error)
      } finally {
        setIsLoading(false)
      }
    }

    loadAllocations()
  }, [])

  const handleAddAllocation = async (allocation: Allocation) => {
    try {
      const id = await db.allocations.add(allocation)
      setAllocations([...allocations, { ...allocation, id: String(id) }])
    } catch (error) {
      console.error('Failed to add allocation:', error)
    }
  }

  const handleDeleteAllocation = async (id: string) => {
    try {
      await db.allocations.delete(Number(id))
      setAllocations(allocations.filter(a => a.id !== id))
    } catch (error) {
      console.error('Failed to delete allocation:', error)
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6">
        <Card className="w-full max-w-sm">
          <CardContent className="pt-6">
            <p className="text-center text-muted-foreground text-sm sm:text-base">Loading...</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto max-w-6xl px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {/* Sidebar */}
        <div className="space-y-4 sm:space-y-6 lg:col-span-1">
          <AllocationForm onAdd={handleAddAllocation} />
          <AllocationsDialog allocations={allocations} onDelete={handleDeleteAllocation} />
        </div>

        {/* Main Area */}
        <div className="space-y-4 sm:space-y-6 md:space-y-8 lg:col-span-2">
          {/* Income Calculator */}
          {allocations.length > 0 && <IncomeCalculator allocations={allocations} />}
        </div>
      </div>
    </div>
  )
}
