import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center romantic-gradient overflow-hidden">
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <Heart className="w-16 h-16 mx-auto text-primary fill-primary animate-pulse-soft" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-gradient-rose leading-tight mb-6"
        >
          For My Beautiful Girlfriend ❤️
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg md:text-xl text-muted-foreground font-body font-light max-w-xl mx-auto"
        >
          Every love story is beautiful, but ours is my favorite.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="mt-12"
        >
          <a
            href="#our-story"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-body font-medium hover:opacity-90 transition-opacity"
          >
            Our Story
            <Heart className="w-4 h-4 fill-current" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
