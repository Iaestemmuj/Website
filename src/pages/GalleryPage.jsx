import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './Page.css';

// Read all images dynamically added to public/gallery
const imageModules = import.meta.glob('/public/gallery/**/*.{jpg,jpeg,png,webp,avif}', { eager: true });

export default function GalleryPage() {
  const { eventName } = useParams();
  
  // Clean up the URL params to display nicely as a Title
  const displayTitle = eventName
    ? decodeURIComponent(eventName).replace(/_/g, ' ').replace(/-/g, ': ')
    : 'Event Gallery';

  // Filter out the images that belong ONLY to this specific subfolder
  // Pattern: `/public/gallery/${eventName}/img.jpg`
  const eventImages = Object.keys(imageModules)
    .filter(filePath => {
      const parts = filePath.split('/');
      // length === 5 defines a subfolder: ['', 'public', 'gallery', 'FolderName', 'img.jpg']
      return parts.length === 5 && decodeURIComponent(parts[3]) === decodeURIComponent(eventName);
    })
    .map(filePath => filePath.replace('/public', ''));

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

      <div className="section-container" style={{ padding: '40px 24px 100px', maxWidth: '1400px' }}>
        {eventImages.length === 0 ? (
          <div className="glass-panel" style={{ padding: '60px', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '16px', fontFamily: 'var(--font-display)' }}>
              No images found for this event yet!
            </h3>
            <p style={{ color: 'var(--text-muted)' }}>
              To populate this album:
              <br/>
              Create a folder precisely named <strong>{decodeURIComponent(eventName)}</strong> inside your <code>public/gallery/</code> directory, and drop your photos in there!
            </p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '20px' }}>
            {eventImages.map((src, idx) => (
              <div 
                key={idx} 
                className="glass-panel" 
                style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', height: '300px', transform: 'translateZ(0)' }}
              >
                <img 
                  src={src} 
                  alt={`${displayTitle} - Photo ${idx + 1}`} 
                  loading="lazy" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                  onMouseOver={e => e.currentTarget.style.transform = 'scale(1.08)'}
                  onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
