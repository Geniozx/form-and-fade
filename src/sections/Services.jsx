import { business } from "../config/business";
import "../styles/services.css";

function Services() {
    const services = business.services ?? [];

    return (
        <section
            id="services"
            className="services"
            aria-labelledby="services-title"
        >
            <div className="container">
                <div className="services__header">
                    <div>
                        <p className="services__eyebrow">
                            THE CRAFT
                        </p>

                        <h2 id="services-title" className="services__title">
                            Services & Pricing<span>.</span>
                        </h2>
                    </div>

                    <p className="services__intro">
                        Thoughtful grooming. Precise execution.
                        Every detail matters.
                    </p>
                </div>

                <div className="services__grid">
                    {services.map((service, index) => (
                        <article
                            key={service.id ?? service.name ?? index}
                            className="services__card"
                        >
                            <div className="services__card-top">
                                <span className="services__number">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <span className="services__duration">
                                    {service.duration}
                                </span>
                            </div>

                            <div className="services__card-body">
                                <h3>{service.name}</h3>

                                {service.description && (
                                    <p>{service.description}</p>
                                )}
                            </div>

                            <div className="services__card-bottom">
                                <span className="services__price">
                                    {service.price}
                                </span>

                                <span
                                    className="services__decorative-arrow"
                                    aria-hidden="true"
                                >
                                    ↗
                                </span>
                            </div>
                        </article>
                    ))}
                </div>

                {services.length === 0 && (
                    <p className="services__empty">
                        Services will be available soon.
                    </p>
                )}

                {business.demo && (
                    <p className="services__disclaimer">
                        Sample services and pricing for demonstration purposes.
                    </p>
                )}
            </div>
        </section>
    );
}

export default Services;
