import { Container, ContentContainer } from './styles'

import { CatalogItem } from '../../components'
// import { ICartItem } from '../../@types/movie'
import { HTMLAttributes } from 'react'
import { IMovie } from '../../@types/movie'

interface MenuProps extends HTMLAttributes<HTMLDivElement> {
  moviesList: IMovie[]
  // onAddToCart?: (movie: ICartItem) => void
}

export const Menu = ({ moviesList }: MenuProps) => {
  // THEME HOOK

  return (
    <Container>
      <ContentContainer>
        {moviesList.map((movie) => (
          <CatalogItem
            key={movie.id}
            movie={movie}
            // onAddToCart={(movie: ICartItem) => onAddToCart(movie)}
          />
        ))}
      </ContentContainer>
    </Container>
  )
}
