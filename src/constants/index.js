import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  aws,
  azure,
  c,
  cplusplus,
  flask,
  java,
  jenkins,
  python,
  nodejs,
  docker,
  rbc,
  rtrc,
  lightci,
  wazzle,
  sgi,
  ecocart,
  carrent,
  jobit,
  tripguide,
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
    title: "Devops Developer",
    icon: mobile,
  },
  {
    title: "Freelance Developer",
    icon: backend,
  },
  {
    title: "Business Owner",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "C++",
    icon: cplusplus,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Flask",
    icon: flask,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Azure",
    icon: azure,
  },
  {
    name: "Jenkins",
    icon: jenkins,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Devops Engineer",
    company_name: "Royal Bank of Canada",
    icon: rbc,
    iconBg: "#005DAA",
    date: "May 2023 - Present",
    points: [
      "Reduced app downtime from 2 hours to under 5 minutes, improving error insights.",
      "Led a project automating governance processes using GenAI in collaboration with the VP of DevOps.",
      "Designed and implemented custom Github Actions, CI workflow templates and a slackbot for real-time notifications.",
      "Optimized Shell scripts with multi-threading, accelerating the release process.",
    ],
  },
  {
    title: "Head of Engineering",
    company_name: "Reno Tahoe Rental Car",
    icon: rtrc,
    iconBg: "#383E56",
    date: "April 2022 - Present",
    points: [
      "Orchestrated cross-functional teams, comprising five highly skilled developers, overseeing client-centric project development.",
      "Led MVP to SaaS transformation, steering the project from an MVP for car rental software to a fully-fledged SaaS platform.",
      "Implemented domain splitting as a mechanism for SEO performance improvement.",
      "Integrated cronjobs with SendGrid and Twilio for automated messages in the backend.",
    ],
  },
  {
    title: "Founding Engineer",
    company_name: "Light Consulting",
    icon: lightci,
    iconBg: "#0f1771",
    date: "Feb 2022 - July 2022",
    points: [
      "Co-founded a dynamic software consulting firm specializing in scaling engineering teams, developing new products, and enhancing existing solutions.",
      "Collaborating with engineering teams, designers, and product managers to create high-quality solutions.",
      "Guided major architectural and design decisions, ensuring alignment with unique challenges and project goals.",
      "Formulated business strategy, defined target markets, crafted service offerings, and charted the company's growth trajectory.",
    ],
  },
  {
    title: "Full Stack Android Developer",
    company_name: "Wazzle",
    icon: wazzle,
    iconBg: "#6b1ca0",
    date: "Dec 2021 - April 2022",
    points: [
      "Took ownership of the end-to-end development process for a social media app, managing design decisions to final deployment.",
      "Conducted extensive testing, including unit tests for individual components and instrumentation tests for the entire app, addressing performance bottlenecks and bugs.",
      "Leveraged expertise in API integration and XML parsing to seamlessly integrate backend logic alongside frontend code.",
      "Applied knowledge of mobile UI/UX design principles to shape the app's interface for an intuitive and visually appealing user experience.",
    ],
  },
  {
    title: "Data Engineer",
    company_name: "Saskatchewan Government Insurance",
    icon: sgi,
    iconBg: "#47a01c",
    date: "May 2021 - August 2021",
    points: [
      "Executed advanced data orchestration and analysis, driving data-driven decision-making within the Traffic Safety Division.",
      "Employed sophisticated algorithms for intricate data transformations and manipulations, significantly optimizing data integrity and reliability.",
      "Led immersive virtual reality simulations, as part of the transformative SmartWheels program sponsored by MADD Canada, engaging over 400 customers.",
      "Engaged in client-centric data interactions, skillfully obtaining and verifying data during direct engagements with clientele.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "EcoCart",
    icon: ecocart,
    iconBg: "#358e0b",
    date: "Dec 2020 - April 2021",
    points: [
      "Designed and developed a B2B e-commerce application leveraging Flask API in collaboration with the VP of Engineering.",
      "Successfully established and maintained a robust customer base, comprising more than 500 businesses.",
      "Deployed the application using Digital Ocean droplets, ensuring the scalability of the platform to accommodate growing user demands.",
      "Demonstrated proficiency in web engineering, utilizing Django and Flask for backend development, resulting in a high-performance ecosystem.",
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
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rental",
    description:
      "Web-based platform that allows users to search, browse, and book car rentals. Integrated with Twilio and Sendgrid for automated messaging.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "cycle.io",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
  },
  {
    name: "AirBnb Clone",
    description:
      "Web application that enables reservation workflows with host approval and dynamic notifications. Implements JWT authentication alongside a user and property review system.",
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
        name: "django",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
  },
  {
    name: "Request Generator",
    description:
      "A comprehensive platform mapping questions to respective domains within a source of truth file and generating compliance requests. Integrating Authentication and exportable to PDF.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "fastAPI",
        color: "green-text-gradient",
      },
      {
        name: "azure",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
  },
];

export { services, technologies, experiences, testimonials, projects };
