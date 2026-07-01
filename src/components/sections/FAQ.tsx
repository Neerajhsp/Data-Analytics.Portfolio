import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TbChevronDown } from 'react-icons/tb';
import { faqs } from '../../data/faqs';
import { SectionHeading } from '../ui/SectionHeading';

export function FAQ() {
  const [open, setOpen] = useState<string | null>(faqs[0]?.id ?? null);

  return (
    <section id="faq" className="relative px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="FAQ" title="Common questions" />
        <div className="space-y-3">
          {faqs.map((faq) => {
            const isOpen = open === faq.id;
            return (
              <div key={faq.id} className="glass overflow-hidden rounded-2xl">
                <button
                  onClick={() => setOpen(isOpen ? null : faq.id)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-sm font-semibold text-white">{faq.question}</span>
                  <TbChevronDown className={`h-4 w-4 shrink-0 text-white/40 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm text-white/55">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
