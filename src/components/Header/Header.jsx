
import { useState } from "react";
import { Link } from "react-scroll";
import "./header.css";
// 1. Moved outside component to prevent recreation on every render
const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "aboutme", label: "About Me" },
  { id: "services", label: "Services" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact" }
];
const SCROLL_CONFIG = {
  smooth: true,
  duration: 500,
  offset: -70,
  spy: true,
  activeClass: "active-menu-item"
};
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);
  return (
    <header className="header">
      {/* Logo */}
      <h1 className="gradient-text">NSFB14</h1>
      {/* Desktop Navigation */}
      <nav className="desktop-nav">
        <ul className="nav-list">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <Link to={link.id} {...SCROLL_CONFIG}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {/* Contact Button */}
      <Link to="contact" {...SCROLL_CONFIG}>
        <button className="contact-btn">Contact Me</button>
      </Link>
      {/* Mobile Toggle Button */}
      <button
        className="menu-toggle-btn"
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      >
        {isMenuOpen ? "✕" : "☰"}
      </button>
      {/* Backdrop Overlay */}
      <div
        className={`backdrop ${isMenuOpen ? "active" : ""}`}
        onClick={closeMenu}
      />
      {/* Mobile Navigation */}
      <nav className={`mobile-nav ${isMenuOpen ? "mobile-nav--open" : ""}`}>
        <ul className="nav-list">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <Link
                to={link.id}
                {...SCROLL_CONFIG}
                onClick={closeMenu} // 2. Close menu after clicking link
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
export default Header;