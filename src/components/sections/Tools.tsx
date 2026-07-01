import { motion } from 'framer-motion';
import { tools } from '../../data/tools';
import { getIcon } from '../../utils/iconRegistry';
import { SectionHeading } from '../ui/SectionHeading';

export function Tools() {
  return (
    <section id="tools" className="relative px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Tools" title="Tools I reach for every day" align="center" />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {tools.map((tool, i) => {
            const Icon = getIcon(tool.icon);
            return (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="glass group flex flex-col items-center rounded-2xl p-6 text-center"
              >
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-[var(--color-primary)] transition-colors group-hover:bg-gradient-to-br group-hover:from-[var(--color-primary)] group-hover:to-[var(--color-secondary)] group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-sm font-semibold text-white">{tool.name}</h3>
                <p className="mt-1 text-xs text-white/40">{tool.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
