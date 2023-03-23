import { ButtonHTMLAttributes } from 'react'
import trashIcon from '../../assets/trashIcon.svg'
import { Container } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function DeleteButton({ onClick }: ButtonProps) {
  return (
    <Container onClick={onClick}>
      <img src={trashIcon} alt="Ícone de lixeira" />
    </Container>
  )
}
