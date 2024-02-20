import { styled } from 'styled-components'

export const TransactionTableContainer = styled.main`
  max-width: 1120px;

  padding: 0 1.25rem;
  margin: 4rem auto 2rem;
`

export const TransactionTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1rem;

  td {
    padding: 1.25rem 2rem;
    background-color: ${(props) => props.theme.gray700};
    color: ${(props) => props.theme.gray100};

    &:first-child {
      border-top-left-radius: 6px;
      border-top-right-radius: 6px;
    }

    &:last-child {
      border-bottom-left-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`

interface PriceHighLightProps {
  variant: 'income' | 'outcome'
}

export const PriceHighLight = styled.span<PriceHighLightProps>`
  color: ${(props) =>
    props.variant === 'income' ? props.theme.green500 : props.theme.red300};
`
