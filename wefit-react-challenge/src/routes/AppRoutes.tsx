import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Cart, ConfirmedBuy, Home } from '../pages'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/confirmed" element={<ConfirmedBuy />} />
      </Routes>
    </BrowserRouter>
  )
}
