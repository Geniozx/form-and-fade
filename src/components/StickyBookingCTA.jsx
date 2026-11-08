import { business } from "../config/business";
import "../styles/sticky-booking.css";

function StickyBookingCTA() {
    const bookingAvailable =
        business.booking.enabled && Boolean(business.booking.url);

    return (
        <div className="sticky-booking">
            {bookingAvailable ? (
                <a
                    href={business.booking.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sticky-booking__button"
                >
                    <span>{business.booking.label}</span>
                    <span aria-hidden="true">↗</span>
                </a>
            ) : (
                <div
                    className="sticky-booking__button sticky-booking__button--disabled"
                    title="Appointments are unavailable in this portfolio demonstration"
                >
                    <span>Booking Demo Only</span>
                    <span aria-hidden="true">—</span>
                </div>
            )}
        </div>
    );
}

export default StickyBookingCTA;
