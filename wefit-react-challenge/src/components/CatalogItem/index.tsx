import { CartButton, Typography } from '../../components'
import { CardContainer, CardMovieImage } from './styles'

import { HTMLAttributes } from 'react'
import { useTheme } from 'styled-components'
import { IMovie } from '../../@types/movie'

interface CardMovieProps extends HTMLAttributes<HTMLDivElement> {
  movie: IMovie
  // onAddToCart: (movie: ICartItem) => void
}

export function CatalogItem({
  movie: { id, title, image, price },
}: CardMovieProps) {
  // const [quantity, setQuantity] = useState(1)
  const theme = useTheme()

  function handleConvertPriceToBRL(value: number) {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }

  function handleAddToCart(movie: IMovie) {
    console.log(movie)
  }

  return (
    <CardContainer>
      <CardMovieImage>
        <img src={image} alt={title} />
      </CardMovieImage>

      <Typography size={12} weight={700} color={theme.colors.black}>
        {title}
      </Typography>

      <Typography size={16} weight={700} color={theme.colors.black}>
        {handleConvertPriceToBRL(price)}
      </Typography>

      <CartButton
        onClick={() => handleAddToCart({ id, title, image, price })}
      />
    </CardContainer>
  )
}
