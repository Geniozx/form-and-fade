import { business } from "../config/business";
import "../styles/footer.css";

const footerLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "About", href: "#about" },
];

function Footer() {
    const contact = business.contact ?? {};
    const social = business.social ?? {};

    const socialLinks = Object.entries(social).filter(
        ([, url]) => typeof url === "string" && url.trim()
    );

    return (
        <footer className="footer" id="contact">
            <div className="container">
                <div className="footer__main">
                    <div className="footer__brand">
                        <a href="#home" className="footer__logo">
                            {business.shortName}
                        </a>

                        <p>{business.tagline}</p>
                        <span>{business.category}</span>
                    </div>

                    <div className="footer__column">
                        <h2>Explore</h2>

                        <nav aria-label="Footer navigation">
                            {footerLinks.map((link) => (
                                <a key={link.href} href={link.href}>
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>

                    <div className="footer__column">
                        <h2>Connect</h2>

                        {contact.email && (
                            <a href={`mailto:${contact.email}`}>
                                {contact.email}
                            </a>
                        )}

                        {contact.phone && (
                            <a href={`tel:${contact.phone}`}>
                                {contact.phone}
                            </a>
                        )}

                        {socialLinks.map(([platform, url]) => (
                            <a
                                key={platform}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {platform.charAt(0).toUpperCase() + platform.slice(1)}
                            </a>
                        ))}

                        {!contact.email &&
                        !contact.phone &&
                        socialLinks.length === 0 && (
                            <p className="footer__muted">
                                Contact details available when configured.
                            </p>
                        )}
                    </div>
                </div>

                <div className="footer__bottom">
                    <p>
                        © {new Date().getFullYear()} {business.name}.
                    </p>

                    {business.demo && (
                        <p>
                            Fictional business. Portfolio demonstration only.
                        </p>
                    )}
                </div>
            </div>
        </footer>
    );
}

export default Footer;
