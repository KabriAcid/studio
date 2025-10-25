
'use client';

import Image from 'next/image';
import { PlusCircle, HeartHandshake, Users, DollarSign, ListChecks } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { contributionStats, recentContributions, contributors } from '@/lib/placeholder-data';
import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { LogContributionForm } from '@/components/log-contribution-form';
import { TableSkeleton } from '@/components/table-skeleton';
import { KpiCard } from '@/components/kpi-card';
import { Skeleton } from '@/components/ui/skeleton';
import type { Contribution } from '@/lib/types';


export default function ContributionsPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
          setIsLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    const handleLogContribution = () => {
        setIsModalOpen(true);
    };

    const handleFormSubmit = (values: any) => {
        console.log('Contribution logged:', values);
        // Here you would typically handle form submission,
        // e.g., by calling an API to create a contribution.
        setIsModalOpen(false);
    };

    const icons = [<HeartHandshake />, <Users />, <DollarSign />, <ListChecks />];
    
    const getContributorById = (id: string) => contributors.find(c => c.id === id);

    return (
        <div className="p-4 md:p-8 lg:p-10 space-y-8">
            <div className="flex items-center justify-between">
                <div className="space-y-2">
                    <h1 className="text-4xl font-bold font-headline tracking-tight">Contributions</h1>
                    <p className="text-lg text-muted-foreground">Log and view recent contributions from your donors.</p>
                </div>
                <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                    <DialogTrigger asChild>
                        <Button size="lg" onClick={handleLogContribution}>
                            <PlusCircle className="mr-2 h-5 w-5" />
                            Log Contribution
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Log a New Contribution</DialogTitle>
                        </DialogHeader>
                        <LogContributionForm contributors={contributors} onSubmit={handleFormSubmit} />
                    </DialogContent>
                </Dialog>
            </div>

            {isLoading ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {Array.from({ length: 4 }).map((_, i) => (
                    <Card key={i} className="shadow-[0_4px_12px_rgba(0,0,0,0.04),_0_1px_4px_rgba(0,0,0,0.06)] border-0">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <Skeleton className="h-5 w-2/5" />
                            <Skeleton className="h-6 w-6 rounded-sm" />
                        </CardHeader>
                        <CardContent>
                            <Skeleton className="h-8 w-1/2 mb-2" />
                            <Skeleton className="h-4 w-3/5" />
                        </CardContent>
                    </Card>
                ))}
            </div>
            ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {contributionStats.map((stat, index) => (
                    <KpiCard key={stat.title} {...stat} icon={icons[index]} />
                ))}
            </div>
            )}

            <Card className="shadow-[0_4px_12px_rgba(0,0,0,0.04),_0_1px_4px_rgba(0,0,0,0.06)] border-0">
                <CardHeader>
                    <CardTitle className="text-2xl font-headline">Recent Contributions</CardTitle>
                    <CardDescription className="text-base">A log of all recent contributions received.</CardDescription>
                </CardHeader>
                <CardContent>
                    {isLoading ? (
                        <TableSkeleton />
                    ) : (
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Contributor</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead>Type</TableHead>
                                <TableHead className="text-right">Amount</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {recentContributions.map((contribution) => {
                                const contributor = getContributorById(contribution.contributorId);
                                return (
                                <TableRow key={contribution.id}>
                                    <TableCell className="font-medium">
                                        {contributor ? (
                                             <div className="flex items-center gap-3">
                                                <Image
                                                    src={contributor.avatar}
                                                    width={40}
                                                    height={40}
                                                    alt={`${contributor.firstName} ${contributor.lastName}`}
                                                    className="rounded-full"
                                                    data-ai-hint="person face"
                                                />
                                                <div>
                                                    <div className="font-bold">{contributor.firstName} {contributor.lastName}</div>
                                                    <div className="text-sm text-muted-foreground">{contributor.email}</div>
                                                </div>
                                            </div>
                                        ) : (
                                            'Unknown Contributor'
                                        )}
                                    </TableCell>
                                    <TableCell>{new Date(contribution.date).toLocaleDateString()}</TableCell>
                                     <TableCell>
                                        <Badge variant="secondary">{contribution.type}</Badge>
                                    </TableCell>
                                    <TableCell className="text-right">₦{contribution.amount.toLocaleString()}</TableCell>
                                </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
