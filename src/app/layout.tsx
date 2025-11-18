
'use client'

import type { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { Playfair_Display, Manrope } from 'next/font/google';

import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from "@/components/ui/toaster";
import { FirebaseClientProvider } from '@/firebase';
import { ClientOnly } from '@/components/client-only';
import { BackToTopButton } from '@/components/ui/back-to-top-button';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-headline',
});

const manrope = Manrope({
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
        <body className={cn('min-h-screen font-body antialiased', playfair.variable, manrope.variable)}>
            <FirebaseClientProvider>
                <ClientOnly>
                    <div className="relative flex min-h-dvh flex-col bg-background">
                        {children}
                    </div>
                </ClientOnly>
            </FirebaseClientProvider>
            <Toaster />
            <BackToTopButton />
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
