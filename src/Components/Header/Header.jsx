import { NavLink } from 'react-router'
import { useCart } from '../../hooks/useCart'
import './Header.css'

const links = [
  { to: '/', label: 'Discover', end: true },
  { to: '/mobiles', label: 'Mobiles' },
  { to: '/laptops', label: 'Laptops' },
  { to: '/users', label: 'Community' },
  { to: '/about', label: 'Our story' },
]

export default function Header() {
  const { count } = useCart()

  return (
    <header className="site-header">
      <NavLink className="brand" to="/" aria-label="Lumina home">
        <span className="brand-mark">L</span>
        <span>Lumina</span>
      </NavLink>
      <nav className="site-nav" aria-label="Main navigation">
        {links.map(({ to, label, end }) => <NavLink key={to} to={to} end={end}>{label}</NavLink>)}
      </nav>
      <a className="cart-button" href="#collection" aria-label={`${count} items in cart`}>
        Bag <span>{count}</span>
      </a>
    </header>
  )
}
