import { motion } from 'framer-motion';
import { TbDownload, TbFileText } from 'react-icons/tb';
import { education } from '../../data/education';
import { skills } from '../../data/skills';
import { projects } from '../../data/projects';
import { certifications } from '../../data/certifications';
import { SectionHeading } from '../ui/SectionHeading';
import { PrimaryButton } from '../ui/Buttons';

export function Resume() {
  const summary = [
    { label: 'Education', value: education[0]?.degree ?? '—' },
    { label: 'Technical Skills', value: `${skills.length} tracked` },
    { label: 'Projects', value: `${projects.filter((p) => !p.comingSoon).length} completed` },
    { label: 'Certificates', value: `${certifications.length} earned` },
  ];

  return (
    <section id="resume" className="relative px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="Resume" title="One page, everything that matters" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="glow-ring glass flex flex-col items-center gap-8 rounded-3xl p-8 sm:flex-row sm:items-stretch sm:p-10"
        >
          <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] text-white">
            <TbFileText className="h-12 w-12" />
          </div>
          <div className="flex-1">
            <h3 className="font-display text-xl font-semibold text-white">Neeraj Kumar — Resume</h3>
            <p className="mt-1 text-sm text-white/50">Data Analyst · BI Analyst · Power BI Developer · Python Developer</p>

            <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {summary.map((s) => (
                <div key={s.label}>
                  <p className="text-[11px] uppercase tracking-wide text-white/35">{s.label}</p>
                  <p className="mt-0.5 text-sm font-medium text-white/80">{s.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <PrimaryButton href="/resume.pdf" icon={<TbDownload className="h-4 w-4" />}>
                Download Resume
              </PrimaryButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
