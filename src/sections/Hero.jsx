import { business } from "../config/business";
import "../styles/hero.css";

function Hero() {
    const bookingAvailable =
        business.booking.enabled && Boolean(business.booking.url);

    return (
        <section id="home" className="hero" aria-labelledby="hero-title">
            <div className="container hero__content">
                <div className="hero__copy">
                    <p className="hero__eyebrow">{business.category}</p>

                    <h1 id="hero-title" className="hero__title">
                        {business.name}
                        <span className="hero__title-period">.</span>
                    </h1>

                    <p className="hero__tagline">{business.tagline}</p>
                    <p className="hero__description">{business.description}</p>

                    <div className="hero__actions">
                        {bookingAvailable ? (
                            <a
                                href={business.booking.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hero__button"
                            >
                                {business.booking.label}
                                <span aria-hidden="true">↗</span>
                            </a>
                        ) : (
                            <span className="hero__button hero__button--disabled">
                                Booking Demo Only
                            </span>
                        )}

                        <a href="#services" className="hero__secondary-link">
                            Explore Services
                            <span aria-hidden="true">↓</span>
                        </a>
                    </div>

                    {business.demo && (
                        <p className="hero__disclaimer">
                        Fictional business — portfolio demonstration
                        </p>
                    )}
                </div>

                <div className="hero__visual" aria-hidden="true">
                    <div className="hero__visual-frame">
                        <span className="hero__visual-label">
                            FORM / FADE
                        </span>
                        <span className="hero__visual-caption">
                            THE ART OF PRECISION
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
