import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Gift } from "lucide-react";

const SurpriseSection = () => {
  const [revealed, setRevealed] = useState(false);

  return (
    <section className="section-padding bg-background">
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setRevealed(true)}
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-primary text-primary-foreground font-body font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <Gift className="w-5 h-5" />
              Click Me ❤️
            </motion.button>
          ) : (
            <motion.div
              key="message"
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: "spring", duration: 0.8 }}
              className="love-card p-10 md:p-14"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
              >
                <Heart className="w-16 h-16 mx-auto text-primary fill-primary mb-6 animate-pulse-soft" />
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="font-handwriting text-2xl md:text-3xl text-foreground leading-relaxed"
              >
                You are the most amazing person I've ever known. 
                I fall in love with you more every single day. 
                Thank you for being you. 
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
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
