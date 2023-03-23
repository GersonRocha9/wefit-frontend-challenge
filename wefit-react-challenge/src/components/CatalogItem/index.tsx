import { HTMLAttributes, useState } from 'react'
import { ICartItem, IMovie } from '../../@types/movie'
import { CartButton, Typography } from '../../components'
import { CardContainer, CardMovieImage } from './styles'

import { useTheme } from 'styled-components'

interface CardMovieProps extends HTMLAttributes<HTMLDivElement> {
  movie: IMovie
  onAddToCart: (movie: ICartItem) => void
}

export function CatalogItem({
  movie: { id, title, image, price },
  onAddToCart,
}: CardMovieProps) {
  const [quantity] = useState(1)
  const theme = useTheme()

  function handleConvertPriceToBRL(value: number) {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }

  return (
    <CardContainer>
      <CardMovieImage>
        <img src={image} alt="Imagem representando a capa do filme" />
      </CardMovieImage>

      <Typography size={12} weight={700} color={theme.colors.black}>
        {title}
      </Typography>

      <Typography size={16} weight={700} color={theme.colors.black}>
        {handleConvertPriceToBRL(price)}
      </Typography>

      <CartButton
        onClick={() => onAddToCart({ id, title, image, price, quantity })}
      />
    </CardContainer>
  )
}
