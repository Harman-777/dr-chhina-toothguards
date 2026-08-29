'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'none';
  duration?: number;
  distance?: number;
  whileHover?: boolean;
}

export default function ScrollAnimation({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.6,
  distance = 30,
  whileHover = false,
}: ScrollAnimationProps) {
  const getInitial = () => {
    switch (direction) {
      case 'up': return { opacity: 0, y: distance };
      case 'down': return { opacity: 0, y: -distance };
      case 'left': return { opacity: 0, x: distance };
      case 'right': return { opacity: 0, x: -distance };
      case 'scale': return { opacity: 0, scale: 0.92 };
      case 'none': return { opacity: 0 };
      default: return { opacity: 0, y: distance };
    }
  };

  const getAnimate = () => {
    switch (direction) {
      case 'scale': return { opacity: 1, scale: 1 };
      case 'none': return { opacity: 1 };
      default: return { opacity: 1, x: 0, y: 0 };
    }
  };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={getAnimate()}
      whileHover={whileHover ? { y: -6, transition: { duration: 0.25, ease: "easeOut" } } : undefined}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration,
        ease: [0.22, 1, 0.36, 1], // Custom smooth cubic-bezier easing
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

