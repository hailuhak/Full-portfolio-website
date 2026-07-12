import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Avatar = ({ src, name }) => {
  const [error, setError] = useState(false);
  const initials = name.split(' ').map(n => n[0]).join('');

  if (error || !src) {
    return (
      <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-violet-600 to-fuchsia-600 flex items-center justify-center text-white font-bold text-lg border border-slate-800 shadow-md shadow-violet-500/10 flex-shrink-0">
        {initials}
      </div>
    );
  }

  return (
    <img 
      src={src} 
      alt={name} 
      className="w-14 h-14 rounded-full object-cover border border-slate-800 flex-shrink-0"
      onError={() => setError(true)}
    />
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sophia Martinez",
      role: "Operations Director",
      company: "TechVision Corp",
      text: "Outstanding service quality and innovative solutions have completely transformed our business processes, resulting in enhanced productivity and exceptional customer satisfaction throughout our organization.",
      avatar: "/assets/img/person/person-f-12.webp"
    },
    {
      id: 2,
      name: "Michael Anderson",
      role: "Project Manager",
      company: "InnovateTech Ltd",
      text: "Professional expertise and dedicated support have significantly improved our project delivery timelines while maintaining exceptional quality standards across all our initiatives.",
      avatar: "/assets/img/person/person-m-14.webp"
    },
    {
      id: 3,
      name: "Jennifer Wilson",
      role: "Digital Strategy Lead",
      company: "FutureScope Inc",
      text: "Strategic collaboration and innovative thinking have enabled remarkable digital transformation, leading to increased efficiency and measurable business growth results.",
      avatar: "/assets/img/person/person-f-11.webp"
    }
  ];

  return (
    <section id="testimonials" className="relative py-24 border-t border-slate-900 overflow-hidden">
      {/* Background glow overlay */}
      <div className="absolute right-1/4 top-1/4 w-96 h-96 bg-violet-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="text-xs font-bold tracking-widest text-violet-500 uppercase">Reviews</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2">Client Testimonials</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto mt-4 rounded-full"></div>
            <p className="text-slate-400 mt-6 max-w-xl mx-auto leading-relaxed">
              What my clients and partners say about our collaborations and the quality of delivery.
            </p>
          </div>

          {/* Swiper Slider Wrapper */}
          <div data-aos="fade-up" data-aos-delay="100">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              loop={true}
              speed={600}
              autoplay={{
                delay: 6000,
                disableOnInteraction: false,
              }}
              slidesPerView={1}
              spaceBetween={30}
              pagination={{
                el: '.swiper-pagination-custom',
                type: 'bullets',
                clickable: true,
                bulletClass: 'inline-block w-2.5 h-2.5 rounded-full bg-slate-700 mx-1.5 cursor-pointer transition-all duration-300',
                bulletActiveClass: '!bg-violet-500 !w-6'
              }}
              navigation={{
                nextEl: '.swiper-button-next-custom',
                prevEl: '.swiper-button-prev-custom',
              }}
              className="relative"
            >
              {testimonials.map((t) => (
                <SwiperSlide key={t.id}>
                  <div className="bg-slate-900/40 border border-slate-850 p-8 md:p-10 rounded-3xl backdrop-blur-md shadow-xl flex flex-col justify-between h-full">
                    
                    {/* Header: Stars & Quotes */}
                    <div className="flex justify-between items-center mb-6">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <i key={i} className="bi bi-star-fill text-amber-400 text-sm"></i>
                        ))}
                      </div>
                      <div className="text-slate-700">
                        <i className="bi bi-quote text-5xl opacity-30"></i>
                      </div>
                    </div>

                    {/* Review text */}
                    <div className="text-start mb-8">
                      <p className="text-slate-200 text-base md:text-lg leading-relaxed fst-italic">
                        "{t.text}"
                      </p>
                    </div>

                    {/* Footer Author metadata */}
                    <div className="border-t border-slate-800/60 pt-6 flex items-center gap-4">
                      <Avatar src={t.avatar} name={t.name} />
                      <div className="text-start">
                        <h4 className="text-lg font-bold text-white leading-none">{t.name}</h4>
                        <div className="flex flex-wrap items-center gap-1.5 mt-1.5">
                          <span className="text-xs text-slate-455 font-semibold">{t.role}</span>
                          <span className="text-xs text-slate-600">•</span>
                          <span className="text-xs text-fuchsia-400 font-semibold">{t.company}</span>
                        </div>
                      </div>
                    </div>

                  </div>
                </SwiperSlide>
              ))}

              {/* Navigation buttons */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <button className="swiper-button-prev-custom w-10 h-10 rounded-full border border-slate-800 hover:border-violet-500 bg-slate-950/40 hover:bg-violet-600/10 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-300 cursor-pointer border-0">
                  <i className="bi bi-arrow-left"></i>
                </button>
                <div className="swiper-pagination-custom flex items-center"></div>
                <button className="swiper-button-next-custom w-10 h-10 rounded-full border border-slate-800 hover:border-violet-500 bg-slate-950/40 hover:bg-violet-600/10 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-300 cursor-pointer border-0">
                  <i className="bi bi-arrow-right"></i>
                </button>
              </div>

            </Swiper>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
