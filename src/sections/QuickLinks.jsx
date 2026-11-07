import "../styles/quick-links.css";

const quickLinks = [
    {
        number: "01",
        title: "Services",
        description: "Explore our cuts, fades, and grooming services.",
        href: "#services",
    },
    {
        number: "02",
        title: "Gallery",
        description: "Discover the details behind our craft.",
        href: "#gallery",
    },
    {
        number: "03",
        title: "Our Story",
        description: "Learn more about the FORM & FADE philosophy.",
        href: "#about",
    },
];

function QuickLinks() {
    return (
        <section
            className="quick-links"
            aria-labelledby="quick-links-title"
        >
            <div className="container">
                <div className="quick-links__header">
                    <p className="quick-links__eyebrow">
                        DISCOVER FORM & FADE
                    </p>

                    <h2
                        id="quick-links-title"
                        className="quick-links__title"
                    >
                        Everything you need.
                        <br />
                        Nothing you don't.
                    </h2>
                </div>

                <div className="quick-links__grid">
                    {quickLinks.map((link) => (
                        <a
                            key={link.number}
                            href={link.href}
                            className="quick-links__card"
                        >
                            <span className="quick-links__number">
                                {link.number}
                            </span>

                            <div className="quick-links__card-content">
                                <h3>{link.title}</h3>
                                <p>{link.description}</p>
                            </div>

                            <span
                                className="quick-links__arrow"
                                aria-hidden="true"
                            >
                                ↗
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default QuickLinks;
