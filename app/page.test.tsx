import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import Page from './page'

vi.mock('@/components/finance-calculator', () => ({
  FinanceCalculator: () => <div>Finance Calculator</div>,
}))

describe('Page', () => {
  it('renders the finance calculator entrypoint', () => {
    render(<Page />)

    expect(screen.getByText('Finance Calculator')).toBeTruthy()
  })
})
