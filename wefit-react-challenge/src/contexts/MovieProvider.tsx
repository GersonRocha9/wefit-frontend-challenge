import { ICartItem, IMovie, MovieContextProps } from '../@types/movie'
import { ReactNode, createContext, useEffect, useState } from 'react'

import { api } from '../services'
import { calculateTotalPrice } from '../utils'

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

  function removeAllCartItems() {
    cartItems.forEach((item) => {
      handleRemoveItemFromCart(item.id)
    })
  }

  const handleCreateNewOrder = async () => {
    const order = {
      items: cartItems.map((item) => ({
        title: item.title,
        quantity: item.quantity,
        price: item.price,
        image: item.image,
      })),

      totalToPay: calculateTotalPrice(cartItems),
    }

    await api.post('/orders', order)

    setTimeout(() => {
      removeAllCartItems()
      window.location.href = '/confirmed'
    }, 2000)
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
        handleCreateNewOrder,
      }}
    >
      {children}
    </MovieContext.Provider>
  )
}
