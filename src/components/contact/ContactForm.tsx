import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle2, Loader2 } from 'lucide-react';
import { contactFormSchema, submitContactForm, type ContactFormValues } from '../../lib/contactService';

const interestOptions = [
  'Individual Counselling',
  'Adolescent Counselling',
  'Couples Counselling',
  'General Enquiry',
];

const contactMethodOptions = ['Email', 'Phone'];

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [serverMessage, setServerMessage] = useState('');
  const [searchParams] = useSearchParams();

  const defaultValues = useMemo<ContactFormValues>(
    () => ({
      fullName: '',
      email: '',
      phone: '',
      interest: searchParams.get('intent') === 'booking' ? 'Individual Counselling' : 'General Enquiry',
      contactMethod: 'Email',
      source: '',
      message: '',
      emergencyNotice: false,
    }),
    [searchParams],
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues,
  });

  const onSubmit = async (values: ContactFormValues) => {
    setStatus('loading');
    setServerMessage('');

    try {
      const result = await submitContactForm(values);
      if (result.success) {
        setStatus('success');
        setServerMessage(result.message);
        reset(defaultValues);
      } else {
        setStatus('error');
        setServerMessage(result.message);
      }
    } catch {
      setStatus('error');
      setServerMessage('Something went wrong while sending your enquiry. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-[var(--text-primary)]">Full Name *</label>
          <input id="fullName" className="w-full rounded-[16px] border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-base text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-blue-dark)]" {...register('fullName')} />
          {errors.fullName && <p className="mt-2 text-sm text-red-700">{errors.fullName.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-[var(--text-primary)]">Email Address *</label>
          <input id="email" type="email" className="w-full rounded-[16px] border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-base text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-blue-dark)]" {...register('email')} />
          {errors.email && <p className="mt-2 text-sm text-red-700">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-[var(--text-primary)]">Phone Number</label>
          <input id="phone" type="tel" className="w-full rounded-[16px] border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-base text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-blue-dark)]" {...register('phone')} />
        </div>

        <div>
          <label htmlFor="interest" className="mb-2 block text-sm font-medium text-[var(--text-primary)]">I&apos;m interested in *</label>
          <select id="interest" className="w-full rounded-[16px] border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-base text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-blue-dark)]" {...register('interest')}>
            {interestOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          {errors.interest && <p className="mt-2 text-sm text-red-700">{errors.interest.message}</p>}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="contactMethod" className="mb-2 block text-sm font-medium text-[var(--text-primary)]">Preferred Contact Method</label>
          <select id="contactMethod" className="w-full rounded-[16px] border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-base text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-blue-dark)]" {...register('contactMethod')}>
            {contactMethodOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="source" className="mb-2 block text-sm font-medium text-[var(--text-primary)]">How did you hear about The Reset Room?</label>
          <input id="source" className="w-full rounded-[16px] border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-base text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-blue-dark)]" {...register('source')} />
          {errors.source && <p className="mt-2 text-sm text-red-700">{errors.source.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-[var(--text-primary)]">Message *</label>
        <textarea id="message" rows={5} className="w-full rounded-[16px] border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-base text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-blue-dark)]" {...register('message')} />
        <p className="mt-2 text-sm text-[var(--text-secondary)]">Tell me briefly what you&apos;d like to enquire about. Please avoid including highly sensitive personal information in this form.</p>
        {errors.message && <p className="mt-2 text-sm text-red-700">{errors.message.message}</p>}
      </div>

      <div className="rounded-[18px] border border-[var(--border)] bg-[var(--background)] p-4">
        <label className="flex items-start gap-3 text-sm text-[var(--text-primary)]">
          <input type="checkbox" className="mt-1 h-5 w-5 accent-[var(--primary-blue-dark)]" {...register('emergencyNotice')} />
          <span>I understand this contact form is not monitored as an emergency service.</span>
        </label>
        {errors.emergencyNotice && <p className="mt-2 text-sm text-red-700">{errors.emergencyNotice.message}</p>}
      </div>

      {status !== 'idle' && (
        <div className={`rounded-[16px] border p-4 text-sm ${status === 'success' ? 'border-emerald-200 bg-emerald-50 text-emerald-800' : status === 'error' ? 'border-red-200 bg-red-50 text-red-700' : 'border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)]'}`} aria-live="polite">
          {status === 'success' ? <span className="flex items-center gap-2"><CheckCircle2 size={18} /> {serverMessage}</span> : status === 'loading' ? <span className="flex items-center gap-2"><Loader2 size={18} className="animate-spin" /> Sending your enquiry...</span> : <span>{serverMessage}</span>}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="inline-flex w-full items-center justify-center rounded-full bg-[var(--primary-blue)] px-6 py-3.5 text-base font-medium text-[var(--white)] transition-colors hover:bg-[var(--primary-blue-dark)] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === 'loading' ? 'Sending...' : 'Send Enquiry'}
      </button>
    </form>
  );
}
