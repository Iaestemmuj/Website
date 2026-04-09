import { FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';
import './Team.css';

// Senior Board with full contact details
// The user will replace these image links with Google Drive direct links later.
const seniorBoard = [
  {
    name: 'KRIISH MARWAHA',
    role: 'President',
    image: 'https://res.cloudinary.com/da1gabqgt/image/upload/v1775743710/Kriissh_Marwaha_sjuxfo.jpg',
    linkedin: 'https://www.linkedin.com/in/kriisshmarwaha/',
    email: 'president@iaestemuj.in',
    phone: '+91 7453083224'
  },
  {
    name: 'ARYAN KAPOOR',
    role: 'Exchange Advisor',
    image: 'https://res.cloudinary.com/da1gabqgt/image/upload/v1775744432/Aryan_kapoor_wbscx6.jpg',
    linkedin: 'https://www.linkedin.com/in/aryan-kapoor-67098b261/',
    email: '',
    phone: '+91 98765 43211'
  },
  {
    name: 'BHAVYA CHAUHAN',
    role: 'BUSINESS DEVELOPMENT AND INTERNAL RELATION MANAGER',
    image: 'https://res.cloudinary.com/da1gabqgt/image/upload/v1775743702/Bhavya_Chauhan_v29mq6.jpg',
    linkedin: 'https://www.linkedin.com/in/bhavya-chauhan-b8997b286/',
    email: 'bdir@iaestemuj.in',
    phone: '+91 98765 43212'
  }
];


const juniorBoard = [
  {
    department: 'Administration',
    heads: [
      { name: 'JAYESH DHOOT', role: 'Head', image: 'https://res.cloudinary.com/da1gabqgt/image/upload/q_auto/f_auto/v1775743678/Jayesh_Dhoot_frxmr5.jpg' },
      { name: 'ADITI KESHRI', role: 'Head', image: 'https://res.cloudinary.com/da1gabqgt/image/upload/q_auto/f_auto/v1775743717/Aditi_Keshri_vvx6lo.jpg' }
    ]
  },
  {
    department: 'Incoming Exchange',
    heads: [
      { name: 'KANCHAN KANDARI', role: 'Head', image: 'https://res.cloudinary.com/da1gabqgt/image/upload/q_auto/f_auto/v1775743672/Kanchan_Kandari_skcrce.jpg' },
      { name: 'SHISHIR MODI', role: 'Head', image: 'https://res.cloudinary.com/da1gabqgt/image/upload/q_auto/f_auto/v1775743685/Shishir_Modi_ip3rb6.jpg' },
      { name: 'SHARANYA', role: 'Head', image: 'https://res.cloudinary.com/da1gabqgt/image/upload/q_auto/f_auto/v1775745138/Sharanya_t2dswi.jpg' }
    ]
  },
  {
    department: 'Outcoming Exchange',
    heads: [
      { name: '', role: 'Head', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&fit=crop' },
      { name: 'Chris Chen', role: 'Head', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&fit=crop' }
    ]
  },
  {
    department: 'Consular & Member Affairs',
    heads: [
      { name: '', role: 'Head', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&fit=crop' },
      { name: 'Chris Chen', role: 'Head', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&fit=crop' }
    ]
  },
  {
    department: 'Finance',
    heads: [
      { name: '', role: 'Head', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&fit=crop' },
      { name: 'Chris Chen', role: 'Head', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&fit=crop' }
    ]
  },
  {
    department: 'Human Resourses',
    heads: [
      { name: '', role: 'Head', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&fit=crop' },
      { name: 'Chris Chen', role: 'Head', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&fit=crop' }
    ]
  },
  {
    department: 'corporate & Alumni Relations',
    heads: [
      { name: '', role: 'Head', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&fit=crop' },
      { name: 'Chris Chen', role: 'Head', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&fit=crop' }
    ]
  },
  {
    department: 'Promotions & Design',
    heads: [
      { name: '', role: 'Head', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&fit=crop' },
      { name: 'Chris Chen', role: 'Head', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&fit=crop' }
    ]
  },
  {
    department: 'Information Technology & Data Analytic',
    heads: [
      { name: '', role: 'Head', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&fit=crop' },
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
