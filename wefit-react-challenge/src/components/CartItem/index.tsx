import {
  CardContainer,
  CardContent,
  CardMovieImage,
  ColumnContainer,
  MobileCardContainer,
  RowContainer,
} from './styles'
import { DeleteButton, SelectQuantityInput, Typography } from '../../components'

import { ICartItem } from '../../@types/movie'
import { handleConvertPriceToBRL } from '../../utils'
import { useState } from 'react'
import { useTheme } from 'styled-components'

interface CardMovieProps {
  movie: ICartItem
  onRemoveCartItem: (id: number) => void
}

export function CartItem({
  movie: { id, title, price, image, quantity },
  onRemoveCartItem,
}: CardMovieProps) {
  const theme = useTheme()
  const [updatedItemPrice, setUpdatedItemPrice] = useState(price)

  const handleChangeQuantity = (value: number) => {
    setUpdatedItemPrice(value * price)
  }

  return (
    <>
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

      <MobileCardContainer>
        <ColumnContainer>
          <CardMovieImage src={image} alt={title} />
        </ColumnContainer>

        <ColumnContainer
          style={{
            flex: 1,
          }}
        >
          <CardContent>
            <Typography weight={700} size={14} color={theme.colors.background}>
              {title}
            </Typography>

            <Typography weight={700} size={16} color={theme.colors.background}>
              {handleConvertPriceToBRL(price)}
            </Typography>

            <DeleteButton onClick={() => onRemoveCartItem(id)} />
          </CardContent>

          <RowContainer>
            <SelectQuantityInput
              value={quantity}
              onChange={handleChangeQuantity}
            />

            <div>
              <Typography weight={700} size={14} color={theme.colors.gray}>
                Subtotal
              </Typography>

              <Typography
                weight={700}
                size={16}
                color={theme.colors.background}
              >
                {handleConvertPriceToBRL(updatedItemPrice * quantity)}
              </Typography>
            </div>
          </RowContainer>
        </ColumnContainer>
      </MobileCardContainer>
    </>
  )
}
