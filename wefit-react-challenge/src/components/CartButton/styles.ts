import styled from 'styled-components'

interface ContainerButtonProps {
  isClickedToCart: boolean
}

export const Container = styled.button<ContainerButtonProps>`
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

  background-color: ${({ theme, isClickedToCart }) =>
    isClickedToCart ? theme.colors.green : theme.colors.blue};

  text-transform: uppercase;

  cursor: ${({ isClickedToCart }) =>
    isClickedToCart ? 'not-allowed' : 'pointer'};

  &:hover {
    transition: 0.2s;
    filter: brightness(1.1);
  }
`
