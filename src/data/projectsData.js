const projectsData = [
  {
    id: 1,
    title: "Sentiment & Intent Detection in Code-Mixed Text",
    badge: "NLP Research Flagship",
    category: "AI/ML",
    featured: true,
    summary:
      "Multi-task contextual NLP framework for Romanized Tamil-English social communication utilizing fine-tuned MuRIL.",
    problem:
      "Analyzing Romanized Tamil-English text suffers from informal phonetic spellings, severe class imbalance, and a scarcity of benchmark annotated corpora.",
    result:
      "Built a joint multi-task classification pipeline leveraging MuRIL embeddings, achieving [add accuracy / F1-score here] on benchmark test sets.",
    technologies: ["Python", "PyTorch", "MuRIL", "Transformers", "NLP", "Multi-Task Learning"],
    github: "https://github.com/JeyakumarRenujan",
    live: null,
  },
  {
    id: 2,
    title: "Smart Supermarket Product Identification",
    badge: "Computer Vision",
    category: "AI/ML",
    featured: true,
    summary:
      "Computer vision identification and automated inventory auditing system powered by a fine-tuned YOLO11s model.",
    problem:
      "Manual retail checkout and shelf audits are labor-intensive, error-prone, and introduce significant bottlenecks during peak traffic.",
    result:
      "Fine-tuned YOLO11s across 17 product categories with automated item counting, bounding box overlays, and report exports at [add mAP / inference FPS here].",
    technologies: ["Python", "YOLO11s", "OpenCV", "PyTorch", "Scikit-learn", "Streamlit"],
    github: "https://github.com/JeyakumarRenujan/smart-supermarket-product-identification.git",
    live: null,
  },
  {
    id: 3,
    title: "Me Plus (Me+) Freelancer Workspace",
    badge: "Full-Stack System",
    category: "Full-Stack",
    featured: true,
    summary:
      "Unified multi-client task management platform for freelancers to organize projects, milestones, time tracking, and invoices.",
    problem:
      "Independent contractors struggle to juggle multiple clients, divergent deadlines, hourly logs, and billable invoicing across disconnected apps.",
    result:
      "Engineered a responsive single-workspace platform with interactive metrics and role-isolated data management for [add client capacity here].",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/VeeQubit/Multi-Client-Task-Management-Platform-Designed-for-Freelancers.git",
    live: null,
  },
  {
    id: 4,
    title: "Intelligent Dam Safety System",
    badge: "IoT & Automation",
    category: "IoT/Embedded",
    featured: true,
    summary:
      "Embedded IoT reservoir hazard monitoring system with sensor-driven water level forecasting and automated spillway gate control.",
    problem:
      "Manual reservoir water level monitoring risks delayed warning dispatch and inaccurate spillway discharge during severe flash storms.",
    result:
      "Deployed automated sensing nodes with early warning triggers and algorithmic spillway gate adjustments operating with [add response latency here].",
    technologies: ["IoT", "Embedded C/C++", "Sensors", "Automation", "Hardware Interfacing"],
    github: "https://github.com/JeyakumarRenujan/Dam_Safety_System.git",
    live: null,
  },
  {
    id: 5,
    title: "Connectify Video Conferencing",
    badge: "WebRTC Real-Time",
    category: "Full-Stack",
    featured: false,
    summary:
      "Full-stack WebRTC audio/video calling application with room mesh streaming, screen sharing, and Socket.IO signaling.",
    problem:
      "Distributed groups need zero-install, lightweight web video conferencing without heavy third-party desktop clients.",
    result:
      "Implemented peer-to-peer WebRTC streaming with room routing and live chat supporting up to [add max concurrent users here].",
    technologies: ["WebRTC", "Socket.IO", "Node.js", "Express.js", "JavaScript"],
    github: "https://github.com/JeyakumarRenujan/Connectify.git",
    live: null,
  },
  {
    id: 6,
    title: "AuthFlow Authentication Platform",
    badge: "Security & IAM",
    category: "Full-Stack",
    featured: false,
    summary:
      "Hardened MERN authentication service with JWT token rotation, bcrypt password hashing, and role-based access control.",
    problem:
      "Modern web applications require secure, modular user authentication with granular administrative privileges to prevent credential exploits.",
    result:
      "Delivered reusable auth microservice with token protection, route guards, and admin management dashboards verified against [add test suite metrics here].",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "bcrypt"],
    github: "https://github.com/JeyakumarRenujan/authflow-authentication-platform.git",
    live: null,
  },
  {
    id: 7,
    title: "Hostel Management System",
    badge: "Web Application",
    category: "Full-Stack",
    featured: false,
    summary:
      "Role-based administrative web portal streamlining student boarding, room allocations, warden oversight, and complaint resolution.",
    problem:
      "Manual hostel record keeping results in duplicate room assignments, lost maintenance reports, and untracked fee reconciliations.",
    result:
      "Built a normalized MySQL relational schema and PHP management engine facilitating records for [add student/room capacity here].",
    technologies: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/JeyakumarRenujan/Hostel_Management.git",
    live: null,
  },
  {
    id: 8,
    title: "Smart Load - Phone Reload System",
    badge: "Desktop Application",
    category: "IoT/Embedded",
    featured: false,
    summary:
      "Desktop GUI mobile phone reload and transaction tracking system built with C++ in Visual Studio with input validation.",
    problem:
      "Countertop retail balance reload operations require rapid input handling and error prevention against incorrect account reloads.",
    result:
      "Created an OOP-based desktop utility with transactional validation and password recovery handling [add daily throughput here].",
    technologies: ["C++", "Visual Studio GUI", "OOP"],
    github: "https://github.com/JeyakumarRenujan/PHONE-RELOAD-SYSTEM-SMART-load-.git",
    live: null,
  },
];

export default projectsData;