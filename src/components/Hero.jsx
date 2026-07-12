import React, { useState, useEffect } from 'react';

const CountUp = ({ end, duration = 1000 }) => {
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

  return <span>{count}</span>;
};

const Hero = () => {
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
    projects: 15,
    experience: 2,
    clients: 10,
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-12 lg:py-0 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] bg-fuchsia-600/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Content */}
          <div className="lg:col-span-7 order-2 lg:order-1 text-center lg:text-start" data-aos="fade-up" data-aos-delay="100">
            <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-sm font-semibold tracking-wider text-violet-400 mb-6 uppercase">
              Available For Projects
            </span>
            
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-none mb-6">
              Computer Science Student <br />
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent">
                Web &amp; Android Developer
              </span>
            </h1>
            
            <p className="text-base md:text-lg text-slate-400 font-medium max-w-xl mb-8 leading-relaxed mx-auto lg:mx-0">
              I build functional and user-friendly digital solutions using modern web and Android technologies. 
              I enjoy turning ideas into real applications through clean code, problem-solving, and continuous learning.
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12">
              <button 
                onClick={() => handleScrollTo('portfolio')} 
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold tracking-wide hover:from-violet-500 hover:to-fuchsia-500 hover:scale-[1.03] active:scale-[0.98] shadow-lg shadow-violet-600/25 transition-all duration-300 cursor-pointer"
              >
                View My Work
              </button>
              <button 
                onClick={() => handleScrollTo('contact')} 
                className="px-8 py-4 rounded-xl bg-slate-800/80 border border-slate-700/80 text-slate-300 font-semibold tracking-wide hover:text-white hover:bg-slate-700 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 cursor-pointer"
              >
                Get In Touch
              </button>
            </div>

            {/* Stats Panel */}
            <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 bg-slate-900/40 backdrop-blur-md border border-slate-800/80 p-5 rounded-2xl">
              <div className="text-center border-r border-slate-800/80">
                <span className="block text-3xl md:text-4xl font-extrabold text-white">
                  <CountUp end={stats.projects} />+
                </span>
                <span className="text-xs font-semibold text-slate-500 uppercase mt-1 tracking-wider block">Projects</span>
              </div>
              <div className="text-center border-r border-slate-800/80">
                <span className="block text-3xl md:text-4xl font-extrabold text-white">
                  <CountUp end={stats.experience} />+
                </span>
                <span className="text-xs font-semibold text-slate-500 uppercase mt-1 tracking-wider block">Experience</span>
              </div>
              <div className="text-center">
                <span className="block text-3xl md:text-4xl font-extrabold text-white">
                  <CountUp end={stats.clients} />+
                </span>
                <span className="text-xs font-semibold text-slate-500 uppercase mt-1 tracking-wider block">Clients</span>
              </div>
            </div>
          </div>

          {/* Hero Banner Image */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center" data-aos="fade-up" data-aos-delay="200">
            <div className="relative w-72 h-72 md:w-96 md:h-96 group">
              {/* Outer decorative ring */}
              <div className="absolute inset-0 bg-gradient-to-tr from-violet-600 via-fuchsia-600 to-pink-500 rounded-[2.5rem] rotate-6 opacity-30 group-hover:rotate-12 group-hover:opacity-50 transition-all duration-700 blur"></div>
              
              {/* Inner wrapper */}
              <div className="absolute inset-0 bg-slate-800 border-2 border-slate-700/80 rounded-[2.5rem] overflow-hidden rotate-0 group-hover:rotate-2 transition-all duration-700 shadow-2xl">
                <img 
                  src="/assets/img/profile/ban1.jpg" 
                  alt="Hailu Kassa Portfolio" 
                  className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-all duration-700" 
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
