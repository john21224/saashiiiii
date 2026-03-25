import { motion } from "framer-motion";

const reasons = [
  { emoji: "✨", text: "You are literally perfect, Saashi. In every single way." },
  { emoji: "🥺", text: "You're so sensitive and I loveee that so much about you." },
  { emoji: "📚", text: "You overthink, so I get the chance to teach you with love 💕" },
  { emoji: "🦋", text: "You give me butterflies every time, every second." },
  { emoji: "🍅", text: "I love when you get angry — perfect little tomato 😤❤️" },
  { emoji: "💖", text: "Your prettiness, your voice, your everything is my favorite." },
  { emoji: "🤭", text: "Your overthinking means I get more time to talk to you hehe" },
  { emoji: "🍀", text: "I am the luckiest person alive because of you." },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.9, filter: "blur(5px)" },
  show: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", transition: { type: "spring", stiffness: 100 } },
};

const ReasonsILoveYou = () => {
  return (
    <section className="section-padding romantic-gradient overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-display font-bold text-center text-gradient-rose mb-16"
        >
          Reasons I Love You
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                y: -8,
                scale: 1.04,
                boxShadow: "0 12px 40px hsl(340 60% 65% / 0.18)",
                transition: { duration: 0.3 },
              }}
              className="love-card p-6 text-center cursor-default group"
            >
              <motion.span
                className="text-3xl mb-4 block"
                whileHover={{ scale: 1.3, rotate: [0, -15, 15, 0] }}
                transition={{ duration: 0.4 }}
              >
                {reason.emoji}
              </motion.span>
              <p className="text-foreground font-body font-medium leading-relaxed text-sm group-hover:text-primary transition-colors duration-300">
                {reason.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ReasonsILoveYou;
