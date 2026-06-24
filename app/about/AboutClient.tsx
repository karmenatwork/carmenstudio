"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import aboutData from "@/data/about.json";
import WorkExperience from "@/components/work-experience";
import { Card } from "@/components/custom-ui/Card";
import { Badge } from "@/components/custom-ui/Badge";
import { SectionTitle } from "@/components/custom-ui/SectionTitle";

export default function AboutClient({ initialTab = "story" }: { initialTab?: "story" | "experience" }) {
    const [activeTab, setActiveTab] = useState<"story" | "experience">(initialTab);
    const { fullName, headline, intro, mojo, bio, mailto } = aboutData;
    const topRef = useRef<HTMLDivElement>(null);

    const handleSwitchToExperience = () => {
        setActiveTab("experience");
        setTimeout(() => {
            topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 50);
    };

    return (
        <div ref={topRef} className="pb-20">
            {/* Tab Switched Header */}
            <div className="max-w-5xl mx-auto px-6 pt-10 flex justify-center mb-12">
                <div className="inline-flex rounded-full bg-muted/60 p-1 border border-border/50">
                    <button
                        onClick={() => setActiveTab("story")}
                        className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${activeTab === "story"
                            ? "bg-background text-foreground shadow-sm"
                            : "text-muted-foreground hover:text-foreground"
                            }`}
                    >
                        My Story
                    </button>
                    <button
                        onClick={() => setActiveTab("experience")}
                        className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${activeTab === "experience"
                            ? "bg-background text-foreground shadow-sm"
                            : "text-muted-foreground hover:text-foreground"
                            }`}
                    >
                        My Experience
                    </button>
                </div>
            </div>

            {/* Tab Content */}
            {activeTab === "story" ? (
                <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 gap-y-12 lg:grid-cols-3 lg:gap-x-12">
                    {/* Left Column (Content) */}
                    <div className="lg:col-span-2 lg:order-first">
                        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
                            {fullName}
                        </h1>
                        <div className="mt-1 mb-3 text-sm font-medium text-muted-foreground text-primary">{headline}</div>
                        <div className="mt-6 space-y-7 text-base text-muted-foreground leading-relaxed">
                            <p>{intro}</p>
                            {bio.map((paragraph, i) => (
                                <p key={i}>{paragraph}</p>
                            ))}
                            <p className="font-caveat text-xl text-primary font-medium mt-8 leading-snug">
                                &ldquo;{mojo}&rdquo;
                            </p>
                        </div>
                        <div className="mt-10 pt-6 border-t border-border/40">
                            <button
                                onClick={handleSwitchToExperience}
                                className="inline-flex items-center gap-2 rounded-full border border-border bg-transparent hover:bg-primary/5 hover:border-primary/30 text-primary hover:text-primary h-12 px-6 text-sm font-semibold transition-all shadow-sm cursor-pointer"
                            >
                                Explore My Experience & Resume
                                <svg
                                    className="h-4 w-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Right Column (Photo & Contacts) */}
                    <div className="lg:pl-6 flex flex-col gap-8">
                        <div className="relative aspect-square rotate-3 rounded-2xl bg-muted overflow-hidden shadow-lg border border-border/40">
                            <Image
                                src="/avatar.jpg"
                                alt="Carmen Díaz"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        <div className="space-y-4">
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
                                Follow on LinkedIn
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
            ) : (
                <div className="space-y-16">
                    {/* Header Action inside Tab */}
                    <div className="max-w-5xl mx-auto px-6 w-full flex justify-between items-center border-b border-border/40 pb-6">
                        <SectionTitle
                            title="Work Experience"
                            subtitle="My professional journey so far."
                            className="mb-0"
                        />
                        <a
                            href="/Carmen-Diaz-resume.pdf"
                            download
                            className="inline-flex items-center justify-center rounded-full border border-border bg-transparent hover:bg-muted text-foreground h-11 px-6 text-base font-medium transition-colors shadow-sm shrink-0"
                        >
                            <svg className="mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                <polyline points="7 10 12 15 17 10" />
                                <line x1="12" x2="12" y1="15" y2="3" />
                            </svg>
                            Download Resume
                        </a>
                    </div>

                    {/* Full Timeline */}
                    <WorkExperience showTitle={false} />

                    {/* Continuing Education Section */}
                    <section className="px-6 max-w-5xl mx-auto w-full">
                        <div className="border-t border-border/60 pt-12">
                            <h2 className="text-2xl font-bold tracking-tight mb-8">Continuing Education</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Card className="p-6 border-l-4 border-l-primary shadow-sm">
                                    <div className="flex justify-between items-start gap-2">
                                        <h3 className="text-lg font-bold leading-tight">AI & Machine Learning Bootcamp</h3>
                                        <Badge className="whitespace-nowrap">2024</Badge>
                                    </div>
                                    <p className="text-primary font-medium text-sm mt-1">Caltech (California Institute of Technology)</p>
                                    <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                                        Immersive program focusing on Python, Data Science (Pandas, NumPy), Foundational ML (TensorFlow, PyTorch), Deep Learning, and Generative AI.
                                    </p>
                                </Card>
                                <Card className="p-6">
                                    <div className="flex justify-between items-start gap-2">
                                        <h3 className="text-lg font-bold leading-tight">Data Science Fundamentals</h3>
                                        <Badge variant="outline" className="whitespace-nowrap">2023</Badge>
                                    </div>
                                    <p className="text-primary font-medium text-sm mt-1">National University of Asunción</p>
                                    <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                                        Completed comprehensive training in data science concepts utilizing Python, Pandas, NumPy, and Matplotlib.
                                    </p>
                                </Card>
                                <Card className="p-6 md:col-span-2">
                                    <h3 className="text-base font-bold mb-4">Additional Technical Training</h3>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3.5 text-sm text-muted-foreground">
                                        <li className="flex items-start gap-2.5">
                                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                                            <span>Agentic AI Nano Program — Udacity (In Progress)</span>
                                        </li>
                                        <li className="flex items-start gap-2.5">
                                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                                            <span>Generative AI for Software Developers — IBM (In Progress)</span>
                                        </li>
                                        <li className="flex items-start gap-2.5">
                                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                                            <span>Google Prompting Essentials — Google (Apr 2025)</span>
                                        </li>
                                        <li className="flex items-start gap-2.5">
                                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                                            <span>AI for Good Specialization — DeepLearning.AI (2024)</span>
                                        </li>
                                        <li className="flex items-start gap-2.5 md:col-span-2">
                                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                                            <span>Generative AI for Everyone — DeepLearning.AI (2023)</span>
                                        </li>
                                    </ul>
                                </Card>
                            </div>
                        </div>
                    </section>

                    {/* Education Section */}
                    <section className="px-6 max-w-5xl mx-auto w-full">
                        <div className="border-t border-border/60 pt-12">
                            <h2 className="text-2xl font-bold tracking-tight mb-8">Education</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Card className="p-6">
                                    <h3 className="text-lg font-bold">B.S. Computer System Analysis</h3>
                                    <p className="text-primary font-medium text-sm mt-0.5">Catholic University of Asunción</p>
                                    <p className="text-xs text-muted-foreground mt-2">Asunción, Paraguay</p>
                                </Card>
                                <Card className="p-6">
                                    <h3 className="text-lg font-bold">BBA Business Administration and Management</h3>
                                    <p className="text-primary font-medium text-sm mt-0.5">National University of Asunción</p>
                                    <p className="text-xs text-muted-foreground mt-2">Asunción, Paraguay</p>
                                </Card>
                                <Card className="p-6 md:col-span-2">
                                    <h3 className="text-lg font-bold">Specialization in University Didactics</h3>
                                    <p className="text-primary font-medium text-sm mt-0.5">National University of Asunción</p>
                                    <p className="text-xs text-muted-foreground mt-2">Asunción, Paraguay</p>
                                </Card>
                            </div>
                        </div>
                    </section>

                    {/* Volunteer Section */}
                    <section className="px-6 max-w-5xl mx-auto w-full">
                        <div className="border-t border-border/60 pt-12">
                            <h2 className="text-2xl font-bold tracking-tight mb-8">Volunteer & Community</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <Card className="p-6 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-lg font-bold leading-tight">Event Co-organizer</h3>
                                        <p className="text-primary font-medium text-sm mt-0.5">IA Week LATAM</p>
                                    </div>
                                    <p className="text-xs text-muted-foreground mt-4">Nov 2025</p>
                                </Card>
                                <Card className="p-6 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-lg font-bold leading-tight">Technical Community Ambassador</h3>
                                        <p className="text-primary font-medium text-sm mt-0.5">Women Techmakers Ambassador</p>
                                        <p className="text-xs text-muted-foreground mt-2">
                                            Technovation | Kuñatech PY (Paraguayan Women in Tech) | AI & Data Science Paraguay
                                        </p>
                                    </div>
                                    <p className="text-xs text-muted-foreground mt-4">Ongoing Advocacy</p>
                                </Card>
                                <Card className="p-6 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-lg font-bold leading-tight">Early Contributor</h3>
                                        <p className="text-primary font-medium text-sm mt-0.5">Railsbridge</p>
                                        <p className="text-xs text-muted-foreground mt-2 font-normal">
                                            Bridge Foundry (Supporting tech education)
                                        </p>
                                    </div>
                                    <p className="text-xs text-muted-foreground mt-4">Tech Mentorship</p>
                                </Card>
                            </div>
                        </div>
                    </section>
                </div>
            )}
        </div>
    );
}
