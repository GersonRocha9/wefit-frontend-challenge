import { useEffect, useState } from 'react'
import { Container, QuantityInput } from './styles'

import minusIcon from '../../assets/minusIcon.svg'
import plusIcon from '../../assets/plusIcon.svg'

interface SelectQuantityInputProps {
  value: number
  onChange: (value: number) => void
}

export function SelectQuantityInput({
  value,
  onChange,
}: SelectQuantityInputProps) {
  const [inputValue, setInputValue] = useState(value)

  const handleDecrementQuantity = () => {
    setInputValue(inputValue - 1)
  }

  const handleIncrementQuantity = () => {
    setInputValue(inputValue + 1)
  }

  useEffect(() => {
    onChange(inputValue)
  }, [inputValue, onChange])

  return (
    <Container>
      <button onClick={handleDecrementQuantity} disabled={inputValue === 1}>
        <img src={minusIcon} alt="Ícone de menos" />
      </button>

      <QuantityInput
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(Number(e.target.value))}
      />

      <button onClick={handleIncrementQuantity}>
        <img src={plusIcon} alt="Ícone de mais" />
      </button>
    </Container>
  )
}
