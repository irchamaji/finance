import { createRouter, createRootRoute, createFileRoute, lazyRouteComponent, Outlet, HeadContent, Scripts } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { forwardRef, createElement } from "react";
import { Button as Button$1 } from "@base-ui/react/button";
import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Dialog as Dialog$1 } from "@base-ui/react/dialog";
import { Radio } from "@base-ui/react/radio";
import { RadioGroup as RadioGroup$1 } from "@base-ui/react/radio-group";
import { create } from "zustand";
import { persist } from "zustand/middleware";
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
};
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const Icon = forwardRef(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => createElement(
    "svg",
    {
      ref,
      ...defaultAttributes,
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: mergeClasses("lucide", className),
      ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => createElement(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);
const createLucideIcon = (iconName, iconNode) => {
  const Component = forwardRef(
    ({ className, ...props }, ref) => createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};
const __iconNode$5 = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]];
const Circle = createLucideIcon("circle", __iconNode$5);
const __iconNode$4 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
const Info = createLucideIcon("info", __iconNode$4);
const __iconNode$3 = [
  [
    "path",
    {
      d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
      key: "kfwtm"
    }
  ]
];
const Moon = createLucideIcon("moon", __iconNode$3);
const __iconNode$2 = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
];
const Settings = createLucideIcon("settings", __iconNode$2);
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
];
const Sun = createLucideIcon("sun", __iconNode$1);
const __iconNode = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
const X = createLucideIcon("x", __iconNode);
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
  return /* @__PURE__ */ jsx(
    Button$1,
    {
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}
function ThemeToggle() {
  const [isDark, setIsDark] = React.useState(false);
  React.useEffect(() => {
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
  return /* @__PURE__ */ jsx(
    Button,
    {
      variant: "ghost",
      size: "icon",
      onClick: toggleTheme,
      className: "rounded-full",
      title: isDark ? "Switch to light mode" : "Switch to dark mode",
      children: isDark ? /* @__PURE__ */ jsx(Sun, { size: 20 }) : /* @__PURE__ */ jsx(Moon, { size: 20 })
    }
  );
}
function Dialog({ ...props }) {
  return /* @__PURE__ */ jsx(Dialog$1.Root, { "data-slot": "dialog", ...props });
}
function DialogTrigger({ ...props }) {
  return /* @__PURE__ */ jsx(Dialog$1.Trigger, { "data-slot": "dialog-trigger", ...props });
}
function DialogPortal({ ...props }) {
  return /* @__PURE__ */ jsx(Dialog$1.Portal, { "data-slot": "dialog-portal", ...props });
}
function DialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Dialog$1.Backdrop,
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
  return /* @__PURE__ */ jsxs(DialogPortal, { children: [
    /* @__PURE__ */ jsx(DialogOverlay, {}),
    /* @__PURE__ */ jsxs(
      Dialog$1.Popup,
      {
        "data-slot": "dialog-content",
        className: cn(
          "bg-background data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 ring-foreground/10 grid max-w-[calc(100%-2rem)] gap-4 rounded-xl p-4 text-xs/relaxed ring-1 duration-100 sm:max-w-sm fixed top-1/2 left-1/2 z-50 w-full -translate-x-1/2 -translate-y-1/2 outline-none",
          className
        ),
        ...props,
        children: [
          children,
          showCloseButton && /* @__PURE__ */ jsxs(
            Dialog$1.Close,
            {
              "data-slot": "dialog-close",
              render: /* @__PURE__ */ jsx(
                Button,
                {
                  variant: "ghost",
                  className: "absolute top-2 right-2",
                  size: "icon-sm"
                }
              ),
              children: [
                /* @__PURE__ */ jsx(
                  X,
                  {}
                ),
                /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
              ]
            }
          )
        ]
      }
    )
  ] });
}
function DialogHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "dialog-header",
      className: cn("gap-1 flex flex-col", className),
      ...props
    }
  );
}
function DialogTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    Dialog$1.Title,
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
  return /* @__PURE__ */ jsx(
    Dialog$1.Description,
    {
      "data-slot": "dialog-description",
      className: cn("text-muted-foreground *:[a]:hover:text-foreground text-xs/relaxed *:[a]:underline *:[a]:underline-offset-3", className),
      ...props
    }
  );
}
function Label({ className, ...props }) {
  return /* @__PURE__ */ jsx(
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
  return /* @__PURE__ */ jsx(
    RadioGroup$1,
    {
      "data-slot": "radio-group",
      className: cn("grid gap-3 w-full", className),
      ...props
    }
  );
}
function RadioGroupItem({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    Radio.Root,
    {
      "data-slot": "radio-group-item",
      className: cn(
        "border-input text-primary dark:bg-input/30 focus-visible:border-ring focus-visible:ring-ring/30 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 data-checked:bg-primary data-checked:border-primary flex size-4 rounded-full transition-none focus-visible:ring-[2px] aria-invalid:ring-[2px] group/radio-group-item peer relative aspect-square shrink-0 border outline-none after:absolute after:-inset-x-3 after:-inset-y-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx(
        Radio.Indicator,
        {
          "data-slot": "radio-group-indicator",
          className: "group-aria-invalid/radio-group-item:text-destructive flex size-4 items-center justify-center text-white",
          children: /* @__PURE__ */ jsx(Circle, { className: "absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 fill-current" })
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
  const [open, setOpen] = React.useState(false);
  return /* @__PURE__ */ jsxs(Dialog, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsx(
      DialogTrigger,
      {
        render: /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "icon", className: "h-9 w-9", children: [
          /* @__PURE__ */ jsx(Settings, { size: 16 }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Settings" })
        ] })
      }
    ),
    /* @__PURE__ */ jsxs(DialogContent, { className: "sm:max-w-106.25", children: [
      /* @__PURE__ */ jsxs(DialogHeader, { children: [
        /* @__PURE__ */ jsx(DialogTitle, { children: "Settings" }),
        /* @__PURE__ */ jsx(DialogDescription, { children: "Configure your finance calculator preferences" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "space-y-4 py-4", children: /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsx(Label, { className: "text-sm font-medium", children: "Currency" }),
        /* @__PURE__ */ jsx(
          RadioGroup,
          {
            value: currency,
            onValueChange: (val) => setCurrency(val),
            className: "grid grid-cols-2 gap-3",
            children: Object.entries(CURRENCIES).map(([code, config]) => /* @__PURE__ */ jsxs(
              "div",
              {
                className: "flex items-center space-x-2 rounded-lg border border-border p-3 hover:bg-accent/50 transition-colors",
                children: [
                  /* @__PURE__ */ jsx(RadioGroupItem, { value: code, id: code }),
                  /* @__PURE__ */ jsxs(
                    Label,
                    {
                      htmlFor: code,
                      className: "flex-1 text-sm font-normal cursor-pointer",
                      children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsx("span", { className: "font-semibold", children: config.symbol }),
                          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: code })
                        ] }),
                        /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: config.name })
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
  const [open, setOpen] = React.useState(false);
  return /* @__PURE__ */ jsxs(Dialog, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsx(
      DialogTrigger,
      {
        render: /* @__PURE__ */ jsxs(Button, { variant: "ghost", size: "sm", className: "text-xs text-muted-foreground hover:text-foreground", children: [
          /* @__PURE__ */ jsx(Info, { size: 14, className: "mr-1.5" }),
          "About"
        ] })
      }
    ),
    /* @__PURE__ */ jsxs(DialogContent, { className: "sm:max-w-md", children: [
      /* @__PURE__ */ jsxs(DialogHeader, { children: [
        /* @__PURE__ */ jsx(DialogTitle, { children: "About Finance Calculator" }),
        /* @__PURE__ */ jsx(DialogDescription, { children: "A personal finance income allocation tool" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-4 text-sm", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2 text-foreground", children: "Privacy First" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "All your data is saved locally in your browser using IndexedDB. No information is sent to any server. Your financial data stays completely private and secure on your device." })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2 text-foreground", children: "Local Storage" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Settings and currency preferences are stored in localStorage, while allocation data uses IndexedDB. This ensures fast access and persistence across browser sessions." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "pt-2 border-t", children: /* @__PURE__ */ jsxs("p", { className: "text-xs text-muted-foreground/80", children: [
          "Built by ",
          /* @__PURE__ */ jsx("a", { href: "https://ircham.dev", target: "_blank", rel: "noopener noreferrer", className: "underline hover:text-foreground transition-colors", children: "ircham.dev" })
        ] }) })
      ] })
    ] })
  ] });
}
const appCss = "/assets/styles-BuwDDlgO.css";
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
        title: "Finance Calculator - Income Allocation"
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
  return /* @__PURE__ */ jsx(RootDocument, { children: /* @__PURE__ */ jsx(Outlet, {}) });
}
function RootDocument({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      /* @__PURE__ */ jsxs("div", { className: "relative min-h-screen bg-background flex flex-col", children: [
        /* @__PURE__ */ jsxs("div", { className: "pointer-events-none fixed inset-0 overflow-hidden", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/20 blur-3xl opacity-20" }),
          /* @__PURE__ */ jsx("div", { className: "absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent/20 blur-3xl opacity-20" })
        ] }),
        /* @__PURE__ */ jsx("header", { className: "sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-sm", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-6xl px-3 sm:px-4 md:px-6 py-3 sm:py-4 flex items-center justify-between gap-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsx("h1", { className: "text-xl sm:text-2xl font-bold truncate", children: "Finance Calculator" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm text-muted-foreground truncate", children: "Manage your income allocations" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(SettingsDialog, {}),
            /* @__PURE__ */ jsx(ThemeToggle, {})
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("main", { className: "flex-1 relative", children }),
        /* @__PURE__ */ jsx("footer", { className: "border-t border-border/40 bg-background/50 backdrop-blur-sm relative z-10", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-6xl px-3 sm:px-4 md:px-6 py-4 flex items-center justify-center", children: /* @__PURE__ */ jsx(AboutDialog, {}) }) })
      ] }),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
const $$splitComponentImporter = () => import("./index-Cb8IyA7n.mjs");
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
const routerCH2uEVgm = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  B: Button,
  D: Dialog,
  L: Label,
  R: RadioGroup,
  a: RadioGroupItem,
  b: DialogTrigger,
  c: cn,
  d: DialogContent,
  e: DialogHeader,
  f: formatNumber,
  g: DialogTitle,
  h: DialogDescription,
  i: formatCurrency,
  r: router,
  u: useSettings
});
export {
  Button as B,
  Dialog as D,
  Label as L,
  RadioGroup as R,
  cn as a,
  RadioGroupItem as b,
  createLucideIcon as c,
  DialogTrigger as d,
  DialogContent as e,
  DialogHeader as f,
  DialogTitle as g,
  DialogDescription as h,
  formatCurrency as i,
  formatNumber as j,
  routerCH2uEVgm as r,
  useSettings as u
};
