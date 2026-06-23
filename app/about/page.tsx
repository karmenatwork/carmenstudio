import { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About",
  description: "I am Carmen. A Mom and a Software Developer based in the Bay Area, CA.",
};

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function AboutPage({ searchParams }: PageProps) {
  const resolvedSearchParams = await searchParams;
  const tab = resolvedSearchParams.tab === "experience" ? "experience" : "story";
  return <AboutClient initialTab={tab} />;
}