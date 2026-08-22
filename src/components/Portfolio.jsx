import React, { useEffect, useState } from 'react';
import GLightbox from 'glightbox';

const Portfolio = ({ darkMode }) => {
   const [activeFilter, setActiveFilter] = useState('*');
   const [selectedProject, setSelectedProject] = useState(null);

   const filters = [
      { label: 'All Work', value: '*' },
      { label: 'Web Development', value: 'web' },
      { label: 'Graphic Design', value: 'design' },
      { label: 'Video Editing', value: 'video' },
   ];

 const projects = [
    {
       id: 1,
       title: 'Collab Editor',
       category: 'web',
       categoryLabel: 'Collaborative Web Application',
       year: '2026',
       image: '/assets/img/profile/portfolio/collab.png',
       description:
          'A collaborative document editing application designed to allow users to create, manage, and work together on documents in real time.',
       details: {
          client: 'Personal Project',
          projectDate: '2026',
          projectUrl: 'collab-editor-1-cpco.onrender.com',
       },
    },

    {
       id: 2,
       title: 'Personal Portfolio',
       category: 'web',
       categoryLabel: 'Web Development',
       year: '2026',
       image: '/assets/img/profile/portfolio/github1.jpg',
       description:
          'A responsive personal portfolio website showcasing my development projects, technical skills, design work, and professional journey.',
       details: {
          client: 'Personal Project',
          projectDate: '2025',
          projectUrl: 'hailukassa.vercel.app/',
       },
    },

    {
       id: 3,
       title: 'Audit Training Management System',
       category: 'web',
       categoryLabel: 'Web Application',
       year: '2025',
       image: '/assets/img/profile/portfolio/atms.png',
       description:
          'A web-based training management system designed to manage courses, sessions, enrollments, feedback, grades, and training records.',
       details: {
          client: 'OFAG Internship Project',
          projectDate: '2025',
          projectUrl: 'atms-project-29933.web.app/',
       },
    },

    {
       id: 4,
       title: 'Social Media Designs',
       category: 'design',
       categoryLabel: 'Graphic Design',
       year: '2026',
       image: '/assets/img/profile/portfolio/tub2.png',
       description:
          'A collection of social media graphics, promotional designs, posters, and digital content created for online platforms.',

       details: {
          client: 'Personal & Freelance Work',
          projectDate: '2025',
          projectUrl: '#',
       },
    },

    {
       id: 5,
       title: 'YouTube & TikTok Content',
       category: 'video',
       categoryLabel: 'Video Editing',
       year: '2026',
       image: '/assets/img/profile/portfolio/img.png',
       description:
          'Short-form and long-form video editing for YouTube and TikTok, including transitions, captions, visual effects, and engaging social media content.',
       details: {
          client: 'Personal & Social Media Projects',
          projectDate: '2026',
          projectUrl:
             'www.tiktok.com/@hailuhak/video/7619244413557968148',
       },
    },

    {
       id: 6,
       title: 'Cybersecurity & Linux Learning',
       category: 'web',
       categoryLabel: 'Cybersecurity',
       year: '2026',
       image: '/assets/img/profile/portfolio/portfolio-9.webp',
       description:
          'Hands-on cybersecurity and Linux learning focused on networking, system administration, security fundamentals, and practical security skills.',
       details: {
          client: 'DEMERA Project',
          projectDate: '2026',
          projectUrl: '#',
       },
    },
 ];
   useEffect(() => {
      const lightbox = GLightbox({
         selector: '.glightbox',
      });

      return () => {
         lightbox.destroy();
      };
   }, []);

   const filteredProjects =
      activeFilter === '*'
         ? projects
         : projects.filter((project) => project.category === activeFilter);

   return (
      <section
         id='portfolio'
         className={`relative py-20 border-t overflow-hidden transition-colors duration-500 ${
            darkMode
               ? 'bg-[#171b24] border-slate-700/60'
               : 'bg-white border-slate-200'
         }`}
      >
         {/* Background Glow */}
         <div
            className={`absolute left-1/3 bottom-10 w-80 h-80 rounded-full blur-[120px] pointer-events-none ${
               darkMode ? 'bg-violet-500/5' : 'bg-violet-500/10'
            }`}
         />

         <div className='container mx-auto px-5 lg:px-10 relative z-10'>
            <div className='max-w-5xl mx-auto'>
               <div className='text-center mb-12' data-aos='fade-up'>
                  <span
                     className={`text-[11px] font-bold tracking-[0.2em] uppercase ${
                        darkMode ? 'text-violet-400' : 'text-violet-600'
                     }`}
                  >
                     Gallery
                  </span>

                  <h2
                     className={`text-2xl md:text-3xl font-extrabold mt-2 ${
                        darkMode ? 'text-white' : 'text-slate-900'
                     }`}
                  >
                     Case Studies & Projects
                  </h2>

                  <div className='w-12 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto mt-3 rounded-full' />

                  <p
                     className={`text-xs md:text-sm mt-4 max-w-lg mx-auto leading-relaxed ${
                        darkMode ? 'text-slate-400' : 'text-slate-600'
                     }`}
                  >
                     A collection of web applications, design systems, and
                     creative projects built with attention to detail and
                     performance.
                  </p>
               </div>

               {/* ================= FILTERS ================= */}
               <div
                  className='flex justify-center mb-10'
                  data-aos='fade-up'
                  data-aos-delay='100'
               >
                  <div
                     className={`flex flex-wrap justify-center gap-1.5 p-1 rounded-xl border ${
                        darkMode
                           ? 'bg-[#202530] border-slate-700/70'
                           : 'bg-slate-100 border-slate-200'
                     }`}
                  >
                     {filters.map((filter) => (
                        <button
                           key={filter.value}
                           type='button'
                           onClick={() => setActiveFilter(filter.value)}
                           className={`px-3 py-1.5 rounded-lg text-[11px] font-semibold transition-all duration-300 ${
                              activeFilter === filter.value
                                 ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-sm'
                                 : darkMode
                                   ? 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                                   : 'text-slate-600 hover:text-slate-900 hover:bg-white'
                           }`}
                        >
                           {filter.label}
                        </button>
                     ))}
                  </div>
               </div>

               {/* ================= PROJECT GRID ================= */}
               <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
                  {filteredProjects.map((project) => (
                     <div
                        key={project.id}
                        data-aos='fade-up'
                        className={`group rounded-2xl overflow-hidden border transition-all duration-300 ${
                           darkMode
                              ? 'bg-[#202530] border-slate-700/70 hover:border-violet-500/50 hover:bg-[#242a37]'
                              : 'bg-white border-slate-200 shadow-sm hover:shadow-lg hover:border-violet-300'
                        }`}
                     >
                        {/* Image */}
                        <div
                           className={`relative overflow-hidden aspect-[4/3] ${
                              darkMode ? 'bg-[#11151c]' : 'bg-slate-100'
                           }`}
                        >
                           <img
                              src={project.image}
                              alt={project.title}
                              loading='lazy'
                              className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                           />

                           {/* Hover Overlay */}
                           <div className='absolute inset-0 bg-slate-950/75 flex items-center justify-center gap-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                              {/* View Image */}
                              <a
                                 href={project.image}
                                 className='glightbox w-9 h-9 rounded-full bg-violet-600 text-white flex items-center justify-center hover:bg-violet-500 transition-all hover:scale-105'
                                 title={project.title}
                                 onClick={(event) => event.stopPropagation()}
                              >
                                 <i className='bi bi-eye text-sm' />
                              </a>

                              {/* View Details */}
                              <button
                                 type='button'
                                 className='w-9 h-9 rounded-full bg-fuchsia-600 text-white flex items-center justify-center hover:bg-fuchsia-500 transition-all hover:scale-105'
                                 title='View Details'
                                 onClick={() => setSelectedProject(project)}
                              >
                                 <i className='bi bi-arrow-up-right text-sm' />
                              </button>
                           </div>
                        </div>

                        {/* Card Content */}
                        <div className='p-4'>
                           <div className='flex items-center justify-between gap-2 mb-2'>
                              <span
                                 className={`text-[9px] uppercase font-bold tracking-wider px-2 py-1 rounded-md ${
                                    darkMode
                                       ? 'text-violet-300 bg-violet-500/10 border border-violet-500/20'
                                       : 'text-violet-700 bg-violet-50 border border-violet-200'
                                 }`}
                              >
                                 {project.categoryLabel}
                              </span>

                              <span
                                 className={`text-[10px] font-semibold ${
                                    darkMode
                                       ? 'text-slate-500'
                                       : 'text-slate-500'
                                 }`}
                              >
                                 {project.year}
                              </span>
                           </div>

                           <h3
                              className={`text-base font-bold mb-1.5 ${
                                 darkMode ? 'text-white' : 'text-slate-900'
                              }`}
                           >
                              {project.title}
                           </h3>

                           <p
                              className={`text-xs leading-relaxed ${
                                 darkMode ? 'text-slate-400' : 'text-slate-600'
                              }`}
                           >
                              {project.description}
                           </p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>

         {/* ================= PROJECT MODAL ================= */}
         {selectedProject && (
            <div
               className='fixed inset-0 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 z-[9999]'
               onClick={() => setSelectedProject(null)}
            >
               <div
                  className={`relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border shadow-2xl ${
                     darkMode
                        ? 'bg-[#202530] border-slate-700'
                        : 'bg-white border-slate-200'
                  }`}
                  onClick={(event) => event.stopPropagation()}
               >
                  {/* Close */}
                  <button
                     type='button'
                     onClick={() => setSelectedProject(null)}
                     className={`absolute top-3 right-3 z-20 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                        darkMode
                           ? 'bg-slate-800 text-slate-400 hover:text-white hover:bg-violet-600'
                           : 'bg-slate-100 text-slate-600 hover:text-white hover:bg-violet-600'
                     }`}
                  >
                     <i className='bi bi-x-lg text-xs' />
                  </button>

                  <div className='grid grid-cols-1 md:grid-cols-2'>
                     {/* Modal Image */}
                     <div
                        className={`aspect-video md:aspect-auto min-h-[250px] ${
                           darkMode ? 'bg-[#11151c]' : 'bg-slate-100'
                        }`}
                     >
                        <img
                           src={selectedProject.image}
                           alt={selectedProject.title}
                           className='w-full h-full object-cover'
                        />
                     </div>

                     {/* Modal Content */}
                     <div className='p-6'>
                        <span
                           className={`inline-block text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-md uppercase ${
                              darkMode
                                 ? 'text-violet-300 bg-violet-500/10 border border-violet-500/20'
                                 : 'text-violet-700 bg-violet-50 border border-violet-200'
                           }`}
                        >
                           {selectedProject.categoryLabel}
                        </span>

                        <h2
                           className={`text-xl md:text-2xl font-extrabold mt-3 ${
                              darkMode ? 'text-white' : 'text-slate-900'
                           }`}
                        >
                           {selectedProject.title}
                        </h2>

                        <p
                           className={`text-xs leading-relaxed mt-3 ${
                              darkMode ? 'text-slate-400' : 'text-slate-600'
                           }`}
                        >
                           {selectedProject.description}
                        </p>

                        {/* Project Information */}
                        <div
                           className={`mt-6 pt-4 border-t space-y-2 ${
                              darkMode
                                 ? 'border-slate-700/70'
                                 : 'border-slate-200'
                           }`}
                        >
                           <div className='flex justify-between gap-4 text-xs'>
                              <span
                                 className={
                                    darkMode
                                       ? 'text-slate-500'
                                       : 'text-slate-500'
                                 }
                              >
                                 Client
                              </span>

                              <span
                                 className={`font-semibold text-right ${
                                    darkMode
                                       ? 'text-slate-200'
                                       : 'text-slate-800'
                                 }`}
                              >
                                 {selectedProject.details.client}
                              </span>
                           </div>

                           <div className='flex justify-between gap-4 text-xs'>
                              <span
                                 className={
                                    darkMode
                                       ? 'text-slate-500'
                                       : 'text-slate-500'
                                 }
                              >
                                 Date
                              </span>

                              <span
                                 className={`font-semibold ${
                                    darkMode
                                       ? 'text-slate-200'
                                       : 'text-slate-800'
                                 }`}
                              >
                                 {selectedProject.details.projectDate}
                              </span>
                           </div>

                           <div className='flex justify-between gap-4 text-xs'>
                              <span
                                 className={
                                    darkMode
                                       ? 'text-slate-500'
                                       : 'text-slate-500'
                                 }
                              >
                                 Project
                              </span>

                              <a
                                 href={`https://${selectedProject.details.projectUrl}`}
                                 target='_blank'
                                 rel='noopener noreferrer'
                                 className='text-violet-500 hover:text-violet-400 font-semibold text-right break-all'
                              >
                                 Visit Project
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         )}
      </section>
   );
};

export default Portfolio;
