import { useEffect, useState } from 'react';
import { business, navLinks } from '../../data/content';
import { MenuIcon, CloseIcon, PhoneIcon } from '../icons';
import './Header.css';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="site-header__bar">
        <a href="#top" className="site-header__brand">
          {business.name}
        </a>

        <nav className="site-header__nav" aria-label="Primary">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__actions">
          <a className="site-header__phone" href={business.phoneHref}>
            <PhoneIcon className="site-header__phone-icon" />
            <span>{business.phone}</span>
          </a>
          <a className="btn btn--primary btn--sm" href="#contact">
            Get a Free Quote
          </a>
          <button
            type="button"
            className="site-header__menu-btn"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`site-header__mobile${menuOpen ? ' is-open' : ''}`}
        hidden={!menuOpen}
      >
        <ul>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a className="site-header__phone site-header__phone--mobile" href={business.phoneHref}>
          <PhoneIcon className="site-header__phone-icon" />
          <span>{business.phone}</span>
        </a>
        <a className="btn btn--primary" href="#contact" onClick={() => setMenuOpen(false)}>
          Get a Free Quote
        </a>
      </div>
    </header>
  );
}
