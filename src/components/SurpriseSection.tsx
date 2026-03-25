import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Gift, Sparkles } from "lucide-react";

const SurpriseSection = () => {
  const [revealed, setRevealed] = useState(false);

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-display font-bold text-gradient-rose mb-8"
        >
          A Little Surprise
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground font-body mb-10"
        >
          I have something special just for you...
        </motion.p>

        <AnimatePresence mode="wait">
          {!revealed ? (
            <motion.button
              key="button"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.08,
                boxShadow: "0 0 40px hsl(340 60% 65% / 0.4)",
              }}
              whileTap={{ scale: 0.92 }}
              exit={{ opacity: 0, scale: 0.5, rotate: 20 }}
              onClick={() => setRevealed(true)}
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-primary text-primary-foreground font-body font-semibold text-lg shadow-lg transition-shadow"
              style={{ animation: "glow-pulse 2s ease-in-out infinite" }}
            >
              <Gift className="w-5 h-5" />
              Click Me ❤️
            </motion.button>
          ) : (
            <motion.div
              key="message"
              initial={{ opacity: 0, scale: 0.3, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: "spring", duration: 0.8, bounce: 0.4 }}
              className="love-card p-10 md:p-14 relative overflow-hidden"
            >
              {/* Celebration sparkles */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-primary/40"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1.2, 0],
                    x: [0, (Math.random() - 0.5) * 200],
                    y: [0, (Math.random() - 0.5) * 200],
                  }}
                  transition={{ duration: 1.5, delay: i * 0.1 }}
                  style={{ top: "50%", left: "50%" }}
                >
                  <Sparkles className="w-4 h-4" />
                </motion.div>
              ))}

              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                >
                  <Heart className="w-16 h-16 mx-auto text-primary fill-primary mb-6" />
                </motion.div>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="font-handwriting text-2xl md:text-3xl text-foreground leading-relaxed"
              >
                You are the most amazing person I've ever known.
                I fall in love with you more every single day.
                Thank you for being you.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, type: "spring" }}
                className="mt-6 text-primary font-display text-xl font-semibold"
              >
                I love you to the moon and back 🌙✨
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SurpriseSection;
