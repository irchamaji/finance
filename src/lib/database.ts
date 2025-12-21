import Dexie, { type Table } from 'dexie'

export interface Allocation {
  id?: string
  name: string
  proportion?: number // 0-100
  nominal?: number // fixed amount
  destination: string
  timestamp: number
}

export class FinanceDB extends Dexie {
  allocations!: Table<Allocation>

  constructor() {
    super('FinanceDB')
    this.version(1).stores({
      allocations: '++id, timestamp'
    })
  }
}

export const db = new FinanceDB()
