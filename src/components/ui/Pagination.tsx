import { TbChevronLeft, TbChevronRight } from 'react-icons/tb';

interface PaginationProps {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
}

export function Pagination({ page, totalPages, onChange }: PaginationProps) {
  if (totalPages <= 1) return null;
  return (
    <nav className="flex items-center justify-center gap-2" aria-label="Pagination">
      <button
        onClick={() => onChange(Math.max(1, page - 1))}
        disabled={page === 1}
        aria-label="Previous page"
        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/60 transition-colors hover:border-[var(--color-primary)]/60 hover:text-white disabled:opacity-30"
      >
        <TbChevronLeft className="h-4 w-4" />
      </button>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
        <button
          key={p}
          onClick={() => onChange(p)}
          aria-current={p === page ? 'page' : undefined}
          className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-medium transition-colors ${
            p === page
              ? 'bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white'
              : 'border border-white/10 text-white/50 hover:border-white/25 hover:text-white'
          }`}
        >
          {p}
        </button>
      ))}
      <button
        onClick={() => onChange(Math.min(totalPages, page + 1))}
        disabled={page === totalPages}
        aria-label="Next page"
        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/60 transition-colors hover:border-[var(--color-primary)]/60 hover:text-white disabled:opacity-30"
      >
        <TbChevronRight className="h-4 w-4" />
      </button>
    </nav>
  );
}
