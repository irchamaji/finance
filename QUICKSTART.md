# Quick Start Guide

## Running the Finance Calculator

### Start Development Server
```bash
cd /Users/ircham/dev/projects/finance
bun run dev
```
Visit `http://localhost:3000`

### Build for Production
```bash
bun run build
bun run preview
```

## Using the Application

### 1. Add Your First Allocation
1. Fill out the "Add Allocation" form on the left
   - **Name**: e.g., "Emergency Fund", "Rent", "Investment"
   - **Destination**: e.g., "Savings Account", "Checking Account"
   - **Type**: Choose between:
     - **Proportion (%)**: e.g., 20% of income
     - **Fixed Amount**: e.g., $500
2. Click "Add Allocation"

### 2. Examples of Common Allocations

**Proportion-based (recommended for flexible budgets)**:
- Emergency Fund: 10%
- Investment: 20%
- Food & Groceries: 15%
- Entertainment: 5%

**Nominal-based (for fixed costs)**:
- Rent/Mortgage: $1,500
- Insurance: $200
- Utilities: $150

**Mixed approach** (most realistic):
- Fixed: Rent ($1,500) + Utilities ($200)
- Proportions: Save (15%) + Investment (10%) + Fun (5%)

### 3. Calculate Your Income Distribution
1. Enter your **Monthly Income**
2. Click **Calculate**
3. View the breakdown:
   - Each allocation amount
   - Visual progress bar for each
   - Total remaining unallocated

### 4. Manage Allocations
- **View**: All allocations listed in the middle
- **Delete**: Click the × button on any allocation
- **Refresh**: Click the ⟳ button to reload from database

### 5. Toggle Theme
- Click the sun/moon icon in the top right
- Switch between light and dark modes
- Your preference is saved

## Important Rules

✓ **Valid Allocation**:
- Must have a name
- Must have a destination
- Must have either proportion (0-100%) or nominal amount (>0)

✗ **Invalid Cases**:
- Proportions totaling > 100% (error shown in calculation)
- Nominal amounts exceeding income (error shown)
- Missing required fields (form validation prevents this)

## Data Storage

- **Where**: Stored in your browser's IndexedDB
- **Privacy**: All data stays on your computer
- **Persistence**: Data saved automatically when you add/delete
- **Clearing**: Delete browser data to reset the app

## Troubleshooting

### Nothing appears after calculating?
- Make sure you added at least one allocation
- Check that your income is > 0
- Look for error messages in red

### Data not saving?
- Check browser's IndexedDB is enabled
- Verify you're not in private/incognito mode
- Try refreshing the page

### Icons not showing?
- Clear browser cache
- Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

## Example Workflow

1. **Alice's Monthly Budget**:
   ```
   Income: $5,000
   
   Allocations:
   - Rent: $1,500 (fixed)
   - Emergency Fund: 10% = $350
   - Investment: 15% = $750
   - Groceries: 12% = $600
   - Fun Money: 8% = $400
   - Utilities: $200 (fixed)
   - Phone: $100 (fixed)
   
   Total Fixed: $1,800
   Remaining for proportions: $3,200
   
   Results:
   - Emergency: $350
   - Investment: $750
   - Groceries: $600
   - Fun: $400
   - Utilities: $200
   - Phone: $100
   - Remaining: $600
   ```

2. **Tips**:
   - Start with broad categories (housing, food, savings)
   - Add sub-categories once you understand your spending
   - Adjust percentages monthly based on actual spending
   - Leave 5-10% unallocated for flexibility

## Features

### Now Available ✅
- [x] Add/delete allocations
- [x] Proportion & nominal allocation types
- [x] Real-time income calculation
- [x] Dark mode toggle
- [x] Data persistence with IndexedDB
- [x] Form validation
- [x] Error messages
- [x] Responsive design

### Future Ideas 💡
- [ ] Export to CSV
- [ ] Monthly tracking
- [ ] Budget vs actual comparison
- [ ] Multiple income sources
- [ ] Recurring vs one-time
- [ ] Savings goal tracking
- [ ] Mobile app version

## Need Help?

Check the detailed [README.md](./README.md) for:
- Full feature documentation
- Database schema
- Technical architecture
- Browser compatibility

See [IMPLEMENTATION.md](./IMPLEMENTATION.md) for:
- What was built and why
- Technical decisions
- Phase-by-phase breakdown
