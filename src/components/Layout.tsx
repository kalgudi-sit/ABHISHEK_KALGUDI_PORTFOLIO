import { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { portfolioContent } from '../data/portfolio.data'
import { Icon } from './Icon'

export function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
          {portfolioContent.navigation.map((item) => (
            <NavLink key={item.path} to={item.path} onClick={() => setIsMenuOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <Link className="header-cta" to="/contact">Let's connect <Icon name="arrowUpRight" size={16} /></Link>
      </header>
      <main><Outlet /></main>
      <footer className="site-footer">
        <div className="footer-intro"><span>{portfolioContent.identity.name} · 2026</span><span>{portfolioContent.identity.availability}</span></div>
        <div className="footer-profiles" aria-label="Public profiles">
          {portfolioContent.socialLinks.map((link) => <a href={link.href} key={link.label} target={link.href.startsWith('mailto:') || link.href.startsWith('tel:') ? undefined : '_blank'} rel={link.href.startsWith('mailto:') || link.href.startsWith('tel:') ? undefined : 'noreferrer'}><Icon name={link.icon} size={15} />{link.label}</a>)}
        </div>
      </footer>
    </div>
  )
}
