
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BarChart3, HeartHandshake, LayoutDashboard, Settings, Users } from 'lucide-react';

import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';

const links = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/dashboard/beneficiaries', label: 'Beneficiaries', icon: Users },
  { href: '/dashboard/contributors', label: 'Contributors', icon: HeartHandshake },
  { href: '/dashboard/reports', label: 'Reports', icon: BarChart3 },
  { href: '/dashboard/settings', label: 'Settings', icon: Settings },
];

export function DashboardNav() {
  const pathname = usePathname();

  return (
    <SidebarMenu>
      {links.map((link) => (
        <SidebarMenuItem key={link.href}>
          <Link href={link.href}>
            <SidebarMenuButton
              isActive={pathname === link.href}
              tooltip={link.label}
              aria-label={link.label}
              asChild
            >
              <div>
                <link.icon />
                <span>{link.label}</span>
              </div>
            </SidebarMenuButton>
          </Link>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}
