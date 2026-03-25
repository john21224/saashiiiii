import { useMemo } from "react";

const FloatingHearts = () => {
  const hearts = useMemo(
    () =>
      Array.from({ length: 8 }, (_, i) => ({
        id: i,
        left: (i * 12.5) + Math.random() * 8,
        size: 12 + (i % 3) * 4,
        delay: i * 1.5,
        duration: 8 + (i % 3) * 2,
        opacity: 0.08 + (i % 3) * 0.05,
      })),
    []
  );

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="absolute bottom-0 text-primary will-change-transform"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            opacity: heart.opacity,
            animation: `float-heart ${heart.duration}s ease-in ${heart.delay}s infinite`,
          }}
        >
          ♥
        </span>
      ))}
    </div>
  );
};

export default FloatingHearts;
