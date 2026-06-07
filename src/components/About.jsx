// About — short biography paragraphs alongside a 2x2 grid of trait cards.
import { motion } from "framer-motion";
import { Brain, Rocket, Shield, Sparkles } from "lucide-react";
import { Section } from "./Section";

const traits = [
  { Icon: Rocket, label: "Scalable Apps", desc: "Production-ready architectures" },
  { Icon: Shield, label: "Security First", desc: "JWT, RBAC, secure APIs" },
  { Icon: Brain, label: "Always Learning", desc: "New tech, daily" },
  { Icon: Sparkles, label: "Clean Code", desc: "Maintainable & elegant" },
];

export function About() {
  return (
    <Section id="about" eyebrow="About" title="Crafting Secure Digital Experiences">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-5 text-lg text-foreground/80 leading-relaxed"
        >
          <p>
            I am a passionate{" "}
            <span className="text-primary font-semibold">Full Stack Developer</span> focused on
            building secure, scalable, and user-friendly web applications.
          </p>
          <p>
            I enjoy learning new technologies and sharing my journey through content creation. My
            primary expertise includes Java, Spring Boot, React, REST APIs, Authentication,
            Authorization, and JWT Security.
          </p>
          <p>
            I believe in <span className="text-accent font-semibold">continuous learning</span>,
            consistency, and building real-world solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {traits.map((t, i) => (
            <motion.div
              key={t.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass rounded-2xl p-6 shadow-soft hover:shadow-glow transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4 shadow-glow">
                <t.Icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="font-semibold">{t.label}</div>
              <div className="text-sm text-muted-foreground mt-1">{t.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}