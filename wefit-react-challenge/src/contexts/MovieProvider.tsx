import { ReactNode, createContext, useEffect, useState } from 'react'
import { ICartItem, IMovie, MovieContextProps } from '../@types/movie'

import { api } from '../services'

export const MovieContext = createContext({} as MovieContextProps)

export const MovieProvider = ({ children }: { children: ReactNode }) => {
  // STATES
  const [movieList, setMovieList] = useState<IMovie[]>([])
  const [cartItems, setCartItems] = useState<ICartItem[]>([])
  const [isLoading, setIsLoading] = useState(true)

  // FUNCTIONS
  const handleGetMoviesFromCart = async () => {
    try {
      const response = await api.get('/cart')
      const data = response.data
      setCartItems(data)
    } catch (error) {
      console.error(error)
    }
  }

  const getMovieFromApi = async () => {
    try {
      const response = await api.get('/products')
      const data = response.data
      setMovieList(data)
      setIsLoading(false)
    } catch (error) {
      console.error(error)
    }
  }

  const handleAddToCart = async (movie: ICartItem) => {
    try {
      const response = await api.post('/cart', {
        id: movie.id,
        title: movie.title,
        price: movie.price,
        image: movie.image,
        quantity: movie.quantity,
      })
      const data = response.data
      setCartItems(data)

      handleGetMoviesFromCart()
    } catch (error) {
      console.error(error)
    }
  }

  const handleRemoveItemFromCart = async (id: number) => {
    try {
      await api.delete(`/cart/${id}`)
      handleGetMoviesFromCart()
    } catch (error) {
      console.error(error)
    }
  }

  const handleChangeQuantity = async (id: number, quantity: number) => {
    try {
      await api.put(`/cart/${id}`, {
        ...cartItems.find((item) => item.id === id),
        quantity,
      })
      handleGetMoviesFromCart()
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getMovieFromApi()
    handleGetMoviesFromCart()
  }, [])

  return (
    <MovieContext.Provider
      value={{
        isLoading,
        movieList,
        cartItems,
        handleAddToCart,
        handleRemoveItemFromCart,
        handleChangeQuantity,
      }}
    >
      {children}
    </MovieContext.Provider>
  )
}
