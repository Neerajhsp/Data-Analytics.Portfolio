import { motion } from 'framer-motion';
// import CountUp from 'react-countup';
import CountUpModule from 'react-countup';
const CountUp = (CountUpModule as any).default ?? CountUpModule;
import { getIcon } from '../../utils/iconRegistry';

interface KPICardProps {
  label: string;
  value: string;
  icon?: string;
  index?: number;
}

function parseValue(value: string) {
  const match = value.match(/^([^\d]*)(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return { prefix: '', number: null as number | null, suffix: value };
  return { prefix: match[1], number: parseFloat(match[2]), suffix: match[3] };
}

export function KPICard({ label, value, icon, index = 0 }: KPICardProps) {
  const Icon = icon ? getIcon(icon) : null;
  const { prefix, number, suffix } = parseValue(value);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="glass rounded-2xl p-5 text-center"
    >
      {Icon && (
        <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-secondary)]/20 text-[var(--color-accent)]">
          <Icon className="h-5 w-5" />
        </div>
      )}
      <div className="font-display text-2xl font-bold text-gradient sm:text-3xl">
        {prefix}
        {number !== null ? <CountUp end={number} duration={2} enableScrollSpy scrollSpyOnce decimals={number % 1 !== 0 ? 1 : 0} /> : null}
        {suffix}
      </div>
      <div className="mt-1 text-xs uppercase tracking-wide text-white/45">{label}</div>
    </motion.div>
  );
}
