import { motion } from 'framer-motion';
// import CountUp from 'react-countup';
import CountUpModule from 'react-countup';
const CountUp = (CountUpModule as any).default ?? CountUpModule;
import { TbBrandGithub, TbDownload, TbMail, TbLayoutDashboard } from 'react-icons/tb';
import { useTypingEffect } from '../../hooks/useTypingEffect';
import { profile } from '../../data/socials';
import { projects } from '../../data/projects';
import { certifications } from '../../data/certifications';
import { skills } from '../../data/skills';
import { PrimaryButton, SecondaryButton } from '../ui/Buttons';

const stats = [
  { label: 'Projects Completed', value: projects.filter((p) => p.status === 'Completed').length },
  { label: 'Dashboards Created', value: projects.filter((p) => p.category === 'Power BI').length + 2 },
  { label: 'Certificates', value: certifications.length },
  { label: 'Technologies', value: skills.length },
];

export function Hero() {
  const typed = useTypingEffect(profile.roles);

  return (
    <section id="home" className="relative overflow-hidden pb-24 pt-36 sm:pt-44">
      <div className="grid-backdrop absolute inset-0 animate-[grid-pan_40s_linear_infinite] opacity-60" aria-hidden />
      <div className="absolute left-1/2 top-0 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-[var(--color-primary)]/25 blur-[140px]" aria-hidden />
      <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-[var(--color-secondary)]/20 blur-[120px]" aria-hidden />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-accent)]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-success)] animate-pulse" />
            Available for Data Analyst Roles
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Hi, I&apos;m {profile.name}
            <span className="mt-2 block text-2xl text-white/70 sm:text-3xl lg:text-4xl">
              <span className="text-gradient">{typed}</span>
              <span className="ml-1 inline-block w-[2px] animate-pulse bg-[var(--color-accent)] align-middle" style={{ height: '0.85em' }} />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-base text-white/55 sm:text-lg"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <PrimaryButton href="/resume.pdf" icon={<TbDownload className="h-4 w-4" />}>
              Download Resume
            </PrimaryButton>
            <SecondaryButton href="#projects" icon={<TbLayoutDashboard className="h-4 w-4" />}>
              View Projects
            </SecondaryButton>
            <SecondaryButton href="#contact" icon={<TbMail className="h-4 w-4" />}>
              Contact Me
            </SecondaryButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-2xl font-bold text-gradient sm:text-3xl">
                  <CountUp end={s.value} duration={2} />+
                </div>
                <div className="mt-1 text-xs text-white/40">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="relative hidden lg:block">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="glow-ring glass relative mx-auto flex h-80 w-80 items-center justify-center rounded-[2.5rem]"
          >
            <div className="flex h-64 w-64 items-center justify-center rounded-[2rem] bg-gradient-to-br from-[var(--color-primary)]/30 to-[var(--color-secondary)]/30 font-display text-7xl font-bold text-white/90">
              {profile.name.split(' ').map((n) => n[0]).join('')}
            </div>
          </motion.div>

          <motion.div
            className="animate-float absolute -left-6 top-6 flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="glass flex items-center gap-2 rounded-2xl px-4 py-3">
              <TbBrandGithub className="h-5 w-5 text-white" />
              <span className="text-xs font-medium text-white/80">GitHub Synced</span>
            </div>
          </motion.div>

          <motion.div
            className="animate-float-slow absolute -right-4 top-32 flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <div className="glass rounded-2xl px-4 py-3">
              <p className="text-[10px] uppercase tracking-wide text-white/40">Power BI</p>
              <p className="font-display text-sm font-semibold text-[var(--color-success)]">+12% Growth</p>
            </div>
          </motion.div>

          <motion.div
            className="animate-float absolute -bottom-4 left-8 flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="glass rounded-2xl px-4 py-3">
              <p className="text-[10px] uppercase tracking-wide text-white/40">SQL</p>
              <p className="font-mono text-xs text-[var(--color-accent)]">SELECT * FROM insights</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
