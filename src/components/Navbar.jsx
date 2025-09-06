import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const items = [
  { label:'About', href:'#about' },
  { label:'Projects', href:'#projects' },
  { label:'Education', href:'#education' }, 
  { label:'Contact', href:'#contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const go = (hash) => {
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior:'smooth', block:'start' });
    setOpen(false);
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800 bg-black/80 backdrop-blur-xl"
      initial={{ opacity:0, y:-10 }}
      animate={{ opacity:1, y:0 }}
      transition={{ duration:0.3, ease:[0.22,1,0.36,1] }}
    >
      <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
        <button 
          onClick={() => go('#top')} 
          className="text-white font-light tracking-tight text-lg hover:text-zinc-300 transition-colors duration-300"
        >
          Shehzab
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {items.map(item => (
            <button
              key={item.href}
              onClick={() => go(item.href)}
              className="group relative text-zinc-400 hover:text-white transition-colors duration-300 font-medium"
            >
              {item.label}
              <span className="absolute left-0 -bottom-2 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </nav>

        <button 
          className="md:hidden text-white hover:text-zinc-300 transition-colors duration-300" 
          onClick={() => setOpen(s=>!s)} 
          aria-label="Menu"
        >
          <span className="text-xl font-light">≡</span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height:0, opacity:0 }}
            animate={{ height:'auto', opacity:1 }}
            exit={{ height:0, opacity:0 }}
            transition={{ duration:0.3, ease:[0.22,1,0.36,1] }}
            className="md:hidden border-t border-zinc-800 bg-black overflow-hidden"
          >
            <div className="mx-auto max-w-5xl px-6 py-4">
              {items.map((item) => (
                <button
                  key={item.href}
                  onClick={() => go(item.href)}
                  className="block w-full py-4 text-left text-zinc-400 hover:text-white border-b border-zinc-800 last:border-0 transition-colors duration-300 font-medium"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
