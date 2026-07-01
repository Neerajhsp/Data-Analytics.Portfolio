interface FilterBarProps {
  categories: readonly string[];
  active: string;
  onChange: (category: string) => void;
}

export function FilterBar({ categories, active, onChange }: FilterBarProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2" role="tablist" aria-label="Project category filters">
      {categories.map((cat) => {
        const isActive = active === cat;
        return (
          <button
            key={cat}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(cat)}
            className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-all duration-300 ${
              isActive
                ? 'border-transparent bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white shadow-lg shadow-blue-900/30'
                : 'border-white/10 bg-white/[0.03] text-white/50 hover:border-white/25 hover:text-white'
            }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
