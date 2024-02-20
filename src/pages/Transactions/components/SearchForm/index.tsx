import { MagnifyingGlass } from 'phosphor-react'
import { SearchFormContainer } from './styled'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useContext } from 'react'
import { TransactionsContext } from '../../../../contexts/TransactionsContext'

const searchFormSchema = z.object({
  query: z.string(),
})

type SeachFormProps = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const { getDataTransactions } = useContext(TransactionsContext)
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<SeachFormProps>({
    resolver: zodResolver(searchFormSchema),
  })

  function handleSubmitForm({ query }: SeachFormProps) {
    getDataTransactions(query)
    reset()
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSubmitForm)}>
      <input
        type="text"
        placeholder="Busque uma transação"
        {...register('query')}
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  )
}
