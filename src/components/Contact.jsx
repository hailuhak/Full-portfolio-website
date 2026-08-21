import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = ({ darkMode }) => {
   const [formData, setFormData] = useState({
      name: '',
      email: '',
      subject: '',
      message: '',
   });

   const [status, setStatus] = useState({
      submitting: false,
      success: false,
      error: null,
   });

   const handleChange = (e) => {
      setFormData((prev) => ({
         ...prev,
         [e.target.name]: e.target.value,
      }));
   };

   const handleSubmit = async (e) => {
      e.preventDefault();

      if (
         !formData.name.trim() ||
         !formData.email.trim() ||
         !formData.subject.trim() ||
         !formData.message.trim()
      ) {
         setStatus({
            submitting: false,
            success: false,
            error: 'Please fill in all fields.',
         });
         return;
      }

      setStatus({
         submitting: true,
         success: false,
         error: null,
      });

      try {
         const templateParams = {
            project: 'Hailu Kassa Portfolio',
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
         };

         await emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            templateParams,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
         );

         setStatus({
            submitting: false,
            success: true,
            error: null,
         });

         setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
         });
      } catch (error) {
         console.error('EmailJS Error:', error);

         setStatus({
            submitting: false,
            success: false,
            error: 'Failed to send message. Please try again later.',
         });
      }
   };

   /*
    * Theme colors
    */
   const sectionBg = darkMode ? 'bg-[#181818]' : 'bg-white';

   const cardBg = darkMode ? 'bg-[#222222]' : 'bg-slate-50';

   const formBg = darkMode ? 'bg-[#202020]' : 'bg-white';

   const borderColor = darkMode ? 'border-gray-700' : 'border-slate-200';

   const headingColor = darkMode ? 'text-white' : 'text-slate-900';

   const textColor = darkMode ? 'text-gray-300' : 'text-slate-600';

   const mutedColor = darkMode ? 'text-gray-400' : 'text-slate-500';

   const inputBg = darkMode ? 'bg-[#181818]' : 'bg-slate-50';

   const inputBorder = darkMode ? 'border-gray-700' : 'border-slate-200';

   return (
      <section
         id='contact'
         className={`
        relative
        py-20
        border-t
        ${borderColor}
        ${sectionBg}
        overflow-hidden
        transition-colors
        duration-500
      `}
      >
         {/* Background glow */}
         <div
            className='
          absolute
          left-1/4
          bottom-1/4
          w-[350px]
          h-[350px]
          bg-fuchsia-500/5
          rounded-full
          blur-[120px]
          pointer-events-none
        '
         />

         <div className='container mx-auto px-6 lg:px-12 relative z-10'>
            <div className='max-w-5xl mx-auto'>
               {/* ================= HEADER ================= */}
               <div className='text-center mb-12' data-aos='fade-up'>
                  <span className='text-xs font-bold tracking-[0.2em] text-fuchsia-500 uppercase'>
                     Get In Touch
                  </span>

                  <h2
                     className={`
                text-3xl
                md:text-4xl
                font-extrabold
                mt-2
                ${headingColor}
                transition-colors
                duration-500
              `}
                  >
                     Contact Me
                  </h2>

                  <div className='w-14 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto mt-4 rounded-full' />

                  <p
                     className={`
                mt-5
                max-w-xl
                mx-auto
                text-sm
                leading-relaxed
                ${textColor}
                transition-colors
                duration-500
              `}
                  >
                     Feel free to reach out for project inquiries,
                     collaborations, or just to say hello.
                  </p>
               </div>

               {/* ================= CONTENT ================= */}
               <div className='grid grid-cols-1 lg:grid-cols-5 gap-6'>
                  {/* ================= CONTACT INFO ================= */}
                  <div
                     className='lg:col-span-2'
                     data-aos='fade-right'
                     data-aos-delay='100'
                  >
                     <div
                        className={`
                  ${cardBg}
                  border
                  ${borderColor}
                  rounded-2xl
                  p-6
                  h-full
                  transition-all
                  duration-500
                  shadow-sm
                `}
                     >
                        {/* Card title */}
                        <div className='flex items-center gap-3 mb-4'>
                           <div
                              className='
                      w-10
                      h-10
                      rounded-xl
                      bg-violet-500/10
                      border
                      border-violet-500/20
                      flex
                      items-center
                      justify-center
                      text-violet-500
                    '
                           >
                              <i className='bi bi-chat-dots text-lg' />
                           </div>

                           <h3
                              className={`
                      text-lg
                      font-bold
                      ${headingColor}
                    `}
                           >
                              Let's Connect
                           </h3>
                        </div>

                        <p
                           className={`
                    text-sm
                    leading-relaxed
                    ${textColor}
                    mb-7
                  `}
                        >
                           I'm always open to discussing new projects, creative
                           ideas, and collaboration opportunities.
                        </p>

                        {/* Contact items */}
                        <div className='space-y-5'>
                           {/* Email */}
                           <div className='flex items-start gap-3'>
                              <div
                                 className={`
                        w-9
                        h-9
                        rounded-lg
                        border
                        ${borderColor}
                        ${inputBg}
                        flex
                        items-center
                        justify-center
                        ${mutedColor}
                        flex-shrink-0
                      `}
                              >
                                 <i className='bi bi-envelope text-sm' />
                              </div>

                              <div>
                                 <span
                                    className={`
                          block
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-widest
                          ${mutedColor}
                          mb-1
                        `}
                                 >
                                    Email
                                 </span>

                                 <a
                                    href='mailto:hailuhak344@gmail.com'
                                    className={`
                          block
                          text-xs
                          font-semibold
                          ${headingColor}
                          hover:text-violet-500
                          transition-colors
                        `}
                                 >
                                    hailuhak344@gmail.com
                                 </a>

                                 <a
                                    href='mailto:hailukasa992@gmail.com'
                                    className={`
                          block
                          text-xs
                          font-semibold
                          ${headingColor}
                          hover:text-violet-500
                          transition-colors
                          mt-1
                        `}
                                 >
                                    hailukasa992@gmail.com
                                 </a>
                              </div>
                           </div>

                           {/* Phone */}
                           <div className='flex items-start gap-3'>
                              <div
                                 className={`
                        w-9
                        h-9
                        rounded-lg
                        border
                        ${borderColor}
                        ${inputBg}
                        flex
                        items-center
                        justify-center
                        ${mutedColor}
                        flex-shrink-0
                      `}
                              >
                                 <i className='bi bi-telephone text-sm' />
                              </div>

                              <div>
                                 <span
                                    className={`
                          block
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-widest
                          ${mutedColor}
                          mb-1
                        `}
                                 >
                                    Phone
                                 </span>

                                 <a
                                    href='tel:+251961316521'
                                    className={`
                          text-xs
                          font-semibold
                          ${headingColor}
                          hover:text-violet-500
                          transition-colors
                        `}
                                 >
                                    +251 961 316 521
                                 </a>
                              </div>
                           </div>

                           {/* Location */}
                           <div className='flex items-start gap-3'>
                              <div
                                 className={`
                        w-9
                        h-9
                        rounded-lg
                        border
                        ${borderColor}
                        ${inputBg}
                        flex
                        items-center
                        justify-center
                        ${mutedColor}
                        flex-shrink-0
                      `}
                              >
                                 <i className='bi bi-geo-alt text-sm' />
                              </div>

                              <div>
                                 <span
                                    className={`
                          block
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-widest
                          ${mutedColor}
                          mb-1
                        `}
                                 >
                                    Location
                                 </span>

                                 <span
                                    className={`
                          text-xs
                          font-semibold
                          ${headingColor}
                        `}
                                 >
                                    Addis Ababa, Ethiopia
                                 </span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* ================= CONTACT FORM ================= */}
                  <div
                     className='lg:col-span-3'
                     data-aos='fade-left'
                     data-aos-delay='150'
                  >
                     <div
                        className={`
                  ${cardBg}
                  border
                  ${borderColor}
                  rounded-2xl
                  p-6
                  shadow-sm
                  transition-colors
                  duration-500
                `}
                     >
                        <h3
                           className={`
                    text-lg
                    font-bold
                    ${headingColor}
                    mb-5
                  `}
                        >
                           Send me a message
                        </h3>

                        <form onSubmit={handleSubmit} className='space-y-4'>
                           {/* Name + Email */}
                           <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                              <div>
                                 <label
                                    className={`
                          block
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-wider
                          ${mutedColor}
                          mb-1.5
                        `}
                                 >
                                    Name
                                 </label>

                                 <input
                                    type='text'
                                    name='name'
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder='Your name'
                                    required
                                    className={`
                          w-full
                          px-3
                          py-2.5
                          rounded-lg
                          ${inputBg}
                          border
                          ${inputBorder}
                          ${headingColor}
                          placeholder:text-slate-400
                          text-sm
                          outline-none
                          focus:border-violet-500
                          focus:ring-1
                          focus:ring-violet-500/20
                          transition-all
                          duration-300
                        `}
                                 />
                              </div>

                              <div>
                                 <label
                                    className={`
                          block
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-wider
                          ${mutedColor}
                          mb-1.5
                        `}
                                 >
                                    Email
                                 </label>

                                 <input
                                    type='email'
                                    name='email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder='you@example.com'
                                    required
                                    className={`
                          w-full
                          px-3
                          py-2.5
                          rounded-lg
                          ${inputBg}
                          border
                          ${inputBorder}
                          ${headingColor}
                          placeholder:text-slate-400
                          text-sm
                          outline-none
                          focus:border-violet-500
                          focus:ring-1
                          focus:ring-violet-500/20
                          transition-all
                          duration-300
                        `}
                                 />
                              </div>
                           </div>

                           {/* Subject */}
                           <div>
                              <label
                                 className={`
                        block
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-wider
                        ${mutedColor}
                        mb-1.5
                      `}
                              >
                                 Subject
                              </label>

                              <input
                                 type='text'
                                 name='subject'
                                 value={formData.subject}
                                 onChange={handleChange}
                                 placeholder='Project inquiry'
                                 required
                                 className={`
                        w-full
                        px-3
                        py-2.5
                        rounded-lg
                        ${inputBg}
                        border
                        ${inputBorder}
                        ${headingColor}
                        placeholder:text-slate-400
                        text-sm
                        outline-none
                        focus:border-violet-500
                        focus:ring-1
                        focus:ring-violet-500/20
                        transition-all
                        duration-300
                      `}
                              />
                           </div>

                           {/* Message */}
                           <div>
                              <label
                                 className={`
                        block
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-wider
                        ${mutedColor}
                        mb-1.5
                      `}
                              >
                                 Message
                              </label>

                              <textarea
                                 name='message'
                                 rows='4'
                                 value={formData.message}
                                 onChange={handleChange}
                                 placeholder='Tell me about your project...'
                                 required
                                 className={`
                        w-full
                        px-3
                        py-2.5
                        rounded-lg
                        ${inputBg}
                        border
                        ${inputBorder}
                        ${headingColor}
                        placeholder:text-slate-400
                        text-sm
                        outline-none
                        resize-none
                        focus:border-violet-500
                        focus:ring-1
                        focus:ring-violet-500/20
                        transition-all
                        duration-300
                      `}
                              />
                           </div>

                           {/* Status */}
                           {status.submitting && (
                              <div className='p-3 rounded-lg bg-violet-500/10 border border-violet-500/20 text-violet-500 text-xs font-semibold'>
                                 Sending message...
                              </div>
                           )}

                           {status.error && (
                              <div className='p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-semibold'>
                                 {status.error}
                              </div>
                           )}

                           {status.success && (
                              <div className='p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-semibold'>
                                 Message sent successfully!
                              </div>
                           )}

                           {/* Submit */}
                           <button
                              type='submit'
                              disabled={status.submitting}
                              className='
                      w-full
                      py-3
                      rounded-lg
                      bg-gradient-to-r
                      from-violet-600
                      to-fuchsia-600
                      hover:from-violet-500
                      hover:to-fuchsia-500
                      text-white
                      text-sm
                      font-bold
                      flex
                      items-center
                      justify-center
                      gap-2
                      shadow-md
                      hover:shadow-violet-500/20
                      hover:-translate-y-0.5
                      active:translate-y-0
                      transition-all
                      duration-300
                      disabled:opacity-60
                      disabled:cursor-not-allowed
                    '
                           >
                              {status.submitting ? (
                                 <>
                                    <i className='bi bi-arrow-repeat animate-spin' />
                                    Sending...
                                 </>
                              ) : (
                                 <>
                                    Send Message
                                    <i className='bi bi-arrow-right' />
                                 </>
                              )}
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
