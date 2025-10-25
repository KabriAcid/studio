
'use client';

import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { beneficiaries } from '@/lib/placeholder-data';
import { cn } from '@/lib/utils';
import { ArrowLeft, DollarSign, CalendarDays, History, Mail, Phone, FileText, MapPin, GraduationCap } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';

export default function BeneficiaryDetailsPage({ params }: { params: { id: string } }) {
  const beneficiary = beneficiaries.find((b) => b.id === params.id);

  if (!beneficiary) {
    notFound();
  }
  
  const beneficiaryName = `${beneficiary.firstName} ${beneficiary.lastName}`;

  // Placeholder for payment history
  const paymentHistory = [
    { id: 1, date: '2023-05-20', amount: 500, status: 'Completed', type: beneficiary.paymentType },
    { id: 2, date: '2023-04-20', amount: 500, status: 'Completed', type: 'Termly Fees' },
    { id: 3, date: '2023-03-20', amount: 500, status: 'Completed', type: 'Termly Fees' },
    { id: 4, date: '2023-02-20', amount: 500, status: 'Completed', type: 'Termly Fees' },
    { id: 5, date: '2023-01-20', amount: 500, status: 'Completed', type: 'Registration' },
  ];
  
  const breadcrumbItems = [
    { label: 'Beneficiaries', href: '/dashboard/beneficiaries' },
    { label: beneficiaryName },
  ];

  return (
    <div className="p-4 md:p-8 lg:p-10 space-y-8">
      <div className="flex justify-between items-center">
        <Breadcrumbs items={breadcrumbItems} />
        <Link href="/dashboard/beneficiaries" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground">
            <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Beneficiaries
            </Button>
        </Link>
      </div>
      <Card className="shadow-[0_4px_12px_rgba(0,0,0,0.04),_0_1px_4px_rgba(0,0,0,0.06)] border-0">
        <CardHeader className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <Image
            src={beneficiary.avatar}
            width={100}
            height={100}
            alt={beneficiaryName}
            className="rounded-full border-4 border-card"
            data-ai-hint="person face"
          />
          <div className="flex-1">
            <CardTitle className="text-3xl font-headline">{beneficiaryName}</CardTitle>
            <CardDescription className="text-base">{beneficiary.email}</CardDescription>
            <div className="flex items-center gap-2 mt-2">
                <Badge variant={beneficiary.status === 'Active' ? 'default' : 'secondary'} className={cn(
                    beneficiary.status === 'Active' && 'bg-green-100 text-green-800 border-green-200',
                    beneficiary.status === 'Inactive' && 'bg-gray-100 text-gray-800 border-gray-200',
                    beneficiary.status === 'Graduated' && 'bg-purple-100 text-purple-800 border-purple-200'
                )}>
                  {beneficiary.status}
                </Badge>
                <span className="text-sm text-muted-foreground">•</span>
                <span className="text-sm text-muted-foreground">{beneficiary.category}</span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="grid gap-6 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-lg">Financial Summary</CardTitle>
                        <DollarSign className="h-5 w-5 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold">${beneficiary.totalPayments.toLocaleString()}</div>
                        <p className="text-xs text-muted-foreground">Total payments received</p>
                        <div className="mt-4 space-y-2 text-sm">
                            <div className="flex justify-between"><span>Last Payment:</span> <span>{new Date(beneficiary.paymentDate).toLocaleDateString()}</span></div>
                            <div className="flex justify-between"><span>Avg. Payment:</span> <span>${(beneficiary.totalPayments / 5).toLocaleString()}</span></div>
                        </div>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-lg">Academic Details</CardTitle>
                        <GraduationCap className="h-5 w-5 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-3">
                            <div className="flex flex-col">
                                <span className="text-sm text-muted-foreground">Program</span>
                                <span className="font-semibold">University Scholarship</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm text-muted-foreground">Current Class</span>
                                <span className="font-semibold">{beneficiary.class}</span>
                            </div>
                             <div className="flex flex-col">
                                <span className="text-sm text-muted-foreground">Date Joined</span>
                                <span className="font-semibold">{new Date('2022-01-15').toLocaleDateString()}</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-lg">Location & Contact</CardTitle>
                        <MapPin className="h-5 w-5 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                       <div className="space-y-3">
                            <div className="flex flex-col">
                                <span className="text-sm text-muted-foreground">Location</span>
                                <span className="font-semibold">{beneficiary.lga}, {beneficiary.state}</span>
                            </div>
                            <div className="flex items-center gap-2 pt-2">
                                <Mail className="h-4 w-4 text-muted-foreground" />
                                <a href={`mailto:${beneficiary.email}`} className="text-primary hover:underline">{beneficiary.email}</a>
                            </div>
                             <div className="flex items-center gap-2">
                                <Phone className="h-4 w-4 text-muted-foreground" />
                                <span className="text-muted-foreground">No phone number</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg"><History className="h-5 w-5 text-muted-foreground"/> Payment History</CardTitle>
                </CardHeader>
                <CardContent>
                    {paymentHistory.length > 0 ? (
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Date</TableHead>
                                    <TableHead>Type</TableHead>
                                    <TableHead className="text-right">Amount</TableHead>
                                    <TableHead>Status</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {paymentHistory.map(p => (
                                <TableRow key={p.id}>
                                    <TableCell>{p.date}</TableCell>
                                     <TableCell>
                                        <Badge variant="secondary">{p.type}</Badge>
                                    </TableCell>
                                    <TableCell className="text-right">${p.amount.toLocaleString()}</TableCell>
                                    <TableCell>
                                        <Badge variant="default" className="bg-green-100 text-green-800 border-green-200">{p.status}</Badge>
                                    </TableCell>
                                </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    ) : (
                        <div className="flex flex-col items-center justify-center text-center text-muted-foreground h-40">
                            <FileText className="h-12 w-12 mb-2" />
                            <p>No payment history found.</p>
                        </div>
                    )}
                </CardContent>
            </Card>
        </CardContent>
      </Card>
    </div>
  );
}
