import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  width: 100%;
  max-width: 960px;
  background-color: ${({ theme }) => theme.colors.white};
  margin: 0 auto;
  padding: 64px 0;
  border-radius: 4px;
`

export const BackButton = styled.button`
  width: 100%;
  max-width: 180px;
  padding: 11px;
  border: none;
  border-radius: 4px;
  transition: 0.2s;
  background-color: ${({ theme }) => theme.colors.blue};
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    transition: 0.2s;
    filter: brightness(1.1);
  }
`

export const HeaderCartContainer = styled.header`
  width: 100%;
  max-width: 750px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  text-transform: uppercase;
  align-self: flex-start;
  padding: 0 28px;

  @media (max-width: 768px) {
    display: none;
  }
`

export const FooterCartContainer = styled.footer`
  width: 100%;
  max-width: 902px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-transform: uppercase;

  span {
    color: ${({ theme }) => theme.colors.gray};
    font-weight: 700;
    font-size: 14px;
    margin-right: 8px;
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 16px;

    .total {
      align-self: flex-end;
      margin-right: 40px;
    }
  }
`

export const ConfirmOrderButton = styled.button`
  width: 100%;
  max-width: 235px;
  padding: 11px;
  border: none;
  border-radius: 4px;
  transition: 0.2s;
  background-color: ${({ theme }) => theme.colors.blue};
  text-transform: uppercase;

  &:hover {
    transition: 0.2s;
    filter: brightness(1.1);
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 80%;
  }
`

export const Separator = styled.div`
  width: 100%;
  max-width: 902px;
  height: 1px;
  background: ${({ theme }) => theme.colors.gray};
`
