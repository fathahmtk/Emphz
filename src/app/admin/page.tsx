
'use client';

import { BarChart as BarChartIcon, BookText, Bot, ShoppingBag, LogOut, User } from 'lucide-react';
import Link from 'next/link';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { useAuth, useCollection } from '@/firebase';
import { type Lead } from '@/lib/types';
import { useMemo, useEffect } from 'react';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import { collection, orderBy, query } from 'firebase/firestore';
import { useFirestore, useMemoFirebase } from '@/firebase';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { signOut } from 'firebase/auth';

const stats = [
  {
    title: 'Products',
    value: 4,
    icon: ShoppingBag,
    href: '/admin/products',
  },
  { title: 'Projects', value: 2, icon: BookText, href: '/admin/projects' },
  { title: 'Leads', value: 2, icon: BarChartIcon, href: '/admin/leads' },
  {
    title: 'AI Content',
    value: 'Chat with Ron',
    icon: Bot,
    href: '/ai-persona-chat',
  },
];

export default function AdminDashboardPage() {
  const { user, loading: authLoading } = useAuth();
  const auth = useAuth();
  const router = useRouter();
  const firestore = useFirestore();
  const leadsQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'leads'), orderBy('submittedAt', 'desc'));
  }, [firestore]);
  const { data: leads } = useCollection<Lead>(leadsQuery);

  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/admin/login');
    }
  }, [user, authLoading, router]);

  const handleSignOut = () => {
    signOut(auth);
    router.push('/admin/login');
  }

  const chartData = useMemo(() => {
    if (!leads) return [];
    const priorities = { high: 0, medium: 0, low: 0 };
    leads.forEach((lead) => {
      if (lead.priority) {
        priorities[lead.priority]++;
      }
    });
    return [
      { priority: 'High', count: priorities.high, fill: 'hsl(var(--destructive))' },
      { priority: 'Medium', count: priorities.medium, fill: 'hsl(var(--primary))' },
      { priority: 'Low', count: priorities.low, fill: 'hsl(var(--muted))' },
    ];
  }, [leads]);

  if (authLoading || !user) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <div className="p-4 md:p-8">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-headline">Admin Dashboard</h1>
          <p className="text-muted-foreground">Welcome to the Emphz CMS.</p>
        </div>
        <div className='flex items-center gap-4'>
            <div className='text-right'>
                <p className='font-semibold'>{user.email}</p>
                <p className='text-xs text-muted-foreground'>Administrator</p>
            </div>
            <Button variant="outline" size="icon" onClick={handleSignOut}>
                <LogOut className="h-4 w-4"/>
            </Button>
             <Button variant="secondary" size="icon" asChild>
                <Link href="/admin/create-account">
                    <User className="h-4 w-4"/>
                </Link>
            </Button>
        </div>
      </header>

      <main className="mt-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card
              key={stat.title}
              className="transition-colors hover:bg-muted/50"
            >
              <Link href={stat.href}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {stat.title}
                  </CardTitle>
                  <stat.icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  {stat.title === 'AI Content' ? (
                    <p className="text-xs text-muted-foreground">
                      AI-assisted content generation
                    </p>
                  ) : (
                    <p className="text-xs text-muted-foreground">
                      items managed
                    </p>
                  )}
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Lead Priority Overview</CardTitle>
            <CardDescription>
              A visual breakdown of your contact form leads by priority.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {leads ? (
               <ChartContainer config={{}} className="h-64 w-full">
                <BarChart data={chartData} accessibilityLayer>
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="priority"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                  />
                   <YAxis 
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    allowDecimals={false}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent />}
                  />
                  <Bar dataKey="count" radius={4} />
                </BarChart>
              </ChartContainer>
            ) : (
                <p>Loading chart...</p>
            )}
          </CardContent>
        </Card>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Getting Started</CardTitle>
            <CardDescription>
              Use the sidebar to manage your website content.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
              <li>
                <span className="font-semibold text-foreground">
                  Products:
                </span>{' '}
                Add, edit, or remove items from your product catalog.
              </li>
              <li>
                <span className="font-semibold text-foreground">
                  Projects:
                </span>{' '}
                Showcase your work by managing project case studies.
              </li>
              <li>
                <span className="font-semibold text-foreground">Leads:</span>{' '}
                View inquiries submitted through the contact form.
              </li>
              <li>
                <span className="font-semibold text-foreground">
                  AI Content:
                </span>{' '}
                Chat with Ron to generate content.
              </li>
            </ul>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
