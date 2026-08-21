import React, { useEffect, useState } from 'react';
import AOS from 'aos';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
   const [loading, setLoading] = useState(true);
   const [showScrollTop, setShowScrollTop] = useState(false);

   // ==============================
   // LOAD SAVED THEME
   // ==============================
   const [darkMode, setDarkMode] = useState(() => {
      const savedTheme = localStorage.getItem('portfolio-theme');

      return savedTheme === 'dark';
   });

   // ==============================
   // INITIALIZE AOS + SCROLL
   // ==============================
   useEffect(() => {
      AOS.init({
         duration: 600,
         easing: 'ease-in-out',
         once: true,
         mirror: false,
      });

      // Preloader
      const preloaderTimeout = setTimeout(() => {
         setLoading(false);
      }, 600);

      // Scroll listener
      const handleScroll = () => {
         setShowScrollTop(window.scrollY > 200);
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
         clearTimeout(preloaderTimeout);
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   // ==============================
   // APPLY THEME
   // ==============================
   useEffect(() => {
      const root = document.documentElement;
      const body = document.body;

      if (darkMode) {
         // Add dark class
         root.classList.add('dark');

         // Body colors
         body.classList.remove('bg-slate-50');
         body.classList.add('bg-slate-800');

         // Save preference
         localStorage.setItem('portfolio-theme', 'dark');
      } else {
         // Remove dark class
         root.classList.remove('dark');

         // Body colors
         body.classList.remove('bg-slate-800');
         body.classList.add('bg-slate-50');

         // Save preference
         localStorage.setItem('portfolio-theme', 'light');
      }
   }, [darkMode]);

   // ==============================
   // TOGGLE THEME
   // ==============================
   const toggleTheme = () => {
      setDarkMode((previousMode) => !previousMode);
   };

   // ==============================
   // SCROLL TO TOP
   // ==============================
   const scrollToTop = (event) => {
      event.preventDefault();

      window.scrollTo({
         top: 0,
         behavior: 'smooth',
      });
   };

   // ==============================
   // MAIN THEME
   // ==============================
   const themeClasses = darkMode
      ? 'bg-slate-800 text-slate-100'
      : 'bg-slate-50 text-slate-700';

   return (
      <div
         className={`
        min-h-screen
        transition-colors
        duration-500
        ${themeClasses}
      `}
      >
         {/* =====================================
          PRELOADER
      ====================================== */}
         {loading && (
            <div
               className={`
            fixed
            inset-0
            z-[99999]
            flex
            flex-col
            items-center
            justify-center
            transition-colors
            duration-500
            ${darkMode ? 'bg-slate-800' : 'bg-slate-50'}
          `}
            >
               {/* Spinner */}
               <div className='relative w-16 h-16'>
                  {/* Outer ring */}
                  <div
                     className={`
                absolute
                inset-0
                rounded-full
                border-4
                ${darkMode ? 'border-slate-600' : 'border-slate-200'}
              `}
                  />

                  {/* Animated ring */}
                  <div
                     className='
                absolute
                inset-0
                rounded-full
                border-4
                border-t-violet-500
                border-r-fuchsia-500
                animate-spin
              '
                  />
               </div>

               {/* Loading text */}
               <span
                  className={`
              mt-4
              text-xs
              font-semibold
              tracking-widest
              uppercase
              animate-pulse
              ${darkMode ? 'text-slate-300' : 'text-slate-500'}
            `}
               >
                  Loading Portfolio
               </span>
            </div>
         )}

         {/* =====================================
          HEADER
      ====================================== */}
         <Header darkMode={darkMode} />

         {/* =====================================
          THEME TOGGLE
      ====================================== */}
         <button
            type='button'
            onClick={toggleTheme}
            className={`
          fixed
          top-5
          right-5
          z-[9999]

          w-11
          h-11

          rounded-full

          flex
          items-center
          justify-center

          border
          shadow-md

          transition-all
          duration-300

          hover:scale-105
          active:scale-95

          ${
             darkMode
                ? `
                bg-slate-700
                border-slate-500/60
                text-yellow-300
                hover:bg-slate-600
              `
                : `
                bg-white
                border-slate-200
                text-slate-700
                hover:bg-slate-100
              `
          }
        `}
            aria-label={
               darkMode ? 'Switch to light mode' : 'Switch to dark mode'
            }
            title={darkMode ? 'Light Mode' : 'Dark Mode'}
         >
            <i
               className={`
            bi
            text-lg
            ${darkMode ? 'bi-sun-fill' : 'bi-moon-fill'}
          `}
            />
         </button>

         {/* =====================================
          MAIN CONTENT
      ====================================== */}
         <div
            className='
          lg:ml-72
          min-h-screen
          flex
          flex-col
          justify-between
          relative
          z-10
        '
         >
            <main className='flex-grow'>
               <Hero darkMode={darkMode} />

               <About darkMode={darkMode} />

               <Skills darkMode={darkMode} />

               <Resume darkMode={darkMode} />

               <Portfolio darkMode={darkMode} />

               <Services darkMode={darkMode} />

               <Testimonials darkMode={darkMode} />

               <Contact darkMode={darkMode} />
            </main>

            <Footer darkMode={darkMode} />
         </div>

         {/* =====================================
          SCROLL TO TOP
      ====================================== */}
         <button
            type='button'
            onClick={scrollToTop}
            className={`
          fixed
          bottom-6
          right-6

          w-11
          h-11

          rounded-xl

          bg-violet-600/90
          hover:bg-violet-500

          hover:scale-105
          active:scale-95

          text-white

          flex
          items-center
          justify-center

          shadow-lg
          shadow-violet-600/20

          backdrop-blur-md

          z-40

          transition-all
          duration-300

          ${
             showScrollTop
                ? `
                translate-y-0
                opacity-100
                pointer-events-auto
              `
                : `
                translate-y-12
                opacity-0
                pointer-events-none
              `
          }
        `}
            aria-label='Scroll back to top'
         >
            <i className='bi bi-arrow-up-short text-2xl' />
         </button>
      </div>
   );
}

export default App;
