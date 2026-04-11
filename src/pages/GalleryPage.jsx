import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft, FiExternalLink } from 'react-icons/fi';
import './Page.css';

// Only load txt files to fetch Cloudinary link fallback
const textModules = import.meta.glob('../assets/gallery/**/*.txt', { query: '?raw', import: 'default', eager: true });

export default function GalleryPage() {
  const { eventName } = useParams();
  
  // Clean up the URL params to display nicely as a Title
  const displayTitle = eventName
    ? decodeURIComponent(eventName).replace(/_/g, ' ').replace(/-/g, ': ')
    : 'Event Gallery';

  const txtPath = `../assets/gallery/${eventName}/${eventName}.txt`;
  const rawText = textModules[txtPath] || '';
  let cloudinaryLink = null;
  
  if (rawText) {
    const lines = rawText.split('\n').map(l => l.trim()).filter(Boolean);
    const linkLineIndex = lines.findIndex(l => l.toUpperCase().startsWith('CLOUDINARY_LINK:'));
    if (linkLineIndex !== -1) {
      cloudinaryLink = lines[linkLineIndex].substring(16).trim();
    }
  }

  return (
    <div className="page-container">
      <div className="page-header" style={{ paddingBottom: '30px' }}>
        <h1 className="page-title">{displayTitle}</h1>
        <Link 
          to="/events" 
          className="btn-outline" 
          style={{ display: 'inline-flex', padding: '10px 24px', marginTop: '16px' }}
        >
          <FiArrowLeft /> Back to Events
        </Link>
      </div>

      <div className="section-container" style={{ padding: '40px 24px 100px', maxWidth: '1400px', textAlign: 'center' }}>
          <div className="glass-panel" style={{ padding: '60px', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h3 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '16px', fontFamily: 'var(--font-display)' }}>
              Explore the Full Album
            </h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '32px', fontSize: '1.1rem' }}>
              We've moved our full resolution event galleries over to Cloudinary for a much faster and smoother experience!
            </p>
            {cloudinaryLink ? (
              <a 
                href={cloudinaryLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary"
                style={{ display: 'inline-flex', padding: '16px 32px', fontSize: '1.2rem', alignItems: 'center', gap: '8px' }}
              >
                View Event Photos on Cloudinary <FiExternalLink />
              </a>
            ) : (
               <p style={{ color: 'var(--accent-color)' }}>
                No external album link configured for this event yet.
                <br />
                <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}> (Add CLOUDINARY_LINK: https://... in src/assets/gallery/{eventName}/{eventName}.txt)</span>
               </p>
            )}
          </div>
      </div>
    </div>
  );
}
