import { motion } from 'framer-motion';
import { TbBrandGithub } from 'react-icons/tb';
import { notebooks } from '../../data/notebooks';
import { SectionHeading } from '../ui/SectionHeading';

export function NotebookShowcase() {
  return (
    <section id="notebooks" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Python Notebooks" title="Exploratory analysis, step by step" />
        <div className="grid gap-5 sm:grid-cols-2">
          {notebooks.map((nb, i) => (
            <motion.div
              key={nb.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass flex gap-4 rounded-2xl p-5"
            >
              <img src={nb.thumbnail} alt="" className="h-24 w-32 shrink-0 rounded-xl object-cover" />
              <div className="min-w-0">
                <h3 className="truncate font-display text-sm font-semibold text-white">{nb.title}</h3>
                <div className="mt-1.5 flex flex-wrap gap-1">
                  {nb.libraries.map((l) => (
                    <span key={l} className="rounded-full bg-white/5 px-2 py-0.5 text-[10px] text-white/50">{l}</span>
                  ))}
                </div>
                <p className="mt-2 line-clamp-2 text-xs text-white/45">{nb.insights[0]}</p>
                <a href={nb.githubLink} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-1.5 text-xs text-[var(--color-accent)]">
                  <TbBrandGithub className="h-3.5 w-3.5" /> View Notebook
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
