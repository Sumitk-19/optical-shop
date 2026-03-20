"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/**
 * FadeUp
 * ──────
 * Wraps children in a scroll-triggered fade + slide-up animation.
 * Use `delay` (seconds) to stagger siblings.
 */
export default function FadeUp({
  children,
  delay = 0,
  duration = 0.65,
  className = "",
  once = true,
  amount = 0.15,
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, amount });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * FadeIn
 * ──────
 * Simple opacity fade, no translate.
 */
export function FadeIn({
  children,
  delay = 0,
  duration = 0.55,
  className = "",
  once = true,
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, amount: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * StaggerContainer
 * ─────────────────
 * Wraps a list of children and staggers their entry animations.
 * Children should use `motion.div` or FadeUp with `custom` prop.
 */
export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.1,
  once = true,
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, amount: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * StaggerItem
 * ────────────
 * Must be a direct child of StaggerContainer.
 */
export function StaggerItem({ children, className = "" }) {
  return (
    <motion.div
      variants={{
        hidden:  { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
