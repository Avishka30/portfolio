import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Projects = () => {
  const projects = [
    {
      title: "SupportFlow - AI Ticket System",
      tech: "MERN Stack | TypeScript | Google Gemini",
      description: "AI-powered support system featuring automated ticket categorization and real-time solution suggestions via Gemini AI integration.",
      github: "https://github.com/Avishka30/SupportFlow-fe.git",
      demo: "https://test-new-fe.vercel.app/"
    },
    {
      title: "MarineX - Smart Harbor Management",
      tech: "Spring Boot | MySQL | Stripe | JWT",
      description: "Enterprise harbor management system featuring secure agent verification, real-time berth booking, and Stripe payment integration.",
      github: "https://github.com/Avishka30/MarineX.git",
      demo: "https://youtu.be/MRz4YHdByGg?si=FRhVQxId77bWElTh"
    },
    {
      title: "Service Marketplace App",
      tech: "React Native | Firebase",
      description: "Mobile platform connecting homeowners with local service providers. Featuring real-time updates and secure authentication.",
      github: "#",
      demo: "#"
    },
    {
      title: "Mental Health Management System",
      tech: "Java | JavaFX | Hibernate | Maven",
      description: "Comprehensive desktop application with layered architecture. Features role-based access for Admins/Receptionists, session scheduling, and automated billing.",
      github: "https://github.com/Avishka30/MindWave-Hibernate.git", 
      demo: "#" 
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-3xl font-bold flex items-center gap-4">
          <span className="text-electric font-mono text-xl">01.</span> SELECTED_WORKS
        </h2>

        {/* Custom Navigation Icons */}
        <div className="flex gap-3">
          <button className="swiper-prev-btn p-3 border border-white/10 rounded-full text-white hover:border-electric hover:text-electric transition-all cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          </button>
          <button className="swiper-next-btn p-3 border border-white/10 rounded-full text-white hover:border-electric hover:text-electric transition-all cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </button>
        </div>
      </div>
      
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true, dynamicBullets: true }}
        navigation={{
          prevEl: '.swiper-prev-btn',
          nextEl: '.swiper-next-btn',
        }}
        autoplay={{ delay: 5000 }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-16"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="glow-card p-8 rounded-xl border border-white/5 h-full flex flex-col justify-between group min-h-[380px]">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="text-electric">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                  </div>
                  <div className="flex gap-3 text-gray-400">
                    <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-electric transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </a>
                    <a href={project.demo} target="_blank" rel="noreferrer" className="hover:text-electric transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    </a>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-electric transition-colors uppercase tracking-tight">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>
              <div className="text-[10px] font-mono text-electric/70 mt-4 uppercase tracking-[0.2em] border-t border-white/5 pt-4">
                {project.tech}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Projects;