import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 310px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  padding: 10px 11px;
`

export const CardMovieImage = styled.div`
  width: 147px;
  margin-bottom: 7px;

  img {
    width: 100%;
  }
`
