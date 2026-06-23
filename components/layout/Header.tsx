"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/custom-ui/Button";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navItems = [
        { label: "About", href: "/about" },
        { label: "Experience", href: "/#experience" },
        { label: "Gists", href: "/gists" }
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
            <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="relative h-9 w-9 overflow-hidden rounded-full ring-2 ring-primary/10">
                        <Link href="/" className="transition-opacity hover:opacity-80" onClick={() => setIsMenuOpen(false)}>
                            <Image
                                src="/avatar.jpg"
                                alt="Carmen"
                                fill
                                className="object-cover"
                            />
                        </Link>
                    </div>
                    <Link href="/" className="text-xl font-bold tracking-tight text-foreground transition-opacity hover:opacity-80" onClick={() => setIsMenuOpen(false)}>
                        Carmen's <span className="text-primary">Studio</span>
                    </Link>
                    {/* <Image
                        src="/avatar.jpg"
                        alt="Carmen"
                        width={32}
                        height={32}
                        className="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-9 w-9"
                    /> */}
                    {/* <Link href="/" className="text-xl font-bold tracking-tight text-foreground">
                        <span className="text-primary"> Home Studio</span>
                    </Link> */}
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-sm font-medium text-muted-foreground hover:text-primary traqnsition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}
                    <div className="flex items-center gap-4 ml-4 pl-4 border-l border-border">
                        <ThemeToggle />
                        {/* <Button size="sm" className="rounded-full shadow-lg shadow-primary/20">
                            Contact Me
                        </Button> */}
                    </div>
                </nav>

                {/* Mobile Nav Toggle */}
                <div className="md:hidden flex items-center gap-3">
                    <ThemeToggle />
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="p-2 text-muted-foreground hover:text-primary transition-colors"
                        aria-label="Toggle Menu"
                    >
                        {isMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-background/95 backdrop-blur-lg border-b border-border p-6 space-y-4 animate-in slide-in-from-top-2 z-50">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="block text-lg font-medium text-muted-foreground hover:text-primary"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}
                    {/* <Button className="w-full mt-4 rounded-full">Contact Me</Button> */}
                </div>
            )}
        </header>
    );
}

