import { ButtonNewTransaction, HeaderContainer, HeaderContent } from './styles'
import * as Dialog from '@radix-ui/react-dialog'
import LogoDash from '../../assets/Logo.svg'
import { ModalFormTransaction } from '../ModalFormTransaction'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={LogoDash} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <ButtonNewTransaction>Nova transação</ButtonNewTransaction>
          </Dialog.Trigger>

          <ModalFormTransaction />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
