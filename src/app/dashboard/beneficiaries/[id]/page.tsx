
'use client';

import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { beneficiaries } from '@/lib/placeholder-data';
import { cn } from '@/lib/utils';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function BeneficiaryDetailsPage({ params }: { params: { id: string } }) {
  const beneficiary = beneficiaries.find((b) => b.id === params.id);

  if (!beneficiary) {
    notFound();
  }

  return (
    <div className="p-4 md:p-8 lg:p-10 space-y-8">
      <Link href="/dashboard/beneficiaries" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground">
        <Button variant="outline" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Beneficiaries
        </Button>
      </Link>
      <Card className="shadow-[0_4px_12px_rgba(0,0,0,0.04),_0_1px_4px_rgba(0,0,0,0.06)] border-0">
        <CardHeader className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <Image
            src={beneficiary.avatar}
            width={100}
            height={100}
            alt={beneficiary.name}
            className="rounded-full border-4 border-card"
            data-ai-hint="person face"
          />
          <div className="flex-1">
            <CardTitle className="text-3xl font-headline">{beneficiary.name}</CardTitle>
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
        <CardContent className="grid gap-4 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg">Financials</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-2">
                            <p><strong>Total Payments:</strong> ${beneficiary.totalPayments.toLocaleString()}</p>
                            <p><strong>Last Payment:</strong> {new Date(beneficiary.paymentDate).toLocaleDateString()}</p>
                        </div>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle className="text-lg">Activity</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Activity details coming soon.</p>
                    </CardContent>
                </Card>
            </div>
        </CardContent>
      </Card>
    </div>
  );
}
