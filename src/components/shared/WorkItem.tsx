import { motion } from 'framer-motion';
import { slideDownItemVariants } from '../../lib/animations';
import type { WorkData } from '../../lib/types';

interface Props extends WorkData {}

export default function WorkItem({
  title,
  company,
  period,
  description,
  initials,
  accentColor,
  current,
}: Props) {
  return (
    <motion.div
      variants={slideDownItemVariants}
      className="glass-card flex gap-4 p-5 cursor-pointer"
    >
      <div
        className="w-12 h-12 rounded-full shrink-0 flex items-center justify-center text-white font-bold text-lg"
        style={{ backgroundColor: accentColor }}
      >
        {initials}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start flex-col sm:flex-row sm:items-center mb-1">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <div className="flex items-center gap-2 mt-1 sm:mt-0">
            {current && (
              <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full border border-emerald-400/30">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Current
              </span>
            )}
            <span className="text-sm text-muted-text shrink-0">{period}</span>
          </div>
        </div>
        <div className="text-sm text-fg-secondary mb-2 font-medium">{company}</div>
        <p className="text-sm text-fg-secondary/80 leading-relaxed max-w-2xl">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
