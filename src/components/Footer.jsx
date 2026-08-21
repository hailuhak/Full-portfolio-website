import React from 'react';

const Footer = ({ darkMode }) => {
   const currentYear = new Date().getFullYear();

   const socialLinks = [
      {
         name: 'GitHub',
         url: 'https://github.com/hailuhak',
         icon: 'bi-github',
      },
      {
         name: 'LinkedIn',
         url: 'https://www.linkedin.com/in/hailu-kassa-87182a377/',
         icon: 'bi-linkedin',
      },
      {
         name: 'Facebook',
         url: 'https://web.facebook.com/profile',
         icon: 'bi-facebook',
      },
      {
         name: 'Instagram',
         url: 'https://instagram.com/hailukassa',
         icon: 'bi-instagram',
      },
      {
         name: 'TikTok',
         url: 'https://tiktok.com/@hailuhak',
         icon: 'bi-tiktok',
      },
      {
         name: 'Telegram',
         url: 'https://t.me/GC_podcast',
         icon: 'bi-telegram',
      },
   ];

   return (
      <footer
         id='footer'
         className={`relative border-t py-8 transition-colors duration-500 ${
            darkMode
               ? 'bg-slate-900 border-slate-800 text-slate-300'
               : 'bg-slate-50 border-slate-200 text-slate-600'
         }`}
      >
         {/* Subtle background glow */}
         <div
            className={`absolute left-1/2 top-0 -translate-x-1/2 w-72 h-24 blur-3xl rounded-full pointer-events-none ${
               darkMode ? 'bg-violet-600/10' : 'bg-violet-500/5'
            }`}
         />

         <div className='relative container mx-auto px-6'>
            {/* Logo */}
            <div className='flex justify-center mb-3'>
               <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center border shadow-sm transition-all duration-300 hover:scale-105 ${
                     darkMode
                        ? 'bg-slate-800 border-slate-700'
                        : 'bg-white border-slate-200'
                  }`}
               >
                  <img
                     src='/assets/img/favicon.png'
                     alt='Hailu Kassa'
                     className='w-6 h-6 object-contain'
                  />
               </div>
            </div>

            {/* Name */}
            <h3
               className={`text-center text-sm md:text-base font-extrabold tracking-[0.2em] transition-colors duration-500 ${
                  darkMode ? 'text-white' : 'text-slate-800'
               }`}
            >
               HAILU KASSA
            </h3>

            {/* Social Links */}
            <div className='flex flex-wrap justify-center gap-2.5 mt-5'>
               {socialLinks.map((social) => (
                  <a
                     key={social.name}
                     href={social.url}
                     target='_blank'
                     rel='noopener noreferrer'
                     aria-label={social.name}
                     title={social.name}
                     className={`w-9 h-9 rounded-lg flex items-center justify-center border transition-all duration-300 hover:-translate-y-1 hover:bg-violet-600 hover:border-violet-600 hover:text-white hover:shadow-md hover:shadow-violet-600/20 ${
                        darkMode
                           ? 'bg-slate-800 border-slate-700 text-slate-300'
                           : 'bg-white border-slate-200 text-slate-600 shadow-sm'
                     }`}
                  >
                     <i className={`bi ${social.icon} text-sm`} />
                  </a>
               ))}
            </div>

            {/* Divider */}
            <div
               className={`w-16 h-px mx-auto my-6 transition-colors duration-500 ${
                  darkMode ? 'bg-slate-700' : 'bg-slate-200'
               }`}
            />

            {/* Bottom section */}
            <div className='flex flex-col md:flex-row items-center justify-between gap-2'>
               {/* Copyright */}
               <p
                  className={`text-[11px] transition-colors duration-500 ${
                     darkMode ? 'text-slate-500' : 'text-slate-500'
                  }`}
               >
                  © {currentYear}{' '}
                  <span
                     className={`font-semibold ${
                        darkMode ? 'text-slate-300' : 'text-slate-700'
                     }`}
                  >
                     Hailu Kassa
                  </span>
                  . All rights reserved.
               </p>

               {/* Built with */}
               <p
                  className={`text-[11px] transition-colors duration-500 ${
                     darkMode ? 'text-slate-600' : 'text-slate-400'
                  }`}
               >
                  Built with React &amp; Tailwind CSS
               </p>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
