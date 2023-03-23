import { ButtonHTMLAttributes, ReactNode } from 'react'

import { useTheme } from 'styled-components'
import cartIcon from '../../assets/cartIconButton.svg'
import { Typography } from '../../components'
import { Container } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  quantity?: number
  icon?: ReactNode
}

export function CartButton({ quantity = 0, onClick, icon }: ButtonProps) {
  const theme = useTheme()

  return (
    <Container onClick={onClick}>
      <img src={cartIcon} alt="iconCart" />

      <Typography weight={400} size={12} color={theme.colors.white}>
        {quantity}
      </Typography>

      <Typography weight={700} size={12} color={theme.colors.white}>
        Adicionar ao carrinho
      </Typography>
    </Container>
  )
}
