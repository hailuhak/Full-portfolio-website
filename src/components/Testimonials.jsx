import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

/* =========================================================
   AVATAR COMPONENT
========================================================= */

const Avatar = ({ src, name, darkMode }) => {
   const [error, setError] = useState(false);

   const initials = name
      .split(' ')
      .map((word) => word[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();

   if (error || !src) {
      return (
         <div
            className={`
          w-11 h-11
          rounded-full
          bg-gradient-to-br from-violet-500 to-fuchsia-500
          flex items-center justify-center
          text-white
          text-sm
          font-bold
          flex-shrink-0
          border
          ${darkMode ? 'border-slate-600' : 'border-slate-200'}
        `}
         >
            {initials}
         </div>
      );
   }

   return (
      <img
         src={src}
         alt={name}
         className={`
        w-11 h-11
        rounded-full
        object-cover
        flex-shrink-0
        border
        ${darkMode ? 'border-slate-600' : 'border-slate-200'}
      `}
         onError={() => setError(true)}
      />
   );
};

/* =========================================================
   TESTIMONIALS COMPONENT
========================================================= */

const Testimonials = ({ darkMode }) => {
   const testimonials = [
      {
         id: 1,
         name: 'Sophia Martinez',
         role: 'Operations Director',
         company: 'TechVision Corp',
         text: 'Outstanding service quality and innovative solutions have completely transformed our business processes, resulting in enhanced productivity and exceptional customer satisfaction.',
         avatar: '/assets/img/person/person-f-12.webp',
      },

      {
         id: 2,
         name: 'Michael Anderson',
         role: 'Project Manager',
         company: 'InnovateTech Ltd',
         text: 'Professional expertise and dedicated support have significantly improved our project delivery timelines while maintaining exceptional quality standards.',
         avatar: '/assets/img/person/person-m-14.webp',
      },

      {
         id: 3,
         name: 'Jennifer Wilson',
         role: 'Digital Strategy Lead',
         company: 'FutureScope Inc',
         text: 'Strategic collaboration and innovative thinking have enabled remarkable digital transformation, leading to increased efficiency and measurable business growth.',
         avatar: '/assets/img/person/person-f-11.webp',
      },
   ];

   /* =========================================================
     THEME COLORS
  ========================================================= */

   const sectionBackground = darkMode
      ? 'bg-[#1b202b] border-slate-700/60'
      : 'bg-white border-slate-200';

   const cardBackground = darkMode
      ? 'bg-[#242a36] border-slate-700/70'
      : 'bg-slate-50 border-slate-200';

   const headingColor = darkMode ? 'text-white' : 'text-slate-900';

   const paragraphColor = darkMode ? 'text-slate-400' : 'text-slate-500';

   const reviewTextColor = darkMode ? 'text-slate-300' : 'text-slate-600';

   const secondaryTextColor = darkMode ? 'text-slate-400' : 'text-slate-500';

   const buttonStyle = darkMode
      ? 'bg-[#242a36] border-slate-700 text-slate-400 hover:text-white hover:border-violet-500'
      : 'bg-white border-slate-200 text-slate-500 hover:text-violet-600 hover:border-violet-400';

   return (
      <section
         id='testimonials'
         className={`
        relative
        py-20
        border-t
        overflow-hidden
        transition-colors
        duration-500
        ${sectionBackground}
      `}
      >
         {/* =====================================================
          BACKGROUND GLOW
      ===================================================== */}

         <div
            className={`
          absolute
          right-1/4
          top-1/4
          w-72
          h-72
          rounded-full
          blur-[110px]
          pointer-events-none
          ${darkMode ? 'bg-violet-500/10' : 'bg-violet-500/5'}
        `}
         />

         <div
            className='
          container
          mx-auto
          px-5
          lg:px-10
          relative
          z-10
        '
         >
            <div className='max-w-4xl mx-auto'>
               {/* =================================================
              SECTION HEADER
          ================================================= */}

               <div className='text-center mb-12' data-aos='fade-up'>
                  <span
                     className='
                text-[11px]
                font-bold
                tracking-[0.2em]
                text-violet-600
                uppercase
              '
                  >
                     Reviews
                  </span>

                  <h2
                     className={`
                text-2xl
                md:text-3xl
                font-extrabold
                mt-2
                ${headingColor}
              `}
                  >
                     Client Testimonials
                  </h2>

                  <div
                     className='
                w-12
                h-1
                bg-gradient-to-r
                from-violet-500
                to-fuchsia-500
                mx-auto
                mt-3
                rounded-full
              '
                  />

                  <p
                     className={`
                text-sm
                mt-5
                max-w-lg
                mx-auto
                leading-relaxed
                ${paragraphColor}
              `}
                  >
                     What clients and collaborators say about our projects,
                     communication, and quality of work.
                  </p>
               </div>

               {/* =================================================
              SWIPER
          ================================================= */}

               <div data-aos='fade-up' data-aos-delay='100'>
                  <Swiper
                     modules={[Autoplay, Pagination, Navigation]}
                     loop={true}
                     speed={600}
                     autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                     }}
                     slidesPerView={1}
                     spaceBetween={20}
                     pagination={{
                        el: '.swiper-pagination-custom',
                        clickable: true,
                     }}
                     navigation={{
                        nextEl: '.swiper-button-next-custom',
                        prevEl: '.swiper-button-prev-custom',
                     }}
                     className='relative'
                  >
                     {/* =================================================
                  TESTIMONIAL CARDS
              ================================================= */}

                     {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                           <div
                              className={`
                      max-w-3xl
                      mx-auto
                      rounded-2xl
                      border
                      p-6
                      md:p-7
                      shadow-sm
                      transition-all
                      duration-300
                      ${cardBackground}
                    `}
                           >
                              {/* =========================================
                        STARS + QUOTE
                    ========================================= */}

                              <div
                                 className='
                        flex
                        items-center
                        justify-between
                        mb-5
                      '
                              >
                                 {/* Stars */}

                                 <div className='flex gap-1'>
                                    {[...Array(5)].map((_, index) => (
                                       <i
                                          key={index}
                                          className='
                              bi
                              bi-star-fill
                              text-amber-400
                              text-xs
                            '
                                       />
                                    ))}
                                 </div>

                                 {/* Quote Icon */}

                                 <i
                                    className={`
                          bi
                          bi-quote
                          text-3xl
                          ${darkMode ? 'text-slate-600' : 'text-slate-300'}
                        `}
                                 />
                              </div>

                              {/* =========================================
                        REVIEW TEXT
                    ========================================= */}

                              <div className='text-left mb-6'>
                                 <p
                                    className={`
                          text-sm
                          md:text-[15px]
                          leading-7
                          italic
                          ${reviewTextColor}
                        `}
                                 >
                                    "{testimonial.text}"
                                 </p>
                              </div>

                              {/* =========================================
                        AUTHOR
                    ========================================= */}

                              <div
                                 className={`
                        border-t
                        pt-5
                        flex
                        items-center
                        gap-3
                        ${darkMode ? 'border-slate-700/70' : 'border-slate-200'}
                      `}
                              >
                                 <Avatar
                                    src={testimonial.avatar}
                                    name={testimonial.name}
                                    darkMode={darkMode}
                                 />

                                 <div className='text-left min-w-0'>
                                    <h4
                                       className={`
                            text-sm
                            font-bold
                            ${headingColor}
                          `}
                                    >
                                       {testimonial.name}
                                    </h4>

                                    <div
                                       className='
                            flex
                            flex-wrap
                            items-center
                            gap-1.5
                            mt-1
                          '
                                    >
                                       <span
                                          className={`
                              text-[11px]
                              font-medium
                              ${secondaryTextColor}
                            `}
                                       >
                                          {testimonial.role}
                                       </span>

                                       <span
                                          className={`
                              text-[10px]
                              ${darkMode ? 'text-slate-600' : 'text-slate-400'}
                            `}
                                       >
                                          •
                                       </span>

                                       <span
                                          className='
                              text-[11px]
                              text-fuchsia-500
                              font-semibold
                            '
                                       >
                                          {testimonial.company}
                                       </span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </SwiperSlide>
                     ))}

                     {/* =================================================
                  CONTROLS
              ================================================= */}

                     <div
                        className='
                  flex
                  items-center
                  justify-center
                  gap-4
                  mt-7
                '
                     >
                        {/* Previous */}

                        <button
                           type='button'
                           aria-label='Previous testimonial'
                           className={`
                    swiper-button-prev-custom
                    w-9
                    h-9
                    rounded-full
                    border
                    flex
                    items-center
                    justify-center
                    transition-all
                    duration-300
                    cursor-pointer
                    ${buttonStyle}
                  `}
                        >
                           <i className='bi bi-arrow-left text-sm' />
                        </button>

                        {/* Pagination */}

                        <div
                           className='
                    swiper-pagination-custom
                    flex
                    items-center
                    justify-center
                    min-w-[60px]
                  '
                        />

                        {/* Next */}

                        <button
                           type='button'
                           aria-label='Next testimonial'
                           className={`
                    swiper-button-next-custom
                    w-9
                    h-9
                    rounded-full
                    border
                    flex
                    items-center
                    justify-center
                    transition-all
                    duration-300
                    cursor-pointer
                    ${buttonStyle}
                  `}
                        >
                           <i className='bi bi-arrow-right text-sm' />
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
