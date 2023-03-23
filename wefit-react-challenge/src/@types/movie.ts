export interface IMovie {
  id: number
  title: string
  image: string
  price: number
}

export interface ICartItem {
  quantity: number
  id: number
  title: string
  price: number
  image: string
}

export interface MovieContextProps {
  isLoading: boolean
  movieList: IMovie[]
  cartItems: ICartItem[]
  handleAddToCart: (movie: ICartItem) => Promise<void>
  handleRemoveItemFromCart: (id: number) => Promise<void>
  handleChangeQuantity: (id: number, quantity: number) => Promise<void>
  handleCreateNewOrder: () => Promise<void>
}
