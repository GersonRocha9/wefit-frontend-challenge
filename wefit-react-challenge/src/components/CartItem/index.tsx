import { DeleteButton, SelectQuantityInput, Typography } from '../../components'
import { CardContainer, CardContent, CardMovieImage } from './styles'

import { useState } from 'react'
import { useTheme } from 'styled-components'
import { ICartItem } from '../../@types/movie'
import { handleConvertPriceToBRL } from '../../utils'

interface CardCoffeeProps {
  movie: ICartItem
  onRemoveCartItem: (id: number) => void
}

export function CartItem({
  movie: { id, title, price, image, quantity },
  onRemoveCartItem,
}: CardCoffeeProps) {
  const theme = useTheme()
  const [updatedItemPrice, setUpdatedItemPrice] = useState(price)

  const handleChangeQuantity = (value: number) => {
    setUpdatedItemPrice(value * price)
  }

  return (
    <CardContainer>
      <CardMovieImage src={image} alt={title} />

      <CardContent>
        <Typography weight={700} size={14} color={theme.colors.background}>
          {title}
        </Typography>

        <Typography weight={700} size={16} color={theme.colors.background}>
          {handleConvertPriceToBRL(price)}
        </Typography>
      </CardContent>

      <SelectQuantityInput value={quantity} onChange={handleChangeQuantity} />

      <Typography weight={700} size={16} color={theme.colors.background}>
        {handleConvertPriceToBRL(updatedItemPrice * quantity)}
      </Typography>

      <DeleteButton onClick={() => onRemoveCartItem(id)} />
    </CardContainer>
  )
}
