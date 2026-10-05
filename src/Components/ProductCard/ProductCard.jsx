import { formatPrice } from '../../data/catalog'
import { useCart } from '../../context/CartContext'
import './ProductCard.css'

export default function ProductCard({ product, onPreview }) {
  const { addToCart } = useCart()

  return (
    <article className={`product-card tone-${product.color}`}>
      <div className="product-visual" aria-hidden="true">
        <span className="product-orb" />
        <span className="product-shape">{product.category === 'laptop' ? '▱' : product.category === 'audio' ? '◒' : '●'}</span>
      </div>
      <div className="product-body">
        <span className="product-badge">{product.badge}</span>
        <div className="product-title"><div><h3>{product.name}</h3><p>★ {product.rating} rated</p></div><strong>{formatPrice(product.price)}</strong></div>
        <div className="product-actions">
          <button className="text-action" onClick={() => onPreview(product)}>Details</button>
          <button className="add-button" onClick={() => addToCart(product)}>Add to bag <span>+</span></button>
        </div>
      </div>
    </article>
  )
}
