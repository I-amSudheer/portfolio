import { motion } from "framer-motion";
import { Section } from "./Section";

const groups = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 92 },
      { name: "JavaScript", level: 90 },
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "Bootstrap", level: 85 },
      { name: "Tailwind CSS", level: 88 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Java", level: 93 },
      { name: "Spring Boot", level: 90 },
      { name: "Spring Security", level: 87 },
      { name: "REST APIs", level: 92 },
    ],
  },
  {
    title: "Security",
    skills: [
      { name: "Authentication", level: 90 },
      { name: "Authorization", level: 88 },
      { name: "JWT", level: 92 },
      { name: "Role-Based Access Control", level: 88 },
      { name: "Secure API Design", level: 86 },
    ],
  },
  {
    title: "Database",
    skills: [{ name: "MySQL", level: 88 }],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", level: 92 },
      { name: "GitHub", level: 92 },
      { name: "Postman", level: 90 },
      { name: "IntelliJ IDEA", level: 90 },
      { name: "VS Code", level: 95 },
    ],
  },
];

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Tools of the Trade" description="A handpicked stack for building modern, secure full-stack applications.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((g, gi) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: gi * 0.08 }}
            whileHover={{ y: -4 }}
            className="glass rounded-2xl p-6 shadow-soft hover:shadow-glow transition-all"
          >
            <div className="text-sm font-semibold uppercase tracking-wider text-primary mb-5">{g.title}</div>
            <div className="space-y-4">
              {g.skills.map((s) => (
                <div key={s.name}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="font-medium">{s.name}</span>
                    <span className="text-muted-foreground">{s.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className="h-full gradient-primary rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}