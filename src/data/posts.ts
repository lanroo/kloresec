export interface Post {
  id: number;
  title: string;
  slug: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  excerpt: string;
  content: string;
}

export const posts: Post[] = [
  {
    id: 1,
    title: "CVE-2024-9324 Exploitation Chain: Web User to NT AUTHORITY SYSTEM",
    slug: "cve-2024-9324-exploitation-chain",
    date: "Nov 6, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80",
    tags: ["Exploitation", "CVE"],
    excerpt: "A detailed analysis of the CVE-2024-9324 vulnerability and its exploitation chain...",
    content: `
      <h2>Introduction</h2>
      <p>In this detailed technical analysis, we'll explore the recently discovered CVE-2024-9324 vulnerability that allows escalation from a web user to NT AUTHORITY\\SYSTEM...</p>

      <h2>Understanding the Vulnerability</h2>
      <p>The vulnerability exists in the Windows Print Spooler service and can be triggered through a specially crafted web request...</p>

      <h2>The Exploitation Chain</h2>
      <ul>
        <li>Initial foothold through web application</li>
        <li>Local privilege escalation</li>
        <li>System compromise</li>
      </ul>

      <h2>Mitigation Steps</h2>
      <p>To protect against this vulnerability, organizations should:</p>
      <ul>
        <li>Apply the latest Windows security updates</li>
        <li>Implement proper access controls</li>
        <li>Monitor for suspicious activities</li>
      </ul>
    `
  },
  {
    id: 2,
    title: "From Discovery to Reward: How to Find Zero-Day Vulnerabilities",
    slug: "finding-zero-day-vulnerabilities",
    date: "Jul 15, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80",
    tags: ["Bug Bounty", "Exploitation"],
    excerpt: "A comprehensive guide to discovering and responsibly disclosing zero-day vulnerabilities...",
    content: `
      <h2>The Art of Zero-Day Discovery</h2>
      <p>Zero-day vulnerability research requires a systematic approach and deep understanding of target systems...</p>

      <h2>Essential Tools and Techniques</h2>
      <ul>
        <li>Static Analysis Tools</li>
        <li>Dynamic Analysis Frameworks</li>
        <li>Fuzzing Techniques</li>
      </ul>

      <h2>Responsible Disclosure</h2>
      <p>When you discover a vulnerability, it's crucial to follow responsible disclosure practices...</p>

      <h2>Maximizing Bug Bounty Rewards</h2>
      <p>Tips for presenting your findings and maximizing the value of your discoveries...</p>
    `
  },
  {
    id: 3,
    title: "My OSCP Journey",
    slug: "oscp-journey",
    date: "Jun 3, 2024",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80",
    tags: ["Cert", "Enumeration"],
    excerpt: "A personal account of preparing for and passing the OSCP certification...",
    content: `
      <h2>The Beginning</h2>
      <p>My journey to OSCP certification started with a strong foundation in network security...</p>

      <h2>Preparation Strategy</h2>
      <ul>
        <li>Study materials and resources</li>
        <li>Practice environments</li>
        <li>Time management</li>
      </ul>

      <h2>The Exam Experience</h2>
      <p>A detailed breakdown of the 24-hour exam experience and key takeaways...</p>

      <h2>Tips for Success</h2>
      <p>Essential advice for those preparing for their OSCP journey...</p>
    `
  },
  {
    id: 4,
    title: "Exploiting Cross-Site Scripting Vulnerabilities",
    slug: "exploiting-xss-vulnerabilities",
    date: "May 28, 2024",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1526374870839-e155464bb9b2?auto=format&fit=crop&q=80",
    tags: ["Web", "Exploitation"],
    excerpt: "A comprehensive guide to understanding and exploiting XSS vulnerabilities...",
    content: `
      <h2>Understanding XSS</h2>
      <p>Cross-Site Scripting remains one of the most common web application vulnerabilities...</p>

      <h2>Types of XSS</h2>
      <ul>
        <li>Reflected XSS</li>
        <li>Stored XSS</li>
        <li>DOM-based XSS</li>
      </ul>

      <h2>Prevention Techniques</h2>
      <p>Best practices for preventing XSS vulnerabilities in your applications...</p>

      <h2>Real-world Examples</h2>
      <p>Analysis of recent XSS vulnerabilities found in major applications...</p>
    `
  },
  {
    id: 5,
    title: "Advanced Active Directory Exploitation Techniques",
    slug: "advanced-ad-exploitation",
    date: "May 15, 2024",
    readTime: "15 min read",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80",
    tags: ["Active Directory", "Exploitation"],
    excerpt: "Deep dive into advanced Active Directory exploitation techniques and mitigation strategies...",
    content: `
      <h2>Understanding Active Directory Security</h2>
      <p>A comprehensive overview of Active Directory security mechanisms and common misconfigurations...</p>

      <h2>Attack Vectors</h2>
      <ul>
        <li>Kerberoasting</li>
        <li>Pass-the-Hash</li>
        <li>Golden Ticket</li>
        <li>Silver Ticket</li>
      </ul>

      <h2>Detection and Prevention</h2>
      <p>Implementing effective monitoring and prevention strategies...</p>
    `
  },
  {
    id: 6,
    title: "Cloud Security: AWS Penetration Testing Guide",
    slug: "aws-pentest-guide",
    date: "May 1, 2024",
    readTime: "18 min read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
    tags: ["Cloud", "AWS", "Pentest"],
    excerpt: "A comprehensive guide to performing security assessments in AWS environments...",
    content: `
      <h2>AWS Security Fundamentals</h2>
      <p>Understanding AWS security models and common misconfigurations...</p>

      <h2>Testing Methodology</h2>
      <ul>
        <li>IAM privilege escalation</li>
        <li>S3 bucket enumeration</li>
        <li>Lambda function analysis</li>
        <li>Network security groups</li>
      </ul>

      <h2>Best Practices</h2>
      <p>Implementing secure configurations and monitoring solutions...</p>
    `
  },
  {
    id: 7,
    title: "Mobile App Security Testing Methodology",
    slug: "mobile-security-testing",
    date: "Apr 20, 2024",
    readTime: "14 min read",
    image: "https://images.unsplash.com/photo-1522251670181-320150ad6dab?auto=format&fit=crop&q=80",
    tags: ["Mobile", "Android", "iOS"],
    excerpt: "Comprehensive methodology for testing mobile application security...",
    content: `
      <h2>Mobile Security Fundamentals</h2>
      <p>Understanding mobile app security models and attack surfaces...</p>

      <h2>Testing Areas</h2>
      <ul>
        <li>Data storage</li>
        <li>Network communication</li>
        <li>Authentication mechanisms</li>
        <li>Binary protections</li>
      </ul>

      <h2>Tools and Techniques</h2>
      <p>Essential tools and methodologies for mobile app security testing...</p>
    `
  },
  {
    id: 8,
    title: "Hardware Hacking: IoT Device Security",
    slug: "hardware-hacking-iot",
    date: "Apr 10, 2024",
    readTime: "16 min read",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80",
    tags: ["Hardware", "IoT", "Exploitation"],
    excerpt: "Exploring hardware security vulnerabilities in IoT devices...",
    content: `
      <h2>IoT Security Landscape</h2>
      <p>Understanding the unique challenges of IoT device security...</p>

      <h2>Common Vulnerabilities</h2>
      <ul>
        <li>UART/JTAG debugging</li>
        <li>Firmware extraction</li>
        <li>Radio communication</li>
        <li>Physical security</li>
      </ul>

      <h2>Security Recommendations</h2>
      <p>Best practices for securing IoT devices and infrastructure...</p>
    `
  }
];

export const tags = ["Active Directory", "Android", "AWS", "Bug Bounty", "Cert", "Cloud", "CVE", "Enumeration", "Exploitation", "Hardware", "iOS", "IoT", "Mobile", "Pentest", "Web"];