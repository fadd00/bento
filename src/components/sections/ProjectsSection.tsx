import { motion } from 'framer-motion';
import { staggerContainerVariants } from '../../lib/animations';
import ProjectCard from '../shared/ProjectCard';
import type { ProjectData } from '../../lib/types';

interface Props {
  projects: ProjectData[];
}

export default function ProjectsSection({ projects }: Props) {
  const sorted = [...projects].sort((a, b) => a.order - b.order);

  return (
    <section>
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-white mb-1 text-left">
          Here's some stuff I've built
        </h2>
      </div>

      <motion.div
        variants={staggerContainerVariants}
        initial="initial"
        animate="animate"
        className="grid grid-cols-2 gap-4 auto-rows-[160px] sm:auto-rows-[180px]"
      >
        {sorted.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </motion.div>
    </section>
  );
}
