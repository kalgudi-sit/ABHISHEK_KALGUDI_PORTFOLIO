import { useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { portfolioContent } from '../data/portfolio.data'
import { Icon } from './Icon'

export function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <div className="site-shell">
      <header className="site-header">
        <Link className="wordmark" to="/" onClick={() => setIsMenuOpen(false)}>
          AK<span>.</span>
        </Link>
        <button className="menu-toggle" type="button" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-expanded={isMenuOpen} aria-label="Toggle navigation">
          <span />
          <span />
        </button>
        <nav className={isMenuOpen ? 'site-nav is-open' : 'site-nav'} aria-label="Primary navigation">
          {portfolioContent.navigation.filter((item) => item.path !== '/recommendations' || portfolioContent.recommendations.enabled).map((item) => (
            <NavLink key={item.path} to={item.path} onClick={() => setIsMenuOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <Link className="header-cta" to="/contact">Let's connect <Icon name="arrowUpRight" size={16} /></Link>
      </header>
      <main><Outlet /></main>
      {location.pathname !== '/contact' && <footer className="site-footer">
        <div className="footer-grid"><div className="footer-statement"><div className="footer-color-line" /><strong>{portfolioContent.identity.name}</strong><p>Building scalable interfaces and reliable systems for complex workflows.</p><span>{portfolioContent.identity.availability}</span></div><div><p className="footer-heading">Quick links</p><div className="footer-links">{portfolioContent.navigation.filter((item) => item.path !== '/recommendations' || portfolioContent.recommendations.enabled).map((item) => <Link to={item.path} key={item.path}>{item.label}</Link>)}</div></div><div><p className="footer-heading">Find me</p><div className="footer-profiles" aria-label="Public profiles">{portfolioContent.socialLinks.slice(0, 4).map((link) => <a href={link.href} key={link.label} target="_blank" rel="noreferrer"><Icon name={link.icon} size={15} />{link.label}</a>)}</div></div></div>
        <div className="footer-bottom"><span>Copyright © 2026 {portfolioContent.identity.name}</span><span>Designed and developed with React · TypeScript</span></div>
      </footer>}
    </div>
  )
}
