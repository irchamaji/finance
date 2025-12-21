import type { Allocation } from './database'
import {
  PiggyBank,
  TrendingUp,
  ShoppingCart,
  Heart,
  Home,
  DollarSign,
  Target,
  Zap,
  Smartphone,
  Book,
  Utensils,
  Wallet,
  Gift,
  Shield,
  Plane,
  Leaf,
  BarChart3,
  LucideIcon
} from 'lucide-react'

// Icon mapping for different allocation types
const iconMap: Record<string, LucideIcon> = {
  'emergency': PiggyBank,
  'emergency fund': PiggyBank,
  'fund': Target,
  'savings': PiggyBank,
  'save': PiggyBank,
  'invest': TrendingUp,
  'investment': TrendingUp,
  'stock': BarChart3,
  'portfolio': BarChart3,
  'food': Utensils,
  'groceries': ShoppingCart,
  'shopping': ShoppingCart,
  'buy': ShoppingCart,
  'expense': Wallet,
  'bill': Home,
  'utilities': Zap,
  'phone': Smartphone,
  'internet': Smartphone,
  'education': Book,
  'course': Book,
  'health': Heart,
  'medical': Heart,
  'gym': Heart,
  'entertainment': Gift,
  'fun': Gift,
  'movie': Gift,
  'travel': Plane,
  'vacation': Plane,
  'insurance': Shield,
  'personal': Wallet,
  'miscellaneous': DollarSign,
  'other': DollarSign,
  'charity': Leaf,
  'donation': Leaf,
  'monthly': Home,
}

export function getAllocationIcon(name: string): LucideIcon {
  const lowerName = name.toLowerCase()
  
  // Exact match
  if (iconMap[lowerName]) {
    return iconMap[lowerName]
  }
  
  // Partial match - check if any key is contained in the name
  for (const [key, icon] of Object.entries(iconMap)) {
    if (lowerName.includes(key)) {
      return icon
    }
  }
  
  // Default icon
  return Wallet
}

export function calculateAllocation(income: number, allocations: Allocation[]) {
  if (income <= 0 || allocations.length === 0) {
    return []
  }

  // Separate proportion-based and nominal-based allocations
  const proportionAllocations = allocations.filter(a => a.proportion !== undefined && a.proportion > 0)
  const nominalAllocations = allocations.filter(a => a.nominal !== undefined && a.nominal > 0)

  // Calculate total proportions
  const totalProportion = proportionAllocations.reduce((sum, a) => sum + (a.proportion || 0), 0)

  // Validate proportions
  if (totalProportion > 100) {
    throw new Error('Total proportion cannot exceed 100%')
  }

  // Calculate remaining income after nominal allocations
  const totalNominal = nominalAllocations.reduce((sum, a) => sum + (a.nominal || 0), 0)
  const remainingIncome = income - totalNominal

  if (remainingIncome < 0) {
    throw new Error('Total nominal allocations exceed income')
  }

  const results = allocations.map(allocation => {
    let amount = 0

    if (allocation.nominal && allocation.nominal > 0) {
      amount = allocation.nominal
    } else if (allocation.proportion && allocation.proportion > 0) {
      amount = (allocation.proportion / 100) * remainingIncome
    }

    return {
      ...allocation,
      amount: Math.round(amount * 100) / 100 // Round to 2 decimal places
    }
  })

  return results
}

export function validateAllocation(allocation: Allocation): string[] {
  const errors: string[] = []

  if (!allocation.name || allocation.name.trim() === '') {
    errors.push('Name is required')
  }

  if (!allocation.destination || allocation.destination.trim() === '') {
    errors.push('Destination is required')
  }

  const hasProportion = allocation.proportion !== undefined && allocation.proportion > 0
  const hasNominal = allocation.nominal !== undefined && allocation.nominal > 0

  if (!hasProportion && !hasNominal) {
    errors.push('Either proportion or nominal amount must be set')
  }

  if (hasProportion) {
    if (allocation.proportion! < 0 || allocation.proportion! > 100) {
      errors.push('Proportion must be between 0 and 100')
    }
  }

  if (hasNominal) {
    if (allocation.nominal! < 0) {
      errors.push('Nominal amount must be positive')
    }
  }

  return errors
}
