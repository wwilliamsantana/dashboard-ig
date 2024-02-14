import { useContext } from 'react'
import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SearchForm } from './components/SearchForm'
import {
  PriceHighLight,
  TransactionTable,
  TransactionTableContainer,
} from './styles'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { dateFormat, valueFormat } from '../../utils/format'

export function Transactions() {
  const { transactions } = useContext(TransactionsContext)

  return (
    <div>
      <Header />
      <Summary />

      <TransactionTableContainer>
        <SearchForm />
        <TransactionTable>
          <tbody>
            {transactions.map((transation) => {
              return (
                <tr key={transation.id}>
                  <td width={'50%'}>{transation.description}</td>
                  <td>
                    <PriceHighLight variant={transation.type}>
                      {valueFormat.format(transation.price)}
                    </PriceHighLight>
                  </td>
                  <td>{transation.category}</td>
                  <td>{dateFormat.format(new Date(transation.createdAt))}</td>
                </tr>
              )
            })}
          </tbody>
        </TransactionTable>
      </TransactionTableContainer>
    </div>
  )
}
