import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, X } from "lucide-react";

const ThreeMonthsPopup = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="section-padding bg-background text-center">
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.08, boxShadow: "0 0 40px hsl(340 60% 65% / 0.4)" }}
          whileTap={{ scale: 0.92 }}
          onClick={() => setOpen(true)}
          className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-primary text-primary-foreground font-body font-semibold text-lg shadow-lg"
        >
          <Heart className="w-5 h-5 fill-current" />
          What a Beautiful 3 Months 💕
        </motion.button>
      </section>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ type: "spring", duration: 0.6, bounce: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="love-card max-w-lg w-full p-8 md:p-12 relative max-h-[80vh] overflow-y-auto"
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <motion.div
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="flex justify-center mb-6"
              >
                <Heart className="w-12 h-12 text-primary fill-primary" />
              </motion.div>

              <h3 className="text-2xl md:text-3xl font-display font-bold text-gradient-rose text-center mb-6">
                3 Months of Us 💖
              </h3>

              <div className="space-y-4 font-handwriting text-lg md:text-xl text-foreground leading-relaxed text-center">
                <p>
                  Saashi, it's been 3 months since you came into my life, and honestly — it feels like the universe finally did something right. 🌙
                </p>
                <p>
                  Every call, every late-night VC, every random "tu soja" fight — I wouldn't trade any of it for anything in the world. 💕
                </p>
                <p>
                  You make even the boring days feel magical. You make me want to be better, try harder, and love deeper — all because you deserve the absolute best.
                </p>
                <p>
                  These 3 months were just the beginning, baby. I'm here for every month, every year, every lifetime with you. 🥺❤️
                </p>
                <p className="text-primary font-display font-semibold text-xl pt-2">
                  Forever yours, always and forever 🌹✨
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ThreeMonthsPopup;
