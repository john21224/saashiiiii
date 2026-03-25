import { motion } from "framer-motion";

const LoveLetter = () => {
  return (
    <section className="section-padding romantic-gradient">
      <div className="max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-bold text-center text-gradient-rose mb-12"
        >
          A Letter For You
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30, rotate: -1 }}
          whileInView={{ opacity: 1, y: 0, rotate: -1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="love-card p-8 md:p-12 transform -rotate-1"
        >
          <div className="font-handwriting text-lg md:text-xl leading-loose text-foreground/80 space-y-6">
            <p>My Dearest,</p>
            <p>
              From the moment you walked into my life, everything changed for the better. 
              You brought colors I never knew existed, melodies I'd never heard, and a 
              warmth that I never want to live without.
            </p>
            <p>
              Every day with you feels like a gift I don't deserve but will never stop 
              being grateful for. You are my best friend, my greatest adventure, and 
              the love of my life.
            </p>
            <p>
              I promise to love you in your darkest hours and celebrate you in your 
              brightest. You are everything to me — today, tomorrow, and always.
            </p>
            <p className="text-right mt-8">
              Forever yours,<br />
              <span className="text-primary text-2xl">With all my love ❤️</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LoveLetter;
