import styled from 'styled-components'

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  height: 40px;
  padding: 11px;
  margin-top: 8px;
  border: none;
  border-radius: 6px;
  transition: 0.2s;
  background-color: ${({ theme }) => theme.colors.blue};
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    transition: 0.2s;
    filter: brightness(1.1);
  }
`
