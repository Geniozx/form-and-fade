import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { business } from "../config/business";
import "../styles/navbar.css";

const navigationLinks = [
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "About", href: "#about" },
];

const mobileQuery = "(max-width: 768px)";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(
        () => window.matchMedia(mobileQuery).matches
    );
    const [showEdgeHandle, setShowEdgeHandle] = useState(false);

    const headerRef = useRef(null);
    const toggleRef = useRef(null);
    const edgeHandleRef = useRef(null);
    const drawerRef = useRef(null);
    const closeRef = useRef(null);
    const lastTriggerRef = useRef(null);
    const wasOpenRef = useRef(false);
    const navigatingRef = useRef(false);

    const drawerActive = isMobile && menuOpen;

    const bookingAvailable =
        business.booking.enabled && Boolean(business.booking.url);

    function openMenu(triggerRef) {
        lastTriggerRef.current = triggerRef;
        setMenuOpen(true);
    }

    function closeMenu() {
        setMenuOpen(false);
    }

    function handleNavigation(event) {
        if (!drawerActive) {
            closeMenu();
            return;
        }

        const targetId = event.currentTarget.hash.slice(1);
        const target = document.getElementById(targetId);

        if (!target) return;

        event.preventDefault();

        // Navigation should not restore focus to the menu trigger.
        navigatingRef.current = true;

        closeMenu();

        window.history.pushState(null, "", `#${targetId}`);

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                target.scrollIntoView({
                    behavior: window.matchMedia(
                        "(prefers-reduced-motion: reduce)"
                    ).matches
                        ? "auto"
                        : "smooth",
                    block: "start",
                });
            });
        });
    }

    // Detect mobile/desktop breakpoint changes.
    useEffect(() => {
        const media = window.matchMedia(mobileQuery);

        function handleChange(event) {
            setIsMobile(event.matches);
            setMenuOpen(false);
            setShowEdgeHandle(false);
        }

        media.addEventListener("change", handleChange);

        return () => {
            media.removeEventListener("change", handleChange);
        };
    }, []);

    // Show the edge handle only when the header is off-screen.
    useEffect(() => {
        if (!isMobile) return;

        const header = headerRef.current;
            if (!header) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setShowEdgeHandle(!entry.isIntersecting);
            },
            { threshold: 0 }
        );

        observer.observe(header);

        return () => observer.disconnect();
    }, [isMobile]);

    // Manage focus, keyboard behavior, and body scrolling.
    useLayoutEffect(() => {
        if (!drawerActive) {
            if (wasOpenRef.current) {
                wasOpenRef.current = false;

                if (navigatingRef.current) {
                    navigatingRef.current = false;
                } else {
                    const trigger = lastTriggerRef.current?.current;

                    if (trigger?.isConnected && !trigger.inert) {
                        trigger.focus({ preventScroll: true });
                    } else {
                        toggleRef.current?.focus({ preventScroll: true });
                    }
                }
            }

            return;
        }

        wasOpenRef.current = true;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        // Set focus immediately when the drawer opens.
        closeRef.current?.focus();

        function handleKeyDown(event) {
            if (event.key === "Escape") {
                event.preventDefault();
                closeMenu();
                return;
            }

            if (event.key !== "Tab") return;

            const focusable = Array.from(
                drawerRef.current?.querySelectorAll(
                    'a[href], button:not([disabled])'
                ) ?? []
            ).filter((element) => element.getClientRects().length > 0);

            if (!focusable.length) {
                event.preventDefault();
                drawerRef.current?.focus();
                return;
            }

            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            const active = document.activeElement;

            // Recover focus if it is outside the drawer.
            if (!drawerRef.current?.contains(active)) {
                event.preventDefault();

                if (event.shiftKey) {
                    last.focus();
                } else {
                    first.focus();
                }

                return;
            }

            if (
                event.shiftKey &&
                active === first
            ) {
                event.preventDefault();
                last.focus();
            } else if (
                !event.shiftKey &&
                active === last
            ) {
                event.preventDefault();
                first.focus();
            }
        }

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [drawerActive]);


    return (
        <>
            <header ref={headerRef} className="site-header">
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
                        ref={toggleRef}
                        type="button"
                        className="navbar__toggle"
                        aria-label="Open navigation menu"
                        aria-expanded={drawerActive}
                        aria-controls="primary-navigation"
                        onClick={() => openMenu(toggleRef)}
                    >
                        <span className="navbar__toggle-line" />
                        <span className="navbar__toggle-line" />
                        <span className="navbar__toggle-line" />
                    </button>

                    <div
                        ref={drawerRef}
                        id="primary-navigation"
                        tabIndex={-1}
                        className={`navbar__links ${
                        drawerActive ? "navbar__links--open" : ""
                        }`}
                        role={isMobile ? "dialog" : undefined}
                        aria-modal={drawerActive ? "true" : undefined}
                        aria-label={isMobile ? "Mobile navigation" : undefined}
                        inert={isMobile && !drawerActive}
                    >
                        <div className="navbar__drawer-header">
                            <span>MENU</span>

                            <button
                                ref={closeRef}
                                type="button"
                                className="navbar__close"
                                onClick={closeMenu}
                                aria-label="Close navigation menu"
                            >
                                ×
                            </button>
                        </div>

                        {navigationLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="navbar__link"
                                onClick={handleNavigation}
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

                        <p className="navbar__drawer-caption">
                            PRECISION IS EVERYTHING.
                        </p>
                    </div>
                </nav>
            </header>

            {drawerActive && (
                <div
                    className="navbar__backdrop"
                    onClick={closeMenu}
                    aria-hidden="true"
                />
            )}

            {isMobile && showEdgeHandle && (
                <button
                    ref={edgeHandleRef}
                    type="button"
                    className={`navbar__edge-handle ${
                    drawerActive ? "navbar__edge-handle--hidden" : ""
                    }`}
                    aria-label="Open navigation menu"
                    aria-controls="primary-navigation"
                    aria-expanded={drawerActive}
                    aria-hidden={drawerActive}
                    inert={drawerActive}
                    onClick={() => openMenu(edgeHandleRef)}
                >
                    <span
                        className="navbar__edge-handle-visual"
                        aria-hidden="true"
                    >
                        <span />
                        <span />
                        <span />
                    </span>
                </button>
            )}
        </>
    );
}

export default Navbar;
