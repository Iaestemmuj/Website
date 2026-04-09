import { useRef, useEffect, useState } from 'react';
import ReactGlobe from 'react-globe.gl';
import jaipurBg from '../../assets/image.png';

export default function Globe() {
  const globeRef = useRef();
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Handle window resize for the globe
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (globeRef.current) {
      // Configure controls
      const controls = globeRef.current.controls();
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.5;
      controls.enableZoom = true;

      // Set initial POV
      globeRef.current.pointOfView({ altitude: 2 });
    }
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        // Optional: reduce opacity slightly to make text more readable
        opacity: 0.9,
        pointerEvents: 'auto'
      }}
      id="globe-container"
    >
      <ReactGlobe
        ref={globeRef}
        width={dimensions.width}
        height={dimensions.height}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        
        atmosphereColor="#00B4D8"
        atmosphereAltitude={0.2}
        // Markers - empty for now, can be added later
        labelsData={[]}
      />
    </div>
  );
}
