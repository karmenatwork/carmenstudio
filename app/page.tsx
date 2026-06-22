import { getAboutData } from "@/lib/getAbout";
import { Carousel, CarouselImageItem } from "@/components/carousel";
import { Button } from "@/components/custom-ui/Button";
import Link from "next/link";

// Import images
import laptopImg from "@/assets/images/personality/carmen-laptop.jpeg";
import pianoImg from "@/assets/images/personality/carmen-piano.jpg";
import hikingImg from "@/assets/images/personality/carmen-hiking.jpg";
import asuncionImg from "@/assets/images/personality/carmen-asuncion.jpg";
import goldenGateImg from "@/assets/images/personality/carmen-golden-gate.jpg";
import healthyMealImg from "@/assets/images/personality/healthy-meal.jpg";
import WorkExperience from "@/components/work-experience";
import Projects from "@/components/projects";

export default function Home() {
  const about = getAboutData();

  const carouselImages: CarouselImageItem[] = [
    { src: laptopImg, alt: "Coding on laptop", label: "Coffee & coding" },
    { src: pianoImg, alt: "Playing piano", label: "Playing piano" },
    { src: hikingImg, alt: "Hiking in nature", label: "Hiking in nature" },
    { src: asuncionImg, alt: "Asunción, Paraguay", label: "Vising my hometown Asunción, Paraguay" },
    { src: goldenGateImg, alt: "Golden Gate Bridge", label: "My favorite place: Golden Gate Bridge" },
    { src: healthyMealImg, alt: "Healthy Meal", label: "Preparing healthy meals" },
  ];

  return (
    <div className="flex flex-col gap-10 pb-10">
      {/* Hero Section */}
      <section id="about" className="relative pt-20 pb-5 px-6 max-w-5xl mx-auto w-full flex flex-col items-center text-center gap-8">
        <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-2">
          <span className="relative flex h-2 w-2 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Open to new opportunities
        </div>

        <div className="space-y-6 max-w-4xl">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1]">
            Building digital experiences with <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">heart</span> & <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">code</span>.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {about.intro}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            {/* <Button size="lg" className="rounded-full px-8 shadow-xl shadow-primary/20">
              View My Work
            </Button> */}
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-full border border-border bg-transparent hover:bg-primary/80 text-primary hover:text-primary-foreground h-14 px-8 text-base font-medium transition-colors shadow-xl shadow-primary/10"
            >
              More about me
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full max-w-6xl mx-auto px-3">
        <div className="mb-10 text-center space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">The Human Side</h2>
          <p className="text-muted-foreground">Beyond the code, here&apos;s what keeps me inspired.</p>
        </div>

        <div className="grid grid-cols-1 gap-16">
          <div className="space-y-4">
            {/* <p className="text-xs font-mono text-center text-muted-foreground uppercase tracking-widest">Option B: Analog Polaroid</p> */}
            <Carousel images={carouselImages} variant="polaroid" imagesPerView={3} gapBetweenImages="gap-6" autoPlay={true} />
          </div>
        </div>
      </section>

      <WorkExperience limit={3} bulletsLimit={2} showSkills={false} />

    </div>
  );
}


