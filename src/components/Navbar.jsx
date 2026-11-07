import { useState } from "react";
import { business } from "../config/business";
import "../styles/navbar.css";

const navigationLinks = [
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "About", href: "#about" },
];

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    function closeMenu() {
        setMenuOpen(false);
    }

    const bookingAvailable =
        business.booking.enabled && Boolean(business.booking.url);

    return (
        <header className="site-header">
            <nav className="navbar container" aria-label="Main navigation">
                <a
                    href="#home"
                    className="navbar__brand"
                    onClick={closeMenu}
                    aria-label={`${business.name} home`}
                >
                    {business.shortName}
                </a>

                <button
                    type="button"
                    className="navbar__toggle"
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                    aria-controls="primary-navigation"
                    onClick={() => setMenuOpen((previous) => !previous)}
                >
                    <span className="navbar__toggle-line" />
                    <span className="navbar__toggle-line" />
                    <span className="navbar__toggle-line" />
                </button>

                <div
                    id="primary-navigation"
                    className={`navbar__links ${
                        menuOpen ? "navbar__links--open" : ""
                    }`}
                >
                    {navigationLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="navbar__link"
                            onClick={closeMenu}
                        >
                            {link.label}
                        </a>
                    ))}

                    {bookingAvailable ? (
                        <a
                            href={business.booking.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="navbar__book"
                            onClick={closeMenu}
                        >
                            Book Now
                        </a>
                    ) : (
                        <span className="navbar__book navbar__book--disabled">
                            Demo Only
                        </span>
                    )}
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
