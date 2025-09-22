'use client'
import { motion } from 'framer-motion';

export default function AnimatedSection({ children, delay=0 }:{ children: React.ReactNode, delay?: number }){
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: .7, ease: "easeOut", delay }}
    >
      <div className="section container">
        {children}
      </div>
    </motion.section>
  );
}
