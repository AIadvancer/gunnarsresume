import * as React from "react";
import useMeasure from "react-use-measure";
import { motion, useAnimationFrame, useMotionValue } from "motion/react";
import { cn } from "../../lib/cn";

type Logo = { src: string; alt: string; href?: string };

type InfiniteSliderProps = {
  logos: Logo[];
  speed?: number; // px/sec
  className?: string;
  itemClassName?: string;
};

export function InfiniteSlider({
  logos,
  speed = 70,
  className,
  itemClassName,
}: InfiniteSliderProps) {
  const x = useMotionValue(0);
  const [setRef, bounds] = useMeasure();
  const [wrapRef, wrapBounds] = useMeasure();

  useAnimationFrame((_, delta) => {
    const contentWidth = bounds.width || 0;
    if (!contentWidth) return;

    const current = x.get();
    const next = current - (speed * delta) / 1000;

    if (Math.abs(next) >= contentWidth) {
      x.set(0);
    } else {
      x.set(next);
    }
  });

  const rendered = (ariaHidden?: boolean) =>
    logos.map((logo, i) => {
      const Node = (
        <img
          src={logo.src}
          alt={logo.alt}
          className={cn(
            "h-7 w-auto opacity-80 brightness-0 invert transition-opacity duration-300 hover:opacity-100",
            itemClassName
          )}
          loading="lazy"
          decoding="async"
        />
      );

      return (
        <div
          key={`${logo.alt}-${i}-${ariaHidden ? "dup" : "main"}`}
          className="flex items-center px-6"
          aria-hidden={ariaHidden ? "true" : undefined}
        >
          {logo.href ? (
            <a
              href={logo.href}
              target="_blank"
              rel="noreferrer"
              className="block"
            >
              {Node}
            </a>
          ) : (
            Node
          )}
        </div>
      );
    });

  return (
    <div ref={wrapRef} className={cn("relative overflow-hidden", className)}>
      <motion.div style={{ x }} className="flex w-max">
        <div ref={setRef} className="flex shrink-0 items-center">
          {rendered(false)}
        </div>
        <div className="flex shrink-0 items-center">{rendered(true)}</div>
        {wrapBounds.width > (bounds.width || 0) * 1.2 ? (
          <div className="flex shrink-0 items-center">{rendered(true)}</div>
        ) : null}
      </motion.div>
    </div>
  );
}
