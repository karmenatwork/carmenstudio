"use client";

import React, { useState, useEffect } from "react";

export default function EditorialConcepts() {
    const [selectedConcept, setSelectedConcept] = useState<1 | 2 | 3>(2); // Default to 1 (Journal) as requested
    const [showSwitcher, setShowSwitcher] = useState(false);

    // Read URL search params on mount to conditionally show switcher
    useEffect(() => {
        if (typeof window !== "undefined") {
            const params = new URLSearchParams(window.location.search);
            if (params.get("preview") === "true") {
                setShowSwitcher(true);
            }
        }
    }, []);

    // Concept 3 (formerly 4) sub-state
    const [activeTopic, setActiveTopic] = useState<number>(0);
    const topics = [
        {
            num: "01",
            title: "Exploring AI",
            content: "Integrating intelligent models into everyday software. I focus on building agentic workflows, prompt chaining, and automation frameworks that make advanced technology accessible and useful to real users."
        },
        {
            num: "02",
            title: "Craft",
            content: "Writing clean, intentional code using React, Next.js, and Ruby on Rails. I approach engineering with a focus on performance, robust API designs, and localization that expands product access globally."
        },
        {
            num: "03",
            title: "Mentorship",
            content: "Helping technology become more inclusive. As a Women Techmakers Ambassador, I run cloud workshops, speak at LATAM events, and mentor developers entering the software ecosystem."
        },
        {
            num: "04",
            title: "Never Stop Learning",
            content: "Approaching every challenge with a student mindset. My work is driven by curiosity, continuous learning, and a belief that building things is the best way to understand them."
        }
    ];

    return (
        <section className="w-full py-6 border-t border-b border-border/20">
            {/* Minimal Switcher UI */}
            {showSwitcher && (<div className="max-w-5xl mx-auto px-6 mb-12 flex flex-wrap gap-2 items-center justify-center">
                {[1, 2, 3].map((num) => (
                    <button
                        key={num}
                        onClick={() => setSelectedConcept(num as 1 | 2 | 3)}
                        className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${selectedConcept === num
                            ? "bg-primary text-primary-foreground shadow-sm"
                            : "bg-muted text-muted-foreground hover:text-foreground"
                            }`}
                    >
                        {num === 1 && "Option 1 (Journal)"}
                        {num === 2 && "Option 2 (Split)"}
                        {num === 3 && "Option 3 (Interactive)"}
                    </button>
                ))}
            </div>
            )}

            {/* Concept Layouts */}
            <div className="w-full">
                {/* Concept 1: The Journal Entry */}
                {selectedConcept === 1 && (
                    <div className="max-w-2xl mx-auto px-6 py-12 text-center animate-fade-in">
                        <span className="text-md uppercase font-mono tracking-widest text-primary mb-3 block">Lately...</span>
                        <div className="space-y-6 text-xl text-muted-foreground leading-relaxed text-left max-w-xl mx-auto">
                            <p>
                                AI has become one of the most exciting parts of my engineering journey.
                                I'm especially interested in how intelligent systems can improve everyday software, not by replacing engineering, but by making products more useful for the people who use them.
                            </p>
                        </div>
                    </div>
                )}

                {/* Concept 2: The Editorial Split */}
                {selectedConcept === 2 && (
                    <div className="max-w-5xl mx-auto px-6 py-12">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 items-start">
                            {/* Left: Statement */}
                            <div className="md:col-span-1">
                                <span className="text-md uppercase font-mono tracking-widest text-accent mb-3 block">Now</span>
                                <h3 className="text-xl font-light text-foreground leading-snug italic tracking-tight">
                                    {/* &ldquo;Right now, I&apos;m most excited about exploring AI, building thoughtful software, and never stopping learning.&rdquo; */}
                                    This season of my career has been defined by curiosity.
                                </h3>
                            </div>
                            {/* Right: Paragraphs */}
                            <div className="md:col-span-2 space-y-6 text-base text-muted-foreground leading-relaxed">
                                <p>
                                    I'm spending my time learning, building,
                                    and asking better questions than I did yesterday.
                                </p>
                                <p>
                                    AI is one part of that journey, but not the whole story.
                                    What excites me most is combining strong engineering fundamentals with technologies
                                    that make software more useful for real people.
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Concept 3: The Interactive Focus */}
                {selectedConcept === 3 && (
                    <div className="max-w-4xl mx-auto px-6 py-12 text-center">
                        <span className="text-md uppercase font-mono tracking-widest text-accent mb-6 block">Now</span>
                        {/* Selector tabs */}
                        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-10 border-b border-border/20 pb-6">
                            {topics.map((t, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveTopic(idx)}
                                    className={`pb-2 text-xs font-mono tracking-wider transition-all cursor-pointer ${activeTopic === idx
                                        ? "border-b-2 border-primary text-foreground font-semibold"
                                        : "text-muted-foreground hover:text-foreground"
                                        }`}
                                >
                                    {t.title}
                                </button>
                            ))}
                        </div>

                        {/* Interactive Content Block */}
                        <div className="min-h-[120px] flex items-center justify-center">
                            <p className="text-xl font-medium text-foreground leading-relaxed max-w-2xl mx-auto italic transition-all duration-300">
                                &ldquo;{topics[activeTopic].content}&rdquo;
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
