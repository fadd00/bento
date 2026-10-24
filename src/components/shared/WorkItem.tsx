import { motion } from 'framer-motion';
import { slideDownItemVariants } from '../../lib/animations';
import type { WorkData } from '../../lib/types';

interface Props extends WorkData {}

export default function WorkItem({
  title,
  company,
  period,
  description,
  highlights,
  technologies,
  logo,
  initials,
  accentColor,
  current,
}: Props) {
  return (
    <motion.div
      variants={slideDownItemVariants}
      className="glass-card flex flex-col sm:flex-row gap-4 p-5 sm:p-6 transition-colors"
    >
      <div className="flex items-center gap-3 sm:block">
        {logo ? (
          <img
            src={logo}
            alt={`${company} logo`}
            className="w-11 h-11 rounded-xl shrink-0 object-cover border border-white/10"
          />
        ) : (
          <div
            className="w-11 h-11 rounded-xl shrink-0 flex items-center justify-center text-white font-bold text-base border border-white/10"
            style={{ backgroundColor: accentColor }}
          >
            {initials}
          </div>
        )}

        <div className="sm:hidden">
          <h3 className="text-sm font-semibold text-white">{title}</h3>
          {company.includes('MOSU') ? (
            <a
              href="https://www.linkedin.com/company/modern-solution-it/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-fg-secondary hover:text-white hover:underline underline-offset-4 inline-flex items-center gap-0.5"
            >
              <span>{company}</span>
              <span className="text-[10px] text-muted-text">↗</span>
            </a>
          ) : (
            <p className="text-xs text-fg-secondary">{company}</p>
          )}
        </div>
      </div>

      <div className="flex-1 min-w-0">
        <div className="hidden sm:flex justify-between items-start flex-wrap gap-2 mb-1">
          <div>
            <h3 className="text-sm sm:text-base font-semibold text-white">{title}</h3>
            {company.includes('MOSU') ? (
              <a
                href="https://www.linkedin.com/company/modern-solution-it/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-fg-secondary hover:text-white hover:underline underline-offset-4 inline-flex items-center gap-0.5"
              >
                <span>{company}</span>
                <span className="text-[10px] text-muted-text">↗</span>
              </a>
            ) : (
              <div className="text-xs text-fg-secondary">{company}</div>
            )}
          </div>
          <div className="flex items-center gap-2">
            {current && (
              <span className="text-[11px] text-fg-secondary px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06]">
                Present
              </span>
            )}
            <span className="text-xs text-muted-text shrink-0">{period}</span>
          </div>
        </div>

        {/* Mobile period display */}
        <div className="sm:hidden flex items-center gap-2 mb-2">
          {current && (
            <span className="text-[11px] text-fg-secondary px-2 py-0.5 rounded bg-white/[0.04]">
              Present
            </span>
          )}
          <span className="text-xs text-muted-text">{period}</span>
        </div>

        <p className="text-xs sm:text-sm text-fg-secondary leading-relaxed mb-3">
          {description}
        </p>

        {/* Bulleted Highlights */}
        {highlights && highlights.length > 0 && (
          <ul className="space-y-1.5 mb-3">
            {highlights.map((h, i) => (
              <li key={i} className="text-xs text-fg-secondary flex items-start gap-2">
                <span className="text-muted-text">&bull;</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Technologies Pills */}
        {technologies && technologies.length > 0 && (
          <div className="flex flex-wrap gap-1 pt-1">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="text-[10px] text-muted-text px-1.5 py-0.5 rounded bg-white/[0.03] border border-white/[0.05]"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
