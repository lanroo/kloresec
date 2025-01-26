import React from "react";
import { Terminal, Code, Target, Users } from "lucide-react";

const About: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with terminal style */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            <div className="bg-black/90 border border-green-400/20 p-8 rounded-lg backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-4 text-green-400">
                <Terminal className="w-5 h-5" />
                <span className="text-sm font-mono">~/about/whoami</span>
              </div>
              <div className="font-mono space-y-4">
                <p className="text-green-400">
                  $ <span className="text-gray-300">cat profile.txt</span>
                </p>
                <div className="pl-4 text-gray-300 space-y-4" data-searchable>
                  <p>Hi, I'm Lucas</p>
                  <p>
                    A passionate Cybersecurity Engineer and Software Developer
                    dedicated to securing digital systems and building robust
                    applications. With a strong foundation in network security,
                    ethical hacking, and secure coding practices, I specialize
                    in identifying vulnerabilities, mitigating cyber threats,
                    and developing software that prioritizes security from the
                    ground up.
                  </p>
                  <p>
                    My focus extends beyond exploiting vulnerabilities in web
                    applications and infrastructure/Active Directory, to
                    developing custom tools that automate and enhance
                    penetration testing processes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 bg-black relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-black/40 border border-green-400/20 p-8 rounded-lg backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-6 text-green-400">
                <Code className="w-5 h-5" />
                <span className="text-sm font-mono">~/about/skills</span>
              </div>

              <div className="space-y-8">
                <div className="space-y-4">
                  <h3
                    className="text-xl font-bold text-green-400"
                    data-searchable
                  >
                    Specialties
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-black/60 p-4 rounded border border-green-400/20">
                      <h4 className="font-mono mb-2">
                        Web Application Security
                      </h4>
                      <p className="text-sm text-gray-400">
                        OWASP Top 10, API Security, Custom Exploits
                      </p>
                    </div>
                    <div className="bg-black/60 p-4 rounded border border-green-400/20">
                      <h4 className="font-mono mb-2">Network Penetration</h4>
                      <p className="text-sm text-gray-400">
                        Infrastructure Testing, Active Directory Attacks
                      </p>
                    </div>
                    <div className="bg-black/60 p-4 rounded border border-green-400/20">
                      <h4 className="font-mono mb-2">Red Team Operations</h4>
                      <p className="text-sm text-gray-400">
                        Advanced Persistent Threats, Social Engineering
                      </p>
                    </div>
                    <div className="bg-black/60 p-4 rounded border border-green-400/20">
                      <h4 className="font-mono mb-2">Tool Development</h4>
                      <p className="text-sm text-gray-400">
                        Custom Security Tools, Automation Scripts
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3
                    className="text-xl font-bold text-green-400"
                    data-searchable
                  >
                    Certifications
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1 bg-green-400/10 rounded-full border border-green-400/20 text-sm">
                      OSCP
                    </span>
                    <span className="px-3 py-1 bg-green-400/10 rounded-full border border-green-400/20 text-sm">
                      eCPPT
                    </span>
                    <span className="px-3 py-1 bg-green-400/10 rounded-full border border-green-400/20 text-sm">
                      CRTP
                    </span>
                    <span className="px-3 py-1 bg-green-400/10 rounded-full border border-green-400/20 text-sm">
                      eWPT
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 bg-black/80 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-black/40 border border-green-400/20 p-8 rounded-lg backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-6 text-green-400">
                <Target className="w-5 h-5" />
                <span className="text-sm font-mono">~/about/projects</span>
              </div>

              <div className="space-y-6">
                <h3
                  className="text-xl font-bold text-green-400 mb-4"
                  data-searchable
                >
                  Recent Projects
                </h3>
                <div className="space-y-6">
                  <div className="border-l-2 border-green-400/20 pl-4">
                    <h4 className="font-mono text-lg mb-2">
                      Custom Payload Generator
                    </h4>
                    <p className="text-gray-400 text-sm mb-2">
                      Automated tool for generating evasive payloads for
                      different penetration testing scenarios.
                    </p>
                    <div className="flex gap-2">
                      <span className="text-xs px-2 py-1 bg-green-400/10 rounded">
                        Python
                      </span>
                      <span className="text-xs px-2 py-1 bg-green-400/10 rounded">
                        Malware Dev
                      </span>
                    </div>
                  </div>

                  <div className="border-l-2 border-green-400/20 pl-4">
                    <h4 className="font-mono text-lg mb-2">AD Audit Tool</h4>
                    <p className="text-gray-400 text-sm mb-2">
                      Framework for automated Active Directory auditing focusing
                      on security misconfigurations.
                    </p>
                    <div className="flex gap-2">
                      <span className="text-xs px-2 py-1 bg-green-400/10 rounded">
                        C#
                      </span>
                      <span className="text-xs px-2 py-1 bg-green-400/10 rounded">
                        PowerShell
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-black relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-black/40 border border-green-400/20 p-8 rounded-lg backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-6 text-green-400">
                <Users className="w-5 h-5" />
                <span className="text-sm font-mono">~/about/contact</span>
              </div>

              <div className="space-y-6">
                <h3
                  className="text-xl font-bold text-green-400"
                  data-searchable
                >
                  Let's Talk?
                </h3>
                <p className="text-gray-400">
                  I'm always interested in new projects and challenges. If you
                  need help with offensive security or want to discuss a
                  project, feel free to reach out.
                </p>
                <div className="flex gap-4">
                  <button className="px-6 py-2 bg-green-400 text-black rounded font-bold hover:bg-green-500 transition-colors">
                    Email
                  </button>
                  <button className="px-6 py-2 border border-green-400 text-green-400 rounded font-bold hover:bg-green-400/10 transition-colors">
                    LinkedIn
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
