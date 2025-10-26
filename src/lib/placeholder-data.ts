

import type { Beneficiary, Contributor, Contribution, FinancialStat, MonthlyData, Category, UserProfile, HeroSlide, BlogPost } from '@/lib/types';
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
  { id: '1', firstName: 'Aisha', lastName: 'Mohammed', email: 'aisha.m@example.com', avatar: getAvatar('avatar-1'), phoneNumber: '08012345671', program: 'Student', enrollmentStatus: 'Active', totalPayments: 1250000, paymentDate: '2023-05-20', lga: 'Yola North', state: 'Adamawa', class: 'SSS 3', paymentType: 'Termly Fees', category: 'Orphan' },
  { id: '2', firstName: 'Ibrahim', lastName: 'Umar', email: 'ibrahim.u@example.com', avatar: getAvatar('avatar-2'), phoneNumber: '08012345672', program: 'Student', enrollmentStatus: 'Active', totalPayments: 900000, paymentDate: '2023-05-18', lga: 'Jalingo', state: 'Taraba', class: 'JSS 1', paymentType: 'Registration Fees', category: 'Indigent' },
  { id: '3', firstName: 'Fatima', lastName: 'Bello', email: 'fatima.b@example.com', avatar: getAvatar('avatar-3'), program: 'Researcher', enrollmentStatus: 'Inactive', totalPayments: 2500000, paymentDate: '2022-12-10', lga: 'Mubi North', state: 'Adamawa', class: 'N/A', paymentType: 'Book Grant', category: 'Orphan' },
  { id: '4', firstName: 'Zainab', lastName: 'Abubakar', email: 'zainab.a@example.com', avatar: getAvatar('avatar-4'), program: 'Student', enrollmentStatus: 'Graduated', totalPayments: 6000000, paymentDate: '2021-06-01', lga: 'Wukari', state: 'Taraba', class: 'Graduated', paymentType: 'Termly Fees', category: 'Indigent' },
  { id: '5', firstName: 'Ahmed', lastName: 'Suleiman', email: 'ahmed.s@example.com', avatar: getAvatar('avatar-5'), program: 'Educator', enrollmentStatus: 'Active', totalPayments: 1600000, paymentDate: '2023-04-30', lga: 'Yola South', state: 'Adamawa', class: 'N/A', paymentType: 'Transport', category: 'Orphan' },
  { id: '6', firstName: 'Halima', lastName: 'Garba', email: 'halima.g@example.com', avatar: getAvatar('avatar-6'), phoneNumber: '08012345676', program: 'Student', enrollmentStatus: 'Active', totalPayments: 750000, paymentDate: '2023-05-22', lga: 'Sardauna', state: 'Taraba', class: 'Primary 5', paymentType: 'Registration Fees', category: 'Indigent' },
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
    email: 'admin@esiorg.com',
};

export const teamMembers = [
    { id: 1, name: 'Mustapha Buhari', role: 'Chairman', avatar: getAvatar('avatar-7'), bio: 'Leading our organization with a vision for a brighter future for the underserved.' },
    { id: 2, name: 'Alh. Jika Hassan Ardo', role: 'Board of Trustee', avatar: getAvatar('avatar-8'), bio: 'A key member of our board, providing strategic guidance and support for our mission.' },
    { id: 3, name: 'Alhaji Isa', role: 'Board of Trustee', avatar: getAvatar('avatar-9'), bio: 'Dedicated to overseeing our programs and ensuring we reach those most in need.'},
    { id: 4, name: 'Alh. Umar Leme', role: 'Member', avatar: getAvatar('avatar-10'), bio: 'An active member contributing to community outreach and engagement efforts.' },
    { id: 5, name: 'Alh. Dauda', role: 'Member', avatar: getAvatar('avatar-11'), bio: 'Passionate about our cause, working to expand our impact and reach.' },
    { id: 6, name: 'Alh. Yazid', role: 'Member', avatar: getAvatar('avatar-12'), bio: 'A valued member whose contributions are vital to our operational success.' },
];

