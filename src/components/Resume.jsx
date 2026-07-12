import React from 'react';

const Resume = () => {
  const experiences = [
    {
      years: "2023 - Present",
      title: "Creative Director",
      company: "Innovation Studios Ltd",
      description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione.",
      achievements: ["Team Leadership", "Strategic Planning", "Creative Vision"]
    },
    {
      years: "2020 - 2023",
      title: "Senior Product Designer",
      company: "Digital Innovations Corp",
      description: "Ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit laboriosam nisi ut aliquid ex ea commodi.",
      achievements: []
    },
    {
      years: "2017 - 2020",
      title: "UX/UI Designer",
      company: "Creative Solutions Agency",
      description: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum.",
      achievements: []
    }
  ];

  const educations = [
    {
      years: "2015 - 2017",
      degree: "Master of Design",
      institution: "Tempus Design Institute",
      description: "Magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      honors: "Magna Cum Laude",
      isPrimary: true
    },
    {
      years: "2011 - 2015",
      degree: "Bachelor of Arts",
      institution: "Creative Arts University",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint.",
      honors: "",
      isPrimary: false
    }
  ];

  const certifications = [
    { name: "Advanced UX Design", provider: "Design Academy", year: "2022" },
    { name: "Digital Innovation Strategy", provider: "Innovation Institute", year: "2021" },
    { name: "Leadership in Design", provider: "Leadership Academy", year: "2020" }
  ];

  return (
    <section id="resume" className="relative py-24 border-t border-slate-900 bg-slate-950/20 overflow-hidden">
      {/* Background radial soft gradient */}
      <div className="absolute left-1/4 top-1/4 w-[400px] h-[400px] bg-violet-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="text-xs font-bold tracking-widest text-fuchsia-500 uppercase">Chronology</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2">Resume Timeline</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto mt-4 rounded-full"></div>
            <p className="text-slate-400 mt-6 max-w-xl mx-auto leading-relaxed">
              A detailed timeline of my professional experience, education, and credentials.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Experience timeline */}
            <div className="lg:col-span-6" data-aos="fade-right" data-aos-delay="100">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-violet-600/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
                  <i className="bi bi-briefcase-fill text-lg"></i>
                </div>
                <h3 className="text-2xl font-bold text-white tracking-wide">Professional Experience</h3>
              </div>

              {/* Vertical timeline line */}
              <div className="border-l-2 border-slate-800 ml-5 pl-8 space-y-10 relative">
                {experiences.map((exp, idx) => (
                  <div key={idx} className="relative group" data-aos="fade-up" data-aos-delay={idx * 50}>
                    {/* Glowing bullet node */}
                    <div className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-slate-950 border-2 border-violet-500 flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                      <div className="w-2.5 h-2.5 rounded-full bg-violet-500"></div>
                    </div>

                    <div className="bg-slate-900/40 hover:bg-slate-900 border border-slate-850 p-6 rounded-2xl transition-all duration-300">
                      <span className="inline-block px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-semibold text-violet-400 mb-4">
                        {exp.years}
                      </span>
                      <h4 className="text-xl font-bold text-white">{exp.title}</h4>
                      <h5 className="text-sm font-semibold text-slate-400 mt-1">{exp.company}</h5>
                      <p className="text-slate-450 text-sm mt-3 leading-relaxed">{exp.description}</p>
                      
                      {exp.achievements.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-slate-800/60">
                          {exp.achievements.map((tag, tagIdx) => (
                            <span key={tagIdx} className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-400">
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

            {/* Education timeline */}
            <div className="lg:col-span-6" data-aos="fade-left" data-aos-delay="200">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-fuchsia-600/10 border border-fuchsia-500/20 flex items-center justify-center text-fuchsia-400">
                  <i className="bi bi-mortarboard-fill text-lg"></i>
                </div>
                <h3 className="text-2xl font-bold text-white tracking-wide">Education &amp; Credentials</h3>
              </div>

              <div className="space-y-6">
                {educations.map((edu, idx) => (
                  <div 
                    key={idx} 
                    className={`p-6 rounded-2xl border transition-all duration-300 
                      ${edu.isPrimary 
                        ? 'bg-slate-900/60 border-fuchsia-500/20 hover:bg-slate-900' 
                        : 'bg-slate-900/40 border-slate-850 hover:bg-slate-900'
                      }`}
                    data-aos="zoom-in" 
                    data-aos-delay={idx * 50}
                  >
                    <div className="flex justify-between items-start gap-4 flex-wrap mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                        <h5 className="text-sm font-semibold text-slate-400 mt-1">{edu.institution}</h5>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-xs font-semibold text-fuchsia-400">
                        {edu.years}
                      </span>
                    </div>
                    <p className="text-slate-450 text-sm leading-relaxed">{edu.description}</p>
                    {edu.honors && (
                      <span className="inline-block mt-3 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold tracking-wide text-emerald-400">
                        {edu.honors}
                      </span>
                    )}
                  </div>
                ))}

                {/* Professional Certifications List */}
                <div className="bg-slate-900/30 border border-slate-850 p-6 rounded-2xl" data-aos="fade-up" data-aos-delay="200">
                  <h4 className="text-lg font-bold text-white mb-4">Professional Certifications</h4>
                  <div className="space-y-3">
                    {certifications.map((cert, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-950/20 border border-slate-900">
                        <i className="bi bi-patch-check-fill text-fuchsia-500 text-lg"></i>
                        <div className="text-start">
                          <span className="block text-sm font-bold text-white leading-none">{cert.name}</span>
                          <span className="text-[11px] text-slate-500 mt-1 block">{cert.provider} • {cert.year}</span>
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
    </section>
  );
};

export default Resume;
