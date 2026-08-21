import React, { useState } from 'react';

const Services = ({ darkMode }) => {
   const [expandedId, setExpandedId] = useState(null);

   const services = [
      {
         id: 1,
         title: 'Brand Identity Design',
         icon: 'bi-palette',
         color: 'from-violet-500 to-indigo-500',
         textAccent: darkMode ? 'text-violet-400' : 'text-violet-600',
         bgAccent: darkMode
            ? 'bg-violet-500/10 border-violet-500/25'
            : 'bg-violet-50 border-violet-200',
         shortDesc:
            "Creating distinctive visual identities that capture your brand's personality and connect with your audience.",
         longDesc:
            'I design logo systems, typography, color palettes, social media assets, and brand guidelines that create a consistent and memorable visual identity across digital and physical platforms.',
      },

      {
         id: 2,
         title: 'Web Development',
         icon: 'bi-code-slash',
         color: 'from-fuchsia-500 to-pink-500',
         textAccent: darkMode ? 'text-fuchsia-400' : 'text-fuchsia-600',
         bgAccent: darkMode
            ? 'bg-fuchsia-500/10 border-fuchsia-500/25'
            : 'bg-fuchsia-50 border-fuchsia-200',
         shortDesc:
            'Building modern, responsive websites and applications with clean code, strong performance, and great user experiences.',
         longDesc:
            'I develop responsive full-stack web applications using technologies such as React, JavaScript, Node.js, Express, databases, and REST APIs while focusing on maintainable and scalable code.',
      },

      {
         id: 3,
         title: 'UI/UX Design',
         icon: 'bi-phone',
         color: 'from-pink-500 to-rose-500',
         textAccent: darkMode ? 'text-pink-400' : 'text-pink-600',
         bgAccent: darkMode
            ? 'bg-pink-500/10 border-pink-500/25'
            : 'bg-pink-50 border-pink-200',
         shortDesc:
            'Designing clean and intuitive interfaces that balance visual quality, usability, and functionality.',
         longDesc:
            'I create wireframes, interface layouts, responsive designs, and interactive experiences that make websites and applications easier and more enjoyable to use.',
      },

      {
         id: 4,
         title: 'Digital Strategy',
         icon: 'bi-megaphone',
         color: 'from-amber-500 to-orange-500',
         textAccent: darkMode ? 'text-amber-400' : 'text-amber-600',
         bgAccent: darkMode
            ? 'bg-amber-500/10 border-amber-500/25'
            : 'bg-amber-50 border-amber-200',
         shortDesc:
            'Planning practical digital strategies that improve online presence and support business and project goals.',
         longDesc:
            'I help define digital goals, identify opportunities, organize content and technology priorities, and create practical strategies for improving online visibility and user engagement.',
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
               darkMode ? 'bg-fuchsia-500/5' : 'bg-fuchsia-500/10'
            }`}
         />

         <div className='container mx-auto px-5 lg:px-10 relative z-10'>
            <div className='max-w-5xl mx-auto'>
               {/* ================= SECTION HEADER ================= */}
               <div className='text-center mb-12' data-aos='fade-up'>
                  <span
                     className={`text-[11px] font-bold tracking-[0.2em] uppercase ${
                        darkMode ? 'text-fuchsia-400' : 'text-fuchsia-600'
                     }`}
                  >
                     Solutions
                  </span>

                  <h2
                     className={`text-2xl md:text-3xl font-extrabold mt-2 ${
                        darkMode ? 'text-white' : 'text-slate-900'
                     }`}
                  >
                     Services & Offerings
                  </h2>

                  <div className='w-12 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto mt-3 rounded-full' />

                  <p
                     className={`text-xs md:text-sm mt-4 max-w-lg mx-auto leading-relaxed ${
                        darkMode ? 'text-slate-400' : 'text-slate-600'
                     }`}
                  >
                     Providing practical design and development services to help
                     create modern and effective digital experiences.
                  </p>
               </div>

               {/* ================= SERVICES GRID ================= */}
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
                           {/* Top Section */}
                           <div>
                              {/* Icon */}
                              <div
                                 className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 border transition-transform duration-300 group-hover:scale-105 ${service.bgAccent} ${service.textAccent}`}
                              >
                                 <i className={`bi ${service.icon} text-lg`} />
                              </div>

                              {/* Text */}
                              <div className='text-left'>
                                 <h3
                                    className={`text-base font-bold mb-2 ${
                                       darkMode
                                          ? 'text-white'
                                          : 'text-slate-900'
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

                                 {/* Expanded Description */}
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
                           </div>

                           {/* Learn More */}
                           <div className='text-left mt-5'>
                              <button
                                 type='button'
                                 onClick={() => toggleService(service.id)}
                                 className={`inline-flex items-center gap-2 text-xs font-bold tracking-wide transition-all duration-200 ${
                                    darkMode
                                       ? 'text-violet-400 hover:text-violet-300'
                                       : 'text-violet-600 hover:text-violet-700'
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
