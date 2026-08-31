type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  align?: 'left' | 'center';
  className?: string;
};

export function SectionHeading({ eyebrow, title, align = 'left', className = '' }: SectionHeadingProps) {
  return (
    <div className={`${align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'} ${className}`}>
      <div className="relative mb-4 inline-block">
        <span className="absolute -left-6 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full border border-[var(--reset-aqua)] opacity-70" />
        <p className="relative text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[var(--text-secondary)]">
          {eyebrow}
        </p>
      </div>
      <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] leading-[0.96] tracking-[-0.04em] text-[var(--text-primary)]">
        {title}
      </h2>
    </div>
  );
}
