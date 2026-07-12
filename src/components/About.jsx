import React from 'react';

const About = () => {
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

  return (
    <section id="about" className="relative py-24 border-t border-slate-900 bg-slate-950/20 overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-fuchsia-600/5 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          
          {/* Header Title */}
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="text-xs font-bold tracking-widest text-fuchsia-500 uppercase">Introduction</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2">Hi, I'm Hailu Kassa</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Profile Info Side Card */}
            <div className="lg:col-span-4" data-aos="fade-right" data-aos-delay="100">
              <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800/80 rounded-3xl p-6 shadow-xl">
                <div className="relative overflow-hidden rounded-2xl aspect-square border border-slate-800">
                  <img 
                    src="/assets/img/profile/image.png" 
                    className="w-full h-full object-cover" 
                    alt="Hailu Kassa Bio Portrait" 
                  />
                </div>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-3 text-slate-300">
                    <div className="w-8 h-8 rounded-lg bg-violet-600/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
                      <i className="bi bi-geo-alt"></i>
                    </div>
                    <span className="text-sm font-medium">CS Student, AA Ethiopia</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300">
                    <div className="w-8 h-8 rounded-lg bg-emerald-600/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 relative">
                      <span className="absolute w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                      <span className="absolute w-2 h-2 rounded-full bg-emerald-500"></span>
                    </div>
                    <span className="text-sm font-medium">Available for Freelance / Fulltime</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Story & Expertise Panel */}
            <div className="lg:col-span-8 space-y-8" data-aos="fade-left" data-aos-delay="200">
              <div className="bg-slate-900/40 backdrop-blur-md border border-slate-850 p-8 rounded-3xl space-y-6">
                <p className="text-lg md:text-xl text-slate-200 font-semibold leading-relaxed">
                  I build web and Android applications that focus on solving real problems and meeting user needs. 
                  As a Computer Science student, I enjoy turning ideas into functional, efficient, and user-friendly digital solutions.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  My development approach is based on clean code, continuous learning, and practical problem-solving. 
                  I believe good software is not just about technology, but about creating value for users and delivering reliable solutions.
                </p>
              </div>

              {/* Expertise Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                <div className="bg-slate-900/50 hover:bg-slate-900 border border-slate-850 hover:border-violet-500/30 p-6 rounded-2xl transition-all duration-300 group" data-aos="zoom-in" data-aos-delay="300">
                  <div className="w-12 h-12 rounded-xl bg-violet-600/10 border border-violet-500/20 flex items-center justify-center text-violet-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <i className="bi bi-lightbulb text-xl"></i>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Product Strategy</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">User research, journey mapping, and strategic design thinking.</p>
                </div>

                <div className="bg-slate-900/50 hover:bg-slate-900 border border-slate-850 hover:border-fuchsia-500/30 p-6 rounded-2xl transition-all duration-300 group" data-aos="zoom-in" data-aos-delay="350">
                  <div className="w-12 h-12 rounded-xl bg-fuchsia-600/10 border border-fuchsia-500/20 flex items-center justify-center text-fuchsia-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <i className="bi bi-phone text-xl"></i>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Mobile &amp; Web</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">Responsive interfaces and seamless cross-platform user experiences.</p>
                </div>

                <div className="bg-slate-900/50 hover:bg-slate-900 border border-slate-850 hover:border-pink-500/30 p-6 rounded-2xl transition-all duration-300 group" data-aos="zoom-in" data-aos-delay="400">
                  <div className="w-12 h-12 rounded-xl bg-pink-600/10 border border-pink-500/20 flex items-center justify-center text-pink-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <i className="bi bi-graph-up text-xl"></i>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Design Systems</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">Scalable component libraries and brand interface consistency.</p>
                </div>

              </div>
            </div>

          </div>

          {/* Collaboration Bottom Panel */}
          <div className="mt-16 bg-gradient-to-r from-violet-900/30 to-fuchsia-900/30 border border-violet-500/25 p-8 rounded-3xl shadow-lg relative overflow-hidden" data-aos="fade-up" data-aos-delay="250">
            <div className="absolute right-0 top-0 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-center lg:text-start">
              <div className="lg:col-span-8 space-y-2">
                <h3 className="text-2xl font-bold text-white">Let's create something amazing together</h3>
                <p className="text-slate-350 leading-relaxed">Whether you're looking to design an app from scratch, optimize a codebase, or scale a product, I'd love to chat.</p>
              </div>
              <div className="lg:col-span-4 flex justify-center lg:justify-end gap-3 w-full">
                <button 
                  onClick={() => handleScrollTo('portfolio')} 
                  className="px-6 py-3 rounded-xl bg-white text-slate-950 font-bold hover:bg-slate-100 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 cursor-pointer text-sm"
                >
                  View Case Studies
                </button>
                <button 
                  onClick={() => handleScrollTo('contact')} 
                  className="px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 cursor-pointer text-sm border border-violet-500/20"
                >
                  Start a Project
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
