// Timeline — vertical career timeline with alternating side cards.
import { motion } from "framer-motion";
import { GraduationCap, Hammer, ShieldAlert, Video, Briefcase } from "lucide-react";
import { Section } from "./Section";

const items = [
  { Icon: GraduationCap, title: "Learning Programming", year: "2023", desc: "Started with Java and the fundamentals of computer science." },
  { Icon: ShieldAlert, title: "Started Web Development", year: "2024", desc: "Learned HTML, CSS, JavaScript, React, and Git." },
  { Icon: Hammer, title: "Learning React & SQL", year: "2025", desc: "Built small React projects and learned SQL database fundamentals." },
  { Icon: Video, title: "Full-Stack Development & Security", year: "2026", desc: "Learning Spring Boot, JWT Authentication, Spring Security, PostgreSQL, and building full-stack applications." },
  { Icon: Briefcase, title: "Content Creation — Synmath Tech", year: "2026", desc: "Sharing programming knowledge and documenting my learning journey through educational content." },
];

export function Timeline() {
  return (
    <Section id="journey" eyebrow="Journey" title="My Path So Far">
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-0.5 gradient-primary -translate-x-1/2" />
        <div className="space-y-10">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`relative flex items-center gap-6 sm:gap-0 ${
                i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
              }`}
            >
              <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full gradient-primary shadow-glow border-4 border-background z-10" />
              <div className="pl-16 sm:pl-0 sm:w-1/2 sm:px-8">
                <motion.div
                  whileHover={{ y: -4 }}
                  className="glass rounded-2xl p-6 shadow-soft hover:shadow-glow transition-all"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-glow">
                      <it.Icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <span className="text-xs font-bold text-primary tracking-widest">{it.year}</span>
                  </div>
                  <div className="font-semibold text-lg">{it.title}</div>
                  <div className="text-sm text-muted-foreground mt-1">{it.desc}</div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}