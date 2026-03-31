import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, X } from "lucide-react";
import FallingFlowers from "./FallingFlowers";

const REVEAL_DATE = new Date("2026-03-31T05:00:00+05:30");

const ThreeMonthsPopup = () => {
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const isRevealed = true; // TEMP PREVIEW - revert to: new Date() >= REVEAL_DATE

  return (
    <>
      {/* Fixed top banner */}
      <AnimatePresence>
        {!dismissed && !open && (
          <motion.div
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ type: "spring", duration: 0.8, bounce: 0.4 }}
            className="fixed top-0 left-0 right-0 z-40 flex items-center justify-center py-3 px-4 bg-primary/95 backdrop-blur-md shadow-lg"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setOpen(true)}
              className="inline-flex items-center gap-2 text-primary-foreground font-body font-semibold text-base md:text-lg"
            >
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.2, repeat: Infinity }}
              >
                <Heart className="w-5 h-5 fill-current" />
              </motion.span>
              What a Beautiful 3 Months 💕
            </motion.button>
            <button
              onClick={() => setDismissed(true)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Popup modal + falling flowers */}
      <AnimatePresence>
        {open && (
          <>
            <FallingFlowers />
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
                    again bby if you ask why i love you bby love is feeling nd i have that for you so kisi or ko nahi ho skta   i am connect3d with you , you happy w me matters hella alott. i love how you are your habbits personality senstiveness aka emotions. i dont love you in pressure i just feel very love with you. i love you hella so much<br />
                    i love our momemnts saashi nd i want to create more babe i just want to neglect that fact ki free hoke baat krni bby dolll love requires pain suffer nd many things its for sure so dont think its goonna be easy ki no pressure <br />
                    stress hogi babe but hold titght i am withyou always so no need to worry thodi stress hori h its gonna be alrr<br />
                    somedays goes wrong with wrong timing but dont worry this is lifr nd rltn ese hota rhega but hold tight dont tripp we are perfect arent we. we just need to get used to it dont worry babe i love you soo much for your everything baby dont question yourself ki why john loves me mere mai kya h. you can question me i will always give you points which will be true. i always keeep these things rreal where. you are perfect for me thats why i am loving you more nd more each day babe. plz dont worry bbyy everythings gonna be alrright saashuuu u hate this name righttt buttt i loveee youuu saashuuuuuuuu aka sushiiiiiiiii.
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
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ThreeMonthsPopup;
