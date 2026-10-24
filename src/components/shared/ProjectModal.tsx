import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { ProjectData } from '../../lib/types';

interface Props {
  project: ProjectData | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
        className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Modal Window / Mobile Bottom Sheet */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-lg max-h-[88vh] sm:max-h-[85vh] overflow-y-auto bg-bg-secondary border-t sm:border border-white/10 rounded-t-2xl sm:rounded-2xl shadow-2xl p-5 sm:p-7 z-10 flex flex-col"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-muted-text hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Header image if exists */}
          {project.image && (
            <div className="w-full h-40 sm:h-48 rounded-xl overflow-hidden mb-5 border border-white/10 bg-bg-primary shrink-0">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Title & Role */}
          <div className="mb-4">
            {project.role && (
              <span className="text-xs text-muted-text block mb-1">
                {project.role}
              </span>
            )}
            <h3 id="modal-project-title" className="text-xl font-bold text-white">{project.title}</h3>
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-fg-secondary leading-relaxed mb-5">
            {project.description}
          </p>

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="mb-5">
              <h4 className="text-xs font-semibold text-white/70 uppercase tracking-wider mb-2.5">
                Highlights
              </h4>
              <ul className="space-y-1.5">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-fg-secondary flex items-start gap-2">
                    <span className="text-muted-text">&bull;</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tags */}
          {project.tags && project.tags.length > 0 && (
            <div className="mb-6">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] text-muted-text px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Seamless links */}
          <div className="mt-auto pt-4 border-t border-white/[0.08] flex items-center gap-4 text-xs sm:text-sm">
            {project.live && project.live !== '#' && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline underline-offset-4 flex items-center gap-1 group"
              >
                <span>Live Site</span>
                <span className="text-xs transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
              </a>
            )}

            {project.github && project.github !== '#' && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-fg-secondary hover:text-white transition-colors flex items-center gap-1 group"
              >
                <span>Source Code</span>
                <span className="text-xs transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
              </a>
            )}

            {project.status === 'private' && (
              <span className="text-xs text-muted-text">
                Internal / client codebase
              </span>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
