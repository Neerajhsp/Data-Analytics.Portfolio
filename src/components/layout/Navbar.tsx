import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TbMenu2 } from 'react-icons/tb';
import { navLinks } from '../../data/navLinks';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { ThemeToggle } from './ThemeToggle';
import { Sidebar } from './Sidebar';
import { PrimaryButton } from '../ui/Buttons';

const primaryIds = navLinks.map((l) => l.id);

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const active = useScrollSpy(primaryIds);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const visibleLinks = navLinks.slice(0, 8);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed inset-x-0 top-0 z-[80] transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}
      >
        <div className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-5 transition-all duration-300 ${scrolled ? 'glass mx-4 sm:mx-6 lg:mx-auto' : ''}`}>
          <a href="#home" className="font-display text-lg font-bold tracking-tight text-white">
            Neeraj<span className="text-gradient">.</span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {visibleLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`rounded-full px-3 py-2 text-[13px] font-medium transition-colors ${
                  active === link.id ? 'text-white' : 'text-white/50 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <div className="hidden sm:block">
              <PrimaryButton href="#contact" className="!px-5 !py-2.5 !text-xs">
                Hire Me
              </PrimaryButton>
            </div>
            <button
              onClick={() => setSidebarOpen(true)}
              aria-label="Open menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 md:hidden"
            >
              <TbMenu2 className="h-5 w-5" />
            </button>
          </div>
        </div>
      </motion.header>
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} active={active} />
    </>
  );
}
