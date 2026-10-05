import './About.css'

export default function About() {
  return <section className="about-page">
    <p className="eyebrow">Our point of view</p><h1>Less noise.<br /><em>More wonder.</em></h1>
    <div className="about-grid"><p>We started Lumina for people who want their tools to be as considered as the rest of their lives. No endless scroll. No spec-sheet shouting.</p><p>Every piece in our edit earns its place through usefulness, personality and that rare feeling of delight when you pick it up.</p></div>
    <div className="values"><div><span>01</span><h2>Intentional</h2><p>We prefer a small, sharp edit to an aisle of maybe.</p></div><div><span>02</span><h2>Human</h2><p>Technology should fit your life, not ask you to fit it.</p></div><div><span>03</span><h2>Curious</h2><p>We are always looking for the next thing worth caring about.</p></div></div>
  </section>
}
