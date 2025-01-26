import React, { useEffect, useState } from "react";
import { Terminal, Code, Target, Users } from "lucide-react";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const skillCardAnimation = {
  initial: { x: -20, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { type: "spring", stiffness: 100 },
};

const About: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Background Parallax Layers */}
      <div
        className="fixed inset-0 w-full h-full z-[-3]"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: `translateY(${scrollY * 0.5}px)`,
          filter: "brightness(0.7) contrast(1.2)",
        }}
      />
      <div
        className="fixed inset-0 w-full h-full z-[-2]"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.2,
          transform: `translateY(${scrollY * 0.3}px)`,
          filter: "hue-rotate(45deg) brightness(1.5)",
          mixBlendMode: "overlay",
        }}
      />
      <div className="fixed inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black z-[-2]" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-500/10 via-transparent to-transparent z-[-2]" />

      {/* Grid Overlay */}
      <div
        className="fixed inset-0 z-[-1]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(74, 222, 128, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(74, 222, 128, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          transform: `translateY(${scrollY * 0.2}px)`,
        }}
      />

      {/* Content */}
      <div className="relative z-[1]">
        {/* Hero Section with terminal style */}
        <section className="relative min-h-screen flex items-center justify-center pt-20 sm:pt-0">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-black/40 border border-green-400/20 p-4 sm:p-8 rounded-lg backdrop-blur-md"
              >
                <div className="flex items-center gap-2 mb-4 text-green-400">
                  <Terminal className="w-5 h-5" />
                  <motion.span
                    className="text-sm font-mono"
                    initial={{ width: 0 }}
                    animate={{ width: "auto" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    ~/about/whoami
                  </motion.span>
                </div>
                <div className="font-mono space-y-4">
                  <motion.p
                    className="text-green-400"
                    {...fadeIn}
                    transition={{ delay: 0.4 }}
                  >
                    $ <span className="text-gray-300">cat profile.txt</span>
                  </motion.p>
                  <motion.div
                    className="pl-4 text-gray-300 space-y-4"
                    {...fadeIn}
                    transition={{ delay: 0.6 }}
                  >
                    <p>Hi, I'm Lucas</p>
                    <p>
                      A passionate Cybersecurity Engineer and Software Developer
                      dedicated to securing digital systems and building robust
                      applications. With a strong foundation in network
                      security, ethical hacking, and secure coding practices, I
                      specialize in identifying vulnerabilities, mitigating
                      cyber threats, and developing software that prioritizes
                      security from the ground up.
                    </p>
                    <p>
                      My focus extends beyond exploiting vulnerabilities in web
                      applications and infrastructure/Active Directory, to
                      developing custom tools that automate and enhance
                      penetration testing processes.
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-24 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-black/40 border border-green-400/20 p-8 rounded-lg backdrop-blur-md"
              >
                <motion.div
                  className="flex items-center gap-2 mb-6 text-green-400"
                  {...fadeIn}
                >
                  <Code className="w-5 h-5" />
                  <span className="text-sm font-mono">~/about/skills</span>
                </motion.div>

                <div className="space-y-8">
                  <div className="space-y-4">
                    <motion.h3
                      className="text-xl font-bold text-green-400"
                      {...fadeIn}
                    >
                      Specialties
                    </motion.h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <motion.div
                        className="bg-black/60 p-4 rounded border border-green-400/20 hover:border-green-400/40 transition-colors"
                        whileHover={{ scale: 1.02 }}
                        {...skillCardAnimation}
                        transition={{ delay: 0.1 }}
                      >
                        <h4 className="font-mono mb-2">
                          Web Application Security
                        </h4>
                        <p className="text-sm text-gray-400">
                          OWASP Top 10, API Security, Custom Exploits
                        </p>
                      </motion.div>
                      <motion.div
                        className="bg-black/60 p-4 rounded border border-green-400/20 hover:border-green-400/40 transition-colors"
                        whileHover={{ scale: 1.02 }}
                        {...skillCardAnimation}
                        transition={{ delay: 0.2 }}
                      >
                        <h4 className="font-mono mb-2">Network Penetration</h4>
                        <p className="text-sm text-gray-400">
                          Infrastructure Testing, Active Directory Attacks
                        </p>
                      </motion.div>
                      <motion.div
                        className="bg-black/60 p-4 rounded border border-green-400/20 hover:border-green-400/40 transition-colors"
                        whileHover={{ scale: 1.02 }}
                        {...skillCardAnimation}
                        transition={{ delay: 0.3 }}
                      >
                        <h4 className="font-mono mb-2">Red Team Operations</h4>
                        <p className="text-sm text-gray-400">
                          Advanced Persistent Threats, Social Engineering
                        </p>
                      </motion.div>
                      <motion.div
                        className="bg-black/60 p-4 rounded border border-green-400/20 hover:border-green-400/40 transition-colors"
                        whileHover={{ scale: 1.02 }}
                        {...skillCardAnimation}
                        transition={{ delay: 0.4 }}
                      >
                        <h4 className="font-mono mb-2">Tool Development</h4>
                        <p className="text-sm text-gray-400">
                          Custom Security Tools, Automation Scripts
                        </p>
                      </motion.div>
                    </div>
                  </div>

                  <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    <motion.h3
                      className="text-xl font-bold text-green-400"
                      {...fadeIn}
                    >
                      Certifications
                    </motion.h3>
                    <div className="flex flex-wrap gap-3">
                      {["OSCP", "eCPPT", "CRTP", "eWPT"].map((cert, index) => (
                        <motion.span
                          key={cert}
                          className="px-3 py-1 bg-green-400/10 rounded-full border border-green-400/20 text-sm hover:border-green-400/40 transition-colors"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ y: -2 }}
                          viewport={{ once: true }}
                        >
                          {cert}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-24 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-black/40 border border-green-400/20 p-8 rounded-lg backdrop-blur-md"
              >
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
                        Framework for automated Active Directory auditing
                        focusing on security misconfigurations.
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
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-black/40 border border-green-400/20 p-8 rounded-lg backdrop-blur-md"
              >
                <motion.div
                  className="flex items-center gap-2 mb-6 text-green-400"
                  {...fadeIn}
                >
                  <Users className="w-5 h-5" />
                  <span className="text-sm font-mono">~/about/contact</span>
                </motion.div>

                <div className="space-y-6">
                  <motion.h3
                    className="text-xl font-bold text-green-400"
                    {...fadeIn}
                  >
                    Let's Talk?
                  </motion.h3>
                  <motion.p
                    className="text-gray-400"
                    {...fadeIn}
                    transition={{ delay: 0.2 }}
                  >
                    I'm always interested in new projects and challenges. If you
                    need help with offensive security or want to discuss a
                    project, feel free to reach out.
                  </motion.p>
                  <motion.div
                    className="flex gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <motion.button
                      className="px-6 py-2 bg-green-400 text-black rounded font-bold hover:bg-green-500 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Email
                    </motion.button>
                    <motion.button
                      className="px-6 py-2 border border-green-400 text-green-400 rounded font-bold hover:bg-green-400/10 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      LinkedIn
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
