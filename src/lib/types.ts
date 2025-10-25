

export type Beneficiary = {
  id: string;
  firstName: string;
  lastName: string;
  avatar: string;
  email: string;
  phoneNumber?: string;
  category: 'Orphan' | 'Indigent';
  enrollmentStatus: 'Active' | 'Inactive' | 'Graduated';
  totalPayments: number;
  paymentDate: string;
  lga: string;
  state: string;
  class: string;
  paymentType: 'Registration Fees' | 'Termly Fees' | 'Book Grant' | 'Transport' | 'Distress' | 'Upkeep';
  program: 'Student' | 'Researcher' | 'Educator';
};

export type Contributor = {
  id: string;
  firstName: string;
  lastName: string;
  avatar: string;
  email: string;
  phoneNumber?: string;
  category: 'Individual' | 'Corporate' | 'Foundation';
  status: 'Active' | 'Inactive' | 'Paused';
  totalContribution: number;
  lastContributionDate: string;
};

export type Contribution = {
  id: string;
  contributorId: string;
  amount: number;
  date: string;
  type: 'Donation' | 'Grant' | 'Sponsorship' | 'Membership';
}

export type FinancialStat = {
  title: string;
  value: string;
  change: string;
  changeType: 'increase' | 'decrease';
};

export type MonthlyData = {
  month: string;
  income: number;
  expenses: number;
};

export type Category = {
  id:string;
  name: string;
};

export type UserProfile = {
    name: string;
    email: string;
};

export type TeamMember = {
    id: number;
    name: string;
    role: string;
    avatar: string;
    bio: string;
};

export type HeroSlide = {
    id: string;
    alt: string;
    imageUrl: string;
    imageHint: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  imageUrl: string;
  imageHint: string;
  content: string;
};
