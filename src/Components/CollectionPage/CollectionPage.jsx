import { useState } from 'react'
import { products } from '../../data/catalog'
import ProductCard from '../ProductCard/ProductCard'
import './CollectionPage.css'

export default function CollectionPage({ category, title, description }) {
  const [selected, setSelected] = useState(null)
  const collection = products.filter((product) => product.category === category)
  return <section className="collection-page">
    <p className="eyebrow">The {category} edit</p><h1>{title}</h1><p className="collection-intro">{description}</p>
    <div className="product-grid">{collection.map((product) => <ProductCard product={product} key={product.id} onPreview={setSelected} />)}</div>
    {selected && <div className="collection-modal" role="dialog" aria-modal="true" onClick={() => setSelected(null)}><div onClick={(event) => event.stopPropagation()}><button onClick={() => setSelected(null)} aria-label="Close product details">×</button><p className="eyebrow">{selected.badge}</p><h2>{selected.name}</h2><p>{selected.description}</p></div></div>}
  </section>
}
