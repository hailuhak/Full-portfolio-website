import React from 'react';

const Skills = () => {
  const skillGroups = [
    {
      title: "Primary Technologies",
      accent: "from-violet-500 to-indigo-500",
      skills: [
        { name: "HTML", icon: "bi-filetype-html", color: "text-orange-500" },
        { name: "CSS", icon: "bi-filetype-css", color: "text-blue-500" },
        { name: "JavaScript", icon: "bi-filetype-js", color: "text-yellow-500" },
        { name: "Bootstrap", icon: "bi-bootstrap", color: "text-purple-500" },
        { name: "Java", icon: "bi-code-slash", color: "text-red-500" },
        { name: "Python", icon: "bi-terminal", color: "text-sky-500" }
      ]
    },
    {
      title: "Secondary Technologies",
      accent: "from-fuchsia-500 to-pink-500",
      skills: [
        { name: "React", icon: "bi-code-square", color: "text-cyan-400" },
        { name: "Node.js", icon: "bi-server", color: "text-green-500" },
        { name: "Express.js", icon: "bi-lightning-charge", color: "text-amber-400" },
        { name: "Tailwind", icon: "bi-layers", color: "text-teal-400" },
        { name: "Git", icon: "bi-diagram-2", color: "text-orange-600" },
        { name: "GitHub", icon: "bi-git", color: "text-white" }
      ]
    },
    {
      title: "Now Technologies",
      accent: "from-pink-500 to-rose-500",
      skills: [
        { name: "Android", icon: "bi-phone", color: "text-lime-500" },
        { name: "Database", icon: "bi-database", color: "text-sky-400" },
        { name: "Firebase", icon: "bi-cloud-lightning", color: "text-yellow-400" },
        { name: "PHP", icon: "bi-server", color: "text-indigo-400" },
        { name: "Laravel", icon: "bi-boxes", color: "text-red-500" },
        { name: "Django", icon: "bi-diagram-3", color: "text-emerald-500" }
      ]
    }
  ];

  return (
    <section id="skills" className="relative py-24 border-t border-slate-900 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute right-0 top-1/3 w-80 h-80 bg-violet-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="text-xs font-bold tracking-widest text-violet-500 uppercase">Expertise</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2">Technical Skills</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto mt-4 rounded-full"></div>
            <p className="text-slate-400 mt-6 max-w-xl mx-auto leading-relaxed">
              I am a Computer Science student with a strong passion for web and Android development. 
              Here is my structured toolkit of technologies.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillGroups.map((group, groupIdx) => (
              <div 
                key={groupIdx} 
                className="bg-slate-900/40 backdrop-blur-md border border-slate-850/80 rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between"
                data-aos="fade-up" 
                data-aos-delay={100 + groupIdx * 100}
              >
                {/* Decorative group border gradient */}
                <div className={`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r ${group.accent}`}></div>
                
                <div>
                  <h4 className="text-xl font-bold text-white mb-6 tracking-wide mt-2">{group.title}</h4>
                  
                  <div className="flex flex-col gap-3">
                    {group.skills.map((skill, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-center justify-between p-3 rounded-xl bg-slate-950/40 border border-slate-900/60 hover:border-slate-800 hover:bg-slate-950/80 transition-all duration-300 group"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center ${skill.color} transition-transform duration-300 group-hover:scale-110`}>
                            <i className={`bi ${skill.icon} text-md`}></i>
                          </div>
                          <span className="text-sm font-semibold text-slate-350 group-hover:text-white transition-colors duration-200">{skill.name}</span>
                        </div>
                        {/* Dynamic mini tag */}
                        <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Active</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
