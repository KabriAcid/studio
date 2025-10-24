import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';

interface KpiCardProps {
  title: string;
  value: string;
  change: string;
  changeType: 'increase' | 'decrease';
  icon: ReactNode;
}

export function KpiCard({ title, value, change, changeType, icon }: KpiCardProps) {
  const isIncrease = changeType === 'increase';
  return (
    <Card className="shadow-[0_4px_12px_rgba(0,0,0,0.04),_0_1px_4px_rgba(0,0,0,0.06)] border-0 transition-transform hover:scale-[1.02] hover:shadow-[0_8px_16px_rgba(0,0,0,0.06),_0_3px_8px_rgba(0,0,0,0.08)]">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-medium text-muted-foreground">{title}</CardTitle>
        <div className="text-muted-foreground">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-4xl font-bold font-headline">{value}</div>
        <p className={cn("text-sm text-muted-foreground flex items-center gap-1", isIncrease ? 'text-green-600' : 'text-red-600')}>
          {isIncrease ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
          {change}
        </p>
      </CardContent>
    </Card>
  );
}
