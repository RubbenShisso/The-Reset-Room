import { Container } from '../components/layout/Container';
import { services } from '../data/services';
import { Button } from '../components/ui/Button';

export default function ServicesPage() {
  return (
    <main className="relative overflow-hidden bg-[var(--reset-blue-50)]">
      <div className="pointer-events-none absolute -left-20 top-16 h-[230px] w-[230px] rounded-full border border-[var(--reset-aqua)] opacity-70 md:h-[320px] md:w-[320px]" />
      <div className="pointer-events-none absolute right-[-90px] top-52 h-[200px] w-[200px] rounded-full border border-[var(--reset-aqua)] opacity-65 md:h-[300px] md:w-[300px]" />
      <div className="pointer-events-none absolute left-1/3 bottom-10 h-[170px] w-[170px] rounded-full border border-[var(--reset-aqua)] opacity-60 md:h-[230px] md:w-[230px]" />
      <section className="relative py-20 md:py-28">
        <Container className="max-w-4xl">
          <p className="mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[var(--text-secondary)]">COUNSELLING SERVICES</p>
          <h1 className="font-serif text-[clamp(2.8rem,6vw,5rem)] leading-[0.92] tracking-[-0.05em] text-[var(--text-primary)]">
            There is no single way to need support.
          </h1>
          <p className="mt-6 text-[1.05rem] leading-8 text-[var(--text-secondary)]">
            Counselling may look different for each person, depending on your needs, circumstances and goals. Some people come seeking clarity, others want support with transitions, relationships or emotional overwhelm. Whatever brings you here, the aim is to create a space that feels steady, compassionate and helpful.
          </p>
        </Container>
      </section>

      <section className="bg-[var(--background-alt)] py-20 md:py-28">
        <Container className="space-y-8">
          {services.map((service) => (
            <article key={service.id} className="grid overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--surface)] md:grid-cols-[minmax(280px,0.85fr)_minmax(0,1.15fr)]">
              <img
                src={service.image}
                alt={service.imageAlt}
                loading="lazy"
                className="h-64 w-full object-cover md:h-full md:min-h-[390px]"
              />
              <div className="p-6 md:p-8 lg:p-10">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                  <div>
                    <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] leading-none tracking-[-0.04em] text-[var(--text-primary)]">{service.title}</h2>
                    {service.ageRestriction ? <p className="mt-2 text-sm uppercase tracking-[0.16em] text-[var(--text-secondary)]">{service.ageRestriction}</p> : null}
                  </div>
                  <p className="text-[1.25rem] font-medium text-[var(--text-primary)]">R{service.price} / hour</p>
                </div>

                <p className="mt-6 text-[1.02rem] leading-8 text-[var(--text-secondary)]">{service.longDescription}</p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Button to="/contact?intent=booking" className="">Enquire About {service.title}</Button>
                </div>
              </div>
            </article>
          ))}
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container className="max-w-4xl rounded-[28px] border border-[var(--border)] bg-[var(--surface)] p-8 md:p-10">
          <p className="mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[var(--text-secondary)]">WHAT TO EXPECT</p>
          <h2 className="font-serif text-[clamp(2.2rem,4vw,3.4rem)] leading-[0.96] tracking-[-0.04em] text-[var(--text-primary)]">Before your first session</h2>
          <ol className="mt-8 space-y-5 text-[1.02rem] leading-7 text-[var(--text-secondary)]">
            <li><span className="font-semibold text-[var(--text-primary)]">01</span> Enquire</li>
            <li><span className="font-semibold text-[var(--text-primary)]">02</span> Choose a suitable time</li>
            <li><span className="font-semibold text-[var(--text-primary)]">03</span> Receive Google Meet details</li>
            <li><span className="font-semibold text-[var(--text-primary)]">04</span> Attend from a private space</li>
          </ol>
        </Container>
      </section>
    </main>
  );
}
