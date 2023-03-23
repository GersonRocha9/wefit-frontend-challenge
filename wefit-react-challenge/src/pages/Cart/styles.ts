import styled from 'styled-components'

export const ContentContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  gap: 32px;
  align-items: flex-start;
  margin-top: 20px;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`
