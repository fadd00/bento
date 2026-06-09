import { motion } from 'framer-motion';
import { slideUpItemVariants } from '../../lib/animations';
import type { ProjectData } from '../../lib/types';

interface Props extends ProjectData {}

const spanClasses: Record<string, string> = {
  large: 'col-span-2 row-span-2',
  medium: 'col-span-2 row-span-1',
  small: 'col-span-1 row-span-1',
};

export default function ProjectCard({
  title,
  description,
  emoji,
  tags,
  github,
  live,
  size,
}: Props) {
  return (
    <motion.div
      variants={slideUpItemVariants}
      className={`glass-card relative flex flex-col p-5 ${spanClasses[size]} overflow-hidden group`}
    >
      {size === 'large' && (
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      )}

      <div className="relative z-10 flex flex-col h-full justify-end">
        <div className="flex flex-col gap-1.5 mt-auto">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-bg-secondary flex items-center justify-center text-xs overflow-hidden shrink-0 border border-white/5">
              {emoji}
            </div>
            <h3 className="text-[15px] font-semibold text-white leading-tight truncate">
              {title}
            </h3>
          </div>

          {size !== 'small' && (
            <p className="text-sm text-fg-secondary line-clamp-2 mt-1 max-w-xl">
              {description}
            </p>
          )}

          {tags.length > 0 && size !== 'small' && (
            <div className="flex flex-wrap gap-1 mt-1">
              {tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] text-fg-secondary/70 px-1.5 py-0.5 rounded bg-white/[0.03] border border-white/[0.05]"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {(github || live) && (
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20">
          {github && github !== '#' && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-bg-primary/60 border border-white/10 rounded-full p-2 text-fg-secondary hover:text-fg hover:border-white/20 transition-all"
              aria-label="GitHub Repository"
              onClick={(e) => e.stopPropagation()}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
          )}
          {live && live !== '#' && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-bg-primary/60 border border-white/10 rounded-full p-2 text-fg-secondary hover:text-fg hover:border-white/20 transition-all"
              aria-label="Live Demo"
              onClick={(e) => e.stopPropagation()}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          )}
        </div>
      )}
    </motion.div>
  );
}
