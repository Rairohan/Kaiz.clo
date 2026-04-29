import { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/Logo.png'; 
import '../styles/Navbar.css';
export default function Navbar(){
    const [isOpen,setIsOpen]= useState(false);

    return(
        <nav className="navbar">
            <Link to="/">
                <img src={logo} alt="Kaiz_logo" className="navbar-logo" />
            </Link>
            <button
             className="hamburger"
             onClick={()=> setIsOpen(!isOpen)}
             >
            {isOpen ? '✕' : '☰'}
            </button>
            <ul className={`nav-links ${isOpen ? 'open':''}`}>
                <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
                <li><Link to="/shop" onClick={() => setIsOpen(false)}>Shop</Link></li>
                <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
                <li><Link to="/cart" onClick={() => setIsOpen(false)}>Cart</Link></li>
            </ul>
        </nav>
    )
}