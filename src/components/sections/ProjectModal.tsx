import { TbBrandGithub, TbExternalLink, TbCircleCheck, TbBulb, TbTargetArrow } from 'react-icons/tb';
import type { Project } from '../../types';
import { ChartCard } from '../ui/ChartCard';
import { PrimaryButton, SecondaryButton } from '../ui/Buttons';

function ListBlock({ title, items, icon: Icon }: { title: string; items: string[]; icon: typeof TbCircleCheck }) {
  if (!items.length) return null;
  return (
    <div>
      <h4 className="mb-2 flex items-center gap-2 font-display text-sm font-semibold text-white/85">
        <Icon className="h-4 w-4 text-[var(--color-accent)]" /> {title}
      </h4>
      <ul className="space-y-1.5">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-sm text-white/55">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--color-primary)]" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ProjectModal({ project }: { project: Project }) {
  return (
    <div id={`project-modal-${project.id}`}>
      <div className="relative mb-6 aspect-[16/9] w-full overflow-hidden rounded-2xl">
        <img src={project.thumbnail} alt={`${project.title} large preview`} className="h-full w-full object-cover" />
      </div>

      <div className="mb-2 flex flex-wrap items-center gap-2 text-xs text-white/40">
        <span className="rounded-full bg-white/5 px-2.5 py-1">{project.category}</span>
        <span>{project.date}</span>
        <span>{project.difficulty}</span>
        <span className="rounded-full bg-[var(--color-success)]/15 px-2.5 py-1 text-[var(--color-success)]">{project.status}</span>
      </div>
      <h3 id={`project-modal-${project.id}`} className="font-display text-2xl font-bold text-white">{project.title}</h3>
      <p className="mt-2 text-sm text-white/55">{project.longDescription}</p>

      {project.kpis.length > 0 && (
        <div className="mt-6 grid grid-cols-3 gap-3">
          {project.kpis.map((k) => (
            <div key={k.label} className="glass rounded-xl p-3 text-center">
              <div className="font-display text-lg font-bold text-gradient">{k.value}</div>
              <div className="mt-0.5 text-[10px] uppercase tracking-wide text-white/40">{k.label}</div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="glass rounded-xl p-4">
          <h4 className="mb-1 text-xs font-semibold uppercase tracking-wide text-white/40">Business Problem</h4>
          <p className="text-sm text-white/60">{project.businessProblem}</p>
        </div>
        <div className="glass rounded-xl p-4">
          <h4 className="mb-1 text-xs font-semibold uppercase tracking-wide text-white/40">Dataset</h4>
          <p className="text-sm text-white/60">{project.dataset}</p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((t) => (
          <span key={t} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/55">{t}</span>
        ))}
      </div>

      {project.charts.length > 0 && (
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {project.charts.map((chart) => (
            <ChartCard key={chart.title} chart={chart} />
          ))}
        </div>
      )}

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <ListBlock title="Data Cleaning Steps" items={project.cleaningSteps} icon={TbCircleCheck} />
        <ListBlock title="Analysis Process" items={project.analysisProcess} icon={TbCircleCheck} />
        <ListBlock title="Visualizations" items={project.visualizations} icon={TbCircleCheck} />
        <ListBlock title="Challenges" items={project.challenges} icon={TbCircleCheck} />
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <ListBlock title="Business Insights" items={project.insights} icon={TbBulb} />
        <ListBlock title="Recommendations" items={project.recommendations} icon={TbTargetArrow} />
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        {project.githubLink && (
          <SecondaryButton href={project.githubLink} icon={<TbBrandGithub className="h-4 w-4" />}>
            View on GitHub
          </SecondaryButton>
        )}
        {(project.liveDemoLink || project.dashboardLink || project.notebookLink) && (
          <PrimaryButton href={project.liveDemoLink ?? project.dashboardLink ?? project.notebookLink} icon={<TbExternalLink className="h-4 w-4" />}>
            Live Dashboard
          </PrimaryButton>
        )}
      </div>
    </div>
  );
}
