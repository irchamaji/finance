import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { D as Dexie } from "../_libs/dexie.mjs";
import { c as cn, u as useSettings, L as Label, R as RadioGroup, a as RadioGroupItem, B as Button, D as Dialog, b as DialogTrigger, d as DialogContent, e as DialogHeader, g as DialogTitle, h as DialogDescription, f as formatNumber, i as formatCurrency } from "./router-DcGnJnYD.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { P as Plus, L as List, T as TrendingUp, X, b as Trash2, H as House, c as Leaf, D as DollarSign, W as Wallet, d as Shield, e as Plane, G as Gift, f as Heart, B as Book, g as Smartphone, Z as Zap, h as ShoppingCart, U as Utensils, i as ChartColumn, j as PiggyBank, k as Target } from "../_libs/lucide-react.mjs";
import { R as ResponsiveContainer, P as PieChart, a as Pie, C as Cell, T as Tooltip } from "../_libs/recharts.mjs";
import { I as Input$1, S as ScrollAreaRoot, j as ScrollAreaViewport, k as ScrollAreaCorner, l as Separator$1, m as ScrollAreaScrollbar, n as ScrollAreaThumb, u as useRender, o as mergeProps } from "../_libs/base-ui__react.mjs";
import "../_libs/tanstack__react-router.mjs";
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
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/zustand.mjs";
import "../_libs/tabbable.mjs";
import "../_libs/floating-ui__utils.mjs";
import "../_libs/base-ui__utils.mjs";
import "../_libs/reselect.mjs";
import "../_libs/use-sync-external-store.mjs";
import "../_libs/es-toolkit.mjs";
import "../_libs/d3-shape.mjs";
import "../_libs/d3-path.mjs";
import "../_libs/react-is.mjs";
import "../_libs/reduxjs__toolkit.mjs";
import "../_libs/redux.mjs";
import "../_libs/immer.mjs";
import "../_libs/redux-thunk.mjs";
import "../_libs/react-redux.mjs";
import "../_libs/victory-vendor.mjs";
import "../_libs/d3-scale.mjs";
import "../_libs/internmap.mjs";
import "../_libs/d3-array.mjs";
import "../_libs/d3-time-format.mjs";
import "../_libs/d3-time.mjs";
import "../_libs/d3-interpolate.mjs";
import "../_libs/d3-color.mjs";
import "../_libs/d3-format.mjs";
import "../_libs/decimal.js-light.mjs";
import "../_libs/eventemitter3.mjs";
class FinanceDB extends Dexie {
  allocations;
  incomes;
  constructor() {
    super("FinanceDB");
    this.version(1).stores({
      allocations: "++id, timestamp"
    });
    this.version(2).stores({
      allocations: "++id, timestamp",
      incomes: "++id, timestamp"
    });
  }
}
const db = new FinanceDB();
async function getAllIncomes() {
  return await db.incomes.orderBy("id").toArray();
}
async function addIncome(income) {
  return await db.incomes.add({
    ...income,
    timestamp: Date.now()
  });
}
async function updateIncome(id, updates) {
  return await db.incomes.update(id, updates);
}
async function deleteIncome(id) {
  await db.incomes.delete(id);
}
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Input$1,
    {
      type,
      "data-slot": "input",
      className: cn(
        "bg-input/20 dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/30 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 h-7 rounded-md border px-2 py-0.5 text-sm transition-colors file:h-6 file:text-xs/relaxed file:font-medium focus-visible:ring-[2px] aria-invalid:ring-[2px] md:text-xs/relaxed file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props
    }
  );
}
function Card({
  className,
  size = "default",
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "card",
      "data-size": size,
      className: cn("ring-foreground/10 bg-card text-card-foreground gap-4 overflow-hidden rounded-lg py-4 text-xs/relaxed ring-1 has-[>img:first-child]:pt-0 data-[size=sm]:gap-3 data-[size=sm]:py-3 *:[img:first-child]:rounded-t-lg *:[img:last-child]:rounded-b-lg group/card flex flex-col", className),
      ...props
    }
  );
}
function CardHeader({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "card-header",
      className: cn(
        "gap-1 rounded-t-lg px-4 group-data-[size=sm]/card:px-3 [.border-b]:pb-4 group-data-[size=sm]/card:[.border-b]:pb-3 group/card-header @container/card-header grid auto-rows-min items-start has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto]",
        className
      ),
      ...props
    }
  );
}
function CardTitle({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "card-title",
      className: cn("text-sm font-medium", className),
      ...props
    }
  );
}
function CardDescription({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "card-description",
      className: cn("text-muted-foreground text-xs/relaxed", className),
      ...props
    }
  );
}
function CardContent({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "card-content",
      className: cn("px-4 group-data-[size=sm]/card:px-3", className),
      ...props
    }
  );
}
const iconMap = {
  "emergency": PiggyBank,
  "emergency fund": PiggyBank,
  "fund": Target,
  "savings": PiggyBank,
  "save": PiggyBank,
  "invest": TrendingUp,
  "investment": TrendingUp,
  "stock": ChartColumn,
  "portfolio": ChartColumn,
  "food": Utensils,
  "groceries": ShoppingCart,
  "shopping": ShoppingCart,
  "buy": ShoppingCart,
  "expense": Wallet,
  "bill": House,
  "utilities": Zap,
  "phone": Smartphone,
  "internet": Smartphone,
  "education": Book,
  "course": Book,
  "health": Heart,
  "medical": Heart,
  "gym": Heart,
  "entertainment": Gift,
  "fun": Gift,
  "movie": Gift,
  "travel": Plane,
  "vacation": Plane,
  "insurance": Shield,
  "personal": Wallet,
  "miscellaneous": DollarSign,
  "other": DollarSign,
  "charity": Leaf,
  "donation": Leaf,
  "monthly": House
};
function getAllocationIcon(name) {
  const lowerName = name.toLowerCase();
  if (iconMap[lowerName]) {
    return iconMap[lowerName];
  }
  for (const [key, icon] of Object.entries(iconMap)) {
    if (lowerName.includes(key)) {
      return icon;
    }
  }
  return Wallet;
}
function calculateAllocation(income, allocations) {
  if (income <= 0 || allocations.length === 0) {
    return [];
  }
  const proportionAllocations = allocations.filter((a) => a.proportion !== void 0 && a.proportion > 0);
  const nominalAllocations = allocations.filter((a) => a.nominal !== void 0 && a.nominal > 0);
  const totalProportion = proportionAllocations.reduce((sum, a) => sum + (a.proportion || 0), 0);
  if (totalProportion > 100) {
    throw new Error("Total proportion cannot exceed 100%");
  }
  const totalNominal = nominalAllocations.reduce((sum, a) => sum + (a.nominal || 0), 0);
  const remainingIncome = income - totalNominal;
  const results = allocations.map((allocation) => {
    let amount = 0;
    if (allocation.nominal && allocation.nominal > 0) {
      amount = allocation.nominal;
    } else if (allocation.proportion && allocation.proportion > 0) {
      amount = allocation.proportion / 100 * remainingIncome;
    }
    return {
      ...allocation,
      amount: Math.round(amount * 100) / 100
      // Round to 2 decimal places
    };
  });
  return results;
}
function validateAllocation(allocation) {
  const errors = [];
  if (!allocation.name || allocation.name.trim() === "") {
    errors.push("Name is required");
  }
  if (!allocation.destination || allocation.destination.trim() === "") {
    errors.push("Destination is required");
  }
  const hasProportion = allocation.proportion !== void 0 && allocation.proportion > 0;
  const hasNominal = allocation.nominal !== void 0 && allocation.nominal > 0;
  if (!hasProportion && !hasNominal) {
    errors.push("Either proportion or nominal amount must be set");
  }
  if (hasProportion) {
    if (allocation.proportion < 0 || allocation.proportion > 100) {
      errors.push("Proportion must be between 0 and 100");
    }
  }
  if (hasNominal) {
    if (allocation.nominal < 0) {
      errors.push("Nominal amount must be positive");
    }
  }
  return errors;
}
function AllocationForm({ onAdd }) {
  const { currency } = useSettings();
  const [name, setName] = reactExports.useState("");
  const [destination, setDestination] = reactExports.useState("");
  const [allocationType, setAllocationType] = reactExports.useState("proportion");
  const [value, setValue] = reactExports.useState("");
  const [displayValue, setDisplayValue] = reactExports.useState("");
  const [errors, setErrors] = reactExports.useState([]);
  const handleValueChange = (e) => {
    const input = e.target.value;
    if (input === "") {
      setValue("");
      setDisplayValue("");
      return;
    }
    const decimalRegex = /^\d*\.?\d*$/;
    if (!decimalRegex.test(input)) {
      return;
    }
    if (allocationType === "proportion") {
      setValue(input);
      setDisplayValue(input);
    } else {
      setValue(input);
      setDisplayValue(input);
    }
  };
  const handleValueBlur = () => {
    if (allocationType === "nominal" && value) {
      const formatted = formatNumber(value, currency);
      setDisplayValue(formatted);
    }
  };
  const handleValueFocus = () => {
    if (allocationType === "nominal") {
      setDisplayValue(value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    const allocation = {
      name,
      destination,
      proportion: allocationType === "proportion" ? parseFloat(value) : void 0,
      nominal: allocationType === "nominal" ? parseFloat(value) : void 0,
      timestamp: Date.now()
    };
    const validationErrors = validateAllocation(allocation);
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }
    onAdd(allocation);
    setName("");
    setDestination("");
    setValue("");
    setDisplayValue("");
    setAllocationType("proportion");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-0 shadow-md lg:border", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-lg sm:text-xl", children: "Add Allocation" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { className: "text-xs sm:text-sm", children: "Create a new money allocation" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-3 sm:space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 sm:space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "name", className: "text-xs sm:text-sm", children: "Allocation Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            id: "name",
            placeholder: "e.g., Emergency Fund",
            value: name,
            onChange: (e) => setName(e.target.value),
            className: "text-sm h-9 sm:h-10"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 sm:space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "destination", className: "text-xs sm:text-sm", children: "Destination" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            id: "destination",
            placeholder: "e.g., Savings Account",
            value: destination,
            onChange: (e) => setDestination(e.target.value),
            className: "text-sm h-9 sm:h-10"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 sm:space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs sm:text-sm", children: "Type" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(RadioGroup, { value: allocationType, onValueChange: (val) => setAllocationType(val), className: "flex gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(RadioGroupItem, { value: "proportion", id: "proportion" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "proportion", className: "text-xs sm:text-sm font-normal cursor-pointer", children: "Proportion (%)" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(RadioGroupItem, { value: "nominal", id: "nominal" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "nominal", className: "text-xs sm:text-sm font-normal cursor-pointer", children: "Fixed Amount" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 sm:space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "value", className: "text-xs sm:text-sm", children: allocationType === "proportion" ? "Percentage" : "Amount" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "value",
              type: "text",
              inputMode: "decimal",
              placeholder: allocationType === "proportion" ? "0-100" : "0",
              value: allocationType === "proportion" ? value : displayValue,
              onChange: handleValueChange,
              onBlur: handleValueBlur,
              onFocus: handleValueFocus,
              className: "text-sm h-9 sm:h-10"
            }
          )
        ] })
      ] }),
      errors.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-md bg-destructive/10 p-2.5 sm:p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-0.5 sm:space-y-1 text-xs sm:text-sm text-destructive", children: errors.map((error, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        "• ",
        error
      ] }, i)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "submit", className: "w-full text-sm sm:text-base h-9 sm:h-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 16, className: "sm:block hidden" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 14, className: "sm:hidden" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1.5", children: "Add Allocation" })
      ] })
    ] }) })
  ] });
}
function ScrollArea({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    ScrollAreaRoot,
    {
      "data-slot": "scroll-area",
      className: cn("relative", className),
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ScrollAreaViewport,
          {
            "data-slot": "scroll-area-viewport",
            className: "focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1",
            children
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollBar, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollAreaCorner, {})
      ]
    }
  );
}
function ScrollBar({
  className,
  orientation = "vertical",
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ScrollAreaScrollbar,
    {
      "data-slot": "scroll-area-scrollbar",
      "data-orientation": orientation,
      orientation,
      className: cn(
        "data-horizontal:h-2.5 data-horizontal:flex-col data-horizontal:border-t data-horizontal:border-t-transparent data-vertical:h-full data-vertical:w-2.5 data-vertical:border-l data-vertical:border-l-transparent flex touch-none p-px transition-colors select-none",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        ScrollAreaThumb,
        {
          "data-slot": "scroll-area-thumb",
          className: "rounded-full bg-border relative flex-1"
        }
      )
    }
  );
}
const badgeVariants = cva(
  "h-5 gap-1 rounded-full border border-transparent px-2 py-0.5 text-[0.625rem] font-medium transition-all has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&>svg]:size-2.5! inline-flex items-center justify-center w-fit whitespace-nowrap shrink-0 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-colors overflow-hidden group/badge",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
        secondary: "bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80",
        destructive: "bg-destructive/10 [a]:hover:bg-destructive/20 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 text-destructive dark:bg-destructive/20",
        outline: "border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground bg-input/20 dark:bg-input/30",
        ghost: "hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50",
        link: "text-primary underline-offset-4 hover:underline"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({
  className,
  variant = "default",
  render,
  ...props
}) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps(
      {
        className: cn(badgeVariants({ className, variant }))
      },
      props
    ),
    render,
    state: {
      slot: "badge",
      variant
    }
  });
}
function AllocationsDialog({ allocations, onDelete }) {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      DialogTrigger,
      {
        render: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", className: "w-full h-9 sm:h-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(List, { size: 16, className: "sm:block hidden" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(List, { size: 14, className: "sm:hidden" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-1.5", children: [
            "View Allocations (",
            allocations.length,
            ")"
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "sm:max-w-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Your Allocations" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogDescription, { children: [
          allocations.length,
          " allocation",
          allocations.length !== 1 ? "s" : "",
          " configured"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollArea, { className: "h-96 w-full pr-4", children: allocations.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-muted-foreground text-xs sm:text-sm", children: "No allocations yet. Create one to get started!" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2.5 sm:space-y-3", children: allocations.map((allocation) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        AllocationItem,
        {
          allocation,
          onDelete
        },
        allocation.id
      )) }) })
    ] })
  ] });
}
function AllocationItem({ allocation, onDelete }) {
  const { currency } = useSettings();
  const IconComponent = getAllocationIcon(allocation.name);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative flex items-center gap-3 sm:gap-4 rounded-xl border border-border/60 bg-linear-to-br from-card to-card/50 p-3.5 sm:p-4 hover:border-primary/40 hover:shadow-sm transition-all duration-200", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "shrink-0 flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-primary/10 ring-1 ring-primary/20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(IconComponent, { size: 18, className: "sm:block hidden text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(IconComponent, { size: 16, className: "sm:hidden text-primary" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0 flex items-center justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-sm sm:text-base truncate text-foreground", children: allocation.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm text-muted-foreground/80 truncate mt-0.5", children: allocation.destination })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "shrink-0 flex items-center gap-2", children: [
        allocation.proportion !== void 0 && allocation.proportion > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", className: "text-xs font-semibold px-2 py-0.5 bg-primary/10 text-primary border-primary/20", children: [
          allocation.proportion,
          "%"
        ] }),
        allocation.nominal !== void 0 && allocation.nominal > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-xs font-semibold px-2 py-0.5 bg-accent/10 text-accent-foreground border-accent/20", children: formatCurrency(allocation.nominal, currency) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        variant: "ghost",
        size: "icon",
        onClick: () => allocation.id && onDelete(allocation.id),
        className: "text-destructive hover:text-destructive hover:bg-destructive/10 shrink-0",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 16, className: "sm:block hidden" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 14, className: "sm:hidden" })
        ]
      }
    )
  ] });
}
function AllocationStats({ allocations }) {
  const { currency } = useSettings();
  const [incomes, setIncomes] = reactExports.useState([]);
  reactExports.useEffect(() => {
    let mounted = true;
    const loadIncomes = async () => {
      const dbIncomes = await getAllIncomes();
      if (mounted) {
        setIncomes(dbIncomes);
      }
    };
    loadIncomes();
    const handleStorageChange = () => loadIncomes();
    window.addEventListener("dexie-change", handleStorageChange);
    return () => {
      mounted = false;
      window.removeEventListener("dexie-change", handleStorageChange);
    };
  }, []);
  const incomeValue = reactExports.useMemo(() => {
    return incomes.reduce((sum, income) => sum + (parseFloat(income.value) || 0), 0);
  }, [incomes]);
  const results = reactExports.useMemo(() => {
    if (incomeValue <= 0 || allocations.length === 0) return [];
    try {
      const calculatedResults = calculateAllocation(incomeValue, allocations);
      return calculatedResults.sort((a, b) => b.amount - a.amount);
    } catch {
      return [];
    }
  }, [incomeValue, allocations]);
  const totalAllocated = reactExports.useMemo(() => {
    return results.reduce((sum, r) => sum + r.amount, 0);
  }, [results]);
  const remaining = reactExports.useMemo(() => {
    return incomeValue - totalAllocated;
  }, [incomeValue, totalAllocated]);
  const chartData = reactExports.useMemo(() => {
    if (results.length === 0) return [];
    const allocationsData = results.map((result) => ({
      name: result.name,
      value: result.amount,
      allocation: result
    }));
    return [
      ...allocationsData,
      ...remaining > 0 ? [{ name: "Remaining", value: remaining, allocation: null }] : []
    ];
  }, [results, remaining]);
  const getAllocationColors = (count) => {
    const colors = [];
    for (let i = 0; i < count; i++) {
      const intensity = Math.floor(80 + i * 120 / Math.max(count - 1, 1));
      colors.push(`rgb(${intensity}, ${intensity}, ${intensity})`);
    }
    return colors;
  };
  const allocationColors = reactExports.useMemo(() => {
    const count = results.length;
    return getAllocationColors(count);
  }, [results.length]);
  const getColor = (index, name) => {
    if (name === "Remaining") {
      return "rgb(34, 197, 94)";
    }
    return allocationColors[index] || "#666";
  };
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0];
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg border bg-background p-2 shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium", children: data.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: formatCurrency(data.value, currency) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
          (data.value / incomeValue * 100).toFixed(1),
          "%"
        ] })
      ] }) });
    }
    return null;
  };
  if (incomeValue <= 0 || allocations.length === 0) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-0 shadow-md lg:border", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-lg sm:text-xl flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { size: 18, className: "sm:block hidden text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { size: 16, className: "sm:hidden text-primary" }),
        "Allocation Overview"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { className: "text-xs sm:text-sm", children: "Visual breakdown of your money allocation" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 300, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(PieChart, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Pie,
          {
            data: chartData,
            cx: "50%",
            cy: "50%",
            labelLine: false,
            outerRadius: 100,
            fill: "#8884d8",
            dataKey: "value",
            children: chartData.map((entry, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: getColor(index, entry.name) }, `cell-${index}`))
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { content: /* @__PURE__ */ jsxRuntimeExports.jsx(CustomTooltip, {}) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 text-xs sm:text-sm", children: remaining !== 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between pt-2 border-t", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: remaining >= 0 ? "Remaining" : "Deficit" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `font-bold text-sm sm:text-base ${remaining >= 0 ? "text-green-600 dark:text-green-400" : "text-destructive"}`, children: [
          (Math.abs(remaining) / incomeValue * 100).toFixed(1),
          "%"
        ] })
      ] }) })
    ] })
  ] });
}
function Separator({
  className,
  orientation = "horizontal",
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Separator$1,
    {
      "data-slot": "separator",
      orientation,
      className: cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px data-[orientation=vertical]:self-stretch",
        className
      ),
      ...props
    }
  );
}
function IncomeCalculator({ allocations }) {
  const { currency } = useSettings();
  const [incomes, setIncomes] = reactExports.useState([]);
  const [results, setResults] = reactExports.useState([]);
  const [error, setError] = reactExports.useState("");
  const notifyIncomeChange = reactExports.useCallback(() => {
    window.dispatchEvent(new CustomEvent("dexie-change"));
  }, []);
  reactExports.useEffect(() => {
    const loadIncomes = async () => {
      const dbIncomes = await getAllIncomes();
      if (dbIncomes.length === 0) {
        const id = await addIncome({ value: "", displayValue: "", description: "" });
        setIncomes([{ id, value: "", displayValue: "", description: "", timestamp: Date.now() }]);
      } else {
        setIncomes(dbIncomes);
      }
    };
    loadIncomes();
  }, []);
  reactExports.useEffect(() => {
    const totalIncome = incomes.reduce((sum, income) => sum + (parseFloat(income.value) || 0), 0);
    if (totalIncome <= 0 || allocations.length === 0) {
      setResults([]);
      setError("");
      return;
    }
    try {
      const calculatedResults = calculateAllocation(totalIncome, allocations);
      const sortedResults = calculatedResults.sort((a, b) => b.amount - a.amount);
      setResults(sortedResults);
      setError("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Calculation failed");
      setResults([]);
    }
  }, [incomes, allocations]);
  const handleIncomeChange = reactExports.useCallback(async (id, e) => {
    const input = e.target.value;
    const numericValue = input.replace(/[^0-9.]/g, "");
    await updateIncome(id, { value: numericValue, displayValue: numericValue });
    const updated = await getAllIncomes();
    setIncomes(updated);
    notifyIncomeChange();
  }, [notifyIncomeChange]);
  const handleDescriptionChange = reactExports.useCallback(async (id, e) => {
    const value = e.target.value;
    await updateIncome(id, { description: value });
    const updated = await getAllIncomes();
    setIncomes(updated);
    notifyIncomeChange();
  }, [notifyIncomeChange]);
  const handleIncomeBlur = reactExports.useCallback(async (id) => {
    const income = incomes.find((i) => i.id === id);
    if (income?.value) {
      const formatted = formatNumber(income.value, currency);
      await updateIncome(id, { displayValue: formatted });
      const updated = await getAllIncomes();
      setIncomes(updated);
      notifyIncomeChange();
    }
  }, [incomes, currency, notifyIncomeChange]);
  const handleIncomeFocus = reactExports.useCallback(async (id) => {
    const income = incomes.find((i) => i.id === id);
    if (income) {
      await updateIncome(id, { displayValue: income.value });
      const updated = await getAllIncomes();
      setIncomes(updated);
      notifyIncomeChange();
    }
  }, [incomes, notifyIncomeChange]);
  const handleAddIncome = async () => {
    await addIncome({ value: "", displayValue: "", description: "" });
    const updated = await getAllIncomes();
    setIncomes(updated);
    notifyIncomeChange();
  };
  const handleRemoveIncome = async (id) => {
    if (incomes.length > 1) {
      await deleteIncome(id);
      const updated = await getAllIncomes();
      setIncomes(updated);
      notifyIncomeChange();
    }
  };
  const totalAllocated = results.reduce((sum, r) => sum + r.amount, 0);
  const incomeValue = incomes.reduce((sum, income) => sum + (parseFloat(income.value) || 0), 0);
  const remaining = incomeValue - totalAllocated;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 sm:space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-0 shadow-md lg:border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-lg sm:text-xl flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { size: 18, className: "sm:block hidden text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { size: 16, className: "sm:hidden text-primary" }),
          "Income Calculator"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { className: "text-xs sm:text-sm", children: "Enter your income(s) to calculate allocations" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-3 sm:space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 sm:space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "income", className: "text-xs sm:text-sm", children: "Received Incomes" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: incomes.map((income, index) => {
            if (!income.id) return null;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "text",
                  placeholder: "Description (optional)",
                  value: income.description,
                  onChange: (e) => handleDescriptionChange(income.id, e),
                  className: "text-sm h-9 sm:h-10 flex-1"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: index === 0 ? "income" : void 0,
                  type: "text",
                  placeholder: "0",
                  value: income.displayValue,
                  onChange: (e) => handleIncomeChange(income.id, e),
                  onBlur: () => handleIncomeBlur(income.id),
                  onFocus: () => handleIncomeFocus(income.id),
                  className: "text-sm h-9 sm:h-10 flex-1"
                }
              ),
              incomes.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  type: "button",
                  variant: "ghost",
                  size: "icon",
                  onClick: () => handleRemoveIncome(income.id),
                  className: "h-9 sm:h-10 w-9 sm:w-10 shrink-0 text-destructive hover:text-destructive",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 16 })
                }
              )
            ] }, income.id);
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mt-2 items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex items-center justify-between rounded-md text-primary bg-muted/30 px-2 sm:px-2 h-8 sm:h-10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs sm:text-sm font-medium", children: "Total Income" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm sm:text-base font-bold", children: formatCurrency(incomeValue, currency) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "button",
                variant: "outline",
                size: "icon",
                onClick: handleAddIncome,
                className: "h-9 sm:h-10 w-9 sm:w-10 shrink-0",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 16 })
              }
            )
          ] })
        ] }),
        error && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-md bg-destructive/10 p-2.5 sm:p-3 text-xs sm:text-sm text-destructive", children: error })
      ] })
    ] }),
    results.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-0 shadow-md lg:border", id: "allocation-results", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-lg sm:text-xl", children: "Allocation Breakdown" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { className: "text-xs sm:text-sm", children: "Here's where your money will go" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-3 sm:space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4", children: results.map((result, index) => {
          const IconComponent = getAllocationIcon(result.name);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 rounded-lg border border-border/50 bg-muted/30 p-3 sm:p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "shrink-0 p-1.5 rounded-md bg-primary/10", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(IconComponent, { size: 14, className: "sm:block hidden text-primary" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(IconComponent, { size: 12, className: "sm:hidden text-primary" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-xs sm:text-sm truncate", children: result.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground truncate", children: result.destination })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right shrink-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-sm sm:text-base", children: formatCurrency(result.amount, currency) }),
                result.proportion && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                  result.proportion,
                  "%"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 sm:h-2 w-full overflow-hidden rounded-full bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "h-full bg-primary transition-all duration-500",
                style: { width: `${result.amount / incomeValue * 100}%` }
              }
            ) })
          ] }, index);
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "my-3 sm:my-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-xs sm:text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between font-medium", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Total Income" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: formatCurrency(incomeValue, currency) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between font-medium", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Total Allocated" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: formatCurrency(totalAllocated, currency) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between pt-2 border-t", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: remaining >= 0 ? "Remaining" : "Deficit" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-bold text-sm sm:text-base ${remaining >= 0 ? "text-green-600 dark:text-green-400" : "text-destructive"}`, children: formatCurrency(Math.abs(remaining), currency) })
          ] })
        ] })
      ] })
    ] })
  ] });
}
function FinanceCalculator() {
  const [allocations, setAllocations] = reactExports.useState([]);
  const [isLoading, setIsLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    const loadAllocations = async () => {
      try {
        const data = await db.allocations.toArray();
        setAllocations(data);
      } catch (error) {
        console.error("Failed to load allocations:", error);
      } finally {
        setIsLoading(false);
      }
    };
    loadAllocations();
  }, []);
  const handleAddAllocation = async (allocation) => {
    try {
      const id = await db.allocations.add(allocation);
      setAllocations([...allocations, { ...allocation, id: String(id) }]);
    } catch (error) {
      console.error("Failed to add allocation:", error);
    }
  };
  const handleDeleteAllocation = async (id) => {
    try {
      await db.allocations.delete(Number(id));
      setAllocations(allocations.filter((a) => a.id !== id));
    } catch (error) {
      console.error("Failed to delete allocation:", error);
    }
  };
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen flex items-center justify-center px-4 sm:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "w-full max-w-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-muted-foreground text-sm sm:text-base", children: "Loading..." }) }) }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto max-w-6xl px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 sm:space-y-6 lg:col-span-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AllocationForm, { onAdd: handleAddAllocation }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AllocationsDialog, { allocations, onDelete: handleDeleteAllocation }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AllocationStats, { allocations })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4 sm:space-y-6 md:space-y-8 lg:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(IncomeCalculator, { allocations }) })
  ] }) });
}
function App() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(FinanceCalculator, {});
}
export {
  App as component
};
