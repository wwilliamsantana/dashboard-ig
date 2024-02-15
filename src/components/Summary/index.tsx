import {
  ArrowCircleDown,
  ArrowCircleUp,
  CurrencyCircleDollar,
} from 'phosphor-react'
import { SummaryCard, SummaryContainer } from './styles'
import { useContext } from 'react'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { valueFormat } from '../../utils/format'
import { useSummary } from '../../hooks/useSummary'

export function Summary() {
  const { transactions } = useContext(TransactionsContext)

  const data = useSummary(transactions)

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entrada</span>
          <ArrowCircleUp size={32} color="#00B37E" />
        </header>
        <strong>{valueFormat.format(data.income)}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saída</span>
          <ArrowCircleDown size={32} color="#F75A68" />
        </header>
        <strong>{valueFormat.format(data.outcome)}</strong>
      </SummaryCard>
      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyCircleDollar size={32} color="#FFF" />
        </header>
        <strong>{valueFormat.format(data.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
