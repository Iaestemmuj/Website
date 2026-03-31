import { FiInstagram, FiMail, FiFacebook, FiLinkedin, FiArrowUp } from 'react-icons/fi';
import './Footer.css';

const footerLinks = {
  Home: ['Services', 'For Students', 'Upcoming Events'],
  'About Us': ['FAQ', 'Success Stories', 'Testimonials'],
  Team: ['Senior Board', 'Junior Board'],
  Events: ['Upcoming Events', 'Past Events'],
  'Contact Us': ['Email Us', 'Visit Us'],
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer" id="contact">
      <div className="footer__container section-container">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__logo">
              <div className="footer__logo-icon">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16" cy="16" r="14" stroke="#00B4D8" strokeWidth="2" fill="none" />
                  <path d="M16 2C16 2 22 10 22 16C22 22 16 30 16 30" stroke="#00B4D8" strokeWidth="1.5" fill="none" />
                  <path d="M16 2C16 2 10 10 10 16C10 22 16 30 16 30" stroke="#00B4D8" strokeWidth="1.5" fill="none" />
                  <ellipse cx="16" cy="16" rx="14" ry="5" stroke="#00B4D8" strokeWidth="1.5" fill="none" />
                </svg>
              </div>
              <span className="footer__logo-text">IAESTE</span>
            </div>
            <p className="footer__brand-desc">
              International Association for the Exchange of Students for Technical Experience
            </p>
            <div className="footer__socials">
              <a href="#" className="footer__social-link" aria-label="Instagram"><FiInstagram /></a>
              <a href="#" className="footer__social-link" aria-label="Email"><FiMail /></a>
              <a href="#" className="footer__social-link" aria-label="Facebook"><FiFacebook /></a>
              <a href="#" className="footer__social-link" aria-label="LinkedIn"><FiLinkedin /></a>
            </div>
          </div>

          <div className="footer__links-grid">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="footer__links-col">
                <h4 className="footer__links-title">{category}</h4>
                <ul className="footer__links-list">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="footer__link">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            Copyright© 2026, IAESTE LC MUJ. All Rights Reserved.
          </p>
          <div className="footer__bottom-links">
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>

      <button className="footer__scroll-top" onClick={scrollToTop} aria-label="Scroll to top">
        <FiArrowUp />
      </button>
    </footer>
  );
}
