
'use client'

import type { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { Orbitron, Exo_2 } from 'next/font/google';

import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from "@/components/ui/toaster";
import { FirebaseClientProvider } from '@/firebase';
import { ClientOnly } from '@/components/client-only';

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-headline',
});

const exo2 = Exo_2({
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

    return (
        <body className={cn('min-h-screen font-body antialiased', orbitron.variable, exo2.variable)}>
            <FirebaseClientProvider>
                <ClientOnly>
                    <div className="relative flex min-h-dvh flex-col bg-background">
                        {children}
                    </div>
                </ClientOnly>
            </FirebaseClientProvider>
            <Toaster />
        </body>
    )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <RootBody>{children}</RootBody>
    </html>
  );
}
