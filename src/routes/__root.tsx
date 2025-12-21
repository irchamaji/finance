import { HeadContent, Scripts, createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import { ThemeToggle } from '@/components/theme-toggle'
import { SettingsDialog } from '@/components/settings-dialog'
import { AboutDialog } from '@/components/about-dialog'

import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Income Allocation',
      },
      {
        name: 'description',
        content: 'A simple personal finance calculator to manage your income allocations',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),

  component: RootComponent,
})

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <div className="relative min-h-screen bg-background flex flex-col">
          {/* Background decorative elements */}
          <div className="pointer-events-none fixed inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/20 blur-3xl opacity-20" />
            <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent/20 blur-3xl opacity-20" />
          </div>

          {/* Header */}
          <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-sm">
            <div className="container mx-auto max-w-6xl px-3 sm:px-4 md:px-6 py-3 sm:py-4 flex items-center justify-between gap-2">
              <div className="flex-1 min-w-0">
                <h1 className="text-xl sm:text-2xl font-bold truncate">Income Calculator</h1>
                <p className="text-xs sm:text-sm text-muted-foreground truncate">Manage your income allocations</p>
              </div>
              <div className="flex items-center gap-2">
                <SettingsDialog />
                <ThemeToggle />
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 relative">
            {children}
          </main>

          {/* Footer */}
          <footer className="border-t border-border/40 bg-background/50 backdrop-blur-sm relative z-10">
            <div className="container mx-auto max-w-6xl px-3 sm:px-4 md:px-6 py-4 flex items-center justify-center">
              <AboutDialog />
            </div>
          </footer>
        </div>

        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}
