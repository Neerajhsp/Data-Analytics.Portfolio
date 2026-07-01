import { motion } from 'framer-motion';
import { TbArrowRight } from 'react-icons/tb';
import { blogs } from '../../data/blogs';
import { SectionHeading } from '../ui/SectionHeading';

export function BlogPreview() {
  return (
    <section id="blog" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Writing" title="Notes on data, dashboards & SQL" />
        <div className="grid gap-5 sm:grid-cols-3">
          {blogs.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass flex flex-col rounded-2xl p-5"
            >
              <div className="flex items-center gap-2 text-[11px] text-white/35">
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="mt-2 font-display text-sm font-semibold text-white">{post.title}</h3>
              <p className="mt-2 flex-1 text-xs text-white/45">{post.excerpt}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {post.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-white/5 px-2 py-0.5 text-[10px] text-white/45">{tag}</span>
                ))}
              </div>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-[var(--color-accent)]">
                Read more <TbArrowRight className="h-3.5 w-3.5" />
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
