import { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About",
  description: "I am Carmen. A Mom and a Software Developer based in the Bay Area, CA.",
};

export default function AboutPage() {
  return <AboutClient />;
}