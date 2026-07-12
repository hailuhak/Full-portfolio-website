import React, { useState } from 'react';

const Services = () => {
  const [expandedId, setExpandedId] = useState(null);

  const services = [
    {
      id: 1,
      title: "Brand Identity Design",
      icon: "bi-palette",
      color: "from-violet-500 to-indigo-500",
      textAccent: "text-violet-400",
      bgAccent: "bg-violet-650/10 border-violet-500/25",
      shortDesc: "Crafting distinctive visual identities that capture your brand's essence and connect with your target audience through thoughtful design systems.",
      longDesc: "Our brand identity design process digs deep into your company's core values. We design responsive logo systems, select typography, curate color palettes, and build complete brand guideline documents. We ensure consistency across both digital and physical touchpoints, giving your brand a memorable, premium footprint."
    },
    {
      id: 2,
      title: "Web Development",
      icon: "bi-code-slash",
      color: "from-fuchsia-500 to-pink-500",
      textAccent: "text-fuchsia-400",
      bgAccent: "bg-fuchsia-650/10 border-fuchsia-500/25",
      shortDesc: "Building modern, responsive websites and applications with clean code, optimal performance, and seamless user experiences across all devices.",
      longDesc: "We build fast, secure, and SEO-friendly web solutions using the latest tech stack (like React, Node.js, and static site generators). We focus on performance metrics, writing maintainable clean code, semantic layouts, and fluid transitions that hook users from the first click."
    },
    {
      id: 3,
      title: "UI/UX Design",
      icon: "bi-phone",
      color: "from-pink-500 to-rose-500",
      textAccent: "text-pink-400",
      bgAccent: "bg-pink-650/10 border-pink-500/25",
      shortDesc: "Designing intuitive interfaces and user experiences that balance aesthetics with functionality, ensuring every interaction feels natural and purposeful.",
      longDesc: "We design wireframes, high-fidelity mockups, and interactive prototypes. By conducting user research and user flow optimization, we construct UI components that reduce user friction and elevate retention. We prioritize accessibility (WCAG) and delight users with smooth micro-interactions."
    },
    {
      id: 4,
      title: "Digital Strategy",
      icon: "bi-megaphone",
      color: "from-amber-550 to-orange-550",
      textAccent: "text-amber-400",
      bgAccent: "bg-amber-650/10 border-amber-500/25",
      shortDesc: "Developing comprehensive digital strategies that align with your business goals and maximize your online presence through data-driven insights.",
      longDesc: "We analyze competitor landscapes, identify traffic-growing channels, and layout scalable roadmaps for product growth. From defining key KPIs to planning social integrations, we help businesses navigate the digital ecosystem with data-driven confidence."
    }
  ];

  return (
    <section id="services" className="relative py-24 border-t border-slate-900 bg-slate-950/20 overflow-hidden">
      {/* Background blur circles */}
      <div className="absolute left-1/4 top-1/4 w-80 h-80 bg-fuchsia-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="text-xs font-bold tracking-widest text-fuchsia-500 uppercase">Solutions</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2">Services &amp; Offerings</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto mt-4 rounded-full"></div>
            <p className="text-slate-400 mt-6 max-w-xl mx-auto leading-relaxed">
              Providing high-quality design and development services to elevate your digital presence.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <div 
                key={service.id} 
                className={`bg-slate-900/40 hover:bg-slate-900 border p-8 rounded-3xl transition-all duration-300 flex flex-col justify-between
                  ${expandedId === service.id 
                    ? 'border-violet-500/30 shadow-lg shadow-violet-650/5' 
                    : 'border-slate-850'
                  }
                `}
                data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={idx * 50}
              >
                <div>
                  {/* Icon with colored glow circle */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 hover:scale-110 border ${service.bgAccent} ${service.textAccent}`}>
                    <i className={`bi ${service.icon} text-xl`}></i>
                  </div>
                  
                  <div className="text-start">
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{service.shortDesc}</p>
                    
                    {/* Expandable text */}
                    {expandedId === service.id && (
                      <p className="mt-4 pt-4 border-t border-slate-800/60 text-slate-350 text-sm leading-relaxed animate-fade-in">
                        {service.longDesc}
                      </p>
                    )}
                  </div>
                </div>

                <div className="text-start mt-6">
                  <button 
                    onClick={() => setExpandedId(expandedId === service.id ? null : service.id)} 
                    className="flex items-center gap-2 border-0 bg-transparent text-sm font-bold tracking-wide text-violet-400 hover:text-violet-300 cursor-pointer transition-colors duration-250"
                  >
                    <span>{expandedId === service.id ? 'Show Less' : 'Learn More'}</span>
                    <i className={`bi ${expandedId === service.id ? 'bi-arrow-left' : 'bi-arrow-right'} text-sm`}></i>
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
