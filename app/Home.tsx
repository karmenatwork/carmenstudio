import { Badge } from "@/components/custom-ui/Badge";
import { Button } from "@/components/custom-ui/Button";
import { Card } from "@/components/custom-ui/Card";
import { SectionTitle } from "@/components/custom-ui/SectionTitle";
import WorkExperience from "@/components/work-experience";
import { getAboutData } from "@/lib/getAbout";


export default function Home() {
    const about = getAboutData();

    return (
        <div className="flex flex-col gap-20 pb-20">
            {/* Hero Section */}
            <section className="relative mt-10 pt-20 pb-10 px-6 max-w-5xl mx-auto w-full flex flex-col items-center text-center gap-8 border-x dark:border-border/40 dark:bg-background/60">
                <div className="space-y-4 max-w-3xl">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground">
                        Building digital experiences with <span className="text-primary">heart</span> & <span className="text-accent">code</span>.
                    </h1>
                    <h4 className="text-base md:text-lg sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        {about.headline}
                    </h4>

                    <p className="text-lg md:text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        {about.intro}
                    </p>
                </div>
            </section>

            {/* Personality Grid */}
            <section className="px-6 max-w-5xl mx-auto w-full">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1: Coding */}
                    <Card className="relative aspect-square md:aspect-[4/5] group overflow-hidden border-none shadow-md">
                        <div className="absolute inset-0 bg-muted animate-pulse" /> {/* Placeholder for Image */}
                        <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-black/60 to-transparent">
                            <span className="text-white font-semibold text-lg">Coding</span>
                        </div>
                    </Card>

                    {/* Card 2: Coffee */}
                    <Card className="relative aspect-square md:aspect-[4/5] group overflow-hidden border-none shadow-md">
                        <div className="absolute inset-0 bg-muted animate-pulse" /> {/* Placeholder for Image */}
                        <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-black/60 to-transparent">
                            <span className="text-white font-semibold text-lg">Coffee</span>
                        </div>
                    </Card>

                    {/* Card 3: Family */}
                    <Card className="relative aspect-square md:aspect-[4/5] group overflow-hidden border-none shadow-md">
                        <div className="absolute inset-0 bg-muted animate-pulse" /> {/* Placeholder for Image */}
                        <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-black/60 to-transparent">
                            <span className="text-white font-semibold text-lg">Family & Travel</span>
                        </div>
                    </Card>
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="px-6 max-w-5xl mx-auto w-full">
                <SectionTitle title="Work Experience" subtitle="My professional journey so far." />
                <div className="space-y-6">
                    {about.workExperience.map((job, index) => (
                        <Card key={index} className="p-6">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                                <div>
                                    <h3 className="text-xl font-bold">{job.title}</h3>
                                    <p className="text-muted-foreground">{job.company} • {job.start} - {typeof job.end === 'string' ? job.end : job.end.label}</p>
                                </div>
                                {typeof job.end !== 'string' && <Badge>Current</Badge>}
                            </div>
                            {/* Note: Description is not in the JSON yet, so keeping hardcoded placeholder or we can add it to JSON later */}
                            <p className="text-muted-foreground mb-4">
                                Key contributions and achievements in this role.
                            </p>
                        </Card>
                    ))}
                </div>
            </section>
            <WorkExperience />

            {/* Featured Projects Section */}
            <section id="projects" className="px-6 max-w-5xl mx-auto w-full">
                <SectionTitle title="Featured Projects" subtitle="Some things I've built." />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="flex flex-col h-full">
                        <div className="aspect-video bg-muted relative group overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                                Project Image
                            </div>
                        </div>
                        <div className="p-6 flex flex-col flex-1">
                            <h3 className="text-xl font-bold mb-2">Project Alpha</h3>
                            <p className="text-muted-foreground mb-4 flex-1">
                                A comprehensive SaaS dashboard for analytics. Features real-time data visualization and reporting.
                            </p>
                            <div className="flex gap-2 flex-wrap mb-4">
                                <Badge variant="outline">Node.js</Badge>
                                <Badge variant="outline">React</Badge>
                                <Badge variant="outline">PostgreSQL</Badge>
                            </div>
                            <Button variant="outline" className="w-full">View Project</Button>
                        </div>
                    </Card>

                    <Card className="flex flex-col h-full">
                        <div className="aspect-video bg-muted relative group overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                                Project Image
                            </div>
                        </div>
                        <div className="p-6 flex flex-col flex-1">
                            <h3 className="text-xl font-bold mb-2">Project Beta</h3>
                            <p className="text-muted-foreground mb-4 flex-1">
                                A mobile-first e-commerce application with seamless checkout and inventory management.
                            </p>
                            <div className="flex gap-2 flex-wrap mb-4">
                                <Badge variant="outline">Next.js</Badge>
                                <Badge variant="outline">Tailwind</Badge>
                                <Badge variant="outline">Stripe</Badge>
                            </div>
                            <Button variant="outline" className="w-full">View Project</Button>
                        </div>
                    </Card>
                </div>
            </section>
        </div>
    );
}
