'use client'
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedTextProps {
  children: ReactNode;
  delay?: number;
  direction?: 'left' | 'right' | 'up' | 'down';
  className?: string;
}

export default function AnimatedText({ 
  children, 
  delay = 0, 
  direction = 'up',
  className = '' 
}: AnimatedTextProps) {
  const directionVariants = {
    left: { x: -30, y: 0 },
    right: { x: 30, y: 0 },
    up: { x: 0, y: 30 },
    down: { x: 0, y: -30 }
  };

  return (
    <motion.div
      {...({ className } as any)}
      initial={{ 
        opacity: 0, 
        ...directionVariants[direction]
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0 
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.6, 
        ease: "easeOut", 
        delay 
      }}
    >
      {children}
    </motion.div>
  );
}
