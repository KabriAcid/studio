
'use client';
import { usePathname } from 'next/navigation';
import { PublicHeader } from '@/components/public-header';
import { Footer } from '@/components/footer';

export function AppLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isDashboard = pathname.startsWith('/dashboard');

    if (isDashboard) {
        return <>{children}</>;
    }

    return (
        <div className="flex flex-col min-h-screen">
            <PublicHeader />
            <main className="flex-1">{children}</main>
            <Footer />
        </div>
    )
}
