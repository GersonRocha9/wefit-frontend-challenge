import { ICartItem, IMovie } from '../../@types/movie'
import { Container, ContentContainer } from './styles'

import { HTMLAttributes } from 'react'
import { CatalogItem } from '../../components'

interface MenuProps extends HTMLAttributes<HTMLDivElement> {
  moviesList: IMovie[]
  onAddToCart: (movie: ICartItem) => void
}

export const Menu = ({ moviesList, onAddToCart }: MenuProps) => {
  return (
    <Container>
      <ContentContainer>
        {moviesList.map((movie) => (
          <CatalogItem
            key={movie.id}
            movie={movie}
            onAddToCart={(movie: ICartItem) => onAddToCart(movie)}
          />
        ))}
      </ContentContainer>
    </Container>
  )
}
