/* eslint-disable prettier/prettier */
import { Header, Menu, Spinner } from '../../components'

import { useContext } from 'react'
import { useTheme } from 'styled-components'
import { MovieContextProps } from '../../@types/movie'
import { MovieContext } from '../../contexts'
import { Container } from './styles'

export function Home() {
  // CONTEXT
  const { movieList, cartItems, isLoading, handleAddToCart } = useContext(
    MovieContext
  ) as MovieContextProps

  // THEME CONTEXT
  const theme = useTheme()

  return (
    <Container>
      <Header cartItems={cartItems} />
      {isLoading ? (
        <Spinner size={40} color={theme.colors.white} />
      ) : (
        <Menu moviesList={movieList} onAddToCart={handleAddToCart} />
      )}
    </Container>
  )
}
