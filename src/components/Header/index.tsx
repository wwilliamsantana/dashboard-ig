import { ButtonNewTransaction, HeaderContainer, HeaderContent } from './styles'
import LogoDash from '../../assets/Logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={LogoDash} alt="" />
        <ButtonNewTransaction>Nova transação</ButtonNewTransaction>
      </HeaderContent>
    </HeaderContainer>
  )
}
