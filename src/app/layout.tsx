
'use client'

import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from "@/components/ui/toaster";
import { SidebarProvider } from '@/components/ui/sidebar';
import { ReactNode } from 'react';
import { Orbitron, Inter } from 'next/font/google';
import { FirebaseClientProvider } from '@/firebase';
import { usePathname } from 'next/navigation';
import { ClientOnly } from '@/components/client-only';

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-headline',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
})

// This component uses client-side hooks, so it must be a client component.
function RootBody({
  children,
}: {
  children: ReactNode,
}) {
    const pathname = usePathname();
    const isAdminPage = pathname ? pathname.startsWith('/admin') : false;

    return (
        <body className={cn('min-h-screen font-body antialiased', orbitron.variable, inter.variable)}>
            <FirebaseClientProvider>
                <SidebarProvider>
                  <ClientOnly>
                    {isAdminPage ? (
                        <div className='bg-background text-foreground'>{children}</div>
                    ) : (
                        <div className="relative flex min-h-dvh flex-col bg-background">
                            {children}
                        </div>
                    )}
                  </ClientOnly>
                </SidebarProvider>
            </FirebaseClientProvider>
            <Toaster />
        </body>
    )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <RootBody>{children}</RootBody>
    </html>
  );
}
