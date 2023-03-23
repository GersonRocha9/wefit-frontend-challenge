import { useEffect, useState } from 'react'
import { Header, Menu, Spinner } from '../../components'

import { useTheme } from 'styled-components'
import { IMovie } from '../../@types/movie'
import { api } from '../../services'
import { Container } from './styles'

export function Home() {
  const [moviesList, setMoviesList] = useState<IMovie[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const theme = useTheme()

  const getMoviesFromApi = async () => {
    try {
      const response = await api.get('/products')
      const data = response.data
      setMoviesList(data)
      setIsLoading(false)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getMoviesFromApi()
  }, [])

  return (
    <Container>
      <Header />
      {isLoading ? (
        <Spinner size={40} color={theme.colors.white} />
      ) : (
        <Menu
          moviesList={moviesList}
          // onAddToCart={handleAddToCart}
        />
      )}
    </Container>
  )
}
