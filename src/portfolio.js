/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Siti Hawa Mad Daud",
  title: "IT Officer | Full-Stack Developer",
  subTitle: emoji(
    "IT Officer at Universiti Malaya with 4+ years of experience in system development 🚀. Passionate about improving operations through technology and exploring AI & automation in system development."
  ),
  resumeLink:
    "", // Add your resume link here
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/siti-hawa",
  linkedin: "https://www.linkedin.com/in/siti-hawa-mad-daud/",
  gitlab: "https://gitlab.com/siti-hawa",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Technical Expertise",
  subTitle: "FULL-STACK DEVELOPMENT • DATABASE • DEVOPS • PROJECT MANAGEMENT",
  skills: [
    emoji("⚡ Full-Stack Development: Laravel, PHP, Vue.js, JavaScript, Livewire, Alpine.js"),
    emoji("⚡ Database & API: PostgreSQL, RESTful API development and integration"),
    emoji("⚡ DevOps & Collaboration: Git, GitLab, CI/CD, code review processes"),
    emoji("⚡ Project Management: ClickUp, Jira, agile development practices")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "Vue.js",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Alpine.js",
      fontAwesomeClassname: "fas fa-mountain"
    },
    {
      skillName: "Livewire",
      fontAwesomeClassname: "fas fa-bolt"
    },
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Tailwind CSS",
      fontAwesomeClassname: "fas fa-wind"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "DBeaver",
      fontAwesomeClassname: "fas fa-table"
    },
    {
      skillName: "REST API",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "GitLab",
      fontAwesomeClassname: "fab fa-gitlab"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Bitbucket",
      fontAwesomeClassname: "fab fa-bitbucket"
    },
    {
      skillName: "ClickUp",
      fontAwesomeClassname: "fas fa-tasks"
    },
    {
      skillName: "Jira",
      fontAwesomeClassname: "fab fa-atlassian"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Universiti Teknologi MARA, Jasin",
      logo: require("./assets/images/uitmLogo.png"),
      subHeader: "Bachelor of Computer Science (Hons.)",
      duration: "2018 - 2021",
      desc: "CGPA: 3.81 | Vice Chancellor's Award",
      descBullets: [
        "🏅 Gold Award – International Jasin Multimedia & Computer Science Exhibition (2020)",
        "🏅 Best Presenter – Data Mining & AI Exhibition (2019)",
        "Specialized in software engineering, web development, and database systems",
        "Graduated with honors and received Vice Chancellor's Award for academic excellence"
      ]
    },
    {
      schoolName: "Universiti Teknologi MARA, Raub",
      logo: require("./assets/images/uitmLogo.png"),
      subHeader: "Diploma of Computer Science",
      duration: "2016 - 2018",
      desc: "CGPA: 3.78 | Vice Chancellor's Award",
      descBullets: [
        "🏅 Participant – Programming Competition (2017)",
        "🏅 Secretariat – e-Sport Tournament (2016)",
        "Strong foundation in programming fundamentals and software development",
        "Active participant in academic competitions and extracurricular activities"
      ]
    }
  ]
};

