
export type Beneficiary = {
  id: string;
  firstName: string;
  lastName: string;
  avatar: string;
  email: string;
  category: 'Student' | 'Researcher' | 'Educator';
  status: 'Active' | 'Inactive' | 'Graduated';
  totalPayments: number;
  paymentDate: string;
  lga: string;
  state: string;
  class: string;
  paymentType: 'Registration' | 'Termly Fees' | 'Book Grant' | 'Transport';
};

export type Contributor = {
  id: string;
  firstName: string;
  lastName: string;
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

export type Category = {
  id:string;
  name: string;
};

export type UserProfile = {
    name: string;
    email: string;
};
