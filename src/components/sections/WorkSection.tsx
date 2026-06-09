import { motion } from 'framer-motion';
import { staggerContainerVariants } from '../../lib/animations';
import WorkItem from '../shared/WorkItem';
import type { WorkData } from '../../lib/types';

interface Props {
  work: WorkData[];
}

export default function WorkSection({ work }: Props) {
  const sorted = [...work].sort((a, b) => a.order - b.order);

  return (
    <motion.section
      variants={staggerContainerVariants}
      initial="initial"
      animate="animate"
      className="flex flex-col gap-3"
    >
      {sorted.map((w) => (
        <WorkItem key={`${w.company}-${w.title}`} {...w} />
      ))}
    </motion.section>
  );
}