// Technical Proficiency

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Laravel Framework Development", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "PostgreSQL Database Management",
      progressPercentage: "88%"
    },
    {
      Stack: "RESTful API Development & Integration",
      progressPercentage: "87%"
    },
    {
      Stack: "Git Version Control & Collaboration",
      progressPercentage: "85%"
    },
    {
      Stack: "Project Management (ClickUp, Jira)",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Information Technology Officer",
      company: "Universiti Malaya",
      companylogo: require("./assets/images/umLogo.png"),
      date: "July 2021 – Present",
      desc: "Technical Lead for Human Resource system development and API integration, responsible for full-stack development and team coordination.",
      descBullets: [
        "🎯 **Technical Leadership**: Currently serving as Technical Lead for Human Resource System development, overseeing core modules and team coordination",
        "🏗️ **System Development**: Developed core modules including Leave Management, User Management, Staff Profile, Organization Structure, SSPA, Promotion (Academic & Non-Academic), File Management, and Allowances",
        "🔗 **API Integration**: Built and maintained eHR API for seamless integration with HRIS, UMExpert, and UMTouch systems",
        "⚙️ **Technology Stack**: Working with Laravel, Livewire, Tailwind CSS, JavaScript, and PostgreSQL for scalable web application development",
        "🛠️ **Release Management**: Appointed as Release Gatekeeper, responsible for controlling and overseeing system application releases across JTM",
        "� **System Deployment**: Designated as HR System Deployer, responsible for production deployments of human resource applications and ensuring system reliability",
        "�🔄 **DevOps & Version Control**: Acting as GitLab Gatekeeper for code review and merge processes, ensuring code quality and team collaboration",
        "📊 **Database Management**: Structured and maintained migration files, ensuring data integrity and system scalability",
        "🚀 **Task Force Participation**: Active member of DevOps Task Force and AI Tech Task Force, contributing to organizational digital transformation",
        "👥 **Team Collaboration**: Working closely with development and support teams and other stakeholders to ensure consistent system development and integration"
      ]
    },
    {
      role: "Full Stack Software Engineer",
      company: "B2BE GSS Sdn Bhd",
      companylogo: require("./assets/images/b2beLogo.png"),
      date: "July 2020 – July 2021",
      desc: "Full-stack developer responsible for enterprise applications development, client support, and legacy system modernization initiatives.",
      descBullets: [
        "💼 Led development of new HRM system with related module of human resource management",
        "🏢 Maintained co8 Workspace management platform",
        "🔧 Maintained and enhanced legacy C# applications serving 20+ enterprise clients",
        "⚡ Improved application performance by 40% through database indexing and query optimization",
        "🎯 Resolved 95% of client support tickets within SLA timeframes",
        "🔄 Modernized legacy codebase by migrating critical components to Laravel framework",
        "📱 Developed responsive Vue.js interfaces compatible across desktop and mobile devices",
      ]
    },
    {
      role: "Software Engineering Intern",
      company: "B2BE GSS Sdn Bhd",
      companylogo: require("./assets/images/b2beLogo.png"),
      date: "February 2020 – July 2020",
      desc: "Software development intern focused on learning enterprise development practices and contributing to production systems.",
      descBullets: [
        "💻 Contributed to co8 Workspace system development using Laravel, Vue.js, and PostgreSQL",
        "📚 Mastered Git workflows, branching strategies, and collaborative development practices",
        "🧪 Participated in agile development cycles including sprint planning and daily standups",
        "🎨 Developed 15+ reusable Vue.js components for improved UI consistency",
        "🔍 Assisted in debugging complex issues and performed thorough system testing",
        "📖 Created technical documentation and API guides for internal development team",
        "🏆 Completed internship with exceptional performance rating and job offer",
        "🤝 Collaborated effectively with senior developers and learned industry best practices"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Current Projects",
  subtitle: "ENTERPRISE SYSTEMS DEVELOPMENT AT UNIVERSITI MALAYA",
  projects: [
    {
      image: require("./assets/images/umLogo.png"),
      projectName: "eHR System - Universiti Malaya",
      projectDesc: "**Tech:** Laravel, Livewire, Tailwind, PostgreSQL | **Status:** Production | **Impact:** Serving 5000+ UM staff daily | **Key Contributions:** • Led complete system architecture and development lifecycle • Built core modules: Leave, User Profiles, Organization Chart, SSPA, Sync Process, Promotion workflows • Established development standards and GitLab workflow processes • Ongoing development, maintenance and feature enhancements",
      footerLink: [
        {
          name: "🌐 Live System",
          url: "https://ehr.um.edu.my"
        }
      ]
    },
    {
      image: require("./assets/images/umLogo.png"),
      projectName: "eHR API Integration - Universiti Malaya",
      projectDesc: "**Tech:** Laravel API, PostgreSQL, RESTful Services | **Status:** Production | **Impact:** Seamless integration between 3+ enterprise systems | **Key Contributions:** • Built complete system base structure • Developed secure API endpoints for system integration • Built data synchronization pipelines between eHR, HRIS, and UMExpert • Created comprehensive API documentation and testing protocols • Ongoing monitoring and optimizing API performance for enterprise load",
      footerLink: [
        {
          name: "🔗 API Documentation",
          url: "https://ehrapi.um.edu.my"
        },
      ]
    },
    {
      image: require("./assets/images/umLogo.png"),
      projectName: "Career System - Universiti Malaya",
      projectDesc: "**Tech:** Laravel, Vue.js, Tailwind, PostgreSQL | **Status:** Production | **Impact:** Centralized platform serving both internal and external candidates | **Features:** JobStreet-style platform for UM job applications | **Key Contributions:** • Built complete system base structure  • Creating comprehensive job portal for external candidates and UM staff for job posting and application workflows • Integrating with eHR system for seamless staff transition processes",
      footerLink: [
        {
          name: "🌐 Live System",
          url: "https://career.um.edu.my"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements & Recognition 🏆 "),
  subtitle:
    "Academic excellence and professional recognition",

  achievementsCards: [
    {
      title: "🎓 Academic Excellence Foundation",
      subtitle:
        "Built strong academic foundation with Vice Chancellor's Awards for both Bachelor (CGPA 3.81) and Diploma (CGPA 3.78) degrees. Consistently achieved outstanding academic performance at UiTM, demonstrating dedication to learning and excellence that laid the groundwork for professional success.",
      image: require("./assets/images/uitmLogo.png"),
      imageAlt: "Academic Excellence",
      footerLink: []
    },
    {
      title: "🚀 B2BE Career Growth",
      subtitle: "Rapid professional development at B2BE GSS: Progressed from intern to full-time developer, then promoted to lead HRM project development. Successfully delivered enterprise workspace solutions and comprehensive HRM systems, gaining valuable experience in full-stack development and project leadership.",
      image: require("./assets/images/b2beLogo.png"),
      imageAlt: "B2BE Career Growth",
      footerLink: []
    },
    {
      title: "🏛️ UM Technical Leadership",
      subtitle: "Transitioned to Technical Lead role at Universiti Malaya. Leading the development of eHR, eHR API, and Career System projects while contributing to organizational digital transformation through active participation in DevOps and AI Task Forces.",
      image: require("./assets/images/umLogo.png"),
      imageAlt: "UM Technical Leadership",
      footerLink: []
    },
    {
      title: "🏅 Professional Recognition Awards",
      subtitle:
        "Recognized for exceptional professional performance at Universiti Malaya with consecutive awards: Sijil Perkhidmatan Cemerlang (2024) and Anugerah Perkhidmatan Cemerlang (2025).",
      image: require("./assets/images/umLogo.png"),
      imageAlt: "Professional Awards",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Technical Insights",
  subtitle:
    "Sharing knowledge about HR system development, Laravel best practices, and API integration patterns.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "#",
      title: "Building Scalable HR Systems with Laravel and Vue.js",
      description:
        "Best practices and architectural patterns for developing enterprise-level HR management systems using Laravel backend and Vue.js frontend."
    },
    {
      url: "#",
      title: "RESTful API Design for System Integration",
      description:
        "Guidelines and implementation strategies for creating robust APIs that connect multiple HR systems and platforms."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS & PRESENTATIONS",
  subtitle: emoji(
    "SHARING KNOWLEDGE ABOUT HR SYSTEM DEVELOPMENT AND BEST PRACTICES 🎯"
  ),

  talks: [
    {
      title: "Modern HR System Architecture",
      subtitle: "Internal Tech Talk at Universiti Malaya",
      slides_url: "#",
      event_url: "#"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "SHARING INSIGHTS ABOUT TECHNOLOGY AND SYSTEM DEVELOPMENT",

  // Please Provide with Your Podcast embeded Link
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

// Task Force Initiatives Section
const taskForceSection = {
  title: emoji("Task Force & Initiatives 🚀"),
  subtitle: "Contributing to organizational digital transformation and innovation",
  initiatives: [
    {
      title: "DevOps Task Force",
      organization: "Universiti Malaya",
      logo: require("./assets/images/umLogo.png"),
      role: "Active Member",
      duration: "Present",
      description: "Member of internal task force to design and standardize UM's system development framework. Contributed to CI/CD structure and Git workflow recommendations for multi-unit teams.",
      highlights: [
        "Designed standardized development workflows",
        "Contributed to CI/CD pipeline recommendations",
        "Established Git branching strategies for teams"
      ]
    },
    {
      title: "AI Tech Task Force",
      organization: "Universiti Malaya",
      logo: require("./assets/images/umLogo.png"),
      role: "Research Member",
      duration: "Present",
      description: "Involved in researching AI implementation and potential for development automation. Evaluated effectiveness of AI-assisted coding and system monitoring tools.",
      highlights: [
        "Research AI integration in system development",
        "Evaluate AI-assisted coding tools",
        "Explore automation opportunities"
      ]
    },
    {
      title: "Release Gatekeeper",
      organization: "Universiti Malaya - JTM",
      logo: require("./assets/images/umLogo.png"),
      role: "System Release Controller",
      duration: "Present",
      description: "Officially appointed as Release Gatekeeper for application systems by Jabatan Teknologi Maklumat (JTM). Responsible for ensuring quality control and systematic release process for university application systems.",
      highlights: [
        "Control and oversee system application releases",
        "Ensure quality standards and deployment procedures",
        "Coordinate release processes across development teams",
        "Maintain system stability and deployment integrity"
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Professional Summary Section
const professionalSummary = {
  title: emoji("Professional Summary 💼"),
  subtitle: "IT Officer with 4+ years in system development",
  summary: [
    "🎯 **Current Role**: Technical Lead for HR System development at Universiti Malaya",
    "⚡ **Technical Expertise**: Full-stack development with Laravel, PostgreSQL, and modern web technologies", 
    "🔗 **Integration Specialist**: Built APIs connecting multiple systems (eHR, HRIS, UMExpert, UMTouch)",
    "🛠️ **DevOps Leadership**: Release Gatekeeper ensuring quality deployments",
    "🤖 **Innovation Focus**: Active in AI Tech Task Force exploring automation in system development"
  ],
  display: true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Connect With Me 🔗"),
  subtitle:
    "Feel free to connect with me on GitHub and LinkedIn to explore my work and professional journey.",
  number: "",
  email_address: ""
};

// Twitter Section

const twitterDetails = {
  userName: "", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

// Languages Section
const languagesSection = {
  title: "Languages",
  subtitle: "Languages I can communicate in",
  languages: [
    {
      language: "Malay",
      proficiency: "Proficient"
    },
    {
      language: "English", 
      proficiency: "Advanced"
    }
  ],
  display: false
};

// Hobbies Section
const hobbiesSection = {
  title: "Hobbies & Interests",
  subtitle: "What I love to do in my free time",
  hobbies: [
    {
      hobby: "Netball",
      description: "Enjoys teamwork, leadership, and physical activity"
    },
    {
      hobby: "Volleyball",
      description: "Passionate about team sports and staying active"
    }
  ],
  display: false
};

// Goals and Vision Section
const aspirationsSection = {
  title: emoji("Professional Goals & Vision 🎯"),
  subtitle: "My commitment to continuous growth and contribution",
  aspirations: [
    {
      title: "🏗️ Sustainable System Development",
      description: "Continue developing scalable, secure and user-friendly HR systems that meet evolving organizational needs"
    },
    {
      title: "🤖 Automation & AI Integration", 
      description: "Lead initiatives in AI adoption for administrative process automation and system development enhancement"
    },
    {
      title: "👥 Mentoring & Knowledge Sharing",
      description: "Share experience and mentor new developers to ensure continuity of system quality and best practices"
    },
    {
      title: "🔗 System Integration Excellence",
      description: "Strengthen organizational system integration ecosystem for more efficient workflows and data management"
    }
  ],
  motto: "For me, system development is not just about writing code — it's about building solutions that provide value to users and organizations.",
  display: true
};

// References Section - Disabled for public portfolio
const referencesSection = {
  title: "Professional References",
  subtitle: "Available upon request",
  references: [],
  display: false
};const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection,
  languagesSection,
  hobbiesSection,
  aspirationsSection,
  referencesSection,
  taskForceSection,
  professionalSummary
};
