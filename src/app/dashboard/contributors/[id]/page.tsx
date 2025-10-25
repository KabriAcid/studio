
'use client';

import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { contributors } from '@/lib/placeholder-data';
import { cn } from '@/lib/utils';
import { ArrowLeft, DollarSign, CalendarDays, History, Mail, Phone, FileText, Gift } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';

export default function ContributorDetailsPage({ params }: { params: { id: string } }) {
  const contributor = contributors.find((b) => b.id === params.id);

  if (!contributor) {
    notFound();
  }
  
  const contributorName = `${contributor.firstName} ${contributor.lastName}`;

  // Placeholder for contribution history
  const contributionHistory = [
    { id: 1, date: '2023-04-15', amount: 2000, type: 'Donation' },
    { id: 2, date: '2023-01-15', amount: 1500, type: 'Grant' },
    { id: 3, date: '2022-10-15', amount: 1500, type: 'Grant' },
  ];

  const breadcrumbItems = [
    { label: 'Contributors', href: '/dashboard/contributors' },
    { label: contributorName },
  ];

  return (
    <div className="p-4 md:p-8 lg:p-10 space-y-8">
       <div className="flex justify-between items-center">
        <Breadcrumbs items={breadcrumbItems} />
        <Link href="/dashboard/contributors" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground">
            <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Contributors
            </Button>
        </Link>
      </div>
      <Card className="shadow-[0_4px_12px_rgba(0,0,0,0.04),_0_1px_4px_rgba(0,0,0,0.06)] border-0">
        <CardHeader className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <Image
            src={contributor.avatar}
            width={100}
            height={100}
            alt={contributorName}
            className="rounded-full border-4 border-card"
            data-ai-hint="person face"
          />
          <div className="flex-1">
            <CardTitle className="text-3xl font-headline">{contributorName}</CardTitle>
            <CardDescription className="text-base">{contributor.email}</CardDescription>
            <div className="flex items-center gap-2 mt-2">
                <Badge variant={contributor.status === 'Active' ? 'default' : 'secondary'} className={cn(
                    contributor.status === 'Active' && 'bg-green-100 text-green-800 border-green-200',
                    contributor.status === 'Inactive' && 'bg-gray-100 text-gray-800 border-gray-200',
                    contributor.status === 'Paused' && 'bg-yellow-100 text-yellow-800 border-yellow-200'
                )}>
                  {contributor.status}
                </Badge>
                <span className="text-sm text-muted-foreground">•</span>
                <span className="text-sm text-muted-foreground">{contributor.category}</span>
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
                        <div className="text-3xl font-bold">${contributor.totalContribution.toLocaleString()}</div>
                        <p className="text-xs text-muted-foreground">Total contributions</p>
                        <div className="mt-4 space-y-2 text-sm">
                            <div className="flex justify-between"><span>Last Contribution:</span> <span>{new Date(contributor.lastContributionDate).toLocaleDateString()}</span></div>
                            <div className="flex justify-between"><span>Avg. Contribution:</span> <span>$1,667</span></div>
                        </div>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-lg">Engagement</CardTitle>
                        <Gift className="h-5 w-5 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-3">
                            <div className="flex flex-col">
                                <span className="text-sm text-muted-foreground">First Contribution</span>
                                <span className="font-semibold">{new Date('2022-10-15').toLocaleDateString()}</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm text-muted-foreground">Total Contributions</span>
                                <span className="font-semibold">{contributionHistory.length}</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-lg">Contact Info</CardTitle>
                        <Phone className="h-5 w-5 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                       <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <Mail className="h-4 w-4 text-muted-foreground" />
                                <a href={`mailto:${contributor.email}`} className="text-primary hover:underline">{contributor.email}</a>
                            </div>
                             <div className="flex items-center gap-2">
                                <Phone className="h-4 w-4 text-muted-foreground" />
                                <span className="text-muted-foreground">{contributor.phoneNumber || 'No phone number'}</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg"><History className="h-5 w-5 text-muted-foreground"/> Contribution History</CardTitle>
                </CardHeader>
                <CardContent>
                    {contributionHistory.length > 0 ? (
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Date</TableHead>
                                    <TableHead className="text-right">Amount</TableHead>
                                    <TableHead>Type</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {contributionHistory.map(c => (
                                <TableRow key={c.id}>
                                    <TableCell>{c.date}</TableCell>
                                    <TableCell className="text-right">${c.amount.toLocaleString()}</TableCell>
                                    <TableCell>
                                        <Badge variant="secondary">{c.type}</Badge>
                                    </TableCell>
                                </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    ) : (
                        <div className="flex flex-col items-center justify-center text-center text-muted-foreground h-40">
                            <FileText className="h-12 w-12 mb-2" />
                            <p>No contribution history found.</p>
                        </div>
                    )}
                </CardContent>
            </Card>
        </CardContent>
      </Card>
    </div>
  );
}
