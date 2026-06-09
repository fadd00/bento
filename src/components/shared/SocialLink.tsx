import { motion } from 'framer-motion';
import { slideUpItemVariants } from '../../lib/animations';
import type { ReactNode } from 'react';

interface Props {
  href: string;
  label: string;
  icon: ReactNode;
  external?: boolean;
}

export default function SocialLink({ href, label, icon, external }: Props) {
  return (
    <motion.a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      variants={slideUpItemVariants}
      className="glass-card flex flex-col items-center justify-center p-6 gap-3 group cursor-pointer min-h-[100px] no-underline"
    >
      <div className="text-fg-secondary group-hover:text-fg transition-colors duration-200">
        {icon}
      </div>
      <span className="text-sm font-medium text-fg-secondary group-hover:text-fg transition-colors duration-200">
        {label}
      </span>
    </motion.a>
  );
}
