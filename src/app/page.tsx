
'use client';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Factory, HardHat, ShieldCheck, Award, Fingerprint, Building, Users, MapPin, Newspaper, Video, GalleryVertical } from 'lucide-react';
import { collection, orderBy, query, limit } from 'firebase/firestore';
import { useMemo } from 'react';

import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/scroll-reveal';
import { useCollection, useFirestore } from '@/firebase';
import type { Product, ProjectCaseStudy } from '@/lib/types';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { HeroCarousel } from '@/components/hero-carousel';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Logo } from '@/components/icons';
import { GlassCard } from '@/components/glass-card';

const corporatePillars = [
  {
    icon: HardHat,
    title: 'GRP Technology',
    description: 'Leveraging advanced composite materials for superior performance and longevity.'
  },
  {
    icon: Factory,
    title: 'Manufacturing Strength',
    description: 'State-of-the-art facilities ensuring precision, quality, and scalability.'
  },
  {
    icon: ShieldCheck,
    title: 'Custom Engineering',
    description: 'Bespoke solutions designed to meet unique project requirements and specifications.'
  }
];

const trustBadges = [
  { icon: Award, name: 'ISO 9001:2015', description: 'Quality Management' },
  { icon: Award, name: 'ISO 14001:2015', description: 'Environmental' },
  { icon: Fingerprint, name: 'IP65 Certified', description: 'Ingress Protection' },
  { icon: Building, name: 'Govt. Approved', description: 'Public Works Dept.' },
];

const values = [
    { title: "Integrity", description: "Zero-compromise approach to quality, compliance, and customer commitments." },
    { title: "Innovation", description: "Advancing GRP engineering through R&D and modern production methods." },
    { title: "Reliability", description: "Delivering products that perform consistently across extreme conditions." },
];

const newsItems = [
    { icon: Newspaper, title: 'EMPHZ Launches New Fire-Retardant Enclosure Line', date: 'Oct 2023', href: '/media/news' },
    { icon: Video, title: 'Virtual Factory Tour: See Our GRP Process in Action', date: 'Sep 2023', href: '/media/video' },
    { icon: GalleryVertical, title: 'Project Spotlight: Solar Farm Installation Gallery', date: 'Aug 2023', href: '/media/gallery' },
]

const heroImages = PlaceHolderImages.filter(img => img.id.startsWith('hero-'));
const aboutBgImage = PlaceHolderImages.find(p => p.id === 'hero-industrial-plant');
const missionBgImage = PlaceHolderImages.find(p => p.id === 'hero-extra-1');
const projectsBgImage = PlaceHolderImages.find(p => p.id === 'hero-new-1');
const qualityBgImage = PlaceHolderImages.find(p => p.id === 'hero-extra-7');
const newsBgImage = PlaceHolderImages.find(p => p.id === 'hero-extra-8');


