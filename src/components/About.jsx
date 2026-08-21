import React from 'react';

const About = ({ darkMode }) => {
   const handleScrollTo = (sectionId) => {
      const element = document.getElementById(sectionId);

      if (element) {
         const headerOffset = window.innerWidth < 1024 ? 64 : 0;
         const elementPosition =
            element.getBoundingClientRect().top + window.scrollY;

         window.scrollTo({
            top: elementPosition - headerOffset,
            behavior: 'smooth',
         });
      }
   };

   const technologies = [
      'React',
      'JavaScript',
      'Node.js',
      'Express',
      'Prisma',
      'PostgreSQL',
      'Android',
   ];

   const expertise = [
      {
         icon: 'bi-code-slash',
         title: 'Web Development',
         description: 'Building responsive and user-friendly web applications.',
         color: darkMode
            ? 'bg-violet-500/10 text-violet-400'
            : 'bg-violet-50 text-violet-600',
         hover: darkMode
            ? 'hover:border-violet-500/40'
            : 'hover:border-violet-300',
      },
      {
         icon: 'bi-phone',
         title: 'Android Development',
         description:
            'Creating practical mobile applications with clean interfaces.',
         color: darkMode
            ? 'bg-fuchsia-500/10 text-fuchsia-400'
            : 'bg-fuchsia-50 text-fuchsia-600',
         hover: darkMode
            ? 'hover:border-fuchsia-500/40'
            : 'hover:border-fuchsia-300',
      },
      {
         icon: 'bi-lightbulb',
         title: 'Problem Solving',
         description:
            'Turning real-world challenges into practical software solutions.',
         color: darkMode
            ? 'bg-pink-500/10 text-pink-400'
            : 'bg-pink-50 text-pink-600',
         hover: darkMode ? 'hover:border-pink-500/40' : 'hover:border-pink-300',
      },
   ];

   return (
      <section
         id='about'
         className={`relative overflow-hidden py-16 md:py-20 transition-colors duration-500 ${
            darkMode
               ? 'bg-[#0b0f19] text-slate-100'
               : 'bg-slate-50 text-slate-900'
         }`}
      >
         {/* Background decoration */}
         <div
            className={`absolute -top-20 -left-20 w-72 h-72 rounded-full blur-[120px] pointer-events-none ${
               darkMode ? 'bg-violet-600/10' : 'bg-violet-400/10'
            }`}
         />

         <div
            className={`absolute -bottom-20 -right-20 w-72 h-72 rounded-full blur-[120px] pointer-events-none ${
               darkMode ? 'bg-fuchsia-600/10' : 'bg-fuchsia-400/10'
            }`}
         />

         <div className='container mx-auto px-5 sm:px-6 lg:px-12 relative z-10'>
            <div className='max-w-4xl mx-auto'>
               {/* Section Header */}
               <div className='text-center mb-10' data-aos='fade-up'>
                  <span
                     className={`text-[10px] font-bold tracking-[0.25em] uppercase ${
                        darkMode ? 'text-violet-400' : 'text-violet-600'
                     }`}
                  >
                     About Me
                  </span>

                  <h2
                     className={`mt-2 text-2xl md:text-3xl font-bold tracking-tight ${
                        darkMode ? 'text-white' : 'text-slate-900'
                     }`}
                  >
                     A Little About Me
                  </h2>

                  <div
                     className={`w-12 h-[2px] mx-auto mt-3 rounded-full ${
                        darkMode ? 'bg-violet-400' : 'bg-violet-600'
                     }`}
                  />
               </div>

               {/* Main About Content */}
               <div
                  className={`rounded-2xl border p-6 md:p-8 transition-colors duration-500 ${
                     darkMode
                        ? 'bg-slate-900/50 border-slate-800'
                        : 'bg-white border-slate-200 shadow-sm'
                  }`}
                  data-aos='fade-up'
                  data-aos-delay='100'
               >
                  <div className='max-w-3xl mx-auto'>
                     {/* Introduction */}
                     <p
                        className={`text-sm md:text-base leading-7 ${
                           darkMode ? 'text-slate-300' : 'text-slate-600'
                        }`}
                     >
                        I am{' '}
                        <span
                           className={`font-semibold ${
                              darkMode ? 'text-white' : 'text-slate-900'
                           }`}
                        >
                           Hailu Kassa
                        </span>
                        , a Computer Science student and software developer
                        passionate about building modern, practical, and
                        user-focused applications. I enjoy transforming ideas
                        and real-world problems into clean and reliable digital
                        solutions, with a particular interest in{' '}
                        <span
                           className={`font-semibold ${
                              darkMode ? 'text-violet-400' : 'text-violet-600'
                           }`}
                        >
                           web and Android development
                        </span>
                        .
                     </p>

                     <p
                        className={`mt-4 text-sm md:text-base leading-7 ${
                           darkMode ? 'text-slate-400' : 'text-slate-600'
                        }`}
                     >
                        My development journey has given me experience with both
                        frontend and backend technologies. I work with modern
                        tools such as React, JavaScript, Node.js, Express,
                        Prisma, and PostgreSQL, while continuously expanding my
                        knowledge through hands-on projects and problem solving.
                     </p>

                     <p
                        className={`mt-4 text-sm md:text-base leading-7 ${
                           darkMode ? 'text-slate-400' : 'text-slate-600'
                        }`}
                     >
                        I value clean code, responsive design, continuous
                        learning, and building software that is simple to use
                        and meaningful to the people who use it.
                     </p>

                     {/* Technologies */}
                     <div className='flex flex-wrap gap-2 mt-6'>
                        {technologies.map((technology) => (
                           <span
                              key={technology}
                              className={`px-2.5 py-1 rounded-md text-[10px] font-medium border transition-colors ${
                                 darkMode
                                    ? 'bg-slate-800/70 text-slate-300 border-slate-700'
                                    : 'bg-slate-50 text-slate-600 border-slate-200'
                              }`}
                           >
                              {technology}
                           </span>
                        ))}
                     </div>
                  </div>
               </div>

               {/* Personal Information */}
               <div
                  className='grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4'
                  data-aos='fade-up'
                  data-aos-delay='150'
               >
                  {/* Location */}
                  <div
                     className={`flex items-center gap-3 rounded-xl border px-4 py-3 ${
                        darkMode
                           ? 'bg-slate-900/40 border-slate-800'
                           : 'bg-white border-slate-200'
                     }`}
                  >
                     <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                           darkMode
                              ? 'bg-violet-500/10 text-violet-400'
                              : 'bg-violet-50 text-violet-600'
                        }`}
                     >
                        <i className='bi bi-geo-alt text-sm' />
                     </div>

                     <div>
                        <p
                           className={`text-[9px] uppercase tracking-wider ${
                              darkMode ? 'text-slate-500' : 'text-slate-400'
                           }`}
                        >
                           Location
                        </p>

                        <p
                           className={`text-xs font-semibold ${
                              darkMode ? 'text-slate-200' : 'text-slate-700'
                           }`}
                        >
                           Addis Ababa, Ethiopia
                        </p>
                     </div>
                  </div>

                  {/* Education */}
                  <div
                     className={`flex items-center gap-3 rounded-xl border px-4 py-3 ${
                        darkMode
                           ? 'bg-slate-900/40 border-slate-800'
                           : 'bg-white border-slate-200'
                     }`}
                  >
                     <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                           darkMode
                              ? 'bg-blue-500/10 text-blue-400'
                              : 'bg-blue-50 text-blue-600'
                        }`}
                     >
                        <i className='bi bi-mortarboard text-sm' />
                     </div>

                     <div>
                        <p
                           className={`text-[9px] uppercase tracking-wider ${
                              darkMode ? 'text-slate-500' : 'text-slate-400'
                           }`}
                        >
                           Education
                        </p>

                        <p
                           className={`text-xs font-semibold ${
                              darkMode ? 'text-slate-200' : 'text-slate-700'
                           }`}
                        >
                           BSc Computer Science
                        </p>
                     </div>
                  </div>

                  {/* Availability */}
                  <div
                     className={`flex items-center gap-3 rounded-xl border px-4 py-3 ${
                        darkMode
                           ? 'bg-slate-900/40 border-slate-800'
                           : 'bg-white border-slate-200'
                     }`}
                  >
                     <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                           darkMode ? 'bg-emerald-500/10' : 'bg-emerald-50'
                        }`}
                     >
                        <span className='relative flex w-2 h-2'>
                           <span className='absolute inline-flex w-full h-full rounded-full bg-emerald-500 opacity-75 animate-ping' />
                           <span className='relative inline-flex w-2 h-2 rounded-full bg-emerald-500' />
                        </span>
                     </div>

                     <div>
                        <p
                           className={`text-[9px] uppercase tracking-wider ${
                              darkMode ? 'text-slate-500' : 'text-slate-400'
                           }`}
                        >
                           Status
                        </p>

                        <p className='text-xs font-semibold text-emerald-500'>
                           Available for Work
                        </p>
                     </div>
                  </div>
               </div>

               {/* Expertise */}
               <div
                  className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-4'
                  data-aos='fade-up'
                  data-aos-delay='200'
               >
                  {expertise.map((item, index) => (
                     <div
                        key={item.title}
                        className={`rounded-xl border p-4 transition-all duration-300 hover:-translate-y-1 ${
                           darkMode
                              ? `bg-slate-900/40 border-slate-800 ${item.hover}`
                              : `bg-white border-slate-200 ${item.hover}`
                        }`}
                        data-aos='zoom-in'
                        data-aos-delay={250 + index * 50}
                     >
                        <div
                           className={`w-9 h-9 rounded-lg flex items-center justify-center mb-3 ${item.color}`}
                        >
                           <i className={`bi ${item.icon} text-sm`} />
                        </div>

                        <h3
                           className={`text-sm font-semibold ${
                              darkMode ? 'text-white' : 'text-slate-900'
                           }`}
                        >
                           {item.title}
                        </h3>

                        <p
                           className={`mt-1.5 text-xs leading-5 ${
                              darkMode ? 'text-slate-400' : 'text-slate-500'
                           }`}
                        >
                           {item.description}
                        </p>
                     </div>
                  ))}
               </div>

               {/* CTA */}
               <div
                  className={`mt-8 rounded-xl border p-5 md:p-6 ${
                     darkMode
                        ? 'bg-violet-950/20 border-violet-500/20'
                        : 'bg-violet-50/70 border-violet-100'
                  }`}
                  data-aos='fade-up'
                  data-aos-delay='300'
               >
                  <div className='flex flex-col sm:flex-row items-center justify gap-20'>
                     <div className='text-center sm:text-left'>
                        <p
                           className={`text-[9px] font-bold tracking-[0.2em] uppercase ${
                              darkMode ? 'text-violet-400' : 'text-violet-600'
                           }`}
                        >
                           Let's Work Together
                        </p>

                        <h3
                           className={`mt-1 text-base md:text-lg font-bold ${
                              darkMode ? 'text-white' : 'text-slate-900'
                           }`}
                        >
                           Have a project in mind?
                        </h3>
                     </div>

                     <div className='flex flex-wrap justify-center items-center gap-4 mt-2'>
                        {/* Resume */}
                        <a
                           href='/Hailu_Kassa_Resume.pdf'
                           target='_blank'
                           rel='noopener noreferrer'
                           className='px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-md shadow-violet-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg'
                        >
                           <i className='bi bi-file-earmark-person text-base' />
                           Resume
                        </a>

                        {/* Projects */}
                        <button
                           onClick={() => handleScrollTo('portfolio')}
                           className={`px-6 py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 border transition-all duration-300 hover:-translate-y-1 ${
                              darkMode
                                 ? 'bg-slate-800 border-slate-700 text-white hover:bg-slate-700 shadow-md shadow-black/20'
                                 : 'bg-white border-slate-300 text-slate-800 hover:bg-slate-50 shadow-md shadow-slate-200'
                           }`}
                        >
                           <i className='bi bi-code-square text-base' />
                           Projects
                        </button>

                        {/* Contact */}
                        <button
                           onClick={() => handleScrollTo('contact')}
                           className={`px-6 py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-1 ${
                              darkMode
                                 ? 'bg-white text-slate-900 hover:bg-slate-200 shadow-md shadow-white/10'
                                 : 'bg-slate-900 text-white hover:bg-slate-800 shadow-md shadow-slate-300'
                           }`}
                        >
                           <i className='bi bi-chat-dots text-base' />
                           Contact
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
