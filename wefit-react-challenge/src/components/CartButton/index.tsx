import { ButtonHTMLAttributes, MouseEvent, useState } from 'react'

import { useTheme } from 'styled-components'
import cartIcon from '../../assets/cartIconButton.svg'
import { Typography } from '../../components'
import { Container } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function CartButton({ onClick }: ButtonProps) {
  const theme = useTheme()
  const [isClickedToCart, setIsClickedToCart] = useState(false)

  return (
    <Container
      onClick={(e: MouseEvent<HTMLButtonElement>) => {
        setIsClickedToCart(true)
        onClick && onClick(e)
      }}
      isClickedToCart={isClickedToCart}
    >
      <img src={cartIcon} alt="Ícone de carrinho" />

      <Typography weight={400} size={12} color={theme.colors.white}>
        {isClickedToCart ? 1 : 0}
      </Typography>

      <Typography weight={700} size={12} color={theme.colors.white}>
        {isClickedToCart ? 'Item adicionado' : 'Adicionar ao carrinho'}
      </Typography>
    </Container>
  )
}
