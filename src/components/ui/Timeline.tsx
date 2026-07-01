import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface TimelineItemProps {
  index: number;
  title: string;
  subtitle: string;
  period: string;
  children?: ReactNode;
}

export function TimelineItem({ index, title, subtitle, period, children }: TimelineItemProps) {
  const isLeft = index % 2 === 0;
  return (
    <div className="relative pl-10 md:grid md:grid-cols-2 md:gap-10 md:pl-0">
      <span className="absolute left-[7px] top-1.5 h-3 w-3 -translate-x-1/2 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] ring-4 ring-[var(--color-bg)] md:left-1/2" />
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -24 : 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
        className={`glass rounded-2xl p-5 md:col-span-1 ${isLeft ? 'md:col-start-1 md:text-right' : 'md:col-start-2'}`}
      >
        <p className="font-mono text-xs uppercase tracking-wide text-[var(--color-accent)]">{period}</p>
        <h3 className="mt-1 font-display text-base font-semibold text-white">{title}</h3>
        <p className="text-sm text-white/50">{subtitle}</p>
        {children && <div className="mt-3 text-sm text-white/60">{children}</div>}
      </motion.div>
    </div>
  );
}

export function Timeline({ children }: { children: ReactNode }) {
  return (
    <div className="relative space-y-8">
      <div className="absolute left-[13px] top-0 h-full w-px bg-gradient-to-b from-[var(--color-primary)]/60 via-white/10 to-transparent md:left-1/2" />
      {children}
    </div>
  );
}
