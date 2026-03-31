import { FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';
import './Team.css';

// Senior Board with full contact details
// The user will replace these image links with Google Drive direct links later.
const seniorBoard = [
  {
    name: 'John Doe',
    role: 'President',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&fit=crop',
    linkedin: '#',
    email: 'mailto:president@iaestemuj.org',
    phone: '+91 98765 43210'
  },
  {
    name: 'Jane Smith',
    role: 'SRO',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&fit=crop',
    linkedin: '#',
    email: 'mailto:sro@iaestemuj.org',
    phone: '+91 98765 43211'
  },
  {
    name: 'Robert Fox',
    role: 'BDIR',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&fit=crop',
    linkedin: '#',
    email: 'mailto:bdir@iaestemuj.org',
    phone: '+91 98765 43212'
  }
];


const juniorBoard = [
  {
    department: 'Administration',
    heads: [
      { name: 'Sarah Bennett', role: 'Head', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&fit=crop' },
      { name: 'David Cooper', role: 'Head', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&fit=crop' }
    ]
  },
  {
    department: 'Outgoing Exchange',
    heads: [
      { name: 'Michael Reed', role: 'Head', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&fit=crop' },
      { name: 'Emily Foster', role: 'Head', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&fit=crop' },
      { name: 'James Wilson', role: 'Head', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&fit=crop' }
    ]
  },
  {
    department: 'Incoming Exchange',
    heads: [
      { name: 'Anna Lee', role: 'Head', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&fit=crop' },
      { name: 'Chris Chen', role: 'Head', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&fit=crop' }
    ]
  }
];

export default function Team() {
  return (
    <section className="team-section" id="team">
      <div className="section-container">
        
        {/* Senior Board Section */}
        <div className="team__header">
          <h2 className="section-title text-center">Senior Board</h2>
          <p className="section-subtitle text-center">
            The dedicated student leaders coordinating international exchange programs.
          </p>
        </div>

        <div className="team__senior-grid">
          {seniorBoard.map((member, idx) => (
            <div key={idx} className="team__senior-card glass-panel">
              <div className="team__senior-img-wrapper">
                <img src={member.image} alt={member.role} className="team__senior-img" loading="lazy" />
              </div>
              <div className="team__senior-info">
                <h3 className="team__senior-role">{member.role}</h3>
                <h4 className="team__senior-name">{member.name}</h4>
                <div className="team__senior-contacts">
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="team__contact-link tooltip" aria-label="LinkedIn">
                    <FiLinkedin />
                    <span className="tooltip-text">LinkedIn Profile</span>
                  </a>
                  <a href={member.email} className="team__contact-link tooltip" aria-label="Email">
                    <FiMail />
                    <span className="tooltip-text">Send Email</span>
                  </a>
                  <a href={`tel:${member.phone.replace(/\s+/g, '')}`} className="team__contact-link tooltip" aria-label="Phone">
                    <FiPhone />
                    <span className="tooltip-text">{member.phone}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Junior Board Section */}
        <div className="team__header" style={{ marginTop: '120px' }}>
          <h2 className="section-title text-center">Junior Board</h2>
          <p className="section-subtitle text-center">
            Department heads working to make every exchange experience exceptional.
          </p>
        </div>

        <div className="team__junior-container">
          {juniorBoard.map((dept, idx) => (
            <div key={idx} className="team__junior-row">
              
              {/* Left Side: Department Name */}
              <div className="team__junior-dept">
                <h3>{dept.department}</h3>
              </div>
              
              {/* Right Side: Department Heads Grid */}
              <div className="team__junior-grid">
                {dept.heads.map((head, i) => (
                  <div key={i} className="team__junior-card hover-glow">
                    <div className="team__junior-img-wrapper">
                      <img src={head.image} alt={head.name} className="team__junior-img" loading="lazy" />
                    </div>
                    <div className="team__junior-info">
                      <h4 className="team__junior-name">{head.name}</h4>
                      <span className="team__junior-role">{head.role}</span>
                    </div>
                  </div>
                ))}
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
