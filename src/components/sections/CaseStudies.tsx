import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TbChevronDown } from 'react-icons/tb';
import { caseStudies } from '../../data/caseStudies';
import { SectionHeading } from '../ui/SectionHeading';

function CaseStudyCard({ cs, index }: { cs: (typeof caseStudies)[number]; index: number }) {
  const [open, setOpen] = useState(index === 0);

  const blocks: { title: string; items: string[] }[] = [
    { title: 'Approach', items: cs.approach },
    { title: 'Cleaning', items: cs.cleaning },
    { title: 'Transformation', items: cs.transformation },
    { title: 'Analysis', items: cs.analysis },
    { title: 'Visualization', items: cs.visualization },
    { title: 'Insights', items: cs.insights },
    { title: 'Recommendations', items: cs.recommendations },
    { title: 'Future Improvements', items: cs.futureImprovements },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="glass overflow-hidden rounded-2xl"
    >
      <button onClick={() => setOpen((o) => !o)} className="flex w-full items-center gap-4 p-5 text-left sm:p-6">
        <img src={cs.thumbnail} alt="" className="hidden h-16 w-24 shrink-0 rounded-xl object-cover sm:block" />
        <div className="min-w-0 flex-1">
          <p className="text-[11px] uppercase tracking-wide text-[var(--color-accent)]">{cs.category}</p>
          <h3 className="truncate font-display text-base font-semibold text-white sm:text-lg">{cs.title}</h3>
          <p className="mt-1 line-clamp-1 text-sm text-white/45">{cs.businessProblem}</p>
        </div>
        <TbChevronDown className={`h-5 w-5 shrink-0 text-white/40 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="grid gap-5 border-t border-white/5 p-5 sm:grid-cols-2 sm:p-6">
              <div>
                <h4 className="mb-1 text-xs font-semibold uppercase tracking-wide text-white/40">Dataset</h4>
                <p className="text-sm text-white/55">{cs.dataset}</p>
              </div>
              {blocks.map(
                (b) =>
                  b.items.length > 0 && (
                    <div key={b.title}>
                      <h4 className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-white/40">{b.title}</h4>
                      <ul className="space-y-1">
                        {b.items.map((item) => (
                          <li key={item} className="flex gap-2 text-sm text-white/55">
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--color-primary)]" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ),
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function CaseStudies() {
  return (
    <section id="case-studies" className="relative px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Case Studies" title="The full story behind two projects" subtitle="From business problem to recommendation, fully documented." />
        <div className="space-y-4">
          {caseStudies.map((cs, i) => (
            <CaseStudyCard key={cs.id} cs={cs} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
