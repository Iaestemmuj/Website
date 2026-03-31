import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiImage } from 'react-icons/fi';
import './EventGallery.css';

// Recursively read all images added to public/gallery at build time.
const imageModules = import.meta.glob('/public/gallery/**/*.{jpg,jpeg,png,webp,avif}', { eager: true });

const parsedImages = Object.keys(imageModules).map((filePath) => {
  const parts = filePath.split('/');
  // If the path length is 4 (e.g., ['', 'public', 'gallery', 'image.jpg']), it's a cover photo.
  // If the path length is 5 (e.g., ['', 'public', 'gallery', 'Event Name', 'image.jpg']), it's inside a gallery.
  const isRoot = parts.length === 4;
  
  const rawFilename = parts.pop();
  const filenameBase = rawFilename.replace(/\.[^/.]+$/, '');
  
  // Format title for display
  const title = filenameBase.replace(/_/g, ' ').replace(/-/g, ': ');
  
  return {
    src: filePath.replace('/public', ''),
    title: title,
    filenameBase: filenameBase, // Use this for the sub-folder matching route
    isRoot: isRoot
  };
});

// We provide default stunning placeholders if the folder is empty
const defaultImages = [
  { src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&fit=crop', title: 'Namaste Manipal: Welcome Interns 2026', filenameBase: 'Namaste_Manipal-_Welcome_Interns_2026' },
  { src: 'https://images.unsplash.com/photo-1505373877138-d4b4ec9e0e6e?w=1200&fit=crop', title: 'Annual Conference: Global Networking', filenameBase: 'Annual_Conference-_Global_Networking' },
  { src: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&fit=crop', title: 'Tech Talk Series', filenameBase: 'Tech_Talk_Series' },
  { src: 'https://images.unsplash.com/photo-1511632765486-a01c80cf8cb4?w=1200&fit=crop', title: 'Cultural Reception Gala 2025', filenameBase: 'Cultural_Reception_Gala_2025' },
  { src: 'https://images.unsplash.com/photo-1523580494112-071d1694084c?w=1200&fit=crop', title: 'Engineering Workshop Symposium', filenameBase: 'Engineering_Workshop_Symposium' },
  { src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&fit=crop', title: 'International Team Building Session', filenameBase: 'International_Team_Building_Session' },
  { src: 'https://images.unsplash.com/photo-1558403194-611308249627?w=1200&fit=crop', title: 'Exchange Program Orientation', filenameBase: 'Exchange_Program_Orientation' },
];

// Only show root-level images here. The subfolder images belong to the specific event gallery.
const rootImages = parsedImages.filter(img => img.isRoot);
const galleryImages = rootImages.length > 0 ? rootImages : defaultImages;

export default function EventGallery() {
  const highlightImages = galleryImages.slice(0, 5); // Taking top 5 for coverflow
  const gridImages = galleryImages.length > 5 ? galleryImages.slice(5) : galleryImages;

  const [activeSlide, setActiveSlide] = useState(0);

  // Auto-play interval
  useEffect(() => {
    if (highlightImages.length <= 1) return;
    
    // Switch slide every 3.5 seconds
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % highlightImages.length);
    }, 3500);
    
    return () => clearInterval(interval);
  }, [highlightImages.length]);

  const getSlideClass = (index) => {
    if (highlightImages.length <= 1) return 'active';
    if (index === activeSlide) return 'active';
    
    const len = highlightImages.length;
    // Helper function for circular array index checking
    const getCircularIndex = (offset) => (activeSlide + offset + len) % len;
    
    if (index === getCircularIndex(-1)) return 'prev1';
    if (index === getCircularIndex(1)) return 'next1';
    
    // Show secondary side images if we have at least 5 images overall
    if (len >= 5) {
      if (index === getCircularIndex(-2)) return 'prev2';
      if (index === getCircularIndex(2)) return 'next2';
    }
    
    return 'hidden';
  };

  return (
    <section className="event-gallery" id="gallery">
      <div className="section-container">
        
        {/* Top Carousel section: Event Highlights */}
        {highlightImages.length > 0 && (
          <div className="gallery__highlights">
            <h2 className="section-title text-center">Event Highlights</h2>
            <div className="gallery__carousel">
              {highlightImages.map((img, idx) => (
                <div 
                  key={idx} 
                  className={`gallery__slide ${getSlideClass(idx)}`}
                  onClick={() => setActiveSlide(idx)}
                >
                  <img src={img.src} alt={img.title} loading="lazy" />
                  <div className="gallery__slide-overlay">
                    <h3 className="gallery__slide-title">{img.title}</h3>
                  </div>
                </div>
              ))}
            </div>
            {highlightImages.length > 1 && (
              <div className="gallery__dots">
                {highlightImages.map((_, idx) => (
                  <div 
                    key={idx} 
                    className={`gallery__dot ${idx === activeSlide ? 'active' : ''}`}
                    onClick={() => setActiveSlide(idx)}
                  ></div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Bottom Grid section: Connections & Experiences */}
        {gridImages.length > 0 && (
          <div className="gallery__grid-section">
            <h2 className="section-title text-center">Fostering Global <br/> Connections & Experiences</h2>
            <p className="section-subtitle text-center">From cultural receptions to technical conferences, we create memories that last a lifetime.</p>
            
            <div className="gallery__bento">
              {gridImages.map((img, idx) => (
                <Link to={`/events/gallery/${encodeURIComponent(img.filenameBase)}`} key={idx} className="gallery__item">
                  <img src={img.src} alt={img.title} loading="lazy" />
                  <div className="gallery__item-overlay">
                    <h3 className="gallery__item-title">{img.title}</h3>
                    <div className="gallery__item-link">
                      Open Gallery Album <FiImage />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
