const projects = [
  {
    id :1,
    title: "Distributed Stock Bazaar — Scalable, Fault-Tolerant Trading System",
    link : "https://github.com/umass-cs677-current",
    description: [
      "Designed a distributed stock trading platform simulating real-world exchange systems requiring scalability, high availability, and resilience under failure conditions.",
      "Built microservices evolving from sockets to gRPC with Lookup, Trade, and Update APIs; applied concurrency control, LRU caching, and leader–follower replication with crash recovery.",
      "Containerized services using Docker/Docker Compose and deployed on AWS.",
      "Integrated CI/CD pipelines via GitHub Actions for automated testing and deployment.",
      "Benchmarked system performance with concurrent clients, achieving reduced latency, improved cache hit rates, and seamless recovery during replica failures."
    ],
    tech: ["Java", "Python", "gRPC", "REST", "Sockets", "Multithreading", "Docker", "AWS", "Caching", "Replication", "Git"]
  },
  {
    id : 2,
    title: "Discord Network Analysis",
    link : "https://github.com/nmj7/Discord-Network-Analysis",
    description: [
      "Engineered a Discord bot to automate tracking and logging of user interactions for real-time behavioral insights and community management.",
      "Developed using discord.py, NetworkX for graph analysis, and Matplotlib for data visualization.",
      "Deployed on Replit for real-time operation and API compatibility, streamlining user behavior tracking and relationship visualization."
    ],
    tech: ["Python", "NetworkX", "Matplotlib", "Discord", "discord.py", "Replit"]
  },
  {
    id : 3,
    title: "Demonstration & Analysis of MAC & VLAN Hopping",
    description: [
      "Implemented a Python script to simulate MAC and VLAN hopping attacks using the Double Tagging method in a controlled lab setup.",
      "Created a detection mechanism to monitor traffic via Scapy for attack indicators, adding real-time logging and alerting functionalities."
    ],
    link : "https://github.com/nmj7/MAC-VLAN-Hopping",
    tech: ["Kali Linux", "Scapy", "Wireshark", "Packet Tracer", "Python"]
  },
  {
    id : 4,
    title: "aiCore — A Community for AI/ML Enthusiasts",
    link : "https://github.com/nmj7/aiCore",
    description: [
      "Developed and launched aiCore, a web platform for publishing and accessing AI/ML articles and research updates.",
      "Used React.js for frontend and Node.js with MongoDB for backend data management, enabling dynamic content and user interaction.",
      "Adopted Agile methodologies to iteratively improve features based on user feedback."
    ],
    tech: ["React", "Node.js", "MongoDB", "Express", "JavaScript"]
  },
  {
    id : 5,
    title: "Tic Translation using Attention",
    link : "https://github.com/nmj7/Visual-Tic-Detection",
    description: [
      "Built an application in Unity integrating speech and video recognition to assist individuals with Tourette syndrome.",
      "Utilized the EleutherAI Pythia model and NeelNanda/pile-10k dataset for language processing.",
      "Implemented OpenCV and Flask for preprocessing and back-end serving, and designed the NeuronTextSimplifier class to enhance model interpretability."
    ],
    tech: ["OpenCV", "Flask", "PyTorch", "Unity", "C++"]
  },
  {
    id : 6,
    title: "Sequential Siamese GANs (SeSiGAN) — Medical Image Resolution Enhancement",
    description: [
      "Developed a Sequential Siamese GAN architecture to improve medical image resolution for enhanced diagnostic precision.",
      "Integrated ESRGAN and DCGAN modules to capture fine-grained details, with open-source code made available for collaboration."
    ],
    tech: ["Python", "OpenCV", "TensorFlow", "GANs", "Deep Learning"]
  },
  {
    id : 7,
    title: "A Study of Biases in Common Face Recognition Datasets",
    description: [
      "Conducted a comprehensive study on racial biases across popular face recognition datasets.",
      "Used GANs and StyleClip to generate synthetic samples and evaluate recognition models across demographics.",
      "Quantified disparities in model accuracy and proposed methods to improve fairness and reduce bias in AI systems."
    ],
    tech: ["Python", "GANs", "StyleClip", "Deep Learning", "AI Fairness"]
  }
];

export default projects;

