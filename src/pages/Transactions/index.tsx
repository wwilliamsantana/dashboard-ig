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
                      {transation.price}
                    </PriceHighLight>
                  </td>
                  <td>{transation.category}</td>
                  <td>{transation.createdAt}</td>
                </tr>
              )
            })}
          </tbody>
        </TransactionTable>
      </TransactionTableContainer>
    </div>
  )
}
