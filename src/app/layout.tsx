import type { Metadata } from 'next';
import { headers } from 'next/headers';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from "@/components/ui/toaster";
import { SidebarProvider } from '@/components/ui/sidebar';
import { ReactNode } from 'react';
import { Orbitron, Inter } from 'next/font/google';
import { FirebaseClientProvider } from '@/firebase';

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-headline',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: {
    default: 'Emphz - High-Performance GRP Solutions',
    template: '%s | Emphz',
  },
  description: 'Emphz specializes in Glass Reinforced Plastic (GRP) products, offering a wide range of solutions from pipes to custom-molded items. Discover our projects and technical expertise.',
  keywords: ['GRP', 'Glass Reinforced Plastic', 'GRP pipes', 'GRP tanks', 'Industrial Solutions', 'AI Chat'],
  openGraph: {
    title: 'Emphz - High-Performance GRP Solutions',
    description: 'Specializing in Glass Reinforced Plastic (GRP) products for industrial applications.',
    url: 'https://emphz.com', // Replace with actual domain
    images: [
      {
        url: 'https://picsum.photos/seed/ogimage/1200/630',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emphz - High-Performance GRP Solutions',
    description: 'Specializing in Glass Reinforced Plastic (GRP) products for industrial applications.',
    images: ['https://picsum.photos/seed/twitterimage/1200/630'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = headers();
  const pathname = headersList.get('x-pathname') || '';
  const isAdminPage = pathname.startsWith('/admin');

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('min-h-screen font-body antialiased', orbitron.variable, inter.variable)}>
        <FirebaseClientProvider>
          <SidebarProvider>
            {isAdminPage ? (
               <div className='bg-background text-foreground'>{children}</div>
            ) : (
              <div className="relative flex min-h-dvh flex-col bg-background">
                {children}
              </div>
            )}
          </SidebarProvider>
        </FirebaseClientProvider>
        <Toaster />
      </body>
    </html>
  );
}
