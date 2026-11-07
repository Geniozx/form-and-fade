import { business } from "../config/business";
import "../styles/about.css";

function About() {
    const about = business.about;

    const aboutText =
        typeof about === "string"
        ? about
        : about?.description ??
            about?.text ??
            "A modern approach to grooming, built on precision and attention to detail.";

    return (
        <section
            id="about"
            className="about"
            aria-labelledby="about-title"
        >
            <div className="container about__layout">
                <div className="about__content">
                    <p className="about__eyebrow">THE PHILOSOPHY</p>

                    <h2 id="about-title" className="about__title">
                        More than
                        <br />
                        a haircut<span>.</span>
                    </h2>

                    <p className="about__lead">
                        Modern grooming. Timeless standards.
                    </p>

                    <p className="about__description">{aboutText}</p>

                    <a href="#gallery" className="about__link">
                        Explore Our Work
                        <span aria-hidden="true">↗</span>
                    </a>
                </div>

                <div className="about__visual" aria-hidden="true">
                    <div className="about__visual-top">
                        <span>FORM & FADE</span>
                        <span>EST. MMXXVI</span>
                    </div>

                    <div className="about__visual-center">
                        <span>F&F.</span>
                        <p>PRECISION IS EVERYTHING.</p>
                    </div>

                    <div className="about__visual-bottom">
                        <span>THE MODERN BARBER STUDIO</span>
                        <span>01 / 01</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
