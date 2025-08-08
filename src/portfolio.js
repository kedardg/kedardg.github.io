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
    "Senior Machine Learning Engineer | Computer Vision & LLM Expert | Building production-ready AI systems with PyTorch, TensorFlow & LangChain | 5+ years scaling ML solutions"
  ),
  resumeLink: "/resume.pdf",
  resumeDownload: true,
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/kedardg",
  linkedin: "https://www.linkedin.com/in/kedardg/",
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
  title: "Machine Learning Engineering Expertise",
  subTitle: "BUILDING SCALABLE AI SYSTEMS: COMPUTER VISION | LLM ENGINEERING | EDGE AI DEPLOYMENT",
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
        category: "Core AI Expertise",
        skills: [
          "Computer Vision", 
          "Natural Language Processing",
          "Object Detection",
          "AI Agents",
          "★ LLMOps"
        ]
      },
      {
        category: "Deep Learning & Neural Networks",
        skills: [
          "CNNs (ResNet, EfficientNet, YOLO, Mask-RCNN)", 
          "Transformers", 
          "Large Language Models", 
          "★ Retrieval-Augmented Generation (RAG)",
          "Model Optimization (Quantization & Pruning)"
        ]
      },
      {
        category: "Production AI Systems",
        skills: [
          "PyTorch",
          "TensorFlow", 
          "Edge Deployment", 
          "Model Monitoring",
          "Performance Optimization"
        ]
      }
    ],
    cv: [
      {
        category: "Object Detection & Recognition",
        skills: [
          "YOLO (v5, v8, v11)", 
          "Mask-RCNN", 
          "RetinaNet", 
          "SSD", 
          "Real-time Detection"
        ]
      },
      {
        category: "CNN Architectures",
        skills: [
          "ResNet", 
          "EfficientNet", 
          "MobileNet", 
          "Vision Transformers",
          "ConvNeXT"
        ]
      },
      {
        category: "Image Segmentation",
        skills: [
          "SAM 2 (Segment Anything)", 
          "UNET-R", 
          "Semantic Segmentation", 
          "Instance Segmentation",
          "Panoptic Segmentation"
        ]
      },
      {
        category: "CV Applications",
        skills: [
          "ADAS & Autonomous Vehicles", 
          "Medical Imaging & Diagnostics", 
          "Surveillance Systems", 
          "Automated Checkout",
          "Neural Rendering (NeRF)"
        ]
      }
    ],
    nlp: [
      {
        category: "Large Language Models",
        skills: [
          "GPT (OpenAI)", 
          "Claude (Anthropic)", 
          "Gemini (Google)", 
          "Llama (Meta)", 
          "Mistral AI"
        ]
      },
      {
        category: "★ Retrieval-Augmented Generation (RAG)",
        skills: [
          "Vector Databases (Pinecone & Chroma)", 
          "Semantic Search", 
          "Context Optimization", 
          "Document Processing", 
          "Multi-modal RAG"
        ]
      },
      {
        category: "AI Agents & Frameworks",
        skills: [
          "LangChain & LangGraph", 
          "CrewAI (Multi-agent)", 
          "LlamaIndex", 
          "AutoGPT & Agent Workflows", 
          "Tool Integration & Function Calling"
        ]
      },
      {
        category: "Natural Language Processing",
        skills: [
          "Text Classification & Sentiment Analysis", 
          "Named Entity Recognition (NER)", 
          "Question Answering Systems", 
          "Text-to-Speech (TTS) & SSML", 
          "Document Understanding"
        ]
      }
    ],
    edge: [
      {
        category: "★ LLMOps & Model Operations",
        skills: [
          "Model Training & Fine-tuning", 
          "Model Versioning & Registry", 
          "A/B Testing for LLMs", 
          "Performance Monitoring", 
          "Cost Optimization"
        ]
      },
      {
        category: "LLM Evaluation & Quality",
        skills: [
          "Guardrails & Safety Measures", 
          "Faithfulness & Relevancy Metrics", 
          "Hallucination Detection", 
          "Bias Testing", 
          "Response Quality Assessment"
        ]
      },
      {
        category: "Edge AI & Optimization",
        skills: [
          "Model Quantization & Pruning", 
          "NVIDIA Jetson Deployment", 
          "TensorRT & ONNX Optimization", 
          "Real-time Inference", 
          "Hardware Acceleration"
        ]
      }
    ],
    ml: [
      {
        category: "AI Frameworks & Libraries",
        skills: [
          "PyTorch & TorchVision", 
          "TensorFlow & Keras", 
          "OpenCV & Image Processing", 
          "Scikit-learn", 
          "Hugging Face Transformers"
        ]
      },
      {
        category: "Model Development & Training",
        skills: [
          "Transfer Learning & Fine-tuning", 
          "Data Augmentation Techniques", 
          "Distributed Training", 
          "Hyperparameter Optimization", 
          "Cross-validation & Evaluation"
        ]
      },
      {
        category: "AI Quality & Testing",
        skills: [
          "Data Drift Detection", 
          "Out-of-Distribution Detection", 
          "Adversarial Robustness Testing", 
          "★ Model Interpretability (XAI)", 
          "Performance Benchmarking"
        ]
      }
    ],
    devops: [
      {
        category: "Programming & Development",
        skills: [
          "Python (Primary)", 
          "C/C++ (Performance Critical)", 
          "SQL & Database Management", 
          "RESTful API Development", 
          "Git & Version Control"
        ]
      },
      {
        category: "Cloud & Infrastructure",
        skills: [
          "Google Cloud Platform (GCP)", 
          "Amazon Web Services (AWS)", 
          "Docker Containerization", 
          "Kubernetes Orchestration", 
          "CI/CD Pipelines"
        ]
      },
      {
        category: "Data Engineering & MLOps",
        skills: [
          "Apache Airflow (Workflow Orchestration)", 
          "ETL Pipeline Development", 
          "Model Deployment & Monitoring", 
          "Web Scraping & Data Extraction", 
          "FastAPI & Flask Microservices"
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
      role: "Research Assistant",
      company: "ExSight.ai",
      companylogo: require("./assets/images/teuvoent-logo.jpeg"),
      date: "Oct 2023 – Present",
      desc: "Conducting cutting-edge research in Explainable AI (XAI) and adversarial robustness for defense applications, pioneering neuro-symbolic integration with computer vision models to enhance interpretability and reliability in mission-critical systems while achieving significant performance improvements and securing substantial government funding.",
      descBullets: [
        "Achieved 80% reduction in deep learning model size through advanced pruning, quantization, and architectural optimization techniques, enabling efficient edge deployment while maintaining accuracy standards and reducing infrastructure costs by 30% for resource-constrained military applications.",
        "Integrated neuro-symbolic approaches with Object Detection models to create groundbreaking Explainable AI (XAI) solutions, enhancing model interpretability and transparency while increasing object detection recall by 30% in complex military geospatial imaging scenarios with improved decision-making capabilities.",
        "Successfully secured STTR Phase 1 Air Force/Space Force contract through technical excellence and being featured by W. P. Carey News for breakthrough contributions to defense AI applications and trustworthy artificial intelligence systems.",
        "Engineered comprehensive stress testing framework utilizing state-of-the-art Meta SAM 2 (Segment Anything Model) for precise image segmentation, enabling sophisticated targeted adversarial patch and camouflage attack simulations that systematically identified and addressed critical vulnerabilities in mission-critical AI defense systems.",
        "Optimized Explainable AI models for deployment on NVIDIA Jetson edge computing platforms through advanced quantization, structured pruning, and layer fusion techniques, maintaining high accuracy performance while enabling real-time inference capabilities for autonomous and embedded military applications.",
        "Improved anomaly detection accuracy by 40% through implementation of advanced machine learning algorithms and custom loss functions, enhancing system reliability and reducing false positive rates in critical defense monitoring applications."
      ]
    },
    {
      role: "AI Engineer",
      company: "Stealth Startup",
      companylogo: require("./assets/images/stealthlogo.jpg"),
      date: "Feb 2025 – May 2025",
      desc: "Leading core AI application development as the first AI/ML developer, architecting scalable machine learning pipelines and implementing production-ready AI services with focus on LLM integration, automated data processing, and cloud deployment optimization.",
      descBullets: [
        "Spearheaded the development of core AI application functionalities from ground up, establishing foundational architecture for scalable machine learning systems and setting technical standards for future AI implementations.",
        "Engineered robust web scraping pipeline for comprehensive data extraction, leveraging LLM APIs for intelligent metadata enhancement and semantic data processing, with automated database upload workflows orchestrated through Apache Airflow for continuous monitoring, scheduling, and error handling.",
        "Architected and deployed AI-driven document enhancement endpoints using advanced natural language processing techniques, implementing scalable microservices architecture on GCP Cloud Run with seamless GitHub integration for automated CI/CD pipelines ensuring rapid, reliable, and zero-downtime deployments.",
        "Developed sophisticated audio podcast generation system utilizing Gemini 1.5 Pro within an advanced Retrieval-Augmented Generation (RAG) framework, integrating Google Text-to-Speech Neural and Studio voice models with precise Speech Synthesis Markup Language (SSML) optimization for natural, expressive, and human-like voice synthesis output.",
        "Implemented comprehensive monitoring and logging systems for all AI services, ensuring high availability, performance optimization, and proactive issue detection across the entire machine learning infrastructure stack."
      ]
    },
    {
      role: "AI Researcher",
      company: "RagaAI",
      companylogo: require("./assets/images/ragaailogo.jpeg"),
      date: "Jun 2024 – Aug 2024",
      desc: "Led development of advanced observability and evaluation frameworks for Large Language Model (LLM) applications, focusing on production-ready monitoring solutions, comprehensive performance metrics, and cost optimization strategies for enterprise-scale Retrieval-Augmented Generation (RAG) systems with multi-model benchmarking and evaluation.",
      descBullets: [
        "Architected and built RagaAI Catalyst, a comprehensive observability platform providing detailed trace recording and monitoring capabilities inside RAG applications, featuring one-click deployable solutions that enable seamless fine-tuning, performance evaluation, and debugging for production LLM applications with real-time insights.",
        "Collaborated extensively on the creation and development of Raga LLM Hub, implementing sophisticated evaluation metrics and performance benchmarks for Large Language Models, while establishing critical safety guardrails and quality controls for LLMs and RAG applications, culminating in a robust open-source framework enriched with over 100 comprehensive tests covering reliability, safety, and performance aspects.",
        "Conducted extensive benchmarking and optimization of custom RAG pipelines, evaluating prompt response quality and performance across multiple state-of-the-art models including Llama, Gemma, and Mistral architectures, achieving significant reductions in token costs and computational overhead while enabling engineering teams to systematically identify and deploy the most cost-effective and performant solutions for their specific use cases.",
        "Developed advanced evaluation methodologies for measuring LLM hallucination rates, response relevancy, and factual accuracy, implementing automated testing frameworks that ensure reliable performance across diverse domain-specific applications and use cases."
      ]
    },
    {
      role: "Senior Data Scientist",
      company: "RagaAI",
      companylogo: require("./assets/images/ragaailogo.jpeg"),
      date: "Jan 2022 – Aug 2023",
      desc: "Spearheaded the development of advanced computer vision systems and comprehensive anomaly detection frameworks, playing a pivotal role in RagaAI's core platform architecture and contributing directly to major funding milestones while establishing the company's technical foundation for enterprise-scale AI monitoring and validation solutions.",
      descBullets: [
        "Led the design and implementation of sophisticated custom autoencoder networks for comprehensive drift tracking and outlier detection in Advanced Driver Assistance Systems (ADAS), achieving exceptional 95% test accuracy on complex automotive datasets, resulting in the solution being prominently featured and demonstrated at the prestigious 2023 Consumer Electronics Show (CES) in Las Vegas.",
        "Collaborated extensively on the creation and development of the flagship RagaAI Platform for advanced computer vision drift detection utilizing state-of-the-art Convolutional Neural Networks (CNNs) and comprehensive anomaly detection algorithms, with direct technical contributions that were instrumental in securing $4.7 million in seed funding through demonstrated platform capabilities and market validation.",
        "Conducted extensive research and development for Out-of-Distribution (OOD) detection methodologies and comprehensive AI stress testing frameworks across diverse high-impact domains including medical imaging diagnostics, automated retail checkout systems, ADAS applications, and market research analytics, enabling the company to successfully scale operations and establish partnerships with 8 major organizations across multiple industries.",
        "Architected and deployed a comprehensive API pipeline integrated with interactive dashboard solutions for real-time visualization and advanced clustering of Deep Neural Network (DNN) embeddings, utilizing sophisticated dimensionality reduction techniques including t-SNE, UMAP, and Principal Component Analysis (PCA), enabling stakeholders to perform real-time analysis, interpretation, and decision-making based on high-dimensional data patterns.",
        "Implemented advanced statistical methods including Maximum Mean Discrepancy (MMD) and Kolmogorov-Smirnov tests for robust drift detection in large-scale image datasets, significantly reducing instances of undetected data drift while enhancing overall model stability and reliability in production environments across multiple client deployments.",
        "Leveraged cutting-edge generative modeling approaches including Autoencoders (AE), Variational Autoencoders (VAE), and Variational Auto-Encoding Gaussian Mixture Model (VAEGMM) algorithms to systematically identify outliers and anomalies in complex high-dimensional datasets, achieving substantial 40% improvement in anomaly detection accuracy compared to baseline methods and traditional approaches."
      ]
    },
    {
      role: "Deep Learning Engineer",
      company: "Biocliq Technologies",
      companylogo: require("./assets/images/stealthlogo.jpg"),
      date: "Oct 2021 – Jan 2022",
      desc: "Developed and implemented advanced medical imaging solutions utilizing cutting-edge deep learning architectures for critical healthcare applications, focusing on automated tumor detection, medical report processing, and COVID-19 related diagnostic support systems with emphasis on accuracy, reliability, and clinical deployment readiness.",
      descBullets: [
        "Successfully implemented and optimized advanced deep learning model for precise 3D segmentation on Brain CT-Scan images to detect and localize cancerous tumors, utilizing the sophisticated UNET-R (U-Net with ResNet backbone) architecture and achieving significant 10% improvement in DICE score compared to existing state-of-the-art models, enhancing diagnostic accuracy for critical medical applications.",
        "Developed comprehensive data extraction and processing pipeline for automated analysis of CT scan reports from pneumonia patients, utilizing Camelot library for robust PDF parsing and information extraction, systematically creating structured datasets for pneumonia categorization, severity assessment, and automated detection algorithms during the critical COVID-19 pandemic period, supporting healthcare decision-making processes.",
        "Collaborated with medical professionals and radiologists to ensure clinical accuracy and regulatory compliance of AI models, implementing rigorous validation protocols and performance metrics suitable for healthcare applications while maintaining patient data privacy and security standards.",
        "Optimized model inference performance for potential clinical deployment, implementing efficient preprocessing pipelines and memory optimization techniques to enable real-time processing of medical imaging data in resource-constrained healthcare environments."
      ]
    },
    {
      role: "Deep Learning Engineer",
      company: "Uncanny Vision",
      companylogo: require("./assets/images/Uncanny_Logo_Transp.png"),
      date: "Jun 2019 – Jul 2021",
      desc: "Specialized in advanced deep learning model optimization for edge-AI applications, focusing on comprehensive model compression, FPGA deployment optimization, and development of custom deep learning frameworks while delivering production-ready computer vision solutions for diverse real-world applications including COVID-19 response systems and automated parking solutions.",
      descBullets: [
        "Significantly improved and enhanced the verification environment for comprehensive system-level and intra-module testing of a proprietary custom deep learning framework specifically designed for edge-AI FPGA devices, implementing advanced testing methodologies that resulted in substantially better memory utilization efficiency and achieved remarkable tenfold faster output generation compared to previous implementations.",
        "Successfully streamlined FPGA device performance through systematic adaptation and optimization of seven major neural network architectures from eight different deep learning frameworks (including TensorFlow, PyTorch, Caffe, and others) to a unified custom framework, achieving significant 50% reduction in model sizes while simultaneously enhancing operational speed and maintaining accuracy standards for edge deployment scenarios.",
        "Conducted extensive ongoing research in computer vision applications and provided expert consultation services to clients on further development, optimization, and enhancement of the custom deep learning framework, contributing to the company's intellectual property portfolio and competitive advantages in the edge-AI market.",
        "Architected, streamlined, and successfully deployed an innovative automated annotation tool that revolutionized annotation processes and workflows, resulting in substantial 40% increase in annotation throughput and operational efficiency while providing comprehensive training to equip the annotation team with essential tool proficiency and advanced annotation capabilities.",
        "Engineered and developed cutting-edge face mask recognition and detection model utilizing the industry-leading EfficientNet neural network series, specifically customized and optimized for processing lower resolution images to effectively combat COVID-19 challenges and public health requirements, achieving exceptional 97% accuracy rate in real-world deployment scenarios.",
        "Designed, trained, and deployed sophisticated boom barrier monitoring and control model achieving outstanding 95% accuracy for seamless and smooth operations in automated parking checkout systems, enabling efficient traffic flow management and reducing manual intervention requirements in commercial parking facilities.",
        "Implemented comprehensive model quantization and pruning techniques that reduced model inference time by 60% while maintaining accuracy thresholds, enabling real-time processing capabilities on resource-constrained edge devices and embedded systems."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set to true to show GitHub projects
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SIGNIFICANT AI AND ROBOTICS PROJECTS I'VE DEVELOPED",
  display: false,
  projects: [
    {
      image: require("./assets/images/stealthlogo.jpg"),
      projectName: "Job Application Enhancement Tool",
      projectDesc: "Intelligent AI-powered system that analyzes job descriptions and automatically refines resumes and cover letters by extracting key qualifications and requirements, utilizing multiple Large Language Model APIs for content optimization and personalization, significantly improving application response rates and interview callbacks.",
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/kedardg/job-applications"
        }
      ]
    },
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
  display: true // Set false to hide this section
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆"),
  subtitle: "Professional credentials and completed courses",

  achievementsCards: [
    {
      title: "DSPy: Build and Optimize Agentic Apps",
      subtitle: "DeepLearning.AI",
      footerLink: [
        {
          name: "Verify Credential",
          url: "https://learn.deeplearning.ai/accomplishments/956e185d-dee0-423d-b366-1e15aa8ce569?usp=sharing" // You can update this later
        }
      ]
    },
    {
      title: "Improving Accuracy of LLM Applications",
      subtitle: "DeepLearning.AI",
      footerLink: [
        {
          name: "Verify Credential",
          url: "https://learn.deeplearning.ai/accomplishments/d386892a-050d-4098-a55c-26141d739405?usp=sharing" // You can update this later
        }
      ]
    },
    {
      title: "Knowledge Graphs for RAG",
      subtitle: "DeepLearning.AI",
      footerLink: [
        {
          name: "Verify Credential",
          url: "https://learn.deeplearning.ai/accomplishments/b03620ff-f32f-44ea-aef2-f88d10cd8ddf?usp=sharing" // You can update this later
        }
      ]
    },
    {
      title: "LangChain Chat with Your Data",
      subtitle: "DeepLearning.AI",
      footerLink: [
        {
          name: "Verify Credential",
          url: "https://learn.deeplearning.ai/accomplishments/a004452a-b7a6-46d0-b1c4-110dddb1245f?usp=sharing" // You can update this later
        }
      ]
    },
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
  title: emoji("Let's Build Something Together 🚀"),
  subtitle: "",
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
