
'use client';

import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarInset,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { DashboardNav } from '@/components/dashboard-nav';
import { Header } from '@/components/header';
import { useAuth } from '@/hooks/use-auth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { BottomNav } from '@/components/bottom-nav';
import Image from 'next/image';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const { isAuthenticated, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.replace('/login');
    }
  }, [isAuthenticated, loading, router]);

  if (loading || !isAuthenticated) {
    return (
       <div className="flex h-screen w-screen items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                </div>
            </div>
        </div>
    );
  }

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 },
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5,
  };

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-2 p-2 font-headline text-2xl font-bold text-sidebar-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              className="h-8 w-8"
              fill="currentColor"
            >
              <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM188,62.14a71.74,71.74,0,0,1,22.1,38.54L174.45,114A48.42,48.42,0,0,0,149,79.05ZM128,56A72,72,0,0,1,188.4,76.67l-24.16,14A48.06,48.06,0,0,0,128,80V56Zm0,48a24,24,0,1,1-24,24A24,24,0,0,1,128,104Zm-64-4.83,24.16-14A48.06,48.06,0,0,0,128,80V56A72,72,0,0,0,67.6,76.67Zm-.1,43.69H45.86A71.74,71.74,0,0,1,68,62.14l24.45,14.12A48.42,48.42,0,0,0,81.55,114ZM128,200a72,72,0,0,1-60.4-29.33L91.76,156.8A48.06,48.06,0,0,0,128,176v24Zm34.55-42,24.45,14.12a72.23,72.23,0,0,1-44.1,23.19V176A48.42,48.42,0,0,0,162.55,158Z" />
            </svg>
            <span className="group-data-[collapsible=icon]:hidden">ESI</span>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <DashboardNav />
        </SidebarContent>
        <SidebarFooter>
          <Button variant="outline" className="w-full group-data-[collapsible=icon]:w-auto group-data-[collapsible=icon]:p-2">
            <span className="group-data-[collapsible=icon]:hidden">Help Center</span>
            <span className="hidden group-data-[collapsible=icon]:inline">Help</span>
          </Button>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <Header />
        <main className="flex-1 overflow-y-auto bg-background pb-16 md:pb-0">
          <motion.div
            key={router.asPath}
            initial="initial"
            animate="in"
            variants={pageVariants}
            transition={pageTransition}
          >
            {children}
          </motion.div>
        </main>
        <BottomNav />
      </SidebarInset>
    </SidebarProvider>
  );
}
