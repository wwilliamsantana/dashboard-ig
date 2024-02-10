import {
  ArrowCircleDown,
  ArrowCircleUp,
  CurrencyCircleDollar,
} from 'phosphor-react'
import { SummaryCard, SummaryContainer } from './styles'

export function Summary() {
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entrada</span>
          <ArrowCircleUp size={32} color="#00B37E" />
        </header>
        <strong>R$ 17.500,00</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saída</span>
          <ArrowCircleDown size={32} color="#F75A68" />
        </header>
        <strong>R$ 1.280,00</strong>
      </SummaryCard>
      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyCircleDollar size={32} color="#FFF" />
        </header>
        <strong>R$ 17.500,00</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
