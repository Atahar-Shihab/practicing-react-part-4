import { useContext } from 'react'
import { CartContext } from '../context/CartStore'

export const useCart = () => useContext(CartContext)
