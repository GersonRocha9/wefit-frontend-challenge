import {
  CartContainer,
  CartInfoContainer,
  ContentContainer,
  HeaderContainer,
  Image,
} from './styles'

import { HTMLAttributes } from 'react'
import { useNavigate } from 'react-router-dom'
import { ICartItem } from '../../@types/movie'
import bagIcon from '../../assets/bagIcon.svg'
import { Typography } from '../../components'

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
  cartItems: ICartItem[]
}

export const Header = ({ cartItems }: HeaderProps) => {
  // ROUTER
  const navigate = useNavigate()

  return (
    <HeaderContainer>
      <ContentContainer>
        <Typography
          size={20}
          weight={700}
          onClick={() => navigate('/')}
          style={{ cursor: 'pointer' }}
        >
          WeMovies
        </Typography>

        <CartContainer onClick={() => navigate('/cart')}>
          <CartInfoContainer>
            <Typography size={14} weight={600} className="cart-title">
              Meu Carrinho
            </Typography>

            <Typography size={12} weight={600} color="#999">
              {cartItems.length} {cartItems.length > 1 ? 'itens' : 'item'}
            </Typography>
          </CartInfoContainer>
          <Image src={bagIcon} alt="Ícone de bolsa representando o carrinho" />
        </CartContainer>
      </ContentContainer>
    </HeaderContainer>
  )
}
