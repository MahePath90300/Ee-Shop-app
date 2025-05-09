import "./Footer.css"

function Footer(){
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-column">
          <h3>Customer Service</h3>
          <ul>
            <li><a href="/help">Help Center</a></li>
            <li><a href="/returns">Returns</a></li>
            <li><a href="/shipping">Shipping Info</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>About Us</h3>
          <ul>
            <li><a href="/about">Our Story</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/press">Press</a></li>
            <li><a href="/sustainability">Sustainability</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Connect</h3>
          <div className="social-icons">
            <a href="https://facebook.com"><i className="fab fa-facebook-f"></i></a>
            <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>
            <a href="https://twitter.com"><i className="fab fa-twitter"></i></a>
            <a href="https://linkedin.com"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>

        <div className="footer-column">
          <h3>Newsletter</h3>
          <p>Get updates and exclusive offers.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Ee-Shop. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
