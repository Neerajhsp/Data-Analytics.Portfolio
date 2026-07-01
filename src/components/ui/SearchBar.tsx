import { TbSearch, TbX } from 'react-icons/tb';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function SearchBar({ value, onChange, placeholder = 'Search projects, tech, or tags…' }: SearchBarProps) {
  return (
    <div className="glass relative flex w-full items-center gap-3 rounded-full px-5 py-3">
      <TbSearch className="h-5 w-5 shrink-0 text-white/40" aria-hidden />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label="Search projects"
        className="w-full bg-transparent text-sm text-[var(--color-text)] placeholder:text-white/35 focus:outline-none"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange('')}
          aria-label="Clear search"
          className="shrink-0 rounded-full p-1 text-white/40 transition-colors hover:bg-white/10 hover:text-white"
        >
          <TbX className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
