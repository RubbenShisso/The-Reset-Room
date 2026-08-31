import { Container } from '../components/layout/Container';

export default function PrivacyPage() {
  return (
    <main className="relative overflow-hidden bg-[var(--reset-blue-50)] py-20 md:py-28">
      <div className="pointer-events-none absolute -left-16 top-8 h-[220px] w-[220px] rounded-full border border-[var(--reset-aqua)] opacity-70 md:h-[300px] md:w-[300px]" />
      <div className="pointer-events-none absolute right-[-70px] top-32 h-[200px] w-[200px] rounded-full border border-[var(--reset-aqua)] opacity-65 md:h-[260px] md:w-[260px]" />
      <div className="pointer-events-none absolute left-1/3 bottom-8 h-[170px] w-[170px] rounded-full border border-[var(--reset-aqua)] opacity-60 md:h-[220px] md:w-[220px]" />
      <Container className="max-w-3xl rounded-[30px] border border-[var(--border)] bg-[var(--surface)] p-8 md:p-12">
        <p className="mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[var(--text-secondary)]">PRIVACY POLICY</p>
        <h1 className="font-serif text-[clamp(2.3rem,5vw,4rem)] leading-[0.95] tracking-[-0.05em] text-[var(--text-primary)]">Privacy policy placeholder</h1>
        <p className="mt-6 text-[1.02rem] leading-8 text-[var(--text-secondary)]">
          This placeholder page is provided for future review and POPIA compliance guidance. It should be reviewed by a legal professional before publication and must not be represented as a compliant policy until this review is complete.
        </p>
      </Container>
    </main>
  );
}
