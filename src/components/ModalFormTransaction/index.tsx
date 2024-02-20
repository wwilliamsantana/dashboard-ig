import * as Dialog from '@radix-ui/react-dialog'
import {
  Close,
  Content,
  Overlay,
  TransactionTypeButton,
  TransactionTypeContainer,
} from './styles'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import { Controller, useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { TransactionsContext } from '../../contexts/TransactionsContext'

const modalSchema = z.object({
  description: z.string().min(1),
  category: z.string().min(1),
  price: z.number().min(1),
  type: z.enum(['income', 'outcome']),
})

type SchemaProps = z.infer<typeof modalSchema>

export function ModalFormTransaction() {
  const { createNewTransaction } = useContext(TransactionsContext)
  const { handleSubmit, register, control, reset } = useForm<SchemaProps>({
    resolver: zodResolver(modalSchema),
  })

  function handleSubmitForm(data: SchemaProps) {
    const { category, price, description, type } = data

    createNewTransaction({
      category,
      price,
      description,
      type,
      createdAt: String(new Date()),
    })
    reset()
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Close>
          <X size={24} />
        </Close>
        <Dialog.Title>Nova Transição</Dialog.Title>

        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <input
            type="text"
            placeholder="Descrição"
            {...register('description')}
          />
          <input
            type="number"
            placeholder="Preço"
            {...register('price', { valueAsNumber: true })}
          />
          <input
            type="text"
            placeholder="Categoria"
            {...register('category')}
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <TransactionTypeContainer
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <TransactionTypeButton
                    type="button"
                    variant="income"
                    value="income"
                  >
                    <ArrowCircleUp size={24} />
                    Entrada
                  </TransactionTypeButton>
                  <TransactionTypeButton
                    type="button"
                    variant="outcome"
                    value="outcome"
                  >
                    <ArrowCircleDown size={24} />
                    Saída
                  </TransactionTypeButton>
                </TransactionTypeContainer>
              )
            }}
          />

          <button type="submit">Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
