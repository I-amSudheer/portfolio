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
            I recently started my content creation journey on{" "}
            <span className="font-semibold text-primary">Synmath Tech</span>, where I explain Java
            programming concepts, software development tutorials, and share my learning journey.
            My goal is to learn consistently and grow together with the developer community.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="rounded-2xl p-5 bg-gradient-to-br from-red-500/10 to-pink-500/0 border border-border">
              <Youtube className="w-7 h-7 text-red-500 mb-3" />
              <div className="text-2xl font-bold">41</div>
              <div className="text-xs text-muted-foreground">YouTube Subscribers</div>
            </div>
            <div className="rounded-2xl p-5 bg-gradient-to-br from-purple-500/10 to-blue-500/0 border border-border">
              <Instagram className="w-7 h-7 text-purple mb-3" />
              <div className="text-2xl font-bold">64</div>
              <div className="text-xs text-muted-foreground">Instagram Followers</div>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="https://youtube.com/@learnwithsudheerandavinash?si=vehfL6xNFBUkH-Z8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-red-500 text-white font-semibold shadow-soft"
            >
              <Youtube className="w-5 h-5" /> Subscribe on YouTube
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="https://www.instagram.com/synmath_tech/"
              target="_blank"
              rel="noopener noreferrer"
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
              { Icon: Play, title: "Java Basics — Synmath Tech", meta: "YouTube · @learnwithsudheerandavinash" },
              { Icon: Users, title: "OOP Concepts Explained Simply", meta: "YouTube · Synmath Tech" },
              { Icon: Play, title: "Daily Java Tips & Snippets", meta: "Instagram · @synmath_tech" },
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