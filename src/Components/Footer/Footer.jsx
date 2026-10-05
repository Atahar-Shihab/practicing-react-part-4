
import { NavLink } from 'react-router'
import './Footer.css'

export default function Footer() {
  return <footer className="site-footer">
    <div><NavLink className="footer-brand" to="/">LUMINA<span>✦</span></NavLink><p>Technology with a little more feeling.</p></div>
    <div className="footer-links"><NavLink to="/mobiles">Mobiles</NavLink><NavLink to="/laptops">Laptops</NavLink><NavLink to="/users">Community</NavLink></div>
    <p className="footer-note">© 2026 Lumina Studio<br />Made for everyday wonder.</p>
  </footer>
}
