import * as React from 'react'
import { Info } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

export function AboutDialog() {
  const [open, setOpen] = React.useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={
          <Button variant="ghost" size="sm" className="text-xs text-muted-foreground hover:text-foreground">
            <Info size={14} className="mr-1.5" />
            About this project
          </Button>
        }
      />
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>About Finance Calculator</DialogTitle>
          <DialogDescription>
            A personal finance income allocation tool
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 text-sm">
          <div>
            <h4 className="font-semibold mb-2 text-foreground">Privacy First</h4>
            <p className="text-muted-foreground leading-relaxed">
              All your data is saved locally in your browser using IndexedDB. No information is sent to any server. 
              Your financial data stays completely private and secure on your device.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2 text-foreground">Local Storage</h4>
            <p className="text-muted-foreground leading-relaxed">
              Settings and currency preferences are stored in localStorage, while allocation data uses IndexedDB. 
              This ensures fast access and persistence across browser sessions.
            </p>
          </div>
          
          
          <div className="pt-2 border-t">
            <p className="text-xs text-muted-foreground/80">
              Built by <a href="https://ircham.dev" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground transition-colors">ircham.dev</a>
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