function CaseStudyCard({ project }: { project: ProjectCaseStudy }) {
    return (
        <GlassCard className="overflow-hidden text-primary-foreground">
            <div className="grid md:grid-cols-2">
                <div className="relative aspect-video">
                    <Image src={project.beforeImageUrl} alt={`Before image for ${project.title}`} fill className="object-cover" />
                     <Badge className="absolute top-2 left-2" variant="destructive">Before</Badge>
                </div>
                <div className="relative aspect-video">
                    <Image src={project.afterImageUrl} alt={`After image for ${project.title}`} fill className="object-cover" />
                    <Badge className="absolute top-2 left-2" variant="default">After</Badge>
                </div>
            </div>
            <CardHeader>
                <CardTitle className="font-headline text-xl text-primary-foreground">{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-primary-foreground/80">{project.details}</p>
                <Separator className="my-4 bg-white/20" />
                <div className="flex items-center justify-between text-xs text-primary-foreground/80">
                    <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        <span>{project.clientType}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                         <span>{project.location}</span>
                    </div>
                </div>
            </CardContent>
        </GlassCard>
    );
}


export default function Home() {
  const firestore = useFirestore();

  const productsQuery = useMemo(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'products'), orderBy('name'), limit(3));
  }, [firestore]);
  const { data: products } = useCollection<Product>(productsQuery);
  
  const projectsQuery = useMemo(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'project_case_studies'), orderBy('title'), limit(2));
  }, [firestore]);
  const { data: projects } = useCollection<ProjectCaseStudy>(projectsQuery);

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="relative h-dvh w-full flex items-center justify-center text-left overflow-hidden">
          <HeroCarousel images={heroImages} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />
          <div className="container relative flex items-center justify-between px-4 md:px-6 z-20">
            <div className="hidden md:block">
                 <Link href="/">
                    <Logo className="h-20 w-auto text-white" />
                </Link>
            </div>
            <div className="max-w-2xl text-right ml-auto self-end pb-12 md:pb-20">
              <ScrollReveal>
                <h1 className="!leading-tight text-2xl font-bold font-headline tracking-tighter text-white shadow-lg sm:text-3xl md:text-4xl">
                  Premier GRP Engineering & Modular Infrastructure
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="mt-4 text-base text-white/90 md:text-lg">
                  Manufacturing smart urban solutions and high-performance industrial components.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={400}>
                <div className="mt-6 flex flex-col justify-end items-end gap-4 sm:flex-row">
                  <Button size="lg" asChild className="group">
                    <Link href="/contact">
                      Request Specification Pack
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-background" asChild>
                    <Link href="/products">Explore Product Catalogue</Link>
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section id="about" className="relative py-12 md:py-24 lg:py-32">
            {aboutBgImage && (
                <div className="absolute inset-0 -z-10 h-full w-full">
                    <Image
                        src={aboutBgImage.imageUrl}
                        alt={aboutBgImage.description}
                        data-ai-hint={aboutBgImage.imageHint}
                        quality={100}
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-background/80" />
                </div>
            )}
            <div className="container px-4 md:px-6 text-primary-foreground">
                <ScrollReveal>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">About EMPHZ</h2>
                        <p className="mt-4 max-w-3xl mx-auto text-primary-foreground/80 md:text-lg">
                            EMPHZ is a next-generation GRP/FRP engineering manufacturer dedicated to delivering mission-critical infrastructure solutions for utilities, industry, and smart-city development.
                        </p>
                    </div>
                </ScrollReveal>
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {corporatePillars.map((pillar, i) => (
                    <ScrollReveal key={pillar.title} delay={i * 150}>
                    <GlassCard className="text-center h-full text-primary-foreground">
                        <CardHeader>
                        <div className="mx-auto mb-4 inline-flex items-center justify-center rounded-full bg-primary/10 p-3">
                            <pillar.icon className="h-8 w-8 text-primary-foreground" />
                        </div>
                        <CardTitle className="text-xl font-bold font-headline">{pillar.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                        <p className="text-primary-foreground/80">{pillar.description}</p>
                        </CardContent>
                    </GlassCard>
                    </ScrollReveal>
                ))}
                </div>
            </div>
        </section>

        <section id="mission-vision" className="relative py-12 md:py-24 lg:py-32">
             {missionBgImage && (
                <div className="absolute inset-0 -z-10 h-full w-full">
                    <Image
                        src={missionBgImage.imageUrl}
                        alt={missionBgImage.description}
                        data-ai-hint={missionBgImage.imageHint}
                        quality={100}
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-background/80" />
                </div>
            )}
            <div className="container grid md:grid-cols-2 gap-12 items-center text-primary-foreground px-4 md:px-6">
                <ScrollReveal>
                    <GlassCard className="p-8">
                        <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl text-primary-foreground">Our Mission & Values</h2>
                        <p className="mt-4 text-primary-foreground/80 md:text-lg">
                            <strong className="text-primary-foreground">Mission:</strong> To engineer world-class GRP solutions that enable resilient, safe, and efficient infrastructure for industries and communities.
                        </p>
                        <div className="mt-8 grid gap-6">
                            {values.map((value) => (
                                <div key={value.title} className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-primary-foreground/80 mt-1 shrink-0"/>
                                    <div>
                                        <h3 className="font-semibold text-lg text-primary-foreground">{value.title}</h3>
                                        <p className="text-primary-foreground/80">{value.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </GlassCard>
                </ScrollReveal>
                 <ScrollReveal delay={200} className='hidden md:block'>
                   {/* This space is intentionally left blank for the background image to show */}
                </ScrollReveal>
            </div>
        </section>
        
        <section id="projects" className="relative py-12 md:py-24 lg:py-32">
            {projectsBgImage && (
                <div className="absolute inset-0 -z-10 h-full w-full">
                    <Image
                        src={projectsBgImage.imageUrl}
                        alt={projectsBgImage.description}
                        data-ai-hint={projectsBgImage.imageHint}
                        quality={100}
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-background/80" />
                </div>
            )}
            <div className="container px-4 md:px-6">
                <ScrollReveal>
                    <div className="text-center mb-12 text-primary-foreground">
                         <Badge className="mb-2" variant="outline">Featured Projects</Badge>
                        <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">Proven Field Performance</h2>
                        <p className="mt-4 max-w-3xl mx-auto text-primary-foreground/80 md:text-lg">
                           From corrosive coastal environments to high-traffic industrial sites, our GRP solutions deliver unmatched durability and performance.
                        </p>
                    </div>
                </ScrollReveal>
                 <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {projects?.map((project, i) => (
                        <ScrollReveal key={project.id} delay={i * 200}>
                            <CaseStudyCard project={project} />
                        </ScrollReveal>
                    ))}
                  </div>
                   <ScrollReveal>
                      <div className="mt-12 text-center">
                        <Button size="lg" asChild className="group">
                          <Link href="/projects">
                              View All Projects
                              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </Button>
                      </div>
                    </ScrollReveal>
            </div>
        </section>

        <section id="quality-trust" className="relative w-full py-12 md:py-24 lg:py-32">
          {qualityBgImage && (
                <div className="absolute inset-0 -z-10 h-full w-full">
                    <Image
                        src={qualityBgImage.imageUrl}
                        alt={qualityBgImage.description}
                        data-ai-hint={qualityBgImage.imageHint}
                        quality={100}
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-background/80" />
                </div>
            )}
          <div className="container px-4 md:px-6 text-primary-foreground">
            <ScrollReveal>
              <GlassCard className="p-8 text-center text-primary-foreground">
                <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl">Quality, Compliance & Trust</h2>
                <p className="mx-auto mt-4 max-w-3xl text-primary-foreground/80 md:text-xl/relaxed">
                  Our commitment to quality is backed by industry-leading certifications and approvals, ensuring every product meets rigorous standards for safety and performance.
                </p>
                 <div className="mx-auto mt-12 grid grid-cols-2 gap-y-10 gap-x-8 md:grid-cols-4">
                  {trustBadges.map((badge, i) => (
                    <div key={i} className="flex flex-col items-center text-center">
                      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                        <badge.icon className="h-8 w-8 text-primary-foreground" />
                      </div>
                      <h3 className="text-lg font-semibold">{badge.name}</h3>
                      <p className="mt-1 text-sm text-primary-foreground/80">{badge.description}</p>
                    </div>
                  ))}
                </div>
                 <div className="mt-12 text-center">
                    <Button size="lg" variant="outline" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-background" asChild>
                        <Link href="/quality/certification">View Quality Framework</Link>
                    </Button>
                </div>
              </GlassCard>
            </ScrollReveal>
          </div>
        </section>

        <section id="news" className="relative py-12 md:py-24 lg:py-32">
             {newsBgImage && (
                <div className="absolute inset-0 -z-10 h-full w-full">
                    <Image
                        src={newsBgImage.imageUrl}
                        alt={newsBgImage.description}
                        data-ai-hint={newsBgImage.imageHint}
                        quality={100}
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-background/80" />
                </div>
            )}
            <div className="container px-4 md:px-6">
                 <ScrollReveal>
                    <div className="text-center mb-12 text-primary-foreground">
                        <Badge className="mb-2" variant="outline">News & Media</Badge>
                        <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">Latest Updates</h2>
                         <p className="mt-4 max-w-3xl mx-auto text-primary-foreground/80 md:text-lg">
                          Stay informed on our latest product innovations, project milestones, and company news.
                        </p>
                    </div>
                </ScrollReveal>
                 <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {newsItems.map((item, i) => (
                        <ScrollReveal key={item.title} delay={i * 150}>
                            <Link href={item.href}>
                                <GlassCard className="h-full group text-primary-foreground">
                                    <CardHeader className="flex-row items-center gap-4">
                                        <item.icon className="h-8 w-8 text-primary-foreground/80" />
                                        <CardTitle className="text-base font-semibold group-hover:text-primary-foreground transition-colors text-primary-foreground">{item.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-xs text-primary-foreground/70">{item.date}</p>
                                    </CardContent>
                                </GlassCard>
                            </Link>
                        </ScrollReveal>
                    ))}
                 </div>
            </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
