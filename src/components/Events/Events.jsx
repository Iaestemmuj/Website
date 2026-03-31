import './Events.css';

const events = [
  {
    title: 'International Evening 2026',
    date: 'MARCH 15, 2026',
    venue: 'University Grand Hall',
    description: 'Experience cultures from around the world through food, music, and performance.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop',
    color: '#00B4D8',
  },
  {
    title: 'Annual Career Fair',
    date: 'APRIL 10, 2026',
    venue: 'Convention Center',
    description: 'Connect with top global employers and explore internship opportunities.',
    image: 'https://images.unsplash.com/photo-1505373877138-d4b4ec9e0e6e?w=600&h=400&fit=crop',
    color: '#0077B6',
  },
  {
    title: 'Tech Talk Series: AI Future',
    date: 'MAY 05, 2026',
    venue: 'Auditorium A',
    description: 'A deep dive into the future of Artificial Intelligence with industry experts.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop',
    color: '#00B4D8',
  },
];

export default function Events() {
  return (
    <section className="events" id="events">
      <div className="events__container section-container">
        <h2 className="section-title">Upcoming Events</h2>
        <p className="section-subtitle">Join us for our next adventures!</p>

        <div className="events__grid">
          {events.map((event, i) => (
            <div key={i} className="events__card glass-panel">
              <div className="events__card-image">
                <img src={event.image} alt={event.title} loading="lazy" />
                <div className="events__card-overlay"></div>
              </div>
              <div className="events__card-body">
                <span className="events__card-date" style={{ color: event.color }}>
                  {event.date}
                </span>
                <h3 className="events__card-title">{event.title}</h3>
                <p className="events__card-venue">{event.venue}</p>
                <p className="events__card-desc">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
