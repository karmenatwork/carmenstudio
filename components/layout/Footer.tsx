import React from "react";
import aboutData from "@/data/about.json";

export function Footer() {
    return (
        <footer className="border-t border-border/40 bg-background pt-16 pb-8">
            <div className="max-w-5xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mb-12">
                    <div className="max-w-sm">
                        <p className="text-xl font-bold text-foreground mb-4">
                            Carmen <span className="text-primary">Studio</span>
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed italic">
                            &quot;Building digital experiences with heart & code. Thanks for stopping by my corner of the internet! 💫&quot;
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <p className="text-sm font-semibold uppercase tracking-wider text-foreground">Connect</p>
                        <div className="flex items-center gap-6">
                            <a
                                href={aboutData.linkedIn}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-all hover:-translate-y-1"
                                aria-label="LinkedIn"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                            </a>
                            {/* GitHub */}
                            {/* <a
                                href="#"
                                className="text-muted-foreground hover:text-primary transition-all hover:-translate-y-1"
                                aria-label="GitHub"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                            </a> */}
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground uppercase tracking-widest">
                    <p>&copy; {new Date().getFullYear()} Carmen Díaz</p>
                    <p className="wrap-break-word md:ml-auto md:text-right">Made with ❤️ in California with 🇵🇾 flavour </p>
                </div>
            </div>
        </footer>
    );
}

