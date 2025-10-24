
'use client';

import { Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LoadingOverlayProps {
  isLoading: boolean;
}

export function LoadingOverlay({ isLoading }: LoadingOverlayProps) {
  if (!isLoading) {
    return null;
  }

  return (
    <div 
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm",
        "transition-opacity duration-300 ease-in-out",
        isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
      aria-modal="true"
      aria-live="assertive"
      role="dialog"
    >
      <div className="relative">
        <Sparkles className="h-16 w-16 animate-spin text-primary" style={{ animationDuration: '1.5s' }} />
      </div>
    </div>
  );
}
