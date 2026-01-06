"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Code,
  Briefcase,
  GraduationCap,
  Award,
  ExternalLink,
  Menu,
  X,
} from "lucide-react";

const MotionSection = ({ children, className = "", id }: any) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.section>
);

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-transparent backdrop-blur-md z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.h1
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent-2 to-accent-1"
              style={{
                backgroundImage: "linear-gradient(90deg,#06b6d4,#7c3aed)",
              }}
            >
              Avinash Kumar
            </motion.h1>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-6 items-center">
              {[
                "About",
                "Experience",
                "Education",
                "Projects",
                "Skills",
                "Achievements",
              ].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  whileHover={{ y: -3 }}
                  className="relative px-1 py-1 text-sm text-slate-300 hover:text-white transition-colors"
                >
                  {item}
                  <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-gradient-to-r from-accent-2 to-accent-1 transition-all group-hover:w-full"></span>
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="md:hidden mt-4 pb-4 flex flex-col gap-3"
            >
              {[
                "About",
                "Experience",
                "Education",
                "Projects",
                "Skills",
                "Achievements",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-left hover:text-white text-slate-300 transition-colors"
                >
                  {item}
                </button>
              ))}
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <MotionSection id="about" className="pt-32 pb-10 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="text-left">
            <motion.h2
              className="text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(90deg,#06b6d4,#7c3aed)",
              }}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Avinash Kumar
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-2xl md:text-3xl text-slate-300 mb-4"
            >
              Software Engineer
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-400 max-w-xl mb-6"
            >
              MERN Stack Developer building performant and delightful user
              experiences using React, TypeScript and modern tooling.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a
                className="btn-primary px-4 py-2 rounded-md shadow-sm inline-flex items-center gap-2"
                href="#projects"
              >
                See Projects
              </a>
              <a
                className="px-4 py-2 rounded-md border border-slate-700 text-slate-300 hover:text-white transition-colors"
                href="mailto:avinashkr130728@gmail.com"
              >
                Contact
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="flex flex-wrap gap-6 mt-6 text-slate-300"
            >
              <div className="flex items-center gap-2">
                <Mail size={18} />
                <span className="text-sm">avinashkr130728@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} />
                <span className="text-sm">9102524714</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span className="text-sm">Bangalore, India</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center md:justify-end"
          >
            <div className="glass-card card-shadow p-6 rounded-2xl flex flex-col items-center gap-4">
              <div className="hero-avatar bg-gradient-to-tr from-accent-2 to-accent-1 flex items-center justify-center">
                {/* Placeholder avatar - replace with your image in /public/avatar.jpg */}
                <img
                  src="/avatar.svg"
                  alt="Avinash avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <div className="font-semibold">Avinash Kumar</div>
                <div className="text-sm text-slate-300">Software Engineer</div>
              </div>
              <div className="flex gap-3">
                <a
                  className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors"
                  href="#"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors"
                  href="#"
                >
                  <Github size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </MotionSection>

      {/* Experience Section */}
      <MotionSection id="experience" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Briefcase className="text-blue-400" size={32} />
            <h3 className="text-4xl font-bold">Professional Experience</h3>
          </div>

          <div className="space-y-8">
            <div className="bg-slate-900 p-6 rounded-lg border border-slate-700 hover:border-blue-500 transition-colors">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h4 className="text-2xl font-bold text-blue-400">
                    Software Engineer
                  </h4>
                  <p className="text-xl text-slate-300">
                    Evobi Automation Pvt Ltd
                  </p>
                  <p className="text-slate-400">Bangalore, Karnataka</p>
                </div>
                <span className="text-slate-400 mt-2 md:mt-0">
                  July 2024 – Present
                </span>
              </div>
              <ul className="space-y-2 text-slate-300">
                <li className="flex gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>
                    Enhanced web application performance by 30% using React,
                    Tailwind, and TypeScript, delivering seamless UI for 1K+
                    users.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>
                    Implemented TypeScript for 100% type safety, reducing bugs
                    by 40%.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>
                    Integrated third-party APIs, improving app functionality and
                    reducing development time by 20%.
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-900 p-6 rounded-lg border border-slate-700 hover:border-purple-500 transition-colors">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h4 className="text-2xl font-bold text-purple-400">
                    Software Engineer
                  </h4>
                  <p className="text-xl text-slate-300">Anuta Networks India</p>
                  <p className="text-slate-400">Bangalore, Karnataka</p>
                </div>
                <span className="text-slate-400 mt-2 md:mt-0">
                  Jan 2024 – June 2024
                </span>
              </div>
              <ul className="space-y-2 text-slate-300">
                <li className="flex gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>
                    Excelled as a proficient MERN stack front-end developer,
                    specializing in crafting dynamic, responsive web
                    applications.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>
                    Demonstrated versatility as a full-stack developer
                    proficient in the MERN stack, delivering end-to-end
                    solutions with seamless integration and robust
                    functionality.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>
                    Contributed to the development and enhancement of various
                    software projects, gaining valuable experience in software
                    engineering practices.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </MotionSection>

      {/* Education Section */}
      <MotionSection id="education" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <GraduationCap className="text-purple-400" size={32} />
            <h3 className="text-4xl font-bold">Education</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-purple-500 transition-colors">
              <h4 className="text-xl font-bold text-purple-400 mb-2">
                Master of Computer Applications
              </h4>
              <p className="text-lg text-slate-300 mb-1">
                National Institute of Technology, Raipur
              </p>
              <p className="text-slate-400 mb-2">Chhattisgarh, India</p>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">2021 – 2024</span>
                <span className="text-blue-400 font-semibold">CPI: 7.50</span>
              </div>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-blue-500 transition-colors">
              <h4 className="text-xl font-bold text-blue-400 mb-2">
                Bachelor of Computer Applications
              </h4>
              <p className="text-lg text-slate-300 mb-1">
                Gossner College, Ranchi
              </p>
              <p className="text-slate-400 mb-2">Jharkhand, India</p>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">2017 – 2020</span>
                <span className="text-blue-400 font-semibold">80.92%</span>
              </div>
            </div>
          </div>
        </div>
      </MotionSection>

      {/* Projects Section */}
      <MotionSection id="projects" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Code className="text-blue-400" size={32} />
            <h3 className="text-4xl font-bold">Projects</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              whileHover={{ scale: 1.02, y: -6 }}
              whileTap={{ scale: 0.995 }}
              className="bg-slate-900 p-6 rounded-lg border border-slate-700 transition-all hover:shadow-lg hover:shadow-blue-500/20"
            >
              <h4 className="text-2xl font-bold text-blue-400 mb-4">
                Simsun Electric
              </h4>
              <ul className="space-y-2 text-slate-300 mb-4">
                <li className="flex gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>
                    Developed a web application with CRUD functionalities,
                    enabling user registration, login, appointment booking, and
                    admin dashboard access.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>
                    Utilized React.js, React Router DOM, Redux, HTML, CSS,
                    Material-UI, and a mock backend for robust functionality.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>
                    Designed a responsive UI from scratch using CSS, ensuring
                    compatibility across devices.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>
                    Implemented JWT and bcrypt for secure authentication,
                    protecting private routes from unauthorized access.
                  </span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                  React.js
                </span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                  Redux
                </span>
                <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm">
                  Material-UI
                </span>
                <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">
                  JWT
                </span>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02, y: -6 }}
              whileTap={{ scale: 0.995 }}
              className="bg-slate-900 p-6 rounded-lg border border-slate-700 transition-all hover:shadow-lg hover:shadow-purple-500/20"
            >
              <h4 className="text-2xl font-bold text-purple-400 mb-4">
                StudyNotion
              </h4>
              <ul className="space-y-2 text-slate-300 mb-4">
                <li className="flex gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>
                    Contributed to an educational platform enabling course
                    enrollment and sales, enhancing user experience and
                    functionality.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>
                    Implemented middleware for input validation and error
                    handling, reducing HTTP 400 errors.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>
                    Collaborated with a team to integrate features, improving
                    platform scalability and performance.
                  </span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                  MERN Stack
                </span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                  Middleware
                </span>
                <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm">
                  API Integration
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </MotionSection>

      {/* Skills Section */}
      <MotionSection id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Code className="text-purple-400" size={32} />
            <h3 className="text-4xl font-bold">Technical Skills</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <h4 className="text-xl font-bold text-blue-400 mb-4">
                Languages
              </h4>
              <div className="flex flex-wrap gap-2">
                {["C", "C++", "HTML", "JavaScript", "TypeScript"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <h4 className="text-xl font-bold text-purple-400 mb-4">
                Frameworks
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "ReactJS",
                  "Express",
                  "Node.js",
                  "Next.js",
                  "Tailwind",
                  "Bootstrap",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <h4 className="text-xl font-bold text-pink-400 mb-4">
                Libraries
              </h4>
              <div className="flex flex-wrap gap-2">
                {["React Router", "Redux", "Redux Toolkit"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <h4 className="text-xl font-bold text-green-400 mb-4">
                Database
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">
                  MySQL
                </span>
              </div>
              <h4 className="text-xl font-bold text-green-400 mb-2 mt-4">
                Core
              </h4>
              <div className="flex flex-wrap gap-2">
                {["OOPS", "DBMS", "OS"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </MotionSection>

      {/* Achievements Section */}
      <MotionSection id="achievements" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Award className="text-yellow-400" size={32} />
            <h3 className="text-4xl font-bold">Achievements</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 p-6 rounded-lg border border-yellow-500/50">
              <div className="text-4xl font-bold text-yellow-400 mb-2">
                750+
              </div>
              <p className="text-slate-300">
                Problems solved on LeetCode, GFG, and CodeStudio
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-6 rounded-lg border border-blue-500/50">
              <div className="text-4xl font-bold text-blue-400 mb-2">
                Rank 1
              </div>
              <p className="text-slate-300">
                College Rank 1 and AIR 1334 in CodeKaze (out of 140K
                participants)
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-6 rounded-lg border border-purple-500/50">
              <div className="text-4xl font-bold text-purple-400 mb-2">985</div>
              <p className="text-slate-300">
                Rank in LeetCode Biweekly Contest 112 (out of 29,000+
                participants)
              </p>
            </div>
          </div>
        </div>
      </MotionSection>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-700">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p>© 2024 Avinash Kumar. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}
