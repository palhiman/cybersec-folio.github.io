export const profile = {
  name: "Harsh",
  title: "Cyber Security Engineer",
  subtitle: "Building secure systems, discovering vulnerabilities, and automating security operations.",
  email: "harsh@securityengineer.dev",
  location: "San Francisco, CA",
  yearsExperience: 5,
  resumeUrl: "/resume.pdf",
  pgpKey: "0xABC123DEF456",
  social: {
    github: "https://github.com/harsh-security",
    linkedin: "https://linkedin.com/in/harsh-security",
    twitter: "https://twitter.com/harsh_security",
  },
  about: `I'm a Cyber Security Engineer with ${5}+ years of experience in web application security, cloud infrastructure security, and security automation. I specialize in identifying vulnerabilities, building secure architectures, and developing automated security tooling.

My approach combines deep technical expertise with a systematic methodology—whether I'm conducting penetration tests, performing security code reviews, or designing secure cloud infrastructure. I believe security should be built-in, not bolted-on.

I'm passionate about open-source security tools, responsible disclosure, and contributing to the cybersecurity community through research, blog posts, and mentorship.`,
  values: [
    { title: "Security First", description: "Every system deserves robust security from the ground up." },
    { title: "Continuous Learning", description: "The threat landscape evolves daily—so should we." },
    { title: "Responsible Disclosure", description: "Ethical practice and transparency in all security research." },
    { title: "Automation", description: "Scalable security through intelligent automation and tooling." },
  ],
};

export const skills = {
  programming: {
    title: "Programming",
    icon: "Code2",
    items: ["Python", "JavaScript", "TypeScript", "Bash", "C"],
  },
  security: {
    title: "Security Tools",
    icon: "Shield",
    items: ["Burp Suite", "Nmap", "Metasploit", "Wireshark", "Nessus", "OWASP ZAP", "Kali Linux"],
  },
  cloud: {
    title: "Cloud & DevOps",
    icon: "Cloud",
    items: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform"],
  },
  development: {
    title: "Development",
    icon: "Layers",
    items: ["React", "Next.js", "Node.js", "Git"],
  },
  os: {
    title: "Operating Systems",
    icon: "Monitor",
    items: ["Linux", "Windows"],
  },
  networking: {
    title: "Networking",
    icon: "Network",
    items: ["TCP/IP", "DNS", "HTTP/HTTPS", "VPN", "Firewalls"],
  },
};

export const experience = [
  {
    role: "Senior Security Engineer",
    company: "CloudGuard Technologies",
    duration: "Jan 2023 – Present",
    description: "Lead security engineering for cloud-native applications, implementing DevSecOps pipelines and conducting advanced threat modeling.",
    responsibilities: [
      "Architected and deployed cloud security monitoring across 200+ AWS accounts",
      "Led incident response for critical security events, reducing MTTR by 60%",
      "Developed custom security automation tools in Python, scanning 10K+ endpoints daily",
      "Conducted penetration testing on web applications and APIs",
    ],
    technologies: ["AWS", "Python", "Terraform", "Docker", "Kubernetes"],
    achievements: ["Reduced security vulnerabilities by 75%", "Built automated compliance framework"],
  },
  {
    role: "Security Analyst",
    company: "CyberDefense Corp",
    duration: "Jun 2021 – Dec 2022",
    description: "Performed vulnerability assessments, security audits, and managed SIEM operations for enterprise clients.",
    responsibilities: [
      "Conducted 50+ penetration tests on web applications and network infrastructure",
      "Managed Splunk SIEM, creating custom detection rules and dashboards",
      "Performed security code reviews for critical financial applications",
      "Developed incident response playbooks and conducted tabletop exercises",
    ],
    technologies: ["Burp Suite", "Splunk", "Nessus", "Metasploit", "Python"],
    achievements: ["Identified 200+ critical vulnerabilities", "Achieved SOC 2 Type II compliance"],
  },
  {
    role: "Junior Penetration Tester",
    company: "SecureNet Solutions",
    duration: "Aug 2019 – May 2021",
    description: "Performed web application and network penetration testing, vulnerability assessments, and security consulting.",
    responsibilities: [
      "Executed OWASP Top 10 testing on client web applications",
      "Conducted network vulnerability scanning and assessment",
      "Authored detailed penetration testing reports with remediation guidance",
      "Assisted in red team operations and social engineering campaigns",
    ],
    technologies: ["Kali Linux", "Nmap", "Burp Suite", "Wireshark", "OWASP ZAP"],
    achievements: ["Discovered 3 zero-day vulnerabilities", "Published 5 CVE advisories"],
  },
];

