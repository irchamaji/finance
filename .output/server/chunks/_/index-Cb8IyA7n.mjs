import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import Dexie from "dexie";
import { c as createLucideIcon, a as cn, u as useSettings, L as Label, R as RadioGroup, b as RadioGroupItem, B as Button, D as Dialog, d as DialogTrigger, e as DialogContent, f as DialogHeader, g as DialogTitle, h as DialogDescription, i as formatCurrency, j as formatNumber } from "./router-CH2uEVgm.mjs";
import { Input as Input$1 } from "@base-ui/react/input";
import { ScrollArea as ScrollArea$1 } from "@base-ui/react/scroll-area";
import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cva } from "class-variance-authority";
import { Separator as Separator$1 } from "@base-ui/react/separator";
import "@tanstack/react-router";
import "@base-ui/react/button";
import "clsx";
import "tailwind-merge";
import "@base-ui/react/dialog";
import "@base-ui/react/radio";
import "@base-ui/react/radio-group";
import "zustand";
import "zustand/middleware";
const __iconNode$j = [
  [
    "path",
    {
      d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
      key: "k3hazp"
    }
  ]
];
const Book = createLucideIcon("book", __iconNode$j);
const __iconNode$i = [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
  ["path", { d: "M18 17V9", key: "2bz60n" }],
  ["path", { d: "M13 17V5", key: "1frdt8" }],
  ["path", { d: "M8 17v-3", key: "17ska0" }]
];
const ChartColumn = createLucideIcon("chart-column", __iconNode$i);
const __iconNode$h = [
  ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
  ["path", { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", key: "1b0p4s" }]
];
const DollarSign = createLucideIcon("dollar-sign", __iconNode$h);
const __iconNode$g = [
  ["rect", { x: "3", y: "8", width: "18", height: "4", rx: "1", key: "bkv52" }],
  ["path", { d: "M12 8v13", key: "1c76mn" }],
  ["path", { d: "M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7", key: "6wjy6b" }],
  [
    "path",
    {
      d: "M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",
      key: "1ihvrl"
    }
  ]
];
const Gift = createLucideIcon("gift", __iconNode$g);
const __iconNode$f = [
  [
    "path",
    {
      d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
      key: "mvr1a0"
    }
  ]
];
const Heart = createLucideIcon("heart", __iconNode$f);
const __iconNode$e = [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "r6nss1"
    }
  ]
];
const House = createLucideIcon("house", __iconNode$e);
const __iconNode$d = [
  [
    "path",
    {
      d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",
      key: "nnexq3"
    }
  ],
  ["path", { d: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12", key: "mt58a7" }]
];
const Leaf = createLucideIcon("leaf", __iconNode$d);
const __iconNode$c = [
  ["path", { d: "M3 5h.01", key: "18ugdj" }],
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 19h.01", key: "noohij" }],
  ["path", { d: "M8 5h13", key: "1pao27" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 19h13", key: "m83p4d" }]
];
const List = createLucideIcon("list", __iconNode$c);
const __iconNode$b = [
  [
    "path",
    {
      d: "M11 17h3v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a3.16 3.16 0 0 0 2-2h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1a5 5 0 0 0-2-4V3a4 4 0 0 0-3.2 1.6l-.3.4H11a6 6 0 0 0-6 6v1a5 5 0 0 0 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1z",
      key: "1piglc"
    }
  ],
  ["path", { d: "M16 10h.01", key: "1m94wz" }],
  ["path", { d: "M2 8v1a2 2 0 0 0 2 2h1", key: "1env43" }]
];
const PiggyBank = createLucideIcon("piggy-bank", __iconNode$b);
const __iconNode$a = [
  [
    "path",
    {
      d: "M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",
      key: "1v9wt8"
    }
  ]
];
const Plane = createLucideIcon("plane", __iconNode$a);
const __iconNode$9 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
];
const Plus = createLucideIcon("plus", __iconNode$9);
const __iconNode$8 = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ]
];
const Shield = createLucideIcon("shield", __iconNode$8);
const __iconNode$7 = [
  ["circle", { cx: "8", cy: "21", r: "1", key: "jimo8o" }],
  ["circle", { cx: "19", cy: "21", r: "1", key: "13723u" }],
  [
    "path",
    {
      d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
      key: "9zh506"
    }
  ]
];
const ShoppingCart = createLucideIcon("shopping-cart", __iconNode$7);
const __iconNode$6 = [
  ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2", key: "1yt0o3" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }]
];
const Smartphone = createLucideIcon("smartphone", __iconNode$6);
const __iconNode$5 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
];
const Target = createLucideIcon("target", __iconNode$5);
const __iconNode$4 = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
];
const Trash2 = createLucideIcon("trash-2", __iconNode$4);
const __iconNode$3 = [
  ["path", { d: "M16 7h6v6", key: "box55l" }],
  ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }]
];
const TrendingUp = createLucideIcon("trending-up", __iconNode$3);
const __iconNode$2 = [
  ["path", { d: "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2", key: "cjf0a3" }],
  ["path", { d: "M7 2v20", key: "1473qp" }],
  ["path", { d: "M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7", key: "j28e5" }]
];
const Utensils = createLucideIcon("utensils", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",
      key: "18etb6"
    }
  ],
  ["path", { d: "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4", key: "xoc0q4" }]
];
const Wallet = createLucideIcon("wallet", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
];
const Zap = createLucideIcon("zap", __iconNode);
class FinanceDB extends Dexie {
  allocations;
  constructor() {
    super("FinanceDB");
    this.version(1).stores({
      allocations: "++id, timestamp"
    });
  }
}
const db = new FinanceDB();
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ jsx(
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
  return /* @__PURE__ */ jsx(
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
  return /* @__PURE__ */ jsx(
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
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "card-title",
      className: cn("text-sm font-medium", className),
      ...props
    }
  );
}
function CardDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "card-description",
      className: cn("text-muted-foreground text-xs/relaxed", className),
      ...props
    }
  );
}
function CardContent({ className, ...props }) {
  return /* @__PURE__ */ jsx(
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
  if (remainingIncome < 0) {
    throw new Error("Total nominal allocations exceed income");
  }
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
  const [name, setName] = React.useState("");
  const [destination, setDestination] = React.useState("");
  const [allocationType, setAllocationType] = React.useState("proportion");
  const [value, setValue] = React.useState("");
  const [displayValue, setDisplayValue] = React.useState("");
  const [errors, setErrors] = React.useState([]);
  const handleValueChange = (e) => {
    const input = e.target.value;
    if (allocationType === "proportion") {
      setValue(input);
      setDisplayValue(input);
    } else {
      const numericValue = input.replace(/[^0-9.]/g, "");
      setValue(numericValue);
      setDisplayValue(numericValue);
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
  return /* @__PURE__ */ jsxs(Card, { className: "border-0 shadow-md lg:border", children: [
    /* @__PURE__ */ jsxs(CardHeader, { children: [
      /* @__PURE__ */ jsx(CardTitle, { className: "text-lg sm:text-xl", children: "Add Allocation" }),
      /* @__PURE__ */ jsx(CardDescription, { className: "text-xs sm:text-sm", children: "Create a new money allocation" })
    ] }),
    /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-3 sm:space-y-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 sm:space-y-2", children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "name", className: "text-xs sm:text-sm", children: "Allocation Name" }),
        /* @__PURE__ */ jsx(
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
      /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 sm:space-y-2", children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "destination", className: "text-xs sm:text-sm", children: "Destination" }),
        /* @__PURE__ */ jsx(
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
      /* @__PURE__ */ jsxs("div", { className: "space-y-3 sm:space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx(Label, { className: "text-xs sm:text-sm", children: "Type" }),
          /* @__PURE__ */ jsxs(RadioGroup, { value: allocationType, onValueChange: (val) => setAllocationType(val), className: "flex gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ jsx(RadioGroupItem, { value: "proportion", id: "proportion" }),
              /* @__PURE__ */ jsx(Label, { htmlFor: "proportion", className: "text-xs sm:text-sm font-normal cursor-pointer", children: "Proportion (%)" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ jsx(RadioGroupItem, { value: "nominal", id: "nominal" }),
              /* @__PURE__ */ jsx(Label, { htmlFor: "nominal", className: "text-xs sm:text-sm font-normal cursor-pointer", children: "Fixed Amount" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 sm:space-y-2", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "value", className: "text-xs sm:text-sm", children: allocationType === "proportion" ? "Percentage" : "Amount" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              id: "value",
              type: "text",
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
      errors.length > 0 && /* @__PURE__ */ jsx("div", { className: "rounded-md bg-destructive/10 p-2.5 sm:p-3", children: /* @__PURE__ */ jsx("ul", { className: "space-y-0.5 sm:space-y-1 text-xs sm:text-sm text-destructive", children: errors.map((error, i) => /* @__PURE__ */ jsxs("li", { children: [
        "• ",
        error
      ] }, i)) }) }),
      /* @__PURE__ */ jsxs(Button, { type: "submit", className: "w-full text-sm sm:text-base h-9 sm:h-10", children: [
        /* @__PURE__ */ jsx(Plus, { size: 16, className: "sm:block hidden" }),
        /* @__PURE__ */ jsx(Plus, { size: 14, className: "sm:hidden" }),
        /* @__PURE__ */ jsx("span", { className: "ml-1.5", children: "Add Allocation" })
      ] })
    ] }) })
  ] });
}
function ScrollArea({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    ScrollArea$1.Root,
    {
      "data-slot": "scroll-area",
      className: cn("relative", className),
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          ScrollArea$1.Viewport,
          {
            "data-slot": "scroll-area-viewport",
            className: "focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1",
            children
          }
        ),
        /* @__PURE__ */ jsx(ScrollBar, {}),
        /* @__PURE__ */ jsx(ScrollArea$1.Corner, {})
      ]
    }
  );
}
function ScrollBar({
  className,
  orientation = "vertical",
  ...props
}) {
  return /* @__PURE__ */ jsx(
    ScrollArea$1.Scrollbar,
    {
      "data-slot": "scroll-area-scrollbar",
      "data-orientation": orientation,
      orientation,
      className: cn(
        "data-horizontal:h-2.5 data-horizontal:flex-col data-horizontal:border-t data-horizontal:border-t-transparent data-vertical:h-full data-vertical:w-2.5 data-vertical:border-l data-vertical:border-l-transparent flex touch-none p-px transition-colors select-none",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx(
        ScrollArea$1.Thumb,
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
  const [open, setOpen] = React.useState(false);
  return /* @__PURE__ */ jsxs(Dialog, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsx(
      DialogTrigger,
      {
        render: /* @__PURE__ */ jsxs(Button, { variant: "outline", className: "w-full h-9 sm:h-10", children: [
          /* @__PURE__ */ jsx(List, { size: 16, className: "sm:block hidden" }),
          /* @__PURE__ */ jsx(List, { size: 14, className: "sm:hidden" }),
          /* @__PURE__ */ jsxs("span", { className: "ml-1.5", children: [
            "View Allocations (",
            allocations.length,
            ")"
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxs(DialogContent, { className: "sm:max-w-lg", children: [
      /* @__PURE__ */ jsxs(DialogHeader, { children: [
        /* @__PURE__ */ jsx(DialogTitle, { children: "Your Allocations" }),
        /* @__PURE__ */ jsxs(DialogDescription, { children: [
          allocations.length,
          " allocation",
          allocations.length !== 1 ? "s" : "",
          " configured"
        ] })
      ] }),
      /* @__PURE__ */ jsx(ScrollArea, { className: "h-96 w-full pr-4", children: allocations.length === 0 ? /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center h-full", children: /* @__PURE__ */ jsx("p", { className: "text-center text-muted-foreground text-xs sm:text-sm", children: "No allocations yet. Create one to get started!" }) }) : /* @__PURE__ */ jsx("div", { className: "space-y-2.5 sm:space-y-3", children: allocations.map((allocation) => /* @__PURE__ */ jsx(
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
  return /* @__PURE__ */ jsxs("div", { className: "group relative flex items-center gap-3 sm:gap-4 rounded-xl border border-border/60 bg-gradient-to-br from-card to-card/50 p-3.5 sm:p-4 hover:border-primary/40 hover:shadow-sm transition-all duration-200", children: [
    /* @__PURE__ */ jsxs("div", { className: "shrink-0 flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-primary/10 ring-1 ring-primary/20", children: [
      /* @__PURE__ */ jsx(IconComponent, { size: 18, className: "sm:block hidden text-primary" }),
      /* @__PURE__ */ jsx(IconComponent, { size: 16, className: "sm:hidden text-primary" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0 flex items-center justify-between gap-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-semibold text-sm sm:text-base truncate text-foreground", children: allocation.name }),
        /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm text-muted-foreground/80 truncate mt-0.5", children: allocation.destination })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "shrink-0 flex items-center gap-2", children: [
        allocation.proportion !== void 0 && allocation.proportion > 0 && /* @__PURE__ */ jsxs(Badge, { variant: "secondary", className: "text-xs font-semibold px-2 py-0.5 bg-primary/10 text-primary border-primary/20", children: [
          allocation.proportion,
          "%"
        ] }),
        allocation.nominal !== void 0 && allocation.nominal > 0 && /* @__PURE__ */ jsx(Badge, { variant: "secondary", className: "text-xs font-semibold px-2 py-0.5 bg-accent/10 text-accent-foreground border-accent/20", children: formatCurrency(allocation.nominal, currency) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(
      Button,
      {
        variant: "ghost",
        size: "icon",
        onClick: () => allocation.id && onDelete(allocation.id),
        className: "text-destructive hover:text-destructive hover:bg-destructive/10 shrink-0",
        children: [
          /* @__PURE__ */ jsx(Trash2, { size: 16, className: "sm:block hidden" }),
          /* @__PURE__ */ jsx(Trash2, { size: 14, className: "sm:hidden" })
        ]
      }
    )
  ] });
}
function Separator({
  className,
  orientation = "horizontal",
  ...props
}) {
  return /* @__PURE__ */ jsx(
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
  const [income, setIncome] = React.useState("");
  const [displayIncome, setDisplayIncome] = React.useState("");
  const [results, setResults] = React.useState([]);
  const [error, setError] = React.useState("");
  const handleIncomeChange = (e) => {
    const input = e.target.value;
    const numericValue = input.replace(/[^0-9.]/g, "");
    setIncome(numericValue);
    setDisplayIncome(numericValue);
  };
  const handleIncomeBlur = () => {
    if (income) {
      const formatted = formatNumber(income, currency);
      setDisplayIncome(formatted);
    }
  };
  const handleIncomeFocus = () => {
    setDisplayIncome(income);
  };
  const handleCalculate = () => {
    setError("");
    setResults([]);
    const incomeValue2 = parseFloat(income);
    if (!income || incomeValue2 <= 0) {
      setError("Please enter a valid income amount");
      return;
    }
    if (allocations.length === 0) {
      setError("Please add at least one allocation");
      return;
    }
    try {
      const calculatedResults = calculateAllocation(incomeValue2, allocations);
      setResults(calculatedResults);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Calculation failed");
    }
  };
  const totalAllocated = results.reduce((sum, r) => sum + r.amount, 0);
  const incomeValue = parseFloat(income) || 0;
  const remaining = incomeValue - totalAllocated;
  return /* @__PURE__ */ jsxs("div", { className: "space-y-4 sm:space-y-6", children: [
    /* @__PURE__ */ jsxs(Card, { className: "border-0 shadow-md lg:border", children: [
      /* @__PURE__ */ jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsxs(CardTitle, { className: "text-lg sm:text-xl flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(TrendingUp, { size: 18, className: "sm:block hidden text-primary" }),
          /* @__PURE__ */ jsx(TrendingUp, { size: 16, className: "sm:hidden text-primary" }),
          "Income Calculator"
        ] }),
        /* @__PURE__ */ jsx(CardDescription, { className: "text-xs sm:text-sm", children: "Enter your income to calculate allocations" })
      ] }),
      /* @__PURE__ */ jsxs(CardContent, { className: "space-y-3 sm:space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 sm:space-y-2", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "income", className: "text-xs sm:text-sm", children: "Received Income" }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row", children: [
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "income",
                type: "text",
                placeholder: "0",
                value: displayIncome,
                onChange: handleIncomeChange,
                onBlur: handleIncomeBlur,
                onFocus: handleIncomeFocus,
                className: "text-sm h-9 sm:h-10 flex-1"
              }
            ),
            /* @__PURE__ */ jsx(Button, { onClick: handleCalculate, className: "text-sm sm:text-base h-9 sm:h-10 sm:w-fit w-full", children: "Calculate" })
          ] })
        ] }),
        error && /* @__PURE__ */ jsx("div", { className: "rounded-md bg-destructive/10 p-2.5 sm:p-3 text-xs sm:text-sm text-destructive", children: error })
      ] })
    ] }),
    results.length > 0 && /* @__PURE__ */ jsxs(Card, { className: "border-0 shadow-md lg:border", children: [
      /* @__PURE__ */ jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsx(CardTitle, { className: "text-lg sm:text-xl", children: "Allocation Breakdown" }),
        /* @__PURE__ */ jsx(CardDescription, { className: "text-xs sm:text-sm", children: "Here's where your money will go" })
      ] }),
      /* @__PURE__ */ jsxs(CardContent, { className: "space-y-3 sm:space-y-4", children: [
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4", children: results.map((result, index) => {
          const IconComponent = getAllocationIcon(result.name);
          return /* @__PURE__ */ jsxs("div", { className: "space-y-2 rounded-lg border border-border/50 bg-muted/30 p-3 sm:p-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-2", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex-shrink-0 p-1.5 rounded-md bg-primary/10", children: [
                  /* @__PURE__ */ jsx(IconComponent, { size: 14, className: "sm:block hidden text-primary" }),
                  /* @__PURE__ */ jsx(IconComponent, { size: 12, className: "sm:hidden text-primary" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsx("h3", { className: "font-semibold text-xs sm:text-sm truncate", children: result.name }),
                  /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground truncate", children: result.destination })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "text-right flex-shrink-0", children: [
                /* @__PURE__ */ jsx("p", { className: "font-bold text-sm sm:text-base", children: formatCurrency(result.amount, currency) }),
                result.proportion && /* @__PURE__ */ jsxs("p", { className: "text-xs text-muted-foreground", children: [
                  result.proportion,
                  "%"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "h-1.5 sm:h-2 w-full overflow-hidden rounded-full bg-muted", children: /* @__PURE__ */ jsx(
              "div",
              {
                className: "h-full bg-primary transition-all duration-500",
                style: { width: `${result.amount / incomeValue * 100}%` }
              }
            ) })
          ] }, index);
        }) }),
        /* @__PURE__ */ jsx(Separator, { className: "my-3 sm:my-4" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-xs sm:text-sm", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between font-medium", children: [
            /* @__PURE__ */ jsx("span", { children: "Total Income" }),
            /* @__PURE__ */ jsx("span", { className: "font-bold", children: formatCurrency(incomeValue, currency) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between font-medium", children: [
            /* @__PURE__ */ jsx("span", { children: "Total Allocated" }),
            /* @__PURE__ */ jsx("span", { className: "font-bold", children: formatCurrency(totalAllocated, currency) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between pt-2 border-t", children: [
            /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Remaining" }),
            /* @__PURE__ */ jsx("span", { className: `font-bold text-sm sm:text-base ${remaining >= 0 ? "text-green-600 dark:text-green-400" : "text-destructive"}`, children: formatCurrency(remaining, currency) })
          ] })
        ] })
      ] })
    ] })
  ] });
}
function FinanceCalculator() {
  const [allocations, setAllocations] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
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
    return /* @__PURE__ */ jsx("div", { className: "min-h-screen flex items-center justify-center px-4 sm:px-6", children: /* @__PURE__ */ jsx(Card, { className: "w-full max-w-sm", children: /* @__PURE__ */ jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsx("p", { className: "text-center text-muted-foreground text-sm sm:text-base", children: "Loading..." }) }) }) });
  }
  return /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-6xl px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "space-y-4 sm:space-y-6 lg:col-span-1", children: [
      /* @__PURE__ */ jsx(AllocationForm, { onAdd: handleAddAllocation }),
      /* @__PURE__ */ jsx(AllocationsDialog, { allocations, onDelete: handleDeleteAllocation })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "space-y-4 sm:space-y-6 md:space-y-8 lg:col-span-2", children: allocations.length > 0 && /* @__PURE__ */ jsx(IncomeCalculator, { allocations }) })
  ] }) });
}
function App() {
  return /* @__PURE__ */ jsx(FinanceCalculator, {});
}
export {
  App as component
};
