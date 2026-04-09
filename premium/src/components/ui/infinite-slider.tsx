import * as React from "react";
import useMeasure from "react-use-measure";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useVelocity,
} from "motion/react";
import { cn } from "../../lib/cn";

type SliderItem = {
  // If src is provided → render image logo
  src?: string;
  // Used for alt text; if no src, this is also the pill label
  alt: string;
  href?: string;
};

type InfiniteSliderProps = {
  items: SliderItem[];
  speed?: number; // px/sec
  speedBoostOnScroll?: boolean;
  className?: string;
  itemClassName?: string;
};

export function InfiniteSlider({
  items,
  speed = 70,
  speedBoostOnScroll = false,
  className,
  itemClassName,
}: InfiniteSliderProps) {
  const x = useMotionValue(0);
  const [setRef, bounds] = useMeasure();
  const [wrapRef, wrapBounds] = useMeasure();
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(velocity, { stiffness: 140, damping: 24 });

  useAnimationFrame((_, delta) => {
    const contentWidth = bounds.width || 0;
    if (!contentWidth) return;

    const velocityBoost = speedBoostOnScroll
      ? Math.min(120, Math.abs(smoothVelocity.get()) * 0.08)
      : 0;
    const effectiveSpeed = speed + velocityBoost;

    const current = x.get();
    const next = current - (effectiveSpeed * delta) / 1000;

    if (Math.abs(next) >= contentWidth) x.set(0);
    else x.set(next);
  });

  const renderItem = (it: SliderItem) => {
    if (it.src) {
      const node = (
        <img
          src={it.src}
          alt={it.alt}
          className={cn(
            "h-7 w-auto opacity-80 brightness-0 invert transition-opacity duration-300 hover:opacity-100",
            itemClassName
          )}
          loading="lazy"
          decoding="async"
        />
      );

      return it.href ? (
        <a href={it.href} target="_blank" rel="noreferrer" className="block">
          {node}
        </a>
      ) : (
        node
      );
    }

    const pill = (
      <span
        className={cn(
          "inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2",
          "text-sm text-white/75 backdrop-blur-md transition-colors duration-300 hover:bg-white/10 hover:text-white",
          itemClassName
        )}
      >
        {it.alt}
      </span>
    );

    return it.href ? (
      <a href={it.href} target="_blank" rel="noreferrer" className="block">
        {pill}
      </a>
    ) : (
      pill
    );
  };

  const rendered = (ariaHidden?: boolean) =>
    items.map((it, i) => (
      <div
        key={`${it.alt}-${i}-${ariaHidden ? "dup" : "main"}`}
        className="flex items-center px-3"
        aria-hidden={ariaHidden ? "true" : undefined}
      >
        {renderItem(it)}
      </div>
    ));

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
