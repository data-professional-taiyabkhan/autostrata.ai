'use client'
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface AnimatedGraphProps {
  className?: string;
  delay?: number;
}

export default function AnimatedGraph({ className = '', delay = 0 }: AnimatedGraphProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { 
        duration: 2,
        ease: "easeInOut",
        delay: 0.5
      }
    }
  };

  const dotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        duration: 0.3,
        delay: 2.5
      }
    }
  };

  const glowVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        delay: 2.8
      }
    }
  };

  return (
    <div className={`relative ${className}`}>
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] bg-[length:20px_20px] opacity-30" />
      
      {/* Animated Graph */}
      <svg 
        width="100%" 
        height="200" 
        viewBox="0 0 400 200" 
        className="relative z-10"
        style={{ filter: 'drop-shadow(0 0 8px rgba(34, 197, 94, 0.3))' }}
      >
        {/* Graph Line */}
        <motion.path
          d="M 20 160 Q 80 140 120 120 T 200 80 Q 240 60 280 40 T 360 20"
          stroke="#22c55e"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={pathVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        />
        
        {/* Data Points */}
        <motion.circle
          cx="20"
          cy="160"
          r="4"
          fill="#22c55e"
          variants={dotVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        />
        <motion.circle
          cx="120"
          cy="120"
          r="4"
          fill="#22c55e"
          variants={dotVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        />
        <motion.circle
          cx="200"
          cy="80"
          r="4"
          fill="#22c55e"
          variants={dotVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        />
        <motion.circle
          cx="280"
          cy="40"
          r="4"
          fill="#22c55e"
          variants={dotVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        />
        <motion.circle
          cx="360"
          cy="20"
          r="4"
          fill="#22c55e"
          variants={dotVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        />
        
        {/* Arrow at the end */}
        <motion.polygon
          points="350,15 360,20 350,25 355,20"
          fill="#22c55e"
          variants={dotVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        />
        
        {/* Glow effect */}
        <motion.path
          d="M 20 160 Q 80 140 120 120 T 200 80 Q 240 60 280 40 T 360 20"
          stroke="#22c55e"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.3"
          variants={glowVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        />
      </svg>
      
      {/* Animated Labels */}
      <div className="absolute bottom-2 left-2 text-xs text-green-400 opacity-80">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isVisible ? { opacity: 0.8, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ delay: 3, duration: 0.5 }}
        >
          Growth
        </motion.div>
      </div>
      
      <div className="absolute top-2 right-2 text-xs text-green-400 opacity-80">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={isVisible ? { opacity: 0.8, y: 0 } : { opacity: 0, y: -10 }}
          transition={{ delay: 3.2, duration: 0.5 }}
        >
          +127%
        </motion.div>
      </div>
    </div>
  );
}
