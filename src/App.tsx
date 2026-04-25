/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Cpu, 
  Globe, 
  Server, 
  Database,
  ArrowRight,
  ChevronDown,
  Wind,
  Droplets,
  FlaskConical,
  Activity,
  ShieldCheck,
  Binary,
  GraduationCap,
  Award,
  Phone,
  FileText,
  Clock,
  Zap,
  Users,
  Search
} from 'lucide-react';
import { useState, useEffect } from 'react';

const EDUCATION = [
  {
    degree: "BE - Chemical Engineering",
    institution: "Dawood University Of Engineering And Technology",
    period: "2025 - 2029",
    status: "Currently in 2nd Semester, 1st Year",
    items: ["Core Engineering Principles", "Problem Solving", "Process Design Foundation"]
  },
  {
    degree: "Intermediate (Pre-Engineering)",
    institution: "GDC Malir Cantt Karachi",
    period: "2023 - 2025",
    status: "Completed",
    items: ["Advanced Mathematics", "Physics", "Chemistry"]
  }
];

const CERTIFICATIONS = [
  {
    title: "Basics Of Safety Management",
    issuer: "Uniathena",
    year: "2026",
    icon: ShieldCheck
  },
  {
    title: "Foundation Of Data Science",
    issuer: "Analytics Vidhya",
    year: "2025",
    icon: Binary
  }
];

