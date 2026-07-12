import React, { useState, useEffect } from 'react';
import AOS from 'aos';

// Import Components
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

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });

    // Remove preloader
    const preloaderTimeout = setTimeout(() => {
      setLoading(false);
    }, 600);

    // Scroll top visibility listener
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(preloaderTimeout);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="bg-[#0b0f19] min-h-screen text-slate-100 selection:bg-violet-500/30 selection:text-white">
      
      {/* Preloader */}
      {loading && (
        <div className="fixed inset-0 bg-[#0b0f19] flex flex-col items-center justify-center z-[99999] transition-all duration-500">
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 rounded-full border-4 border-slate-800"></div>
            <div className="absolute inset-0 rounded-full border-4 border-t-violet-500 border-r-fuchsia-500 animate-spin"></div>
          </div>
          <span className="text-xs font-semibold tracking-widest text-slate-450 uppercase mt-4 animate-pulse">Loading Portfolio</span>
        </div>
      )}

      {/* Navigation Menu */}
      <Header />

      {/* Main Content Area - Shifted left margin on desktop to account for w-72 sidebar */}
      <div className="lg:ml-72 min-h-screen flex flex-col justify-between relative z-10">
        <main className="flex-grow">
          <Hero />
          <About />
          <Skills />
          <Resume />
          <Portfolio />
          <Services />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>

      {/* Scroll Top Button */}
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 w-12 h-12 rounded-xl bg-violet-600/90 hover:bg-violet-500 hover:scale-105 active:scale-95 text-white flex items-center justify-center shadow-lg shadow-violet-600/20 backdrop-blur-md z-40 transition-all duration-300 transform border-0 cursor-pointer
          ${showScrollTop ? 'translate-y-0 opacity-100 pointer-events-auto' : 'translate-y-12 opacity-0 pointer-events-none'}
        `}
        aria-label="Scroll back to top"
      >
        <i className="bi bi-arrow-up-short text-2xl"></i>
      </button>

    </div>
  );
}

export default App;
