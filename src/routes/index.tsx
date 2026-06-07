// Home route — the only TanStack Start wiring required by the Lovable
// platform. The actual portfolio UI lives in plain React components under
// src/components and could be dropped into any Vite + React project.
import { createFileRoute } from "@tanstack/react-router";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Cursor } from "@/components/Cursor";
import { FloatingIcons } from "@/components/FloatingIcons";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { SecuritySection } from "@/components/Security";
import { Content } from "@/components/Content";
import { Timeline } from "@/components/Timeline";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

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
