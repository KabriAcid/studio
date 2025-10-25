
'use client';

import * as z from 'zod';

export const loginSchema = z.object({
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  password: z.string().min(6, {
    message: 'Password must be at least 6 characters.',
  }),
});

export const beneficiarySchema = z.object({
  firstName: z.string().min(2, {
    message: 'First name must be at least 2 characters.',
  }),
  lastName: z.string().min(2, {
    message: 'Last name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  phoneNumber: z.string().optional(),
  category: z.enum(['Student', 'Researcher', 'Educator']),
  status: z.enum(['Active', 'Inactive', 'Graduated']),
  lga: z.string().min(2, { message: 'LGA is required.' }),
  state: z.string().min(2, { message: 'State is required.' }),
  class: z.string().min(1, { message: 'Class is required.' }),
  paymentType: z.enum(['Registration Fees', 'Termly Fees', 'Book Grant', 'Transport', 'Distress']),
});


export const contributorSchema = z.object({
  firstName: z.string().min(2, {
    message: 'First name must be at least 2 characters.',
  }),
  lastName: z.string().min(2, {
    message: 'Last name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  phoneNumber: z.string().optional(),
  category: z.enum(['Individual', 'Corporate', 'Foundation']),
  status: z.enum(['Active', 'Inactive', 'Paused']),
});

export const logContributionSchema = z.object({
    contributorId: z.string().min(1, { message: 'Please select a contributor.' }),
    amount: z.coerce.number().positive({ message: 'Amount must be a positive number.' }),
    date: z.date({
        required_error: 'A contribution date is required.',
    }),
    type: z.enum(['Donation', 'Grant', 'Sponsorship', 'Membership']),
});

export const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name is required.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phoneNumber: z.string().optional(),
  subject: z.string().min(2, { message: 'Subject is required.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});
