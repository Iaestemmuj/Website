import { Routes, Route } from 'react-router-dom';
import Globe from './components/Globe/Globe';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import GalleryPage from './pages/GalleryPage';
import AboutPage from './pages/AboutPage';
import TeamPage from './pages/TeamPage';
import ContactPage from './pages/ContactPage';
import './App.css';

function App() {
  return (
    <>
      {/* 3D Globe — fixed background, always visible */}
      <Globe />

      {/* All content sits on top of the globe */}
      <div className="app">
        <Navbar />
        <div className="app__content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/events/gallery/:eventName" element={<GalleryPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
