/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: false // Set to false to use static SVG
};

const greeting = {
  username: "Kedar G",
  title: "Hi, I'm Kedar Gaikwad",
  subTitle: emoji(
    "AI and Robotics Developer 🤖 | Experience in AI, Computer Vision, Language Models, Robotics and Edge AI."
  ),
  resumeLink: "/resume.pdf",
  resumeDownload: true,
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/kedardg",
  linkedin: "https://www.linkedin.com/in/kedardgaikwad/",
  gmail: "kedar.gaikwad@asu.edu",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "AI AND ROBOTICS SPECIALIST WITH EXPERTISE IN DEEP LEARNING AND EDGE AI",
  skills: [
    emoji(
      "⚡ Develop and optimize deep learning models for computer vision and natural language processing"
    ),
    emoji("⚡ Design and implement AI systems for edge devices and autonomous systems"),
    emoji(
      "⚡ Create robust RAG frameworks and LLM applications with production-ready pipelines"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Tensorflow",
      fontAwesomeClassname: "fas fa-brain"
    },
    { 
      skillName: "Pytorch", 
      fontAwesomeClassname: "fas fa-fire" 
    },
    { 
      skillName: "OpenCV", 
      fontAwesomeClassname: "fas fa-camera" 
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "GCP",
      fontAwesomeClassname: "fas fa-cloud"
    },
    {
      skillName: "LangChain",
      fontAwesomeClassname: "fas fa-link"
    },
    {
      skillName: "LLMs",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Arizona State University",
      logo: require("./assets/images/facebookLogo.png"),
      subHeader: "MS Robotics and Autonomous Systems (Artificial Intelligence)",
      duration: "August 2023 - May 2025",
      desc: "Courses: Frontiers in GenAI, Operational Deep Learning, ML accelerator design",
      descBullets: [
        "Research aide for CIS Department. (Oct 23 - Present)",
        "Research aide at Wu Lab. (Aug 24 - Dec 24)"
      ]
    },
    {
      schoolName: "University of Mumbai",
      logo: require("./assets/images/facebookLogo.png"),
      subHeader: "Bachelor of Engineering in Computer Engineering",
      duration: "August 2015 - May 2019",
      desc: "Courses: Machine Learning, Artificial Intelligence",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "AI/ML Software Engineering Intern",
      company: "Stealth Startup",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "Feb 2025 – Present",
      desc: "Leading core AI application development, building LLM-enhanced web scraping pipelines, and implementing document processing services with GCP Cloud Run.",
    },
    {
      role: "Research Assistant",
      company: "exsight.ai, ASU",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "Oct 2023 – Present",
      desc: "Conducting research on Explainable AI and adversarial robustness, integrating neuro-symbolic methods with object detection models.",
    },
    {
      role: "AI Research Intern",
      company: "RagaAI",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jun 2024 – Aug 2024",
      desc: "Developed observability tools for LLM applications and implemented evaluation metrics for LLM and RAG system performance measurement.",
    },
    {
      role: "Senior Data Scientist",
      company: "RagaAI",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2022 – Aug 2023",
      desc: "Led implementation of computer vision systems and anomaly detection frameworks, contributing to RagaAI's platform development.",
    },
    {
      role: "Deep Learning Engineer",
      company: "Uncanny Vision",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jun 2019 – Jul 2021",
      desc: "Optimized deep learning models for edge-AI applications, focusing on model compression and optimization for FPGA deployment.",
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
  title: "Projects",
  subtitle: "SIGNIFICANT AI AND ROBOTICS PROJECTS I'VE DEVELOPED",
  projects: [
    {
      image: require("./assets/images/facebookLogo.png"),
      projectName: "Job Application Enhancement Tool",
      projectDesc: "AI-powered tool to refine resumes and cover letters by analyzing job descriptions and extracting key qualifications using multiple LLM APIs.",
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/kedardg/job-applications"
        }
      ]
    },
    {
      image: require("./assets/images/facebookLogo.png"),
      projectName: "Lightning NeRF Extension",
      projectDesc: "Enhanced the state-of-the-art Lightning NeRF framework for autonomous driving by incorporating semantic information, improving PSNR by 10%.",
      footerLink: [
        {
          name: "Project Details",
          url: "#"
        }
      ]
    },
    // {
    //   image: require("./assets/images/stressTesting.png"),
    //   projectName: "AI Stress Testing Framework",
    //   projectDesc: "Developed a framework for computer vision stress testing, employing synthetic data from advanced generative models to simulate complex edge cases.",
    //   footerLink: [
    //     {
    //       name: "Learn More",
    //       url: "#"
    //     }
      //   ]
      // }
  ],
  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  // number: "+92-0000000000",
  email_address: "kedar.gaikwad@asu.edu"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  resumeSection
};
