import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Gist {
  title: string;
  description: string;
  author: string;
  created: string;
  updated: string;
}

export interface GistWithSlug extends Gist {
  slug: string;
}

const GISTS_DIR = path.join(process.cwd(), "gists-content");

export function getAllGists(): GistWithSlug[] {
  // If directory doesn't exist yet (e.g. before migration script runs), return empty array
  if (!fs.existsSync(GISTS_DIR)) {
    return [];
  }

  const filenames = fs.readdirSync(GISTS_DIR);
  
  const gists = filenames
    .filter((filename) => filename.endsWith(".md"))
    .map((filename) => {
      const slug = filename.replace(/\.md$/, "");
      const filePath = path.join(GISTS_DIR, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      
      const { data } = matter(fileContents);
      
      return {
        slug,
        title: data.title || slug.replace(/-/g, " "),
        description: data.description || "",
        author: data.author || "Carmen",
        created: data.created || "",
        updated: data.updated || data.created || "",
      } as GistWithSlug;
    });

  // Sort gists by created date descending (newest first)
  return gists.sort((a, b) => new Date(b.created).getTime() - new Date(a.created).getTime());
}

export function getGistBySlug(slug: string): { data: GistWithSlug; content: string } | null {
  const filePath = path.join(GISTS_DIR, `${slug}.md`);
  
  if (!fs.existsSync(filePath)) {
    return null;
  }
  
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  
  const gistData: GistWithSlug = {
    slug,
    title: data.title || slug.replace(/-/g, " "),
    description: data.description || "",
    author: data.author || "Carmen",
    created: data.created || "",
    updated: data.updated || data.created || "",
  };
  
  return {
    data: gistData,
    content,
  };
}
