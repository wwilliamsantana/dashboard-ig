import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../utils/apiConnect'

export interface TransactionsProps {
  id?: number
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number
  createdAt: string
}

interface TransactionContextProps {
  transactions: TransactionsProps[]
  getDataTransactions: (query?: string) => void
  createNewTransaction: (data: TransactionsProps) => void
}

export const TransactionsContext = createContext({} as TransactionContextProps)

interface TransactionProviderProps {
  children: ReactNode
}

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<TransactionsProps[]>([])

  async function getDataTransactions(query?: string) {
    const response = await api.get('/transactions', {
      params: {
        q: query,
        _sort: 'createdAt',
        _order: 'desc',
      },
    })

    setTransactions(response.data)
  }

  async function createNewTransaction(data: TransactionsProps) {
    const post = await api.post('/transactions', data)

    setTransactions((state) => [post.data, ...state])
  }

  useEffect(() => {
    getDataTransactions()
  }, [])

  return (
    <TransactionsContext.Provider
      value={{ transactions, getDataTransactions, createNewTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
