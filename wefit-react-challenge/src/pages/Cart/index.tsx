import {
  BackButton,
  CartContainer,
  ConfirmOrderButton,
  Container,
  FooterCartContainer,
  HeaderCartContainer,
  Separator,
} from './styles'
/* eslint-disable prettier/prettier */
import { CartItem, Header, Typography } from '../../components'

import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTheme } from 'styled-components'
import { MovieContextProps } from '../../@types/movie'
import noCartItems from '../../assets/nothingHere.svg'
import { MovieContext } from '../../contexts'
import { calculateTotalPrice } from '../../utils'

export function Cart() {
  // CONTEXT
  const { cartItems, handleRemoveItemFromCart, handleCreateNewOrder } =
    useContext(MovieContext) as MovieContextProps
  const theme = useTheme()

  // ROUTER
  const navigate = useNavigate()

  return (
    <Container>
      <Header cartItems={cartItems} />

      <CartContainer>
        {cartItems.length === 0 ? (
          <>
            <Typography weight={700} size={20} color={theme.colors.background}>
              {`Parece que não há nada por aqui :(`}
            </Typography>

            <img
              src={noCartItems}
              alt="Imagem ilustrativa mostrando uma mulher, com um botão de voltar, representando que não há nada no carrinho"
            />

            <BackButton onClick={() => navigate('/')}>
              <Typography weight={700} size={14} color={theme.colors.white}>
                Voltar
              </Typography>
            </BackButton>
          </>
        ) : (
          <>
            <HeaderCartContainer>
              <Typography weight={700} size={14} color={theme.colors.gray}>
                Produto
              </Typography>

              <Typography
                weight={700}
                size={14}
                color={theme.colors.gray}
                style={{
                  marginLeft: '220px',
                }}
              >
                Qtd
              </Typography>

              <Typography weight={700} size={14} color={theme.colors.gray}>
                Subtotal
              </Typography>
            </HeaderCartContainer>

            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                movie={item}
                onRemoveCartItem={handleRemoveItemFromCart}
              />
            ))}

            <Separator />

            <FooterCartContainer>
              <ConfirmOrderButton onClick={handleCreateNewOrder}>
                <Typography weight={700} size={14} color={theme.colors.white}>
                  Finalizar pedido
                </Typography>
              </ConfirmOrderButton>

              <Typography
                weight={700}
                size={24}
                color={theme.colors.background}
              >
                <span>Total: </span>
                {`R$ ${calculateTotalPrice(cartItems)}`}
              </Typography>
            </FooterCartContainer>
          </>
        )}
      </CartContainer>
    </Container>
  )
}
