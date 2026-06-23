// Contact — social links column plus a simple message form (client-only demo).
import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Github, Linkedin, Instagram, Youtube, Send, CheckCircle2 } from "lucide-react";
import { Section } from "./Section";

const socials = [
  { Icon: Mail, label: "Email", href: "yalmarthisivasaisudheer@gmail.com" },
  { Icon: Github, label: "GitHub", href: "https://github.com/I-amSudheer" },
  { Icon: Linkedin, label: "LinkedIn", href: "linkedin.com/in/siva-sai-sudheer-yelamarthi-1b020a2bb" },
  { Icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { Icon: Youtube, label: "YouTube", href: "https://youtube.com" },
];

function Field({ label, ...props }) {
  return (
    <div>
      <label className="text-sm font-medium block mb-1.5">{label}</label>
      <input
        {...props}
        className="w-full px-4 py-3 rounded-xl bg-background/80 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
      />
    </div>
  );
}

export function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
    e.target.reset();
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's Build Something"
      description="Reach out for freelance work, collaborations, or just to say hi."
    >
      <div className="grid lg:grid-cols-[1fr_1.3fr] gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 shadow-soft space-y-3"
        >
          <h3 className="font-bold text-xl mb-4">Find me elsewhere</h3>
          {socials.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              whileHover={{ x: 6 }}
              transition={{ delay: i * 0.03 }}
              className="flex items-center gap-4 p-3 rounded-xl hover:bg-muted transition-colors group"
            >
              <div className="w-11 h-11 rounded-xl gradient-primary flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                <s.Icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <div className="font-semibold text-sm">{s.label}</div>
                <div className="text-xs text-muted-foreground">
                  {s.href.replace(/^https?:\/\//, "").replace("mailto:", "")}
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="glass rounded-3xl p-8 shadow-soft space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Your Name" name="name" placeholder="Jane Doe" required />
            <Field label="Email" name="email" type="email" placeholder="jane@example.com" required />
          </div>
          <Field label="Subject" name="subject" placeholder="Project inquiry" required />
          <div>
            <label className="text-sm font-medium block mb-1.5">Message</label>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Tell me about your project..."
              className="w-full px-4 py-3 rounded-xl bg-background/80 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition resize-none"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl gradient-primary text-primary-foreground font-semibold shadow-glow animate-gradient"
          >
            {sent ? (
              <>
                <CheckCircle2 className="w-5 h-5" /> Message Sent!
              </>
            ) : (
              <>
                Send Message <Send className="w-4 h-4" />
              </>
            )}
          </motion.button>
        </motion.form>
      </div>
    </Section>
  );
}