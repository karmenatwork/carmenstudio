import { Card } from "./custom-ui/Card"
import { SectionTitle } from "./custom-ui/SectionTitle"
import { Badge } from "./custom-ui/Badge"
import { Button } from "./custom-ui/Button"

export default function Projects() {
    return (
        <section id="projects" className="px-6 max-w-5xl mx-auto w-full">
            <SectionTitle title="Featured Projects" subtitle="Some things I've built." align="center" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="flex flex-col h-full group">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground transition-transform group-hover:scale-105">
                            [Project Image]
                        </div>
                    </div>
                    <div className="p-8 flex flex-col flex-1">
                        <h3 className="text-2xl font-bold mb-3">Project Alpha</h3>
                        <p className="text-muted-foreground mb-6 flex-1 italic">
                            A comprehensive SaaS dashboard for analytics. Features real-time data visualization and reporting.
                        </p>
                        <div className="flex gap-2 flex-wrap mb-6">
                            <Badge variant="secondary">Node.js</Badge>
                            <Badge variant="secondary">React</Badge>
                            <Badge variant="secondary">PostgreSQL</Badge>
                        </div>
                        <Button variant="outline" className="w-full rounded-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
                            View Case Study
                        </Button>
                    </div>
                </Card>

                <Card className="flex flex-col h-full group">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground transition-transform group-hover:scale-105">
                            [Project Image]
                        </div>
                    </div>
                    <div className="p-8 flex flex-col flex-1">
                        <h3 className="text-2xl font-bold mb-3">Project Beta</h3>
                        <p className="text-muted-foreground mb-6 flex-1 italic">
                            A mobile-first e-commerce application with seamless checkout and inventory management.
                        </p>
                        <div className="flex gap-2 flex-wrap mb-6">
                            <Badge variant="secondary">Next.js</Badge>
                            <Badge variant="secondary">Tailwind</Badge>
                            <Badge variant="secondary">Stripe</Badge>
                        </div>
                        <Button variant="outline" className="w-full rounded-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
                            View Case Study
                        </Button>
                    </div>
                </Card>
            </div>
        </section>
    )
}

