
import type { Beneficiary, Contributor, Contribution, FinancialStat, MonthlyData, Category, UserProfile } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const getAvatar = (id: string) => PlaceHolderImages.find(img => img.id === id)?.imageUrl || '';

export const financialStats: FinancialStat[] = [
  {
    title: 'Total Contributions',
    value: '₦22,615,945',
    change: '+20.1% from last month',
    changeType: 'increase',
  },
  {
    title: 'Total Disbursed',
    value: '₦14,375,200',
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
    value: '₦14,375,200',
    change: '+18.3% from last month',
    changeType: 'increase',
  },
  {
    title: 'Avg. Disbursement',
    value: '₦94,573',
    change: '+2.5% from last month',
    changeType: 'increase',
  },
];

export const contributionStats: FinancialStat[] = [
    {
      title: 'Contributions This Month',
      value: '₦4,271,000',
      change: '+15.2% vs last month',
      changeType: 'increase',
    },
    {
      title: 'Active Contributors',
      value: '23',
      change: '+2 this month',
      changeType: 'increase',
    },
    {
      title: 'Total Contribution Value',
      value: '₦22,615,945',
      change: '+20.1% from last month',
      changeType: 'increase',
    },
    {
      title: 'Total Contributions',
      value: '112',
      change: '+12 this month',
      changeType: 'increase',
    },
  ];

export const monthlyFinancials: MonthlyData[] = [
  { month: 'Jan', income: 2000000, expenses: 1200000 },
  { month: 'Feb', income: 1500000, expenses: 699000 },
  { month: 'Mar', income: 2500000, expenses: 1900000 },
  { month: 'Apr', income: 1390000, expenses: 1954000 },
  { month: 'May', income: 945000, expenses: 2400000 },
  { month: 'Jun', income: 1195000, expenses: 1900000 },
  { month: 'Jul', income: 1745000, expenses: 2150000 },
  { month: 'Aug', income: 1825000, expenses: 2050000 },
  { month: 'Sep', income: 2075000, expenses: 1900000 },
  { month: 'Oct', income: 2400000, expenses: 1950000 },
  { month: 'Nov', income: 2150000, expenses: 1750000 },
  { month: 'Dec', income: 2450000, expenses: 2050000 },
];

export const beneficiaries: Beneficiary[] = [
  { id: '1', firstName: 'Aisha', lastName: 'Mohammed', email: 'aisha.m@example.com', avatar: getAvatar('avatar-1'), phoneNumber: '08012345671', category: 'Student', status: 'Active', totalPayments: 1250000, paymentDate: '2023-05-20', lga: 'Yola North', state: 'Adamawa', class: 'SSS 3', paymentType: 'Termly Fees' },
  { id: '2', firstName: 'Ibrahim', lastName: 'Umar', email: 'ibrahim.u@example.com', avatar: getAvatar('avatar-2'), phoneNumber: '08012345672', category: 'Student', status: 'Active', totalPayments: 900000, paymentDate: '2023-05-18', lga: 'Jalingo', state: 'Taraba', class: 'JSS 1', paymentType: 'Registration Fees' },
  { id: '3', firstName: 'Fatima', lastName: 'Bello', email: 'fatima.b@example.com', avatar: getAvatar('avatar-3'), category: 'Researcher', status: 'Inactive', totalPayments: 2500000, paymentDate: '2022-12-10', lga: 'Mubi North', state: 'Adamawa', class: 'N/A', paymentType: 'Book Grant' },
  { id: '4', firstName: 'Zainab', lastName: 'Abubakar', email: 'zainab.a@example.com', avatar: getAvatar('avatar-4'), category: 'Student', status: 'Graduated', totalPayments: 6000000, paymentDate: '2021-06-01', lga: 'Wukari', state: 'Taraba', class: 'Graduated', paymentType: 'Termly Fees' },
  { id: '5', firstName: 'Ahmed', lastName: 'Suleiman', email: 'ahmed.s@example.com', avatar: getAvatar('avatar-5'), category: 'Educator', status: 'Active', totalPayments: 1600000, paymentDate: '2023-04-30', lga: 'Yola South', state: 'Adamawa', class: 'N/A', paymentType: 'Transport' },
  { id: '6', firstName: 'Halima', lastName: 'Garba', email: 'halima.g@example.com', avatar: getAvatar('avatar-6'), phoneNumber: '08012345676', category: 'Student', status: 'Active', totalPayments: 750000, paymentDate: '2023-05-22', lga: 'Sardauna', state: 'Taraba', class: 'Primary 5', paymentType: 'Registration Fees' },
];

export const contributors: Contributor[] = [
    { id: '1', firstName: 'Tunde', lastName: 'Adekunle', email: 'tunde.a@example.com', avatar: getAvatar('avatar-7'), phoneNumber: '08012345681', category: 'Individual', status: 'Active', totalContribution: 2500000, lastContributionDate: '2023-04-15' },
    { id: '2', firstName: 'Amina', lastName: 'Yusuf', email: 'amina.y@example.com', avatar: getAvatar('avatar-8'), category: 'Corporate', status: 'Active', totalContribution: 12500000, lastContributionDate: '2023-03-01' },
    { id: '3', firstName: 'Chinedu', lastName: 'Okoro', email: 'chinedu.o@example.com', avatar: getAvatar('avatar-9'), category: 'Foundation', status: 'Paused', totalContribution: 50000000, lastContributionDate: '2022-11-20' },
    { id: '4', firstName: 'Ngozi', lastName: 'Obi', email: 'ngozi.o@example.com', avatar: getAvatar('avatar-10'), phoneNumber: '08012345684', category: 'Individual', status: 'Inactive', totalContribution: 500000, lastContributionDate: '2021-02-05' },
    { id: '5', firstName: 'Emeka', lastName: 'Nwosu', email: 'emeka.n@example.com', avatar: getAvatar('avatar-11'), category: 'Individual', status: 'Active', totalContribution: 125000, lastContributionDate: '2023-05-19' },
];

export const recentContributions: Contribution[] = [
  { id: 'c1', contributorId: '1', amount: 250000, date: '2023-05-25', type: 'Donation' },
  { id: 'c2', contributorId: '2', amount: 1250000, date: '2023-05-24', type: 'Sponsorship' },
  { id: 'c3', contributorId: '3', amount: 5000000, date: '2023-05-22', type: 'Grant' },
  { id: 'c4', contributorId: '1', amount: 250000, date: '2023-04-25', type: 'Donation' },
  { id: 'c5', contributorId: '5', amount: 50000, date: '2023-04-20', type: 'Membership' },
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
