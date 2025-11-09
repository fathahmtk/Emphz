import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookText, ShoppingBag, BarChart } from "lucide-react";
import Link from "next/link";

const stats = [
    { title: "Products", value: 4, icon: ShoppingBag, href: "/admin/products" },
    { title: "Projects", value: 2, icon: BookText, href: "/admin/projects" },
    { title: "Leads", value: 2, icon: BarChart, href: "/admin/leads" },
]

export default function AdminDashboardPage() {
  return (
    <div className="p-4 md:p-8">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-headline">Admin Dashboard</h1>
          <p className="text-muted-foreground">Welcome to the Emphz CMS.</p>
        </div>
      </header>

      <main className="mt-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat) => (
                <Card key={stat.title} className="hover:bg-muted/50 transition-colors">
                    <Link href={stat.href}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                            <stat.icon className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stat.value}</div>
                            <p className="text-xs text-muted-foreground">items managed</p>
                        </CardContent>
                    </Link>
                </Card>
            ))}
        </div>

        <Card className="mt-8">
            <CardHeader>
                <CardTitle>Getting Started</CardTitle>
                <CardDescription>Use the sidebar to manage your website content.</CardDescription>
            </CardHeader>
            <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li><span className="font-semibold text-foreground">Products:</span> Add, edit, or remove items from your product catalog.</li>
                    <li><span className="font-semibold text-foreground">Projects:</span> Showcase your work by managing project case studies.</li>
                    <li><span className="font-semibold text-foreground">Leads:</span> View inquiries submitted through the contact form.</li>
                </ul>
            </CardContent>
        </Card>
      </main>
    </div>
  );
}
