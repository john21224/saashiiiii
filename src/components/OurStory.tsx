import { motion } from "framer-motion";
import { Heart, Calendar, Star } from "lucide-react";

const milestones = [
  {
    icon: Heart,
    title: "How We Met",
    date: "2025 march, 08",
    description: "I did something on daa perfect girl's story — and honestly, it was the best thing I ever did. That one little move changed everything. 💕",
  },
  {
    icon: Calendar,
    title: "Our First Date",
    date: "Coming Soon in May ✨",
    description: "It's still pending, but I already know it's gonna be the BEST date ever. Obviously. Because it's with you, Saashi. 🥰",
  },
  {
    icon: Star,
    title: "Favorite Memories",
    date: "Every Moment With You",
    description: "Everything with you — the calls, the VCs, even the fights — were the best because of how amazing you are, Saashi. Every second is my favorite. 💖",
  },
];

const OurStory = () => {
  return (
    <section id="our-story" className="section-padding bg-background">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-display font-bold text-center text-gradient-rose mb-16"
        >
          Our Story
        </motion.h2>

        <div className="relative">
          {/* Animated timeline line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute left-6 md:left-1/2 top-0 w-px bg-gradient-to-b from-primary/60 via-primary/30 to-transparent md:-translate-x-px"
          />

          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, filter: "blur(5px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.25, type: "spring", stiffness: 80 }}
              className={`relative flex items-start gap-6 mb-16 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Animated dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.25 + 0.3, type: "spring" }}
                className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1.5 mt-2 z-10"
                style={{ animation: "glow-pulse 3s ease-in-out infinite", animationDelay: `${index * 0.5}s` }}
              />

              {/* Content */}
              <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8 md:ml-auto"}`}>
                <motion.div
                  whileHover={{ y: -4, boxShadow: "0 8px 40px hsl(340 60% 65% / 0.15)" }}
                  transition={{ duration: 0.3 }}
                  className="love-card p-6"
                >
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <milestone.icon className="w-8 h-8 text-primary mb-3 fill-primary/20" />
                  </motion.div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-1">{milestone.title}</h3>
                  <p className="text-sm text-primary font-body font-medium mb-3">{milestone.date}</p>
                  <p className="text-muted-foreground font-body leading-relaxed">{milestone.description}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurStory;
