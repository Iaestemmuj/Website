import Events from '../components/Events/Events';
import EventGallery from '../components/EventGallery/EventGallery';
import './Page.css';

export default function EventsPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Global Events</h1>
        <p className="page-subtitle">
          Join our worldwide network of students and professionals. Discover upcoming conferences,
          career fairs, and cultural exchanges tailored for technical experience.
        </p>
      </div>
      
      {/* Reusing the Events component but without its native container paddings 
          if it had heavy top padding. The component handles its own layout. */}
      <div>
        <Events />
        <EventGallery />
      </div>
    </div>
  );
}