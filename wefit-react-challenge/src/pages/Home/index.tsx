import { useEffect, useState } from 'react'
import { Header, Menu } from '../../components'

import { IMovie } from '../../@types/movie'
import { api } from '../../services'
import { Container } from './styles'

export function Home() {
  const [moviesList, setMoviesList] = useState<IMovie[]>([])
  const [isLoading, setIsLoading] = useState(true)

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

      <Menu
        moviesList={moviesList}
        isLoading={isLoading}
        // onAddToCart={handleAddToCart}
      />
    </Container>
  )
}
