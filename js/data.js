/* Centralized content for the site. Edit here — the DOM is generated from this file. */

const SITE_DATA = {
  person: {
    name: "Bhaskar Jyoti Sarma",
    monogram: "BS",
    role: "Junior Technical Superintendent",
    org: "IIT Guwahati",
    location: "Assam, India",
    email: "bhaskarjyotisarma13@gmail.com",
    phone: "+91 7002628206",
    github: "[ADD GITHUB URL]",
    linkedin: "[ADD LINKEDIN URL]",
  },

  stats: [
    { value: 7, suffix: "+", label: "Years of Experience" },
    { value: 2019, suffix: "", label: "Started Professional Journey" },
    { value: 4, suffix: "", label: "Organizations / Roles" },
    { value: null, suffix: "", label: "Core Development Technologies", display: "Java + PHP" },
  ],

  experience: [
    {
      company: "Birla Emporium",
      role: "Web Developer",
      period: "5 September 2019 – 17 March 2021",
      current: false,
      description:
        "Worked as a Web Developer, gaining professional experience in web application development, backend programming, database-driven applications and maintaining web-based systems.",
    },
    {
      company: "Assam Agricultural University",
      role: "System Administrator",
      period: "25 October 2021 – 30 September 2022",
      current: false,
      description:
        "Worked in system administration and technical support, handling IT infrastructure, systems, troubleshooting and technical operations.",
    },
    {
      company: "Department of Horticulture and Food Processing, Assam",
      role: "Technical / IT Professional",
      period: "20 October 2022 – 30 December 2023",
      current: false,
      description:
        "Worked on technical and software-related responsibilities, contributing to digital systems, web applications and IT operations.",
    },
    {
      company: "IIT Guwahati",
      role: "Junior Technical Superintendent",
      period: "1 January 2024 – Present",
      current: true,
      description:
        "Working as a Junior Technical Superintendent with responsibilities involving software development, web applications, backend systems, technical operations and institutional IT-related projects.",
    },
  ],

  skillGroups: [
    {
      title: "Programming Languages",
      icon: "code",
      skills: ["Java", "PHP", "JavaScript", "HTML", "CSS"],
    },
    {
      title: "Backend & Frameworks",
      icon: "layers",
      skills: ["Spring Boot", "Spring MVC", "Hibernate", "Frappe Framework"],
    },
    {
      title: "Databases",
      icon: "database",
      skills: ["MySQL", "MariaDB"],
    },
    {
      title: "Backend / Infrastructure",
      icon: "server",
      skills: ["Apache Kafka", "REST APIs", "Linux", "Tomcat", "Docker"],
    },
    {
      title: "Development Tools",
      icon: "tool",
      skills: ["Git", "GitHub", "GitLab", "VS Code", "NetBeans", "DBeaver", "phpMyAdmin"],
    },
  ],

  whatIDo: [
    {
      icon: "globe",
      title: "Web Development",
      description: "Building responsive and database-driven web applications.",
    },
    {
      icon: "cpu",
      title: "Backend Development",
      description: "Developing backend services and APIs using Java, Spring Boot, PHP and related technologies.",
    },
    {
      icon: "package",
      title: "Application Development",
      description: "Designing practical software solutions for real-world requirements.",
    },
    {
      icon: "terminal",
      title: "System Administration",
      description: "Working with servers, systems, deployment environments and technical infrastructure.",
    },
    {
      icon: "database",
      title: "Database Development",
      description: "Working with relational databases and designing data-driven applications.",
    },
    {
      icon: "puzzle",
      title: "Problem Solving",
      description: "Finding practical technology-based solutions to real-world problems.",
    },
  ],

  projects: [
    {
      title: "Enterprise Web Application",
      tag: "Project 01",
      description: "[ADD PROJECT DETAILS]",
      tech: ["Java", "Spring Boot", "MySQL"],
      github: "#",
      demo: "#",
    },
    {
      title: "Project Management System",
      tag: "Project 02",
      description: "[ADD PROJECT DETAILS]",
      tech: ["PHP", "Frappe", "MariaDB", "JavaScript"],
      github: "#",
      demo: "#",
    },
    {
      title: "REST API & Backend Platform",
      tag: "Project 03",
      description: "[ADD PROJECT DETAILS]",
      tech: ["Java", "Spring Boot", "REST API", "Kafka"],
      github: "#",
      demo: "#",
    },
  ],

  hobbies: [
    {
      icon: "🏍️",
      title: "Motorcycling",
      description:
        "I enjoy riding motorcycles, exploring roads and learning about motorcycles, their technology, performance and touring capabilities.",
    },
    {
      icon: "🗺️",
      title: "Travel & Exploration",
      description: "I enjoy travelling, exploring new places and discovering new roads and experiences.",
    },
    {
      icon: "📸",
      title: "Photography / Visual Content",
      description: "I am interested in capturing interesting moments, places, roads and experiences.",
    },
    {
      icon: "💻",
      title: "Technology",
      description: "I enjoy exploring new technologies, developer tools, AI assistants and software development techniques.",
    },
    {
      icon: "🔧",
      title: "Exploring & Learning",
      description: "I enjoy learning how things work and experimenting with new technologies and ideas.",
    },
  ],

  exploring: [
    "Spring Boot",
    "Microservices",
    "Kafka",
    "Docker",
    "Cloud Technologies",
    "AI-assisted Development",
    "Modern Web Development",
    "System Design",
  ],
};
