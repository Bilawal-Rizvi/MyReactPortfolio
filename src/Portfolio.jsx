import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Code, Database, Layers, ExternalLink, Menu, X, Award, Briefcase } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'Tailwind CSS', level: 88 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 80 },
    { name: 'Express.js', level: 75 },
    { name: 'MongoDB', level: 78 },
    { name: 'Mongoose', level: 75 }
  ];

  const projects = [
    {
      title: 'Warehouse Management System',
      description: 'A comprehensive full-stack inventory management application featuring shop stoke management, packing records, embroidery details tracking, reports generation, and fabric detail management with CRUD operations.',
      tags: ['React', 'Express.js', 'MongoDB', 'Tailwind CSS'],
      link: 'https://ware-house-mangaement-frontend.vercel.app/',
      features: ['User Authentication', 'Inventory Tracking', 'Export Functionality', 'Real-time Updates']
    },
    {
      title: 'Baroque E-Commerce Clone',
      description: 'A full-stack e-commerce platform clone of Baroque, featuring product listings, shopping cart functionality, user authentication, and a responsive design matching the original brand aesthetic.',
      tags: ['React', 'Node.js', 'Express', 'MongoDB'],
      link: 'https://baroque-frontend-dcdxoi0vk-bilawal-rizvis-projects.vercel.app',
      features: ['Product Catalog', 'Shopping Cart', 'User Auth', 'Responsive Design']
    }
  ];

  const scrollToSection = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                BR
              </span>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors capitalize ${
                      activeSection === section
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
                  >
                    {section}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white capitalize"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Hi, I'm <span className="bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Bilawal Rizvi</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-2">Full-Stack Developer</p>
            <p className="text-lg text-gray-500">Building modern web applications with passion and precision</p>
          </div>
          
          <div className="flex justify-center gap-4 mb-12">
  <a href="https://github.com/Bilawal-Rizvi" target="_blank" rel="noopener noreferrer" 
     className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors">
    <Github size={24} />
  </a>
  <a href="https://linkedin.com/in/bilawal-shah" target="_blank" rel="noopener noreferrer"
     className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors">
    <Linkedin size={24} />
  </a>
  
  {/* Fiverr Icon */}
<a
  href="#"
  target="_blank"
  rel="noopener noreferrer"
  className="p-3 bg-gray-800 rounded-full hover:bg-[#1dbf73] transition-colors"
>
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className="text-white"
  >
    <path d="M14.5 6.5h2V3h-2c-2.8 0-4.5 1.8-4.5 4.6V9H8v3.5h2v8.5h4v-8.5h2.9L17 9h-3V7.9c0-.9.4-1.4 1.5-1.4z"/>
  </svg>
</a>


  <a href="mailto:shahb7404@gmail.com"
     className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors">
    <Mail size={24} />
  </a>
</div>
          
          <button 
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 bg-linear-to-r from-blue-600 to-purple-600 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
          >
            View My Work
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-400">Who I Am</h3>
                <p className="text-gray-300 mb-4">
                  I'm a 16-year-old passionate full-stack developer currently in my 1st year of ICS. I've been coding in JavaScript for 1.5 years and have specialized in React and Express.js for the past 6 months.
                </p>
                <p className="text-gray-300">
                  I love building modern, responsive web applications that solve real-world problems. My journey in web development has been driven by curiosity and a constant desire to learn and improve.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-400">Experience</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Code className="text-purple-400 mt-1" size={20} />
                    <div>
                      <p className="font-semibold">JavaScript Development</p>
                      <p className="text-gray-400 text-sm">1.5 years of experience</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Layers className="text-purple-400 mt-1" size={20} />
                    <div>
                      <p className="font-semibold">React & Express.js</p>
                      <p className="text-gray-400 text-sm">6 months of building projects</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="text-purple-400 mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Certification</p>
                      <p className="text-gray-400 text-sm">Ideoversity (In Progress)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-4xl font-bold mb-12 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-200">{skill.name}</span>
                  <span className="text-blue-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-linear-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <Code className="mx-auto mb-3 text-blue-400" size={32} />
              <h3 className="font-semibold mb-2">Frontend</h3>
              <p className="text-gray-400 text-sm">React, Tailwind CSS, Responsive Design</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <Database className="mx-auto mb-3 text-purple-400" size={32} />
              <h3 className="font-semibold mb-2">Backend</h3>
              <p className="text-gray-400 text-sm">Express.js, Node.js, RESTful APIs</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <Layers className="mx-auto mb-3 text-pink-400" size={32} />
              <h3 className="font-semibold mb-2">Database</h3>
              <p className="text-gray-400 text-sm">MongoDB, Mongoose ODM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all group">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold group-hover:text-blue-400 transition-colors">{project.title}</h3>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" 
                       className="p-2 bg-gray-700 rounded-lg hover:bg-blue-600 transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm border border-blue-600/30">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="text-xl text-gray-400 mb-12">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a href="https://github.com/Bilawal-Rizvi" target="_blank" rel="noopener noreferrer"
               className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all group">
              <Github className="mx-auto mb-3 group-hover:text-blue-400 transition-colors" size={32} />
              <h3 className="font-semibold mb-2">GitHub</h3>
              <p className="text-gray-400 text-sm">Bilawal-Rizvi</p>
            </a>
            
            <a href="https://linkedin.com/in/bilawal-shah" target="_blank" rel="noopener noreferrer"
               className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all group">
              <Linkedin className="mx-auto mb-3 group-hover:text-blue-400 transition-colors" size={32} />
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-400 text-sm">Bilawal Shah</p>
            </a>
            
            <a href="mailto:shahb7404@gmail.com"
               className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all group">
              <Mail className="mx-auto mb-3 group-hover:text-blue-400 transition-colors" size={32} />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-400 text-sm">shahb7404@gmail.com</p>
            </a>
          </div>
          
          <a href="mailto:shahb7404@gmail.com"
             className="inline-block px-8 py-3 bg-linear-to-r from-blue-600 to-purple-600 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all">
            Send Me a Message
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2026 Bilawal Rizvi. Built with React & Tailwind CSS
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Passionate about creating amazing web experiences
          </p>
        </div>
      </footer>
    </div>
  );
}