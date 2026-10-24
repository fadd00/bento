import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { staggerContainerVariants } from '../../lib/animations';
import ProjectCard from '../shared/ProjectCard';
import ProjectModal from '../shared/ProjectModal';
import type { ProjectData } from '../../lib/types';

interface Props {
  projects: ProjectData[];
}

type FilterCategory = 'backend-web' | 'game' | 'all';

export default function ProjectsSection({ projects }: Props) {
  const [filter, setFilter] = useState<FilterCategory>('backend-web');
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const filtered = projects
    .filter((p) => {
      if (filter === 'all') return true;
      return p.category === filter;
    })
    .sort((a, b) => a.order - b.order);

  const filters = [
    { id: 'backend-web' as const, label: 'Backend & Web' },
    { id: 'game' as const, label: 'Game Dev' },
    { id: 'all' as const, label: `All (${projects.length})` },
  ];

  return (
    <section>
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <h2 className="text-lg sm:text-xl font-semibold text-white">
          Projects
        </h2>

        {/* Seamless text filter */}
        <div className="flex items-center gap-3 sm:gap-4 text-xs font-normal">
          {filters.map((item) => (
            <button
              key={item.id}
              onClick={() => setFilter(item.id)}
              className={`transition-colors relative pb-1 ${
                filter === item.id
                  ? 'text-white font-medium'
                  : 'text-fg-secondary hover:text-white'
              }`}
            >
              {item.label}
              {filter === item.id && (
                <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-white rounded-full" />
              )}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          variants={staggerContainerVariants}
          initial="initial"
          animate="animate"
          className="grid grid-cols-2 gap-3.5 sm:gap-4 auto-rows-auto sm:auto-rows-[190px]"
        >
          {filtered.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
              onSelect={(p) => setSelectedProject(p)}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
