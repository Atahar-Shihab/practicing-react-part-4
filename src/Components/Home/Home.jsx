import { useMemo, useState } from 'react'
import { categories, products } from '../../data/catalog'
import ProductCard from '../ProductCard/ProductCard'
import './Home.css'

export default function Home() {
  const [category, setCategory] = useState('all')
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(null)
  const visibleProducts = useMemo(() => products.filter((product) =>
    (category === 'all' || product.category === category) && product.name.toLowerCase().includes(query.toLowerCase())), [category, query])

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow"><span /> A calmer way to shop tech</p>
          <h1>Designed for the way <em>you</em> move.</h1>
          <p className="hero-description">Considered technology, selected for creative energy and everyday joy. Meet your next favorite thing.</p>
          <div className="hero-buttons"><a href="#collection" className="primary-cta">Explore the edit <span>→</span></a><a href="#story" className="secondary-cta">Why Lumina</a></div>
          <div className="hero-proof"><div><strong>48h</strong><span>thoughtful dispatch</span></div><div><strong>4.9/5</strong><span>from our community</span></div></div>
        </div>
        <div className="hero-art" aria-label="A dreamy arrangement of technology" role="img"><div className="halo" /><div className="phone-mockup"><span>09:41</span><div className="lens" /><small>LUMINA</small></div><div className="floating-note">Made to feel<br /><b>like yours.</b></div><div className="spark one">✦</div><div className="spark two">✧</div></div>
      </section>
      <section className="collection-section" id="collection">
        <div className="section-heading"><div><p className="eyebrow">The current edit</p><h2>Small upgrades. Big feelings.</h2></div><label className="search-field"><span>⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search the collection" aria-label="Search products" /></label></div>
        <div className="filter-row" aria-label="Product categories">{categories.map((item) => <button key={item.id} className={category === item.id ? 'selected' : ''} onClick={() => setCategory(item.id)}><span>{item.icon}</span>{item.label}</button>)}</div>
        {visibleProducts.length ? <div className="product-grid">{visibleProducts.map((product) => <ProductCard key={product.id} product={product} onPreview={setSelected} />)}</div> : <div className="empty-state">No pieces found. Try a different search.</div>}
      </section>
      <section className="story-band" id="story"><p>TECH, WITH A LITTLE MORE <i>SOUL</i></p><span>We only keep the good stuff: clever, beautiful tools that earn their place in your day.</span></section>
      {selected && <div className="product-modal" role="dialog" aria-modal="true" aria-label={`${selected.name} details`} onClick={() => setSelected(null)}><div onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setSelected(null)} aria-label="Close">×</button><p className="eyebrow">{selected.badge}</p><h2>{selected.name}</h2><p>{selected.description}</p><strong>${selected.price}</strong></div></div>}
    </div>
  )
}
