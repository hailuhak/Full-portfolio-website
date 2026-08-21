import React from 'react';

const Skills = ({ darkMode }) => {
   const skillGroups = [
      {
         title: 'Core Technologies',
         icon: 'bi-code-slash',
         gradient: 'from-violet-500 to-indigo-500',
         skills: [
            {
               name: 'HTML',
               icon: 'bi-filetype-html',
               color: 'text-orange-500',
            },
            { name: 'CSS', icon: 'bi-filetype-css', color: 'text-blue-500' },
            {
               name: 'JavaScript',
               icon: 'bi-filetype-js',
               color: 'text-yellow-500',
            },
            {
               name: 'Bootstrap',
               icon: 'bi-bootstrap',
               color: 'text-purple-500',
            },
            { name: 'Java', icon: 'bi-cup-hot', color: 'text-red-500' },
            { name: 'Python', icon: 'bi-terminal', color: 'text-sky-500' },
         ],
      },

      {
         title: 'Development',
         icon: 'bi-layers',
         gradient: 'from-fuchsia-500 to-pink-500',
         skills: [
            { name: 'React', icon: 'bi-code-square', color: 'text-cyan-500' },
            { name: 'Node.js', icon: 'bi-server', color: 'text-green-500' },
            {
               name: 'Express.js',
               icon: 'bi-lightning-charge',
               color: 'text-amber-500',
            },
            { name: 'Tailwind CSS', icon: 'bi-layers', color: 'text-teal-500' },
            { name: 'Git', icon: 'bi-git', color: 'text-orange-600' },
            { name: 'GitHub', icon: 'bi-github', color: 'text-slate-700' },
         ],
      },

      {
         title: 'Currently Learning',
         icon: 'bi-rocket-takeoff',
         gradient: 'from-pink-500 to-rose-500',
         skills: [
            { name: 'Android', icon: 'bi-phone', color: 'text-lime-500' },
            { name: 'Database', icon: 'bi-database', color: 'text-sky-500' },
            { name: 'Firebase', icon: 'bi-cloud', color: 'text-yellow-500' },
            { name: 'PHP', icon: 'bi-code-slash', color: 'text-indigo-500' },
            { name: 'Laravel', icon: 'bi-boxes', color: 'text-red-500' },
            { name: 'Django', icon: 'bi-diagram-3', color: 'text-emerald-500' },
         ],
      },
   ];

   return (
      <section
         id='skills'
         className={`relative overflow-hidden py-20 md:py-24 transition-colors duration-500 ${
            darkMode
               ? 'bg-[#0f1420] text-slate-100'
               : 'bg-slate-100 text-slate-900'
         }`}
      >
         {/* ================= BACKGROUND ================= */}

         <div
            className={`absolute -top-20 -right-20 w-72 h-72 rounded-full blur-[120px] pointer-events-none ${
               darkMode ? 'bg-violet-600/10' : 'bg-violet-400/10'
            }`}
         />

         <div
            className={`absolute -bottom-20 -left-20 w-72 h-72 rounded-full blur-[120px] pointer-events-none ${
               darkMode ? 'bg-fuchsia-600/10' : 'bg-fuchsia-400/10'
            }`}
         />

         {/* ================= CONTAINER ================= */}

         <div className='container mx-auto px-5 sm:px-6 lg:px-12 relative z-10'>
            <div className='max-w-5xl mx-auto'>
               {/* ================= HEADER ================= */}

               <div className='text-center mb-10' data-aos='fade-up'>
                  <span
                     className={`inline-flex items-center px-4 py-1.5 rounded-full border text-[10px] font-bold tracking-[0.25em] uppercase ${
                        darkMode
                           ? 'bg-violet-500/10 border-violet-500/20 text-violet-400'
                           : 'bg-violet-50 border-violet-200 text-violet-600'
                     }`}
                  >
                     Expertise
                  </span>

                  <h2
                     className={`mt-4 text-2xl md:text-3xl font-bold tracking-tight ${
                        darkMode ? 'text-white' : 'text-slate-900'
                     }`}
                  >
                     Technical Skills
                  </h2>

                  <div
                     className={`w-14 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r ${
                        darkMode
                           ? 'from-violet-400 to-fuchsia-400'
                           : 'from-violet-600 to-fuchsia-600'
                     }`}
                  />

                  <p
                     className={`max-w-xl mx-auto mt-4 text-xs md:text-sm leading-6 ${
                        darkMode ? 'text-slate-400' : 'text-slate-600'
                     }`}
                  >
                     Technologies and tools I use to build modern, responsive,
                     and practical applications.
                  </p>
               </div>

               {/* ================= SKILL CARDS ================= */}

               <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                  {skillGroups.map((group, groupIndex) => (
                     <div
                        key={group.title}
                        data-aos='fade-up'
                        data-aos-delay={100 + groupIndex * 100}
                        className={`relative overflow-hidden rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 ${
                           darkMode
                              ? 'bg-slate-900/60 border-slate-800 hover:border-slate-700 shadow-lg shadow-black/10'
                              : 'bg-white border-slate-200 hover:border-slate-300 shadow-md shadow-slate-200/50'
                        }`}
                     >
                        {/* Top Gradient */}

                        <div
                           className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${group.gradient}`}
                        />

                        {/* Card Header */}

                        <div className='flex items-center gap-3 mb-5'>
                           <div
                              className={`w-9 h-9 rounded-lg flex items-center justify-center border ${
                                 darkMode
                                    ? 'bg-slate-800 border-slate-700 text-violet-400'
                                    : 'bg-violet-50 border-violet-100 text-violet-600'
                              }`}
                           >
                              <i className={`bi ${group.icon} text-sm`} />
                           </div>

                           <h3
                              className={`text-sm font-bold ${
                                 darkMode ? 'text-white' : 'text-slate-900'
                              }`}
                           >
                              {group.title}
                           </h3>
                        </div>

                        {/* Skills */}

                        <div className='space-y-2'>
                           {group.skills.map((skill) => (
                              <div
                                 key={skill.name}
                                 className={`flex items-center gap-3 px-3 py-2.5 rounded-lg border transition-all duration-200 group ${
                                    darkMode
                                       ? 'bg-slate-950/50 border-slate-800 hover:bg-slate-800 hover:border-slate-700'
                                       : 'bg-slate-50 border-slate-100 hover:bg-white hover:border-slate-200'
                                 }`}
                              >
                                 {/* Skill Icon */}

                                 <div
                                    className={`w-7 h-7 rounded-md flex items-center justify-center shrink-0 ${
                                       darkMode
                                          ? 'bg-slate-800'
                                          : 'bg-white border border-slate-100'
                                    }`}
                                 >
                                    <i
                                       className={`bi ${skill.icon} text-sm ${skill.color} transition-transform duration-200 group-hover:scale-110`}
                                    />
                                 </div>

                                 {/* Skill Name */}

                                 <span
                                    className={`text-xs font-semibold ${
                                       darkMode
                                          ? 'text-slate-300 group-hover:text-white'
                                          : 'text-slate-700 group-hover:text-slate-950'
                                    }`}
                                 >
                                    {skill.name}
                                 </span>
                              </div>
                           ))}
                        </div>
                     </div>
                  ))}
               </div>

               {/* ================= BOTTOM INFO ================= */}

               <div
                  data-aos='fade-up'
                  data-aos-delay='400'
                  className={`mt-6 rounded-xl border px-5 py-4 text-center ${
                     darkMode
                        ? 'bg-slate-900/40 border-slate-800'
                        : 'bg-white border-slate-200'
                  }`}
               >
                  <p
                     className={`text-xs leading-5 ${
                        darkMode ? 'text-slate-400' : 'text-slate-500'
                     }`}
                  >
                     Continuously learning and improving through practical
                     projects and real-world development experience.
                  </p>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Skills;
