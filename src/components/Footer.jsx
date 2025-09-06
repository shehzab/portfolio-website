import React from 'react';
import FadeIn from './motion/FadeIn.jsx';

const Footer = () => {
  return (
    <footer className="border-t border-zinc-800 bg-gradient-to-t from-black via-zinc-950 to-transparent">
      <FadeIn>
        <div className="mx-auto max-w-6xl px-4 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zinc-400 text-sm">
            © {new Date().getFullYear()} <span className="text-white font-medium">Shehzab</span>. All rights reserved.
          </p>
          
        </div>
      </FadeIn>
    </footer>
  );
};

export default Footer;
