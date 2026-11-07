import { useEffect, useRef, useState } from "react";
import { business } from "../config/business";
import "../styles/gallery.css";

function Gallery() {
    const images = (business.gallery ?? []).slice(0, 8);
    const [activeIndex, setActiveIndex] = useState(null);
    const closeButtonRef = useRef(null);
    const previousFocusRef = useRef(null);

    const isOpen = activeIndex !== null;
    const activeImage = isOpen ? images[activeIndex] : null;

    function openLightbox(index) {
        previousFocusRef.current = document.activeElement;
        setActiveIndex(index);
    }

    function closeLightbox() {
        setActiveIndex(null);
        requestAnimationFrame(() => {
            previousFocusRef.current?.focus();
        });
    }

    useEffect(() => {
        if (!isOpen) return;

        const previousOverflow = document.body.style.overflow;
            document.body.style.overflow = "hidden";

        closeButtonRef.current?.focus();

        function handleKeyDown(event) {
            if (event.key === "Escape") {
                event.preventDefault();
                closeLightbox();
            }

            if (event.key === "ArrowRight") {
                event.preventDefault();
                setActiveIndex((index) => (index + 1) % images.length);
            }

            if (event.key === "ArrowLeft") {
                event.preventDefault();
                setActiveIndex(
                    (index) => (index - 1 + images.length) % images.length
                );
            }

            if (event.key === "Tab") {
                const dialog = closeButtonRef.current?.closest(
                    ".gallery__lightbox"
                );

                if (!dialog) return;

                const focusable = Array.from(
                    dialog.querySelectorAll(
                        'button:not([disabled]), a[href], [tabindex="0"]'
                    )
                );

                if (!focusable.length) return;

                const first = focusable[0];
                const last = focusable[focusable.length - 1];

                if (event.shiftKey && document.activeElement === first) {
                    event.preventDefault();
                    last.focus();
                } else if (
                    !event.shiftKey &&
                    document.activeElement === last
                ) {
                    event.preventDefault();
                    first.focus();
                }
            }
        }

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, images.length]);

    return (
        <section
            id="gallery"
            className="gallery"
            aria-labelledby="gallery-title"
        >
            <div className="container">
                <div className="gallery__header">
                    <p className="gallery__eyebrow">THE WORK</p>
                    <h2 id="gallery-title" className="gallery__title">
                        The Gallery<span>.</span>
                    </h2>
                    <p className="gallery__intro">
                        Precision in every detail. Craft in every cut.
                    </p>
                </div>

                {images.length > 0 ? (
                    <div className="gallery__grid">
                        {images.map((image, index) => (
                            <button
                                key={image.src ?? index}
                                type="button"
                                className="gallery__item"
                                onClick={() => openLightbox(index)}
                                aria-label={`View image ${index + 1}: ${image.alt}`}
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    loading="lazy"
                                    decoding="async"
                                />
                                <span className="gallery__item-overlay" aria-hidden="true">
                                    <span>VIEW IMAGE</span>
                                    <span>↗</span>
                                </span>
                            </button>
                        ))}
                    </div>
                ) : (
                    <div className="gallery__placeholder">
                        <span className="gallery__placeholder-number">01 / 08</span>
                        <p>Craft worth capturing.</p>
                        <span>EDITORIAL GALLERY — COMING SOON</span>
                    </div>
                )}

                {business.demo && (
                    <p className="gallery__disclaimer">
                        Portfolio demonstration — illustrative gallery content.
                    </p>
                )}
            </div>

            {activeImage && (
                <div
                    className="gallery__lightbox"
                    role="dialog"
                    aria-modal="true"
                    aria-label={`Gallery image ${activeIndex + 1} of ${images.length}`}
                >
                    <button
                        ref={closeButtonRef}
                        type="button"
                        className="gallery__close"
                        onClick={closeLightbox}
                        aria-label="Close gallery"
                    >
                        ×
                    </button>

                    <div className="gallery__lightbox-content">
                        <img src={activeImage.src} alt={activeImage.alt} />

                        <p className="gallery__lightbox-caption">
                            {activeImage.alt}
                        </p>

                        <div className="gallery__lightbox-controls">
                            <button
                                type="button"
                                onClick={() =>
                                    setActiveIndex(
                                        (index) => (index - 1 + images.length) % images.length
                                    )
                                }
                                aria-label="Previous image"
                            >
                                ← Previous
                            </button>

                            <span>
                                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                                {String(images.length).padStart(2, "0")}
                            </span>

                            <button
                                type="button"
                                onClick={() =>
                                    setActiveIndex((index) => (index + 1) % images.length)
                                }
                                aria-label="Next image"
                            >
                                Next →
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Gallery;
