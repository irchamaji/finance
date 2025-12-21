# Finance Calculator

A personal finance income allocation calculator built with React, TypeScript, and TanStack Start.

## Features

- **Income Calculator**: Enter your income and see how it's distributed across your allocations
- **Allocation Management**: Create, view, and delete money allocations
- **Flexible Allocation Types**:
  - **Proportion-based**: Allocate a percentage of your income
  - **Nominal-based**: Allocate a fixed amount
- **Dark Mode Toggle**: Switch between light and dark themes
- **Local Storage**: All data is stored locally in your browser using IndexedDB
- **Real-time Calculations**: Instant breakdown of where your money goes

## Tech Stack

- **Framework**: TanStack Start with React 19
- **Language**: TypeScript
- **Styling**: TailwindCSS with shadcn/ui components
- **Icons**: Lucide Icons (1500+ vector icons)
- **Database**: Dexie.js (IndexedDB wrapper)
- **Package Manager**: Bun

## Getting Started

### Prerequisites

- Bun (recommended) or Node.js 18+

### Installation

```bash
# Install dependencies
bun install

# Start development server
bun run dev
```

The application will be available at `http://localhost:3000`

## Usage

1. **Add Allocations**:
   - Enter a name (e.g., "Emergency Fund")
   - Choose a destination (e.g., "Savings Account")
   - Select allocation type:
     - **Proportion**: Enter percentage (0-100%)
     - **Fixed Amount**: Enter dollar amount
   - Click "Add Allocation"

2. **Calculate Income Distribution**:
   - Enter your monthly income
   - Click "Calculate"
   - View the breakdown showing:
     - Amount allocated to each category
     - Visual progress bar for each allocation
     - Remaining income after allocations

3. **Manage Allocations**:
   - View all your allocations in the list
   - Delete allocations using the × button
   - Refresh to reload data from storage

4. **Toggle Theme**:
   - Click the sun/moon icon in the header to switch themes
   - Your preference is saved locally

## Project Structure

```
src/
├── components/
│   ├── allocation-form.tsx       # Add and display allocations
│   ├── income-calculator.tsx      # Income calculation interface
│   ├── finance-calculator.tsx     # Main app component
│   ├── theme-toggle.tsx           # Dark/light mode toggle
│   └── ui/                        # shadcn/ui components
├── lib/
│   ├── database.ts                # Dexie database setup
│   ├── finance.ts                 # Calculation and validation logic
│   └── utils.ts                   # Utility functions
├── routes/
│   ├── __root.tsx                 # Root layout
│   └── index.tsx                  # Home page
└── styles.css                     # Global styles with theme variables
```

## Database Schema

The app uses a single table `allocations` with the following structure:

```typescript
interface Allocation {
  id?: string
  name: string              // Allocation name (required)
  proportion?: number       // Percentage (0-100)
  nominal?: number          // Fixed amount
  destination: string       // Where the money goes (required)
  timestamp: number         // Creation timestamp
}
```

**Constraints**:
- Either `proportion` or `nominal` must be provided
- Proportions cannot exceed 100% in total
- All amounts must be positive

## Calculation Logic

1. **Nominal Allocations**: Fixed amounts are deducted first from income
2. **Proportion Allocations**: Applied to remaining income after nominals
3. **Remaining Balance**: Shows unallocated income after all distributions

## Available Scripts

```bash
bun run dev       # Start development server
bun run build     # Build for production
bun run preview   # Preview production build
bun run test      # Run tests
bun run lint      # Run ESLint
bun run format    # Format code with Prettier
bun run check     # Format and lint
```

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

Requires IndexedDB support for data persistence.

## Privacy

This is a client-side only application. All data is stored locally in your browser's IndexedDB. No data is sent to any server.

## Notes

- This is an experimental project for learning and portfolio purposes
- All financial calculations are provided "as-is" without warranty
- Consult with a financial advisor for serious financial planning
