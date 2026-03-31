import { FiGlobe, FiUsers, FiBriefcase, FiCalendar, FiBookOpen, FiAward } from 'react-icons/fi';
import './Services.css';

const services = [
  {
    icon: <FiGlobe />,
    title: 'International Internships',
    description: 'Paid, course-related internships across 80+ countries to boost your career and gain global exposure.',
  },
  {
    icon: <FiUsers />,
    title: 'Cultural Exchange',
    description: 'Immerse yourself in diverse cultures, build lasting friendships, and develop a global perspective.',
  },
  {
    icon: <FiBriefcase />,
    title: 'Career Development',
    description: 'Professional skill-building workshops, resume reviews, and interview preparation sessions.',
  },
  {
    icon: <FiCalendar />,
    title: 'Networking Events',
    description: 'Connect with industry professionals, alumni, and fellow students at exclusive networking events.',
  },
  {
    icon: <FiBookOpen />,
    title: 'Technical Workshops',
    description: 'Hands-on workshops on cutting-edge technologies, led by industry experts and senior members.',
  },
  {
    icon: <FiAward />,
    title: 'Leadership Opportunities',
    description: 'Take on leadership roles within our committee and develop management and organizational skills.',
  },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="services__container section-container">
        <h2 className="section-title">What We Offer</h2>
        <p className="section-subtitle">Empowering students with global opportunities and experiences</p>

        <div className="services__grid">
          {services.map((service, i) => (
            <div
              key={i}
              className="services__card glass-panel"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="services__card-icon">{service.icon}</div>
              <h3 className="services__card-title">{service.title}</h3>
              <p className="services__card-desc">{service.description}</p>
              <div className="services__card-shine"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
