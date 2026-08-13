import { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About",
  description: "I am Carmen, a Mom and a Senior Software Engineer based in the San Francisco Bay Area, CA.",
};

export default function AboutPage() {
  return <AboutClient />;
}