import { useState } from 'react';
import { projects } from '../../data/projects';
import type { Project } from '../../types';
import { SectionHeading } from '../ui/SectionHeading';
import { DashboardCard } from '../ui/DashboardCard';
import { Modal } from '../ui/Modal';
import { ProjectModal } from './ProjectModal';

const galleryProjects = projects.filter((p) => !p.comingSoon);

export function DashboardGallery() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="dashboard-gallery" className="relative px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Dashboard Gallery"
          title="A closer look at the dashboards"
          subtitle="Power BI, Excel, Python notebook and SQL dashboard previews — click any tile for a full screen view."
        />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {galleryProjects.map((project, i) => (
            <DashboardCard key={project.id} project={project} index={i} onView={setSelected} />
          ))}
        </div>
      </div>

      <Modal open={!!selected} onClose={() => setSelected(null)} labelledBy={selected ? `project-modal-${selected.id}` : undefined}>
        {selected && <ProjectModal project={selected} />}
      </Modal>
    </section>
  );
}
