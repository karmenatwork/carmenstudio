"use client";
import React, { useState } from "react";
import { Card } from "@/components/custom-ui/Card";
import { SectionTitle } from "@/components/custom-ui/SectionTitle";
import { Badge } from "@/components/custom-ui/Badge";
import aboutData from "@/data/about.json";
import { WorkExperience as Job } from "@/lib/getAbout";

interface WorkExperienceProps {
    limit?: number;
    showTitle?: boolean;
    bulletsLimit?: number;
    showSkills?: boolean;
}

export default function WorkExperience({ limit, showTitle = true, bulletsLimit, showSkills = true }: WorkExperienceProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const allJobs = aboutData.workExperience as Job[];
    
    const activeLimit = limit && !isExpanded ? limit : undefined;
    const activeBulletsLimit = bulletsLimit && !isExpanded ? bulletsLimit : undefined;
    const activeShowSkills = isExpanded ? true : showSkills;

    const jobs = activeLimit ? allJobs.slice(0, activeLimit) : allJobs;

    return (
        <div className="flex flex-col gap-20">
            {/* Experience Section */}
            <section id="experience" className="px-6 max-w-5xl mx-auto w-full">
                {showTitle && (
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-6">
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
                )}

                {/* Left-aligned single column timeline */}
                <div className="relative border-l border-border/80 ml-3 md:ml-6 pl-8 md:pl-10 space-y-12 py-2">
                    {jobs.map((job, index) => {
                        const endDate = typeof job.end === 'object' ? job.end.label : job.end;
                        const isCurrent = endDate === 'Present';

                        return (
                            <div key={index} className="relative group">
                                {/* Dot centered exactly on the timeline border */}
                                <div className="absolute top-1.5 left-0 -translate-x-1/2 w-6 h-6 rounded-full border border-border bg-background flex items-center justify-center z-10 shadow-sm">
                                    <div className={`w-2 h-2 rounded-full ${isCurrent ? 'bg-primary animate-pulse' : 'bg-muted-foreground/60'}`} />
                                </div>

                                {/* Content Card */}
                                <Card className="p-4">
                                    <div className="flex flex-col gap-4">
                                        {/* Header details */}
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-border/40 pb-4">
                                            <div>
                                                <h3 className="text-xl font-bold tracking-tight text-foreground">{job.title}</h3>
                                                <p className="text-sm font-medium text-primary flex flex-wrap items-center gap-1.5 mt-0.5">
                                                    <span>{job.company}</span>
                                                    {job.location && (
                                                        <>
                                                            <span className="text-muted-foreground/40">•</span>
                                                            <span className="text-muted-foreground font-normal">{job.location}</span>
                                                        </>
                                                    )}
                                                </p>
                                            </div>
                                            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground bg-muted px-2.5 py-1 rounded-md md:self-center self-start whitespace-nowrap">
                                                {job.start} - {endDate}
                                            </div>
                                        </div>

                                        {/* Job Description Bullet Points */}
                                        {job.description && (
                                            <div className="text-sm text-muted-foreground leading-relaxed">
                                                {Array.isArray(job.description) ? (
                                                    <ul className="space-y-3">
                                                        {(activeBulletsLimit ? job.description.slice(0, activeBulletsLimit) : job.description).map((point: string, i: number) => (
                                                            <li key={i} className="flex items-start gap-2.5">
                                                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                                                                <span>{point}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                ) : (
                                                    <p>{job.description}</p>
                                                )}
                                            </div>
                                        )}

                                        {/* Skills Badges */}
                                        {activeShowSkills && job.skills && job.skills.length > 0 && (
                                            <div className="flex gap-1.5 flex-wrap mt-2">
                                                {job.skills.map((skill: string, skillIndex: number) => (
                                                    <Badge key={skillIndex} variant="outline" className="text-[10px] px-2 py-0.5 bg-muted/30 hover:bg-muted/70 transition-colors">
                                                        {skill}
                                                    </Badge>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </Card>
                            </div>
                        );
                    })}
                </div>

                {/* Show Expand/Collapse button when limit is applied */}
                {limit && allJobs.length > limit && (
                    <div className="flex justify-center mt-12">
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="inline-flex items-center justify-center rounded-full border border-border bg-transparent hover:bg-muted text-foreground h-11 px-6 text-base font-medium transition-colors shadow-sm cursor-pointer"
                        >
                            {isExpanded ? (
                                <>
                                    Show Less
                                    <svg className="ml-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="18 15 12 9 6 15" />
                                    </svg>
                                </>
                            ) : (
                                <>
                                    Show Full Career History
                                    <svg className="ml-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="6 9 12 15 18 9" />
                                    </svg>
                                </>
                            )}
                        </button>
                    </div>
                )}
            </section>
        </div>
    );
}