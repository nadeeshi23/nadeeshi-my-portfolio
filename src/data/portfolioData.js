import avatarImg from '../assets/nadeeshi.png';

export const personalInfo = {
  name: "Nadeeshi Jayaweera",
  role: "Full-Stack & Software Developer",
  university: "Uva Wellassa University, Sri Lanka",
  degree: "B.Sc. (Hons) in Computer Science and Technology",
  targetRole: "Software Development Internship",
  status: "Available for Internship (2026/2027)",
  location: "Sri Lanka",
  bio: "Computer Science and Technology undergraduate at Uva Wellassa University with a passion for building full-stack web applications, scalable backends, and responsive user experiences. Experienced in React, PHP, MySQL, and modern software engineering practices, seeking an impactful software development internship.",
  about: [
    "I am an enthusiastic Computer Science and Technology undergraduate at Uva Wellassa University, Sri Lanka, with a solid academic foundation in software engineering, database management, and object-oriented architecture.",
    "Driven by curiosity and a problem-solving mindset, I enjoy building end-to-end applications that solve tangible problems—ranging from agricultural trade networks to modern reactive web interfaces.",
    "I am currently an active Design Team Member at the FOSS Community and have valuable experience working as a volunteer in IEEE projects, bringing strong creative design skills, UI/UX thinking, and collaborative teamwork.",
    "I am actively seeking a Software Development Internship where I can collaborate with talented engineering teams, contribute high-quality code, and continue expanding my practical skill set."
  ],
  avatar: avatarImg,
  socialLinks: {
    github: "https://github.com/nadeeshi23",
    linkedin: "https://www.linkedin.com/in/#", // Placeholder for LinkedIn profile
    email: "mhnk.jayaweera@gmail.com",
    cvUrl: "#", // Placeholder for CV download/view
  },
  stats: [
    { label: "Degree Focus", value: "Computer Science & Tech" },
    { label: "University", value: "Uva Wellassa University" },
    { label: "Status", value: "Internship Candidate" },
    { label: "Core Stack", value: "React • PHP • MySQL" }
  ]
};

export const skillsData = [
  {
    category: "Frontend Development",
    icon: "code",
    description: "Building responsive, modern, and accessible user interfaces.",
    skills: [
      { name: "React.js", level: "Proficient" },
      { name: "JavaScript (ES6+)", level: "Proficient" },
      { name: "HTML5 / Semantic Web", level: "Advanced" },
      { name: "CSS3 / Modern Layouts", level: "Proficient" },
      { name: "Responsive UI/UX", level: "Advanced" },
      { name: "Vite & Tooling", level: "Proficient" }
    ]
  },
  {
    category: "Backend & Databases",
    icon: "server",
    description: "Developing robust server-side logic and structured relational data models.",
    skills: [
      { name: "PHP", level: "Proficient" },
      { name: "MySQL", level: "Proficient" },
      { name: "RESTful API Integration", level: "Proficient" },
      { name: "Relational DB Design", level: "Intermediate" },
      { name: "SQL Query Optimization", level: "Intermediate" },
      { name: "Authentication / Sessions", level: "Intermediate" }
    ]
  },
  {
    category: "Developer Tools & Workflow",
    icon: "terminal",
    description: "Version control, collaboration, and modern development environments.",
    skills: [
      { name: "Git", level: "Proficient" },
      { name: "GitHub", level: "Proficient" },
      { name: "VS Code", level: "Advanced" },
      { name: "Postman API Testing", level: "Proficient" },
      { name: "npm / Node tooling", level: "Intermediate" },
      { name: "Agile / Scrum Basics", level: "Knowledgeable" }
    ]
  },
  {
    category: "Core Computer Science",
    icon: "database",
    description: "Fundamental algorithmic understanding and engineering principles.",
    skills: [
      { name: "Object-Oriented Programming (OOP)", level: "Proficient" },
      { name: "Data Structures & Algorithms", level: "Intermediate" },
      { name: "Software Engineering Life Cycle", level: "Proficient" },
      { name: "Database Normalization", level: "Proficient" },
      { name: "Problem Solving", level: "Strong" },
      { name: "Team Collaboration", level: "Strong" }
    ]
  }
];

