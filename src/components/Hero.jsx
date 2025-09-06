import React from 'react';
import { ArrowUpRight } from "lucide-react";
import { Stagger, Item } from './motion/Stagger.jsx';

const socials = [
  { label:'GitHub', href:'https://github.com/shehzab' },
  { label:'LinkedIn', href:'https://linkedin.com/in/shehzab' },
  { label:'Email', href:'mailto:sinanshehzab@gmail.com' },
];

const Hero = () => {
  const go = () => {
    const el = document.querySelector('#projects');
    if (el) el.scrollIntoView({ behavior:'smooth' });
  };

  return (
    <div className="min-h-screen bg-black">
      <section id="top" className="relative">
        <div className="mx-auto max-w-5xl px-6 py-32 sm:py-40">
          <Stagger delay={0.05} className="max-w-4xl">
            <Item>
              <div className="mb-8 inline-flex items-center gap-3">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-zinc-300 uppercase tracking-wide">
                  Available for work
                </span>
              </div>
            </Item>
            
            <Item>
              <h1 className="text-6xl md:text-7xl font-light text-white mb-6 tracking-tight leading-none">
                Shehzab
                <span className="block font-normal text-zinc-400 text-5xl md:text-6xl mt-2">
                  MERN Full‑Stack Developer
                </span>
              </h1>
            </Item>
            
            <Item>
              <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl mb-12">
                Building scalable, secure applications with clean APIs, robust auth, and thoughtful UX. 
                Crafting digital experiences that matter.
              </p>
            </Item>
            
            <Item>
              <div className="flex items-center gap-6 mb-16">
                <button
                  onClick={go}
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-medium hover:bg-zinc-100 transition-all duration-300"
                >
                  <span>View Work</span>
                  <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
                
                <a
                  href="../../public/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-8 py-4 border border-zinc-700 text-zinc-200 hover:border-white hover:text-white transition-all duration-300"
                >
                  <span>Download Resume</span>
                  <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>
            </Item>
            
            <Item>
              <div className="flex items-center gap-8">
                <span className="text-sm font-medium text-zinc-300 uppercase tracking-wide">
                  Connect
                </span>
                <div className="flex gap-6">
                  {socials.map(social => (
                    <a 
                      key={social.href} 
                      href={social.href} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-white transition-colors duration-300 text-sm font-medium"
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            </Item>
          </Stagger>
        </div>
        
        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-zinc-900/20 pointer-events-none"></div>
      </section>
    </div>
  );
};

export default Hero;