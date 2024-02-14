import {
  ArrowCircleDown,
  ArrowCircleUp,
  CurrencyCircleDollar,
} from 'phosphor-react'
import { SummaryCard, SummaryContainer } from './styles'
import { useContext } from 'react'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { valueFormat } from '../../utils/format'

export function Summary() {
  const { transactions } = useContext(TransactionsContext)

  const scoreTotal = transactions.reduce(
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

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entrada</span>
          <ArrowCircleUp size={32} color="#00B37E" />
        </header>
        <strong>{valueFormat.format(scoreTotal.income)}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saída</span>
          <ArrowCircleDown size={32} color="#F75A68" />
        </header>
        <strong>{valueFormat.format(scoreTotal.outcome)}</strong>
      </SummaryCard>
      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyCircleDollar size={32} color="#FFF" />
        </header>
        <strong>{valueFormat.format(scoreTotal.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
