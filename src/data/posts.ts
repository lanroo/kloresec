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
  author: {
    name: string;
    avatar: string;
  };
}


export const posts: Post[] = [
  {
    id: 1,
    title: "Pentest: Exploiting Misconfigured Services for Internal Network Access",
    slug: "pentest-exploiting-misconfigured-services",
    date: "Nov 6, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&q=80",
    tags: ["Pentest", "Exploitation", "Network Security"],
    excerpt: "A detailed pentest guide on exploiting misconfigured services to gain unauthorized internal network access...",
    content: `
      <h2 id="introduction">Introduction</h2>
      <p>Pentesting internal networks requires a deep understanding of misconfigured services that can be leveraged for access.
      Attackers commonly exploit services running with weak authentication or excessive permissions.</p>

      <h2 id="misconfigured-services">Common Misconfigured Services</h2>
      <p>Several misconfigured services can be exploited to gain unauthorized network access:</p>
      <ul>
        <li>SMB Shares with sensitive data exposure</li>
        <li>Open RDP (Remote Desktop Protocol) access</li>
        <li>Publicly accessible MySQL/PostgreSQL/MSSQL instances</li>
        <li>Jenkins instances running with admin privileges</li>
      </ul>

      <h2 id="exploitation-techniques">Exploitation Techniques</h2>
      <p>Pentesters use different techniques to exploit these misconfigurations:</p>
      <ul>
        <li>NTLM Relay Attacks using Responder</li>
        <li>SMB Enumeration with CrackMapExec</li>
        <li>Kerberoasting attacks for credential extraction</li>
        <li>Remote Code Execution (RCE) via exposed Jenkins scripts</li>
      </ul>

      <h2 id="lateral-movement">Lateral Movement Strategies</h2>
      <p>Once inside the internal network, pentesters can escalate privileges and move laterally:</p>
      <ul>
        <li>Pass-the-Hash (PtH) Attacks</li>
        <li>Pivoting using SSH tunnels or ProxyChains</li>
        <li>Extracting credentials from LSASS using Mimikatz</li>
        <li>Leveraging Active Directory misconfigurations</li>
      </ul>

      <h2 id="mitigation">Mitigation Techniques</h2>
      <p>Organizations should implement the following measures to protect against these attacks:</p>
      <ul>
        <li>Restrict SMB and NTLM authentication</li>
        <li>Regularly audit exposed services and enforce access controls</li>
        <li>Monitor authentication logs for unusual patterns</li>
        <li>Harden Active Directory to prevent Kerberoasting and PtH attacks</li>
      </ul>
    `,
    author: {
      name: "Lucas de Souza",
      avatar: "https://media.licdn.com/dms/image/v2/D4D03AQEgRKBx-i1SWQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1730906860185?e=1743033600&v=beta&t=WEPa0jEZbJ9VKQq0ZRtHO_HgZmsJuOk_smHxGfNn8wc"
    }
  },
  {
    id: 2,
    title: "From Reconnaissance to Privilege Escalation: The Pentester’s Guide",
    slug: "pentester-recon-to-privilege-escalation",
    date: "Jul 15, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80",
    tags: ["Pentest", "Recon", "Privilege Escalation"],
    excerpt: "A structured approach to performing reconnaissance and escalating privileges during a penetration test...",
    content: `
      <h2 id="reconnaissance">Phase 1: Reconnaissance</h2>
      <p>The first step in any penetration test is gathering information about the target environment:</p>
      <ul>
        <li>Active scanning with Nmap to identify open ports and services</li>
        <li>OSINT (Open-Source Intelligence) gathering for credentials</li>
        <li>Enumerating exposed APIs and web applications</li>
      </ul>

      <h2 id="initial-access">Phase 2: Initial Access</h2>
      <p>Pentesters gain initial access through:</p>
      <ul>
        <li>Exploiting web vulnerabilities (SQL Injection, XSS, RCE)</li>
        <li>Phishing campaigns targeting employees</li>
        <li>Compromising exposed credentials through brute-force attacks</li>
      </ul>

      <h2 id="privilege-escalation">Phase 3: Privilege Escalation</h2>
      <p>After obtaining access, the goal is to escalate privileges:</p>
      <ul>
        <li>Exploiting kernel vulnerabilities for root/admin access</li>
        <li>Dumping hashes and credentials from memory</li>
        <li>Using token impersonation and privilege abuse</li>
      </ul>

      <h2 id="persistence">Phase 4: Persistence and Lateral Movement</h2>
      <p>Once a foothold is established, attackers set up persistence and move laterally:</p>
      <ul>
        <li>Installing backdoors for future access</li>
        <li>Using scheduled tasks and registry manipulation</li>
        <li>Pivoting to other network segments</li>
      </ul>

      <h2 id="mitigation">Mitigation Steps</h2>
      <p>Organizations should enforce best security practices to prevent exploitation:</p>
      <ul>
        <li>Harden endpoints against privilege escalation attacks</li>
        <li>Monitor for abnormal user activity</li>
        <li>Use endpoint detection & response (EDR) solutions</li>
      </ul>
    `,
    author: {
      name: "Lucas de Souza",
      avatar: "https://media.licdn.com/dms/image/v2/D4D03AQEgRKBx-i1SWQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1730906860185?e=1743033600&v=beta&t=WEPa0jEZbJ9VKQq0ZRtHO_HgZmsJuOk_smHxGfNn8wc"
    }
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
    `,
    author: {
      name: "Lucas de Souza",
      avatar: "https://media.licdn.com/dms/image/v2/D4D03AQEgRKBx-i1SWQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1730906860185?e=1743033600&v=beta&t=WEPa0jEZbJ9VKQq0ZRtHO_HgZmsJuOk_smHxGfNn8wc"
    }
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
    `,
    author: {
      name: "Lucas de Souza",
      avatar: "https://media.licdn.com/dms/image/v2/D4D03AQEgRKBx-i1SWQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1730906860185?e=1743033600&v=beta&t=WEPa0jEZbJ9VKQq0ZRtHO_HgZmsJuOk_smHxGfNn8wc"
    }
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
    `,
    author: {
      name: "Lucas de Souza",
      avatar: "https://media.licdn.com/dms/image/v2/D4D03AQEgRKBx-i1SWQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1730906860185?e=1743033600&v=beta&t=WEPa0jEZbJ9VKQq0ZRtHO_HgZmsJuOk_smHxGfNn8wc"
    }
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
    `,
    author: {
      name: "Lucas de Souza",
      avatar: "https://media.licdn.com/dms/image/v2/D4D03AQEgRKBx-i1SWQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1730906860185?e=1743033600&v=beta&t=WEPa0jEZbJ9VKQq0ZRtHO_HgZmsJuOk_smHxGfNn8wc"
    }
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
    `,
    author: {
      name: "Lucas de Souza",
      avatar: "https://media.licdn.com/dms/image/v2/D4D03AQEgRKBx-i1SWQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1730906860185?e=1743033600&v=beta&t=WEPa0jEZbJ9VKQq0ZRtHO_HgZmsJuOk_smHxGfNn8wc"
    }
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
    `,
    author: {
      name: "Lucas de Souza",
      avatar: "https://media.licdn.com/dms/image/v2/D4D03AQEgRKBx-i1SWQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1730906860185?e=1743033600&v=beta&t=WEPa0jEZbJ9VKQq0ZRtHO_HgZmsJuOk_smHxGfNn8wc"
    }
  }
];

export const tags = ["Active Directory", "Android", "AWS", "Bug Bounty", "Cert", "Cloud", "CVE", "Enumeration", "Exploitation", "Hardware", "iOS", "IoT", "Mobile", "Pentest", "Web"];