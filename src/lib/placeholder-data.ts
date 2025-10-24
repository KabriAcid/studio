import type { Beneficiary, Contributor, FinancialStat, MonthlyData } from '@/lib/types';
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
  { id: '1', name: 'Alice Johnson', email: 'alice.j@example.com', avatar: getAvatar('avatar-1'), category: 'Student', status: 'Active', totalPayments: 2500, paymentDate: '2023-05-20' },
  { id: '2', name: 'Bob Williams', email: 'bob.w@example.com', avatar: getAvatar('avatar-2'), category: 'Student', status: 'Active', totalPayments: 1800, paymentDate: '2023-05-18' },
  { id: '3', name: 'Charlie Brown', email: 'charlie.b@example.com', avatar: getAvatar('avatar-3'), category: 'Researcher', status: 'Inactive', totalPayments: 5000, paymentDate: '2022-12-10' },
  { id: '4', name: 'Diana Miller', email: 'diana.m@example.com', avatar: getAvatar('avatar-4'), category: 'Student', status: 'Graduated', totalPayments: 12000, paymentDate: '2021-06-01' },
  { id: '5', name: 'Ethan Davis', email: 'ethan.d@example.com', avatar: getAvatar('avatar-5'), category: 'Educator', status: 'Active', totalPayments: 3200, paymentDate: '2023-04-30' },
  { id: '6', name: 'Fiona Wilson', email: 'fiona.w@example.com', avatar: getAvatar('avatar-6'), category: 'Student', status: 'Active', totalPayments: 750, paymentDate: '2023-05-22' },
];

export const contributors: Contributor[] = [
    { id: '1', name: 'Grace Lee', email: 'grace.l@example.com', avatar: getAvatar('avatar-7'), category: 'Individual', status: 'Active', totalContribution: 5000, lastContributionDate: '2023-04-15' },
    { id: '2', name: 'Heidi Turner', email: 'heidi.t@example.com', avatar: getAvatar('avatar-8'), category: 'Corporate', status: 'Active', totalContribution: 25000, lastContributionDate: '2023-03-01' },
    { id: '3', name: 'Ivan Martinez', email: 'ivan.m@example.com', avatar: getAvatar('avatar-9'), category: 'Foundation', status: 'Paused', totalContribution: 100000, lastContributionDate: '2022-11-20' },
    { id: '4', name: 'Judy Rodriguez', email: 'judy.r@example.com', avatar: getAvatar('avatar-10'), category: 'Individual', status: 'Inactive', totalContribution: 1000, lastContributionDate: '2021-02-05' },
    { id: '5', name: 'Kyle Chen', email: 'kyle.c@example.com', avatar: getAvatar('avatar-11'), category: 'Individual', status: 'Active', totalContribution: 250, lastContributionDate: '2023-05-19' },
];
