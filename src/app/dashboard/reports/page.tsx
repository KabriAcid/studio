
'use client';

import { useState, useEffect } from 'react';
import { DateRange } from 'react-day-picker';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarIcon, Download, DollarSign } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { KpiCard } from '@/components/kpi-card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { monthlyFinancials, beneficiaries, contributors } from '@/lib/placeholder-data';
import { useToast } from "@/hooks/use-toast";
import { Skeleton } from '@/components/ui/skeleton';
import { TableSkeleton } from '@/components/table-skeleton';

export default function ReportsPage() {
    const { toast } = useToast();
    const [isLoading, setIsLoading] = useState(true);
    const [date, setDate] = useState<DateRange | undefined>({
        from: new Date(new Date().setFullYear(new Date().getFullYear() - 1)),
        to: new Date(),
    });
    
    useEffect(() => {
        const timer = setTimeout(() => {
          setIsLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    const handleExport = () => {
        toast({
            title: "Export Started",
            description: "Your report is being generated and will be downloaded shortly.",
        });
    }

    return (
        <div className="p-4 md:p-8 lg:p-10 space-y-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="space-y-2">
                    <h1 className="text-4xl font-bold font-headline tracking-tight">Reports</h1>
                    <p className="text-lg text-muted-foreground">Generate and view detailed financial and activity reports.</p>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
                     <Popover>
                        <PopoverTrigger asChild>
                        <Button
                            variant={"outline"}
                            className={cn(
                            "w-full md:w-[300px] justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                            )}
                        >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date?.from ? (
                            date.to ? (
                                <>
                                {format(date.from, "LLL dd, y")} -{" "}
                                {format(date.to, "LLL dd, y")}
                                </>
                            ) : (
                                format(date.from, "LLL dd, y")
                            )
                            ) : (
                            <span>Pick a date</span>
                            )}
                        </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="end">
                        <Calendar
                            initialFocus
                            mode="range"
                            defaultMonth={date?.from}
                            selected={date}
                            onSelect={setDate}
                            numberOfMonths={2}
                        />
                        </PopoverContent>
                    </Popover>
                    <Button onClick={handleExport} className="w-full sm:w-auto">
                        <Download className="mr-2 h-4 w-4" />
                        Export
                    </Button>
                </div>
            </div>

            <Tabs defaultValue="financial-overview">
                <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 max-w-2xl">
                    <TabsTrigger value="financial-overview">Financial Overview</TabsTrigger>
                    <TabsTrigger value="beneficiary-reports">Beneficiary Reports</TabsTrigger>
                    <TabsTrigger value="contributor-reports">Contributor Reports</TabsTrigger>
                </TabsList>

                <TabsContent value="financial-overview" className="space-y-6 mt-6">
                    {isLoading ? (
                         <div className="grid gap-6 md:grid-cols-3">
                            {Array.from({ length: 3 }).map((_, i) => (
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
                        <div className="grid gap-6 md:grid-cols-3">
                            <KpiCard title="Total Income" value="$45,231" change="+20.1%" changeType="increase" icon={<DollarSign/>} />
                            <KpiCard title="Total Expenses" value="$28,750" change="+18.3%" changeType="increase" icon={<DollarSign />} />
                            <KpiCard title="Net Balance" value="$16,481" change="+25.2%" changeType="increase" icon={<DollarSign />} />
                        </div>
                    )}
                     <Card className="shadow-[0_4px_12px_rgba(0,0,0,0.04),_0_1px_4px_rgba(0,0,0,0.06)] border-0">
                        <CardHeader>
                            <CardTitle className="text-2xl font-headline">Monthly Trends</CardTitle>
                            <CardDescription>Income vs. Expenses for the selected period.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            {isLoading ? (
                                <Skeleton className="h-[400px] w-full" />
                            ) : (
                                <div className="h-[400px] w-full">
                                    <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={monthlyFinancials}>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                        <XAxis dataKey="month" stroke="#888888" fontSize={14} tickLine={false} axisLine={false} />
                                        <YAxis stroke="#888888" fontSize={14} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value / 1000}k`} />
                                        <Tooltip
                                        contentStyle={{
                                            backgroundColor: 'hsl(var(--card))',
                                            borderColor: 'hsl(var(--border))',
                                            borderRadius: 'var(--radius)',
                                            fontFamily: 'var(--font-family-body)',
                                        }}
                                        cursor={{ fill: 'hsl(var(--accent))' }}
                                        />
                                        <Bar dataKey="income" fill="hsl(var(--primary))" name="Income" radius={[4, 4, 0, 0]} />
                                        <Bar dataKey="expenses" fill="hsl(var(--primary) / 0.4)" name="Expenses" radius={[4, 4, 0, 0]} />
                                    </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="beneficiary-reports" className="space-y-6 mt-6">
                    <Card className="shadow-[0_4px_12px_rgba(0,0,0,0.04),_0_1px_4px_rgba(0,0,0,0.06)] border-0">
                        <CardHeader>
                            <CardTitle className="text-2xl font-headline">Beneficiary Disbursement Report</CardTitle>
                            <CardDescription>Detailed list of disbursements to beneficiaries.</CardDescription>
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
                                            <TableHead className="text-right">Total Payments</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {beneficiaries.map((beneficiary) => (
                                            <TableRow key={beneficiary.id}>
                                                <TableCell className="font-medium">{beneficiary.firstName} {beneficiary.lastName}</TableCell>
                                                <TableCell>{beneficiary.category}</TableCell>
                                                <TableCell>{beneficiary.status}</TableCell>
                                                <TableCell className="text-right">${beneficiary.totalPayments.toLocaleString()}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            )}
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="contributor-reports" className="space-y-6 mt-6">
                    <Card className="shadow-[0_4px_12px_rgba(0,0,0,0.04),_0_1px_4px_rgba(0,0,0,0.06)] border-0">
                        <CardHeader>
                            <CardTitle className="text-2xl font-headline">Contributor Report</CardTitle>
                            <CardDescription>Detailed list of contributions from all sources.</CardDescription>
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
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {contributors.map((contributor) => (
                                            <TableRow key={contributor.id}>
                                                <TableCell className="font-medium">{contributor.firstName} {contributor.lastName}</TableCell>
                                                <TableCell>{contributor.category}</TableCell>
                                                <TableCell>{contributor.status}</TableCell>
                                                <TableCell className="text-right">${contributor.totalContribution.toLocaleString()}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            )}
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
