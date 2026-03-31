import { FiChevronRight } from 'react-icons/fi';
import './SuccessStories.css';

const stories = [
  {
    title: 'A Life-Changing Experience in Zurich',
    desc: 'Working with top researchers at ETH Zurich gave me insights I couldn\'t have gained anywhere else.',
    image: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=600&fit=crop', // Zurich placeholder
    highlight: false
  },
  {
    title: 'Architectural Internship in Barcelona',
    desc: 'Designing sustainable housing in Spain was a dream come true for my career development.',
    image: 'https://images.unsplash.com/photo-1539037116277-4db20d1c1bd5?w=600&fit=crop', // Barcelona placeholder
    highlight: true // Center highlighted card matching screenshot
  },
  {
    title: 'Engineering Challenge in Tokyo',
    desc: 'The precision and dedication I learned in Japan will stay with me forever.',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&fit=crop', // Tokyo placeholder
    highlight: false
  }
];

export default function SuccessStories() {
  return (
    <section className="success-stories section-container" id="success-stories">
      <h2 className="section-title text-center">Compilation Of Our Success Stories</h2>
      
      <div className="stories__grid">
        {stories.map((story, idx) => (
          <div key={idx} className={`story__card glass-panel ${story.highlight ? 'story__card--highlight' : ''}`}>
            <div className="story__img-wrapper">
              <img src={story.image} alt={story.title} className="story__img" loading="lazy" />
            </div>
            
            <div className="story__content">
              <h3 className="story__title">{story.title}</h3>
              <p className="story__desc">{story.desc}</p>
              
              <a href="#" className="story__link">
                Learn more <FiChevronRight />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
