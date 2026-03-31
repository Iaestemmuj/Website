import { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import './FAQ.css';

const faqs = [
  { 
    question: 'What is IAESTE and how does it work?', 
    answer: 'IAESTE is a global organization that provides students in technical degrees with paid, course-related training abroad. We coordinate exchange opportunities between over 80 member countries.' 
  },
  { 
    question: 'Who is eligible to apply for internships?', 
    answer: '' 
  },
  { 
    question: 'Are the internships paid?', 
    answer: '' 
  },
  { 
    question: 'How long do the internships last?', 
    answer: '' 
  },
  { 
    question: 'Do I need to speak the language of the host country?', 
    answer: '' 
  }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0); // 1st one open by default

  const toggleAccordion = (index) => {
    setOpenIdx(openIdx === index ? 0 : index);
  };

  return (
    <section className="faq-section section-container" id="faq">
      <h2 className="section-title text-center">Frequently Asked Question</h2>
      <p className="section-subtitle text-center">Contact us to communicate and ask questions</p>

      <div className="faq__list">
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          
          return (
            <div 
              key={idx} 
              className={`faq__item glass-panel ${isOpen ? 'faq__item--open' : ''}`}
            >
              <button 
                className="faq__question" 
                onClick={() => toggleAccordion(idx)}
                aria-expanded={isOpen}
              >
                <h3>{faq.question}</h3>
                <div className="faq__icon">
                  {isOpen ? <FiMinus /> : <FiPlus />}
                </div>
              </button>
              
              <div 
                className="faq__answer-wrapper" 
                style={{ maxHeight: isOpen ? '250px' : '0px', opacity: isOpen ? 1 : 0 }}
              >
                <div className="faq__answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
