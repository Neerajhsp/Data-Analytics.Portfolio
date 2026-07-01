import { motion } from 'framer-motion';
import { TbBrandGithub, TbExternalLink, TbEye } from 'react-icons/tb';
import type { Project } from '../../types';

const statusStyles: Record<Project['status'], string> = {
  Completed: 'bg-[var(--color-success)]/15 text-[var(--color-success)]',
  'In Progress': 'bg-[var(--color-warning)]/15 text-[var(--color-warning)]',
  'Coming Soon': 'bg-white/10 text-white/50',
};

interface ProjectCardProps {
  project: Project;
  index?: number;
  onView: (project: Project) => void;
}

export function ProjectCard({ project, index = 0, onView }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.07 }}
      whileHover={{ y: -8 }}
      className="glass group relative flex flex-col overflow-hidden rounded-3xl"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <img
          src={project.thumbnail}
          alt={`${project.title} preview`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent" />
        <span className={`absolute left-4 top-4 rounded-full px-3 py-1 text-[11px] font-semibold ${statusStyles[project.status]}`}>
          {project.status}
        </span>
        <span className="absolute right-4 top-4 rounded-full bg-black/40 px-3 py-1 text-[11px] font-medium text-white/80 backdrop-blur">
          {project.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-center justify-between text-[11px] text-white/40">
          <span className="font-mono">{project.date}</span>
          <span>{project.difficulty}</span>
        </div>
        <h3 className="font-display text-lg font-semibold text-white">{project.title}</h3>
        <p className="mt-2 line-clamp-3 text-sm text-white/55">{project.shortDescription}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-white/60">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-2 pt-4">
          <button
            onClick={() => onView(project)}
            className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] px-4 py-2 text-xs font-semibold text-white transition-transform hover:scale-[1.02]"
          >
            <TbEye className="h-4 w-4" /> View Details
          </button>
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} GitHub repository`}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/60 transition-colors hover:border-[var(--color-primary)]/60 hover:text-white"
            >
              <TbBrandGithub className="h-4 w-4" />
            </a>
          )}
          {(project.liveDemoLink || project.dashboardLink) && (
            <a
              href={project.liveDemoLink ?? project.dashboardLink}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} live demo`}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/60 transition-colors hover:border-[var(--color-primary)]/60 hover:text-white"
            >
              <TbExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
