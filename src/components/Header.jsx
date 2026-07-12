import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (sectionId) => {
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      // Offset for mobile sticky header
      const headerOffset = 64; 
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - (window.innerWidth < 1024 ? headerOffset : 0);

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'resume', 'portfolio', 'services', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Home', icon: 'bi-house' },
    { id: 'about', label: 'About', icon: 'bi-person' },
    { id: 'skills', label: 'Skills', icon: 'bi-tools' },
    { id: 'resume', label: 'Resume', icon: 'bi-file-earmark-text' },
    { id: 'portfolio', label: 'Portfolio', icon: 'bi-images' },
    { id: 'services', label: 'Services', icon: 'bi-hdd-stack' },
    { id: 'contact', label: 'Contact', icon: 'bi-envelope' }
  ];

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="lg:hidden w-full h-16 fixed top-0 left-0 bg-[#0b0f19]/90 backdrop-blur-md border-b border-slate-800/80 flex items-center justify-between px-6 z-50">
        <a href="#hero" onClick={(e) => { e.preventDefault(); handleNavClick('hero'); }} className="text-xl font-bold tracking-wide text-white">
          Hailu Kassa
        </a>
        <button 
          onClick={toggleMenu} 
          className="text-2xl text-slate-300 hover:text-white transition-colors duration-200 z-50 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          <i className={`bi ${isOpen ? 'bi-x' : 'bi-list'}`}></i>
        </button>
      </div>

      {/* Sidebar Navigation */}
      <aside className={`fixed top-0 left-0 h-screen w-72 bg-[#0b0f19]/80 backdrop-blur-xl border-r border-slate-800/80 text-slate-200 flex flex-col justify-between p-8 z-40 transition-all duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Profile Card */}
        <div className="flex flex-col items-center text-center mt-8 lg:mt-4">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-500"></div>
            <img 
              src="/assets/img/profile/hak.png" 
              alt="Hailu Kassa" 
              className="relative w-32 h-32 rounded-full object-cover border-2 border-slate-800"
            />
          </div>
          <h2 className="mt-4 text-2xl font-bold text-white tracking-wide">Hailu Kassa</h2>
          <span className="text-xs font-semibold tracking-wider text-fuchsia-500 uppercase mt-1">CS Student &amp; Dev</span>
        </div>

        {/* Navigation Menu */}
        <nav className="my-8 flex-grow flex flex-col justify-center">
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.id); }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium tracking-wide transition-all duration-300 group
                    ${activeSection === link.id 
                      ? 'bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 text-white border-l-4 border-fuchsia-500 pl-3' 
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/30'
                    }
                  `}
                >
                  <i className={`bi ${link.icon} text-lg transition-transform duration-300 group-hover:scale-110 ${activeSection === link.id ? 'text-fuchsia-400' : 'text-slate-500 group-hover:text-slate-300'}`}></i>
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer Social Links */}
        <div className="flex justify-center gap-4 border-t border-slate-800/60 pt-6">
          <a href="https://t.me/yourtelegram" className="w-10 h-10 rounded-full bg-slate-850 border border-slate-800 flex items-center justify-content-center text-slate-400 hover:text-white hover:border-violet-500 hover:bg-violet-600/10 transition-all duration-300" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-telegram text-lg"></i>
          </a>
          <a href="https://facebook.com/yourfacebook" className="w-10 h-10 rounded-full bg-slate-850 border border-slate-800 flex items-center justify-content-center text-slate-400 hover:text-white hover:border-violet-500 hover:bg-violet-600/10 transition-all duration-300" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-facebook text-lg"></i>
          </a>
          <a href="https://linkedin.com/in/yourlinkedin" className="w-10 h-10 rounded-full bg-slate-850 border border-slate-800 flex items-center justify-content-center text-slate-400 hover:text-white hover:border-violet-500 hover:bg-violet-600/10 transition-all duration-300" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-linkedin text-lg"></i>
          </a>
        </div>
      </aside>

      {/* Backdrop for mobile drawer */}
      {isOpen && (
        <div 
          onClick={toggleMenu} 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 lg:hidden"
        ></div>
      )}
    </>
  );
};

export default Header;
