import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const CURRENCIES = {
  USD: { symbol: '$', name: 'US Dollar', locale: 'en-US', decimals: 2, thousandsSeparator: ',' },
  IDR: { symbol: 'Rp', name: 'Indonesian Rupiah', locale: 'id-ID', decimals: 0, thousandsSeparator: '.' },
  EUR: { symbol: '€', name: 'Euro', locale: 'de-DE', decimals: 2, thousandsSeparator: '.' },
  GBP: { symbol: '£', name: 'British Pound', locale: 'en-GB', decimals: 2, thousandsSeparator: ',' },
  JPY: { symbol: '¥', name: 'Japanese Yen', locale: 'ja-JP', decimals: 0, thousandsSeparator: ',' },
  CNY: { symbol: '¥', name: 'Chinese Yuan', locale: 'zh-CN', decimals: 2, thousandsSeparator: ',' },
  AUD: { symbol: 'A$', name: 'Australian Dollar', locale: 'en-AU', decimals: 2, thousandsSeparator: ',' },
  CAD: { symbol: 'C$', name: 'Canadian Dollar', locale: 'en-CA', decimals: 2, thousandsSeparator: ',' },
} as const

export type Currency = keyof typeof CURRENCIES

interface SettingsStore {
  currency: Currency
  setCurrency: (currency: Currency) => void
}

export const useSettings = create<SettingsStore>()(
  persist(
    (set) => ({
      currency: 'USD',
      setCurrency: (currency) => set({ currency }),
    }),
    {
      name: 'finance-settings',
    }
  )
)

/**
 * Format a number with thousands separators based on the selected currency
 */
export function formatNumber(value: number | string, currency: Currency): string {
  const num = typeof value === 'string' ? parseFloat(value) : value
  if (isNaN(num)) return ''
  
  const config = CURRENCIES[currency]
  const parts = num.toFixed(config.decimals).split('.')
  
  // Add thousands separators
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, config.thousandsSeparator)
  
  return parts.join(config.decimals > 0 ? '.' : '')
}

/**
 * Format currency display with symbol
 */
export function formatCurrency(value: number | string, currency: Currency): string {
  const num = typeof value === 'string' ? parseFloat(value) : value
  if (isNaN(num)) return ''
  
  const config = CURRENCIES[currency]
  const formatted = formatNumber(num, currency)
  
  return `${config.symbol}${formatted}`
}

/**
 * Parse a formatted number string back to a number
 */
export function parseFormattedNumber(value: string, currency: Currency): number {
  const config = CURRENCIES[currency]
  // Remove thousands separators
  const cleaned = value.replace(new RegExp(`\\${config.thousandsSeparator}`, 'g'), '')
  return parseFloat(cleaned) || 0
}
