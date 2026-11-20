import { lazy, Suspense, type ReactNode } from 'react'
import Nav from './components/Nav'
import { useTheme, type Theme } from './themeContext'
import { profile } from './data/profile'

const WorshipSyncShot = lazy(() => import('./shots').then((m) => ({ default: m.WorshipSyncShot })))
const PlannerShot = lazy(() => import('./shots').then((m) => ({ default: m.PlannerShot })))

const YEAR = new Date().getFullYear()

function ShotPlaceholder() {
  return <div className="shot-ph" aria-hidden="true" />
}

function Shot({ kind, theme }: { kind: 'worshipsync' | 'planner'; theme: Theme }) {
  return (
    <Suspense fallback={<ShotPlaceholder />}>
      {kind === 'worshipsync' ? <WorshipSyncShot theme={theme} /> : <PlannerShot theme={theme} />}
    </Suspense>
  )
}

function Ext({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="ul">
      {children}<span aria-hidden="true"> ↗</span>
    </a>
  )
}

function Row({ id, label, children }: { id: string; label: string; children: ReactNode }) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-h`}>
      <div className="container row">
        <h2 id={`${id}-h`} className="label">{label}</h2>
        <div className="row-body">{children}</div>
      </div>
    </section>
  )
}

export default function App() {
  const p = profile
  const { theme } = useTheme()
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Nav />
      <main id="main">
        <section id="top" className="hero container">
          <div>
            <h1>{p.name}</h1>
            <p className="hero-sum">{p.summary}</p>
            <p className="now">
              <span className="dot" aria-hidden="true" />
              Currently {p.current.role} at {p.current.company} · {p.current.location}
            </p>
            <ul className="links" aria-label="Links">
              <li><a className="ul" href={`mailto:${p.email}`}>Email<span aria-hidden="true"> ↗</span></a></li>
              {p.socials.map((s) => (
                <li key={s.label}><Ext href={s.href}>{s.label}</Ext></li>
              ))}
            </ul>
          </div>
        </section>

        <section id="work" className="section work" aria-labelledby="work-h">
          <div className="container">
            <h2 id="work-h" className="label work-label">Work</h2>
            {p.projects.map((pr, i) => (
              <article key={pr.name} className={`project${i % 2 ? ' flip' : ''}`}>
                <div className="project-text">
                  <h3>{pr.name}</h3>
                  <p className="desc">{pr.description}</p>
                  <ul className="feats">
                    {pr.features.map((f) => <li key={f}>{f}</li>)}
                  </ul>
                  <p className="mono tags">{pr.tags.join(' · ')}</p>
                  <p className="status mono"><span className="dot" aria-hidden="true" />{pr.status}</p>
                  <p><Ext href={pr.link.href}>{pr.link.label}</Ext></p>
                </div>
                <div className="project-shot">
                  <Shot kind={pr.shot} theme={theme} />
                </div>
              </article>
            ))}
            <p className="site-line">
              {p.site.text}. <Ext href={p.site.link.href}>Source</Ext>
            </p>
          </div>
        </section>

        <Row id="about" label="About">
          {p.about.map((t) => <p key={t} className="prose">{t}</p>)}
        </Row>

        <Row id="experience" label="Experience">
          <ol className="companies">
            {p.experience.map((c) => (
              <li key={c.company} className="company">
                <h3>{c.company} <span className="muted">{c.location}</span></h3>
                {c.roles.map((r) => (
                  <div key={r.title + r.period} className="role">
                    <p className="mono period">{r.period}</p>
                    <div>
                      <p className="role-title">{r.title}</p>
                      <ul className="bullets">
                        {r.bullets.map((b) => <li key={b}>{b}</li>)}
                      </ul>
                    </div>
                  </div>
                ))}
              </li>
            ))}
          </ol>
        </Row>

        <Row id="skills" label="Skills">
          <dl className="skills">
            {p.skills.map((g) => (
              <div key={g.title} className="skill">
                <dt>{g.title}</dt>
                <dd>{g.items.join(', ')}</dd>
              </div>
            ))}
          </dl>
        </Row>

        <Row id="education" label="Education">
          <p className="prose">
            {p.education.degree}, {p.education.school}. <span className="mono muted">{p.education.year}</span>
          </p>
        </Row>

        <Row id="contact" label="Contact">
          <p className="statement">{p.contact}</p>
          <p className="mail"><a className="ul" href={`mailto:${p.email}`}>{p.email}</a></p>
          <ul className="links">
            {p.socials.map((s) => (
              <li key={s.label}><Ext href={s.href}>{s.label}</Ext></li>
            ))}
          </ul>
        </Row>
      </main>
      <footer className="footer">
        <div className="container">
          <span>© {YEAR} {p.name}</span>
          <span>{p.domain}</span>
        </div>
      </footer>
    </>
  )
}
