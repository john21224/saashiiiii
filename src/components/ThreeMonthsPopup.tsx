import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, X } from "lucide-react";

const REVEAL_DATE = new Date("2026-03-31T05:00:00+05:30");

const ThreeMonthsPopup = () => {
  const [open, setOpen] = useState(false);
  const isRevealed = new Date() >= REVEAL_DATE;

  if (!isRevealed) return null;

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
                  Saashi, it's been 3 months since "uss bbyyy doll  and honestly  it is the best decision of my life tbhh i lovee youu merii jannnnnnn. 🌙
                </p>
                <p>
                  bbyyy i lovee youu soo frickingg muchh srsllyy you are the bestt and perfectestt saashii donttt youu worry bout nothing. bby everything is goiing great and it will be bestttt trust the process
                </p>
                <p>
                  even your studies and stuf will goo great babe trust yourself and ofccc meee in rltn bbyy . you are justtt perfectt for me saashi there is no reason for me to unlove you. bbyy i just need you by my side baaki to i can handle everything coz i lovee you more than anything 
                </p>
                <p>
                  ik some days get low butt bby dont loose your morale bbyy doll we are in rltn nd its bestttt we need to maintain our bestnessssss
                </p>
                <p>
                  you are so perfect for me bby trust me i am here for evrythhing your happpiness sadness overthinking anger emo excited and everything
                </p>
                <p>
                  i am so happy in this rltn like happiest bby very lucky to find zzuuu meri jaanemannnnnnn.
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
