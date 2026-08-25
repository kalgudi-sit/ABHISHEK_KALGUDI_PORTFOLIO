import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import type { IconType } from 'react-icons'
import { SiApachekafka, SiJavascript, SiOpenjdk, SiPython, SiReact, SiSpring, SiSpringboot, SiTypescript } from 'react-icons/si'
import { portfolioContent } from '../data/portfolio.data'
import { Icon } from '../components/Icon'
import { SectionHeading } from '../components/SectionHeading'

function TagList({ tags }: { readonly tags: readonly string[] }) {
  return <div className="tag-list">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
}

const toolkitIcons: Record<string, IconType> = {
  Python: SiPython,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  Java: SiOpenjdk,
  'Spring Boot': SiSpringboot,
  'Spring Data JPA': SiSpring,
  React: SiReact,
  'Apache Kafka': SiApachekafka,
}

function ToolkitSection() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const updateProgress = () => {
      const sectionTop = section.getBoundingClientRect().top
      const start = window.innerHeight * 0.82
      const distance = window.innerHeight * 1.05
      setScrollProgress(Math.max(0, Math.min(1, (start - sectionTop) / distance)))
    }
    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)
    return () => { window.removeEventListener('scroll', updateProgress); window.removeEventListener('resize', updateProgress) }
  }, [])

  const positions = [[0, 0], [0, 24], [-18, 0], [0, -16], [10, 17], [0, 8], [18, -10], [48, 0]] as const
  return <section ref={sectionRef} className="toolkit-band toolkit-is-visible"><div className="page-width toolkit-layout"><div className="toolkit-intro"><SectionHeading eyebrow="Engineering toolkit" title={<span className="typing-heading">Tools for making ideas <em>hold.</em></span>} description="A practical stack for building reliable, observable software from first sketch to production." /><div className="toolkit-signal" aria-hidden="true"><span>01</span><i /><i /><i /><b>build / test / ship</b></div></div><div className="toolkit-cloud" aria-label="Technology toolkit">{portfolioContent.toolkit.map((item, index) => { const Logo = toolkitIcons[item.name]; const [x, y] = positions[index]; return <div className="toolkit-item" key={item.name} title={item.name} aria-label={item.name} style={{ transform: `translate(${x * scrollProgress}px, ${y * scrollProgress}px) scale(${0.55 + scrollProgress * 0.45})`, opacity: 0.12 + scrollProgress * 0.88 }}><Logo className="toolkit-logo" style={{ color: item.color }} aria-hidden="true" /></div> })}</div></div></section>
}

function ProjectCard({ project }: { readonly project: typeof portfolioContent.projects[number] }) {
  return (
    <article className={`project-card accent-${project.accent} reveal-card`}>
      <div className="project-card-top"><span className="project-number">0{portfolioContent.projects.indexOf(project) + 1}</span><Icon name="arrowUpRight" size={20} /></div>
      <p className="eyebrow">{project.eyebrow}</p>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <strong>{project.outcome}</strong>
      <TagList tags={project.technologies} />
    </article>
  )
}

function ActivityStrip() {
  const entries = ['log > tracing event-driven workflows', 'log > tuning latency at the API edge', 'log > turning requirements into systems', 'log > reviewing the next clean abstraction', 'log > status: deep-work-mode']
  return <div className="activity-strip" aria-label="Engineering activity"><div className="activity-track">{[...entries, ...entries].map((entry, index) => <span key={`${entry}-${index}`}>{entry}<b>·</b></span>)}</div></div>
}

