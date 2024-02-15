import { MagnifyingGlass } from 'phosphor-react'
import { SearchFormContainer } from './styled'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const searchFormSchema = z.object({
  search: z.string().min(1),
})

type SeachFormProps = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const { register, handleSubmit, reset } = useForm<SeachFormProps>({
    resolver: zodResolver(searchFormSchema),
  })

  function handleSubmitForm(data: SeachFormProps) {
    console.log(data)
    reset()
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSubmitForm)}>
      <input
        type="text"
        placeholder="Busque uma transação"
        {...register('search')}
      />
      <button type="submit">
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  )
}
