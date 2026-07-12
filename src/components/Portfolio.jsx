import React, { useState, useEffect } from 'react';
import GLightbox from 'glightbox';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('*');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = [
    { label: "All Work", value: "*" },
    { label: "Branding", value: "branding" },
    { label: "Web Design", value: "web" },
    { label: "Photography", value: "photography" },
    { label: "Print Design", value: "print" }
  ];

  const projects = [
    {
      id: 1,
      title: "Elemental Branding",
      category: "branding",
      categoryLabel: "Brand Identity",
      year: "2024",
      image: "/assets/img/portfolio/portfolio-3.webp",
      description: "Comprehensive brand identity design focusing on natural elements and sustainable business practices.",
      details: {
        client: "EcoLabs International",
        projectDate: "March 15, 2024",
        projectUrl: "www.ecolabs-branding.com"
      }
    },
    {
      id: 2,
      title: "Digital Workspace",
      category: "web",
      categoryLabel: "Web Application",
      year: "2024",
      image: "/assets/img/portfolio/portfolio-7.webp",
      description: "Modern web application designed for remote collaboration with intuitive user experience and clean aesthetics.",
      details: {
        client: "SyncSpace Technologies",
        projectDate: "January 20, 2024",
        projectUrl: "www.syncspace.work"
      }
    },
    {
      id: 3,
      title: "Urban Narratives",
      category: "photography",
      categoryLabel: "Photography",
      year: "2023",
      image: "/assets/img/portfolio/portfolio-portrait-3.webp",
      description: "Street photography series capturing the essence of metropolitan life and human connections.",
      details: {
        client: "MetroArt Gallery",
        projectDate: "November 05, 2023",
        projectUrl: "www.metroart.gallery/urban"
      }
    },
    {
      id: 4,
      title: "Annual Report Design",
      category: "print",
      categoryLabel: "Editorial Design",
      year: "2024",
      image: "/assets/img/portfolio/portfolio-9.webp",
      description: "Sophisticated annual report combining data visualization with compelling storytelling and premium print finishes.",
      details: {
        client: "Vanguard Holdings",
        projectDate: "April 12, 2024",
        projectUrl: "www.vanguardholdings.com/annual-2024"
      }
    },
    {
      id: 5,
      title: "Artisan Collection",
      category: "branding",
      categoryLabel: "Package Design",
      year: "2023",
      image: "/assets/img/portfolio/portfolio-11.webp",
      description: "Luxury packaging design series celebrating traditional craftsmanship with contemporary minimalist approach.",
      details: {
        client: "Aura Goods",
        projectDate: "December 10, 2023",
        projectUrl: "www.auragoods.co/artisan"
      }
    },
    {
      id: 6,
      title: "Sustainable Commerce",
      category: "web",
      categoryLabel: "E-commerce",
      year: "2024",
      image: "/assets/img/portfolio/portfolio-12.webp",
      description: "Eco-conscious e-commerce platform design promoting sustainable products with seamless shopping experience.",
      details: {
        client: "GreenGoods Retail",
        projectDate: "May 30, 2024",
        projectUrl: "www.greengoods-sustainable.com"
      }
    }
  ];

  useEffect(() => {
    const lightbox = GLightbox({
      selector: '.glightbox'
    });
    return () => lightbox.destroy();
  }, [activeFilter]);

  const filteredProjects = activeFilter === '*' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" className="relative py-24 border-t border-slate-900 overflow-hidden">
      {/* Background glow radial */}
      <div className="absolute left-1/3 bottom-10 w-96 h-96 bg-violet-600/5 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="text-xs font-bold tracking-widest text-violet-500 uppercase">Gallery</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2">Case Studies &amp; Projects</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto mt-4 rounded-full"></div>
            <p className="text-slate-400 mt-6 max-w-xl mx-auto leading-relaxed">
              A collection of mobile applications, design systems, and frontend layouts built with details and performance.
            </p>
          </div>

          {/* Filters List */}
          <div className="flex justify-center mb-12" data-aos="fade-up" data-aos-delay="100">
            <ul className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
              {filters.map((f, idx) => (
                <li 
                  key={idx} 
                  className={`px-4 py-2 rounded-xl text-sm font-semibold tracking-wide cursor-pointer transition-all duration-300
                    ${activeFilter === f.value 
                      ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-md' 
                      : 'text-slate-400 hover:text-white'
                    }
                  `}
                  onClick={() => setActiveFilter(f.value)}
                >
                  {f.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Projects Container Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((p) => (
              <div 
                key={p.id} 
                className="group relative bg-slate-900/35 border border-slate-850 rounded-3xl overflow-hidden hover:border-slate-700/60 hover:bg-slate-900/60 transition-all duration-500 flex flex-col justify-between"
                data-aos="fade-up"
              >
                {/* Card Top Image */}
                <div className="relative overflow-hidden aspect-[4/3] bg-slate-950 flex items-center justify-center">
                  <img 
                    src={p.image} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    alt={p.title} 
                    loading="lazy" 
                  />
                  {/* Overlay panel on hover */}
                  <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a 
                      href={p.image} 
                      className="glightbox w-12 h-12 rounded-full bg-violet-600 text-white flex items-center justify-center hover:bg-violet-500 hover:scale-110 active:scale-95 transition-all duration-300"
                      title={p.title}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <i className="bi bi-eye text-lg"></i>
                    </a>
                    <button 
                      className="w-12 h-12 rounded-full bg-fuchsia-600 text-white flex items-center justify-center hover:bg-fuchsia-500 hover:scale-110 active:scale-95 transition-all duration-300 border-0 cursor-pointer"
                      title="View Details"
                      onClick={() => setSelectedProject(p)}
                    >
                      <i className="bi bi-arrow-up-right text-lg"></i>
                    </button>
                  </div>
                </div>

                {/* Card Content Description */}
                <div className="p-6 text-start flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center gap-4 mb-3">
                      <span className="text-[11px] uppercase font-bold tracking-wider text-violet-400 bg-violet-500/10 border border-violet-500/20 px-2.5 py-0.5 rounded-md">
                        {p.categoryLabel}
                      </span>
                      <span className="text-xs text-slate-500 font-semibold">{p.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{p.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{p.description}</p>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 md:p-6 z-[999] animate-fade-in" 
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-slate-900 border border-slate-800 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl flex flex-col md:flex-row overflow-hidden animate-scale-up" 
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-800/80 border border-slate-700/80 text-slate-400 hover:text-white hover:bg-violet-600 hover:border-violet-500 flex items-center justify-center transition-all duration-300 z-10 cursor-pointer" 
              onClick={() => setSelectedProject(null)}
            >
              <i className="bi bi-x-lg text-sm"></i>
            </button>

            {/* Modal Image (Left/Top) */}
            <div className="w-full md:w-1/2 aspect-video md:aspect-auto bg-slate-950 flex items-center justify-center border-r border-slate-800">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="w-full h-full object-cover" 
              />
            </div>

            {/* Modal Details (Right/Bottom) */}
            <div className="w-full md:w-1/2 p-8 flex flex-col justify-between text-start">
              <div>
                <span className="inline-block text-xs font-bold tracking-wider text-violet-400 bg-violet-500/10 border border-violet-500/20 px-3 py-1 rounded-md mb-4 uppercase">
                  {selectedProject.categoryLabel}
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">{selectedProject.title}</h2>
                <p className="text-slate-400 text-sm leading-relaxed mt-4">{selectedProject.description}</p>
              </div>

              <div className="mt-8 border-t border-slate-800/60 pt-4 space-y-3">
                <div className="flex justify-between items-center text-sm py-1.5 border-b border-slate-800/40">
                  <span className="font-semibold text-slate-500">Client</span>
                  <span className="text-white font-medium">{selectedProject.details.client}</span>
                </div>
                <div className="flex justify-between items-center text-sm py-1.5 border-b border-slate-800/40">
                  <span className="font-semibold text-slate-500">Date</span>
                  <span className="text-white font-medium">{selectedProject.details.projectDate}</span>
                </div>
                <div className="flex justify-between items-center text-sm py-1.5">
                  <span className="font-semibold text-slate-500">Project Link</span>
                  <span className="text-white">
                    <a 
                      href={`https://${selectedProject.details.projectUrl}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-fuchsia-400 hover:text-fuchsia-300 font-semibold tracking-wide transition-colors duration-200"
                    >
                      {selectedProject.details.projectUrl}
                    </a>
                  </span>
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
