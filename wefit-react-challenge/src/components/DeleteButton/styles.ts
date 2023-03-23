import styled from 'styled-components'

export const Container = styled.button`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  border: none;
  background: none;
  transition: 0.2s;
  cursor: pointer;

  img {
    width: 18.3px;
    height: 18px;
  }

  &:hover {
    transition: 0.2s;
    filter: brightness(1.1);
  }
`
