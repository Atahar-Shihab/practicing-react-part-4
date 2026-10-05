import { useMemo, useState } from 'react'
import { CartContext } from './CartStore'

export function CartProvider({ children }) {
  const [items, setItems] = useState([])

  const addToCart = (product) => {
    setItems((current) => {
      const existing = current.find((item) => item.id === product.id)
      return existing
        ? current.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
        : [...current, { ...product, quantity: 1 }]
    })
  }

  const value = useMemo(() => ({
    items,
    count: items.reduce((total, item) => total + item.quantity, 0),
    addToCart,
  }), [items])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

