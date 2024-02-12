import * as Dialog from '@radix-ui/react-dialog'
import styled from 'styled-components'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;

  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`

export const Close = styled(Dialog.Close)`
  color: ${(props) => props.theme.gray300};
  background: transparent;
  border: none;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  cursor: pointer;
  line-height: 0;
`

export const Content = styled(Dialog.Content)`
  padding: 2rem 3rem;
  min-width: 32rem;
  background: ${(props) => props.theme.gray800};
  border-radius: 6px;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;

    input {
      background-color: ${(props) => props.theme.gray900};
      color: ${(props) => props.theme.gray100};
      width: 100%;
      border-radius: 6px;
      padding: 1rem;
      border: none;
    }

    button[type='submit'] {
      padding: 1rem 2rem;
      border-radius: 6px;
      width: 100%;
      background-color: ${(props) => props.theme.green500};
      color: ${(props) => props.theme.white};
      border: 1px solid ${(props) => props.theme.green700};
      font-weight: bold;

      &:hover {
        background-color: ${(props) => props.theme.green700};
        transition: all 0.2s;
      }
    }
  }
`

export const TransactionTypeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`

interface TransactionType {
  variant: 'income' | 'outcome'
}

export const TransactionTypeButton = styled.button<TransactionType>`
  background-color: ${(props) => props.theme.gray700};
  border-radius: 6px;
  height: 3.625rem;
  border: none;
  cursor: pointer;
  width: 100%;
  color: ${(props) => props.theme.gray300};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: ${(props) =>
      props.variant === 'income' ? props.theme.green300 : props.theme.red300};
  }
`
