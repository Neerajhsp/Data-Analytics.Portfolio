import { motion } from 'framer-motion';
import { services } from '../../data/services';
import { getIcon } from '../../utils/iconRegistry';
import { SectionHeading } from '../ui/SectionHeading';

export function Services() {
  return (
    <section id="services" className="relative px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Services" title="How I can help your team" subtitle="End-to-end analytics support, from raw data to a finished decision-ready report." />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = getIcon(service.icon);
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: (i % 6) * 0.07 }}
                whileHover={{ y: -6 }}
                className="glass group relative overflow-hidden rounded-2xl p-6"
              >
                <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[var(--color-primary)]/10 blur-2xl transition-all duration-500 group-hover:bg-[var(--color-secondary)]/20" />
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-base font-semibold text-white">{service.title}</h3>
                <p className="mt-2 text-sm text-white/50">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
