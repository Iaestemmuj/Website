import { FiStar } from 'react-icons/fi';
import './Marquee.css';

const announcements = [
  { text: 'Welcome to IAESTE MUJ LC! We connect students with International Internships.', icon: '🌍' },
  { text: 'Registrations for the Summer Exchange Program are closing soon!', icon: '🚀' },
  { text: 'Join us for International Evening 2026!', icon: '🎉' },
  { text: 'Global Career Opportunities await — Apply Now!', icon: '💼' },
  { text: 'IAESTE — 75+ Years of International Exchange Excellence', icon: '⭐' },
];

export default function Marquee() {
  return (
    <div className="marquee">
      <div className="marquee__track">
        {[...announcements, ...announcements].map((item, i) => (
          <span key={i} className="marquee__item">
            <span className="marquee__icon">{item.icon}</span>
            {item.text}
            <FiStar className="marquee__separator" />
          </span>
        ))}
      </div>
    </div>
  );
}
