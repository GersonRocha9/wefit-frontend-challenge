import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
`

export const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;
  width: 100%;
  max-width: 1040px;
  margin: 0 auto;
  align-items: center;
  justify-items: center;

  @media (max-width: 1066px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 16px;
  }
`
