import { AnimatePresence, motion } from 'framer-motion';
import { pageTransitionVariants } from '../lib/animations';
import type { ReactNode } from 'react';

interface Props {
  activeTab: string;
  children: ReactNode;
}

export default function PageTransition({ activeTab, children }: Props) {
  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={activeTab}
        variants={pageTransitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="mt-8"
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}
