import * as React from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

/**
 * Subtle premium cursor glow that makes the page feel "alive".
 * Disabled on touch devices and for reduced-motion users.
 */
export function CursorGlow() {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const sx = useSpring(x, { stiffness: 180, damping: 28 });
  const sy = useSpring(y, { stiffness: 180, damping: 28 });

  const [enabled, setEnabled] = React.useState(false);

  React.useEffect(() => {
    const canHover = window.matchMedia?.("(hover: hover)")?.matches ?? true;
    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
    setEnabled(canHover && !reduceMotion);

    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    if (canHover && !reduceMotion) {
      window.addEventListener("pointermove", onMove, { passive: true });
    }
    return () => window.removeEventListener("pointermove", onMove);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-0"
      style={{ x: sx, y: sy }}
    >
      <div
        className="-translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          width: 520,
          height: 520,
          background:
            "radial-gradient(circle, rgba(250,147,250,0.18), rgba(201,103,232,0.10), rgba(152,58,214,0.00) 70%)",
        }}
      />
    </motion.div>
  );
}
