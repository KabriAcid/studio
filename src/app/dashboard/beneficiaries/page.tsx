
'use client';

import Image from 'next/image';
import { PlusCircle, Pencil, Eye } from 'lucide-react';
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
import { beneficiaries } from '@/lib/placeholder-data';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { BeneficiaryForm } from '@/components/beneficiary-form';
import type { Beneficiary } from '@/lib/types';
import Link from 'next/link';

export default function BeneficiariesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBeneficiary, setSelectedBeneficiary] = useState<Beneficiary | undefined>(undefined);

  const handleNewBeneficiary = () => {
    setSelectedBeneficiary(undefined);
    setIsModalOpen(true);
  };

  const handleEditBeneficiary = (beneficiary: Beneficiary) => {
    setSelectedBeneficiary(beneficiary);
    setIsModalOpen(true);
  };

  const handleFormSubmit = (values: any) => {
    console.log('Form values:', values);
    // Here you would typically handle form submission,
    // e.g., by calling an API to create/update a beneficiary.
    setIsModalOpen(false);
  };

  return (
    <div className="p-4 md:p-8 lg:p-10 space-y-8">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
            <h1 className="text-4xl font-bold font-headline tracking-tight">Beneficiaries</h1>
            <p className="text-lg text-muted-foreground">Manage your organization's beneficiaries.</p>
        </div>
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogTrigger asChild>
                <Button size="lg" onClick={handleNewBeneficiary}>
                    <PlusCircle className="mr-2 h-5 w-5" />
                    New Beneficiary
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{selectedBeneficiary ? 'Edit Beneficiary' : 'New Beneficiary'}</DialogTitle>
                </DialogHeader>
                <BeneficiaryForm beneficiary={selectedBeneficiary} onSubmit={handleFormSubmit} />
            </DialogContent>
        </Dialog>
      </div>

      <Card className="shadow-[0_4px_12px_rgba(0,0,0,0.04),_0_1px_4px_rgba(0,0,0,0.06)] border-0">
        <CardHeader>
          <CardTitle className="text-2xl font-headline">Beneficiary List</CardTitle>
          <CardDescription className="text-base">A list of all beneficiaries in your records.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Total Payments</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {beneficiaries.map((beneficiary) => (
                <TableRow key={beneficiary.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-3">
                      <Image
                        src={beneficiary.avatar}
                        width={40}
                        height={40}
                        alt={beneficiary.name}
                        className="rounded-full"
                        data-ai-hint="person face"
                      />
                      <div>
                        <div className="font-bold">{beneficiary.name}</div>
                        <div className="text-sm text-muted-foreground">{beneficiary.email}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{beneficiary.category}</TableCell>
                  <TableCell>
                    <Badge variant={beneficiary.status === 'Active' ? 'default' : 'secondary'} className={cn(
                        beneficiary.status === 'Active' && 'bg-green-100 text-green-800 border-green-200',
                        beneficiary.status === 'Inactive' && 'bg-gray-100 text-gray-800 border-gray-200',
                        beneficiary.status === 'Graduated' && 'bg-purple-100 text-purple-800 border-purple-200'
                    )}>
                      {beneficiary.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">${beneficiary.totalPayments.toLocaleString()}</TableCell>
                  <TableCell>
                    <div className="flex items-center justify-end gap-2">
                        <Button variant="ghost" size="icon" onClick={() => handleEditBeneficiary(beneficiary)}>
                            <Pencil className="h-4 w-4" />
                            <span className="sr-only">Edit</span>
                        </Button>
                        <Link href={`/dashboard/beneficiaries/${beneficiary.id}`}>
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
        </CardContent>
      </Card>
    </div>
  );
}
