import { business } from "../config/business";
import "../styles/final-cta.css";

function FinalCTA() {
    const bookingAvailable =
        business.booking.enabled && Boolean(business.booking.url);

    return (
        <section
            id="book"
            className="final-cta"
            aria-labelledby="final-cta-title"
        >
            <div className="container final-cta__content">
                <p className="final-cta__eyebrow">
                    YOUR NEXT LOOK STARTS HERE
                </p>

                <h2 id="final-cta-title" className="final-cta__title">
                    Ready for
                    <br />
                    something better<span>.</span>
                </h2>

                <p className="final-cta__description">
                    Precision cuts. Refined details. A grooming
                    experience built around you.
                </p>

                {bookingAvailable ? (
                    <a
                        href={business.booking.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="final-cta__button"
                    >
                        <span>{business.booking.label}</span>
                        <span aria-hidden="true">↗</span>
                    </a>
                ) : (
                    <span className="final-cta__button final-cta__button--disabled">
                        <span>Booking Demo Only</span>
                        <span aria-hidden="true">—</span>
                    </span>
                )}

                {business.demo && (
                    <p className="final-cta__disclaimer">
                        Demonstration website — appointments are not available.
                    </p>
                )}
            </div>
        </section>
    );
}

export default FinalCTA;
