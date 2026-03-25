import { motion } from "framer-motion";

const reasons = [
  { emoji: "✨", text: "Your smile lights up my entire world" },
  { emoji: "🌙", text: "You make even ordinary moments feel magical" },
  { emoji: "💫", text: "Your kindness inspires me every day" },
  { emoji: "🦋", text: "You give me butterflies, still, every single time" },
  { emoji: "🌸", text: "You understand me like no one else ever has" },
  { emoji: "💕", text: "You make me want to be a better person" },
  { emoji: "🌈", text: "Your laugh is my favorite sound in the world" },
  { emoji: "🍀", text: "I'm the luckiest person alive because of you" },
];

const ReasonsILoveYou = () => {
  return (
    <section className="section-padding romantic-gradient">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-bold text-center text-gradient-rose mb-16"
        >
          Reasons I Love You
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="love-card p-6 text-center cursor-default"
            >
              <span className="text-3xl mb-4 block">{reason.emoji}</span>
              <p className="text-foreground font-body font-medium leading-relaxed text-sm">
                {reason.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReasonsILoveYou;
