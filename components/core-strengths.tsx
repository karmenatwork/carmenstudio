import aboutData from "@/data/about.json";
import { Card } from "@/components/custom-ui/Card";
import { Badge } from "@/components/custom-ui/Badge";

interface CoreStrengthsProps {
    showSkills?: boolean;
}

export default function CoreStrengths({ showSkills = true }: CoreStrengthsProps) {
    const { coreStrengths } = aboutData;
    return (
        <section className="px-6 max-w-5xl mx-auto w-full">
            <div className="mb-8">
                <h2 className="text-2xl font-bold tracking-tight text-foreground">How I Build</h2>
                <p className="text-sm text-muted-foreground mt-1">Key strategic pillars driving my technical contributions.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {coreStrengths.map((strength, index) => {
                    const isEven = index % 2 === 0;
                    const borderClass = isEven ? "border-t-primary" : "border-t-accent";
                    const iconBgClass = isEven ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent";

                    return (
                        <Card key={index} className={`p-6 flex flex-col justify-between hover:shadow-md transition-all duration-300 border-t-4 ${borderClass}`}>
                            <div className="space-y-4">
                                <div className={`p-2.5 rounded-xl w-fit ${iconBgClass}`}>
                                    {index === 0 && (
                                        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                                        </svg>
                                    )}
                                    {index === 1 && (
                                        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
                                            <rect x="9" y="9" width="6" height="6" />
                                            <line x1="9" y1="1" x2="9" y2="4" />
                                            <line x1="15" y1="1" x2="15" y2="4" />
                                            <line x1="9" y1="20" x2="9" y2="23" />
                                            <line x1="15" y1="20" x2="15" y2="23" />
                                            <line x1="20" y1="9" x2="23" y2="9" />
                                            <line x1="20" y1="15" x2="23" y2="15" />
                                            <line x1="1" y1="9" x2="4" y2="9" />
                                            <line x1="1" y1="15" x2="4" y2="15" />
                                        </svg>
                                    )}
                                    {index === 2 && (
                                        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                            <circle cx="9" cy="7" r="4" />
                                            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                        </svg>
                                    )}
                                </div>
                                <h3 className="text-xl font-bold tracking-tight text-foreground">{strength.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {strength.description}
                                </p>
                            </div>
                            {showSkills && strength.skills && strength.skills.length > 0 && (
                                <div className="flex flex-wrap gap-1.5 mt-6 pt-4 border-t border-border/40">
                                    {strength.skills.map((skill) => (
                                        <Badge key={skill} variant="outline" className="text-[10px] px-2 py-0.5 bg-muted/40">
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            )}
                        </Card>
                    );
                })}
            </div>
        </section>
    );
}