const COMPETENCIES = [
  { label: "Technical", icon: FlaskConical, skills: ["Safety Management", "Chemical Process Calculations", "Excel for Analytics", "Basic MATLAB/Python"] },
  { label: "Soft Skills", icon: Users, skills: ["Quick Thinker", "Team Collaboration", "Effective Communication", "Time Management"] },
  { label: "Operational", icon: Activity, skills: ["Data Science Foundation", "Report Writing", "Attention to Detail", "Problem Solving"] }
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-primary selection:text-white bg-surface overflow-x-hidden text-slate-300">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'py-4 glass' : 'py-8 bg-transparent underline-offset-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col gap-1"
          >
            <span className="text-[10px] tracking-[0.4em] uppercase text-primary font-black">Chemical Engineer</span>
            <span className="text-xl font-black tracking-tighter text-white">MUHAMMAD ASIF</span>
          </motion.div>
          
          <div className="hidden lg:flex gap-12 text-[10px] tracking-[0.2em] uppercase pt-2 font-bold">
            {['About', 'Education', 'Skills', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="hover:text-primary transition-colors hover:cursor-pointer"
              >
                {item}
              </a>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex gap-4"
          >
            <a 
              href="mailto:muhammadasif.s4121@gmail.com"
              className="px-4 py-2 border border-primary/30 text-primary text-[10px] tracking-[0.2em] uppercase hover:bg-primary hover:text-white transition-all font-black"
            >
              Hire Me
            </a>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none -z-0">
          <FlaskConical size={800} strokeWidth={0.5} />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="massive-text text-white mb-10 md:mb-16 font-display select-none"
          >
            <div className="flex flex-col">
              <div className="flex items-baseline gap-2 md:gap-4">
                <span className="text-primary drop-shadow-[0_0_30px_rgba(20,184,166,0.3)]">AI</span>
                <span>DRIVEN</span>
                <span className="text-primary/20 hidden sm:inline">-</span>
              </div>
              <div className="flex items-baseline md:justify-end -mt-1 md:-mt-8 overflow-hidden">
                <span className="text-transparent bg-clip-text bg-gradient-to-l from-primary via-white to-white/80 md:pr-4 inline-block transform hover:skew-x-[-10deg] transition-transform duration-700 cursor-default">
                  CHEM·ENGINEER
                </span>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="hidden md:flex vertical-label h-32 items-center pr-12 text-teal-500 font-black border-r border-white/10"
            >
              Dawood University • BE Chemical 25-29
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="max-w-2xl text-left text-slate-400 text-sm md:text-lg leading-relaxed bg-white/[0.02] border border-white/5 p-8 md:p-10 rounded-2xl backdrop-blur-xl pointer-events-auto"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[2px] w-12 bg-primary" />
                <p className="text-primary font-black tracking-[0.3em] uppercase text-xs">Professional Vision</p>
              </div>
              <p className="text-slate-200 font-medium leading-relaxed">
                Transforming molecular principles into <span className="text-primary font-bold">industrial realities</span>. Currently pioneering my undergraduate studies in Chemical Engineering at Dawood University, I focus on the intersection of process safety, computational simulation, and sustainable engineering. Driven by a commitment to <span className="text-emerald-400">efficiency and innovation</span>, I aim to architect the next generation of chemical systems.
              </p>
            </motion.div>
          </div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-12 text-primary hidden md:block"
        >
          <ChevronDown size={24} />
        </motion.div>
      </section>

      {/* Education & Experience Section */}
      <section id="education" className="py-32 px-6 md:px-12 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end border-b border-white/5 pb-12 mb-20">
            <div>
              <span className="text-[10px] tracking-[0.3em] uppercase text-primary mb-4 block font-black">Academic Timeline</span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">Education</h2>
            </div>
            <div className="text-primary font-bold text-5xl opacity-20">/01</div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {EDUCATION.map((edu, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="project-card p-10 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                  <GraduationCap size={40} className="text-primary" />
                </div>
                <span className="text-[10px] font-mono text-gray-500 mb-4 block tracking-widest">{edu.period}</span>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{edu.degree}</h3>
                <p className="text-primary text-sm font-bold mb-6">{edu.institution}</p>
                <div className="text-xs text-gray-400 mb-8 font-medium uppercase tracking-widest border-l-2 border-primary pl-4">{edu.status}</div>
                
                <div className="flex flex-wrap gap-2">
                  {edu.items.map(item => (
                    <span key={item} className="px-3 py-1 bg-white/[0.03] border border-white/5 text-[9px] uppercase tracking-wider text-gray-400">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Certifications Section */}
      <section id="skills" className="py-32 px-6 md:px-12 border-t border-white/5 bg-surface-light/[0.15]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
            {/* Competencies */}
            <div className="lg:col-span-2">
              <div className="mb-16">
                <span className="text-[10px] tracking-[0.3em] uppercase text-primary mb-4 block font-black">Expertise</span>
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white">Competencies</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {COMPETENCIES.map((item, idx) => (
                  <div key={idx} className="p-8 border border-white/5 bg-surface group hover:border-primary/30 transition-all">
                    <item.icon className="text-primary mb-6" size={24} />
                    <h4 className="text-sm font-black tracking-widest uppercase text-white mb-6 border-b border-white/5 pb-4">{item.label}</h4>
                    <ul className="space-y-3">
                      {item.skills.map(skill => (
                        <li key={skill} className="text-[11px] text-gray-400 flex items-center gap-2 group-hover:text-gray-200 transition-colors uppercase font-medium">
                          <div className="w-1 h-1 bg-primary rounded-full group-hover:scale-150 transition-transform" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="mb-16">
                <span className="text-[10px] tracking-[0.3em] uppercase text-primary mb-4 block font-black">Recognition</span>
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white">Awards</h2>
              </div>
              <div className="space-y-4">
                {CERTIFICATIONS.map((cert, idx) => (
                  <div key={idx} className="p-6 border border-white/5 bg-surface flex items-center gap-6 group hover:border-primary/20 transition-all">
                    <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                      <cert.icon size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-1">{cert.title}</h4>
                      <div className="text-[10px] text-gray-500 uppercase tracking-widest">{cert.issuer} • {cert.year}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-8 border border-dashed border-white/10 rounded-2xl">
                <p className="text-[10px] tracking-[0.2em] uppercase text-gray-500 mb-4 font-bold">Languages</p>
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-white font-bold">ENGLISH</span>
                    <span className="text-primary">FLUENT</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-white font-bold">URDU</span>
                    <span className="text-gray-500">INTERMEDIATE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Stack (HYSYS / Office) */}
      <section className="py-20 px-6 md:px-12 bg-surface">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-12 items-center justify-center opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-1000">
          <div className="flex items-center gap-3">
            <Binary size={24} className="text-primary" />
            <span className="text-xl font-black tracking-tighter text-white">ASPEN HYSYS</span>
          </div>
          <div className="w-[1px] h-4 bg-white/10" />
          <div className="flex items-center gap-3">
            <FileText size={24} className="text-primary" />
            <span className="text-xl font-black tracking-tighter text-white">MS OFFICE</span>
          </div>
          <div className="w-[1px] h-4 bg-white/10" />
          <div className="flex items-center gap-3">
            <Search size={24} className="text-primary" />
            <span className="text-xl font-black tracking-tighter text-white">MATLAB</span>
          </div>
          <div className="w-[1px] h-4 bg-white/10" />
          <div className="flex items-center gap-3">
            <Database size={24} className="text-primary" />
            <span className="text-xl font-black tracking-tighter text-white">PYTHON</span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 md:px-12 bg-surface border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-9xl font-black uppercase tracking-tight leading-[0.8] mb-16 text-white"
            >
              LET&apos;S <br />
              <span className="text-primary italic">OPTIMIZE</span>
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-20">
              <a href="mailto:muhammadasif.s4121@gmail.com" className="p-8 border border-white/5 bg-white/[0.02] flex flex-col items-center gap-4 hover:border-primary/40 transition-all group">
                <Mail className="text-primary group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-black tracking-widest uppercase">Email</span>
                <span className="text-xs font-bold text-white">muhammadasif.s4121@gmail.com</span>
              </a>
              <div className="p-8 border border-white/5 bg-white/[0.02] flex flex-col items-center gap-4">
                <Phone className="text-primary" />
                <span className="text-[10px] font-black tracking-widest uppercase">Phone</span>
                <span className="text-xs font-bold text-white">+92-311-3487394</span>
              </div>
              <a href="https://www.linkedin.com/in/muhammad-asiiif-197785263/" target="_blank" rel="noreferrer" className="p-8 border border-white/5 bg-white/[0.02] flex flex-col items-center gap-4 hover:border-primary/40 transition-all group">
                <Linkedin className="text-primary group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-black tracking-widest uppercase">LinkedIn</span>
                <span className="text-xs font-bold text-white">muhammad-asiiif</span>
              </a>
              <div className="p-8 border border-white/5 bg-white/[0.02] flex flex-col items-center gap-4">
                <Globe className="text-primary" />
                <span className="text-[10px] font-black tracking-widest uppercase">Location</span>
                <span className="text-xs font-bold text-white">Karachi, Pakistan</span>
              </div>
            </div>

            <div className="text-gray-600 text-[10px] tracking-[0.4em] uppercase font-black">
              Undergraduate Engineering Student Portfolio
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 border-t border-white/5 bg-[#080d0d]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[10px] tracking-[0.4em] uppercase text-gray-700 font-bold">
            © 2026 ASIF ENGINEERING • DUET KARACHI
          </div>
          <div className="flex gap-12 text-[10px] tracking-[0.2em] uppercase text-gray-700 font-bold">
            <span className="text-gray-800">|</span>
            <span className="font-mono tracking-normal">SYS_V2.0_CHEMICAL</span>
          </div>
        </div>
      </footer>
    </div>
  );
}


