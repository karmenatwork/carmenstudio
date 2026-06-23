import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import { getGistBySlug, getAllGists } from "@/lib/gists";

// Import highlight.js theme for syntax highlighting
import "highlight.js/styles/github-dark.css";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const gists = getAllGists();
  return gists.map((gist) => ({
    slug: gist.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const gist = getGistBySlug(slug);

  if (!gist) {
    return {
      title: "Gist Not Found",
    };
  }

  return {
    title: `${gist.data.title} | Gists | Carmen Studio`,
    description: gist.data.description,
  };
}

function formatDate(dateString: string) {
  if (!dateString) return "";
  const [year, month, day] = dateString.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function GistPage({ params }: PageProps) {
  const { slug } = await params;
  const gist = getGistBySlug(slug);

  if (!gist) {
    notFound();
  }

  const { data, content } = gist;

  // Calculate reading time (avg 200 words per minute)
  const wordCount = content.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200);

  return (
    <div className="py-20 px-6 max-w-3xl mx-auto w-full">
      {/* Back Button */}
      <div className="mb-10">
        <Link
          href="/gists"
          className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors duration-200"
        >
          <svg
            className="h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Gists
        </Link>
      </div>

      {/* Article Header */}
      <header className="mb-12 border-b border-border/60 pb-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15] mb-6">
          {data.title}
        </h1>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-mono text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <svg
              className="h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            {data.updated && data.updated !== data.created ? (
              <span>
                Published <time dateTime={data.created}>{formatDate(data.created)}</time> (Updated <time dateTime={data.updated}>{formatDate(data.updated)}</time>)
              </span>
            ) : (
              <span>
                Published <time dateTime={data.created}>{formatDate(data.created)}</time>
              </span>
            )}
          </div>

          <span>•</span>

          <div className="flex items-center gap-1.5">
            <svg
              className="h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{readingTime} min read</span>
          </div>

          <span>•</span>

          <div>By {data.author}</div>
        </div>
      </header>

      {/* Article Content */}
      <article className="prose dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary hover:prose-a:underline prose-pre:bg-zinc-950 dark:prose-pre:bg-muted prose-pre:text-zinc-100 prose-pre:border prose-pre:border-zinc-800/80 prose-pre:rounded-2xl prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none prose-pre:prose-code:bg-transparent prose-pre:prose-code:px-0 prose-pre:prose-code:py-0 prose-pre:prose-code:text-inherit">
        <ReactMarkdown rehypePlugins={[rehypeHighlight]}>{content}</ReactMarkdown>
      </article>
    </div>
  );
}
