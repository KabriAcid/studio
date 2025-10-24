
'use client'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { DollarSign, Users, TrendingUp, Handshake } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { KpiCard } from '@/components/kpi-card';
import { financialStats, monthlyFinancials } from '@/lib/placeholder-data';

export default function DashboardPage() {
  const icons = [<DollarSign />, <TrendingUp />, <Users />, <Handshake />];
  
  return (
    <div className="p-4 md:p-8 lg:p-10 space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold font-headline tracking-tight">Dashboard</h1>
        <p className="text-lg text-muted-foreground">Welcome back! Here's a summary of your organization's activity.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {financialStats.map((stat, index) => (
          <KpiCard key={stat.title} {...stat} icon={icons[index]} />
        ))}
      </div>

      <Card className="shadow-[0_4px_12px_rgba(0,0,0,0.04),_0_1px_4px_rgba(0,0,0,0.06)] border-0">
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
        </CardContent>
      </Card>
    </div>
  );
}
