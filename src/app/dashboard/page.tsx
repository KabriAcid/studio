
'use client'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';
import { DollarSign, Users, TrendingUp, Handshake, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { KpiCard } from '@/components/kpi-card';
import { financialStats, monthlyFinancials, beneficiaries } from '@/lib/placeholder-data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useState, useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export default function DashboardPage() {
  const icons = [<DollarSign />, <TrendingUp />, <Users />, <Handshake />];
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };
  
  return (
    <div className="p-4 md:p-8 lg:p-10 space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold font-headline tracking-tight">Dashboard</h1>
        <p className="text-lg text-muted-foreground">Welcome back! Here's a summary of your organization's activity.</p>
      </div>

      {isLoading ? (
        <motion.div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4" variants={containerVariants} initial="hidden" animate="visible">
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
        </motion.div>
      ) : (
        <motion.div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4" variants={containerVariants} initial="hidden" animate="visible">
          {financialStats.map((stat, index) => (
            <motion.div key={stat.title} variants={itemVariants}>
              <KpiCard {...stat} icon={icons[index]} />
            </motion.div>
          ))}
        </motion.div>
      )}


      <motion.div className="grid grid-cols-1 lg:grid-cols-3 gap-8" variants={containerVariants} initial="hidden" animate="visible">
        <motion.div className="lg:col-span-2" variants={itemVariants}>
          {isLoading ? (
            <Card className="shadow-[0_4px_12px_rgba(0,0,0,0.04),_0_1px_4px_rgba(0,0,0,0.06)] border-0 h-full">
                <CardHeader>
                  <Skeleton className="h-7 w-1/3 mb-2" />
                  <Skeleton className="h-5 w-2/3" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-[350px] w-full" />
                </CardContent>
            </Card>
          ) : (
            <Card className="shadow-[0_4px_12px_rgba(0,0,0,0.04),_0_1px_4px_rgba(0,0,0,0.06)] border-0 h-full">
                <CardHeader>
                <CardTitle className="text-2xl font-headline">Financial Trends</CardTitle>
                <CardDescription className="text-base">Income vs. Expenses over the last 12 months.</CardDescription>
                </CardHeader>
                <CardContent>
                <div className="h-[350px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={monthlyFinancials}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="month" stroke="#888888" fontSize={14} tickLine={false} axisLine={false} />
                        <YAxis stroke="#888888" fontSize={14} tickLine={false} axisLine={false} tickFormatter={(value) => `₦${value / 1000}k`} />
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
                </CardContent>
            </Card>
          )}
        </motion.div>
        <motion.div variants={itemVariants}>
          {isLoading ? (
             <Card className="shadow-[0_4px_12px_rgba(0,0,0,0.04),_0_1px_4px_rgba(0,0,0,0.06)] border-0 h-full">
                <CardHeader>
                    <Skeleton className="h-7 w-1/2 mb-2" />
                    <Skeleton className="h-5 w-3/4" />
                </CardHeader>
                <CardContent className="space-y-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <div key={i} className="flex items-center gap-4">
                            <Skeleton className="h-10 w-10 rounded-full" />
                            <div className="flex-1 space-y-2">
                                <Skeleton className="h-4 w-3/4" />
                                <Skeleton className="h-3 w-full" />
                            </div>
                            <Skeleton className="h-4 w-12" />
                        </div>
                    ))}
                </CardContent>
            </Card>
          ) : (
            <Card className="shadow-[0_4px_12px_rgba(0,0,0,0.04),_0_1px_4px_rgba(0,0,0,0.06)] border-0 h-full">
                <CardHeader className="flex flex-row items-center justify-between pb-4">
                    <div>
                        <CardTitle className="text-2xl font-headline">Recent Beneficiaries</CardTitle>
                        <CardDescription className="text-base">A summary of recent beneficiaries.</CardDescription>
                    </div>
                    <Button asChild variant="outline" size="sm">
                        <Link href="/dashboard/beneficiaries">
                            View All
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {beneficiaries.slice(0, 5).map(beneficiary => (
                            <div key={beneficiary.id} className="flex items-center gap-4">
                                <Avatar className="h-10 w-10">
                                    <AvatarImage src={beneficiary.avatar} alt={`${beneficiary.firstName} ${beneficiary.lastName}`} data-ai-hint="person face" />
                                    <AvatarFallback>{beneficiary.firstName.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div className="flex-1">
                                    <p className="font-semibold truncate">{beneficiary.firstName} {beneficiary.lastName}</p>
                                    <p className="text-sm text-muted-foreground truncate">{beneficiary.email}</p>
                                </div>
                                <div className="text-sm text-right text-muted-foreground">₦{beneficiary.totalPayments.toLocaleString()}</div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
           )}
        </motion.div>
      </motion.div>
    </div>
  );
}
