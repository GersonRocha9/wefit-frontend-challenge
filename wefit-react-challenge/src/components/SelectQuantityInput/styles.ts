import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-transform: uppercase;
  padding: 8px;
  width: 72px;
  border: none;
  border-radius: 6px;
  transition: 0.2s;

  button {
    background: none;
    border: none;
    font-size: 1.5rem;
    font-weight: 700;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      filter: brightness(1.1);
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`

export const QuantityInput = styled.input`
  width: 62px;
  height: 26px;
  padding: 3.5px 0 3.5px 16px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.background};
  font-size: 14px;
  font-weight: 400;
`
