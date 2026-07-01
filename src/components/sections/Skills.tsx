import { useState } from 'react';
import { skills } from '../../data/skills';
import type { SkillCategory } from '../../types';
import { SectionHeading } from '../ui/SectionHeading';
import { SkillCard } from '../ui/SkillCard';
import { FilterBar } from '../ui/FilterBar';

const categories: ('All' | SkillCategory)[] = ['All', 'Programming', 'Excel', 'Visualization', 'Analytics', 'Development'];

export function Skills() {
  const [active, setActive] = useState<'All' | SkillCategory>('All');
  const filtered = active === 'All' ? skills : skills.filter((s) => s.category === active);

  return (
    <section id="skills" className="relative px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Skills" title="A full-stack analytics toolkit" subtitle="From spreadsheet modelling to production dashboards and Python automation." />

        <div className="mb-10">
          <FilterBar categories={categories} active={active} onChange={(c) => setActive(c as 'All' | SkillCategory)} />
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((skill, i) => (
            <SkillCard key={skill.id} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
