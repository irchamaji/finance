'use client'

import * as React from 'react'
import { Settings } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { useSettings, CURRENCIES, type Currency } from '@/lib/settings'

export function SettingsDialog() {
  const { currency, setCurrency } = useSettings()
  const [open, setOpen] = React.useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={
          <Button variant="outline" size="icon" className="h-9 w-9">
            <Settings size={16} />
            <span className="sr-only">Settings</span>
          </Button>
        }
      />
      <DialogContent className="sm:max-w-106.25">
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
          <DialogDescription>
            Configure your finance calculator preferences
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-3">
            <Label className="text-sm font-medium">Currency</Label>
            <RadioGroup
              value={currency}
              onValueChange={(val) => setCurrency(val as Currency)}
              className="grid grid-cols-2 gap-3"
            >
              {Object.entries(CURRENCIES).map(([code, config]) => (
                <div
                  key={code}
                  className="flex items-center space-x-2 rounded-lg border border-border p-3 hover:bg-accent/50 transition-colors"
                >
                  <RadioGroupItem value={code} id={code} />
                  <Label
                    htmlFor={code}
                    className="flex-1 text-sm font-normal cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">{config.symbol}</span>
                      <span className="text-muted-foreground">{code}</span>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {config.name}
                    </div>
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
