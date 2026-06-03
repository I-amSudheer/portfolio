import { motion } from "framer-motion";
import { Section } from "./Section";
import { GraduationCap, Hammer, ShieldAlert, Video, Briefcase } from "lucide-react";

const items = [
  { Icon: GraduationCap, title: "Learning Programming", year: "2020", desc: "Started with Java and the fundamentals of CS." },
  { Icon: Hammer, title: "Building Projects", year: "2021", desc: "Shipped full-stack web apps and personal tools." },
  { Icon: ShieldAlert, title: "Exploring Web Security", year: "2022", desc: "Deep-dived into auth, JWT, and Spring Security." },
  { Icon: Video, title: "Content Creation", year: "2023", desc: "Started teaching on YouTube and Instagram." },
  { Icon: Briefcase, title: "Freelancing Journey", year: "2024", desc: "Building production apps for clients worldwide." },
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
              className={`relative flex items-center gap-6 sm:gap-0 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}
            >
              <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full gradient-primary shadow-glow border-4 border-background z-10" />
              <div className="pl-16 sm:pl-0 sm:w-1/2 sm:px-8">
                <motion.div whileHover={{ y: -4 }} className="glass rounded-2xl p-6 shadow-soft hover:shadow-glow transition-all">
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