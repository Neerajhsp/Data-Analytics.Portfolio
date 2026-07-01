import { motion } from 'framer-motion';
import { TbTrendingDown, TbTrendingUp, TbMinus } from 'react-icons/tb';
import { businessInsights } from '../../data/businessInsights';
import { getIcon } from '../../utils/iconRegistry';
import { SectionHeading } from '../ui/SectionHeading';

const trendIcon = { up: TbTrendingUp, down: TbTrendingDown, neutral: TbMinus };
const trendColor = { up: 'text-[var(--color-success)]', down: 'text-[var(--color-accent)]', neutral: 'text-white/40' };

export function BusinessInsights() {
  return (
    <section id="business-insights" className="relative px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Business Insights" title="Numbers that drove real decisions" subtitle="A snapshot of the metrics surfaced across every project in this portfolio." />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {businessInsights.map((insight, i) => {
            const Icon = getIcon(insight.icon);
            const TrendIcon = trendIcon[insight.trend];
            return (
              <motion.div
                key={insight.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: (i % 8) * 0.06 }}
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-5"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 text-[var(--color-primary)]">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className={`flex items-center gap-1 text-xs font-semibold ${trendColor[insight.trend]}`}>
                    <TrendIcon className="h-3.5 w-3.5" /> {insight.metric}
                  </span>
                </div>
                <h3 className="font-display text-sm font-semibold text-white">{insight.title}</h3>
                <p className="mt-1 text-xs text-white/45">{insight.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
