// Content — section showcasing YouTube/Instagram content creation work.
import { motion } from "framer-motion";
import { Youtube, Instagram, Play, Users } from "lucide-react";
import { Section } from "./Section";

export function Content() {
  return (
    <Section id="content" eyebrow="Content" title="Content Creation Journey">
      <div className="grid lg:grid-cols-2 gap-8 items-stretch">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 shadow-soft"
        >
          <p className="text-lg text-foreground/80 leading-relaxed">
            I share my learning journey, software development concepts, programming tutorials, and
            technology insights through YouTube and Instagram. My goal is to learn consistently and
            grow together with the developer community.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="rounded-2xl p-5 bg-gradient-to-br from-red-500/10 to-pink-500/0 border border-border">
              <Youtube className="w-7 h-7 text-red-500 mb-3" />
              <div className="text-2xl font-bold">10K+</div>
              <div className="text-xs text-muted-foreground">Subscribers</div>
            </div>
            <div className="rounded-2xl p-5 bg-gradient-to-br from-purple-500/10 to-blue-500/0 border border-border">
              <Instagram className="w-7 h-7 text-purple mb-3" />
              <div className="text-2xl font-bold">5K+</div>
              <div className="text-xs text-muted-foreground">Followers</div>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="https://youtube.com"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-red-500 text-white font-semibold shadow-soft"
            >
              <Youtube className="w-5 h-5" /> Subscribe on YouTube
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="https://instagram.com"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full gradient-primary text-primary-foreground font-semibold shadow-glow"
            >
              <Instagram className="w-5 h-5" /> Follow on Instagram
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative glass rounded-3xl p-8 shadow-soft overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-blob" />
          <div className="relative space-y-4">
            {[
              { Icon: Play, title: "Spring Boot in 60 Minutes", meta: "12K views · YouTube" },
              { Icon: Users, title: "JWT vs Sessions: Explained", meta: "8.4K views · YouTube" },
              { Icon: Play, title: "Daily Dev Tips", meta: "3.2K likes · Instagram" },
            ].map((c, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 6 }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-background/60 border border-border"
              >
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shadow-glow">
                  <c.Icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold">{c.title}</div>
                  <div className="text-xs text-muted-foreground">{c.meta}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}