export const projects = [
  {
    title: "CloudSentinel",
    description: "Automated cloud security posture management tool that continuously monitors AWS infrastructure for misconfigurations and compliance violations.",
    problem: "Organizations struggle to maintain security compliance across hundreds of cloud resources with manual auditing.",
    techStack: ["Python", "AWS SDK", "Terraform", "React", "PostgreSQL"],
    architecture: "Serverless architecture using AWS Lambda, with React dashboard and PostgreSQL for findings storage.",
    challenges: "Handling rate limits across 200+ AWS accounts while maintaining real-time monitoring capabilities.",
    tags: ["Cloud Security", "Automation", "AWS", "Python"],
    github: "https://github.com/harsh-security/cloudsentinel",
    demo: "https://cloudsentinel.demo.dev",
    featured: true,
  },
  {
    title: "VulnScanner Pro",
    description: "Comprehensive web application vulnerability scanner with custom detection modules for OWASP Top 10 vulnerabilities.",
    problem: "Existing open-source scanners miss application-specific vulnerabilities and produce too many false positives.",
    techStack: ["Python", "AsyncIO", "Beautiful Soup", "Docker", "Redis"],
    architecture: "Distributed scanning engine with worker pools, Redis queue, and centralized reporting dashboard.",
    challenges: "Minimizing false positives while maintaining high detection rates across diverse web technologies.",
    tags: ["Web Security", "Scanner", "Python", "Automation"],
    github: "https://github.com/harsh-security/vulnscanner-pro",
    featured: true,
  },
  {
    title: "ThreatHunter",
    description: "Threat hunting framework that correlates logs from multiple sources to detect advanced persistent threats.",
    problem: "SOC teams lack automated tools to correlate events across disparate log sources for threat hunting.",
    techStack: ["Python", "Elasticsearch", "Kibana", "YARA", "Sigma Rules"],
    architecture: "ELK stack with custom Python enrichment pipeline and YARA/Sigma rule engine.",
    challenges: "Processing millions of log events in real-time while maintaining low latency threat detection.",
    tags: ["Threat Hunting", "SIEM", "Python", "Detection"],
    github: "https://github.com/harsh-security/threathunter",
    featured: true,
  },
  {
    title: "SecureCI",
    description: "DevSecOps pipeline integration tool that embeds security scanning into CI/CD workflows with minimal friction.",
    problem: "Security testing is often an afterthought in CI/CD pipelines, leading to late-stage vulnerability discoveries.",
    techStack: ["Go", "Docker", "GitHub Actions", "SARIF", "Node.js"],
    architecture: "GitHub Action with containerized scanning tools, producing standardized SARIF reports.",
    challenges: "Keeping scan times under 5 minutes while providing comprehensive security coverage.",
    tags: ["DevSecOps", "CI/CD", "Automation", "Go"],
    github: "https://github.com/harsh-security/secureci",
    featured: false,
  },
  {
    title: "PhishGuard",
    description: "AI-powered phishing detection system that analyzes emails, URLs, and attachments for malicious indicators.",
    problem: "Traditional email filters miss sophisticated spear-phishing attacks targeting high-value employees.",
    techStack: ["Python", "TensorFlow", "FastAPI", "Redis", "Docker"],
    architecture: "Microservice architecture with ML inference engine, URL analyzer, and real-time scoring API.",
    challenges: "Achieving sub-second analysis time while maintaining 99.5% accuracy on novel phishing campaigns.",
    tags: ["Machine Learning", "Email Security", "Python", "AI"],
    github: "https://github.com/harsh-security/phishguard",
    featured: false,
  },
  {
    title: "NetRecon",
    description: "Network reconnaissance toolkit with passive and active scanning capabilities for security assessments.",
    problem: "Pentesters need a unified tool for network discovery that combines multiple scanning techniques.",
    techStack: ["Python", "Scapy", "Nmap", "Neo4j", "React"],
    architecture: "Python-based scanner with Neo4j graph database for network mapping and React visualization.",
    challenges: "Balancing scan thoroughness with stealth to avoid detection by IDS/IPS systems.",
    tags: ["Network Security", "Reconnaissance", "Python", "Pentesting"],
    github: "https://github.com/harsh-security/netrecon",
    featured: false,
  },
];

