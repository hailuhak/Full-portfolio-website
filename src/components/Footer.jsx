import React from 'react';

const Footer = () => {
   const currentYear = new Date().getFullYear();

   const socialLinks = [
      {
         name: 'GitHub',
         url: 'https://github.com/hailuhak',
         icon: 'bi-github',
      },
      {
         name: 'LinkedIn',
         url: 'https://linkedin.com/in/hailukassa',
         icon: 'bi-linkedin',
      },
      {
         name: 'Facebook',
         url: 'https://facebook.com/hailukassa',
         icon: 'bi-facebook',
      },
      {
         name: 'Instagram',
         url: 'https://instagram.com/hailukassa',
         icon: 'bi-instagram',
      },
      {
         name: 'TikTok',
         url: 'https://tiktok.com/@hailukassa',
         icon: 'bi-tiktok',
      },
   ];

   return (
      <footer
         id='footer'
         className='border-t border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 py-6'
      >
         <div className='container mx-auto px-6 text-center'>
            {/* Logo */}
            <div className='flex justify-center mb-3'>
               <img
                  src='/assets/img/favicon.png'
                  alt='Hailu Kassa Logo'
                  className='w-10 h-10 opacity-90 transition duration-300 hover:scale-110'
               />
            </div>

            {/* Name */}
            <h3 className='text-lg font-bold uppercase tracking-[0.3em] text-white'>
               HAILU KASSA
            </h3>

            {/* Professional Text */}
            <p className='mt-2 text-sm text-slate-400 max-w-xl mx-auto'>
               Crafting modern web experiences through clean code and thoughtful
               design.
            </p>

            {/* Social Icons */}
            <div className='flex justify-center gap-3 mt-4'>
               {socialLinks.map((social, index) => (
                  <a
                     key={index}
                     href={social.url}
                     target='_blank'
                     rel='noopener noreferrer'
                     aria-label={social.name}
                     className='flex items-center justify-center w-9 h-9 rounded-full border border-slate-700 bg-slate-800 text-slate-400 transition-all duration-300 hover:bg-violet-600 hover:border-violet-500 hover:text-white hover:-translate-y-1'
                  >
                     <i className={`bi ${social.icon}`}></i>
                  </a>
               ))}
            </div>

            {/* Divider */}
            <div className='w-16 h-px bg-slate-700 mx-auto my-5'></div>

            {/* Copyright */}
            <p className='text-xs text-slate-500'>
               © {currentYear}{' '}
               <span className='text-white font-medium'>Hailu Kassa</span>. All
               rights reserved.
            </p>

            <p className='mt-1 text-xs text-slate-600'>
               Built with React & Tailwind CSS.
            </p>
         </div>
      </footer>
   );
};

export default Footer;
