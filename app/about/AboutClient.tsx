"use client";

import React from "react";
import Image from "next/image";
import aboutData from "@/data/about.json";
import { Card } from "@/components/custom-ui/Card";
import { Badge } from "@/components/custom-ui/Badge";

export default function AboutClient() {
    const { fullName, headline, aboutCraftSummary, shortBioI, mojo, bio, mailto } = aboutData;

    return (
        <div className="pb-24 pt-6 max-w-5xl mx-auto px-6 space-y-12">
            {/* Header Hero Section */}
            <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:gap-x-8 items-start">
                <div className="lg:col-span-2 lg:order-first space-y-5">
                    <div>
                        <span className="text-xs font-mono tracking-widest uppercase text-primary font-semibold">
                            About & Craft
                        </span>
                        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground mt-1">
                            {fullName}
                        </h1>
                        <p className="mt-2 text-base font-medium text-primary">
                            {headline}
                        </p>
                    </div>

                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                        {aboutCraftSummary}
                    </p>
                </div>

                {/* Right Column (Photo & Quick Contact) */}
                <div className="lg:pl-6 flex flex-col gap-5">
                    <div
                        className="relative aspect-square rotate-2 rounded-2xl bg-muted overflow-hidden shadow-lg border border-border/40 max-w-xs mx-auto lg:max-w-none w-full select-none"
                        onContextMenu={(e) => e.preventDefault()}
                    >
                        <Image
                            src="/avatar.jpg"
                            alt="Personal photo of Carmen Díaz"
                            fill
                            sizes="(min-width: 1024px) 320px, (min-width: 640px) 320px, 100vw"
                            className="object-cover select-none pointer-events-none"
                            priority
                            draggable={false}
                        />
                        <div className="absolute inset-0 z-10" />
                    </div>

                    <div className="space-y-2.5 pt-1">
                        <a
                            href="https://www.linkedin.com/in/carmen-diaz/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
                        >
                            <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                <rect x="2" y="9" width="4" height="12" />
                                <circle cx="4" cy="4" r="2" />
                            </svg>
                            LinkedIn Profile
                        </a>

                        <a
                            href={`mailto:${mailto}`}
                            className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
                        >
                            <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <polyline points="22,6 12,13 2,6" />
                            </svg>
                            {mailto}
                        </a>
                    </div>
                </div>
            </div>

            {/* Chapter 1: Curiosity, Dual Roots & Pedagogy */}
            <section className="border-t border-border/60 pt-12 space-y-6">
                <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-primary font-bold uppercase tracking-widest px-2.5 py-1 rounded bg-primary/10">
                        01
                    </span>
                    <h2 className="text-2xl font-bold tracking-tight">Curiosity, Dual Roots & Pedagogy</h2>
                </div>

                <div className="space-y-5 text-base text-muted-foreground leading-relaxed max-w-3xl">
                    <p>{bio[0]}</p>
                    <p>{bio[1]}</p>
                    <p>{bio[2]}</p>
                    <p>{bio[3]}</p>
                </div>
            </section>

            {/* Chapter 2: Engineering at Scale & High-Impact Systems */}
            <section className="border-t border-border/60 pt-12 space-y-6">
                <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-primary font-bold uppercase tracking-widest px-2.5 py-1 rounded bg-primary/10">
                        02
                    </span>
                    <h2 className="text-2xl font-bold tracking-tight">Engineering at Scale & High-Impact Systems</h2>
                </div>

                <p className="text-base text-muted-foreground leading-relaxed max-w-3xl">
                    My engineering career in the San Francisco Bay Area spans fast-paced startups in Fintech, Healthcare, and HR.
                    Rather than viewing software as isolated code, I design backend APIs and product features focused on high scale, user accessibility, and measurable operational impact.
                </p>

                {/* Proof of Craft Callout Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                    <Card className="p-6 space-y-3 hover:border-primary/40 transition-colors flex flex-col justify-between">
                        <div className="space-y-3">
                            <div className="flex justify-between items-start">
                                <Badge variant="outline" className="text-xs">Health Tech</Badge>
                            </div>
                            <h3 className="text-lg font-bold">Localization & Dynamic Frontend</h3>
                            <p className="text-xs font-semibold text-primary/90 uppercase tracking-wider">Mobile Health Consumer • Solutions Engineer</p>
                            <p className="text-sm text-muted-foreground leading-relaxed pt-1">
                                Integrated Lokalise API with Django to automate platform localization for US and Canadian markets. Built dynamic metadata frontend components to eliminate setup errors.
                            </p>
                        </div>
                    </Card>
                    <Card className="p-6 space-y-3 hover:border-primary/40 transition-colors flex flex-col justify-between">
                        <div className="space-y-3">
                            <div className="flex justify-between items-start">
                                <Badge variant="outline" className="text-xs">Fintech / HR</Badge>
                            </div>
                            <h3 className="text-lg font-bold">Real-Time POS Integration & Scale</h3>
                            <p className="text-xs font-semibold text-primary/90 uppercase tracking-wider">Homebase • Delivery Lead & Software Engineer</p>
                            <p className="text-sm text-muted-foreground leading-relaxed pt-1">
                                Designed 10+ Rails REST APIs, including a real-time Clover POS integration serving over 175,000 business clients, alongside Sidekiq background engagement tools (+33% active participation).
                            </p>
                        </div>
                    </Card>

                    <Card className="p-6 space-y-3 hover:border-primary/40 transition-colors flex flex-col justify-between">
                        <div className="space-y-3">
                            <div className="flex justify-between items-start">
                                <Badge variant="outline" className="text-xs">Healthcare</Badge>
                            </div>
                            <h3 className="text-lg font-bold">Data Automation & Inclusion</h3>
                            <p className="text-xs font-semibold text-primary/90 uppercase tracking-wider">Omada Health • Software Engineer</p>
                            <p className="text-sm text-muted-foreground leading-relaxed pt-1">
                                Engineered a bulk provider data import service (Eligible API, Sidekiq) saving health providers 144 hours of manual processing. Launched Spanish onboarding flow (+14% reach).
                            </p>
                        </div>
                    </Card>
                </div>
            </section>

            {/* Chapter 3: The AI Shift & Continuous Craft */}
            <section className="border-t border-border/60 pt-12 space-y-6">
                <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-primary font-bold uppercase tracking-widest px-2.5 py-1 rounded bg-primary/10">
                        03
                    </span>
                    <h2 className="text-2xl font-bold tracking-tight">The AI Shift & Continuous Craft</h2>
                </div>

                <div className="space-y-4 text-base text-muted-foreground leading-relaxed max-w-3xl">
                    <p>{bio[4]}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="p-6 border-l-4 border-l-primary shadow-sm space-y-3">
                        <div className="flex justify-between items-start">
                            <h3 className="text-lg font-bold">Applied AI Workflows & Consulting</h3>
                            <Badge className="bg-primary text-primary-foreground font-semibold">2020 – Present</Badge>
                        </div>
                        <p className="text-xs font-semibold text-primary">Independent Engineering Consultant</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Architecting full-stack Next.js/Rails SaaS features enhanced with modern AI workflows (Gemini, Copilot, Agentic frameworks). Designed a K-8 AI framework boosting engagement by 30%.
                        </p>
                    </Card>

                    <Card className="p-6 space-y-3">
                        <div className="flex justify-between items-start">
                            <h3 className="text-lg font-bold">AI & Machine Learning Bootcamp</h3>
                            <Badge variant="outline">2024</Badge>
                        </div>
                        <p className="text-xs font-semibold text-primary">Caltech (California Institute of Technology)</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Immersive program covering Python, Data Science (Pandas, NumPy), Deep Learning (TensorFlow, PyTorch), Prompt Engineering, and Generative AI application architecture.
                        </p>
                    </Card>

                    <Card className="p-6 md:col-span-2 space-y-4">
                        <h3 className="text-base font-bold">Ongoing Specializations & Technical Growth</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm text-muted-foreground">
                            <div className="flex items-start gap-2.5">
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                <span>Generative AI for Software Developers — IBM (In Progress)</span>
                            </div>
                            <div className="flex items-start gap-2.5">
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                <span>Google Prompting Essentials — Google (2025)</span>
                            </div>
                            <div className="flex items-start gap-2.5">
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                <span>AI for Good Specialization — DeepLearning.AI (2024)</span>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* Chapter 4: Community Leadership & Advocacy */}
            <section className="border-t border-border/60 pt-12 space-y-6">
                <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-primary font-bold uppercase tracking-widest px-2.5 py-1 rounded bg-primary/10">
                        04
                    </span>
                    <h2 className="text-2xl font-bold tracking-tight">Community Leadership & Advocacy</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="p-6 flex flex-col justify-between space-y-4">
                        <div className="space-y-2">
                            <h3 className="text-lg font-bold leading-tight">Women Techmakers Ambassador</h3>
                            <p className="text-xs font-semibold text-primary">Google Cloud • Kuñatech PY • Technovation</p>
                            <p className="text-xs text-muted-foreground leading-relaxed pt-1">
                                Co-led cloud training workshops for 50 women in tech in partnership with Google Cloud, Kuñatech, and SheWorks.
                            </p>
                        </div>
                        <span className="text-xs text-muted-foreground font-mono">Ongoing Advocacy</span>
                    </Card>

                    <Card className="p-6 flex flex-col justify-between space-y-4">
                        <div className="space-y-2">
                            <h3 className="text-lg font-bold leading-tight">IA Week LATAM Co-organizer</h3>
                            <p className="text-xs font-semibold text-primary">AI & Data Science Paraguay</p>
                            <p className="text-xs text-muted-foreground leading-relaxed pt-1">
                                Organizing developer initiatives and artificial intelligence awareness events across Latin America.
                            </p>
                        </div>
                        <span className="text-xs text-muted-foreground font-mono">LATAM Community</span>
                    </Card>

                    <Card className="p-6 flex flex-col justify-between space-y-4">
                        <div className="space-y-2">
                            <h3 className="text-lg font-bold leading-tight">Railsbridge Contributor</h3>
                            <p className="text-xs font-semibold text-primary">Bridge Foundry</p>
                            <p className="text-xs text-muted-foreground leading-relaxed pt-1">
                                Mentoring non-traditional beginners in web development, Ruby on Rails, and foundational programming.
                            </p>
                        </div>
                        <span className="text-xs text-muted-foreground font-mono">Tech Mentorship</span>
                    </Card>
                </div>
            </section>

            {/* Philosophy Highlight Quote */}
            <section className="border-t border-border/60 pt-12">
                <div className="p-8 rounded-2xl bg-primary/5 border border-primary/10 text-center space-y-2">
                    <p className="font-caveat text-2xl md:text-3xl text-primary font-semibold">
                        &ldquo;{mojo}&rdquo;
                    </p>
                    <p className="text-xs uppercase tracking-widest font-mono text-muted-foreground">Carmen Díaz — Engineering Philosophy</p>
                </div>
            </section>

            {/* Credentials Summary & PDF Résumé Gateway */}
            <section className="border-t border-border/60 pt-12 space-y-6">
                <div className="space-y-2">
                    <h2 className="text-2xl font-bold tracking-tight">Academic Foundations</h2>
                    <p className="text-sm text-muted-foreground">Formal degrees grounding my engineering and product perspective.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="p-6 space-y-1">
                        <h3 className="text-base font-bold">B.S. Computer Systems Analysis</h3>
                        <p className="text-xs font-semibold text-primary">Catholic University of Asunción</p>
                        <p className="text-xs text-muted-foreground pt-1">Asunción, Paraguay</p>
                    </Card>

                    <Card className="p-6 space-y-1">
                        <h3 className="text-base font-bold">BBA Business Administration</h3>
                        <p className="text-xs font-semibold text-primary">National University of Asunción</p>
                        <p className="text-xs text-muted-foreground pt-1">Asunción, Paraguay</p>
                    </Card>

                    <Card className="p-6 space-y-1">
                        <h3 className="text-base font-bold">University Didactics</h3>
                        <p className="text-xs font-semibold text-primary">National University of Asunción</p>
                        <p className="text-xs text-muted-foreground pt-1">Specialization in Pedagogy</p>
                    </Card>
                </div>

                {/* Prominent PDF Résumé Gateway Card */}
                <div className="mt-8 p-8 rounded-2xl border border-border bg-card shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="space-y-2 text-center md:text-left">
                        <h3 className="text-xl font-bold tracking-tight">Need a Complete Chronological History?</h3>
                        <p className="text-sm text-muted-foreground max-w-xl leading-relaxed">
                            My downloadable résumé contains the full, uninterrupted timeline of employers, exact dates, and technical environments formatted for formal recruitment pipelines.
                        </p>
                    </div>

                    <a
                        href="/Carmen-Diaz-resume.pdf"
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-8 text-sm font-semibold transition-all shadow-md shrink-0 gap-2.5 cursor-pointer"
                    >
                        <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download Full Résumé (PDF)
                    </a>
                </div>
            </section>
        </div>
    );
}
