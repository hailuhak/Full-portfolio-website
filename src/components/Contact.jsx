import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus({ submitting: false, success: false, error: 'Please fill in all fields.' });
      return;
    }

    setStatus({ submitting: true, success: false, error: null });

    setTimeout(() => {
      setStatus({
        submitting: false,
        success: true,
        error: null
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 2000);
  };

  return (
    <section id="contact" className="relative py-24 border-t border-slate-900 bg-slate-950/20 overflow-hidden">
      {/* Background glow radial */}
      <div className="absolute left-1/4 bottom-1/4 w-[400px] h-[400px] bg-fuchsia-600/5 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="text-xs font-bold tracking-widest text-fuchsia-500 uppercase">Get In Touch</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2">Contact Me</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto mt-4 rounded-full"></div>
            <p className="text-slate-400 mt-6 max-w-xl mx-auto leading-relaxed">
              Feel free to reach out for project inquiries, collaboration discussions, or just to say hello.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Contact details card (Left Side) */}
            <div className="lg:col-span-5" data-aos="fade-right" data-aos-delay="100">
              <div className="bg-slate-900/40 border border-slate-850 p-8 rounded-3xl backdrop-blur-md h-full flex flex-col justify-between">
                
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-violet-600/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
                      <i className="bi bi-chat-dots text-lg"></i>
                    </div>
                    <h4 className="text-xl font-bold text-white tracking-wide">Let's Connect</h4>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8">
                    I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                  </p>
                </div>

                <div className="space-y-6">
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-400 flex-shrink-0">
                      <i className="bi bi-envelope-open text-md"></i>
                    </div>
                    <div className="text-start">
                      <span className="block text-[11px] font-bold text-slate-500 uppercase tracking-widest leading-none mb-1">Email me</span>
                      <a href="mailto:hailuhak344@gmail.com" className="text-sm font-semibold text-slate-200 hover:text-violet-400 transition-colors">hailuhak344@gmail.com</a>
                      <a href="mailto:hailukasa992@gmail.com" className="block text-sm font-semibold text-slate-200 hover:text-violet-400 transition-colors mt-0.5">hailukasa992@gmail.com</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-400 flex-shrink-0">
                      <i className="bi bi-telephone-outbound text-md"></i>
                    </div>
                    <div className="text-start">
                      <span className="block text-[11px] font-bold text-slate-500 uppercase tracking-widest leading-none mb-1">Call me</span>
                      <a href="tel:+251961316521" className="text-sm font-semibold text-slate-200 hover:text-violet-400 transition-colors">+251 961 316 521</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-400 flex-shrink-0">
                      <i className="bi bi-geo-alt-fill text-md"></i>
                    </div>
                    <div className="text-start">
                      <span className="block text-[11px] font-bold text-slate-500 uppercase tracking-widest leading-none mb-1">Visit me</span>
                      <span className="text-sm font-semibold text-slate-200">AA, Ethiopia</span>
                    </div>
                  </div>

                </div>

              </div>
            </div>

            {/* Contact Form card (Right Side) */}
            <div className="lg:col-span-7" data-aos="fade-left" data-aos-delay="200">
              <div className="bg-slate-900/60 border border-slate-800/80 p-8 rounded-3xl shadow-xl">
                <h3 className="text-xl font-bold text-white mb-6 text-start">Send me a message</h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex flex-col text-start">
                      <label className="text-xs font-bold text-slate-400 mb-1.5 uppercase tracking-wider">Full Name</label>
                      <input 
                        type="text" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange}
                        className="px-4 py-3 rounded-xl bg-slate-950 border border-slate-800/80 focus:border-violet-500 text-white text-sm outline-none transition-all duration-300"
                        required 
                      />
                    </div>
                    <div className="flex flex-col text-start">
                      <label className="text-xs font-bold text-slate-400 mb-1.5 uppercase tracking-wider">Email Address</label>
                      <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange}
                        className="px-4 py-3 rounded-xl bg-slate-950 border border-slate-800/80 focus:border-violet-500 text-white text-sm outline-none transition-all duration-300"
                        required 
                      />
                    </div>
                  </div>

                  <div className="flex flex-col text-start">
                    <label className="text-xs font-bold text-slate-400 mb-1.5 uppercase tracking-wider">Subject</label>
                    <input 
                      type="text" 
                      name="subject" 
                      value={formData.subject} 
                      onChange={handleChange}
                      className="px-4 py-3 rounded-xl bg-slate-950 border border-slate-800/80 focus:border-violet-500 text-white text-sm outline-none transition-all duration-300"
                      required 
                    />
                  </div>

                  <div className="flex flex-col text-start">
                    <label className="text-xs font-bold text-slate-400 mb-1.5 uppercase tracking-wider">Message</label>
                    <textarea 
                      name="message" 
                      rows="5" 
                      value={formData.message} 
                      onChange={handleChange}
                      className="px-4 py-3 rounded-xl bg-slate-950 border border-slate-800/80 focus:border-violet-500 text-white text-sm outline-none transition-all duration-300 resize-none"
                      required
                    ></textarea>
                  </div>

                  {/* Submission alerts */}
                  <div className="space-y-3">
                    {status.submitting && (
                      <div className="p-4 rounded-xl bg-violet-600/10 border border-violet-500/25 text-violet-400 text-sm font-semibold animate-pulse text-start">
                        Sending message...
                      </div>
                    )}
                    {status.error && (
                      <div className="p-4 rounded-xl bg-red-600/10 border border-red-500/25 text-red-400 text-sm font-semibold text-start">
                        {status.error}
                      </div>
                    )}
                    {status.success && (
                      <div className="p-4 rounded-xl bg-emerald-600/10 border border-emerald-500/25 text-emerald-400 text-sm font-semibold text-start">
                        Your message has been sent. Thank you!
                      </div>
                    )}
                  </div>

                  <button 
                    type="submit" 
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white font-bold tracking-wide shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 border-0 cursor-pointer flex items-center justify-center gap-2"
                    disabled={status.submitting}
                  >
                    <span>{status.submitting ? 'Sending...' : 'Send Message'}</span>
                    {!status.submitting && <i className="bi bi-arrow-right text-sm"></i>}
                  </button>
                </form>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
