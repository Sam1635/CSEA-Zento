import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-section" id="footer-contact">
      {/* Decorative top border line */}
      <div className="footer-top-line" aria-hidden="true"></div>

      <div className="footer-container">
        {/* Left Column - Logo and Organization */}
        <div className="footer-column footer-brand">
          <div className="footer-logo">
            <span className="logo-text">ZENTO '26</span>
          </div>
      
          <p className="footer-org-name">&copy; CSEA GCETJ</p>
        </div>

        {/* Middle Column - Contact */}
        <div className="footer-column">
          <h3 className="footer-heading">Contact</h3>
          <div className="contact-list">
            <div className="contact-item">
              <span className="contact-icon" aria-hidden="true">📞</span>
              <div className="contact-details">
                <p className="contact-name">KARTHIKEYAN G</p>
                <a href="tel:+919345569881" className="contact-link">
                  +91 93455 69881
                </a>
              </div>
            </div>

            <div className="contact-item">
              <span className="contact-icon" aria-hidden="true">📞</span>
              <div className="contact-details">
                <p className="contact-name">THIRUVARUTSELVAN G</p>
                <a href="tel:+917904718473" className="contact-link">
                  +91 79047 18473
                </a>
              </div>
            </div>

            <a 
              href="mailto:cseazento@gmail.com" 
              className="contact-link contact-email"
            >
              <span className="contact-icon" aria-hidden="true">✉</span>{" "}
              cseazento@gmail.com
            </a>
          </div>
        </div>

        {/* Middle-Right Column - Address */}
        <div className="footer-column">
          <h4 className="footer-heading">Address</h4>
          <address className="address-text">
            <a href="https://maps.app.goo.gl/DWqUW67Dvh64huqM6" className="contact-link" target="_blank" >
            GOVERNMENT COLLEGE OF ENGINEERING, SENGIPATTI,<br/>THANJAVUR - 613402
            </a>
          </address>
        </div>

        {/* Right Column - Social */}
        <div className="footer-column footer-social"> 
          <h3 className="footer-heading">ZENTO'26</h3>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <span className="social-platform">Instagram</span>
            <span className="social-arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      {/* Bottom Credits */}
      <div className="footer-bottom">
        <p className="footer-credits">
          Designed by{" "}
          <a className="credits-highlight" href='' target="_blank" rel="noopener noreferrer">CSEA</a>
        </p>
      </div>

      {/* Decorative corner accents */}
      <div className="footer-corner bottom-left" aria-hidden="true"></div>
      <div className="footer-corner bottom-right" aria-hidden="true"></div>
    </footer>
  );
}