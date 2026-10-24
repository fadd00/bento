import { motion } from 'framer-motion';
import { staggerContainerVariants, slideUpItemVariants } from '../../lib/animations';

const services = [
  {
    title: 'Backend & API Engineering',
    description:
      'Designing fast, resilient RESTful APIs and core business logic in Go, Laravel, and Node.js with strict validation and clean architectural patterns.',
  },
  {
    title: 'Database Architecture',
    description:
      'Architecting relational schemas in PostgreSQL and MySQL, optimizing index strategies, structuring complex queries, and ensuring transactional data integrity.',
  },
  {
    title: 'CI/CD & Cloud Deployment',
    description:
      'Automating testing and deployment pipelines via GitHub Actions, configuring zero-downtime releases on Railway / Linux servers, and managing Cloudflare DNS.',
  },
  {
    title: 'Web & Backoffice Portals',
    description:
      'Developing responsive administrative dashboards, company profiles, LMS backoffices, and gaming web portals with authentication and role-based permissions.',
  },
];

const techCategories = [
  {
    name: 'Languages & Core Backend',
    items: ['Go (Golang)', 'PHP (Laravel)', 'Node.js / Express', 'TypeScript', 'REST APIs', 'Auth & Security'],
  },
  {
    name: 'Databases & Storage',
    items: ['PostgreSQL', 'MySQL', 'SQLite', 'Redis', 'Database Schema Modeling', 'Query Optimization'],
  },
  {
    name: 'DevOps & Infrastructure',
    items: ['CI/CD Pipelines (GitHub Actions)', 'Docker', 'Linux / Bash', 'Cloudflare DNS & SSL', 'Railway', 'Git'],
  },
  {
    name: 'Secondary / Creative',
    items: ['Godot Engine 4', 'GDScript', 'State Machines', 'Algorithmic Systems'],
  },
];

export default function StackSection() {
  return (
    <motion.div
      variants={staggerContainerVariants}
      initial="initial"
      animate="animate"
      className="flex flex-col gap-10"
    >
      {/* Services Grid */}
      <section>
        <div className="mb-6">
          <h2 className="text-lg sm:text-xl font-semibold text-white mb-1">Services</h2>
          <p className="text-xs sm:text-sm text-fg-secondary">
            Backend architecture and web engineering solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={slideUpItemVariants}
              className="glass-card p-5"
            >
              <h3 className="text-sm sm:text-[15px] font-semibold text-white mb-1.5">{service.title}</h3>
              <p className="text-xs text-fg-secondary leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tech Stack Breakdown */}
      <section>
        <div className="mb-6">
          <h2 className="text-lg sm:text-xl font-semibold text-white mb-1">Toolkit</h2>
          <p className="text-xs sm:text-sm text-fg-secondary">
            Technologies and workflows I work with daily.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {techCategories.map((cat) => (
            <motion.div
              key={cat.name}
              variants={slideUpItemVariants}
              className="p-4 rounded-xl bg-bg-secondary/30 border border-white/[0.05]"
            >
              <h4 className="text-[11px] font-medium text-muted-text uppercase tracking-wider mb-2">
                {cat.name}
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs text-fg-lighter px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.05]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
