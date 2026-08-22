import React from 'react';

const Resume = ({ darkMode }) => {
   const experiences = [
  {
    years: '2026 - Present',
    title: 'Graphic Designer & Video Editor',
    company: 'Self-Employed',
    description:
      'Creating visual designs, social media content, promotional materials, and engaging video content for digital platforms.',
    achievements: [
      'Adobe PS',
      'Canva Design',
      'TikTok & YouTube Video Editing',
      'Social Media Content Creation',
    ],
  },

      {
         years: '2025 for 3 months',
         title: 'Internship at OFAG',
         company: 'Office of the Federal Auditor General (OFAG)',
         description:
            'Gained hands-on experience by collaborating with the team on real-world projects and developing the ATMS project for OFAG.',
         achievements: [
            'React for UI',
            'Firebase Authentication',
            'Firestore Database',
            'System Testing',
         ],
      },
      {
         years: 'Current',
         title: 'Full-Stack Developer',
         company: 'Personal Projects',
         description:
            'Developing full-stack web applications using modern technologies and implementing RESTful APIs.',
         achievements: [
            'React.js',
            'Python',
            'Django',
            'MySQL',
            'JavaScript',
            'HTML5 & CSS3',
            'Java',
            'C++',
            'Git & GitHub',
            'REST API Development',
         ],
      },
   ];

   const educations = [
      {
         years: '2023 - Present',
         degree: 'Bachelor of Science in Computer Science',
         institution: 'Debre Berhan University',
         description:
            'Studying software engineering, web development, databases, networking, operating systems, and cybersecurity while developing practical software projects and improving problem-solving skills.',
         honors: 'Expected Graduation: 2026',
         isPrimary: true,
      },
      {
         years: '2019 - 2022',
         degree: 'Preparatory Education',
         institution: ' Belay Zeleke Preparatory School',
         description:
            'Completed preparatory education with a strong academic foundation.',
         honors: 'Completed with good academic standing.',
         isPrimary: false,
      },
   ];

   const certifications = [
      {
         name: 'Android Development  ',
         provider: '5M-ETHIOPIAN CODERS',
         year: '2024',
      },
      {
         name: 'Fundamentals of AI and Machine Learning',
         provider: '5M-ETHIOPIAN CODERS',
         year: '2024',
      },
      {
         name: ' Cybersucurity',
         provider: 'DEMER Proeject',
         year: '2026',
      },
   ];

   // =========================
   // THEME COLORS
   // =========================

   const sectionClasses = darkMode
      ? 'bg-[#20242c] border-slate-700'
      : 'bg-slate-50 border-slate-200';

   const headingClasses = darkMode ? 'text-white' : 'text-slate-900';

   const descriptionClasses = darkMode ? 'text-slate-300' : 'text-slate-600';

   const cardClasses = darkMode
      ? 'bg-[#292e38] border-slate-600 hover:bg-[#303642] hover:border-slate-500'
      : 'bg-white border-slate-200 hover:bg-slate-50 hover:border-slate-300';

   const cardTitleClasses = darkMode ? 'text-white' : 'text-slate-900';

   const cardSubtitleClasses = darkMode ? 'text-slate-300' : 'text-slate-600';

   const tagClasses = darkMode
      ? 'bg-[#363c48] text-slate-300 border border-slate-600'
      : 'bg-slate-100 text-slate-600 border border-slate-200';

   const timelineClasses = darkMode ? 'border-slate-600' : 'border-slate-300';

   const timelineNodeClasses = darkMode ? 'bg-[#20242c]' : 'bg-slate-50';

   const certificationItemClasses = darkMode
      ? 'bg-[#232832] border-slate-600'
      : 'bg-slate-50 border-slate-200';

   return (
      <section
         id='resume'
         className={`relative py-24 border-t overflow-hidden transition-colors duration-500 ${sectionClasses}`}
      >
         {/* Background decoration */}
         <div
            className={`absolute left-1/4 top-1/4 w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none ${
               darkMode ? 'bg-violet-500/10' : 'bg-violet-500/5'
            }`}
         />

         <div className='container mx-auto px-6 lg:px-12 relative z-10'>
            <div className='max-w-5xl mx-auto'>
               {/* =========================
              SECTION HEADER
          ========================= */}

               <div className='text-center mb-16' data-aos='fade-up'>
                  <span className='text-xs font-bold tracking-widest text-fuchsia-500 uppercase'>
                     Chronology
                  </span>

                  <h2
                     className={`text-3xl md:text-4xl font-extrabold mt-2 ${headingClasses}`}
                  >
                     Resume Timeline
                  </h2>

                  <div className='w-16 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto mt-4 rounded-full' />

                  <p
                     className={`mt-6 max-w-xl mx-auto leading-relaxed ${descriptionClasses}`}
                  >
                     A detailed timeline of my professional experience,
                     education, and credentials.
                  </p>
               </div>

               {/* =========================
              TWO COLUMNS
          ========================= */}

               <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch'>
                  {/* =========================
                PROFESSIONAL EXPERIENCE
            ========================= */}

                  <div
                     className='lg:col-span-6 flex flex-col h-full'
                     data-aos='fade-right'
                     data-aos-delay='100'
                  >
                     {/* Section title */}

                     <div className='flex items-center gap-3 mb-8'>
                        <div
                           className={`w-10 h-10 rounded-xl border flex items-center justify-center text-violet-500 ${
                              darkMode
                                 ? 'bg-violet-500/10 border-violet-400/20'
                                 : 'bg-violet-50 border-violet-200'
                           }`}
                        >
                           <i className='bi bi-briefcase-fill text-lg' />
                        </div>

                        <h3
                           className={`text-2xl font-bold tracking-wide ${headingClasses}`}
                        >
                           Professional Experience
                        </h3>
                     </div>

                     {/* Timeline */}

                     <div
                        className={`border-l-2 ml-5 pl-8 flex flex-col flex-1 justify-between space-y-10 relative ${timelineClasses}`}
                     >
                        {experiences.map((exp, idx) => (
                           <div
                              key={idx}
                              className='relative group'
                              data-aos='fade-up'
                              data-aos-delay={idx * 50}
                           >
                              {/* Timeline node */}

                              <div
                                 className={`absolute -left-[41px] top-0 w-6 h-6 rounded-full border-2 border-violet-500 flex items-center justify-center group-hover:scale-125 transition-transform duration-300 ${timelineNodeClasses}`}
                              >
                                 <div className='w-2.5 h-2.5 rounded-full bg-violet-500' />
                              </div>

                              {/* Experience card */}

                              <div
                                 className={`p-6 rounded-2xl border transition-all duration-300 h-full flex flex-col ${cardClasses}`}
                              >
                                 <span className='inline-block px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-semibold text-violet-500 mb-4 self-start'>
                                    {exp.years}
                                 </span>

                                 <h4
                                    className={`text-xl font-bold ${cardTitleClasses}`}
                                 >
                                    {exp.title}
                                 </h4>

                                 <h5
                                    className={`text-sm font-semibold mt-1 ${cardSubtitleClasses}`}
                                 >
                                    {exp.company}
                                 </h5>

                                 <p
                                    className={`text-sm mt-3 leading-relaxed ${descriptionClasses}`}
                                 >
                                    {exp.description}
                                 </p>

                                 {exp.achievements.length > 0 && (
                                    <div
                                       className={`flex flex-wrap gap-2 mt-4 pt-3 border-t ${
                                          darkMode
                                             ? 'border-slate-600/70'
                                             : 'border-slate-200'
                                       }`}
                                    >
                                       {exp.achievements.map((tag, tagIdx) => (
                                          <span
                                             key={tagIdx}
                                             className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md ${tagClasses}`}
                                          >
                                             {tag}
                                          </span>
                                       ))}
                                    </div>
                                 )}
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* =========================
                EDUCATION & CREDENTIALS
            ========================= */}

                  <div
                     className='lg:col-span-6 flex flex-col h-full'
                     data-aos='fade-left'
                     data-aos-delay='200'
                  >
                     {/* Section title */}

                     <div className='flex items-center gap-3 mb-8'>
                        <div
                           className={`w-10 h-10 rounded-xl border flex items-center justify-center text-fuchsia-500 ${
                              darkMode
                                 ? 'bg-fuchsia-500/10 border-fuchsia-400/20'
                                 : 'bg-fuchsia-50 border-fuchsia-200'
                           }`}
                        >
                           <i className='bi bi-mortarboard-fill text-lg' />
                        </div>

                        <h3
                           className={`text-2xl font-bold tracking-wide ${headingClasses}`}
                        >
                           Education &amp; Credentials
                        </h3>
                     </div>

                     {/* Education timeline */}

                     <div
                        className={`border-l-2 ml-5 pl-8 flex flex-col flex-1 justify-between space-y-6 relative ${timelineClasses}`}
                     >
                        {educations.map((edu, idx) => (
                           <div
                              key={idx}
                              className='relative group'
                              data-aos='zoom-in'
                              data-aos-delay={idx * 50}
                           >
                              {/* Timeline node */}

                              <div
                                 className={`absolute -left-[41px] top-0 w-6 h-6 rounded-full border-2 border-fuchsia-500 flex items-center justify-center group-hover:scale-125 transition-transform duration-300 ${timelineNodeClasses}`}
                              >
                                 <div className='w-2.5 h-2.5 rounded-full bg-fuchsia-500' />
                              </div>

                              {/* Education card */}

                              <div
                                 className={`p-6 rounded-2xl border transition-all duration-300 h-full flex flex-col ${cardClasses}`}
                              >
                                 <div className='flex justify-between items-start gap-4 flex-wrap mb-4'>
                                    <div>
                                       <h4
                                          className={`text-xl font-bold ${cardTitleClasses}`}
                                       >
                                          {edu.degree}
                                       </h4>

                                       <h5
                                          className={`text-sm font-semibold mt-1 ${cardSubtitleClasses}`}
                                       >
                                          {edu.institution}
                                       </h5>
                                    </div>

                                    <span className='px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-xs font-semibold text-fuchsia-500'>
                                       {edu.years}
                                    </span>
                                 </div>

                                 <p
                                    className={`text-sm leading-relaxed ${descriptionClasses}`}
                                 >
                                    {edu.description}
                                 </p>

                                 {edu.honors && (
                                    <span
                                       className={`inline-block mt-3 px-2 py-0.5 rounded border text-[10px] font-bold tracking-wide self-start ${
                                          darkMode
                                             ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
                                             : 'bg-emerald-50 border-emerald-200 text-emerald-600'
                                       }`}
                                    >
                                       {edu.honors}
                                    </span>
                                 )}
                              </div>
                           </div>
                        ))}

                        {/* =========================
                    CERTIFICATIONS
                ========================= */}

                        <div
                           className='relative group'
                           data-aos='fade-up'
                           data-aos-delay='200'
                        >
                           {/* Timeline node */}

                           <div
                              className={`absolute -left-[41px] top-0 w-6 h-6 rounded-full border-2 border-fuchsia-500 flex items-center justify-center group-hover:scale-125 transition-transform duration-300 ${timelineNodeClasses}`}
                           >
                              <div className='w-2.5 h-2.5 rounded-full bg-fuchsia-500' />
                           </div>

                           {/* Certification card */}

                           <div
                              className={`border p-6 rounded-2xl h-full flex flex-col ${cardClasses}`}
                           >
                              <h4
                                 className={`text-lg font-bold mb-4 ${cardTitleClasses}`}
                              >
                                 Professional Certifications
                              </h4>

                              <div className='space-y-3 flex-1'>
                                 {certifications.map((cert, idx) => (
                                    <div
                                       key={idx}
                                       className={`flex items-center gap-3 p-2.5 rounded-xl border ${certificationItemClasses}`}
                                    >
                                       <i className='bi bi-patch-check-fill text-fuchsia-500 text-lg' />

                                       <div className='text-start'>
                                          <span
                                             className={`block text-sm font-bold leading-none ${cardTitleClasses}`}
                                          >
                                             {cert.name}
                                          </span>

                                          <span
                                             className={`text-[11px] mt-1 block ${
                                                darkMode
                                                   ? 'text-slate-400'
                                                   : 'text-slate-500'
                                             }`}
                                          >
                                             {cert.provider} • {cert.year}
                                          </span>
                                       </div>
                                    </div>
                                 ))}
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Resume;