export const educationData = [
  {
    institution: "Uva Wellassa University, Sri Lanka",
    degree: "Bachelor of Science (Hons) in Computer Science and Technology",
    period: "Undergraduate (Present)",
    location: "Badulla, Sri Lanka",
    status: "Currently seeking Software Development Internship",
    description: "Rigorous academic curriculum emphasizing software engineering fundamentals, algorithmic thinking, database systems, web development, and collaborative team projects.",
    highlights: [
      "Key Modules: Data Structures & Algorithms, Object-Oriented Programming, Database Systems, Web Application Development, Software Engineering.",
      "Hands-on group software engineering projects including LK Agro Market.",
      "Active engagement in coding assignments, peer reviews, and academic seminars."
    ]
  },
  {
    institution: "G.C.E. Advanced Level",
    degree: "Physical Science",
    period: "Completed",
    location: "Sri Lanka",
    status: "Foundation for University Entrance",
    description: "Built strong mathematical foundations, analytical reasoning, and logical problem-solving abilities preparing for a degree in Computer Science and Technology.",
    highlights: [
      "Mathematics, Physics, and Chemistry",
      "Qualified for university admission at Uva Wellassa University"
    ]
  }
];

export const projectsData = [
  {
    id: "personal-portfolio",
    title: "Modern Developer Portfolio",
    subtitle: "Personal Web Portfolio",
    featured: false,
    category: "Personal Project",
    image: null,
    description: "A high-performance, dark-charcoal personal portfolio website with elegant emerald green accents. Designed with React and modern CSS to showcase academic qualifications, featured university group projects, technical skills, and internship readiness with seamless responsiveness.",
    highlights: [
      "Curated dark charcoal aesthetic with subtle green ambient glows and glassmorphism",
      "Fully responsive navigation bar with mobile drawer and smooth anchor scrolling",
      "Modular, reusable component architecture with clean separation of data and UI",
      "Interactive CV modal, quick email clipboard copy, and accessible contact methods"
    ],
    technologies: ["React", "Vite", "JavaScript", "CSS3", "Responsive UI"],
    githubUrl: "https://github.com/nadeeshi23/my-portfolio",
    hasLiveDemo: true,
    demoUrl: "#",
    isUnderDevelopment: false
  },
  {
    id: "fitzone-gym-management",
    title: "FITZONE - Gym Management System",
    subtitle: "Web-Based Gym Management System",
    featured: false,
    category: "University Group Project",
    image: null,
    description: "A comprehensive web-based gym management system developed as a university project to modernize gym operations through a centralized digital platform. The system streamlines member management, trainer coordination, front-desk check-ins, and financial reporting—reducing manual work and improving operational efficiency.",
    highlights: [
      "Centralized management of gym members, trainers, and administrators",
      "Digital front-desk check-in and attendance tracking",
      "Member and trainer management with role-based access",
      "Financial reports for monitoring gym revenue and transactions",
      "Responsive React interface integrated with a PHP backend and database"
    ],
    technologies: ["React", "PHP", "MySQL", "SQLite", "JavaScript", "REST API", "CSS3", "Git"],
    githubUrl: "https://github.com/Ashen1127mdx/Gym-Management-System.git", // Update with your repository URL
    hasLiveDemo: false,
    demoUrl: "#",
    isUnderDevelopment: false
  },
  {
    id: "lk-agro-market",
    title: "LK Agro Market",
    subtitle: "Web-Based Agricultural Marketplace",
    featured: false,
    category: "University Group Project",
    image: null,
    description: "A comprehensive web-based agricultural marketplace developed as a university group project at Uva Wellassa University. LK Agro Market directly bridges local Sri Lankan farmers, wholesale purchasers, and consumers—eliminating unnecessary middleman costs, promoting fair market pricing, and enabling streamlined crop inventory distribution.",
    highlights: [
      "Direct farmer-to-consumer and wholesale marketplace trading model",
      "Dynamic product catalog and category filters for seasonal vegetables, grains, and fruits",
      "Role-based portals for farmers, buyers, and platform administrators",
      "Normalized MySQL database schema handling crops, pricing updates, orders, and user sessions",
      "Responsive React interface integrated with modular PHP REST backend endpoints"
    ],
    technologies: ["React", "PHP", "MySQL", "JavaScript", "REST API", "CSS3", "Git"],
    githubUrl: "https://github.com/DamithPrashan/LK_Agro_Market.git",
    hasLiveDemo: false,
    demoUrl: "#",
    isUnderDevelopment: false
  }
];
