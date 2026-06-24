export default function CurrentFocus() {
    return (
        <section className="px-6 max-w-5xl mx-auto w-full pt-10">
            <div className="mb-8">
                <h2 className="text-2xl font-bold tracking-tight text-foreground">Now</h2>
                <p className="text-sm text-muted-foreground mt-1">What I am actively working on and learning right now.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl border border-border/60 bg-card/60 backdrop-blur-sm shadow-sm flex flex-col justify-between">
                    <div>
                        <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-2.5 py-0.5 text-xs font-semibold text-primary mb-4">
                            Active Project & Consulting
                        </div>
                        <h3 className="text-lg font-bold tracking-tight mb-2">Full-Stack SaaS Consulting</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            I am currently collaborating with fast-paced startups in health, fintech, and education. I focus on building responsive React/Next.js frontends, designing robust Ruby on Rails APIs, and developing AI-assisted student workflows that boost engagement.
                        </p>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-border/40">
                        {["Next.js", "React", "Ruby on Rails", "AI Workflows"].map((tag) => (
                            <span key={tag} className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground bg-muted px-2 py-0.5 rounded">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="p-6 rounded-2xl border border-border/60 bg-card/60 backdrop-blur-sm shadow-sm flex flex-col justify-between">
                    <div>
                        <div className="inline-flex items-center rounded-full border border-accent/20 bg-accent/5 px-2.5 py-0.5 text-xs font-semibold text-accent mb-4">
                            Research & Community
                        </div>
                        <h3 className="text-lg font-bold tracking-tight mb-2">Applied AI & Tech Mentorship</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Expanding my machine learning knowledge through Udacity and IBM courses. In parallel, I am organizing events with IA Week LATAM and co-leading Google Cloud training workshops for women in tech with Kuñatech.
                        </p>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-border/40">
                        {["Agentic AI", "TensorFlow", "Women in Tech", "GCP"].map((tag) => (
                            <span key={tag} className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground bg-muted px-2 py-0.5 rounded">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}   