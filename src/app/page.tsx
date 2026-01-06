"use client";
import React, { useState } from "react";
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

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id:string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Avinash Kumar
            </h1>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-6">
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
                  className="hover:text-blue-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 flex flex-col gap-3">
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
                  className="text-left hover:text-blue-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h2 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Avinash Kumar
            </h2>
            <p className="text-2xl md:text-3xl text-slate-300 mb-8">
              Software Engineer
            </p>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8">
              MERN Stack Developer specializing in building exceptional digital
              experiences with React, TypeScript, and modern web technologies.
            </p>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <a
                href="mailto:avinashkr130728@gmail.com"
                className="flex items-center gap-2 hover:text-blue-400 transition-colors"
              >
                <Mail size={20} />
                <span>avinashkr130728@gmail.com</span>
              </a>
              <a
                href="tel:9102524714"
                className="flex items-center gap-2 hover:text-blue-400 transition-colors"
              >
                <Phone size={20} />
                <span>9102524714</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={20} />
                <span>Bangalore, India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4">
              <a
                href="#"
                className="p-3 bg-slate-800 rounded-full hover:bg-blue-600 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="#"
                className="p-3 bg-slate-800 rounded-full hover:bg-purple-600 transition-colors"
              >
                <Github size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-slate-800/50">
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
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4">
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
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Code className="text-blue-400" size={32} />
            <h3 className="text-4xl font-bold">Projects</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-900 p-6 rounded-lg border border-slate-700 hover:border-blue-500 transition-all hover:shadow-lg hover:shadow-blue-500/20">
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
            </div>

            <div className="bg-slate-900 p-6 rounded-lg border border-slate-700 hover:border-purple-500 transition-all hover:shadow-lg hover:shadow-purple-500/20">
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
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
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
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4 bg-slate-800/50">
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
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-700">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p>© 2024 Avinash Kumar. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}
