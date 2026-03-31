import About from '../components/About/About';
import GlobalReach from '../components/GlobalReach/GlobalReach';
import SuccessStories from '../components/SuccessStories/SuccessStories';
import FAQ from '../components/FAQ/FAQ';
import './Page.css';

export default function AboutPage() {
  return (
    <div className="page-container">
      <div className="page-header" style={{ paddingBottom: '20px' }}>
        <h1 className="page-title">About Us</h1>
        <p className="page-subtitle">
          Learn about our global mission, vision, and how we connect the world through technical experience.
        </p>
      </div>

      <GlobalReach />
      
      {/* Reusing About component with negative margin/padding tweaks since it has its own padding */}
      <div style={{ marginTop: '-40px' }}>
        <About />
      </div>

      <SuccessStories />
      <FAQ />
    </div>
  );
}
