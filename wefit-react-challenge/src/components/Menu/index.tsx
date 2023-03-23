// import { ICartItem } from '../../@types/movie'
import { CatalogItem, Spinner } from '../../components'
import { Container, ContentContainer } from './styles'

import { HTMLAttributes } from 'react'
import { useTheme } from 'styled-components'
import { IMovie } from '../../@types/movie'

interface MenuProps extends HTMLAttributes<HTMLDivElement> {
  moviesList: IMovie[]
  isLoading: boolean
  // onAddToCart?: (movie: ICartItem) => void
}

export const Menu = ({ moviesList, isLoading }: MenuProps) => {
  // THEME HOOK
  const theme = useTheme()

  return (
    <Container>
      <ContentContainer>
        {isLoading ? (
          <Spinner size={40} color={theme.colors.white} />
        ) : (
          moviesList.map((movie) => (
            <CatalogItem
              key={movie.id}
              movie={movie}
              // onAddToCart={(movie: ICartItem) => onAddToCart(movie)}
            />
          ))
        )}
      </ContentContainer>
    </Container>
  )
}
