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
