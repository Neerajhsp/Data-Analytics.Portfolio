import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CursorFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setVisible(true);

      const target = e.target as HTMLElement;
      setIsPointer(
        !!target.closest("a, button, input, textarea, select, [role='button']")
      );
    };

    const hideCursor = () => setVisible(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseleave", hideCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseleave", hideCursor);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 z-[90] pointer-events-none mix-blend-difference hidden md:block"
      animate={{
        x: position.x - (isPointer ? 20 : 6),
        y: position.y - (isPointer ? 20 : 6),
        opacity: visible ? 1 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 40,
        mass: 0.4,
      }}
    >
      <div
        className={`rounded-full bg-white transition-all duration-200 ${
          isPointer ? "w-10 h-10" : "w-3 h-3"
        }`}
      />
    </motion.div>
  );
}