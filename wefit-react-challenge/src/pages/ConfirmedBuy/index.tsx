import { Header, Typography } from '../../components'
import { BackButton, CartContainer, Container } from './styles'

import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTheme } from 'styled-components'
import { MovieContextProps } from '../../@types/movie'
import successBuy from '../../assets/successBuy.svg'
import { MovieContext } from '../../contexts'

export function ConfirmedBuy() {
  // CONTEXT
  const { cartItems } = useContext(MovieContext) as MovieContextProps
  const theme = useTheme()

  // ROUTER
  const navigate = useNavigate()

  return (
    <Container>
      <Header cartItems={cartItems} />

      <CartContainer>
        <>
          <Typography weight={700} size={20} color={theme.colors.background}>
            Compra realizada com sucesso!
          </Typography>

          <img
            src={successBuy}
            alt="Imagem ilustrativa mostrando um homem, com um botão de voltar, representando que a compra foi realizada com sucesso."
          />

          <BackButton onClick={() => navigate('/')}>
            <Typography weight={700} size={14} color={theme.colors.white}>
              Voltar
            </Typography>
          </BackButton>
        </>
      </CartContainer>
    </Container>
  )
}
