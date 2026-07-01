import { motion } from 'framer-motion';
import { getIcon } from '../../utils/iconRegistry';
import type { Skill } from '../../types';

export function SkillCard({ skill, index = 0 }: { skill: Skill; index?: number }) {
  const Icon = getIcon(skill.icon);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: (index % 8) * 0.05 }}
      whileHover={{ y: -4 }}
      className="glass rounded-2xl p-4"
    >
      <div className="mb-3 flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-accent)]/20 text-[var(--color-primary)]">
          <Icon className="h-5 w-5" />
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-white/90">{skill.name}</p>
          <p className="text-[11px] text-white/40">{skill.experience}</p>
        </div>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]"
        />
      </div>
    </motion.div>
  );
}
