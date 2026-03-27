# Finance Calculator — Full Project Documentation

A comprehensive technical and business reference for the **Finance Calculator** project.

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Tech Stack](#2-tech-stack)
3. [Project Structure](#3-project-structure)
4. [Getting Started](#4-getting-started)
5. [Business Logic](#5-business-logic)
6. [Database Schema](#6-database-schema)
7. [State Management](#7-state-management)
8. [Components](#8-components)
9. [Routing & Layout](#9-routing--layout)
10. [Styling & Theming](#10-styling--theming)
11. [Currency Support](#11-currency-support)
12. [Icon System](#12-icon-system)
13. [Available Scripts](#13-available-scripts)
14. [Configuration Files](#14-configuration-files)
15. [Browser Support](#15-browser-support)
16. [Privacy & Data Storage](#16-privacy--data-storage)

---

## 1. Project Overview

**Finance Calculator** is a client-side personal finance income allocation tool. Users define allocation rules (percentage-based or fixed-amount) and the app calculates where every rupiah / dollar / euro of their income goes.

**Key characteristics:**

- **Single-page application** — one route, one purpose
- **Zero server communication** — all data lives in the browser (IndexedDB)
- **Privacy-first** — no analytics, no telemetry, no authentication
- **Offline capable** — works entirely from local browser storage
- **Experimental / portfolio project** — not targeting end users commercially

---

## 2. Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | TanStack Start (SSR-capable React meta-framework) | 1.132.0 |
| UI Library | React | 19.2.0 |
| Language | TypeScript | 5.7.2 |
| Build Tool | Vite | 7.1.7 |
| Package Manager | **Bun** (not npm/yarn) | latest |
| Styling | TailwindCSS v4 | 4.0.6 |
| UI Components | shadcn/ui (Base UI primitives) | latest |
| Icons | Lucide React (1500+ SVG icons) | 0.547.0 |
| Database | Dexie.js (IndexedDB wrapper) | 4.2.1 |
| State Management | Zustand (with `persist` middleware) | 5.0.9 |
| Charts | Recharts | 3.6.0 |
| Routing | TanStack React Router | 1.132.0 |
| Testing | Vitest + Testing Library | latest |
| Linting | ESLint (`@tanstack/eslint-config`) | latest |
| Formatting | Prettier | 3.5.3 |
| Font | Inter Variable (`@fontsource-variable/inter`) | 5.2.8 |
| Server | Nitro | latest |

> **Important:** Always use `bun` instead of `npm` or `yarn` for installing packages and running scripts.

---

## 3. Project Structure

```
finance/
├── src/
│   ├── components/
│   │   ├── finance-calculator.tsx    # Root app component — orchestrates layout & DB calls
│   │   ├── allocation-form.tsx       # Form to add a new allocation
│   │   ├── income-calculator.tsx     # Income inputs + calculated results display
│   │   ├── allocation-stats.tsx      # Pie chart visualization of allocation breakdown
│   │   ├── allocations-dialog.tsx    # Dialog to view & delete saved allocations
│   │   ├── settings-dialog.tsx       # Currency preference picker
│   │   ├── theme-toggle.tsx          # Dark / light mode toggle button
│   │   ├── about-dialog.tsx          # "About" info modal
│   │   └── ui/                       # shadcn/ui primitives (button, input, card, …)
│   │       ├── alert-dialog.tsx
│   │       ├── badge.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── combobox.tsx
│   │       ├── dialog.tsx
│   │       ├── dropdown-menu.tsx
│   │       ├── field.tsx
│   │       ├── input-group.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── radio-group.tsx
│   │       ├── scroll-area.tsx
│   │       ├── select.tsx
│   │       ├── separator.tsx
│   │       └── textarea.tsx
│   ├── lib/
│   │   ├── database.ts               # Dexie DB class, interfaces, CRUD helpers
│   │   ├── finance.ts                # Calculation engine, validation, icon mapping
│   │   ├── settings.ts               # Zustand settings store + currency formatters
│   │   └── utils.ts                  # `cn()` TailwindCSS class merger helper
│   ├── routes/
│   │   ├── __root.tsx                # Root layout (header, footer, background FX)
│   │   └── index.tsx                 # `/` home route — renders FinanceCalculator
│   ├── router.tsx                    # TanStack Router instance
│   ├── routeTree.gen.ts              # Auto-generated route tree (do not edit manually)
│   └── styles.css                    # Global CSS variables, Tailwind base, theme tokens
├── public/                           # Static assets
├── components.json                   # shadcn/ui configuration
├── eslint.config.js
├── prettier.config.js
├── tsconfig.json
├── vite.config.ts
├── package.json
└── bun.lock
```

---

## 4. Getting Started

### Prerequisites

- **Bun** — [install Bun](https://bun.sh/docs/installation)

### Install & Run

```bash
# Install all dependencies
bun install

# Start the development server (http://localhost:3000)
bun run dev
```

### Build & Preview

```bash
bun run build       # Production build
bun run preview     # Preview the production build locally
```

---

## 5. Business Logic

All calculation logic lives in `src/lib/finance.ts`.

### 5.1 How Income Allocation Works

The calculation is a **two-step process**:

**Step 1 — Deduct fixed (nominal) amounts first**

```
remaining = income − Σ(all nominal allocations)
```

**Step 2 — Apply proportional allocations to the remainder**

```
amount for proportion allocation = (proportion% / 100) × remaining
```

**Example:**

```
Income: $5,000

Nominal allocations:
  Rent       → $1,500
  Utilities  → $200
  Phone      → $100
  ─────────────────
  Total fixed:  $1,800
  Remaining:    $3,200

Proportion allocations (applied to $3,200):
  Emergency Fund  10% → $320
  Investment      15% → $480
  Groceries       12% → $384
  Fun             5%  → $160

Unallocated remaining: $3,200 − $1,344 = $1,856
```

### 5.2 Validation Rules

**Allocation form validation (`validateAllocation`):**

| Rule | Error message |
|---|---|
| Name is blank | `"Name is required"` |
| Destination is blank | `"Destination is required"` |
| Neither proportion nor nominal set | `"Either proportion or nominal amount must be set"` |
| Proportion outside 0–100 | `"Proportion must be between 0 and 100"` |
| Nominal is negative | `"Nominal amount must be positive"` |

**Calculation-time validation (`calculateAllocation`):**

| Rule | Behaviour |
|---|---|
| `income <= 0` or no allocations | Returns empty array |
| Total proportions > 100% | Throws `"Total proportion cannot exceed 100%"` |
| Nominals exceed income | Allowed — results in negative remaining (shown as deficit) |

### 5.3 Key Functions

```typescript
// src/lib/finance.ts

calculateAllocation(income: number, allocations: Allocation[])
  → { ...allocation, amount: number }[]

validateAllocation(allocation: Allocation)
  → string[]   // empty = valid

getAllocationIcon(name: string)
  → LucideIcon  // smart keyword-based icon selection
```

---

## 6. Database Schema

**Engine:** IndexedDB, accessed via **Dexie.js**  
**Database name:** `FinanceDB`  
**File:** `src/lib/database.ts`

### Tables

#### `allocations`

| Column | Type | Notes |
|---|---|---|
| `id` | `string` (auto) | Primary key, auto-incremented by Dexie |
| `name` | `string` | Required. User-visible label |
| `proportion` | `number?` | Optional. Percentage 0–100 |
| `nominal` | `number?` | Optional. Fixed monetary amount |
| `destination` | `string` | Required. Where the money is sent (e.g. "Savings Account") |
| `timestamp` | `number` | `Date.now()` at creation |

> Either `proportion` or `nominal` must be present (not both required — one or the other).

#### `incomes`

| Column | Type | Notes |
|---|---|---|
| `id` | `number` (auto) | Primary key |
| `value` | `string` | Raw numeric value as string |
| `displayValue` | `string` | Formatted display value (with currency symbol) |
| `description` | `string` | User-provided label for this income source |
| `timestamp` | `number` | `Date.now()` at creation |

### Version History

| Version | Change |
|---|---|
| 1 | Initial schema — `allocations` table |
| 2 | Added `incomes` table |

### CRUD Helpers

```typescript
// Incomes
getAllIncomes(): Promise<Income[]>
addIncome(income): Promise<number>
updateIncome(id, updates): Promise<number>
deleteIncome(id): Promise<void>
getNextIncomeId(): Promise<number>

// Allocations — accessed directly via db.allocations (Dexie Table API)
db.allocations.toArray()
db.allocations.add(allocation)
db.allocations.delete(id)
```

---

## 7. State Management

The app uses **two** state mechanisms:

### 7.1 React `useState` (in-memory, session only)

- `allocations: Allocation[]` — held in `FinanceCalculator` and passed down as props
- Income values — held in `IncomeCalculator` component

### 7.2 Zustand Store with `persist` (localStorage)

**Store:** `useSettings` in `src/lib/settings.ts`  
**localStorage key:** `"finance-settings"`

```typescript
interface SettingsStore {
  currency: Currency        // default: 'USD'
  setCurrency: (c: Currency) => void
}
```

### 7.3 Theme (localStorage, manual)

- **localStorage key:** `"theme"`
- Values: `"dark"` | `"light"`
- The `ThemeToggle` component adds/removes the `.dark` CSS class on `<html>`
- Falls back to the OS `prefers-color-scheme` media query on first visit

---

## 8. Components

### `FinanceCalculator` (`finance-calculator.tsx`)

Top-level app component. Responsibilities:

- Loads allocations from IndexedDB on mount
- Holds `allocations` state and passes it to children
- Handles `handleAddAllocation` and `handleDeleteAllocation`
- Renders a responsive **3-column grid** (1-col mobile → 3-col desktop):
  - **Sidebar (col 1):** `AllocationForm`, `AllocationsDialog`, `AllocationStats`
  - **Main area (col 2–3):** `IncomeCalculator`

---

### `AllocationForm` (`allocation-form.tsx`)

Form for creating a new allocation. Fields:

| Field | Type | Description |
|---|---|---|
| Name | Text input | Allocation label |
| Destination | Text input | Where money goes |
| Type | Radio group | `proportion` or `nominal` |
| Value | Number input | Percentage (0–100) or fixed amount |

- Runs `validateAllocation()` before submitting
- Formats nominal values with thousands separators on blur
- Resets to empty after successful submission

---

### `IncomeCalculator` (`income-calculator.tsx`)

Main calculation UI. Responsibilities:

- Accepts multiple income sources (each with description + amount)
- Sums all income sources for total income
- Calls `calculateAllocation(totalIncome, allocations)` whenever income or allocations change
- Displays results as a responsive grid (1-col → 2-col):
  - Each allocation card shows: icon, name, destination, calculated amount, proportion badge, progress bar
  - Summary row: total allocated, total income, remaining balance
- Shows error message in red if proportions exceed 100%

---

### `AllocationStats` (`allocation-stats.tsx`)

Pie chart visualisation using Recharts. Features:

- Only renders when `income > 0` and allocations exist
- Segments: grey gradient for each allocation, green for unallocated remainder
- Custom tooltip with name, formatted amount, and percentage
- Listens to `"dexie-change"` custom event to reload income from IndexedDB

---

### `AllocationsDialog` (`allocations-dialog.tsx`)

Modal listing all saved allocations. Features:

- Scrollable list of allocation cards
- Each card: icon, name, destination, proportion/nominal badges, delete button
- Empty state message when no allocations exist

---

### `SettingsDialog` (`settings-dialog.tsx`)

Modal for selecting preferred currency. Features:

- Radio group with 8 currency options in 2-column grid
- Each option shows symbol + full name
- Persists selection via `useSettings` Zustand store → localStorage

---

### `ThemeToggle` (`theme-toggle.tsx`)

Icon button (Sun / Moon) in the header. Toggles `.dark` class on `<html>` and saves preference to localStorage.

---

### `AboutDialog` (`about-dialog.tsx`)

Informational modal explaining:

- Privacy-first approach (no server)
- Data storage (IndexedDB + localStorage)
- Link to creator's website

---

## 9. Routing & Layout

**Router:** TanStack React Router (file-based, auto-generated `routeTree.gen.ts`)

| Route | File | Renders |
|---|---|---|
| `/` | `src/routes/index.tsx` | `<FinanceCalculator />` |
| Root layout | `src/routes/__root.tsx` | Header + main + footer wrapper |

### Root Layout Structure

```
<html>
  <body>
    <div.min-h-screen>
      <!-- Background blur FX (fixed, pointer-events-none) -->
      <header sticky>   ← Title + SettingsDialog + ThemeToggle
      <main flex-1>     ← <Outlet /> (page content)
      <footer>          ← <AboutDialog />
    </div>
    <TanStackDevtools />  ← dev only
    <Scripts />
  </body>
</html>
```

### Responsive Layout (TailwindCSS breakpoints)

| Breakpoint | Width | Layout |
|---|---|---|
| Mobile (default) | < 640px | 1-column stacked |
| `sm:` | ≥ 640px | 2-column allocation results grid |
| `md:` | ≥ 768px | Larger padding and spacing |
| `lg:` | ≥ 1024px | 3-column sidebar + main layout |

---

## 10. Styling & Theming

**File:** `src/styles.css`

All visual tokens are defined as **CSS custom properties** using the OKLch color space. TailwindCSS v4 reads these via `@theme` to generate utility classes automatically.

### Key CSS Variables

| Variable | Usage |
|---|---|
| `--background` / `--foreground` | Page background and primary text |
| `--primary` / `--primary-foreground` | Accent color (teal/cyan) |
| `--secondary` / `--secondary-foreground` | Subtle surfaces |
| `--muted` / `--muted-foreground` | Placeholder text, dividers |
| `--accent` / `--accent-foreground` | Hover highlights |
| `--destructive` | Error / delete actions |
| `--border` | Border color |
| `--input` | Input field border |
| `--ring` | Focus ring |
| `--chart-1` … `--chart-5` | Recharts pie chart segments |
| `--radius` | Border radius (0.625rem = 10px) |

### Dark Mode

- The `.dark` class on `<html>` switches all variables to dark-mode values
- Background decorative elements: two blurred circles (`bg-primary/20`, `bg-accent/20`) using `blur-3xl` for the green/yellow glow effect

---

## 11. Currency Support

**File:** `src/lib/settings.ts`

| Code | Symbol | Name | Decimals | Thousands Sep. |
|---|---|---|---|---|
| `USD` | `$` | US Dollar | 2 | `,` |
| `IDR` | `Rp` | Indonesian Rupiah | 0 | `.` |
| `EUR` | `€` | Euro | 2 | `.` |
| `GBP` | `£` | British Pound | 2 | `,` |
| `JPY` | `¥` | Japanese Yen | 0 | `,` |
| `CNY` | `¥` | Chinese Yuan | 2 | `,` |
| `AUD` | `A$` | Australian Dollar | 2 | `,` |
| `CAD` | `C$` | Canadian Dollar | 2 | `,` |

### Formatting Helpers

```typescript
formatNumber(value, currency)         // "1,500.00" or "1.500"
formatCurrency(value, currency)       // "$1,500.00" or "Rp1.500"
parseFormattedNumber(value, currency) // strips separators → raw number
```

---

## 12. Icon System

**File:** `src/lib/finance.ts` — `getAllocationIcon(name: string): LucideIcon`

The function performs:
1. **Exact match** on the full allocation name (case-insensitive)
2. **Partial match** — checks if any keyword is a substring of the name
3. **Fallback** — returns `Wallet` if no match

### Keyword → Icon Map

| Keywords | Icon | Lucide Component |
|---|---|---|
| `emergency`, `emergency fund`, `savings`, `save` | Piggy bank | `PiggyBank` |
| `fund` | Target | `Target` |
| `invest`, `investment` | Trending up | `TrendingUp` |
| `stock`, `portfolio` | Bar chart | `BarChart3` |
| `food` | Utensils | `Utensils` |
| `groceries`, `shopping`, `buy` | Shopping cart | `ShoppingCart` |
| `expense`, `personal` | Wallet | `Wallet` |
| `bill`, `monthly` | House | `Home` |
| `utilities` | Lightning bolt | `Zap` |
| `phone`, `internet` | Smartphone | `Smartphone` |
| `education`, `course` | Book | `Book` |
| `health`, `medical`, `gym` | Heart | `Heart` |
| `entertainment`, `fun`, `movie` | Gift | `Gift` |
| `travel`, `vacation` | Plane | `Plane` |
| `insurance` | Shield | `Shield` |
| `miscellaneous`, `other` | Dollar sign | `DollarSign` |
| `charity`, `donation` | Leaf | `Leaf` |
| *(default)* | Wallet | `Wallet` |

---

## 13. Available Scripts

```bash
bun run dev       # Start development server on http://localhost:3000
bun run build     # Type-check + bundle for production
bun run preview   # Serve the production build locally
bun run test      # Run unit tests with Vitest
bun run lint      # Run ESLint
bun run format    # Run Prettier (check only)
bun run check     # Prettier --write + ESLint --fix (full fix)
```

---

## 14. Configuration Files

| File | Purpose |
|---|---|
| `vite.config.ts` | Vite config: TanStack Router plugin, React plugin, TailwindCSS plugin, path alias `@/` → `src/` |
| `tsconfig.json` | TypeScript config: strict mode, path aliases |
| `eslint.config.js` | ESLint rules via `@tanstack/eslint-config` |
| `prettier.config.js` | Prettier formatting rules |
| `components.json` | shadcn/ui config: style `default`, icon library `lucide`, paths |

### Path Alias

The `@/` alias maps to `src/`:

```typescript
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
```

---

## 15. Browser Support

| Browser | Minimum Version |
|---|---|
| Chrome / Edge | 90+ |
| Firefox | 88+ |
| Safari | 14+ |

**Requirement:** IndexedDB must be available and enabled. The app will not work in private/incognito modes that block IndexedDB persistence.

---

## 16. Privacy & Data Storage

| What | Where | How long |
|---|---|---|
| Allocations | IndexedDB (`FinanceDB`) | Until user deletes browser data |
| Income entries | IndexedDB (`FinanceDB`) | Until user deletes browser data |
| Currency preference | `localStorage` key `"finance-settings"` | Until user clears localStorage |
| Theme preference | `localStorage` key `"theme"` | Until user clears localStorage |
| **Server-side** | — | **Nothing is ever sent to a server** |

To fully reset the app, clear your browser's site data for the app's origin.

---

*This document reflects the state of the codebase as of **March 2026**. Update it when the schema, calculation logic, or component structure changes.*
