import { TbMoonStars, TbSun } from 'react-icons/tb';
import { useTheme } from '../../hooks/useTheme';

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-colors hover:border-[var(--color-primary)]/60 hover:text-[var(--color-primary)]"
    >
      {theme === 'dark' ? <TbSun className="h-4 w-4" /> : <TbMoonStars className="h-4 w-4" />}
    </button>
  );
}
