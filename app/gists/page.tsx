import Link from "next/link";
import { getAllGists } from "@/lib/gists";
import { Card } from "@/components/custom-ui/Card";
import { SectionTitle } from "@/components/custom-ui/SectionTitle";

export const metadata = {
  title: "Gists | Carmen Studio",
  description: "Bite-sized notes, cheat sheets, and technical setup guides by Carmen.",
};

function formatDate(dateString: string) {
  if (!dateString) return "";
  // Parse date safely to avoid timezone shifts
  const [year, month, day] = dateString.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function GistsPage() {
  const gists = getAllGists();

  return (
    <div className="py-20 px-6 max-w-5xl mx-auto w-full">
      <SectionTitle
        title="Gists"
        subtitle="Bite-sized notes, cheat sheets, and technical guides detailing my learnings and setups."
        align="center"
        className="mb-16"
      />

      {gists.length === 0 ? (
        <div className="text-center py-12 border border-dashed border-border rounded-2xl bg-card">
          <p className="text-muted-foreground">No gists found. Run the migration script to fetch them.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {gists.map((gist) => {
            const date = gist.updated && gist.updated !== gist.created ? gist.updated : gist.created;
            
            return (
              <Link key={gist.slug} href={`/gists/${gist.slug}`} className="group block h-full">
                <Card className="p-8 flex flex-col h-full hover:border-primary/40 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground mb-4">
                    <time dateTime={date}>{formatDate(date)}</time>
                    <span>•</span>
                    <span>By {gist.author}</span>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-3 group-hover:text-primary transition-colors duration-200">
                    {gist.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                    {gist.description}
                  </p>
                  
                  <div className="inline-flex items-center text-sm font-semibold text-primary gap-1 group-hover:gap-2 transition-all duration-200">
                    Read Note
                    <svg
                      className="h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
