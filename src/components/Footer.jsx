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
            <p>Phone: (317) 555-1234</p>
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
            <div className="footer-legal-container">
              <p className="footer-legal">
                Securities offered through LPL Financial, Member FINRA/SIPC. Advisory Services offered through National Wealth Management Group, LLC, An SEC Registered Investment Advisor. Insurance products offered through LPL Financial or its licensed affiliates. Alpina Financial Consultants, LLC and National Wealth Management Group, LLC are separate entities from LPL Financial LLC.
              </p>
              <p className="footer-legal">
                The information contained in this email message is being transmitted to and is intended for the use of only the individual(s) to whom it is addressed.  If the reader of this message is not the intended recipient, you are hereby advised that any dissemination, distribution or copying of this message is strictly prohibited. If you have received this message in error, please immediately delete.
              </p>
              <p className="footer-legal">
                Copyright 2020 -- LPL Financial. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
