import React from 'react';
import { motion } from 'framer-motion';

const FadeIn = ({ as:Tag='div', y=16, delay=0, children, className='' }) => {
  const M = motion[Tag] || motion.div;
  return (
    <M
      className={className}
      initial={{ opacity:0, y }}
      whileInView={{ opacity:1, y:0 }}
      viewport={{ once:true, margin:'-10% 0px -10% 0px' }}
      transition={{ duration:0.26, ease:[0.22,1,0.36,1], delay }}
    >
      {children}
    </M>
  );
};
export default FadeIn;