export function HomePage() {
  const { identity, metrics, projects, principles, experience } = portfolioContent
  return (
    <>
      <section className="hero-section page-width">
        <div className="hero-copy">
          <p className="eyebrow reveal">Full-stack engineer · systems thinker</p>
          <h1 className="reveal delay-one">Building the <em>infrastructure</em> of good decisions.</h1>
          <p className="hero-intro reveal delay-two">{identity.shortBio} Currently shaping enterprise trading experiences at Morgan Stanley.</p>
          <div className="hero-actions reveal delay-three"><Link className="button button-primary" to="/work">See selected work <Icon name="arrowUpRight" size={17} /></Link><Link className="text-link" to="/about">More about me <Icon name="arrowUpRight" size={15} /></Link></div>
        </div>
        <div className="hero-mark" aria-hidden="true"><span>01</span><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit-core" /></div>
      </section>
      <ActivityStrip />
      <section className="profile-section page-width reveal-section"><div className="profile-photo" aria-label={identity.portraitAlt}>{identity.portraitSrc ? <img src={identity.portraitSrc} alt={identity.portraitAlt} /> : <span>AK</span>}<small>{identity.portraitSrc ? identity.portraitAlt : 'Portrait space'}</small></div><div className="profile-copy"><p className="eyebrow">A little context</p><h2>{identity.role}, with a bias for <em>ownership.</em></h2><p>{identity.longBio}</p><div className="profile-facts"><span><b>01</b>{experience[0].company}</span><span><b>02</b>{identity.location}</span><span><b>03</b>Full-stack / platform</span></div><Link className="text-link" to="/about">Read my story <Icon name="arrowUpRight" size={15} /></Link></div></section>
      <section className="metrics-band"><div className="page-width metrics-grid">{metrics.map((metric) => <div className="metric" key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}</div></section>
      <section className="page-width home-section reveal-section"><SectionHeading eyebrow="Selected work" title="Where craft meets consequence." description="A small selection of systems and experiments I have helped bring to life." /><div className="project-grid">{projects.map((project) => <ProjectCard key={project.id} project={project} />)}</div><Link className="text-link section-link" to="/work">View all experience <Icon name="arrowUpRight" size={15} /></Link></section>
      <ToolkitSection />
      <section className="principles-band"><div className="page-width"><SectionHeading eyebrow="How I work" title={<span className="cycling-title" aria-label="Clear decisions, clear design, clear architecture, clear delivery"><span className="cycling-prefix">Clear</span><span className="cycling-window"><span className="word-blue">decisions</span><span className="word-green">design</span><span className="word-yellow">architecture</span><span className="word-blue">delivery</span></span></span>} /><div className="principles-grid">{principles.map((principle, index) => <div className="principle" key={principle.title}><span>0{index + 1}</span><h3>{principle.title}</h3><p>{principle.description}</p></div>)}</div></div></section>
      <section className="page-width closing-section"><p className="eyebrow">Have a complex problem?</p><h2>Let's make it <em>legible.</em></h2><Link className="button button-primary" to="/contact">Start a conversation <Icon name="arrowUpRight" size={17} /></Link></section>
    </>
  )
}

export function WorkPage() {
  return <div className="page-width inner-page"><SectionHeading eyebrow="Work / 01" title="Systems with a point of view." description="My work spans production trading infrastructure, workflow-heavy interfaces, and applied AI." /><div className="experience-list">{portfolioContent.experience.map((item) => <article className={item.featured ? 'experience-item featured reveal-section' : 'experience-item reveal-section'} key={item.role}><div className="experience-period">{item.period}</div><div><p className="eyebrow">{item.company}</p><h3>{item.role}</h3><p className="context">{item.context}</p><p className="experience-summary">{item.summary}</p><TagList tags={item.technologies} /><ul>{item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul></div></article>)}</div><div className="work-projects"><SectionHeading eyebrow="Projects / 02" title="Ideas, made tangible." description="Detailed snapshots of the systems I developed, the teams I worked with, and the engineering responsibility I carried." /><div className="project-grid">{portfolioContent.projects.map((project) => <article className={`project-detail accent-${project.accent} reveal-card`} key={project.id}><div className="project-detail-heading"><div><p className="eyebrow">{project.eyebrow}</p><h3>{project.title}</h3></div><Icon name="arrowUpRight" size={22} /></div><p className="project-company">{project.company}</p><p className="project-role">{project.role}</p><p className="project-description">{project.description}</p><div className="project-columns"><div><h4>Responsibilities</h4><ul>{project.responsibilities.map((item) => <li key={item}>{item}</li>)}</ul></div><div><h4>Contributions</h4><ul>{project.contributions.map((item) => <li key={item}>{item}</li>)}</ul></div></div><strong className="project-outcome">{project.outcome}</strong><TagList tags={project.technologies} /></article>)}</div></div></div>
}

export function AboutPage() {
  const { identity, skills, education, achievements, domainExpertise } = portfolioContent
  return <div className="page-width inner-page about-page"><SectionHeading eyebrow="About / 02" title="I like the hard parts." description={identity.longBio} /><div className="about-grid"><div><h3>My toolkit</h3>{Object.entries(skills).map(([category, items]) => <div className="skill-group" key={category}><span>{category}</span><TagList tags={items} /></div>)}</div><div><h3>Education</h3>{education.map((item) => <div className="education-item" key={item.institution}><span>{item.period}</span><strong>{item.institution}</strong><p>{item.qualification}</p><b>{item.result}</b></div>)}</div></div><div className="about-lower-grid"><div><h3>Domain expertise</h3><TagList tags={domainExpertise} /></div><div><h3>Achievements</h3><ul className="achievement-list">{achievements.map((achievement) => <li key={achievement}>{achievement}</li>)}</ul></div></div></div>
}

export function ContactPage() {
  const { identity, socialLinks } = portfolioContent
  return <div className="page-width inner-page contact-page"><SectionHeading eyebrow="Contact / 03" title={<>Let's build something <em>useful.</em></>} description="I am always interested in hearing about ambitious products, thorny engineering problems, and teams that care about the details." /><a className="contact-email" href="mailto:hello@example.com">hello@example.com <Icon name="arrowUpRight" size={25} /></a><div className="contact-details"><div><span className="eyebrow">Based in</span><p><Icon name="mapPin" size={16} />{identity.location}</p></div><div><span className="eyebrow">Find me online</span><div className="social-links">{socialLinks.map((link) => <a href={link.href} key={link.label} target="_blank" rel="noreferrer"><Icon name={link.icon} size={17} />{link.label}</a>)}</div></div></div></div>
}

export function RecommendationsPage() {
  const [recommendations, setRecommendations] = useState(() => {
    try { return JSON.parse(localStorage.getItem('abhishek-recommendations') ?? '[]') as typeof portfolioContent.recommendations.items }
    catch { return [] }
  })
  const [form, setForm] = useState({ name: '', role: '', quote: '', linkedin: '' })
  const allRecommendations = [...portfolioContent.recommendations.items, ...recommendations]

  function submitRecommendation(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const next = { id: crypto.randomUUID(), ...form }
    const updated = [...recommendations, next]
    localStorage.setItem('abhishek-recommendations', JSON.stringify(updated))
    setRecommendations(updated)
    setForm({ name: '', role: '', quote: '', linkedin: '' })
  }

  return <div className="page-width inner-page recommendations-page"><SectionHeading eyebrow="Recommendations / 04" title={<span className="typing-heading">Good work is a <em>team sport.</em></span>} description="A few words from people I have had the chance to build with. Add a recommendation to keep this little guestbook growing." /><div className="recommendation-layout"><div className="recommendation-list">{allRecommendations.length === 0 ? <p className="empty-state">No recommendations yet. Be the first voice here.</p> : allRecommendations.map((item) => <article className="recommendation-card" key={item.id}><span className="quote-mark">“</span><p>{item.quote}</p><footer><strong>{item.name}</strong><span>{item.role}</span><a href={item.linkedin} target="_blank" rel="noreferrer" aria-label={`View ${item.name} on LinkedIn`}><Icon name="linkedin" size={17} /></a></footer></article>)}</div><form className="recommendation-form" onSubmit={submitRecommendation}><p className="eyebrow">Leave a note</p><label>Name<input required value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} /></label><label>Role / company<input required value={form.role} onChange={(event) => setForm({ ...form, role: event.target.value })} /></label><label>LinkedIn profile<input required type="url" placeholder="https://linkedin.com/in/..." value={form.linkedin} onChange={(event) => setForm({ ...form, linkedin: event.target.value })} /></label><label>Recommendation<textarea required rows={5} value={form.quote} onChange={(event) => setForm({ ...form, quote: event.target.value })} /></label><button className="button button-primary" type="submit">Publish recommendation <Icon name="arrowUpRight" size={16} /></button><small>Saved in this browser for now.</small></form></div></div>
}

export function NotFoundPage() {
  return <div className="page-width inner-page"><SectionHeading eyebrow="404" title="This page wandered off." description="The route you requested does not exist." /><Link className="button button-primary" to="/">Back home <Icon name="arrowUpRight" size={17} /></Link></div>
}
