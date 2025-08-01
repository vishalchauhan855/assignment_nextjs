"use client";

import Link from 'next/link';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import Hamburger from './Hamburger';
import '@/Css/Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (

    <nav className="navbar">
      
      <div className="navbar-container">
        
        <Hamburger isOpen={menuOpen} toggleMenu={toggleMenu} />

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/Contact">Contact</Link></li>

          <li className="dropdown">
            <span>Services ▾</span>
            <ul className="dropdown-menu">
              <li><Link href="/Services/SEO">SEO</Link></li>
              <li><Link href="/Services/Consulting">Consulting</Link></li>
              <li className="dropdown">
                <span>Web Development ▸</span>
                <ul className="dropdown-menu nested">
                  <li><Link href="/Services/Web-Development/Mern">MERN</Link></li>
                  <li><Link href="/Services/Web-Development/Mean">MEAN</Link></li>
                  <li><Link href="/Services/Web-Development/DotNet">.NET</Link></li>
                </ul>
              </li>
            </ul>
          </li>

          <li><ThemeToggle /></li>
        </ul>
      </div>
    </nav>
  );
}