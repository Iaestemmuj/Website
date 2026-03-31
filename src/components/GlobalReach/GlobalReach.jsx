import { useEffect, useRef, useState } from 'react';
import ReactGlobe from 'react-globe.gl';
import './GlobalReach.css';

const markerData = [
  { lat: 20.5937, lng: 78.9629, label: 'India', img: 'https://i.pravatar.cc/100?img=11' },
  { lat: 51.1657, lng: 10.4515, label: 'Germany', img: 'https://i.pravatar.cc/100?img=32' },
  { lat: -25.2744, lng: 133.7751, label: 'Australia', img: 'https://i.pravatar.cc/100?img=68' },
  { lat: 37.0902, lng: -95.7129, label: 'USA', img: 'https://i.pravatar.cc/100?img=44' },
  { lat: -14.2350, lng: -51.9253, label: 'Brazil', img: 'https://i.pravatar.cc/100?img=25' },
  { lat: 36.2048, lng: 138.2529, label: 'Japan', img: 'https://i.pravatar.cc/100?img=12' },
  { lat: 55.3781, lng: -3.4360, label: 'UK', img: 'https://i.pravatar.cc/100?img=5' },
];

export default function GlobalReach() {
  const globeRef = useRef();
  const containerRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 600, height: 500 });
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Configure rotation and interaction
    if (globeRef.current) {
      const controls = globeRef.current.controls();
      controls.autoRotate = true;
      controls.autoRotateSpeed = 1.6;
      controls.enableZoom = false; // Disable zooming, keep it static like a hero element
      
      // Look at equator initially 
      globeRef.current.pointOfView({ lat: 20, lng: 30, altitude: 2.2 });
    }

    // Dynamic sizing to strictly fit the flex container box seamlessly
    const handleResize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight
        });
      }
    };
    
    // Slight delay to ensure DOM is fully painted
    setTimeout(() => {
      handleResize();
      setIsReady(true);
    }, 100);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="global-reach">
      <div className="section-container">
        
        <div className="reach__wrapper glass-panel">
          {/* Left Side: 3D Globe with student avatar HTML pins */}
          <div className="reach__map-box" ref={containerRef}>
            {isReady && (
              <ReactGlobe
                ref={globeRef}
                width={dimensions.width}
                height={dimensions.height}
                backgroundColor="rgba(0,0,0,0)"
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                atmosphereColor="#00B4D8"
                atmosphereAltitude={0.15}
                htmlElementsData={markerData}
                htmlElement={d => {
                  const el = document.createElement('div');
                  el.innerHTML = `
                    <div class="reach__pin" title="${d.label}">
                      <img src="${d.img}" alt="Student in ${d.label}" />
                    </div>
                  `;
                  return el;
                }}
              />
            )}
          </div>

          {/* Right Side: Text & Statistics */}
          <div className="reach__content">
            <h2 className="reach__title">We Work For Students<br/>Around The World</h2>
            <p className="reach__desc">
              IAESTE provides students with high-quality technical internships abroad. 
              With a presence in over 80 countries, we connect talent with global opportunities.
            </p>
            
            <div className="reach__stats">
              <div className="reach__stat">
                 <h3>5000+</h3>
                 <p>Students Exchanged Annually</p>
              </div>
              <div className="reach__stat">
                 <h3>80+</h3>
                 <p>Countries Worldwide</p>
              </div>
              <div className="reach__stat">
                 <h3>50+</h3>
                 <p>Corporate Partners</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
