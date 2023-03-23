import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  width: 100%;
  max-width: 902px;
  padding: 0 24px;

  @media (max-width: 768px) {
    display: none;
  }
`

export const CardMovieImage = styled.img`
  width: 89px;
  height: 114px;
`

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 8px;

  p {
    align-self: flex-start;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    text-align: left;
    width: 100%;
  }
`

export const CardButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`

export const MobileCardContainer = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 16px;
    width: 100%;
    max-width: 345px;
    padding: 0 24px;
  }
`

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-transform: uppercase;
`
