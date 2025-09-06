import React from 'react';
import { motion } from 'framer-motion';

export const Stagger = ({ children, delay=0, className='' }) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="show"
    viewport={{ once:true, margin:'-10% 0px -10% 0px' }}
    variants={{
      hidden:{},
      show:{ transition:{ staggerChildren:0.08, delayChildren:delay } }
    }}
  >
    {children}
  </motion.div>
);

export const Item = ({ children, y=14 }) => (
  <motion.div
    variants={{
      hidden:{ opacity:0, y },
      show:{ opacity:1, y:0, transition:{ duration:0.22, ease:[0.22,1,0.36,1] } }
    }}
  >
    {children}
  </motion.div>
);