export const heroSlides: HeroSlide[] = [
    { id: 'slide-1', imageUrl: 'https://images.unsplash.com/photo-1494949649113-4b743d4a4a83?q=80&w=2070&auto=format&fit=crop', alt: 'Student smiling', imageHint: 'smiling student' },
    { id: 'slide-2', imageUrl: 'https://images.unsplash.com/photo-1627863262029-551225a172c7?q=80&w=2070&auto=format&fit=crop', alt: 'Children in a classroom', imageHint: 'classroom children' },
    { id: 'slide-3', imageUrl: 'https://images.unsplash.com/photo-1571260899104-606c11d74d29?q=80&w=2070&auto=format&fit=crop', alt: 'Students collaborating', imageHint: 'students collaborating' },
    { id: 'slide-4', imageUrl: 'https://images.unsplash.com/photo-1610484830842-db636e2572c0?q=80&w=1974&auto=format&fit=crop', alt: 'Child reading a book', imageHint: 'child reading' },
];

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-we-started',
    title: 'How We Started: The ESI Story',
    excerpt: 'Discover the inspiration and journey behind our mission to empower students across Nigeria.',
    author: 'Amina Yusuf',
    date: 'October 26, 2023',
    imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop',
    imageHint: 'students classroom',
    content: `
<p>In the heart of Nigeria, where the thirst for knowledge is as vast as the savanna, ESI was born. It began not in a boardroom, but from a simple, powerful observation: countless brilliant minds were being held back by a single barrier—financial constraints. This is the story of how a small group of passionate individuals decided to rewrite the narrative for a generation of students.</p>
<p>Our journey started in 2005 with a focus on Adamawa and Taraba states. We saw firsthand the struggles of orphans, families in distress, and widows who had no one to turn to. The potential was there, but the opportunity was not. We knew we had to act.</p>
<h3 class="text-2xl font-bold my-4">The First Step</h3>
<p>Our first initiative was small. We sponsored a handful of children at Al-Iman School in Jalingo and Darul-Ulum, providing them with uniforms, books, and the tuition they needed to stay in school. The joy and relief on their faces were all the motivation we needed. We saw that even a small intervention could create a massive ripple effect, not just for the student, but for their entire family and community.</p>
<p>Word began to spread, and so did our mission. With the support of early contributors, we were able to expand our reach to higher institutions, including Taraba State University and Modibbo Adama University. We also began providing critical support to patients at FMC Hospital and assisting widows in our local neighborhoods, ensuring that our impact was felt across different facets of the community.</p>
<h3 class="text-2xl font-bold my-4">Looking Forward</h3>
<p>Today, ESI is a testament to what can be achieved when a community comes together. We have sponsored hundreds of students, many of whom have gone on to become leaders, innovators, and changemakers in their own right. But our work is far from over. With your continued support, we can reach even more students, unlock more potential, and build a brighter, more equitable future for Nigeria, one student at a time.</p>
`
  },
  {
    slug: 'impact-stories-aisha-mohammed',
    title: 'Impact Stories: Meet Aisha Mohammed',
    excerpt: 'Aisha, one of our first beneficiaries, shares her story of academic success and how ESI made a difference.',
    author: 'Tunde Adekunle',
    date: 'October 20, 2023',
    imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop',
    imageHint: 'student graduation',
    content: `
<p>Aisha Mohammed always dreamed of becoming a doctor. Growing up in a small village in Taraba, she was a top student with a passion for science. However, when she lost her father, that dream felt impossibly distant. With her mother struggling to support the family, university seemed like a luxury they could not afford.</p>
<p>"I had given up hope," Aisha recalls. "I was preparing to find a small job to help my mother. I thought my education was over." That's when she heard about ESI. After a rigorous application process, she was selected as one of our first university scholars.</p>
<h3 class="text-2xl font-bold my-4">A New Beginning</h3>
<p>ESI provided Aisha with a full scholarship that covered her tuition, accommodation, and study materials at Modibbo Adama University. For the first time in years, she could focus entirely on her studies without the burden of financial stress.</p>
<p>"It was like a weight had been lifted off my shoulders," she says. "I could finally dedicate myself to my books. I studied day and night, not just for myself, but for my family and for the people who believed in me."</p>
<p>Aisha excelled in her studies, graduating at the top of her class with a degree in Medicine. Today, Dr. Aisha Mohammed works at a general hospital in her home state, providing vital medical care to her community. She is a role model, an inspiration, and a living testament to the power of education.</p>
<h3 class="text-2xl font-bold my-4">Giving Back</h3>
<p>"ESI didn't just give me a scholarship; they gave me a future," Aisha says with a smile. "Now, I contribute a portion of my salary back to the organization, so that another young dreamer can have the same chance I did."</p>
<p>Aisha's story is one of many. It showcases the profound and lasting impact that a single act of generosity can have. It's a reminder that when we invest in education, we invest in the future of our communities and our nation.</p>
`
  },
  {
    slug: 'corporate-sponsorship-in-education',
    title: 'The Importance of Corporate Sponsorship in Education',
    excerpt: 'Learn how corporate partnerships are crucial in creating sustainable educational opportunities for the next generation.',
    author: 'Chinedu Okoro',
    date: 'October 15, 2023',
    imageUrl: 'https://images.unsplash.com/photo-1543269664-56d93c1b41a6?q=80&w=2070&auto=format&fit=crop',
    imageHint: 'business handshake',
    content: `
<p>While individual donations are the lifeblood of many non-profits, corporate sponsorships provide the scale and stability needed to create long-term, systemic change. At ESI, our corporate partners are more than just donors; they are strategic allies in our mission to build a more educated and prosperous Nigeria.</p>
<h3 class="text-2xl font-bold my-4">Why Corporate Partnerships Matter</h3>
<p>Corporate social responsibility (CSR) has evolved beyond simple philanthropy. Today's leading companies understand that investing in communities, particularly in education, is an investment in their own future. A well-educated populace leads to a skilled workforce, a stronger economy, and a more stable society.</p>
<p>Here are a few key reasons why corporate sponsorship is so vital:</p>
<ul>
    <li class="my-2"><strong>Sustainable Funding:</strong> Corporate partnerships often involve multi-year commitments, providing a predictable funding stream that allows organizations like ours to plan and execute long-term projects.</li>
    <li class="my-2"><strong>Expanded Reach:</strong> The resources provided by corporations allow us to support more students and expand our programs into new regions.</li>
    <li class="my-2"><strong>Mentorship and Internships:</strong> Many of our corporate partners offer invaluable internship and mentorship opportunities to our beneficiaries, providing them with real-world experience and professional networks.</li>
    <li class="my-2"><strong>Brand Amplification:</strong> Partnerships amplify our message, raising awareness about the importance of educational equity and encouraging more individuals and organizations to get involved.</li>
</ul>
<h3 class="text-2xl font-bold my-4">A Call to Action for Businesses</h3>
<p>We believe that every business has a role to play in shaping the future. By partnering with ESI, companies can make a tangible and lasting impact on the lives of young Nigerians. Your support can help us break the cycle of poverty, foster innovation, and build the next generation of leaders.</p>
<p>If your organization is looking for a meaningful way to give back, we invite you to connect with us. Together, we can empower futures and transform a nation.</p>
`
  },
];
