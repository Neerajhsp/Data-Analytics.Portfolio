import { motion } from 'framer-motion';
import { TbDatabase } from 'react-icons/tb';
import { sqlShowcase } from '../../data/sqlShowcase';
import { SectionHeading } from '../ui/SectionHeading';

export function SQLShowcase() {
  return (
    <section id="sql-showcase" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="SQL Showcase" title="Queries that answer real business questions" />
        <div className="grid gap-5 lg:grid-cols-3">
          {sqlShowcase.map((q, i) => (
            <motion.div
              key={q.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass flex flex-col rounded-2xl p-5"
            >
              <div className="mb-2 flex items-center gap-2 text-[var(--color-accent)]">
                <TbDatabase className="h-4 w-4" />
                <h3 className="font-display text-sm font-semibold text-white">{q.title}</h3>
              </div>
              <p className="mb-3 text-xs text-white/45">{q.objective}</p>
              <pre className="overflow-x-auto rounded-xl bg-black/40 p-3 font-mono text-[11px] leading-relaxed text-[var(--color-accent)]">
                <code>{q.query}</code>
              </pre>
              <p className="mt-3 text-xs text-white/55">{q.explanation}</p>
              <div className="mt-3 rounded-lg bg-[var(--color-success)]/10 px-3 py-2 text-xs text-[var(--color-success)]">{q.result}</div>
              <p className="mt-2 text-[11px] text-white/35">Optimization: {q.optimizationNotes}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
