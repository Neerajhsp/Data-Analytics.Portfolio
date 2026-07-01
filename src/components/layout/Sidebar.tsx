import { AnimatePresence, motion } from 'framer-motion';
import { TbX } from 'react-icons/tb';
import { navLinks } from '../../data/navLinks';

interface SidebarProps {
  open: boolean;
  onClose: () => void;
  active: string;
}

export function Sidebar({ open, onClose, active }: SidebarProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[95] bg-black/60 backdrop-blur-sm md:hidden"
            onClick={onClose}
          />
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="glass fixed right-0 top-0 z-[96] h-full w-72 overflow-y-auto p-6 md:hidden"
            aria-label="Mobile navigation"
          >
            <div className="mb-8 flex items-center justify-between">
              <span className="font-display text-sm font-semibold text-gradient">Menu</span>
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/70 hover:text-white"
              >
                <TbX className="h-4 w-4" />
              </button>
            </div>
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={onClose}
                  className={`rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                    active === link.id ? 'bg-white/10 text-white' : 'text-white/55 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
