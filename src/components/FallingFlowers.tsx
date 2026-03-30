import { motion } from "framer-motion";
import { useMemo } from "react";

const PETALS = ["🌸", "🌺", "🌹", "💐", "🌷", "🪷", "💮", "🏵️", "🌻", "🌼"];

type Direction = "top" | "bottom" | "left" | "right";

const FallingFlowers = () => {
  const flowers = useMemo(() => {
    const dirs: Direction[] = ["top", "bottom", "left", "right"];
    return Array.from({ length: 60 }, (_, i) => {
      const dir = dirs[i % 4];
      return {
        id: i,
        emoji: PETALS[Math.floor(Math.random() * PETALS.length)],
        dir,
        pos: Math.random() * 100,
        delay: Math.random() * 2.5,
        duration: 3 + Math.random() * 4,
        size: 16 + Math.random() * 22,
        sway: (Math.random() - 0.5) * 80,
      };
    });
  }, []);

  const getAnimation = (f: (typeof flowers)[0]) => {
    switch (f.dir) {
      case "top":
        return {
          style: { left: `${f.pos}%`, top: -40 } as React.CSSProperties,
          animate: { y: "110vh", x: [0, f.sway, -f.sway / 2], rotate: [0, 180, 360], opacity: [1, 1, 0.8, 0] },
        };
      case "bottom":
        return {
          style: { left: `${f.pos}%`, bottom: -40 } as React.CSSProperties,
          animate: { y: "-110vh", x: [0, f.sway, -f.sway / 2], rotate: [0, -180, -360], opacity: [1, 1, 0.8, 0] },
        };
      case "left":
        return {
          style: { top: `${f.pos}%`, left: -40 } as React.CSSProperties,
          animate: { x: "110vw", y: [0, f.sway, -f.sway / 2], rotate: [0, 180, 360], opacity: [1, 1, 0.8, 0] },
        };
      case "right":
        return {
          style: { top: `${f.pos}%`, right: -40 } as React.CSSProperties,
          animate: { x: "-110vw", y: [0, f.sway, -f.sway / 2], rotate: [0, -180, -360], opacity: [1, 1, 0.8, 0] },
        };
    }
  };

  return (
    <div className="fixed inset-0 z-[60] pointer-events-none overflow-hidden">
      {flowers.map((f) => {
        const { style, animate } = getAnimation(f);
        return (
          <motion.span
            key={f.id}
            initial={{ opacity: 1 }}
            animate={animate}
            transition={{ duration: f.duration, delay: f.delay, ease: "easeIn" }}
            className="absolute"
            style={{ ...style, fontSize: f.size }}
          >
            {f.emoji}
          </motion.span>
        );
      })}
    </div>
  );
};

export default FallingFlowers;
