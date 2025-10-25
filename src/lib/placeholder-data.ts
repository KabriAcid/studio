
import type { Beneficiary, Contributor, FinancialStat, MonthlyData, Category, UserProfile } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const getAvatar = (id: string) => PlaceHolderImages.find(img => img.id === id)?.imageUrl || '';

export const financialStats: FinancialStat[] = [
  {
    title: 'Total Contributions',
    value: '$45,231.89',
    change: '+20.1% from last month',
    changeType: 'increase',
  },
  {
    title: 'Total Disbursed',
    value: '$28,750.40',
    change: '+18.3% from last month',
    changeType: 'increase',
  },
  {
    title: 'Active Beneficiaries',
    value: '+152',
    change: '+3 from last month',
    changeType: 'increase',
  },
  {
    title: 'New Contributors',
    value: '+12',
    change: '-2 from last month',
    changeType: 'decrease',
  },
];

export const beneficiaryStats: FinancialStat[] = [
  {
    title: 'Total Beneficiaries',
    value: '152',
    change: '+12 this month',
    changeType: 'increase',
  },
  {
    title: 'Active Beneficiaries',
    value: '130',
    change: '+3 this month',
    changeType: 'increase',
  },
  {
    title: 'Total Disbursed',
    value: '$28,750.40',
    change: '+18.3% from last month',
    changeType: 'increase',
  },
  {
    title: 'Avg. Disbursement',
    value: '$189.15',
    change: '+2.5% from last month',
    changeType: 'increase',
  },
];

export const contributorStats: FinancialStat[] = [
    {
      title: 'Total Contributors',
      value: '48',
      change: '+5 this month',
      changeType: 'increase',
    },
    {
      title: 'Active Contributors',
      value: '35',
      change: '-1 from last month',
      changeType: 'decrease',
    },
    {
      title: 'Total Contributions',
      value: '$45,231.89',
      change: '+20.1% from last month',
      changeType: 'increase',
    },
    {
      title: 'Avg. Contribution',
      value: '$942.33',
      change: '+8.1% from last month',
      changeType: 'increase',
    },
  ];

export const monthlyFinancials: MonthlyData[] = [
  { month: 'Jan', income: 4000, expenses: 2400 },
  { month: 'Feb', income: 3000, expenses: 1398 },
  { month: 'Mar', income: 5000, expenses: 3800 },
  { month: 'Apr', income: 2780, expenses: 3908 },
  { month: 'May', income: 1890, expenses: 4800 },
  { month: 'Jun', income: 2390, expenses: 3800 },
  { month: 'Jul', income: 3490, expenses: 4300 },
  { month: 'Aug', income: 3650, expenses: 4100 },
  { month: 'Sep', income: 4150, expenses: 3800 },
  { month: 'Oct', income: 4800, expenses: 3900 },
  { month: 'Nov', income: 4300, expenses: 3500 },
  { month: 'Dec', income: 4900, expenses: 4100 },
];

export const beneficiaries: Beneficiary[] = [
  { id: '1', firstName: 'Alice', lastName: 'Johnson', email: 'alice.j@example.com', avatar: getAvatar('avatar-1'), category: 'Student', status: 'Active', totalPayments: 2500, paymentDate: '2023-05-20', lga: 'Ikeja', state: 'Lagos', class: 'SSS 3', paymentType: 'Termly Fees' },
  { id: '2', firstName: 'Bob', lastName: 'Williams', email: 'bob.w@example.com', avatar: getAvatar('avatar-2'), category: 'Student', status: 'Active', totalPayments: 1800, paymentDate: '2023-05-18', lga: 'Abeokuta South', state: 'Ogun', class: 'JSS 1', paymentType: 'Registration' },
  { id: '3', firstName: 'Charlie', lastName: 'Brown', email: 'charlie.b@example.com', avatar: getAvatar('avatar-3'), category: 'Researcher', status: 'Inactive', totalPayments: 5000, paymentDate: '2022-12-10', lga: 'Ibadan North', state: 'Oyo', class: 'N/A', paymentType: 'Book Grant' },
  { id: '4', firstName: 'Diana', lastName: 'Miller', email: 'diana.m@example.com', avatar: getAvatar('avatar-4'), category: 'Student', status: 'Graduated', totalPayments: 12000, paymentDate: '2021-06-01', lga: 'Enugu East', state: 'Enugu', class: 'Graduated', paymentType: 'Termly Fees' },
  { id: '5', firstName: 'Ethan', lastName: 'Davis', email: 'ethan.d@example.com', avatar: getAvatar('avatar-5'), category: 'Educator', status: 'Active', totalPayments: 3200, paymentDate: '2023-04-30', lga: 'Kano Municipal', state: 'Kano', class: 'N/A', paymentType: 'Transport' },
  { id: '6', firstName: 'Fiona', lastName: 'Wilson', email: 'fiona.w@example.com', avatar: getAvatar('avatar-6'), category: 'Student', status: 'Active', totalPayments: 750, paymentDate: '2023-05-22', lga: 'Port Harcourt', state: 'Rivers', class: 'Primary 5', paymentType: 'Registration' },
];

export const contributors: Contributor[] = [
    { id: '1', firstName: 'Grace', lastName: 'Lee', email: 'grace.l@example.com', avatar: getAvatar('avatar-7'), category: 'Individual', status: 'Active', totalContribution: 5000, lastContributionDate: '2023-04-15' },
    { id: '2', firstName: 'Heidi', lastName: 'Turner', email: 'heidi.t@example.com', avatar: getAvatar('avatar-8'), category: 'Corporate', status: 'Active', totalContribution: 25000, lastContributionDate: '2023-03-01' },
    { id: '3', firstName: 'Ivan', lastName: 'Martinez', email: 'ivan.m@example.com', avatar: getAvatar('avatar-9'), category: 'Foundation', status: 'Paused', totalContribution: 100000, lastContributionDate: '2022-11-20' },
    { id: '4', firstName: 'Judy', lastName: 'Rodriguez', email: 'judy.r@example.com', avatar: getAvatar('avatar-10'), category: 'Individual', status: 'Inactive', totalContribution: 1000, lastContributionDate: '2021-02-05' },
    { id: '5', firstName: 'Kyle', lastName: 'Chen', email: 'kyle.c@example.com', avatar: getAvatar('avatar-11'), category: 'Individual', status: 'Active', totalContribution: 250, lastContributionDate: '2023-05-19' },
];

export const beneficiaryCategories: Category[] = [
    { id: 'ben-cat-1', name: 'Student' },
    { id: 'ben-cat-2', name: 'Researcher' },
    { id: 'ben-cat-3', name: 'Educator' },
];

export const contributorCategories: Category[] = [
    { id: 'con-cat-1', name: 'Individual' },
    { id: 'con-cat-2', name: 'Corporate' },
    { id: 'con-cat-3', name: 'Foundation' },
];

export const userProfile: UserProfile = {
    name: 'Admin User',
    email: 'admin@eduaid.org',
};
