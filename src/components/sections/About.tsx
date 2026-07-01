import { motion } from 'framer-motion';
import { TbBulb, TbLayoutDashboard, TbDatabase, TbBrandPython, TbChartBar } from 'react-icons/tb';
import { SectionHeading } from '../ui/SectionHeading';

const highlights = [
  { title: 'Problem Solver', desc: 'Breaks down ambiguous business questions into structured analysis.', icon: TbBulb },
  { title: 'Dashboard Developer', desc: 'Builds Power BI and Excel dashboards people actually use.', icon: TbLayoutDashboard },
  { title: 'SQL Enthusiast', desc: 'Comfortable writing joins, CTEs and window functions at scale.', icon: TbDatabase },
  { title: 'Python Developer', desc: 'Automates cleaning and analysis pipelines with Pandas and NumPy.', icon: TbBrandPython },
  { title: 'Business Intelligence', desc: 'Connects raw numbers to decisions leadership can act on.', icon: TbChartBar },
];

export function About() {
  return (
    <section id="about" className="relative px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="About Me" title="Data-driven, detail-obsessed, business-focused" />

        <div className="mx-auto max-w-3xl space-y-5 text-center text-sm text-white/55 sm:text-base">
          <p>
            I&apos;m a B.Tech Computer Science Engineering student currently in my 7th semester, with a deep interest
            in solving real business problems using data. Over the past two years I&apos;ve built a strong, practical
            foundation in Excel, SQL, Power BI and Python — not as isolated tools, but as parts of one end-to-end
            analytics workflow.
          </p>
          <p>
            My focus sits at the intersection of Business Intelligence, Analytics and Dashboard Development. I enjoy
            taking a messy, unstructured dataset, cleaning and transforming it, and turning it into a dashboard or
            notebook that tells a clear, decision-ready story.
          </p>
          <p>
            Every project in this portfolio follows the same discipline: understand the business problem first,
            clean and transform the data with intent, then visualize and communicate the insight — never the other
            way around.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="glass rounded-2xl p-5 text-center"
            >
              <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] text-white">
                <h.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-sm font-semibold text-white">{h.title}</h3>
              <p className="mt-1.5 text-xs text-white/45">{h.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
