import React, { useState } from 'react';

const Services = ({ darkMode }) => {
   const [expandedId, setExpandedId] = useState(null);

   const services = [
      {
         id: 1,
         title: 'Full-Stack Web Development',
         icon: 'bi-code-slash',
         textAccent: darkMode ? 'text-violet-400' : 'text-violet-600',
         bgAccent: darkMode
            ? 'bg-violet-500/10 border-violet-500/25'
            : 'bg-violet-50 border-violet-200',

         shortDesc:
            'Building modern, responsive, and practical web applications from frontend to backend.',

         longDesc:
            'I develop full-stack web applications using React, JavaScript, Node.js, Express, Prisma, and PostgreSQL. I focus on clean code, responsive interfaces, REST APIs, authentication, database integration, and reliable application architecture.',
      },

      {
         id: 2,
         title: 'Web Design',
         icon: 'bi-window',
         textAccent: darkMode ? 'text-blue-400' : 'text-blue-600',
         bgAccent: darkMode
            ? 'bg-blue-500/10 border-blue-500/25'
            : 'bg-blue-50 border-blue-200',

         shortDesc:
            'Creating clean, responsive, and user-friendly websites with modern interfaces.',

         longDesc:
            'I design and develop responsive websites with a focus on clean layouts, accessibility, usability, mobile responsiveness, and modern visual design using technologies such as React, Tailwind CSS, and JavaScript.',
      },

      {
         id: 3,
         title: 'Graphic Design',
         icon: 'bi-palette',
         textAccent: darkMode ? 'text-pink-400' : 'text-pink-600',
         bgAccent: darkMode
            ? 'bg-pink-500/10 border-pink-500/25'
            : 'bg-pink-50 border-pink-200',

         shortDesc:
            'Designing visual content for brands, social media, posters, and digital platforms.',

         longDesc:
            'I create logos, social media graphics, posters, promotional materials, and other digital designs with a focus on clear communication, visual consistency, and professional presentation.',
      },

      {
         id: 4,
         title: 'Video Editing',
         icon: 'bi-camera-reels',
         textAccent: darkMode ? 'text-orange-400' : 'text-orange-600',
         bgAccent: darkMode
            ? 'bg-orange-500/10 border-orange-500/25'
            : 'bg-orange-50 border-orange-200',

         shortDesc:
            'Editing engaging videos for social media, YouTube, and digital content.',

         longDesc:
            'I edit short-form and long-form video content for platforms such as TikTok and YouTube, including cutting, transitions, text, audio, effects, and basic visual improvements.',
      },

      {
         id: 5,
         title: 'Cybersecurity & Linux',
         icon: 'bi-shield-lock',
         textAccent: darkMode ? 'text-emerald-400' : 'text-emerald-600',
         bgAccent: darkMode
            ? 'bg-emerald-500/10 border-emerald-500/25'
            : 'bg-emerald-50 border-emerald-200',

         shortDesc:
            'Developing practical cybersecurity and Linux skills through hands-on learning.',

         longDesc:
            'I am currently expanding my cybersecurity knowledge through practical Linux training and the DEMERA Project. My learning focuses on Linux fundamentals, networking, security concepts, system administration, and practical cybersecurity skills.',
      },
   ];

   const toggleService = (id) => {
      setExpandedId(expandedId === id ? null : id);
   };

   return (
      <section
         id='services'
         className={`relative py-20 border-t overflow-hidden transition-colors duration-500 ${
            darkMode
               ? 'bg-[#171b24] border-slate-700/60'
               : 'bg-white border-slate-200'
         }`}
      >
         {/* Background Glow */}
         <div
            className={`absolute left-1/4 top-1/4 w-80 h-80 rounded-full blur-[120px] pointer-events-none ${
               darkMode ? 'bg-violet-500/5' : 'bg-violet-500/10'
            }`}
         />

         <div className='container mx-auto px-5 lg:px-10 relative z-10'>
            <div className='max-w-5xl mx-auto'>
               {/* Section Header */}
               <div className='text-center mb-12' data-aos='fade-up'>
                  <span
                     className={`text-[11px] font-bold tracking-[0.2em] uppercase ${
                        darkMode ? 'text-violet-400' : 'text-violet-600'
                     }`}
                  >
                     What I Do
                  </span>

                  <h2
                     className={`text-2xl md:text-3xl font-extrabold mt-2 ${
                        darkMode ? 'text-white' : 'text-slate-900'
                     }`}
                  >
                     Services
                  </h2>

                  <div className='w-12 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto mt-3 rounded-full' />

                  <p
                     className={`text-xs md:text-sm mt-4 max-w-lg mx-auto leading-relaxed ${
                        darkMode ? 'text-slate-400' : 'text-slate-600'
                     }`}
                  >
                     I provide practical development, design, and digital
                     content services while continuously expanding my
                     cybersecurity skills.
                  </p>
               </div>

               {/* Services Grid */}
               <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                  {services.map((service, index) => {
                     const isExpanded = expandedId === service.id;

                     return (
                        <div
                           key={service.id}
                           data-aos={
                              index % 2 === 0 ? 'fade-right' : 'fade-left'
                           }
                           data-aos-delay={index * 50}
                           className={`group rounded-2xl border p-5 transition-all duration-300 ${
                              darkMode
                                 ? `bg-[#202530] ${
                                      isExpanded
                                         ? 'border-violet-500/50 shadow-lg shadow-violet-500/5'
                                         : 'border-slate-700/70 hover:border-slate-600'
                                   } hover:bg-[#242a37]`
                                 : `bg-white ${
                                      isExpanded
                                         ? 'border-violet-300 shadow-lg shadow-violet-200/30'
                                         : 'border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-md'
                                   }`
                           }`}
                        >
                           {/* Icon */}
                           <div
                              className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 border transition-transform duration-300 group-hover:scale-105 ${service.bgAccent} ${service.textAccent}`}
                           >
                              <i className={`bi ${service.icon} text-lg`} />
                           </div>

                           {/* Content */}
                           <div className='text-left'>
                              <h3
                                 className={`text-base font-bold mb-2 ${
                                    darkMode ? 'text-white' : 'text-slate-900'
                                 }`}
                              >
                                 {service.title}
                              </h3>

                              <p
                                 className={`text-xs leading-relaxed ${
                                    darkMode
                                       ? 'text-slate-400'
                                       : 'text-slate-600'
                                 }`}
                              >
                                 {service.shortDesc}
                              </p>

                              {/* Expanded Content */}
                              {isExpanded && (
                                 <div
                                    className={`mt-4 pt-4 border-t ${
                                       darkMode
                                          ? 'border-slate-700/70'
                                          : 'border-slate-200'
                                    }`}
                                 >
                                    <p
                                       className={`text-xs leading-relaxed ${
                                          darkMode
                                             ? 'text-slate-300'
                                             : 'text-slate-600'
                                       }`}
                                    >
                                       {service.longDesc}
                                    </p>
                                 </div>
                              )}
                           </div>

                           {/* Learn More */}
                           <div className='text-left mt-5'>
                              <button
                                 type='button'
                                 onClick={() => toggleService(service.id)}
                                 className={`inline-flex items-center gap-2 text-xs font-medium transition-all duration-200 ${
                                    darkMode
                                       ? 'text-slate-300 hover:text-white'
                                       : 'text-slate-600 hover:text-violet-600'
                                 }`}
                              >
                                 <span>
                                    {isExpanded ? 'Show Less' : 'Learn More'}
                                 </span>

                                 <i
                                    className={`bi ${
                                       isExpanded
                                          ? 'bi-arrow-left'
                                          : 'bi-arrow-right'
                                    } text-xs transition-transform duration-200 group-hover:translate-x-0.5`}
                                 />
                              </button>
                           </div>
                        </div>
                     );
                  })}
               </div>
            </div>
         </div>
      </section>
   );
};

export default Services;
