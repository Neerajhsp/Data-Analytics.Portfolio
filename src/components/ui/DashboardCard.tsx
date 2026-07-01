import { motion } from 'framer-motion';
import { TbMaximize } from 'react-icons/tb';
import type { Project } from '../../types';

interface DashboardCardProps {
  project: Project;
  index?: number;
  onView: (project: Project) => void;
}

export function DashboardCard({ project, index = 0, onView }: DashboardCardProps) {
  return (
    <motion.button
      onClick={() => onView(project)}
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: (index % 4) * 0.08 }}
      className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl text-left"
    >
      <img src={project.thumbnail} alt={`${project.title} dashboard preview`} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/85 via-black/20 to-transparent p-4 opacity-90 transition-opacity group-hover:opacity-100">
        <p className="text-[11px] uppercase tracking-wide text-[var(--color-accent)]">{project.category}</p>
        <h4 className="font-display text-sm font-semibold text-white">{project.title}</h4>
      </div>
      <span className="absolute right-3 top-3 flex h-9 w-9 scale-90 items-center justify-center rounded-full bg-black/50 text-white opacity-0 backdrop-blur transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
        <TbMaximize className="h-4 w-4" />
      </span>
    </motion.button>
  );
}
