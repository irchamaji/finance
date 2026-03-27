import type { Metadata } from 'next'
import { AboutDialog } from '@/components/about-dialog'
import { SettingsDialog } from '@/components/settings-dialog'
import { ThemeToggle } from '@/components/theme-toggle'
import '../src/styles.css'

export const metadata: Metadata = {
  title: 'Income Allocation',
  description: 'A simple personal finance calculator to manage your income allocations',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <div className="relative min-h-screen bg-background flex flex-col">
          <div className="pointer-events-none fixed inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/20 blur-3xl opacity-20" />
            <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent/20 blur-3xl opacity-20" />
          </div>

          <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-sm">
            <div className="container mx-auto max-w-6xl px-3 sm:px-4 md:px-6 py-3 sm:py-4 flex items-center justify-between gap-2">
              <div className="flex-1 min-w-0">
                <h1 className="text-xl sm:text-2xl font-bold truncate">Income Calculator</h1>
                <p className="text-xs sm:text-sm text-muted-foreground truncate">
                  Manage your income allocations
                </p>
              </div>
              <div className="flex items-center gap-2">
                <SettingsDialog />
                <ThemeToggle />
              </div>
            </div>
          </header>

          <main className="flex-1 relative">{children}</main>

          <footer className="border-t border-border/40 bg-background/50 backdrop-blur-sm relative z-10">
            <div className="container mx-auto max-w-6xl px-3 sm:px-4 md:px-6 py-4 flex items-center justify-center">
              <AboutDialog />
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
