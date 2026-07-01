import { socials, profile } from '../../data/socials';
import { navLinks } from '../../data/navLinks';
import { getIcon } from '../../utils/iconRegistry';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-white/5 px-6 pb-10 pt-16">
      <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <a href="#home" className="font-display text-lg font-bold text-white">
            Neeraj<span className="text-gradient">.</span>
          </a>
          <p className="mt-3 max-w-xs text-sm text-white/45">{profile.tagline}</p>
          <div className="mt-5 flex gap-2">
            {socials.map((s) => {
              const Icon = getIcon(s.icon);
              return (
                <a
                  key={s.id}
                  href={s.url}
                  target={s.url.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/55 transition-colors hover:border-[var(--color-primary)]/60 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold text-white">Quick Links</h4>
          <ul className="mt-4 space-y-2">
            {navLinks.slice(0, 7).map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} className="text-sm text-white/45 transition-colors hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold text-white">More</h4>
          <ul className="mt-4 space-y-2">
            {navLinks.slice(7).map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} className="text-sm text-white/45 transition-colors hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold text-white">Get in Touch</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/45">
            <li>{profile.email}</li>
            <li>{profile.phone}</li>
            <li>{profile.location}</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-xs text-white/35 sm:flex-row">
        <p>© {year} Neeraj Kumar. All rights reserved.</p>
        <p className="font-mono">Built with React, TypeScript & Tailwind CSS</p>
      </div>
    </footer>
  );
}
