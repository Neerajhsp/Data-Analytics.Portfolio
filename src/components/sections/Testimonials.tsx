import { motion } from 'framer-motion';
import { TbQuote } from 'react-icons/tb';
import { testimonials } from '../../data/testimonials';
import { SectionHeading } from '../ui/SectionHeading';

export function Testimonials() {
  return (
    <section id="testimonials" className="relative px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Testimonials" title="What people say" />
        <div className="grid gap-5 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-6"
            >
              <TbQuote className="mb-3 h-6 w-6 text-[var(--color-primary)]/60" />
              <p className="text-sm text-white/65">{t.message}</p>
              <div className="mt-4 flex items-center gap-3">
                <img src={t.avatar} alt="" className="h-10 w-10 rounded-full object-cover" />
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-white/40">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
