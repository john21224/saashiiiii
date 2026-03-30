import { motion } from "framer-motion";
import { useMemo } from "react";

const PETALS = ["🌸", "🌺", "🌹", "💐", "🌷", "🪷", "💮", "🏵️"];

const FallingFlowers = () => {
  const flowers = useMemo(
    () =>
      Array.from({ length: 30 }, (_, i) => ({
        id: i,
        emoji: PETALS[Math.floor(Math.random() * PETALS.length)],
        left: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 3 + Math.random() * 4,
        size: 16 + Math.random() * 20,
        sway: (Math.random() - 0.5) * 120,
      })),
    []
  );

  return (
    <div className="fixed inset-0 z-[60] pointer-events-none overflow-hidden">
      {flowers.map((f) => (
        <motion.span
          key={f.id}
          initial={{ y: -40, x: 0, opacity: 1, rotate: 0 }}
          animate={{
            y: "110vh",
            x: [0, f.sway, -f.sway / 2, f.sway / 3],
            opacity: [1, 1, 0.8, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: f.duration,
            delay: f.delay,
            ease: "easeIn",
          }}
          className="absolute"
          style={{
            left: `${f.left}%`,
            fontSize: f.size,
            top: -40,
          }}
        >
          {f.emoji}
        </motion.span>
      ))}
    </div>
  );
};

export default FallingFlowers;
