// Services — grid of freelance offering cards with hover animations.
import { motion } from "framer-motion";
import {
  Globe, Layers, Atom, Server, Lock, KeyRound, ShieldCheck, Plug, Wrench,
} from "lucide-react";
import { Section } from "./Section";

const services = [
  { Icon: Globe, title: "Custom Website Development", desc: "Bespoke websites tailored to your brand." },
  { Icon: Layers, title: "Full Stack Web Applications", desc: "End-to-end apps from database to UI." },
  { Icon: Atom, title: "React Frontend Development", desc: "Modern, performant, beautiful interfaces." },
  { Icon: Server, title: "Spring Boot Backend Development", desc: "Robust APIs and enterprise services." },
  { Icon: Lock, title: "Secure Authentication Systems", desc: "Production-ready login & session flows." },
  { Icon: KeyRound, title: "JWT-Based Authentication", desc: "Stateless, scalable token auth." },
  { Icon: ShieldCheck, title: "Role-Based Authorization", desc: "Fine-grained RBAC for any app." },
  { Icon: Plug, title: "API Development & Integration", desc: "Connect your stack to anything." },
  { Icon: Wrench, title: "Website Maintenance", desc: "Keep your site fast, safe, and fresh." },
];

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="Services"
      title="Freelance Web Development Services"
      description="Hire me to design, build, secure, and maintain your next product."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            whileHover={{ y: -8 }}
            className="group relative glass rounded-2xl p-7 shadow-soft hover:shadow-glow transition-all overflow-hidden"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity gradient-primary -z-10" />
            <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center shadow-glow mb-5 group-hover:scale-110 transition-transform">
              <s.Icon className="w-7 h-7 text-primary-foreground" />
            </div>
            <div className="font-semibold text-lg mb-2 group-hover:text-primary-foreground transition-colors">
              {s.title}
            </div>
            <div className="text-sm text-muted-foreground group-hover:text-primary-foreground/90 transition-colors">
              {s.desc}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}