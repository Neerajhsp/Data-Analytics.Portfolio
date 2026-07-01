import { motion } from 'framer-motion';
import { TbSchool } from 'react-icons/tb';
import { education } from '../../data/education';
import { SectionHeading } from '../ui/SectionHeading';

export function Education() {
  return (
    <section id="education" className="relative px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="Education" title="Academic foundation" />
        <div className="space-y-5">
          {education.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass flex flex-col gap-4 rounded-2xl p-6 sm:flex-row sm:items-center"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] text-white">
                <TbSchool className="h-7 w-7" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-mono text-xs uppercase tracking-wide text-[var(--color-accent)]">{edu.startYear} — {edu.endYear}</p>
                <h3 className="mt-1 font-display text-lg font-semibold text-white">{edu.degree}</h3>
                <p className="text-sm text-white/55">{edu.field}</p>
                <p className="mt-1 text-sm text-white/40">{edu.institution} · {edu.status}</p>
                <p className="mt-2 text-sm text-white/50">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
