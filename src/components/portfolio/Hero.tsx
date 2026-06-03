import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const roles = [
  "Java Developer",
  "React Developer",
  "Spring Boot Developer",
  "Security-Focused Developer",
  "Freelancer",
];

function TypingEffect() {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[idx];
    const speed = deleting ? 40 : 90;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), 1500);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setIdx((i) => (i + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, idx]);

  return (
    <span className="gradient-text">
      {text}
      <span className="inline-block w-0.5 h-[1em] bg-primary align-middle ml-1 animate-pulse" />
    </span>
  );
}

function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-primary/20 blur-3xl animate-blob" />
      <div className="absolute top-1/3 -right-20 w-[28rem] h-[28rem] rounded-full bg-accent/20 blur-3xl animate-blob" style={{ animationDelay: "2s" }} />
      <div className="absolute -bottom-20 left-1/3 w-96 h-96 rounded-full bg-cyan/30 blur-3xl animate-blob" style={{ animationDelay: "4s" }} />
    </div>
  );
}

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      <img src={heroBg} alt="" width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover opacity-50" />
      <FloatingOrbs />
      <div className="absolute inset-0 mesh-bg" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm font-medium mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            Available for freelance projects
          </motion.div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
            Hi, I'm <span className="gradient-text">Your Name</span>
          </h1>
          <p className="mt-4 text-xl sm:text-2xl font-semibold text-foreground/80">
            Software Developer · Full Stack Web Developer · Web Security Enthusiast
          </p>

          <div className="mt-6 text-2xl sm:text-3xl font-bold h-12">
            <TypingEffect />
          </div>

          <p className="mt-6 max-w-xl text-muted-foreground text-lg">
            I build secure, scalable, and modern web applications with a focus on clean architecture, performance, and rock-solid authentication.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full gradient-primary text-primary-foreground font-semibold shadow-glow animate-gradient"
            >
              Hire Me <ArrowRight className="w-4 h-4" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass font-semibold hover:shadow-soft transition-shadow"
            >
              <Download className="w-4 h-4" /> View Work
            </motion.a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            {[
              { Icon: Github, href: "https://github.com" },
              { Icon: Linkedin, href: "https://linkedin.com" },
              { Icon: Mail, href: "mailto:hello@example.com" },
            ].map(({ Icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                whileHover={{ y: -4, scale: 1.1 }}
                className="w-11 h-11 rounded-full glass flex items-center justify-center text-foreground/80 hover:text-primary"
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative hidden lg:block"
        >
          <div className="relative aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 gradient-primary rounded-[2.5rem] blur-2xl opacity-40 animate-pulse-glow" />
            <div className="relative glass rounded-[2.5rem] p-8 shadow-glow h-full flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-xs text-muted-foreground">Currently building</div>
                  <div className="font-semibold mt-1">Secure REST APIs</div>
                </div>
                <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <div className="font-mono text-xs space-y-2 bg-background/50 rounded-xl p-4">
                <div><span className="text-purple">const</span> dev = {"{"}</div>
                <div className="pl-4">stack: <span className="text-primary">'Java + React'</span>,</div>
                <div className="pl-4">focus: <span className="text-primary">'Security'</span>,</div>
                <div className="pl-4">status: <span className="text-emerald-500">'Available'</span></div>
                <div>{"}"}</div>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center">
                {[
                  { v: "3+", l: "Years" },
                  { v: "25+", l: "Projects" },
                  { v: "15+", l: "Clients" },
                ].map((s) => (
                  <div key={s.l} className="p-2 rounded-xl bg-background/40">
                    <div className="text-lg font-bold gradient-text">{s.v}</div>
                    <div className="text-[10px] text-muted-foreground">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-6 -right-6 glass rounded-2xl p-3 shadow-glow"
            >
              <div className="text-2xl">⚛️</div>
            </motion.div>
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -bottom-4 -left-6 glass rounded-2xl p-3 shadow-glow"
            >
              <div className="text-2xl">🔒</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}