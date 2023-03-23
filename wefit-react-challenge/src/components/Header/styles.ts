import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
`

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 24.5px 10px;
`

export const CartContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  cursor: pointer;
`

export const CartInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0px;

  @media (max-width: 768px) {
    .cart-title {
      display: none;
    }
  }
`

export const Image = styled.img`
  width: 29.32px !important;
  height: 25.31px;
`
