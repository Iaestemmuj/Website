import { FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi';
import './Page.css';

export default function ContactPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Get in Touch</h1>
        <p className="page-subtitle">
          Have questions about the exchange program or want to partner with us?
          Drop us a message and our team will get back to you shortly.
        </p>
      </div>

      <div className="contact-grid">
        <div className="contact-info">
          <div className="contact-item">
            <div className="contact-icon">
              <FiMapPin />
            </div>
            <div className="contact-details">
              <h3>Visit Us</h3>
              <p>
                Manipal University Jaipur<br />
                Jaipur-Ajmer Express Highway<br />
                Dehmi Kalan, Near GVK Toll Plaza<br />
                Jaipur, Rajasthan 303007
              </p>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon">
              <FiMail />
            </div>
            <div className="contact-details">
              <h3>Email Us</h3>
              <p>iaeste@muj.manipal.edu</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <FiPhone />
            </div>
            <div className="contact-details">
              <h3>Call Us</h3>
              <p>+91 XXXXX XXXXX</p>
            </div>
          </div>
        </div>

        <form className="contact-form glass-panel" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" className="form-control" placeholder="John Doe" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" className="form-control" placeholder="john@example.com" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" className="form-control" placeholder="How can we help?" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" className="form-control" placeholder="Your message here..." required></textarea>
          </div>
          
          <button type="submit" className="btn-primary submit-btn">
            Send Message <FiSend />
          </button>
        </form>
      </div>
    </div>
  );
}
