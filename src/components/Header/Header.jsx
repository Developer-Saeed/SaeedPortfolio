import { useState } from "react";
import "./header.css";
import { Link } from "react-scroll";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const menuItems = [
        { name: "Home", link: "home" },
        { name: "About Me", link: "aboutme" },
        { name: "Services", link: "services" },
        { name: "Portfolio", link: "portfolio" },
        { name: "Contact", link: "contact" }
    ];



    return (
        <header className="header">

            <h1 className="gradient-text">NSFB14</h1>

            <ul className="menu-items">
                {menuItems.map((item, index) => (
                    <li key={index}>
                        <Link to={item.link} smooth={true} duration={500} offset={-70} activeClass="active-menu-item" spy={true}>
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>

            <button className="contact-btn">Contact Me</button>

            {/* Mobile Button */}
            <button
                className="menu-btn"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                ☰
            </button>

            {/* Sliding Menu */}
            <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
                <button
                    className="close-btn"
                    onClick={() => setMenuOpen(false)}
                >
                    ✕
                </button>



                <ul>
                    {menuItems.map((item, index) => (
                        <li key={index} className="menu-item-single">
                            <Link to={item.link} smooth={true} duration={500} offset={-70} activeClass="active-menu-item" spy={true}>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

        </header>
    );
};

export default Header;