import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, X, Sparkles } from "lucide-react";
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
            className="fixed top-0 left-0 right-0 z-40 flex items-center justify-center py-3 px-4 shadow-lg"
            style={{
              background: "linear-gradient(135deg, hsl(340 60% 65%), hsl(350 70% 55%), hsl(330 50% 60%))",
            }}
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
              <motion.span
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-4 h-4" />
              </motion.span>
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
                className="max-w-lg w-full relative max-h-[80vh] overflow-y-auto rounded-3xl border border-border/30"
                style={{
                  background: "linear-gradient(170deg, hsl(340 40% 98%) 0%, hsl(340 80% 92%) 40%, hsl(280 30% 90%) 70%, hsl(30 40% 97%) 100%)",
                  boxShadow: "0 8px 60px hsl(340 60% 65% / 0.25), 0 0 0 1px hsl(340 60% 65% / 0.08), inset 0 1px 0 hsl(0 0% 100% / 0.5)",
                }}
              >
                {/* Decorative top accent */}
                <div
                  className="h-1.5 rounded-t-3xl"
                  style={{
                    background: "linear-gradient(90deg, hsl(340 70% 55%), hsl(340 60% 65%), hsl(350 50% 70%), hsl(340 60% 65%), hsl(340 70% 55%))",
                  }}
                />

                {/* Sparkle particles */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
                  {Array.from({ length: 18 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute rounded-full"
                      style={{
                        width: 3 + Math.random() * 4,
                        height: 3 + Math.random() * 4,
                        left: `${8 + Math.random() * 84}%`,
                        top: `${8 + Math.random() * 84}%`,
                        background: `hsl(340 ${50 + Math.random() * 30}% ${65 + Math.random() * 20}%)`,
                      }}
                      animate={{
                        opacity: [0, 0.7, 0],
                        scale: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 3,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>

                {/* Shimmer sweep */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(110deg, transparent 25%, hsl(340 60% 65% / 0.06) 37%, transparent 63%)",
                      backgroundSize: "200% 100%",
                    }}
                    animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
                  />
                </div>

                <div className="relative p-8 md:p-12">
                  <button
                    onClick={() => setOpen(false)}
                    className="absolute top-6 right-6 text-muted-foreground hover:text-foreground transition-colors bg-background/50 rounded-full p-1.5 backdrop-blur-sm"
                  >
                    <X className="w-4 h-4" />
                  </button>

                  {/* Animated hearts cluster */}
                  <div className="flex justify-center mb-6 gap-2">
                    {[0, 0.3, 0.6].map((delay, i) => (
                      <motion.div
                        key={i}
                        animate={{ scale: [1, 1.2, 1], y: [0, -4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay }}
                      >
                        <Heart
                          className="fill-primary text-primary"
                          style={{
                            width: i === 1 ? 36 : 22,
                            height: i === 1 ? 36 : 22,
                            opacity: i === 1 ? 1 : 0.6,
                            filter: "drop-shadow(0 2px 8px hsl(340 60% 65% / 0.4))",
                          }}
                        />
                      </motion.div>
                    ))}
                  </div>

                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl md:text-3xl font-display font-bold text-gradient-rose text-center mb-2"
                  >
                    3 Months of Us
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-center text-muted-foreground text-sm font-body mb-6"
                  >
                    💖 A letter from my heart to yours 💖
                  </motion.p>

                  {/* Decorative divider */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                    <Sparkles className="w-4 h-4 text-primary/40" />
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                  </div>

                  <div className="space-y-5 font-handwriting text-lg md:text-xl text-foreground leading-relaxed text-center">
                    {[
                      `Saashi, it's been 3 months since "uss bbyyy doll  and honestly  it is the best decision of my life tbhh i lovee youu merii jannnnnnn. 🌙`,
                      `bbyyy i lovee youu soo frickingg muchh srsllyy you are the bestt and perfectestt saashii donttt youu worry bout nothing. bby everything is goiing great and it will be bestttt trust the process`,
                      `even your studies and stuf will goo great babe trust yourself and ofccc meee in rltn bbyy . you are justtt perfectt for me saashi there is no reason for me to unlove you. bbyy i just need you by my side baaki to i can handle everything coz i lovee you more than anything`,
                      `ik some days get low butt bby dont loose your morale bbyy doll we are in rltn nd its bestttt we need to maintain our bestnessssss`,
                    ].map((text, i) => (
                      <motion.p
                        key={i}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + i * 0.15 }}
                        className="px-2"
                      >
                        {text}
                      </motion.p>
                    ))}

                    <motion.p
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.1 }}
                      className="px-2"
                    >
                      again bby if you ask why i love you bby love is feeling nd i have that for you so kisi or ko nahi ho skta   i am connect3d with you , you happy w me matters hella alott. i love how you are your habbits personality senstiveness aka emotions. i dont love you in pressure i just feel very love with you. i love you hella so much<br />
                      i love our momemnts saashi nd i want to create more babe i just want to neglect that fact ki free hoke baat krni bby dolll love requires pain suffer nd many things its for sure so dont think its goonna be easy ki no pressure <br />
                      stress hogi babe but hold titght i am withyou always so no need to worry thodi stress hori h its gonna be alrr<br />
                      somedays goes wrong with wrong timing but dont worry this is lifr nd rltn ese hota rhega but hold tight dont tripp we are perfect arent we. we just need to get used to it dont worry babe i love you soo much for your everything baby dont question yourself ki why john loves me mere mai kya h. you can question me i will always give you points which will be true. i always keeep these things rreal where. you are perfect for me thats why i am loving you more nd more each day babe. plz dont worry bbyy everythings gonna be alrright saashuuu u hate this name righttt buttt i loveee youuu saashuuuuuuuu aka sushiiiiiiiii.
                    </motion.p>

                    <motion.p
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.25 }}
                      className="px-2"
                    >
                      i am so happy in this rltn like happiest bby very lucky to find zzuuu meri jaanemannnnnnn.
                    </motion.p>

                    {/* Decorative divider */}
                    <div className="flex items-center gap-3 pt-2">
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                      <Heart className="w-3 h-3 text-primary/40 fill-primary/40" />
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                    </div>

                    <motion.p
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.4, type: "spring" }}
                      className="text-primary font-display font-semibold text-xl pt-1"
                    >
                      Forever yours, always and forever 🌹✨
                    </motion.p>
                  </div>
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
