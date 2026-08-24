import { Link } from 'react-router-dom'
import { portfolioContent } from '../data/portfolio.data'
import { Icon } from '../components/Icon'
import { SectionHeading } from '../components/SectionHeading'

function TagList({ tags }: { readonly tags: readonly string[] }) {
  return <div className="tag-list">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
}

function ProjectCard({ project }: { readonly project: typeof portfolioContent.projects[number] }) {
  return (
    <article className={`project-card accent-${project.accent}`}>
      <div className="project-card-top"><span className="project-number">0{portfolioContent.projects.indexOf(project) + 1}</span><Icon name="arrowUpRight" size={20} /></div>
      <p className="eyebrow">{project.eyebrow}</p>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <strong>{project.outcome}</strong>
      <TagList tags={project.technologies} />
    </article>
  )
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
      <section className="profile-section page-width"><div className="profile-photo" aria-label={identity.portraitAlt}>{identity.portraitSrc ? <img src={identity.portraitSrc} alt={identity.portraitAlt} /> : <span>AK</span>}<small>{identity.portraitSrc ? identity.portraitAlt : 'Portrait space'}</small></div><div className="profile-copy"><p className="eyebrow">A little context</p><h2>{identity.role}, with a bias for <em>ownership.</em></h2><p>{identity.longBio}</p><div className="profile-facts"><span><b>01</b>{experience[0].company}</span><span><b>02</b>{identity.location}</span><span><b>03</b>Full-stack / platform</span></div><Link className="text-link" to="/about">Read my story <Icon name="arrowUpRight" size={15} /></Link></div></section>
      <section className="metrics-band"><div className="page-width metrics-grid">{metrics.map((metric) => <div className="metric" key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}</div></section>
      <section className="page-width home-section"><SectionHeading eyebrow="Selected work" title="Where craft meets consequence." description="A small selection of systems and experiments I have helped bring to life." /><div className="project-grid">{projects.map((project) => <ProjectCard key={project.id} project={project} />)}</div><Link className="text-link section-link" to="/work">View all experience <Icon name="arrowUpRight" size={15} /></Link></section>
      <section className="principles-band"><div className="page-width"><SectionHeading eyebrow="How I work" title="Clear thinking, useful software." /><div className="principles-grid">{principles.map((principle, index) => <div className="principle" key={principle.title}><span>0{index + 1}</span><h3>{principle.title}</h3><p>{principle.description}</p></div>)}</div></div></section>
      <section className="page-width closing-section"><p className="eyebrow">Have a complex problem?</p><h2>Let's make it <em>legible.</em></h2><Link className="button button-primary" to="/contact">Start a conversation <Icon name="arrowUpRight" size={17} /></Link></section>
    </>
  )
}

export function WorkPage() {
  return <div className="page-width inner-page"><SectionHeading eyebrow="Work / 01" title="Systems with a point of view." description="My work spans production trading infrastructure, workflow-heavy interfaces, and applied AI." /><div className="experience-list">{portfolioContent.experience.map((item) => <article className={item.featured ? 'experience-item featured' : 'experience-item'} key={item.role}><div className="experience-period">{item.period}</div><div><p className="eyebrow">{item.company}</p><h3>{item.role}</h3><p className="context">{item.context}</p><p className="experience-summary">{item.summary}</p><TagList tags={item.technologies} /><ul>{item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul></div></article>)}</div><div className="work-projects"><SectionHeading eyebrow="Experiments" title="Ideas, made tangible." /><div className="project-grid">{portfolioContent.projects.map((project) => <ProjectCard key={project.id} project={project} />)}</div></div></div>
}

export function AboutPage() {
  const { identity, skills, education, achievements, domainExpertise } = portfolioContent
  return <div className="page-width inner-page about-page"><SectionHeading eyebrow="About / 02" title="I like the hard parts." description={identity.longBio} /><div className="about-grid"><div><h3>My toolkit</h3>{Object.entries(skills).map(([category, items]) => <div className="skill-group" key={category}><span>{category}</span><TagList tags={items} /></div>)}</div><div><h3>Education</h3>{education.map((item) => <div className="education-item" key={item.institution}><span>{item.period}</span><strong>{item.institution}</strong><p>{item.qualification}</p><b>{item.result}</b></div>)}</div></div><div className="about-lower-grid"><div><h3>Domain expertise</h3><TagList tags={domainExpertise} /></div><div><h3>Achievements</h3><ul className="achievement-list">{achievements.map((achievement) => <li key={achievement}>{achievement}</li>)}</ul></div></div></div>
}

export function ContactPage() {
  const { identity, socialLinks } = portfolioContent
  return <div className="page-width inner-page contact-page"><SectionHeading eyebrow="Contact / 03" title={<>Let's build something <em>useful.</em></>} description="I am always interested in hearing about ambitious products, thorny engineering problems, and teams that care about the details." /><a className="contact-email" href="mailto:hello@example.com">hello@example.com <Icon name="arrowUpRight" size={25} /></a><div className="contact-details"><div><span className="eyebrow">Based in</span><p><Icon name="mapPin" size={16} />{identity.location}</p></div><div><span className="eyebrow">Find me online</span><div className="social-links">{socialLinks.map((link) => <a href={link.href} key={link.label} target="_blank" rel="noreferrer"><Icon name={link.icon} size={17} />{link.label}</a>)}</div></div></div></div>
}

export function NotFoundPage() {
  return <div className="page-width inner-page"><SectionHeading eyebrow="404" title="This page wandered off." description="The route you requested does not exist." /><Link className="button button-primary" to="/">Back home <Icon name="arrowUpRight" size={17} /></Link></div>
}
