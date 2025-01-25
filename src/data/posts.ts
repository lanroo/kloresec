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
  }
];

export const tags = ["Bug Bounty", "Cert", "CVE", "Enumeration", "Exploitation", "Web"];