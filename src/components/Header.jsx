import React, { useState, useEffect } from 'react';

const NAV_LINKS = [
   { id: 'hero', label: 'Home', icon: 'bi-house' },
   { id: 'about', label: 'About', icon: 'bi-person' },
   { id: 'skills', label: 'Skills', icon: 'bi-tools' },
   { id: 'resume', label: 'Resume', icon: 'bi-file-earmark-text' },
   { id: 'portfolio', label: 'Portfolio', icon: 'bi-images' },
   { id: 'services', label: 'Services', icon: 'bi-hdd-stack' },
   { id: 'contact', label: 'Contact', icon: 'bi-envelope' },
];

const SOCIAL_LINKS = [
   {
      href: 'https://t.me/yourtelegram',
      icon: 'bi-telegram',
      label: 'Telegram',
   },
   {
      href: 'https://facebook.com/yourfacebook',
      icon: 'bi-facebook',
      label: 'Facebook',
   },
   {
      href: 'https://linkedin.com/in/yourlinkedin',
      icon: 'bi-linkedin',
      label: 'LinkedIn',
   },
];

const Header = ({ darkMode }) => {
   const [isOpen, setIsOpen] = useState(false);
   const [activeSection, setActiveSection] = useState('hero');

   const toggleMenu = () => setIsOpen((prev) => !prev);

   const handleNavClick = (sectionId) => {
      setIsOpen(false);
      const element = document.getElementById(sectionId);

      if (element) {
         const headerOffset = 64;
         const elementPosition =
            element.getBoundingClientRect().top + window.scrollY;
         const offsetPosition =
            elementPosition - (window.innerWidth < 1024 ? headerOffset : 0);

         window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
         });
      }
   };

   useEffect(() => {
      const handleScroll = () => {
         const sections = NAV_LINKS.map((link) => link.id);
         const scrollPosition = window.scrollY + 200;

         for (const section of sections) {
            const element = document.getElementById(section);
            if (element) {
               const top = element.offsetTop;
               const height = element.offsetHeight;

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

   const themeStyles = darkMode
      ? {
           bg: 'bg-[#0b0f19]/95 text-white',
           border: 'border-slate-800',
           textMuted: 'text-slate-400 hover:text-white hover:bg-slate-800/40',
           socialBg:
              'bg-slate-800 border-slate-700 text-slate-400 hover:text-white hover:border-violet-500 hover:bg-violet-600/10',
           backdrop: 'bg-black/60',
        }
      : {
           bg: 'bg-white/95 text-slate-900',
           border: 'border-slate-200',
           textMuted: 'text-slate-600 hover:text-slate-900 hover:bg-slate-100',
           socialBg:
              'bg-slate-50 border-slate-200 text-slate-500 hover:text-violet-600 hover:border-violet-400 hover:bg-violet-50',
           backdrop: 'bg-slate-900/20',
        };

   return (
      <>
         {/* Mobile Top Bar */}
         <div
            className={`lg:hidden w-full h-16 fixed top-0 left-0 flex items-center justify-between px-5 z-50 backdrop-blur-md border-b transition-colors duration-300 ${themeStyles.bg} ${themeStyles.border}`}
         >
            <a
               href='#hero'
               onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('hero');
               }}
               className='text-lg font-bold tracking-wide'
            >
               Hailu Kassa
            </a>

            <button
               type='button'
               onClick={toggleMenu}
               className={`text-2xl transition-colors duration-200 focus:outline-none ${darkMode ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}
               aria-label='Toggle navigation menu'
            >
               <i className={`bi ${isOpen ? 'bi-x' : 'bi-list'}`} />
            </button>
         </div>

         {/* Sidebar */}
         <aside
            className={`fixed top-0 left-0 h-screen w-72 flex flex-col justify-between p-6 z-40 border-r backdrop-blur-xl transition-all duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} ${themeStyles.bg} ${themeStyles.border}`}
         >
            {/* Profile */}
            <div className='flex flex-col items-center justify-center gap-2 mt-6 lg:mt-2'>
               {/* Name */}
               <div className='relative inline-block pb-1'>
                  <h2
                     className={`text-xl md:text-2xl font-bold italic tracking-wide ${
                        darkMode ? 'text-white' : 'text-slate-900'
                     }`}
                  >
                     <span
                        className={`text-2xl md:text-3xl ${
                           darkMode ? 'text-violet-400' : 'text-violet-600'
                        }`}
                     >
                        H
                     </span>
                     ailuhak
                  </h2>

                  {/* Professional Accent */}
                  <div
                     className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-12 rounded-full ${
                        darkMode ? 'bg-violet-400' : 'bg-violet-600'
                     }`}
                  />

                  {/* Small Accent Dot */}
                  <div
                     className={`absolute -bottom-[3px] left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${
                        darkMode ? 'bg-violet-300' : 'bg-violet-700'
                     }`}
                  />
               </div>

               {/* Subtitle */}
               <span className='text-[10px] font-bold tracking-[0.25em] uppercase px-2.5 py-1 rounded-md bg-violet-600/90 text-white shadow-sm'>
                  CS
               </span>
            </div>

            {/* Navigation */}
            <nav className='my-6 flex-grow flex flex-col justify-center'>
               <ul className='space-y-1'>
                  {NAV_LINKS.map((link) => {
                     const isActive = activeSection === link.id;
                     return (
                        <li key={link.id}>
                           <a
                              href={`#${link.id}`}
                              onClick={(e) => {
                                 e.preventDefault();
                                 handleNavClick(link.id);
                              }}
                              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium tracking-wide transition-all duration-300 group ${
                                 isActive
                                    ? 'bg-violet-500/10 text-violet-500 border-l-2 border-violet-500 pl-2.5'
                                    : themeStyles.textMuted
                              }`}
                           >
                              <i
                                 className={`bi ${link.icon} text-base transition-transform duration-300 group-hover:scale-110 ${isActive ? 'text-violet-500' : darkMode ? 'text-slate-500 group-hover:text-slate-300' : 'text-slate-400 group-hover:text-slate-700'}`}
                              />
                              <span>{link.label}</span>
                           </a>
                        </li>
                     );
                  })}
               </ul>
            </nav>

            {/* Social Links */}
            <div
               className={`flex justify-center gap-3 border-t pt-5 ${darkMode ? 'border-slate-800/70' : 'border-slate-200'}`}
            >
               {SOCIAL_LINKS.map((social) => (
                  <a
                     key={social.label}
                     href={social.href}
                     target='_blank'
                     rel='noopener noreferrer'
                     aria-label={social.label}
                     className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300 ${themeStyles.socialBg}`}
                  >
                     <i className={`bi ${social.icon} text-base`} />
                  </a>
               ))}
            </div>
         </aside>

         {/* Mobile Backdrop */}
         {isOpen && (
            <div
               onClick={toggleMenu}
               className={`fixed inset-0 z-30 lg:hidden backdrop-blur-sm ${themeStyles.backdrop}`}
            />
         )}
      </>
   );
};

export default Header;
