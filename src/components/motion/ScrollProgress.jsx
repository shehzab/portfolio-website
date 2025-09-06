import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness:140, damping:28, mass:0.4 });
  return (
    <motion.div
      style={{ scaleX, transformOrigin:'0% 50%' }}
      className="fixed left-0 top-0 h-[2px] w-full bg-zinc-400/70 z- pointer-events-none"
    />
  );
};
export default ScrollProgress;
