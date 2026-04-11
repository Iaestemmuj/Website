import { useState } from 'react';
import { FiCheck, FiArrowRight, FiArrowLeft } from 'react-icons/fi';
import './HowItWorks.css';

const steps = [
  {
    number: '01',
    tag: 'Phase 1',
    title: 'Registration',
    desc: 'Register on the Exchange Platform to browse available internships.',
    bullets: [
      'Create your official student profile',
      'Verify university enrollment status',
      'Gain full access to the global portal'
    ]
  },
  {
    number: '02',
    tag: 'Phase 2',
    title: 'Application',
    desc: 'Apply for internships that match your profile and preferences.',
    bullets: [
      'Filter roles by technical field & country',
      'Submit required documents (CV, transcripts)',
      'Track your application status in real-time'
    ]
  },
  {
    number: '03',
    tag: 'Phase 3',
    title: 'Nomination',
    desc: 'If selected, you will be nominated by your national committee.',
    bullets: [
      'Undergo local interview and screening',
      'Receive official LC endorsement',
      'Application forwarded to host country'
    ]
  },
  {
    number: '04',
    tag: 'Phase 4',
    title: 'Acceptance',
    desc: 'The employer reviews your application and accepts you.',
    bullets: [
      'Employer approves your technical profile',
      'Receive the official Acceptance Note',
      'Start preparing your travel and visa'
    ]
  }
];

export default function HowItWorks() {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState('next');
  const [isAnimating, setIsAnimating] = useState(false);

  const goToStep = (index) => {
    if (isAnimating || index === currentStep) return;
    setDirection(index > currentStep ? 'next' : 'prev');
    setIsAnimating(true);
    setCurrentStep(index);
    setTimeout(() => setIsAnimating(false), 400); // Matches CSS animation duration
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) goToStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 0) goToStep(currentStep - 1);
  };

  return (
    <section className="how-it-works" id="how-it-works">
      <div className="hiw__container section-container">
        <h2 className="section-title">How It Works For Students</h2>
        <p className="section-subtitle">Your journey to an international internship in simple steps</p>

        {/* Progress Bar */}
        <div className="hiw__progress-bar">
          <div className="hiw__progress-track">
            {/* Dynamic width based on current progress */}
            <div 
              className="hiw__progress-fill" 
              style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
            ></div>
          </div>
          
          <div className="hiw__progress-steps">
            {steps.map((step, idx) => {
              const isCompleted = idx < currentStep;
              const isActive = idx === currentStep;
              
              return (
                <div 
                  key={idx} 
                  className={`hiw__progress-node ${isCompleted ? 'completed' : ''} ${isActive ? 'active' : ''}`}
                  onClick={() => goToStep(idx)}
                >
                  <div className="hiw__node-circle">
                    {isCompleted ? <FiCheck /> : idx + 1}
                  </div>
                  <span className="hiw__node-label">{step.title}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel Content */}
        <div className="hiw__carousel">
          <div className={`hiw__card glass-panel slide-${direction}`}>
            <div className="hiw__bg-number">{steps[currentStep].number}</div>
            
            <div className="hiw__card-content">
              <span className="hiw__tag">{steps[currentStep].tag}</span>
              <h3 className="hiw__title">{steps[currentStep].title}</h3>
              <p className="hiw__desc">{steps[currentStep].desc}</p>
              
              <ul className="hiw__bullets">
                {steps[currentStep].bullets.map((bullet, idx) => (
                  <li key={idx}>
                    <FiCheck className="hiw__bullet-icon" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hiw__card-nav">
              <button 
                className="btn-outline hiw__nav-btn" 
                onClick={prevStep} 
                disabled={currentStep === 0 || isAnimating}
                style={{ opacity: currentStep === 0 ? 0 : 1, pointerEvents: currentStep === 0 ? 'none' : 'auto' }}
              >
                <FiArrowLeft /> Previous
              </button>

              {currentStep < steps.length - 1 ? (
                <button 
                  className="btn-primary hiw__nav-btn" 
                  onClick={nextStep}
                  disabled={isAnimating}
                >
                  Next Step <FiArrowRight />
                </button>
              ) : (
                <a href=" https://forms.gle/LLBxq2zyANUpxDWj6" className="btn-primary hiw__nav-btn hiw__nav-cta">
                  Get Started <FiCheck />
                </a>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
