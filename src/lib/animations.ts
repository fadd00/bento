import type { Variants } from 'framer-motion';

export const pageTransitionVariants: Variants = {
  initial: {
    opacity: 0.25,
    y: 12,
    filter: 'blur(2px)',
  },
  animate: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
  },
  exit: {
    opacity: 0.25,
    y: 12,
    filter: 'blur(2px)',
    transition: { duration: 0.1 },
  },
};

export const staggerContainerVariants: Variants = {
  animate: {
    transition: { staggerChildren: 0.1 },
  },
};

export const slideUpItemVariants: Variants = {
  initial: { opacity: 0, y: 12, filter: 'blur(3px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
};

export const slideDownItemVariants: Variants = {
  initial: { opacity: 0, y: -20, filter: 'blur(3px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
};

export const slideRightItemVariants: Variants = {
  initial: { opacity: 0, x: -12, filter: 'blur(3px)' },
  animate: { opacity: 1, x: 0, filter: 'blur(0px)' },
};
