import Header from './components/Header'
import Reveal from './components/Reveal'
import { ArrowIcon, DownloadIcon, MailIcon, SocialIcon } from './components/Icons'
import { profile } from './data/profile'

function SectionTitle({ id, eyebrow, title }: { id: string; eyebrow: string; title: string }) {
  return (
    <div className="section-head">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={`${id}-title`}>{title}</h2>
    </div>
  )
}

const YEAR = new Date().getFullYear()

export default function App() {
  const p = profile
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <section id="top" className="hero container">
          <p className="mono hero-kicker">Hi, I'm</p>
          <h1>{p.name}</h1>
          <p className="hero-title">{p.title}</p>
          <p className="hero-loc">{p.location}</p>
          <p className="hero-tag">{p.tagline}</p>
          <div className="btn-row">
            <a className="btn primary" href="#projects">View projects</a>
            <a className="btn" href="#contact">Get in touch</a>
            {p.resumeUrl && (
              <a className="btn" href={p.resumeUrl} download>
                <DownloadIcon /> Resume
              </a>
            )}
          </div>
          <ul className="social-row" aria-label="Social links">
            {p.socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="icon-link" aria-label={s.label} title={s.label}>
                  <SocialIcon label={s.label} />
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${p.email}`} className="icon-link" aria-label="Email" title="Email">
                <MailIcon />
              </a>
            </li>
          </ul>
        </section>

        <section id="about" className="section container" aria-labelledby="about-title">
          <Reveal>
            <SectionTitle id="about" eyebrow="01 · About" title="Professional summary" />
            <p className="lead">{p.about}</p>
            <dl className="stats">
              {p.highlights.map((h) => (
                <div key={h.label} className="stat">
                  <dt>{h.label}</dt>
                  <dd>{h.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </section>

        <section id="projects" className="section container" aria-labelledby="projects-title">
          <Reveal>
            <SectionTitle id="projects" eyebrow="02 · Projects" title="Things I've built" />
          </Reveal>
          <div className="cards">
            {p.projects.map((pr) => (
              <Reveal key={pr.name} className="card-wrap">
                <article className="card">
                  <div className="card-top">
                    <h3>{pr.name}</h3>
                    {pr.status && <span className="badge">{pr.status}</span>}
                  </div>
                  <p>{pr.description}</p>
                  {pr.features && (
                    <ul className="feature-list">
                      {pr.features.map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>
                  )}
                  <ul className="chips" aria-label="Technologies">
                    {pr.tags.map((t) => (
                      <li key={t} className="chip mono">{t}</li>
                    ))}
                  </ul>
                  <div className="card-links">
                    {pr.links.map((l) => (
                      <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="text-link">
                        {l.label} <ArrowIcon />
                      </a>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="experience" className="section container" aria-labelledby="experience-title">
          <Reveal>
            <SectionTitle id="experience" eyebrow="03 · Experience" title="Where I've worked" />
          </Reveal>
          <ol className="timeline">
            {p.experience.map((j) => (
              <li key={`${j.company}-${j.period}`}>
                <Reveal>
                  <div className="job-head">
                    <h3>
                      {j.role} <span className="at">· {j.company}</span>
                    </h3>
                    <p className="meta mono">
                      {j.period} · {j.location}
                    </p>
                  </div>
                  <ul className="bullets">
                    {j.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </Reveal>
              </li>
            ))}
          </ol>
        </section>

        <section id="skills" className="section container" aria-labelledby="skills-title">
          <Reveal>
            <SectionTitle id="skills" eyebrow="04 · Skills" title="Tools & technologies" />
            <div className="skill-groups">
              {p.skills.map((g) => (
                <div key={g.title} className="skill-group">
                  <h3>{g.title}</h3>
                  <ul className="chips">
                    {g.items.map((i) => (
                      <li key={i} className="chip">{i}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        <section id="education" className="section container" aria-labelledby="education-title">
          <Reveal>
            <SectionTitle id="education" eyebrow="05 · Education" title="Education" />
            <div className="card">
              <h3>{p.education.degree}</h3>
              <p>{p.education.school}</p>
              <p className="meta mono">{p.education.year}</p>
            </div>
          </Reveal>
        </section>

        <section id="contact" className="section container" aria-labelledby="contact-title">
          <Reveal>
            <SectionTitle id="contact" eyebrow="06 · Contact" title="Let's talk" />
            <p className="lead">{p.contactCta}</p>
            <div className="btn-row">
              <a className="btn primary" href={`mailto:${p.email}`}>
                <MailIcon /> Email me
              </a>
              {p.socials.map((s) => (
                <a key={s.label} className="btn" href={s.href} target="_blank" rel="noopener noreferrer">
                  <SocialIcon label={s.label} /> {s.label}
                </a>
              ))}
            </div>
          </Reveal>
        </section>
      </main>
      <footer className="footer">
        <div className="container">© {YEAR} {p.name} · Built with React &amp; Vite.</div>
      </footer>
    </>
  )
}
