import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiImage } from 'react-icons/fi';
import './EventGallery.css';

// Recursively read all images and text files added to public/gallery
const imageModules = import.meta.glob('/public/gallery/**/*.{jpg,jpeg,png,webp,avif}', { eager: true });
const textModules = import.meta.glob('/public/gallery/**/*.txt', { as: 'raw', eager: true });

const parsedImages = Object.keys(imageModules).map((filePath) => {
  const parts = filePath.split('/');
  // If the path length is 4 (e.g., ['', 'public', 'gallery', 'image.jpg']), it's a cover photo.
  // If the path length is 5 (e.g., ['', 'public', 'gallery', 'Event Name', 'image.jpg']), it's inside a gallery.
  const isRoot = parts.length === 4;
  
  const rawFilename = parts.pop();
  const filenameBase = rawFilename.replace(/\.[^/.]+$/, '');
  const folderName = isRoot ? null : parts[3];
  
  // Format title for display
  const title = isRoot ? filenameBase.replace(/_/g, ' ').replace(/-/g, ': ') : null;
  
  return {
    src: filePath.replace('/public', ''),
    title: title,
    filenameBase: isRoot ? filenameBase : null,
    folderName: folderName,
    isRoot: isRoot
  };
});

// We provide default stunning placeholders if the folder is empty
const defaultImages = [
  { src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&fit=crop', title: 'Namaste Manipal: Welcome Interns 2026', filenameBase: 'Namaste_Manipal-_Welcome_Interns_2026', secondarySrc: 'https://images.unsplash.com/photo-1511632765486-a01c80cf8cb4?w=1200&fit=crop', description: 'A grand welcome for all our international interns. Join us to experience the vibrant culture of India.' },
  { src: 'https://images.unsplash.com/photo-1505373877138-d4b4ec9e0e6e?w=1200&fit=crop', title: 'Annual Conference: Global Networking', filenameBase: 'Annual_Conference-_Global_Networking', secondarySrc: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&fit=crop', description: 'Connect with industry stalwarts and build meaningful global connections at our signature annual conference.' },
  { src: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&fit=crop', title: 'Tech Talk Series', filenameBase: 'Tech_Talk_Series', secondarySrc: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&fit=crop', description: 'Diving deep into emerging technologies. Informative sessions hosted by professionals pushing the boundaries.' },
  { src: 'https://images.unsplash.com/photo-1511632765486-a01c80cf8cb4?w=1200&fit=crop', title: 'Cultural Reception Gala 2025', filenameBase: 'Cultural_Reception_Gala_2025', secondarySrc: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&fit=crop', description: 'A night of performances, music, and exquisite global cuisines showcasing unity in diversity.' },
  { src: 'https://images.unsplash.com/photo-1523580494112-071d1694084c?w=1200&fit=crop', title: 'Engineering Workshop Symposium', filenameBase: 'Engineering_Workshop_Symposium', secondarySrc: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&fit=crop', description: 'Hands-on practical experience for aspiring innovators alongside expert guidance.' },
];

// Only show root-level images here. Map them to find their secondary image and description text.
const rootImages = parsedImages.filter(img => img.isRoot).map(rootImg => {
  const eventName = rootImg.filenameBase;
  const folderImage = parsedImages.find(img => !img.isRoot && img.folderName === eventName && img.src !== rootImg.src);
  
  const txtPath = `/public/gallery/${eventName}/${eventName}.txt`;
  const description = textModules[txtPath] || 'Join us to explore amazing opportunities, foster global connections, and create memories that will last a lifetime.';
  
  return {
    ...rootImg,
    secondarySrc: folderImage ? folderImage.src : rootImg.src,
    description: description
  };
});

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
            
            <div className="gallery__horizontal-list">
              {gridImages.map((img, idx) => (
                <div key={idx} className="gallery__horizontal-card">
                  {/* Left Side: Original Cover Photo */}
                  <div className="gallery__card-left">
                    <img src={img.src} alt={img.title} loading="lazy" />
                    <div className="gallery__card-left-overlay">
                      <h3>{img.title}</h3>
                    </div>
                  </div>
                  
                  {/* Right Side: Small wide photo + text block */}
                  <div className="gallery__card-right">
                    <div className="gallery__card-right-img">
                      <img src={img.secondarySrc} alt={`${img.title} secondary`} loading="lazy" />
                    </div>
                    <div className="gallery__card-right-content">
                      <p className="gallery__card-desc">{img.description}</p>
                      <Link to={`/events/gallery/${encodeURIComponent(img.filenameBase)}`} className="gallery__card-link">
                        Open Full Album <FiImage />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
