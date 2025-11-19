
import type { ReactNode } from 'react';
import { Roboto } from 'next/font/google';

import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from "@/components/ui/toaster";
import { FirebaseClientProvider } from '@/firebase';
import { ClientOnly } from '@/components/client-only';
import { BackToTopButton } from '@/components/ui/back-to-top-button';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-body',
});

const roboto_headline = Roboto({
    subsets: ['latin'],
    weight: ['700'],
    variable: '--font-headline',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn('min-h-screen font-body antialiased', roboto.variable, roboto_headline.variable)}>
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
    </html>
  );
}
