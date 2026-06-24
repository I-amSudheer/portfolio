// Projects — featured project cards with image, tech tags, and links.
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Section } from "./Section";
import p1 from "@/assets/ran_color.png";
import p2 from "@/assets/pass_gen.png";
import p3 from "@/assets/project3.jpg";

const projects = [
  {
    img: p1,
    title: "FinTrack Dashboard",
    desc: "Personal finance dashboard with real-time analytics and goal tracking.",
    tech: ["React", "Spring Boot", "MySQL", "Chart.js"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    img: p2,
    title: "SecureAuth Service",
    desc: "Production-grade auth service with JWT, refresh tokens, and RBAC.",
    tech: ["Java", "Spring Security", "JWT", "MySQL"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    img: p3,
    title: "API Gateway Toolkit",
    desc: "Composable REST API toolkit with rate-limiting, logging, and docs.",
    tech: ["Spring Boot", "REST", "Swagger", "Docker"],
    github: "https://github.com",
    live: "https://example.com",
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Featured Work"
      description="A selection of recent builds spanning full-stack apps and security tooling."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -8 }}
            className="group glass rounded-3xl overflow-hidden shadow-soft hover:shadow-glow transition-all"
          >
            <div className="relative aspect-video overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                width={800}
                height={600}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <a
                  href={p.github}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 rounded-full glass text-sm font-medium hover:shadow-glow transition-shadow"
                >
                  <Github className="w-4 h-4" /> Code
                </a>
                <a
                  href={p.live}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 rounded-full gradient-primary text-primary-foreground text-sm font-medium shadow-glow"
                >
                  <ExternalLink className="w-4 h-4" /> Live
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}