import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Services from '../components/Services/Services';
import HowItWorks from '../components/HowItWorks/HowItWorks';
import Events from '../components/Events/Events';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <HowItWorks />
      <Events />
    </>
  );
}
