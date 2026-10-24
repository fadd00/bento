import { motion } from 'framer-motion';
import { staggerContainerVariants, slideUpItemVariants } from '../../lib/animations';

interface ContactLink {
  label: string;
  value: string;
  href: string;
  external?: boolean;
}

const contactLinks: ContactLink[] = [
  {
    label: 'WhatsApp',
    value: '+62 823-1018-0884',
    href: 'https://wa.me/6282310180884?text=Hi%20Dhika,%20I%20saw%20your%20portfolio.',
    external: true,
  },
  {
    label: 'Email',
    value: 'andhikahutama9@gmail.com',
    href: 'mailto:andhikahutama9@gmail.com',
    external: false,
  },
  {
    label: 'Resume',
    value: 'Curriculum Vitae (PDF)',
    href: '/cv.pdf',
    external: true,
  },
  {
    label: 'GitHub',
    value: 'fadd00',
    href: 'https://github.com/fadd00',
    external: true,
  },
  {
    label: 'LinkedIn',
    value: 'andhika-hutama',
    href: 'https://www.linkedin.com/in/andhika-hutama',
    external: true,
  },
  {
    label: 'Instagram',
    value: '@dhikaarch',
    href: 'https://www.instagram.com/dhikaarch',
    external: true,
  },
];

export default function ContactSection() {
  return (
    <motion.div
      variants={staggerContainerVariants}
      initial="initial"
      animate="animate"
      className="flex flex-col gap-6"
    >
      <div>
        <h2 className="text-lg sm:text-xl font-semibold text-white mb-1">
          Contact
        </h2>
        <p className="text-xs sm:text-sm text-fg-secondary">
          Feel free to reach out for backend contracts, freelance projects, or inquiries.
        </p>
      </div>

      <div className="flex flex-col divide-y divide-white/[0.06] border-y border-white/[0.06]">
        {contactLinks.map((item) => (
          <motion.a
            key={item.label}
            href={item.href}
            target={item.external ? '_blank' : undefined}
            rel={item.external ? 'noopener noreferrer' : undefined}
            variants={slideUpItemVariants}
            className="py-3.5 flex items-center justify-between group transition-colors hover:text-white"
          >
            <span className="text-xs sm:text-sm text-fg-secondary group-hover:text-white transition-colors shrink-0">
              {item.label}
            </span>
            <div className="flex items-center gap-1.5 text-xs sm:text-sm text-muted-text group-hover:text-white transition-colors min-w-0">
              <span className="truncate">{item.value}</span>
              <span className="text-[11px] shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}
