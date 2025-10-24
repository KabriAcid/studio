export type Beneficiary = {
  id: string;
  name: string;
  avatar: string;
  email: string;
  category: 'Student' | 'Researcher' | 'Educator';
  status: 'Active' | 'Inactive' | 'Graduated';
  totalPayments: number;
  paymentDate: string;
};

export type Contributor = {
  id: string;
  name: string;
  avatar: string;
  email: string;
  category: 'Individual' | 'Corporate' | 'Foundation';
  status: 'Active' | 'Inactive' | 'Paused';
  totalContribution: number;
  lastContributionDate: string;
};

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
