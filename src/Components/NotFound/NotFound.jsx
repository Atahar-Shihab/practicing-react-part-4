import { Link } from 'react-router'

export default function NotFound() {
  return <section className="collection-page"><p className="eyebrow">A small detour</p><h1>That page drifted away.</h1><p className="collection-intro">Let’s get you back to the good stuff.</p><Link className="primary-cta" to="/">Back to discover <span>→</span></Link></section>
}
