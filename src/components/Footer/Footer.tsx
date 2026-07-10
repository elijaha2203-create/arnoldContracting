import { business, navLinks } from '../../data/content';
import { PhoneIcon, MailIcon } from '../icons';
import './Footer.css';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <p className="site-footer__name">{business.name}</p>
          <p className="site-footer__tagline">{business.tagline}</p>
        </div>

        <nav className="site-footer__nav" aria-label="Footer">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-footer__contact">
          <a href={business.phoneHref}>
            <PhoneIcon className="site-footer__icon" />
            {business.phone}
          </a>
          <a href={business.emailHref}>
            <MailIcon className="site-footer__icon" />
            {business.email}
          </a>
        </div>
      </div>

      <div className="site-footer__bottom">
        <p>{business.address}</p>
        <p>{business.license}</p>
        <p>&copy; {new Date().getFullYear()} {business.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
