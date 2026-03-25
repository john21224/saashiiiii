import { useEffect, useState } from "react";

interface Heart {
  id: number;
  left: number;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
  type: string;
}

const heartTypes = ["♥", "♡", "❤", "💕"];

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const generated: Heart[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 16 + 10,
      delay: Math.random() * 10,
      duration: Math.random() * 6 + 6,
      opacity: Math.random() * 0.25 + 0.05,
      type: heartTypes[Math.floor(Math.random() * heartTypes.length)],
    }));
    setHearts(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="absolute bottom-0 text-primary"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            opacity: heart.opacity,
            animation: `float-heart ${heart.duration}s ease-in ${heart.delay}s infinite`,
          }}
        >
          {heart.type}
        </span>
      ))}
    </div>
  );
};

export default FloatingHearts;
