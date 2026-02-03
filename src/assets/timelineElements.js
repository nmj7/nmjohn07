const timelineElements =[
    {
        id : '1',
        title : 'Vellore Institute of Technology',
        location : 'Tamil Nadu, India',
        description : 'B.Tech in Computer Science',
        date : '2020-2024',
        icon : 'School',
        color : 'teal',
        tech : ['Distributed Systems', 'Human Computer Interaction', 'Networks', 'Software Development'],
    },
    {
        id : '2',
        title : 'Capgemini SE',
        location : 'India',
        description : 'Summer AI Intern',
        description: [
  "Researched and implemented NDVI-ML and LAI-based deep learning models for satellite image analysis, achieving 80%+ accuracy in agricultural field detection.",
  "Developed CNN-based classifiers in TensorFlow to enhance crop growth detection accuracy by 20%.",
  "Applied NDVI-ML and LAI indices to improve satellite detection models, increasing precision by 15%.",
  "Delivered end-to-end AI solutions in Python for remote sensing and agricultural monitoring use cases."
],

        date : '2022',
        icon : 'Work',
        color : 'purple',
        tech : ['Python', 'OpenCV', 'CNN'],
    },
    {
        id : '3',
        title : 'M.H Alshaya',
        location : 'Dubai , UAE',
        description : 'Infosec Intern',
        description: [
  "Audited applications for ISO 27701 data privacy compliance, contributing to successful certification.",
  "Collaborated with penetration testing teams to identify and resolve over 80% of critical vulnerabilities through HackerOne reports.",
  "Conducted vulnerability assessments and penetration tests per SOPs, improving system security protocols by 11%.",
  "Assisted in incident response using the NIST framework, reducing incident resolution time by 13.5% through enhanced log analysis and containment strategies."
],

        date : '2023',
        icon : 'Work',
        color : 'purple',
        tech : ['Burpsuite', 'Linux', 'NMAP', 'Metasploit', 'SQLMap'],
    },
    {
        id : '4',
        title : 'University of Massachusetts',
        location : 'Amherst , MA',
        description : 'M.S in Computer Science',
        description: [
  "Co-chaired the university’s flagship data science conference, leading a 10-member team across Programs, Communications, and Logistics.",
  "Planned and executed a conference featuring keynote speakers, expert panels, a TechIdeathon, and networking sessions.",
  "Secured event sponsorships and partnerships with industry leaders to enhance visibility and impact.",
  "Directed the event theme 'Leveraging AI and Data in Climate Change,' promoting data science for social good."
],

        date : '2024-Present',
        icon : 'School',
        color : 'teal',
        tech : ['Distributed Systems','Information Retrival','ML in Child Rescue', 'Advanced Data Assurance', 'Game Theory and Algorithms', 'Statistics', 'Trustworthy AI'],
    },
     {
        id : '5',
        title : 'Voice of Data Science',
        location : 'Amherst , MA',
        description : 'Co-Chair. The theme of conference was Leveraging AI and Data in Climate',
        description: [
  "Pursuing M.S. in Computer Science with coursework in Algorithms, Distributed Systems, Trustworthy AI, and Data Analysis with R.",
  "Graduate researcher in 'ML for Child Rescue,' building an end-to-end speaker diarization and transcription pipeline using Whisper ASR and PyAnnote.",
  "Optimized ML models with ONNX and deployed production-ready Flask APIs for structured batch audio processing.",
  "Developed relational schemas and REST APIs for audio diarization data storage and standardized ML pipeline execution."
],

        date : '2024-2025',
        icon : 'School',
        color : 'teal',
        tech : ['Strategic Leadership','Program Design','Stakeholder Management','Partnership and Management', 'Team Management'],
    },
    {
        id : '6',
        title : 'Honeywell International',
        location : 'Dubai, UAE',
        description : 'Productivity Solutions and Services Intern',
        description: [
    "Integrated Honeywell Smart Talk mobile application with warehouse backend systems by configuring REST APIs for user provisioning, device-group synchronization, and role-based access; enabled real-time communication across 100+ devices and improved message response latency by 18% in MENA logistics environments.",
    
    "Integrated Honeywell Voice Guided Work Android client with backend task orchestration services by mapping voice event payloads (task start, pick confirmation, exception handling) to WMS APIs; supported 40+ operational workflows across two regional distribution centers and reduced workflow latency by 15%.",
    
    "Implemented backend telemetry integrations using Honeywell Operational Intelligence by ingesting device metrics (battery health, uptime, scan events) via REST APIs into monitoring dashboards; tracked 15+ operational metrics and enabled predictive device failure detection 2–3 weeks earlier.",
    
    "Automated validation of Smart Talk and Voice API endpoints by developing scripts to test JSON payloads, authentication flows, and configuration templates across complex network constraints; reduced manual integration and debugging effort by 22%.",
    
    "Analyzed API request/response latency across distributed warehouse sites by tuning timeout, retry, and batching configurations; improved system response times by 18% under concurrent device usage."
  ],
        date : '2025',
        icon : 'Work',
        color : 'purple',
        color : 'purple',
        tech : ['Python','C#','OpIntel','IoT', 'Azure', 'AWS'],
    },
];

export default timelineElements.reverse();