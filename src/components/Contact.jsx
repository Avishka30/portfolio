import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus("TRANSMITTING...");

    // Using your verified EmailJS credentials
    emailjs.sendForm(
      'service_fuo5aid', 
      'template_j660q4v', 
      form.current, 
      '9DdVqfahMzHy4k2kT'
    )
    .then(() => {
        setStatus("SUCCESS: DATA_RECEIVED");
        setIsSending(false);
        e.target.reset();
        setTimeout(() => setStatus(""), 5000);
    }, (error) => {
        setStatus("ERROR: UPLINK_FAILED");
        setIsSending(false);
    });
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto bg-midnight">
      {/* Section Heading - Matching the Hellfire 01/02 Style */}
      <div className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-4 text-white uppercase italic tracking-tighter">
          <span className="text-hellfire font-mono text-base not-italic">03.</span> CONTACT_TERMINAL
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Module 1: Main Call to Action */}
        <div className="md:col-span-2 bg-surface border border-white/5 rounded-2xl p-8 md:p-12 flex flex-col justify-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-hellfire/5 blur-3xl rounded-full -z-10 group-hover:bg-hellfire/10 transition-all"></div>
          
          <h3 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-8 text-white uppercase italic">
            Let's build <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-hellfire to-embers not-italic">together</span>
          </h3>
          <p className="text-gray-400 text-lg max-w-md leading-relaxed font-light mb-10">
            Currently engineering high-performance systems at <span className="text-white font-medium">IJSE Galle</span>. 
            Ready to deploy scalable solutions for your next project.
          </p>

          {/* Integrated Social Uplinks */}
          <div className="flex flex-wrap gap-3">
            <a href="https://github.com/Avishka30" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono text-gray-400 hover:border-hellfire hover:text-hellfire transition-all uppercase tracking-widest">
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12"/></svg>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/kavindu-avishka-393512346" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono text-gray-400 hover:border-hellfire hover:text-hellfire transition-all uppercase tracking-widest">
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              LinkedIn
            </a>
          </div>
        </div>

        {/* Module 2: Access Points */}
        <div className="flex flex-col gap-4">
          <div className="p-6 bg-surface border border-white/5 rounded-2xl flex items-center gap-4 group hover:border-hellfire/30 transition-all">
            <div className="w-10 h-10 rounded-lg bg-hellfire/10 flex items-center justify-center text-hellfire">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            </div>
            <div>
              <p className="text-[10px] text-gray-500 font-mono uppercase tracking-widest">Email</p>
              <p className="text-white font-bold text-xs truncate">kavindua627@gmail.com</p>
            </div>
          </div>

          <div className="p-6 bg-surface border border-white/5 rounded-2xl flex items-center gap-4 group hover:border-hellfire/30 transition-all">
            <div className="w-10 h-10 rounded-lg bg-hellfire/10 flex items-center justify-center text-hellfire">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            </div>
            <div>
              <p className="text-[10px] text-gray-500 font-mono uppercase tracking-widest">Location</p>
              <p className="text-white font-bold text-sm">Ambalangoda, Sri Lanka</p>
            </div>
          </div>

          <div className="flex-grow p-6 bg-surface border border-white/5 rounded-2xl flex flex-col justify-center items-center text-center">
            <div className="flex items-center gap-2 text-xs font-mono text-hellfire animate-pulse">
              <span className="w-2 h-2 bg-hellfire rounded-full"></span>
              UPLINK_ACTIVE
            </div>
            <p className="text-gray-500 text-[10px] mt-2 font-mono uppercase tracking-[0.2em]">Student @ IJSE Galle</p>
          </div>
        </div>

        {/* Module 3: Transmission Form */}
        <div className="md:col-span-3 bg-surface border border-white/5 rounded-[2.5rem] p-8 md:p-16">
          <form ref={form} onSubmit={sendEmail} className="space-y-10 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="relative group">
                <input name="name" type="text" required placeholder="Name" className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:border-hellfire outline-none transition-all placeholder:text-gray-700 font-mono" />
                <label className="absolute -top-4 left-0 text-[10px] font-mono text-gray-500 uppercase tracking-widest">Identity</label>
              </div>
              <div className="relative group">
                <input name="email" type="email" required placeholder="Email" className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:border-hellfire outline-none transition-all placeholder:text-gray-700 font-mono" />
                <label className="absolute -top-4 left-0 text-[10px] font-mono text-gray-500 uppercase tracking-widest">Return_Path</label>
              </div>
            </div>

            <div className="relative group">
              <input name="title" type="text" required placeholder="Subject" className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:border-hellfire outline-none transition-all placeholder:text-gray-700 font-mono" />
              <label className="absolute -top-4 left-0 text-[10px] font-mono text-gray-500 uppercase tracking-widest">Header</label>
            </div>

            <div className="relative group">
              <textarea name="message" rows="4" required placeholder="Message" className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:border-hellfire outline-none transition-all placeholder:text-gray-700 font-mono resize-none"></textarea>
              <label className="absolute -top-4 left-0 text-[10px] font-mono text-gray-500 uppercase tracking-widest">Payload</label>
            </div>

            <button 
              disabled={isSending} 
              type="submit" 
              className="w-full bg-hellfire text-black font-black py-6 rounded-sm uppercase tracking-[0.3em] hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_0_30px_rgba(255,49,49,0.2)] disabled:opacity-50"
            >
              {isSending ? "Processing..." : "Execute_Transmission"}
            </button>

            {status && (
              <p className="text-center text-[10px] font-mono text-hellfire tracking-[0.3em] animate-pulse">
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;