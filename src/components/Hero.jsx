import React, { useState, useEffect, useRef } from 'react';
import Typed from 'typed.js';

const CountUp = ({ end, duration = 1000, darkMode }) => {
   const [count, setCount] = useState(0);

   useEffect(() => {
      if (end === 0) {
         setCount(0);
         return;
      }
      let start = 0;
      const stepTime = 16;
      const totalSteps = duration / stepTime;
      const increment = end / totalSteps;
      
      const timer = setInterval(() => {
         start += increment;
         if (start >= end) {
            setCount(end);
            clearInterval(timer);
         } else {
            setCount(Math.floor(start));
         }
      }, stepTime);

      return () => clearInterval(timer);
   }, [end, duration]);

   return <span className={darkMode ? 'text-white' : 'text-slate-900'}>{count}</span>;
};

const Hero = ({ darkMode }) => {
   const typedRef = useRef(null);

   useEffect(() => {
      const typed = new Typed(typedRef.current, {
         strings: [
            'Computer Science Student',
            'Fullsatck Developer',
            'Web &amp; Android Developer',
         ],
         typeSpeed: 70,
         backSpeed: 40,
         backDelay: 1500,
         loop: true,
         showCursor: false,
         contentType: 'html',
      });

      return () => typed.destroy();
   }, []);

   const handleScrollTo = (sectionId) => {
      const el = document.getElementById(sectionId);
      if (el) {
         const headerOffset = window.innerWidth < 1024 ? 64 : 0;
         const elementPosition = el.getBoundingClientRect().top + window.scrollY;
         window.scrollTo({
            top: elementPosition - headerOffset,
            behavior: 'smooth'
         });
      }
   };

   const stats = {
      projects: 10,
      experience: 2,
      clients: 0,
   };
  const images = [
     '/assets/img/profile/home.jpg',
     '/assets/img/profile/github1.jpg',
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
     const timer = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
     }, 10000);

     return () => clearInterval(timer);
  }, []);

   return (
      <section
         id='hero'
         className={`relative min-h-screen flex items-center pt-20 pb-10 lg:py-0 overflow-hidden transition-colors duration-500 ${
            darkMode ? 'bg-[#0b0f19] text-slate-300' : 'bg-white text-slate-700'
         }`}
      >
         {/* Background glow effects */}
         <div className='absolute top-1/4 right-1/4 w-72 h-72 bg-violet-600/10 rounded-full blur-[100px] pointer-events-none' />
         <div className='absolute bottom-1/4 left-1/3 w-96 h-96 bg-fuchsia-600/5 rounded-full blur-[120px] pointer-events-none' />

         <div className='container mx-auto px-5 lg:px-10 relative z-10'>
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center'>
               {/* Hero Content */}
               <div
                  className='lg:col-span-7 order-2 lg:order-1 text-center lg:text-left'
                  data-aos='fade-up'
                  data-aos-delay='100'
               >
                  {/* Small introduction */}
                  <div className='mb-4'>
                     <p
                        className={`mt-10 text-xl font-bold tracking-[0.12em] ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}
                     >
                        Hello, I'm{' '}
                        <span className='text-violet-500 dark:text-violet-700'>
                           Hailu Kassa
                        </span>
                     </p>

                     <div className='mt-3 w-24 h-px bg-violet-500/70 mx-auto lg:mx-0' />
                  </div>

                  <h1
                     className={`text-2xl md:text-2xl font-bold tracking-tight leading-relaxed mb-6 ${
                        darkMode ? 'text-white' : 'text-slate-900'
                     }`}
                  >
                     <span className='inline'>I am a </span>
                     <span
                        ref={typedRef}
                        className={`inline  text-violet-600 dark:text-violet-500 min-h-[1.5em]${
                           darkMode ? 'text-violet-400' : 'text-slate-900'
                        }`}
                     />
                  </h1>

                  {/* Description */}
                  <p
                     className={`text-sm md:text-base font-normal max-w-lg mb-8 leading-relaxed mx-auto lg:mx-0 ${
                        darkMode ? 'text-slate-400' : 'text-slate-600'
                     }`}
                  >
                     I build functional and user-friendly digital solutions
                     using modern web and Android technologies. I enjoy turning
                     ideas into real applications through clean code,
                     problem-solving, and continuous learning.
                  </p>

                  {/* Buttons */}
                  <div className='flex flex-wrap justify-center lg:justify-start gap-3 mb-10'>
                     <button
                        onClick={() => handleScrollTo('portfolio')}
                        className='px-6 py-3 rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-sm font-semibold hover:from-violet-500 hover:to-fuchsia-500 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-violet-600/20 transition-all duration-300 cursor-pointer'
                     >
                        View My Work
                     </button>

                     <button
                        onClick={() => handleScrollTo('contact')}
                        className={`px-6 py-3 rounded-lg border text-sm font-semibold transition-all duration-300 cursor-pointer hover:scale-[1.02] active:scale-[0.98] ${
                           darkMode
                              ? 'bg-slate-800/85 border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700'
                              : 'bg-slate-100 border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-200'
                        }`}
                     >
                        Get In Touch
                     </button>
                  </div>

                  {/* Stats Panel */}
                  <div
                     className={`grid grid-cols-3 gap-2 max-w-md mx-auto lg:mx-0 backdrop-blur-md border p-4 rounded-xl shadow-sm ${
                        darkMode
                           ? 'bg-slate-900/40 border-slate-800/80'
                           : 'bg-white/80 border-slate-200'
                     }`}
                  >
                     <div
                        className={`text-center border-r ${darkMode ? 'border-slate-800/80' : 'border-slate-200'}`}
                     >
                        <span className='block text-xl md:text-2xl font-bold'>
                           <CountUp end={stats.projects} darkMode={darkMode} />+
                        </span>
                        <span
                           className={`text-[10px] font-semibold uppercase mt-1 tracking-wider block ${
                              darkMode ? 'text-slate-500' : 'text-slate-400'
                           }`}
                        >
                           Projects
                        </span>
                     </div>

                     <div
                        className={`text-center border-r ${darkMode ? 'border-slate-800/80' : 'border-slate-200'}`}
                     >
                        <span className='block text-xl md:text-2xl font-bold'>
                           <CountUp
                              end={stats.experience}
                              darkMode={darkMode}
                           />
                           +
                        </span>
                        <span
                           className={`text-[10px] font-semibold uppercase mt-1 tracking-wider block ${
                              darkMode ? 'text-slate-500' : 'text-slate-400'
                           }`}
                        >
                           Experience
                        </span>
                     </div>

                     <div className='text-center'>
                        <span className='block text-xl md:text-2xl font-bold'>
                           <CountUp end={stats.clients} darkMode={darkMode} />+
                        </span>
                        <span
                           className={`text-[10px] font-semibold uppercase mt-1 tracking-wider block ${
                              darkMode ? 'text-slate-500' : 'text-slate-400'
                           }`}
                        >
                           Clients
                        </span>
                     </div>
                  </div>
               </div>

               {/* Hero Banner Image */}
               <div
                  className='lg:col-span-5 order-1 lg:order-2 flex justify-center'
                  data-aos='fade-up'
                  data-aos-delay='200'
               >
                  <div className='relative w-64 h-64 md:w-80 md:h-80 lg:w-84 lg:h-84 group'>
                     {/* Top Accent Line */}
                     <div
                        className={`absolute -top-8 left-1/2 -translate-x-1/2 z-20 w-50 h-[4px] rounded-full ${
                           darkMode ? 'bg-violet-400' : 'bg-violet-700'
                        }`}
                     />

                     {/* Top Accent Dot */}
                     <div
                        className={`absolute -top-[34px] left-1/2 -translate-x-1/2 z-20 w-3 h-3 rounded-full ${
                           darkMode ? 'bg-violet-300' : 'bg-violet-800'
                        }`}
                     />

                     {/* Outer Decorative Ring */}
                     <div className='absolute inset-0 bg-gradient-to-tr from-violet-600 via-fuchsia-600 to-pink-500 rounded-[2rem] rotate-6 opacity-30 group-hover:rotate-12 group-hover:opacity-50 transition-all duration-700 blur' />

                     {/* Image Wrapper */}
                     <div
                        className={`absolute inset-0 border-2 rounded-[2rem] overflow-hidden group-hover:rotate-2 transition-all duration-700 shadow-2xl ${
                           darkMode
                              ? 'bg-slate-800 border-slate-700/80'
                              : 'bg-slate-100 border-slate-200'
                        }`}
                     >
                        {/* Image */}
                        <div className='relative w-full h-full overflow-hidden'>
                           <img
                              src={images[currentImage]}
                              alt='Hailu Kassa Portfolio'
                              className='w-full h-full object-cover transition-all duration-1000 ease-in-out'
                           />
                        </div>
                     </div>

                     {/* Bottom Accent Line */}
                     <div
                        className={`absolute -bottom-8 left-1/2 -translate-x-1/2 z-20 w-50 h-[4px] rounded-full ${
                           darkMode ? 'bg-violet-400' : 'bg-violet-700'
                        }`}
                     />

                     {/* Bottom Accent Dot */}
                     <div
                        className={`absolute -bottom-[34px] left-1/2 -translate-x-1/2 z-20 w-3 h-3 rounded-full ${
                           darkMode ? 'bg-violet-300' : 'bg-violet-800'
                        }`}
                     />
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Hero;