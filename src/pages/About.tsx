import { Container } from '../components/layout/Container';

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden bg-[var(--reset-blue-50)]">
      <div className="pointer-events-none absolute -left-20 top-20 h-[240px] w-[240px] rounded-full border border-[var(--reset-aqua)] opacity-70 md:h-[340px] md:w-[340px]" />
      <div className="pointer-events-none absolute right-[-90px] top-48 h-[200px] w-[200px] rounded-full border border-[var(--reset-aqua)] opacity-65 md:h-[290px] md:w-[290px]" />
      <div className="pointer-events-none absolute left-1/3 bottom-16 h-[180px] w-[180px] rounded-full border border-[var(--reset-aqua)] opacity-60 md:h-[240px] md:w-[240px]" />
      <section className="relative py-20 md:py-28">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[var(--text-secondary)]">ABOUT THE RESET ROOM</p>
            <h1 className="font-serif text-[clamp(2.8rem,6vw,5.2rem)] leading-[0.92] tracking-[-0.05em] text-[var(--text-primary)]">
              A place to pause,<br />talk and feel heard.
            </h1>
          </div>
          <div className="overflow-hidden">
            <img
              src="/about 2.png"
              alt="The Reset Room calm growth illustration"
              className="h-[460px] w-full object-contain object-center"
            />
          </div>
        </Container>
      </section>

      <section className="bg-[var(--background-alt)] py-20 md:py-28">
        <Container className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-[28px] border border-[var(--border)] bg-[var(--reset-blue-100)] p-7 md:p-8">
            <h2 className="font-serif text-[clamp(2.1rem,4vw,3.2rem)] leading-[0.96] tracking-[-0.04em] text-[var(--text-primary)]">Bilqees&apos; story</h2>
            <p className="mt-5 text-[1.02rem] leading-8 text-[var(--text-secondary)]">
              Bilqees founded The Reset Room from a desire to offer a space that feels grounded, honest and genuinely supportive. She established the practice after completing her honours in Developmental Psychology and a counselling internship with Humanitas, and registered with the ASCHP to build a practice rooted in warmth, clarity and compassion.
            </p>
          </article>

          <article className="rounded-[28px] border border-[var(--border)] bg-[var(--reset-blue-50)] p-7 md:p-8">
            <h2 className="font-serif text-[clamp(2.1rem,4vw,3.2rem)] leading-[0.96] tracking-[-0.04em] text-[var(--text-primary)]">Philosophy</h2>
            <p className="mt-5 text-[1.02rem] leading-8 text-[var(--text-secondary)]">
              Counselling can be a place to breathe, understand yourself more gently and move toward what feels meaningful. The Reset Room values calm, consent, non-judgement and client-paced healing.
            </p>
          </article>

          <article className="rounded-[28px] border border-[var(--border)] bg-[var(--reset-blue-50)] p-7 md:p-8 lg:col-span-2">
            <h2 className="font-serif text-[clamp(2.1rem,4vw,3.2rem)] leading-[0.96] tracking-[-0.04em] text-[var(--text-primary)]">Qualifications & professional journey</h2>
            <ul className="mt-5 grid gap-3 text-[1.02rem] leading-8 text-[var(--text-secondary)] md:grid-cols-2">
              <li className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-3">ASCHP Registered</li>
              <li className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-3">Honours in Developmental Psychology</li>
              <li className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-3">Counselling Internship Completed with Humanitas</li>
              <li className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-3">220+ hours of sessions with clients across South Africa</li>
            </ul>
          </article>

          <article className="rounded-[28px] border border-[var(--border)] bg-[var(--reset-blue-100)] p-7 md:p-8">
            <h2 className="font-serif text-[clamp(2.1rem,4vw,3.2rem)] leading-[0.96] tracking-[-0.04em] text-[var(--text-primary)]">Her counselling approach</h2>
            <p className="mt-5 text-[1.02rem] leading-8 text-[var(--text-secondary)]">
              Her approach is warm, collaborative and practical. Sessions are shaped around your pace, your story and the goals you hope to move toward, with space for reflection, emotional processing and self-understanding.
            </p>
          </article>

          <article className="rounded-[28px] border border-[var(--border)] bg-[var(--reset-blue-50)] p-7 md:p-8">
            <h2 className="font-serif text-[clamp(2.1rem,4vw,3.2rem)] leading-[0.96] tracking-[-0.04em] text-[var(--text-primary)]">What clients can expect</h2>
            <p className="mt-5 text-[1.02rem] leading-8 text-[var(--text-secondary)]">
              A calm, confidential environment where you can speak openly, slow things down and feel supported without pressure. Sessions are designed to help you feel more grounded, less alone and more able to move through what you are carrying.
            </p>
          </article>
        </Container>
      </section>
    </main>
  );
}
