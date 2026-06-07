// Security — themed section highlighting security expertise pillars.
import { motion } from "framer-motion";
import { Shield, Lock, KeyRound, ServerCog, FileLock2, Users } from "lucide-react";

const pillars = [
  { Icon: Lock, title: "Authentication", desc: "Identity verification with secure password hashing & session strategies." },
  { Icon: Users, title: "Authorization", desc: "Permission systems that scale from solo apps to enterprise tenants." },
  { Icon: KeyRound, title: "JWT Security", desc: "Stateless tokens with rotation, refresh flows, and proper expiry." },
  { Icon: ServerCog, title: "Spring Security", desc: "Battle-tested filters and providers configured the right way." },
  { Icon: FileLock2, title: "Secure REST APIs", desc: "Input validation, CORS, rate-limiting, and least-privilege design." },
  { Icon: Shield, title: "Role-Based Access", desc: "Granular RBAC and policy enforcement across every endpoint." },
];

export function SecuritySection() {
  return (
    <section id="security" className="relative py-24 px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 mesh-bg opacity-60" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/15 rounded-full blur-3xl animate-blob" />
      <div
        className="absolute bottom-20 right-10 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-blob"
        style={{ animationDelay: "3s" }}
      />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-semibold tracking-widest uppercase text-primary mb-4">
            <Shield className="w-3.5 h-3.5" /> Security
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            <span className="gradient-text">Building Secure Applications</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Security isn't an afterthought — it's wired into every layer of every app I build.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="relative glass rounded-2xl p-7 shadow-soft hover:shadow-glow transition-all group"
            >
              <div className="absolute -top-5 -right-5 w-20 h-20 bg-primary/20 rounded-full blur-2xl group-hover:bg-primary/40 transition-colors" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center shadow-glow mb-5 group-hover:rotate-6 transition-transform">
                  <p.Icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div className="font-semibold text-lg mb-2">{p.title}</div>
                <div className="text-sm text-muted-foreground">{p.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}