interface Testimonial {
  quote: string;
  name: string;
  position: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: "Klore Sec's penetration testing services revealed critical vulnerabilities in our infrastructure that we weren't aware of. Their detailed reports and remediation guidance were invaluable for strengthening our security posture.",
    name: "Sarah Chen",
    position: "CISO at TechCorp",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
  },
  {
    quote: "The Red Team assessment conducted by Klore Sec was eye-opening. Their simulated attacks helped us identify and address security gaps before they could be exploited by real threats.",
    name: "Michael Rodriguez",
    position: "Security Director",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
  },
  {
    quote: "Working with Klore Sec transformed our approach to security development. Their expertise in implementing security throughout our SDLC has significantly reduced our vulnerability exposure.",
    name: "Emily Watson",
    position: "DevSecOps Lead",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
  }
];