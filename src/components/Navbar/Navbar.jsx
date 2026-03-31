import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Events', path: '/events' },
  { label: 'About Us', path: '/about' },
  { label: 'Team', path: '/team' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} id="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__logo" onClick={closeMenu}>
          <div className="navbar__logo-icon">
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="14" stroke="#00B4D8" strokeWidth="2" fill="none" />
              <path d="M16 2C16 2 22 10 22 16C22 22 16 30 16 30" stroke="#00B4D8" strokeWidth="1.5" fill="none" />
              <path d="M16 2C16 2 10 10 10 16C10 22 16 30 16 30" stroke="#00B4D8" strokeWidth="1.5" fill="none" />
              <ellipse cx="16" cy="16" rx="14" ry="5" stroke="#00B4D8" strokeWidth="1.5" fill="none" />
            </svg>
          </div>
          <span className="navbar__logo-text">IAESTE <span className="navbar__logo-accent">LC MUJ</span></span>
        </Link>

        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <NavLink
                to={link.path}
                className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`}
                onClick={closeMenu}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li className="navbar__link-cta-wrapper">
            <Link to="/contact" className="btn-primary navbar__cta" onClick={closeMenu}>
              Contact Us
            </Link>
          </li>
        </ul>

        <button
          className="navbar__menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
    </nav>
  );
}
