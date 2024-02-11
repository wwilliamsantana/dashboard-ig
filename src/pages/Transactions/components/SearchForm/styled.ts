import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  align-items: center;
  gap: 1rem;

  input {
    flex: 1;
    border: none;
    height: 52px;
    background-color: ${(props) => props.theme.gray900};
    color: ${(props) => props.theme.gray100};
    padding: 1rem;
    border-radius: 6px;

    ::placeholder {
      color: ${(props) => props.theme.gray300};
    }
  }

  button {
    padding: 0.875rem 2rem;
    background: transparent;
    color: ${(props) => props.theme.green300};
    border-radius: 6px;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    border: 1px solid ${(props) => props.theme.green300};

    &:hover {
      background: ${(props) => props.theme.green500};
      color: ${(props) => props.theme.white};
      transition: all 0.2s;
    }
  }
`
