import { FiGlobe, FiUsers, FiAward, FiTrendingUp } from 'react-icons/fi';
import './About.css';

const stats = [
  { icon: <FiGlobe />, number: '80+', label: 'Member Countries' },
  { icon: <FiUsers />, number: '5000+', label: 'Students Exchanged Yearly' },
  { icon: <FiAward />, number: '75+', label: 'Years of Excellence' },
  { icon: <FiTrendingUp />, number: '1000+', label: 'Partner Companies' },
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__container section-container">
        <div className="about__header">
          <h2 className="section-title">About IAESTE</h2>
          <p className="section-subtitle">Empowering students through international technical experience since 1948</p>
        </div>

        <div className="about__content">
          <div className="about__text glass-panel">
            <h3 className="about__content-title">Who We Are</h3>
            <p>
              IAESTE (International Association for the Exchange of Students for Technical Experience)
              is an independent, non-profit and non-political student exchange organization. Our
              mission is to provide students in technical degrees with paid, course-related training
              abroad, and thereby enhance their technical and professional skills.
            </p>
            <p>
              At <strong className="accent-text">IAESTE LC MUJ</strong>, we are the local committee
              at Manipal University Jaipur, dedicated to connecting our students with the world through
              work-based learning opportunities. We organize events, workshops, and facilitate exchange
              programs that broaden horizons and build global careers.
            </p>
            <p className="about__cta-text">
              <a href='https://iaeste-ff273.firebaseapp.com/' target="_blank">Let's start your journey here! <span className="accent-text">→</span></a>
            </p>
          </div>

          <div className="about__stats-grid">
            {stats.map((stat, i) => (
              <div key={i} className="about__stat-card glass-panel">
                <div className="about__stat-icon">{stat.icon}</div>
                <span className="about__stat-number">{stat.number}</span>
                <span className="about__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
