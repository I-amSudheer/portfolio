import { createFileRoute } from "@tanstack/react-router";
import { ThemeProvider } from "@/components/portfolio/ThemeProvider";
import { Navbar } from "@/components/portfolio/Navbar";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { Cursor } from "@/components/portfolio/Cursor";
import { FloatingIcons } from "@/components/portfolio/FloatingIcons";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Services } from "@/components/portfolio/Services";
import { Projects } from "@/components/portfolio/Projects";
import { SecuritySection } from "@/components/portfolio/Security";
import { Content } from "@/components/portfolio/Content";
import { Timeline } from "@/components/portfolio/Timeline";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Portfolio — Full Stack Developer & Security Engineer" },
      { name: "description", content: "Full Stack Developer, Security-Focused Engineer, Content Creator, and Freelancer specializing in Java, Spring Boot, React, and JWT security." },
      { property: "og:title", content: "Portfolio — Full Stack Developer & Security Engineer" },
      { property: "og:description", content: "Hire a Full Stack Developer focused on secure, scalable web apps." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-background text-foreground">
        <ScrollProgress />
        <Cursor />
        <FloatingIcons />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Services />
          <Projects />
          <SecuritySection />
          <Content />
          <Timeline />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
