import { ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { services } from '../data/services';
import { specialisations } from '../data/specialisations';
import { Button } from '../components/ui/Button';
import { Container } from '../components/layout/Container';
import { SectionHeading } from '../components/ui/SectionHeading';

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const trustItems = [
  'ASCHP Registered',
  'Humanitas Internship Completed',
  '220+ Client Session Hours',
  'Online Across South Africa',
];

const benefits = [
  {
    title: 'Accessible',
    description: 'Join sessions online from wherever you feel comfortable.',
  },
  {
    title: 'Private',
    description: 'Choose an environment where you feel safe speaking openly.',
  },
  {
    title: 'Flexible',
    description: 'Counselling designed to work around real life.',
  },
];

const journeySteps = [
  {
    title: 'Starting with the basics',
    description:
      "We'll begin by getting to know what's brought you to counselling and what you would like support with.",
  },
  {
    title: 'Working together',
    description:
      "We'll explore your experiences and work toward goals that feel meaningful to you.",
  },
  {
    title: 'Going at your pace',
    description:
      "There's no race and no perfect timeline. Sessions move at a pace that feels manageable for you.",
  },
];

export default function Home() {
  const reduceMotion = useReducedMotion();

  return (
    <main>
      <section className="relative overflow-hidden bg-[var(--reset-blue-50)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(114,214,220,0.14),_transparent_36%)]" />
        <div className="absolute -left-24 top-12 h-[290px] w-[290px] rounded-full border border-[var(--reset-aqua)] opacity-70 md:h-[380px] md:w-[380px]" />
        <div className="absolute right-[-110px] top-16 h-[320px] w-[320px] rounded-full border border-[var(--reset-aqua)] opacity-60 md:h-[420px] md:w-[420px]" />
        <Container className="relative grid items-center gap-12 py-10 pb-16 pt-6 md:pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-20">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.56, ease: 'easeOut' }} className="max-w-[640px]">
            <p className="mb-5 text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-[var(--text-secondary)]">
              ONLINE WELLNESS COUNSELLING · SOUTH AFRICA
            </p>
            <h1 className="font-serif text-[clamp(3rem,7vw,6.2rem)] leading-[0.92] tracking-[-0.06em] text-[var(--text-primary)]">
              A safe space<br />to finally <span className="text-[var(--reset-turquoise)]">exhale.</span>
            </h1>
            <p className="mt-6 max-w-xl text-[1.08rem] leading-8 text-[var(--text-secondary)]">
              A compassionate, non-judgmental space to slow down, make sense of what you&apos;re carrying and move forward at your own pace.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button to="/contact?intent=booking">Book a Session</Button>
              <Button to="/services" variant="secondary">Explore Counselling</Button>
            </div>

            <div className="mt-8 flex items-center gap-3 text-[0.92rem] text-[var(--text-secondary)]">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[var(--reset-turquoise)]" />
              Online via Google Meet
            </div>
            <p className="mt-1 text-[0.92rem] text-[var(--text-secondary)]">Available across South Africa</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, ease: 'easeOut' }} className="relative">
            <motion.div
              className="absolute -left-14 top-4 h-[370px] w-[370px] rounded-full border border-[var(--reset-aqua)] opacity-60 md:h-[480px] md:w-[480px]"
              animate={reduceMotion ? undefined : { scale: [1, 1.008, 1], opacity: [0.42, 0.6, 0.45] }}
              transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute -right-10 bottom-4 h-[250px] w-[250px] rounded-full border border-[var(--reset-aqua)] opacity-55 md:h-[350px] md:w-[350px]"
              animate={reduceMotion ? undefined : { scale: [1, 1.006, 1], opacity: [0.38, 0.54, 0.4] }}
              transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
            />

            <div className="relative flex h-[540px] w-full items-center justify-center overflow-hidden rounded-[30px] p-6 sm:h-[620px]">
              <img
                src="/logo.png"
                alt="The Reset Room logo"
                className="h-[72%] w-auto max-w-[90%] object-contain drop-shadow-[0_24px_40px_rgba(37,174,183,0.12)]"
              />
            </div>
            <div className="absolute -bottom-5 left-4 rounded-full border border-[var(--border)] bg-[rgba(255,255,255,0.9)] px-4 py-3 text-sm text-[var(--text-primary)] shadow-[0_10px_30px_rgba(37,174,183,0.08)] backdrop-blur-sm md:left-8">
              Go at your pace.
            </div>
          </motion.div>
        </Container>
      </section>

      <div className="border-y border-[var(--border)] bg-[var(--reset-blue-50)]">
        <Container className="grid gap-4 py-5 text-center text-[0.78rem] font-medium uppercase tracking-[0.2em] text-[var(--text-secondary)] sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </Container>
      </div>

      <section className="py-20 md:py-28">
        <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative">
            <div className="absolute -left-10 top-4 h-[340px] w-[340px] rounded-full border border-[var(--reset-aqua)] opacity-65 md:h-[420px] md:w-[420px]" />
            <div className="relative overflow-hidden rounded-[30px] border border-[var(--border)] bg-[var(--reset-blue-50)] p-3">
              <img
                src="/home logo.png"
                alt="Bilqees, founder of The Reset Room"
                className="h-[520px] w-full rounded-[24px] object-cover object-center"
              />
            </div>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.5 }}>
            <p className="mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[var(--text-secondary)]">WELCOME TO THE RESET ROOM</p>
            <h2 className="font-serif text-[clamp(2.4rem,4vw,4rem)] leading-[0.96] tracking-[-0.05em] text-[var(--text-primary)]">
              You don&apos;t have to have everything figured out before you ask for support.
            </h2>

            <div className="mt-8 space-y-6">
              <div>
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[var(--text-secondary)]">MEET BILQEES</p>
                <h3 className="mt-3 font-serif text-[2.6rem] leading-[0.9] tracking-[-0.04em] text-[var(--text-primary)]">Hi, I&apos;m Bilqees.</h3>
              </div>
              <p className="text-[1.02rem] leading-8 text-[var(--text-secondary)]">
                The Reset Room was created with the intention of offering a calm, grounded space where people can speak honestly, slow down and feel supported without judgement.
              </p>
              <p className="text-[1.02rem] leading-8 text-[var(--text-secondary)]">
                Bilqees brings a warm, collaborative approach to counselling, guiding each person with care while making room for reflection, emotional processing and self-understanding.
              </p>
            </div>

            <div className="mt-8 grid gap-4 border-t border-[var(--border)] pt-6 text-[0.95rem] text-[var(--text-secondary)] sm:grid-cols-3">
              <div>
                <div className="font-serif text-[2.2rem] leading-none text-[var(--text-primary)]">ASCHP</div>
                <div className="mt-1 text-sm uppercase tracking-[0.12em]">Registered</div>
              </div>
              <div>
                <div className="font-serif text-[2.2rem] leading-none text-[var(--text-primary)]">Humanitas</div>
                <div className="mt-1 text-sm uppercase tracking-[0.12em]">Internship</div>
              </div>
              <div>
                <div className="font-serif text-[2.2rem] leading-none text-[var(--text-primary)]">220+</div>
                <div className="mt-1 text-sm uppercase tracking-[0.12em]">Session Hours</div>
              </div>
            </div>

            <div className="mt-8">
              <Link to="/about" className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-primary)] transition-colors hover:text-[var(--reset-turquoise)]">
                More About Bilqees <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>

      <section className="bg-[var(--reset-blue-50)] py-20 md:py-28">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="relative">
            <SectionHeading eyebrow="YOUR SPACE. YOUR PACE." title="Wherever you are." />
          </div>
          <div>
            <p className="max-w-[620px] text-[1.04rem] leading-8 text-[var(--text-secondary)]">
              All sessions take place online using Google Meet, allowing you to access counselling from a private, comfortable environment that works for you.
            </p>
          </div>
        </Container>

        <Container className="mt-12 grid gap-6 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <motion.article key={benefit.title} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.45, delay: index * 0.08 }} className="rounded-[24px] border border-[var(--border)] bg-[var(--surface)] p-6">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--text-soft)]">0{index + 1}</p>
              <h3 className="mt-5 font-serif text-[2.4rem] leading-none tracking-[-0.04em] text-[var(--text-primary)]">{benefit.title}</h3>
              <p className="mt-4 text-[1rem] leading-7 text-[var(--text-secondary)]">{benefit.description}</p>
            </motion.article>
          ))}
        </Container>

        <Container className="mt-10 flex justify-start">
          <Button to="/services" variant="secondary">How Sessions Work</Button>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading eyebrow="AREAS OF SUPPORT" title="Whatever you're carrying, we can begin there." className="mb-12" />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {specialisations.map((item) => (
              <div key={item} className="rounded-[22px] border border-[var(--border)] bg-[var(--surface)] p-6 text-[1.05rem] font-medium text-[var(--text-primary)] shadow-[0_12px_24px_rgba(37,174,183,0.04)]">
                {item}
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-[1.02rem] leading-8 text-[var(--text-secondary)]">
            Sessions can explore a wide range of experiences depending on your individual needs, circumstances and goals.
          </p>
        </Container>
      </section>

      <section className="bg-[var(--reset-blue-50)] py-20 md:py-28">
        <Container>
          <SectionHeading eyebrow="COUNSELLING SERVICES" title="Support that meets you where you are." className="mb-12" />
          <div className="space-y-5">
            {services.map((service, index) => (
              <article key={service.id} className="grid overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--surface)] md:grid-cols-[220px_1fr_180px] md:items-stretch">
                <div className="relative min-h-52 overflow-hidden">
                  <img src={service.image} alt={service.imageAlt} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                  <div className="absolute left-4 top-4 rounded-full bg-[var(--surface)]/90 px-3 py-2 font-serif text-xl leading-none text-[var(--reset-turquoise)] backdrop-blur-sm">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
                <div className="p-6 md:py-8 md:pl-8 md:pr-4">
                  <div className="flex flex-wrap items-baseline gap-3">
                    <h3 className="font-serif text-[2.4rem] leading-none tracking-[-0.04em] text-[var(--text-primary)]">{service.title}</h3>
                    {service.ageRestriction ? <span className="text-[0.72rem] uppercase tracking-[0.16em] text-[var(--text-secondary)]">{service.ageRestriction}</span> : null}
                  </div>
                  <p className="mt-4 max-w-2xl text-[1rem] leading-7 text-[var(--text-secondary)]">{service.shortDescription}</p>
                </div>
                <div className="flex items-center justify-between gap-4 px-6 pb-6 md:flex-col md:items-end md:justify-center md:px-8 md:py-8">
                  <div className="text-right text-[1.12rem] text-[var(--text-primary)]">
                    <div className="font-medium">{service.duration}</div>
                    <div className="mt-2 font-medium">R{service.price}</div>
                  </div>
                  <Button to="/services" variant="secondary" className="justify-center">Explore</Button>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading eyebrow="HOW IT WORKS" title="The start of our journey together." className="mb-12" />
          <div className="space-y-8 md:grid md:grid-cols-3 md:gap-8 md:space-y-0">
            {journeySteps.map((step, index) => (
              <motion.div key={step.title} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.45, delay: index * 0.08 }} className="relative rounded-[24px] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-7">
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[var(--text-soft)]">0{index + 1}</span>
                  <span className="ml-4 h-px flex-1 bg-[var(--border)]" />
                </div>
                <h3 className="font-serif text-[2.2rem] leading-none tracking-[-0.04em] text-[var(--text-primary)]">{step.title}</h3>
                <p className="mt-4 text-[1rem] leading-7 text-[var(--text-secondary)]">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--background)] py-20 md:py-28">
        <Container className="relative overflow-hidden rounded-[30px] border border-[var(--border)] bg-[var(--surface)] px-6 py-12 md:px-10 md:py-16 lg:px-16">
          <div className="absolute -right-16 top-8 h-52 w-52 rounded-full border border-[var(--reset-aqua)] opacity-65 md:h-72 md:w-72" />
          <div className="absolute left-0 top-16 h-32 w-32 rounded-full border border-[var(--reset-aqua)] opacity-40" />
          <div className="relative mx-auto max-w-[900px] text-center">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[var(--text-secondary)]">THE RESET ROOM</p>
            <blockquote className="mt-8 font-serif text-[clamp(2.6rem,5vw,4.8rem)] leading-[1.02] tracking-[-0.06em] text-[var(--text-primary)]">
              Sometimes you just need somewhere to exhale.
            </blockquote>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-[var(--reset-turquoise)] py-20 text-[var(--white)] md:py-28">
        <div className="absolute -right-16 top-10 h-[260px] w-[260px] rounded-full border border-[rgba(255,255,255,0.7)] opacity-60 md:h-[360px] md:w-[360px]" />
        <div className="absolute left-[-80px] bottom-[-40px] h-[220px] w-[220px] rounded-full border border-[rgba(255,255,255,0.56)] opacity-55" />
        <Container className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[620px]">
            <h2 className="font-serif text-[clamp(2.4rem,5vw,4.2rem)] leading-[0.96] tracking-[-0.05em]">
              Ready to make space for yourself?
            </h2>
            <p className="mt-5 text-[1.02rem] leading-8 text-[rgba(255,255,255,0.84)]">
              Your first step can simply be a conversation.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button to="/contact?intent=booking" className="bg-[var(--white)] text-[var(--text-primary)] hover:bg-[var(--reset-blue-50)]">Book a Session</Button>
            <Button to="/contact" variant="secondary" className="border-[rgba(255,255,255,0.7)] text-[var(--white)] hover:bg-[rgba(255,255,255,0.08)]">Ask a Question</Button>
          </div>
        </Container>
        <Container className="relative mt-8 border-t border-[rgba(255,255,255,0.2)] pt-5 text-sm text-[rgba(255,255,255,0.82)]">
          Online counselling via Google Meet<br />
          Monday – Friday · 09:00 – 16:00
        </Container>
      </section>
    </main>
  );
}
