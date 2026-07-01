import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface BaseProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  icon?: ReactNode;
  href?: string;
}

export function PrimaryButton({ children, icon, href, className = '', ...rest }: BaseProps) {
  const classes = `group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/30 transition-transform duration-300 hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] ${className}`;
  const content = (
    <motion.span whileTap={{ scale: 0.96 }} className="inline-flex items-center gap-2">
      {children}
      {icon}
    </motion.span>
  );
  if (href) {
    return (
      <a href={href} className={classes} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
        {content}
      </a>
    );
  }
  return (
    <button className={classes} {...rest}>
      {content}
    </button>
  );
}

export function SecondaryButton({ children, icon, href, className = '', ...rest }: BaseProps) {
  const classes = `group inline-flex items-center gap-2 rounded-full border border-white/15 glass px-6 py-3 text-sm font-semibold text-[var(--color-text)] transition-all duration-300 hover:border-[var(--color-primary)]/60 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] ${className}`;
  if (href) {
    return (
      <a href={href} className={classes} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
        {children}
        {icon}
      </a>
    );
  }
  return (
    <button className={classes} {...rest}>
      {children}
      {icon}
    </button>
  );
}

export function IconButton({ children, className = '', ...rest }: BaseProps) {
  return (
    <button
      className={`inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[var(--color-text)] transition-colors hover:border-[var(--color-primary)]/60 hover:text-[var(--color-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
