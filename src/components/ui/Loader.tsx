import { motion } from 'framer-motion';

export function Loader() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-[var(--color-bg)]">
      <div className="relative h-16 w-16">
        <motion.span
          className="absolute inset-0 rounded-full border-2 border-transparent border-t-[var(--color-primary)] border-r-[var(--color-secondary)]"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
        />
        <motion.span
          className="absolute inset-3 rounded-full border-2 border-transparent border-b-[var(--color-accent)]"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 1.4, ease: 'linear' }}
        />
      </div>
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/40">Loading dashboard…</p>
    </div>
  );
}

export function Spinner({ className = '' }: { className?: string }) {
  return (
    <motion.span
      className={`inline-block h-4 w-4 rounded-full border-2 border-white/20 border-t-white ${className}`}
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 0.7, ease: 'linear' }}
    />
  );
}
