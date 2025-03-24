/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 500 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: false // Set to false to use static SVG
};

const greeting = {
  username: "Kedar G",
  title: "Hi, I'm Kedar",
  subTitle: emoji(
    "AI Engineer specializing in Computer Vision, LLMs & Intelligent Agents | Building production-ready AI systems that bridge research and real-world applications"
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
  subTitle: "TURNING COMPLEX AI RESEARCH INTO PRODUCTION-READY SOLUTIONS",
  skills: [
    emoji(
      "⚡ Develop and optimize production-ready deep learning models for computer vision and natural language processing"
    ),
    emoji("⚡ Design and implement AI systems for edge devices and autonomous robotics platforms"),
    emoji(
      "⚡ Create robust RAG frameworks and LLM applications with enterprise-grade scalable pipelines"
    )
  ],

  // Define tabs for the skills section
  tabs: [
    { id: 'core', label: 'Overview', fontAwesomeClassname: "fas fa-microchip" },
    { id: 'cv', label: 'Computer Vision', fontAwesomeClassname: "fas fa-eye" },
    { id: 'nlp', label: 'NLP & LLMs', fontAwesomeClassname: "fas fa-comment-alt" },
    { id: 'edge', label: 'Edge AI', fontAwesomeClassname: "fas fa-bolt" },
    { id: 'ml', label: 'Core ML', fontAwesomeClassname: "fas fa-database" },
    { id: 'devops', label: 'DevOps', fontAwesomeClassname: "fas fa-server" }
  ],
  
  // Detailed skills organized by category
  skillsByCategory: {
    core: [
      {
        category: "Primary AI Expertise",
        skills: [
          "Deep Learning", 
          "Computer Vision",
          "Large Language Models",
          "Intelligent Agents",
          "Edge AI & Computing",
          "Retrieval-Augmented Generation"
        ]
      },
      {
        category: "Technical Frameworks & Libraries",
        skills: [
          "PyTorch", 
          "TensorFlow", 
          "LangChain", 
          "CrewAI",
          "OpenCV", 
          "ONNX"
        ]
      },
      {
        category: "Infrastructure & Deployment",
        skills: [
          "NVIDIA Jetson",
          "Docker", 
          "GCP", 
          "AWS",
          "CI/CD Pipelines",
          "API Development"
        ]
      },
      {
        category: "Implementation Specialties",
        skills: [
          "Model Optimization", 
          "Production Deployment",
          "Research to Production",
          "Data Drift Detection",
          "AI System Architecture"
        ]
      }
    ],
    cv: [
      {
        category: "CNN Architectures",
        skills: [
          "ResNet", 
          "EfficientNet", 
          "MobileNet", 
          "YOLO", 
          "VGG", 
          "Mask-RCNN", 
          "SqueezeNet"
        ]
      },
      {
        category: "Segmentation",
        skills: [
          "SAM 2", 
          "UNET-R", 
          "3D-segmentation", 
          "Instance Segmentation", 
          "Semantic Segmentation"
        ]
      },
      {
        category: "Neural Rendering",
        skills: [
          "NeRF", 
          "Lightning NeRF", 
          "Semantic-NeRF", 
          "Scene Reconstruction"
        ]
      },
      {
        category: "Vision Applications",
        skills: [
          "Object Detection", 
          "Face Recognition", 
          "ADAS Systems", 
          "Lane Detection", 
          "Depth Estimation", 
          "Traffic Sign Recognition"
        ]
      },
      {
        category: "Medical Imaging",
        skills: [
          "Tumor Detection", 
          "CT Scan Analysis", 
          "Pneumonia Detection", 
          "Medical Diagnostics"
        ]
      },
      {
        category: "Visualization",
        skills: [
          "t-SNE", 
          "UMAP", 
          "PCA", 
          "Embeddings Visualization", 
          "Feature Maps"
        ]
      }
    ],
    nlp: [
      {
        category: "Large Language Models",
        skills: [
          "OpenAI GPT", 
          "Claude", 
          "Gemini", 
          "Llama", 
          "Mistral", 
          "Gemma"
        ]
      },
      {
        category: "RAG Architecture",
        skills: [
          "Vector Databases", 
          "Semantic Search", 
          "Context Optimization", 
          "Response Generation", 
          "VectorDB"
        ]
      },
      {
        category: "LLM Frameworks",
        skills: [
          "LangChain", 
          "LangGraph", 
          "LlamaIndex", 
          "CrewAI", 
          "LangSmith", 
          "Ollama"
        ]
      },
      {
        category: "Content Generation",
        skills: [
          "Document Generation", 
          "Podcast Creation", 
          "Script Writing", 
          "Text Enhancement"
        ]
      },
      {
        category: "Audio Processing",
        skills: [
          "Text-to-Speech", 
          "Google Neural Voice", 
          "SSML", 
          "Audio Enhancement"
        ]
      },
      {
        category: "LLM Evaluation",
        skills: [
          "Context Precision", 
          "Answer Relevancy", 
          "Similarity Metrics", 
          "Faithfulness"
        ]
      }
    ],
    edge: [
      {
        category: "Embedded Systems",
        skills: [
          "NVIDIA Jetson", 
          "Ambarella CV22", 
          "Raspberry Pi", 
          "Microcontrollers"
        ]
      },
      {
        category: "Model Optimization",
        skills: [
          "Quantization", 
          "Pruning", 
          "Layer Fusion", 
          "Sparsity", 
          "Knowledge Distillation"
        ]
      },
      {
        category: "FPGA Integration",
        skills: [
          "FPGA Programming", 
          "Hardware Acceleration", 
          "Custom DL Frameworks"
        ]
      },
      {
        category: "Real-time Inference",
        skills: [
          "Batch Processing", 
          "Pipeline Optimization", 
          "Memory Management", 
          "Latency Reduction"
        ]
      },
      {
        category: "Edge Applications",
        skills: [
          "ADAS", 
          "Surveillance Systems", 
          "Automated Checkout", 
          "Smart Cameras"
        ]
      },
      {
        category: "Edge-Cloud Integration",
        skills: [
          "Federated Learning", 
          "Distributed Systems", 
          "Selective Data Transmission"
        ]
      }
    ],
    ml: [
      {
        category: "ML Frameworks",
        skills: [
          "PyTorch", 
          "TensorFlow", 
          "Scikit-learn", 
          "ONNX", 
          "TensorRT", 
          "OpenVino"
        ]
      },
      {
        category: "Neural Architectures",
        skills: [
          "Transformers", 
          "Autoencoders", 
          "VAEs", 
          "GANs", 
          "RNNs/LSTMs", 
          "Attention Mechanisms"
        ]
      },
      {
        category: "Training Techniques",
        skills: [
          "Transfer Learning", 
          "Fine-tuning", 
          "Distributed Training", 
          "Data Augmentation", 
          "Self-supervised Learning"
        ]
      },
      {
        category: "Model Evaluation",
        skills: [
          "Performance Metrics", 
          "Cross-validation", 
          "Confusion Matrix", 
          "ROC Curves", 
          "Precision-Recall"
        ]
      },
      {
        category: "Research Implementation",
        skills: [
          "Paper Reproduction", 
          "State-of-the-art Implementations", 
          "Research Adaptation", 
          "Performance Benchmarking"
        ]
      },
      {
        category: "AI Quality",
        skills: [
          "Drift Detection", 
          "Anomaly Detection", 
          "OOD Detection", 
          "Adversarial Testing"
        ]
      }
    ],
    devops: [
      {
        category: "Programming Languages",
        skills: [
          "Python", 
          "C++", 
          "C", 
          "SQL", 
          "JavaScript"
        ]
      },
      {
        category: "Cloud Platforms",
        skills: [
          "GCP", 
          "AWS", 
          "Cloud Run", 
          "Compute Engine", 
          "S3/GCS"
        ]
      },
      {
        category: "DevOps & MLOps",
        skills: [
          "Docker", 
          "CI/CD", 
          "GitHub", 
          "Apache Airflow", 
          "Kubernetes"
        ]
      },
      {
        category: "API Development",
        skills: [
          "RESTful APIs", 
          "FastAPI", 
          "Flask", 
          "API Gateway", 
          "Microservices"
        ]
      },
      {
        category: "Data Engineering",
        skills: [
          "ETL Pipelines", 
          "Data Extraction", 
          "Web Scraping", 
          "Database Management"
        ]
      },
      {
        category: "Monitoring & Logging",
        skills: [
          "Model Monitoring", 
          "Performance Tracking", 
          "Error Logging", 
          "Alerting Systems"
        ]
      }
    ]
  },

  // Keep existing softwareSkills for compatibility
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
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Arizona State University",
      logo: require("./assets/images/asucircle-logo.png"),
      subHeader: "MS Robotics and Autonomous Systems (Artificial Intelligence)",
      duration: "August 2023 - May 2025",
      desc: "Relevant Courses: Frontiers in Generative AI, Operational Deep Learning, Machine Learning Accelerator Design, Perception in Robotics, Robotic Systems, Statistical Machine Learning",
      descBullets: [
        "Research aide for CIS Department. (Oct 23 - Present)",
        "Research aide at Wu Lab. (Aug 24 - Dec 24)"
      ]
    },
    {
      schoolName: "University of Mumbai",
      logo: require("./assets/images/Mumbai-university-LOGO.jpg"),
      subHeader: "Bachelor of Engineering in Computer Engineering",
      duration: "August 2015 - May 2019",
      desc: "Relevant Courses: Machine Learning, Artificial Intelligence",
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
      role: "AI Software Engineer",
      company: "Stealth Startup",
      companylogo: require("./assets/images/stealthlogo.jpg"),
      date: "Feb 2025 – Present",
      desc: "Leading core AI application development, building LLM-enhanced web scraping pipelines, and implementing document processing services with GCP Cloud Run.",
      descBullets: [
        "As the first AI/ML developer, led the creation of core application functionalities.",
        "Developed a robust web scraping pipeline for data extraction, utilizing LLM APIs for metadata enhancement and automating database uploads. Deployed and orchestrated the scraper using Apache Airflow for continuous monitoring and scheduling.",
        "Designed and implemented AI-driven document enhancement endpoints, deploying them via GCP Cloud Run. Integrated with GitHub for streamlined CI/CD, ensuring rapid and reliable deployments.",
        "Created an audio podcast generator leveraging Gemini 1.5 Pro within a Retrieval-Augmented Generation framework. Integrated Google Text-to-Speech Neural and Studio voice models, employing Speech Synthesis Markup Language (SSML) for natural and expressive voice output."
      ]
    },
    {
      role: "Research Assistant",
      company: "exsight.ai, ASU",
      companylogo: require("./assets/images/teuvoent-logo.jpeg"),
      date: "Oct 2023 – Present",
      desc: "Conducting research on Explainable AI and adversarial robustness, integrating neuro-symbolic methods with object detection models.",
      descBullets: [
        "Integrated neuro-symbolic approaches with Object Detection models to create Explainable AI (XAI) solutions, enhancing interpretability and increased object detection recall by 30% in military geospatial imaging applications",
        "Secured an STTR Phase 1 Air Force/Space Force contract, gaining recognition as featured by W. P. Carey News.",
        "Engineered robust stress testing framework utilizing Meta SAM 2 for precise segmentation, enabling targeted adversarial patch and camouflage attacks that identified and addressed key vulnerabilities in mission-critical AI systems",
        "Optimized XAI models for Nvidia Jetson edge deployment through quantization, pruning, and layer fusion, maintaining accuracy while enabling real-time inference capabilities"
      ]
    },
    {
      role: "AI Researcher",
      company: "RagaAI",
      companylogo: require("./assets/images/ragaailogo.jpeg"),
      date: "Jun 2024 – Aug 2024",
      desc: "Developed observability tools for LLM applications and implemented evaluation metrics for LLM and RAG system performance measurement.",
      descBullets: [
        "Built an observability tool, RagaAI Catalyst to provide trace recording inside RAG applications with one-click deployable solution allowing fine-tuning and evaluation for LLM applications",
        "Collaborated on creation of Raga LLM Hub, employing metrics to evaluate LLMs, and established critical guardrails for LLMs and RAG applications, culminating in a robust open-source framework enriched with over 100 comprehensive tests",
        "Benchmarked and optimized custom RAG pipelines for prompt response quality across Llama, Gemma, and Mistral models, significantly reducing token costs while enabling engineering teams to identify the most cost-effective solutions for deployment."
      ]
    },
    {
      role: "Senior Data Scientist",
      company: "RagaAI",
      companylogo: require("./assets/images/ragaailogo.jpeg"),
      date: "Jan 2022 – Aug 2023",
      desc: "Led implementation of computer vision systems and anomaly detection frameworks, contributing to RagaAI's platform development.",
      descBullets: [
        "Led implementation of custom autoencoder network for drift tracking and outlier detection in ADAS, achieving 95% test accuracy which was featured at 2023 CES in Las Vegas",
        "Collaborated on creation of RagaAI Platform for computer vision drift detection using CNNs and anomaly detection, directly contributing to securing $4.7 million in seed funding",
        "Performed research for Out-of-Distribution (OOD) detection and AI stress testing in medical imaging, retail checkout, ADAS, and market research. This helped the company scale and reach out to 8 organizations.",
        "Designed and deployed an API pipeline with dashboard for interactive visualization and clustering of DNN embeddings using techniques like t-SNE, UMAP and PCA, enabling real-time analysis and interpretation of high-dimensional data.",
        "Implemented Maximum Mean Discrepancy (MMD) and Kolmogorov-Smirnov tests for drift detection in image datasets, reducing undetected data drift and enhancing model stability.",
        "Leveraged AE, VAE, Variational Auto-Encoding Gaussian Mixture Model (VAEGMM) algorithms to identify outliers in high-dimensional datasets, improving anomaly detection accuracy by 40%"
      ]
    },
    {
      role: "Deep Learning Engineer",
      company: "Biocliq Technologies",
      companylogo: require("./assets/images/biocliq.jpg"),
      date: "Oct 2021 – Jan 2022",
      desc: "Implemented advanced medical imaging solutions using deep learning techniques for healthcare applications.",
      descBullets: [
        "Implemented model for 3D-segmentation on Brain CT-Scans to detect cancerous tumors based on UNET-R architecture improving the DICE score over existing models by 10%.",
        "Extracted inferences and results of CT scan reports of pneumonia patients from PDF files using camelot to create a dataset for pneumonia categorization and detection during COVID."
      ]
    },
    {
      role: "Deep Learning Engineer",
      company: "Uncanny Vision",
      companylogo: require("./assets/images/Uncanny_Logo_Transp.png"),
      date: "Jun 2019 – Jul 2021",
      desc: "Optimized deep learning models for edge-AI applications, focusing on model compression and optimization for FPGA deployment.",
      descBullets: [
        "Improved verification environment for system-level and intra-module testing of a custom DL framework for an edge-AI FPGA device, resulting in better memory utilization and tenfold faster output generation",
        "Streamlined FPGA device performance by adapting seven major neural network architectures from eight DL frameworks to a custom framework, significantly reducing model sizes by 50% and enhancing operational speed.",
        "Conducted ongoing research in computer vision and consulted clients on further developing the custom DL framework.",
        "Streamlined and deployed an annotation tool that automated annotation processes, resulting in a 40% increase in throughput and equipping the annotation team with essential tool proficiency",
        "Engineered cutting-edge face mask recognition model with the industry-specific EfficientNet series, customized for lower resolution images to combat COVID challenges, achieving an exceptional 97% accuracy rate",
        "Trained boom barrier monitoring model with 95% accuracy for smooth operations in automated parking checkout."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set to true to show GitHub projects
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SIGNIFICANT AI AND ROBOTICS PROJECTS I'VE DEVELOPED",
  projects: [
    // {
    //   image: require("./assets/images/facebookLogo.png"),
    //   projectName: "Job Application Enhancement Tool",
    //   projectDesc: "AI-powered tool to refine resumes and cover letters by analyzing job descriptions and extracting key qualifications using multiple LLM APIs.",
    //   footerLink: [
    //     {
    //       name: "GitHub Repository",
    //       url: "https://github.com/kedardg/job-applications"
    //     }
    //   ]
    // },
    // {
    //   image: require("./assets/images/facebookLogo.png"),
    //   projectName: "Lightning NeRF Extension",
    //   projectDesc: "Enhanced the state-of-the-art Lightning NeRF framework for autonomous driving by incorporating semantic information, improving PSNR by 10%.",
    //   footerLink: [
    //     {
    //       name: "Project Details",
    //       url: "#"
    //     }
    //   ]
    // },
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
  display: false // Set false to hide this section
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆"),
  subtitle: "Professional credentials and completed courses",

  achievementsCards: [
    {
      title: "Improving Deep Neural Networks: Hyperparameter tuning, Regularization and Optimization",
      subtitle: "DeepLearning.AI",
      footerLink: [
        {
          name: "Verify Credential",
          url: "https://www.coursera.org/account/accomplishments/verify/XRYUTMTLEB2U" // You can update this later
        }
      ]
    },
    {
      title: "Robotics: Perception",
      subtitle: "University of Pennsylvania/ Coursera",
      footerLink: [
        {
          name: "Verify Credential",
          url: "https://www.coursera.org/account/accomplishments/verify/JYSVGKCJC4A6"
        }
      ]
    },
    {
      title: "Deep Learning Specialization",
      subtitle: "Coursera / DeepLearning.AI",
      footerLink: [
        {
          name: "Verify Credential",
          url: "https://www.coursera.org/account/accomplishments/specialization/JY8W74JHJ9SZ"
        }
      ]
    },
    {
      title: "Solving Ordinary Differential Equations with MATLAB",
      subtitle: "MathWorks",
      footerLink: [
        {
          name: "Verify Credential",
          url: "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=9e455c69-6cf8-4f06-8144-6adb5851a7fd&" // You can update this later
        }
      ]
    },
    {
      title: "MATLAB for Data Processing and Visualization",
      subtitle: "MathWorks",
      footerLink: [
        {
          name: "Verify Credential",
          url: "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=c7c31063-9678-4c43-b549-f3185eded954&" // You can update this later
        }
      ]
    },
    {
      title: "RCR - Graduate Student and Postdoctoral Researcher Responsible Conduct of Research",
      subtitle: "CITI Program",
      footerLink: [
        {
          name: "Verify Credential",
          url: "https://www.citiprogram.org/verify/?w686fb689-efbe-4068-9356-3d850ad43bfe-59965958" // You can update this later
        }
      ]
    },
    {
      title: "Learning XAI: Explainable Artificial Intelligence",
      subtitle: "LinkedIn",
      footerLink: [
        {
          name: "Verify Credential",
          url: "https://www.linkedin.com/learning/certificates/ba1db927414895cd6f2aecf362f390d06918956ed450b66f0b7d9c1094183758" // You can update this later
        }
      ]
    },
    {
      title: "Computer Vision - Object Detection with OpenCV and Python",
      subtitle: "Coursera",
      footerLink: [
        {
          name: "Verify Credential",
          url: "https://www.coursera.org/account/accomplishments/verify/XUJ4CL9WZE7Y" // You can update this later
        }
      ]
    },
    {
      title: "HPC Shiksha : Basics of High Performance Computing",
      subtitle: "National Supercomputing Mission (NSM) - India",
      footerLink: [
        {
          name: "Verify Credential",
          url: "https://www.iitgoa.ac.in/hpcshiksha/result.php" // You can update this later
        }
      ]
    },

    // {
    //   title: "TensorFlow Developer Certification",
    //   subtitle: "Google",
    //   footerLink: [
    //     {
    //       name: "Verify Credential",
    //       url: "TENSORFLOW_CREDENTIAL_URL"
    //     }
    //   ]
    // }
  ],
  display: true
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
  title: emoji("Let's Build Something Together ☎️"),
  subtitle:
    "Interested in bringing cutting-edge AI to your project? Let's discuss how my expertise can help.",
  email_address: "",
  ctaButton: "Start a Conversation" // Add this if your template supports it
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
