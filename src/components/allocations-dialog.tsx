import * as React from 'react'
import { List, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Badge } from '@/components/ui/badge'
import type { Allocation } from '@/lib/database'
import { getAllocationIcon } from '@/lib/finance'
import { useSettings, formatCurrency } from '@/lib/settings'

interface AllocationsDialogProps {
  allocations: Allocation[]
  onDelete: (id: string) => void
}

export function AllocationsDialog({ allocations, onDelete }: AllocationsDialogProps) {
  const [open, setOpen] = React.useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={
          <Button variant="outline" className="w-full h-9 sm:h-10">
            <List size={16} className="sm:block hidden" />
            <List size={14} className="sm:hidden" />
            <span className="ml-1.5">View Allocations ({allocations.length})</span>
          </Button>
        }
      />
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Your Allocations</DialogTitle>
          <DialogDescription>
            {allocations.length} allocation{allocations.length !== 1 ? 's' : ''} configured
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-96 w-full pr-4">
          {allocations.length === 0 ? (
            <div className="flex items-center justify-center h-full">
              <p className="text-center text-muted-foreground text-xs sm:text-sm">
                No allocations yet. Create one to get started!
              </p>
            </div>
          ) : (
            <div className="space-y-2.5 sm:space-y-3">
              {allocations.map((allocation) => (
                <AllocationItem
                  key={allocation.id}
                  allocation={allocation}
                  onDelete={onDelete}
                />
              ))}
            </div>
          )}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}

interface AllocationItemProps {
  allocation: Allocation
  onDelete: (id: string) => void
}

function AllocationItem({ allocation, onDelete }: AllocationItemProps) {
  const { currency } = useSettings()
  const IconComponent = getAllocationIcon(allocation.name)
  
  return (
    <div className="group relative flex items-center gap-3 sm:gap-4 rounded-xl border border-border/60 bg-gradient-to-br from-card to-card/50 p-3.5 sm:p-4 hover:border-primary/40 hover:shadow-sm transition-all duration-200">
      {/* Icon */}
      <div className="shrink-0 flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-primary/10 ring-1 ring-primary/20">
        <IconComponent size={18} className="sm:block hidden text-primary" />
        <IconComponent size={16} className="sm:hidden text-primary" />
      </div>
      
      {/* Content */}
      <div className="flex-1 min-w-0 flex items-center justify-between gap-3">
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-sm sm:text-base truncate text-foreground">{allocation.name}</h3>
          <p className="text-xs sm:text-sm text-muted-foreground/80 truncate mt-0.5">{allocation.destination}</p>
        </div>
        
        {/* Badges on the right */}
        <div className="shrink-0 flex items-center gap-2">
          {allocation.proportion !== undefined && allocation.proportion > 0 && (
            <Badge variant="secondary" className="text-xs font-semibold px-2 py-0.5 bg-primary/10 text-primary border-primary/20">
              {allocation.proportion}%
            </Badge>
          )}
          {allocation.nominal !== undefined && allocation.nominal > 0 && (
            <Badge variant="secondary" className="text-xs font-semibold px-2 py-0.5 bg-accent/10 text-accent-foreground border-accent/20">
              {formatCurrency(allocation.nominal, currency)}
            </Badge>
          )}
        </div>
      </div>
      
      {/* Delete Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => allocation.id && onDelete(allocation.id)}
        className="text-destructive hover:text-destructive hover:bg-destructive/10 shrink-0"
      >
        <Trash2 size={16} className="sm:block hidden" />
        <Trash2 size={14} className="sm:hidden" />
      </Button>
    </div>
  )
}
