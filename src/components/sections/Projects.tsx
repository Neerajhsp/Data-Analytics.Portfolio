import { useMemo, useState } from 'react';
import { projects, projectCategories } from '../../data/projects';
import type { Project } from '../../types';
import { SectionHeading } from '../ui/SectionHeading';
import { SearchBar } from '../ui/SearchBar';
import { FilterBar } from '../ui/FilterBar';
import { ProjectCard } from '../ui/ProjectCard';
import { Pagination } from '../ui/Pagination';
import { Modal } from '../ui/Modal';
import { ProjectModal } from './ProjectModal';

const PAGE_SIZE = 6;

export function Projects() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<string>('All');
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      const matchesCategory = category === 'All' || p.category === category;
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.technologies.some((t) => t.toLowerCase().includes(q)) ||
        p.tags.some((t) => t.toLowerCase().includes(q)) ||
        p.category.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const visible = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <section id="projects" className="relative px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Projects"
          title="Analytics projects built end-to-end"
          subtitle="Every card links to the full case: business problem, process, insight and recommendation."
        />

        <div className="mx-auto mb-8 max-w-xl">
          <SearchBar value={query} onChange={(v) => { setQuery(v); setPage(1); }} />
        </div>
        <div className="mb-10">
          <FilterBar categories={projectCategories} active={category} onChange={(c) => { setCategory(c); setPage(1); }} />
        </div>

        {visible.length === 0 ? (
          <p className="py-16 text-center text-sm text-white/40">No projects match that search. Try a different keyword or filter.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} onView={setSelected} />
            ))}
          </div>
        )}

        <div className="mt-12">
          <Pagination page={page} totalPages={totalPages} onChange={setPage} />
        </div>
      </div>

      <Modal open={!!selected} onClose={() => setSelected(null)} labelledBy={selected ? `project-modal-${selected.id}` : undefined}>
        {selected && <ProjectModal project={selected} />}
      </Modal>
    </section>
  );
}
