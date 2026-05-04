import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import '../styles/Footer.css';

export default function Footer(){
   return (
      <footer>
        <div className="footer-sections">
            <div className="footer-contact">
                <h3>Contact Us</h3>
                <a href="https://www.instagram.com/kaizofficial_/" target="_blank" rel="noreferrer">
                    <FaInstagram className="social-icon" />
                </a>
                <a href="https://www.tiktok.com/@kaizofficial_1" target="_blank" rel="noreferrer">
                    <FaTiktok className="social-icon" />
                </a>
                <FaWhatsapp className="social-icon" />
            </div>
            <div className="footer-explore">
                <h3>Explore</h3>
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to ="/about">About</Link>
            </div>
            <div className="footer-legal">
                <h3>Legal</h3>
                <Link to="/privacy-policy">Privacy Policy</Link>
                <Link to="/terms">Terms & Conditions</Link>
                <Link to="/return-policy">Return Policy</Link>
            </div>
        </div>
        <div className="footer-copyright">
            <p>© 2025 Kaiz</p>
            <p> All rights reserved</p>
        </div>
      </footer>
   );
}