import { motion } from 'framer-motion';
import { TbAward } from 'react-icons/tb';
import { getIcon } from '../../utils/iconRegistry';
import type { Certification } from '../../types';

export function CertificateCard({
  cert,
  index = 0,
}: {
  cert: Certification;
  index?: number;
}) {
  const Icon = getIcon(cert.icon);

  return (
    <motion.a
      href={cert.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="glass relative block overflow-hidden rounded-2xl p-6 cursor-pointer"
    >
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[var(--color-primary)]/10 blur-2xl" />

      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] text-white">
        <Icon className="h-6 w-6" />
      </div>

      <h3 className="font-display text-base font-semibold text-white">
        {cert.title}
      </h3>

      <p className="mt-1 text-sm text-white/50">{cert.issuer}</p>

      <div className="mt-4 flex items-center justify-between text-xs text-white/35">
        <span className="font-mono">{cert.date}</span>

        <span className="inline-flex items-center gap-1 text-[var(--color-accent)]">
          <TbAward className="h-3.5 w-3.5" />
          Verified
        </span>
      </div>
    </motion.a>
  );
}