import React from 'react';

const About = () => {
   const handleScrollTo = (sectionId) => {
      const el = document.getElementById(sectionId);
      if (el) {
         const headerOffset = window.innerWidth < 1024 ? 64 : 0;
         const elementPosition =
            el.getBoundingClientRect().top + window.scrollY;
         window.scrollTo({
            top: elementPosition - headerOffset,
            behavior: 'smooth',
         });
      }
   };

   return (
      <section
         id='about'
         className='relative py-24 border-t border-slate-900 bg-slate-950/20 overflow-hidden'
      >
         {/* Soft background glow */}
         <div className='absolute top-1/2 left-10 w-96 h-96 bg-fuchsia-600/5 rounded-full blur-[130px] pointer-events-none'></div>

         <div className='container mx-auto px-6 lg:px-12 relative z-10'>
            <div className='max-w-5xl mx-auto'>
               {/* Header Title */}
               <div className='text-center mb-16' data-aos='fade-up'>
                  <span className='text-xs font-bold tracking-widest text-fuchsia-500 uppercase'>
                     Introduction
                  </span>
                  <h2 className='text-3xl md:text-4xl font-extrabold text-white mt-2'>
                     Hi, I'm Hailu Kassa
                  </h2>
                  <div className='w-16 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto mt-4 rounded-full'></div>
               </div>

               <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 items-start'>
                  {/* Profile Info Side Card */}
                  <div
                     className='lg:col-span-4'
                     data-aos='fade-right'
                     data-aos-delay='100'
                  >
                     <div className='bg-slate-900/60 backdrop-blur-md border border-slate-800/80 rounded-3xl p-6 shadow-xl'>
                        <div className='relative overflow-hidden rounded-2xl aspect-square border border-slate-800'>
                           <img
                              src='/assets/img/profile/image.png'
                              className='w-full h-full object-cover'
                              alt='Hailu Kassa Bio Portrait'
                           />
                        </div>
                        <div className='mt-6 space-y-4'>
                           <div className='flex items-center gap-3 text-slate-300'>
                              <div className='w-8 h-8 rounded-lg bg-violet-600/10 border border-violet-500/20 flex items-center justify-center text-violet-400'>
                                 <i className='bi bi-geo-alt'></i>
                              </div>
                              <span className='text-sm font-medium'>
                                 CS Student, AA Ethiopia
                              </span>
                           </div>
                           <div className='flex items-center gap-3 text-slate-300'>
                              <div className='w-8 h-8 rounded-lg bg-emerald-600/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 relative'>
                                 <span className='absolute w-2 h-2 rounded-full bg-emerald-500 animate-ping'></span>
                                 <span className='absolute w-2 h-2 rounded-full bg-emerald-500'></span>
                              </div>
                              <span className='text-sm font-medium'>
                                 Available for Freelance / Fulltime
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Story & Expertise Panel */}
                  <div
                     className='lg:col-span-8 space-y-8'
                     data-aos='fade-left'
                     data-aos-delay='200'
                  >
                     <div className='bg-slate-900/40 backdrop-blur-md border border-slate-850 p-8 rounded-3xl space-y-6'>
                        <p className='text-lg md:text-xl text-slate-200 font-semibold leading-relaxed'>
                           I build web and Android applications that focus on
                           solving real problems and meeting user needs. As a
                           Computer Science student, I enjoy turning ideas into
                           functional, efficient, and user-friendly digital
                           solutions.
                        </p>
                        <p className='text-slate-400 leading-relaxed'>
                           My development approach is based on clean code,
                           continuous learning, and practical problem-solving. I
                           believe good software is not just about technology,
                           but about creating value for users and delivering
                           reliable solutions.
                        </p>
                     </div>

                     {/* Expertise Grid */}
                     <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                        <div
                           className='bg-slate-900/50 hover:bg-slate-900 border border-slate-850 hover:border-violet-500/30 p-6 rounded-2xl transition-all duration-300 group'
                           data-aos='zoom-in'
                           data-aos-delay='300'
                        >
                           <div className='w-12 h-12 rounded-xl bg-violet-600/10 border border-violet-500/20 flex items-center justify-center text-violet-400 mb-4 group-hover:scale-110 transition-transform duration-300'>
                              <i className='bi bi-lightbulb text-xl'></i>
                           </div>
                           <h4 className='text-lg font-bold text-white mb-2'>
                              Product Strategy
                           </h4>
                           <p className='text-sm text-slate-400 leading-relaxed'>
                              User research, journey mapping, and strategic
                              design thinking.
                           </p>
                        </div>

                        <div
                           className='bg-slate-900/50 hover:bg-slate-900 border border-slate-850 hover:border-fuchsia-500/30 p-6 rounded-2xl transition-all duration-300 group'
                           data-aos='zoom-in'
                           data-aos-delay='350'
                        >
                           <div className='w-12 h-12 rounded-xl bg-fuchsia-600/10 border border-fuchsia-500/20 flex items-center justify-center text-fuchsia-400 mb-4 group-hover:scale-110 transition-transform duration-300'>
                              <i className='bi bi-phone text-xl'></i>
                           </div>
                           <h4 className='text-lg font-bold text-white mb-2'>
                              Mobile &amp; Web
                           </h4>
                           <p className='text-sm text-slate-400 leading-relaxed'>
                              Responsive interfaces and seamless cross-platform
                              user experiences.
                           </p>
                        </div>

                        <div
                           className='bg-slate-900/50 hover:bg-slate-900 border border-slate-850 hover:border-pink-500/30 p-6 rounded-2xl transition-all duration-300 group'
                           data-aos='zoom-in'
                           data-aos-delay='400'
                        >
                           <div className='w-12 h-12 rounded-xl bg-pink-600/10 border border-pink-500/20 flex items-center justify-center text-pink-400 mb-4 group-hover:scale-110 transition-transform duration-300'>
                              <i className='bi bi-graph-up text-xl'></i>
                           </div>
                           <h4 className='text-lg font-bold text-white mb-2'>
                              Design Systems
                           </h4>
                           <p className='text-sm text-slate-400 leading-relaxed'>
                              Scalable component libraries and brand interface
                              consistency.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Collaboration Bottom Panel */}
               {/* Collaboration CTA Section */}
               <div
                  className='
    mt-20
    relative
    overflow-hidden
    rounded-3xl
    border
    border-violet-500/20
    bg-gradient-to-br
    from-violet-950/40
    via-slate-900/60
    to-fuchsia-950/40
    p-8
    md:p-12
    shadow-2xl
  '
                  data-aos='fade-up'
                  data-aos-delay='250'
               >
                  {/* Decorative Glow */}
                  <div
                     className='
      absolute
      -top-20
      -right-20
      w-80
      h-80
      rounded-full
      bg-violet-500/10
      blur-[100px]
      pointer-events-none
    '
                  ></div>

                  <div
                     className='
      absolute
      -bottom-20
      -left-20
      w-72
      h-72
      rounded-full
      bg-fuchsia-500/10
      blur-[100px]
      pointer-events-none
    '
                  ></div>

                  <div
                     className='
      relative
      z-10
      flex
      flex-col
      lg:flex-row
      items-center
      justify-between
      gap-10
    '
                  >
                     {/* Content Area */}
                     <div
                        className='
        max-w-xl
        text-center
        lg:text-left
      '
                     >
                        <span
                           className='
          inline-block
          mb-4
          text-xs
          font-bold
          tracking-[0.3em]
          uppercase
          text-violet-400
        '
                        >
                           Let's Work Together
                        </span>

                        <h3
                           className='
          text-3xl
          md:text-4xl
          font-extrabold
          text-white
          leading-tight
        '
                        >
                           Let's create something
                           <span className='text-violet-400'>
                              {' '}
                              amazing
                           </span>{' '}
                           together
                        </h3>

                        <p
                           className='
          mt-5
          text-slate-400
          text-base
          md:text-lg
          leading-relaxed
        '
                        >
                           I enjoy building modern web applications, solving
                           real-world problems, and creating digital experiences
                           that are fast, responsive, and user-friendly.
                        </p>
                     </div>

                     {/* Button Area */}
                     <div
                        className='
        flex
        flex-col
        sm:flex-row
        lg:flex-col
        gap-4
        w-full
        sm:w-auto
      '
                     >
                        {/* Resume Buttons Group */}
                        <div
                           className='
          flex
          flex-col
          sm:flex-row
          gap-3
        '
                        >
                           {/* View Resume */}
                           <a
                              href='/Hailu_Kassa_Resume.pdf'
                              target='_blank'
                              rel='noopener noreferrer'
                              className='
            min-w-[170px]
            px-6
            py-3.5
            rounded-xl
            bg-white
            text-slate-950
            font-semibold
            text-sm
            flex
            justify-center
            items-center
            gap-2
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-xl
          '
                           >
                              <i className='bi bi-eye'></i>
                              View Resume
                           </a>

                           {/* Download Resume */}
                           <a
                              href='/Hailu_Kassa_Resume.pdf'
                              download='Hailu_Kassa_Resume.pdf'
                              className='
            min-w-[170px]
            px-6
            py-3.5
            rounded-xl
            bg-emerald-600
            hover:bg-emerald-500
            text-white
            font-semibold
            text-sm
            flex
            justify-center
            items-center
            gap-2
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-xl
          '
                           >
                              <i className='bi bi-download'></i>
                              Download CV
                           </a>
                        </div>

                        {/* Project Buttons */}
                        <div
                           className='
          flex
          flex-col
          sm:flex-row
          gap-3
        '
                        >
                           {/* Projects */}
                           <button
                              onClick={() => handleScrollTo('portfolio')}
                              className='
            min-w-[170px]
            px-6
            py-3.5
            rounded-xl
            border
            border-violet-500/40
            bg-violet-600/20
            hover:bg-violet-600
            text-white
            font-semibold
            text-sm
            flex
            justify-center
            items-center
            gap-2
            transition-all
            duration-300
            hover:-translate-y-1
            cursor-pointer
          '
                           >
                              <i className='bi bi-code-square'></i>
                              View Projects
                           </button>

                           {/* Contact */}
                           <button
                              onClick={() => handleScrollTo('contact')}
                              className='
            min-w-[170px]
            px-6
            py-3.5
            rounded-xl
            bg-gradient-to-r
            from-fuchsia-600
            to-violet-600
            hover:from-fuchsia-500
            hover:to-violet-500
            text-white
            font-semibold
            text-sm
            flex
            justify-center
            items-center
            gap-2
            transition-all
            duration-300
            hover:-translate-y-1
            cursor-pointer
          '
                           >
                              <i className='bi bi-chat-dots'></i>
                              Start a Project
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default About;
