import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Artist",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "git",
        icon: git,
    },
];

const experiences = [
    {
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#383E56",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#383E56",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7wxljZIzgfgTYSX2F1D1mZRQwy8YyMjCTwQ&usqp=CAU",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg_Z3Z1rXC667uYjcqINKm6BZydzRlRZEkUFVcUyBuc_FagAThdeZ1sYr1Vgp8FOOtRnQ&usqp=CAU",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "data:image/jpeg;base64,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",
    },
];

const projects = [
    {
        name: "Car Rent",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };
