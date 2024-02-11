import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SearchForm } from './components/SearchForm'
import {
  PriceHighLight,
  TransactionTable,
  TransactionTableContainer,
} from './styles'

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionTableContainer>
        <SearchForm />
        <TransactionTable>
          <tbody>
            <tr>
              <td width={'50%'}>Desenvolvimento de site</td>
              <td>
                <PriceHighLight variant="income">R$ 15.000,00</PriceHighLight>
              </td>
              <td>Venda</td>
              <td>13/10/24</td>
            </tr>
            <tr>
              <td>iFood</td>
              <td>
                <PriceHighLight variant="outcome">- R$ 1.000,00</PriceHighLight>
              </td>
              <td>Compra</td>
              <td>15/10/24</td>
            </tr>
          </tbody>
        </TransactionTable>
      </TransactionTableContainer>
    </div>
  )
}
