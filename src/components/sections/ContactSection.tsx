import { motion } from 'framer-motion';
import { staggerContainerVariants, slideUpItemVariants } from '../../lib/animations';

const links = [
  {
    href: 'https://github.com/fadd00',
    label: 'GitHub',
    external: true,
  },
  {
    href: 'https://www.instagram.com/dhikaarch',
    label: 'Instagram',
    external: true,
  },
  {
    href: 'https://www.linkedin.com/in/andhika-hutama',
    label: 'LinkedIn',
    external: true,
  },
  {
    href: 'mailto:andhikahutama9@gmail.com',
    label: 'Email Me',
    external: false,
  },
];

export default function ContactSection() {
  return (
    <motion.div
      variants={staggerContainerVariants}
      initial="initial"
      animate="animate"
      className="flex flex-wrap gap-x-6 gap-y-2 max-w-content mx-auto"
    >
      {links.map((link) => (
        <motion.a
          key={link.label}
          href={link.href}
          target={link.external ? '_blank' : undefined}
          rel={link.external ? 'noopener noreferrer' : undefined}
          variants={slideUpItemVariants}
          className="text-fg-secondary hover:text-fg hover:underline underline-offset-4 text-base transition-colors duration-200"
        >
          {link.label}
        </motion.a>
      ))}
    </motion.div>
  );
}
