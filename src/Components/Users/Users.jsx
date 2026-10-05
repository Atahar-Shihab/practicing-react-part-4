import { useLoaderData } from 'react-router'
import './Users.css'

export default function Users() {
  const users = useLoaderData()
  return (
    <section className="community-page">
      <p className="eyebrow">Good company</p>
      <h1>Meet the Lumina circle.</h1>
      <p className="community-intro">Makers, dreamers and delightfully curious people who keep the conversation moving.</p>
      <div className="member-grid">
        {users.map((user, index) => <article className="member-card" key={user.id}>
          <div className="member-avatar">{user.name.split(' ').map((part) => part[0]).slice(0, 2).join('')}</div>
          <div><p className="member-number">CIRCLE MEMBER · {String(index + 1).padStart(2, '0')}</p><h2>{user.name}</h2><p className="member-handle">@{user.username.toLowerCase().replaceAll(' ', '')}</p></div>
          <a href={`mailto:${user.email}`}>Say hello <span>↗</span></a>
        </article>)}
      </div>
    </section>
  )
}
