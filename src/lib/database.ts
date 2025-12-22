import Dexie, { type Table } from 'dexie'

export interface Allocation {
  id?: string
  name: string
  proportion?: number // 0-100
  nominal?: number // fixed amount
  destination: string
  timestamp: number
}

export interface Income {
  id?: number
  value: string
  displayValue: string
  description: string
  timestamp: number
}

export class FinanceDB extends Dexie {
  allocations!: Table<Allocation>
  incomes!: Table<Income>

  constructor() {
    super('FinanceDB')
    this.version(1).stores({
      allocations: '++id, timestamp'
    })
    this.version(2).stores({
      allocations: '++id, timestamp',
      incomes: '++id, timestamp'
    })
  }
}

export const db = new FinanceDB()

// Income CRUD operations
export async function getAllIncomes(): Promise<Income[]> {
  return await db.incomes.orderBy('id').toArray()
}

export async function addIncome(income: Omit<Income, 'id' | 'timestamp'>): Promise<number> {
  return await db.incomes.add({
    ...income,
    timestamp: Date.now()
  })
}

export async function updateIncome(id: number, updates: Partial<Omit<Income, 'id' | 'timestamp'>>): Promise<number> {
  return await db.incomes.update(id, updates)
}

export async function deleteIncome(id: number): Promise<void> {
  await db.incomes.delete(id)
}

export async function getNextIncomeId(): Promise<number> {
  const allIncomes = await db.incomes.toArray()
  if (allIncomes.length === 0) return 1
  const maxId = Math.max(...allIncomes.map(i => i.id || 0))
  return maxId + 1
}
