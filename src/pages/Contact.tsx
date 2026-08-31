import { useEffect } from 'react';
import { Container } from '../components/layout/Container';
import { ContactForm } from '../components/contact/ContactForm';
import { emergencyResources } from '../data/emergencyResources';

export default function ContactPage() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('intent') === 'booking') {
      const formHeading = document.getElementById('book-enquiry-heading');
      formHeading?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <main id="main-content" className="relative overflow-hidden bg-[var(--reset-blue-50)]">
      <div className="pointer-events-none absolute -left-20 top-16 h-[220px] w-[220px] rounded-full border border-[var(--reset-aqua)] opacity-70 md:h-[300px] md:w-[300px]" />
      <div className="pointer-events-none absolute right-[-80px] top-44 h-[200px] w-[200px] rounded-full border border-[var(--reset-aqua)] opacity-65 md:h-[280px] md:w-[280px]" />
      <div className="pointer-events-none absolute left-1/3 bottom-12 h-[160px] w-[160px] rounded-full border border-[var(--reset-aqua)] opacity-60 md:h-[220px] md:w-[220px]" />
      <section className="relative py-16 md:py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[var(--text-secondary)]">LET&apos;S TALK</p>
            <h1 className="font-serif text-[clamp(2.7rem,6vw,5rem)] leading-[0.92] tracking-[-0.05em] text-[var(--text-primary)]">
              Taking the first step can be simple.
            </h1>
            <div className="mt-8 space-y-4 text-[1.02rem] leading-8 text-[var(--text-secondary)]">
              <p>Email: bilqees@theresetroom.co.za</p>
              <p>Location: Cape Town, South Africa</p>
              <p>Sessions: Online via Google Meet</p>
              <p>Hours: Monday-Friday · 09:00-16:00</p>
              <p>Saturday-Sunday · Closed</p>
            </div>

            <div className="mt-10 rounded-[24px] border border-[var(--border)] bg-[var(--surface)] p-6">
              <h2 className="font-serif text-[2rem] leading-none tracking-[-0.04em] text-[var(--text-primary)]">Need urgent help?</h2>
              <p className="mt-3 text-[0.98rem] leading-7 text-[var(--text-secondary)]">
                The Reset Room is not an emergency or crisis service. If you or someone else may be in immediate danger, please contact an appropriate emergency service.
              </p>
              <ul className="mt-5 space-y-3">
                {emergencyResources.map((resource) => (
                  <li key={resource.title} className="flex justify-between gap-4 border-b border-[var(--border)] pb-2 text-sm text-[var(--text-secondary)] last:border-none last:pb-0">
                    <span>{resource.title}</span>
                    <strong className="font-medium text-[var(--text-primary)]">{resource.phone}</strong>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div id="book-enquiry-heading" className="rounded-[30px] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <div className="mb-5 rounded-[18px] border border-[var(--primary-blue-light)] bg-[var(--primary-blue-soft)] px-4 py-3 text-sm font-medium text-[var(--text-primary)]">
              Booking enquiry
            </div>
            <ContactForm />
          </div>
        </Container>
      </section>
    </main>
  );
}
