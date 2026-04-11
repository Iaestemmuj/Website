import { FiArrowRight } from 'react-icons/fi';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__content section-container">
        <div className="hero__text">
          <div className="hero__badge animate-fade-in">
            <span className="hero__badge-dot"></span>
            Work. Experience. Discover.
          </div>

          <h1 className="hero__title animate-fade-in-up">
            IAESTE <span className="hero__title-accent">LC MUJ</span>
          </h1>

          <p className="hero__subtitle animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            International Association for the Exchange of Students for Technical Experience
          </p>

          <p className="hero__description animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            IAESTE LC MUJ facilitates international exchange for technical work experience.
            We continuously strive to promote international understanding and goodwill
            through meaningful internship opportunities across 80+ countries.
          </p>

          <div className="hero__actions animate-fade-in-up" style={{ animationDelay: '0.45s' }}>
            <a href=" https://forms.gle/LLBxq2zyANUpxDWj6" target="_blank" className="btn-primary">
              Join us   
              <FiArrowRight />
            </a>
            <a href="#events" className="btn-outline">
              Upcoming Events
            </a>
          </div>

          <div className="hero__stats animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="hero__stat">
              <span className="hero__stat-number">80+</span>
              <span className="hero__stat-label">Countries</span>
            </div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat">
              <span className="hero__stat-number">1000+</span>
              <span className="hero__stat-label">Internships</span>
            </div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat">
              <span className="hero__stat-number">75+</span>
              <span className="hero__stat-label">Years</span>
            </div>
          </div>
        </div>
      </div>

      
    </section>
  );
}
