
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Users, HeartHandshake, BarChart3, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';

const links = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/dashboard/beneficiaries', label: 'Beneficiaries', icon: Users },
  { href: '/dashboard/contributors', label: 'Contributors', icon: HeartHandshake },
  { href: '/dashboard/reports', label: 'Reports', icon: BarChart3 },
  { href: '/dashboard/settings', label: 'Settings', icon: Settings },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-card border-t z-50">
      <nav className="flex justify-around items-center h-16">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex flex-col items-center justify-center gap-1 text-xs w-full h-full transition-colors",
                isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              )}
            >
              <link.icon className="h-5 w-5" />
              <span className="truncate sm:hidden">{link.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
