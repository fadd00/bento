import { motion } from 'framer-motion';
import { slideUpItemVariants } from '../../lib/animations';
import type { ProjectData } from '../../lib/types';

interface Props extends ProjectData {
  onSelect?: (project: ProjectData) => void;
}

const spanClasses: Record<string, string> = {
  large: 'col-span-2 row-span-2',
  medium: 'col-span-2 row-span-1',
  small: 'col-span-2 sm:col-span-1 row-span-1',
};

export default function ProjectCard(props: Props) {
  const {
    title,
    description,
    image,
    tags,
    github,
    live,
    size,
    role,
    onSelect,
  } = props;

  return (
    <motion.div
      variants={slideUpItemVariants}
      onClick={() => onSelect?.(props)}
      className={`glass-card relative flex flex-col p-5 ${spanClasses[size]} overflow-hidden group cursor-pointer`}
    >
      {/* Background image */}
      {image && (
        <div className="absolute inset-0 z-0">
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/80 to-bg-primary/25" />
        </div>
      )}

      {/* Decorative Grid for large cards without image */}
      {size === 'large' && !image && (
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

      {/* Top Header info & Links */}
      <div className="relative z-10 flex items-center justify-between gap-2 mb-auto">
        {role && (
          <span className="text-[11px] text-muted-text font-normal">
            {role}
          </span>
        )}

        {/* Quick direct links */}
        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity ml-auto">
          {github && github !== '#' && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-text hover:text-white transition-colors"
              aria-label="GitHub Repository"
              onClick={(e) => e.stopPropagation()}
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          )}
          {live && live !== '#' && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-text hover:text-white transition-colors"
              aria-label="Live Demo"
              onClick={(e) => e.stopPropagation()}
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col mt-auto pt-3">
        <div className="flex items-center gap-1.5 mb-1">
          <h3 className="text-sm sm:text-[15px] font-semibold text-white leading-tight truncate">
            {title}
          </h3>
          <span className="text-xs text-muted-text group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            ↗
          </span>
        </div>

        <p className="text-xs text-fg-secondary line-clamp-2 mb-2">
          {description}
        </p>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[10px] text-muted-text px-1.5 py-0.5 rounded bg-white/[0.03] border border-white/[0.05]"
              >
                {tag}
              </span>
            ))}
            {tags.length > 3 && (
              <span className="text-[10px] text-muted-text">
                +{tags.length - 3}
              </span>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}
