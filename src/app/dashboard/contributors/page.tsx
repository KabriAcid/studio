
'use client';

import Image from 'next/image';
import { PlusCircle, Pencil, Eye, HeartHandshake, Users, DollarSign, UserPlus } from 'lucide-react';
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
import { contributors, contributorStats } from '@/lib/placeholder-data';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ContributorForm } from '@/components/contributor-form';
import type { Contributor } from '@/lib/types';
import { TableSkeleton } from '@/components/table-skeleton';
import { KpiCard } from '@/components/kpi-card';
import { Skeleton } from '@/components/ui/skeleton';
import Link from 'next/link';

export default function ContributorsPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedContributor, setSelectedContributor] = useState<Contributor | undefined>(undefined);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
          setIsLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    const handleNewContributor = () => {
        setSelectedContributor(undefined);
        setIsModalOpen(true);
    };

    const handleEditContributor = (contributor: Contributor) => {
        setSelectedContributor(contributor);
        setIsModalOpen(true);
    };

    const handleFormSubmit = (values: any) => {
        console.log('Form values:', values);
        // Here you would typically handle form submission,
        // e.g., by calling an API to create/update a contributor.
        setIsModalOpen(false);
    };

    const icons = [<HeartHandshake />, <Users />, <DollarSign />, <UserPlus />];

    return (
        <div className="p-4 md:p-8 lg:p-10 space-y-8">
            <div className="flex items-center justify-between">
                <div className="space-y-2">
                    <h1 className="text-4xl font-bold font-headline tracking-tight">Contributors</h1>
                    <p className="text-lg text-muted-foreground">Manage your organization's contributors.</p>
                </div>
                <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                    <DialogTrigger asChild>
                        <Button size="lg" onClick={handleNewContributor}>
                            <PlusCircle className="mr-2 h-5 w-5" />
                            New Contributor
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>{selectedContributor ? 'Edit Contributor' : 'New Contributor'}</DialogTitle>
                        </DialogHeader>
                        <ContributorForm contributor={selectedContributor} onSubmit={handleFormSubmit} />
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
                {contributorStats.map((stat, index) => (
                    <KpiCard key={stat.title} {...stat} icon={icons[index]} />
                ))}
            </div>
            )}

            <Card className="shadow-[0_4px_12px_rgba(0,0,0,0.04),_0_1px_4px_rgba(0,0,0,0.06)] border-0">
                <CardHeader>
                    <CardTitle className="text-2xl font-headline">Contributor List</CardTitle>
                    <CardDescription className="text-base">A list of all contributors in your records.</CardDescription>
                </CardHeader>
                <CardContent>
                    {isLoading ? (
                        <TableSkeleton />
                    ) : (
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Name</TableHead>
                                <TableHead>Category</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Total Contribution</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {contributors.map((contributor) => (
                                <TableRow key={contributor.id}>
                                    <TableCell className="font-medium">
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
                                    </TableCell>
                                    <TableCell>{contributor.category}</TableCell>
                                    <TableCell>
                                    <Badge variant={contributor.status === 'Active' ? 'default' : 'secondary'} className={cn(
                                        contributor.status === 'Active' && 'bg-green-100 text-green-800 border-green-200',
                                        contributor.status === 'Inactive' && 'bg-gray-100 text-gray-800 border-gray-200',
                                        contributor.status === 'Paused' && 'bg-yellow-100 text-yellow-800 border-yellow-200'
                                    )}>
                                        {contributor.status}
                                    </Badge>
                                    </TableCell>
                                    <TableCell className="text-right">${contributor.totalContribution.toLocaleString()}</TableCell>
                                    <TableCell>
                                        <div className="flex items-center justify-end gap-2">
                                            <Button variant="ghost" size="icon" onClick={() => handleEditContributor(contributor)}>
                                                <Pencil className="h-4 w-4" />
                                                <span className="sr-only">Edit</span>
                                            </Button>
                                             <Link href={`/dashboard/contributors/${contributor.id}`}>
                                                <Button variant="ghost" size="icon">
                                                    <Eye className="h-4 w-4" />
                                                    <span className="sr-only">View Details</span>
                                                </Button>
                                            </Link>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
