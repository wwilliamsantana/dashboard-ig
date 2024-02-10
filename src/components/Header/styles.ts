import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme.gray900};
  padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
`
export const ButtonNewTransaction = styled.button`
  padding: 0.75rem 1.25rem;
  background-color: ${(props) => props.theme.green500};
  color: ${(props) => props.theme.white};
  border: none;
  cursor: pointer;
  border-radius: 6px;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => props.theme.green700};
  }
`
