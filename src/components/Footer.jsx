import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3 className="footer-heading">Synergy 360, LLC</h3>
            <p>9165 Otis Avenue Suite 243</p>
            <p>Indianapolis, IN 46256</p>
            <p className="mt-4">Email: Richard.l.moss@lpl.com</p>
            <p>Fax: 317 252 0805</p>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/about" className="footer-link">About</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
              <li><Link to="/resources" className="footer-link">Resources</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-heading">Legal</h3>
            <p className="footer-legal">
              Securities and advisory services offered through LPL Financial, a registered investment advisor, Member FINRA/SIPC. The LPL Financial registered representatives associated with this site may only discuss and/or transact securities business with residents of the following states: IN, KY, IL.
            </p>
            <p className="footer-legal">
              © 2023 Synergy 360, LLC. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

