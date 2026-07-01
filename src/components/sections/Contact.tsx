import { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import { TbMail, TbPhone, TbBrandGithub, TbBrandLinkedin, TbSend } from 'react-icons/tb';
import { profile, socials } from '../../data/socials';
import { getIcon } from '../../utils/iconRegistry';
import { SectionHeading } from '../ui/SectionHeading';
import { Spinner } from '../ui/Loader';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialState: FormState = { name: '', email: '', subject: '', message: '' };

// Replace with your own EmailJS service, template and public key to enable live sending.
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

function validate(form: FormState) {
  const errors: Partial<FormState> = {};
  if (!form.name.trim()) errors.name = 'Name is required';
  if (!form.email.trim()) errors.email = 'Email is required';
  else if (!/^\S+@\S+\.\S+$/.test(form.email)) errors.email = 'Enter a valid email';
  if (!form.subject.trim()) errors.subject = 'Subject is required';
  if (!form.message.trim() || form.message.trim().length < 10) errors.message = 'Message should be at least 10 characters';
  return errors;
}

export function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [sending, setSending] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validation = validate(form);
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    setSending(true);
    try {
      if (EMAILJS_SERVICE_ID !== 'YOUR_SERVICE_ID') {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          { from_name: form.name, from_email: form.email, subject: form.subject, message: form.message },
          { publicKey: EMAILJS_PUBLIC_KEY },
        );
      } else {
        await new Promise((resolve) => setTimeout(resolve, 1200));
      }
      toast.success('Message sent! I\u2019ll get back to you soon.');
      setForm(initialState);
    } catch {
      toast.error('Something went wrong. Please try again or email me directly.');
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Contact" title="Let's talk about your data" subtitle="Open to data analyst internships, freelance dashboard work and collaboration." />

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="glass space-y-5 rounded-3xl p-6 sm:p-8"
          >
            <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-white">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-[var(--color-primary)]"><TbMail className="h-5 w-5" /></span>
              {profile.email}
            </a>
            <a href={`tel:${profile.phone}`} className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-white">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-[var(--color-primary)]"><TbPhone className="h-5 w-5" /></span>
              {profile.phone}
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-white">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-[var(--color-primary)]"><TbBrandGithub className="h-5 w-5" /></span>
              GitHub Profile
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-white">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-[var(--color-primary)]"><TbBrandLinkedin className="h-5 w-5" /></span>
              LinkedIn Profile
            </a>

            <div className="flex gap-2 pt-2">
              {socials.map((s) => {
                const Icon = getIcon(s.icon);
                return (
                  <a key={s.id} href={s.url} target={s.url.startsWith('http') ? '_blank' : undefined} rel="noreferrer" aria-label={s.label} className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/50 transition-colors hover:border-[var(--color-primary)]/60 hover:text-white">
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            onSubmit={onSubmit}
            noValidate
            className="glass space-y-4 rounded-3xl p-6 sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-white/50">Name</label>
                <input
                  id="name"
                  value={form.name}
                  onChange={(e) => update('name', e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-[var(--color-primary)] focus:outline-none"
                  placeholder="Your name"
                  aria-invalid={!!errors.name}
                />
                {errors.name && <p className="mt-1 text-xs text-[var(--color-error)]">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-white/50">Email</label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-[var(--color-primary)] focus:outline-none"
                  placeholder="you@example.com"
                  aria-invalid={!!errors.email}
                />
                {errors.email && <p className="mt-1 text-xs text-[var(--color-error)]">{errors.email}</p>}
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="mb-1.5 block text-xs font-medium text-white/50">Subject</label>
              <input
                id="subject"
                value={form.subject}
                onChange={(e) => update('subject', e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-[var(--color-primary)] focus:outline-none"
                placeholder="What's this about?"
                aria-invalid={!!errors.subject}
              />
              {errors.subject && <p className="mt-1 text-xs text-[var(--color-error)]">{errors.subject}</p>}
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-white/50">Message</label>
              <textarea
                id="message"
                value={form.message}
                onChange={(e) => update('message', e.target.value)}
                rows={5}
                className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-[var(--color-primary)] focus:outline-none"
                placeholder="Tell me a bit about what you need…"
                aria-invalid={!!errors.message}
              />
              {errors.message && <p className="mt-1 text-xs text-[var(--color-error)]">{errors.message}</p>}
            </div>
            <button
              type="submit"
              disabled={sending}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.01] disabled:opacity-60 sm:w-auto"
            >
              {sending ? <Spinner /> : <TbSend className="h-4 w-4" />}
              {sending ? 'Sending…' : 'Send Message'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
