
'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

export type BreadcrumbItem = {
  label: React.ReactNode;
  href?: string;
};

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
  homeIcon?: React.ReactNode;
}

export function Breadcrumbs({ items, className, homeIcon = <Home className="h-4 w-4" /> }: BreadcrumbsProps) {
  const allItems = [{ label: homeIcon, href: '/dashboard' }, ...items];

  return (
    <nav aria-label="Breadcrumb" className={cn('text-sm text-muted-foreground', className)}>
      <ol className="flex items-center gap-1.5">
        {allItems.map((item, index) => (
          <li key={index} className="flex items-center gap-1.5">
            {index > 0 && <ChevronRight className="h-4 w-4" />}
            {item.href ? (
              <Link href={item.href} className="hover:text-foreground transition-colors flex items-center gap-1.5">
                {item.label}
              </Link>
            ) : (
              <span className="font-medium text-foreground">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
