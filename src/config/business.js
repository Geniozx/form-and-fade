export const business = {
    name: "FORM & FADE",
    shortName: "F&F.",
    tagline: "Precision is everything.",
    description: "Modern grooming. Refined craft.",
    category: "Independent Barber Studio",

    booking: {
        url: "",
        label: "Book an Appointment",
        enabled: false,
    },

    services: [
        {
            id: "signature-cut",
            name: "Signature Cut",
            description: "A precision haircut tailored to your style.",
            duration: 45,
            price: 40,
        },
        {
            id: "skin-fade",
            name: "Skin Fade",
            description: "A clean, detailed fade with a sharp finish.",
            duration: 50,
            price: 45,
        },
        {
            id: "beard-trim",
            name: "Beard Trim",
            description: "Expert beard shaping and detailing.",
            duration: 25,
            price: 25,
        },
        {
            id: "cut-and-beard",
            name: "Cut & Beard",
            description: "A complete grooming experience.",
            duration: 60,
            price: 60,
        },
    ],

    
    gallery: [
        {
            src: "/images/precision-cut.jpeg",
            alt: "Barber carefully cutting hair with professional scissors",
        },
        {
            src: "/images/skin-fade.jpeg",
            alt: "Side profile of a finished skin fade haircut",
        },
        {
            src: "/images/beard-detail.jpeg",
            alt: "Detailed beard grooming with professional barber tools",
        },
        {
            src: "/images/studio.jpeg",
            alt: "Modern minimalist barber studio interior",
        },
    ],


    about: {
        heading: "The Art of the Cut",
        description:
        "At FORM & FADE, every detail matters. We believe great grooming combines precision, creativity, and personal style.",
    },

    contact: {
        email: "",
        phone: "",
        location: "",
    },

    social: {
        instagram: "",
        tiktok: "",
    },

    demo: true,
};
