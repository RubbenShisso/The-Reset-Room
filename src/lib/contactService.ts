import { z } from 'zod';

export const contactFormSchema = z.object({
  fullName: z.string().min(2, 'Please enter your full name.'),
  email: z.string().email('Please enter a valid email address.'),
  phone: z.string().optional().or(z.literal('')),
  interest: z.enum([
    'Individual Counselling',
    'Adolescent Counselling',
    'Couples Counselling',
    'General Enquiry',
  ]),
  contactMethod: z.enum(['Email', 'Phone']),
  source: z.string().min(1, 'Please tell us how you heard about us.'),
  message: z.string().min(10, 'Please share a few details so we can help.'),
  emergencyNotice: z.boolean().refine((value) => value === true, {
    message: 'Please confirm that this is not an emergency enquiry.',
  }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export type ContactSubmissionResult = {
  success: boolean;
  message: string;
};

export async function submitContactForm(values: ContactFormValues): Promise<ContactSubmissionResult> {
  await new Promise((resolve) => setTimeout(resolve, 1200));

  const hasSensitiveInfo = /\b(therapy|depression|anxiety|panic|suicid|self-harm|trauma)\b/i.test(values.message ?? '');

  if (hasSensitiveInfo) {
    return {
      success: false,
      message: 'Please keep your message brief and avoid including highly sensitive personal information in this form.',
    };
  }

  return {
    success: true,
    message: 'Your enquiry has been received. The Reset Room will be in touch soon.',
  };
}
