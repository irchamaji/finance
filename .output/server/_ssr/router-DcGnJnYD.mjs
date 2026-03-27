import { c as createRouter, a as createRootRoute, b as createFileRoute, l as lazyRouteComponent, O as Outlet, H as HeadContent, S as Scripts } from "../_libs/tanstack__react-router.mjs";
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { c as create, p as persist } from "../_libs/zustand.mjs";
import { S as Settings, a as Sun, M as Moon, I as Info, X, C as Circle } from "../_libs/lucide-react.mjs";
import { D as DialogRoot, a as DialogTrigger$1, B as Button$1, b as DialogPopup, c as DialogClose, d as DialogTitle$1, e as DialogDescription$1, R as RadioGroup$1, f as RadioRoot, g as RadioIndicator, h as DialogPortal$1, i as DialogBackdrop } from "../_libs/base-ui__react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/tabbable.mjs";
import "../_libs/floating-ui__utils.mjs";
import "../_libs/base-ui__utils.mjs";
import "../_libs/reselect.mjs";
import "../_libs/use-sync-external-store.mjs";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "focus-visible:border-ring focus-visible:ring-ring/30 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 rounded-md border border-transparent bg-clip-padding text-xs/relaxed font-medium focus-visible:ring-[2px] aria-invalid:ring-[2px] [&_svg:not([class*='size-'])]:size-4 inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none group/button select-none",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/80",
        outline: "border-border dark:bg-input/30 hover:bg-input/50 hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost: "hover:bg-muted hover:text-foreground dark:hover:bg-muted/50 aria-expanded:bg-muted aria-expanded:text-foreground",
        destructive: "bg-destructive/10 hover:bg-destructive/20 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/20 text-destructive focus-visible:border-destructive/40 dark:hover:bg-destructive/30",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-7 gap-1 px-2 text-xs/relaxed has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        xs: "h-5 gap-1 rounded-sm px-2 text-[0.625rem] has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-2.5",
        sm: "h-6 gap-1 px-2 text-xs/relaxed has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        lg: "h-8 gap-1 px-2.5 text-xs/relaxed has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-4",
        icon: "size-7 [&_svg:not([class*='size-'])]:size-3.5",
        "icon-xs": "size-5 rounded-sm [&_svg:not([class*='size-'])]:size-2.5",
        "icon-sm": "size-6 [&_svg:not([class*='size-'])]:size-3",
        "icon-lg": "size-8 [&_svg:not([class*='size-'])]:size-4"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Button$1,
    {
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}
function ThemeToggle() {
  const [isDark, setIsDark] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const isDarkMode = localStorage.getItem("theme") === "dark" || !localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDark(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    }
  }, []);
  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    if (newIsDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Button,
    {
      variant: "ghost",
      size: "icon",
      onClick: toggleTheme,
      className: "rounded-full",
      title: isDark ? "Switch to light mode" : "Switch to dark mode",
      children: isDark ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { size: 20 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { size: 20 })
    }
  );
}
function Dialog({ ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DialogRoot, { "data-slot": "dialog", ...props });
}
function DialogTrigger({ ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger$1, { "data-slot": "dialog-trigger", ...props });
}
function DialogPortal({ ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DialogPortal$1, { "data-slot": "dialog-portal", ...props });
}
function DialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    DialogBackdrop,
    {
      "data-slot": "dialog-overlay",
      className: cn("data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 bg-black/80 duration-100 supports-backdrop-filter:backdrop-blur-xs fixed inset-0 isolate z-50", className),
      ...props
    }
  );
}
function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogPortal, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogOverlay, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      DialogPopup,
      {
        "data-slot": "dialog-content",
        className: cn(
          "bg-background data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 ring-foreground/10 grid max-w-[calc(100%-2rem)] gap-4 rounded-xl p-4 text-xs/relaxed ring-1 duration-100 sm:max-w-sm fixed top-1/2 left-1/2 z-50 w-full -translate-x-1/2 -translate-y-1/2 outline-none",
          className
        ),
        ...props,
        children: [
          children,
          showCloseButton && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            DialogClose,
            {
              "data-slot": "dialog-close",
              render: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "ghost",
                  className: "absolute top-2 right-2",
                  size: "icon-sm"
                }
              ),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  X,
                  {}
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close" })
              ]
            }
          )
        ]
      }
    )
  ] });
}
function DialogHeader({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "dialog-header",
      className: cn("gap-1 flex flex-col", className),
      ...props
    }
  );
}
function DialogTitle({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    DialogTitle$1,
    {
      "data-slot": "dialog-title",
      className: cn("text-sm font-medium", className),
      ...props
    }
  );
}
function DialogDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    DialogDescription$1,
    {
      "data-slot": "dialog-description",
      className: cn("text-muted-foreground *:[a]:hover:text-foreground text-xs/relaxed *:[a]:underline *:[a]:underline-offset-3", className),
      ...props
    }
  );
}
function Label({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "label",
    {
      "data-slot": "label",
      className: cn(
        "gap-2 text-xs/relaxed leading-none font-medium group-data-[disabled=true]:opacity-50 peer-disabled:opacity-50 flex items-center select-none group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed",
        className
      ),
      ...props
    }
  );
}
function RadioGroup({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    RadioGroup$1,
    {
      "data-slot": "radio-group",
      className: cn("grid gap-3 w-full", className),
      ...props
    }
  );
}
function RadioGroupItem({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    RadioRoot,
    {
      "data-slot": "radio-group-item",
      className: cn(
        "border-input text-primary dark:bg-input/30 focus-visible:border-ring focus-visible:ring-ring/30 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 data-checked:bg-primary data-checked:border-primary flex size-4 rounded-full transition-none focus-visible:ring-[2px] aria-invalid:ring-[2px] group/radio-group-item peer relative aspect-square shrink-0 border outline-none after:absolute after:-inset-x-3 after:-inset-y-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        RadioIndicator,
        {
          "data-slot": "radio-group-indicator",
          className: "group-aria-invalid/radio-group-item:text-destructive flex size-4 items-center justify-center text-white",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Circle, { className: "absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 fill-current" })
        }
      )
    }
  );
}
const CURRENCIES = {
  USD: { symbol: "$", name: "US Dollar", locale: "en-US", decimals: 2, thousandsSeparator: "," },
  IDR: { symbol: "Rp", name: "Indonesian Rupiah", locale: "id-ID", decimals: 0, thousandsSeparator: "." },
  EUR: { symbol: "€", name: "Euro", locale: "de-DE", decimals: 2, thousandsSeparator: "." },
  GBP: { symbol: "£", name: "British Pound", locale: "en-GB", decimals: 2, thousandsSeparator: "," },
  JPY: { symbol: "¥", name: "Japanese Yen", locale: "ja-JP", decimals: 0, thousandsSeparator: "," },
  CNY: { symbol: "¥", name: "Chinese Yuan", locale: "zh-CN", decimals: 2, thousandsSeparator: "," },
  AUD: { symbol: "A$", name: "Australian Dollar", locale: "en-AU", decimals: 2, thousandsSeparator: "," },
  CAD: { symbol: "C$", name: "Canadian Dollar", locale: "en-CA", decimals: 2, thousandsSeparator: "," }
};
const useSettings = create()(
  persist(
    (set) => ({
      currency: "USD",
      setCurrency: (currency) => set({ currency })
    }),
    {
      name: "finance-settings"
    }
  )
);
function formatNumber(value, currency) {
  const num = typeof value === "string" ? parseFloat(value) : value;
  if (isNaN(num)) return "";
  const config = CURRENCIES[currency];
  const parts = num.toFixed(config.decimals).split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, config.thousandsSeparator);
  return parts.join(config.decimals > 0 ? "." : "");
}
function formatCurrency(value, currency) {
  const num = typeof value === "string" ? parseFloat(value) : value;
  if (isNaN(num)) return "";
  const config = CURRENCIES[currency];
  const formatted = formatNumber(num, currency);
  return `${config.symbol}${formatted}`;
}
function SettingsDialog() {
  const { currency, setCurrency } = useSettings();
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      DialogTrigger,
      {
        render: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "icon", className: "h-9 w-9", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Settings, { size: 16 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Settings" })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "sm:max-w-106.25", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Settings" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { children: "Configure your finance calculator preferences" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium", children: "Currency" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          RadioGroup,
          {
            value: currency,
            onValueChange: (val) => setCurrency(val),
            className: "grid grid-cols-2 gap-3",
            children: Object.entries(CURRENCIES).map(([code, config]) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-center space-x-2 rounded-lg border border-border p-3 hover:bg-accent/50 transition-colors",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(RadioGroupItem, { value: code, id: code }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Label,
                    {
                      htmlFor: code,
                      className: "flex-1 text-sm font-normal cursor-pointer",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: config.symbol }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: code })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: config.name })
                      ]
                    }
                  )
                ]
              },
              code
            ))
          }
        )
      ] }) })
    ] })
  ] });
}
function AboutDialog() {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      DialogTrigger,
      {
        render: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "ghost", size: "sm", className: "text-xs text-muted-foreground hover:text-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { size: 14, className: "mr-1.5" }),
          "About this project"
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "sm:max-w-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "About Finance Calculator" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { children: "A personal finance income allocation tool" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-2 text-foreground", children: "Privacy First" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "All your data is saved locally in your browser using IndexedDB. No information is sent to any server. Your financial data stays completely private and secure on your device." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-2 text-foreground", children: "Local Storage" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Settings and currency preferences are stored in localStorage, while allocation data uses IndexedDB. This ensures fast access and persistence across browser sessions." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-2 border-t", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground/80", children: [
          "Built by ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://ircham.dev", target: "_blank", rel: "noopener noreferrer", className: "underline hover:text-foreground transition-colors", children: "ircham.dev" })
        ] }) })
      ] })
    ] })
  ] });
}
const appCss = "/assets/styles-Dyn1csza.css";
const Route$1 = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        title: "Income Allocation"
      },
      {
        name: "description",
        content: "A simple personal finance calculator to manage your income allocations"
      }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  component: RootComponent
});
function RootComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(RootDocument, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
}
function RootDocument({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-screen bg-background flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pointer-events-none fixed inset-0 overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/20 blur-3xl opacity-20" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent/20 blur-3xl opacity-20" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto max-w-6xl px-3 sm:px-4 md:px-6 py-3 sm:py-4 flex items-center justify-between gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl sm:text-2xl font-bold truncate", children: "Income Calculator" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm text-muted-foreground truncate", children: "Manage your income allocations" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SettingsDialog, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeToggle, {})
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 relative", children }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-border/40 bg-background/50 backdrop-blur-sm relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto max-w-6xl px-3 sm:px-4 md:px-6 py-4 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AboutDialog, {}) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
const $$splitComponentImporter = () => import("./index-xdAhQcYf.mjs");
const Route = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$1
});
const rootRouteChildren = {
  IndexRoute
};
const routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const router2 = createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Button as B,
  Dialog as D,
  Label as L,
  RadioGroup as R,
  RadioGroupItem as a,
  DialogTrigger as b,
  cn as c,
  DialogContent as d,
  DialogHeader as e,
  formatNumber as f,
  DialogTitle as g,
  DialogDescription as h,
  formatCurrency as i,
  router as r,
  useSettings as u
};
