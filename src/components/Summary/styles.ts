import styled, { css } from 'styled-components'

export const SummaryContainer = styled.div`
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -5rem;
`

interface SummaryCardProps {
  variant?: 'green'
}

export const SummaryCard = styled.div<SummaryCardProps>`
  background-color: ${(props) => props.theme.gray600};
  color: ${(props) => props.theme.gray300};
  border-radius: 6px;
  padding: 1.5rem 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  strong {
    display: block;
    margin-top: 0.75rem;
    font-size: 2rem;
    font-weight: bold;
    color: ${(props) => props.theme.white};
  }

  ${(props) =>
    props.variant === 'green' &&
    css`
      background-color: ${props.theme.green700};
    `}
`
