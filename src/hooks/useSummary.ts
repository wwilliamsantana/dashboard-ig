import { TransactionsProps } from '../contexts/TransactionsContext'

export function useSummary(transactions: TransactionsProps[]) {
  const data = transactions.reduce(
    (acc, current) => {
      if (current.type === 'income') {
        acc.income += current.price
        acc.total += current.price
      } else {
        acc.outcome += current.price
        acc.total -= current.price
      }

      return acc
    },
    { income: 0, outcome: 0, total: 0 },
  )

  return data
}
