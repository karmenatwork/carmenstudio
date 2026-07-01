import type { Metadata } from "next";
import { Geist, Geist_Mono, Caveat } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});


import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  metadataBase: new URL("https://carmendiaz.io"),
  title: {
    default: "Carmen Díaz | Senior Software Engineer",
    template: "%s | Carmen Díaz",
  },
  description: "A Software Engineer blending design, clarity, and thoughtful engineering. Focuses on full-stack development, community mentorship, and continuous learning.",
  keywords: ["Carmen Díaz", "Software Engineer", "Senior Software Engineer", "Full Stack Developer", "San Francisco Bay Area", "Ruby on Rails", "React", "Next.js"],
  authors: [{ name: "Carmen Díaz" }],
  creator: "Carmen Díaz",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Carmen Díaz | Senior Software Engineer",
    description: "A Software Engineer blending design, clarity, and thoughtful engineering. Focuses on full-stack development, community mentorship, and continuous learning.",
    url: "https://carmendiaz.io",
    siteName: "Carmen Díaz Studio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Carmen Díaz | Senior Software Engineer",
    description: "A Software Engineer blending design, clarity, and thoughtful engineering.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${caveat.variable} antialiased text-foreground flex flex-col min-h-screen`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Carmen Díaz",
              "url": "https://carmendiaz.io",
              "image": "https://carmendiaz.io/avatar.jpg",
              "jobTitle": "Senior Software Engineer",
              "worksFor": {
                "@type": "Organization",
                "name": "Software Engineering Consultant"
              },
              "alumniOf": [
                {
                  "@type": "EducationalOrganization",
                  "name": "Catholic University of Asunción"
                },
                {
                  "@type": "EducationalOrganization",
                  "name": "National University of Asunción"
                }
              ],
              "sameAs": [
                "https://www.linkedin.com/in/carmen-diaz/"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "San Francisco Bay Area",
                "addressRegion": "CA",
                "addressCountry": "US"
              }
            })
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}