export const certifications = [
  {
    title: "CompTIA Security+",
    issuer: "CompTIA",
    date: "2020",
    verifyUrl: "https://www.credly.com/badges/example",
    color: "#E31937",
  },
  {
    title: "Certified Ethical Hacker (CEH)",
    issuer: "EC-Council",
    date: "2021",
    verifyUrl: "https://aspen.eccouncil.org/verify",
    color: "#FF6B00",
  },
  {
    title: "eLearnSecurity Junior Penetration Tester (eJPT)",
    issuer: "INE Security",
    date: "2021",
    verifyUrl: "https://certs.ine.com/verify",
    color: "#00B4D8",
  },
  {
    title: "Practical Network Penetration Tester (PNPT)",
    issuer: "TCM Security",
    date: "2022",
    verifyUrl: "https://certifications.tcm-sec.com/verify",
    color: "#7C3AED",
  },
  {
    title: "AWS Security Specialty",
    issuer: "Amazon Web Services",
    date: "2023",
    verifyUrl: "https://www.credly.com/badges/example-aws",
    color: "#FF9900",
  },
  {
    title: "Microsoft SC-200",
    issuer: "Microsoft",
    date: "2023",
    verifyUrl: "https://learn.microsoft.com/en-us/certifications/verify",
    color: "#00A4EF",
  },
];

export const researchTopics = [
  {
    title: "OWASP Top 10 Deep Dive",
    description: "Comprehensive analysis of OWASP Top 10 vulnerabilities with real-world exploitation examples and remediation strategies.",
    category: "Web Security",
    icon: "Bug",
  },
  {
    title: "Cloud Security Posture Management",
    description: "Best practices for securing multi-cloud environments, including IAM, network security, and data protection.",
    category: "Cloud Security",
    icon: "Cloud",
  },
  {
    title: "Linux Privilege Escalation",
    description: "Techniques and methodologies for identifying and exploiting privilege escalation vectors in Linux systems.",
    category: "Privilege Escalation",
    icon: "ArrowUpCircle",
  },
  {
    title: "Threat Hunting with MITRE ATT&CK",
    description: "Using the MITRE ATT&CK framework for proactive threat hunting and adversary emulation.",
    category: "Threat Hunting",
    icon: "Search",
  },
  {
    title: "Malware Analysis Fundamentals",
    description: "Static and dynamic analysis techniques for understanding malware behavior and developing detection signatures.",
    category: "Malware Analysis",
    icon: "FileWarning",
  },
  {
    title: "Container Security Best Practices",
    description: "Securing Docker and Kubernetes environments from image vulnerabilities to runtime protection.",
    category: "Container Security",
    icon: "Box",
  },
  {
    title: "Active Directory Attack Paths",
    description: "Identifying and mitigating common Active Directory attack vectors including Kerberoasting and Pass-the-Hash.",
    category: "Active Directory",
    icon: "Server",
  },
  {
    title: "Incident Response Playbooks",
    description: "Building effective incident response procedures for common security events and breach scenarios.",
    category: "Incident Response",
    icon: "AlertTriangle",
  },
];

export const blogPosts = [
  {
    slug: "building-automated-security-scanner",
    title: "Building an Automated Security Scanner with Python",
    excerpt: "A step-by-step guide to building a custom web application security scanner using Python's asyncio and aiohttp.",
    date: "2024-01-15",
    readingTime: "12 min read",
    tags: ["Python", "Automation", "Web Security"],
    category: "Tutorial",
  },
  {
    slug: "aws-security-best-practices",
    title: "AWS Security Best Practices for 2024",
    excerpt: "Essential security configurations and monitoring strategies for securing your AWS infrastructure.",
    date: "2024-02-20",
    readingTime: "8 min read",
    tags: ["AWS", "Cloud Security", "Best Practices"],
    category: "Guide",
  },
  {
    slug: "understanding-zero-trust-architecture",
    title: "Understanding Zero Trust Architecture",
    excerpt: "How to implement Zero Trust principles in modern enterprise networks and cloud environments.",
    date: "2024-03-10",
    readingTime: "10 min read",
    tags: ["Zero Trust", "Architecture", "Enterprise"],
    category: "Research",
  },
  {
    slug: "kubernetes-security-hardening",
    title: "Kubernetes Security Hardening Guide",
    excerpt: "Comprehensive guide to securing Kubernetes clusters from deployment to runtime.",
    date: "2024-04-05",
    readingTime: "15 min read",
    tags: ["Kubernetes", "Container Security", "DevSecOps"],
    category: "Guide",
  },
];

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Certifications", href: "#certifications" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];
