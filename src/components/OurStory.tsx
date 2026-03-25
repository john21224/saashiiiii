import { motion } from "framer-motion";
import { Heart, Calendar, Star } from "lucide-react";

const milestones = [
  {
    icon: Heart,
    title: "How We Met",
    date: "March 8, 2025",
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-bold text-center text-gradient-rose mb-16"
        >
          Our Story
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex items-start gap-6 mb-16 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1.5 mt-2 z-10" />

              {/* Content */}
              <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8 md:ml-auto"}`}>
                <div className="love-card p-6">
                  <milestone.icon className="w-8 h-8 text-primary mb-3 fill-primary/20" />
                  <h3 className="text-xl font-display font-semibold text-foreground mb-1">{milestone.title}</h3>
                  <p className="text-sm text-primary font-body font-medium mb-3">{milestone.date}</p>
                  <p className="text-muted-foreground font-body leading-relaxed">{milestone.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurStory;
