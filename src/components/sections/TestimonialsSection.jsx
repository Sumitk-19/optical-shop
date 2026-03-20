"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export default function TestimonialsSection() {
  const { testimonials, business } = siteConfig;
  const [current,  setCurrent]  = useState(0);
  const [direction, setDirection] = useState(1);
  const [autoplay, setAutoplay]  = useState(true);

  const go = useCallback((dir) => {
    setDirection(dir);
    setCurrent((c) => (c + dir + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    if (!autoplay) return;
    const t = setInterval(() => go(1), 4500);
    return () => clearInterval(t);
  }, [autoplay, go]);

  const variants = {
    enter:  (d) => ({ opacity: 0, x: d > 0 ? 40 : -40 }),
    center: { opacity: 1, x: 0, transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] } },
    exit:   (d) => ({ opacity: 0, x: d > 0 ? -40 : 40, transition: { duration: 0.28 } }),
  };

  const stats = [
    { value: business.rating + "★", label: "Average Rating" },
    { value: business.totalCustomers, label: "Happy Customers" },
    { value: "5★", label: "Google Reviews" },
  ];

  return (
    <section
      id="reviews"
      style={{ background: "#F8FAFF", paddingTop: "96px", paddingBottom: "96px", position: "relative", overflow: "hidden" }}
    >
      {/* Bg rings */}
      {[280, 420, 560].map((size, i) => (
        <div key={i} style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%,-50%)",
          width: `${size}px`, height: `${size}px`, borderRadius: "50%",
          border: "1px solid rgba(37,99,235,0.05)",
          pointerEvents: "none",
        }} />
      ))}

      <div className="container-wide" style={{ position: "relative", zIndex: 1 }}>

        {/* Header */}
        <motion.div
          className="text-center"
          style={{ marginBottom: "48px" }}
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div style={{ marginBottom: "14px" }}>
            <span style={{
              display: "inline-flex", alignItems: "center", gap: "7px",
              padding: "5px 14px", borderRadius: "100px",
              background: "rgba(37,99,235,0.07)", border: "1px solid rgba(37,99,235,0.14)",
              fontSize: "11px", fontWeight: "700", letterSpacing: "0.1em",
              textTransform: "uppercase", color: "#2563EB", fontFamily: "var(--font-body)",
            }}>
              <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#2563EB" }} />
              Testimonials
            </span>
          </div>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: "800",
            fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
            letterSpacing: "-0.03em", lineHeight: "1.1",
            color: "#0F172A", marginBottom: "14px",
          }}>
            What Our{" "}
            <span style={{
              background: "linear-gradient(135deg, #2563EB, #38BDF8)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              Customers Say
            </span>
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", color: "#64748B", maxWidth: "440px", margin: "0 auto", lineHeight: "1.65" }}>
            Real reviews from real people who walked in and walked out smiling.
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          style={{ display: "flex", justifyContent: "center", gap: "0", marginBottom: "56px" }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.55 }}
        >
          <div style={{
            display: "inline-flex", borderRadius: "16px",
            background: "white", border: "1px solid rgba(15,23,42,0.08)",
            boxShadow: "0 4px 24px rgba(15,23,42,0.06)",
            overflow: "hidden",
          }}>
            {stats.map(({ value, label }, i) => (
              <div key={label} style={{
                padding: "20px 40px", textAlign: "center",
                borderRight: i < stats.length - 1 ? "1px solid rgba(15,23,42,0.07)" : "none",
              }}>
                <p style={{
                  fontFamily: "var(--font-display)", fontWeight: "800",
                  fontSize: "28px", letterSpacing: "-0.03em",
                  background: "linear-gradient(135deg, #2563EB, #38BDF8)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                  marginBottom: "4px",
                }}>
                  {value}
                </p>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "#94A3B8", fontWeight: "500" }}>
                  {label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Carousel */}
        <div
          style={{ maxWidth: "680px", margin: "0 auto" }}
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          {/* Card */}
          <div style={{ position: "relative", marginBottom: "28px" }}>
            {/* Quote icon */}
            <div style={{
              position: "absolute", top: "-18px", left: "32px", zIndex: 10,
              width: "44px", height: "44px", borderRadius: "12px",
              background: "linear-gradient(135deg, #2563EB, #38BDF8)",
              boxShadow: "0 4px 20px rgba(37,99,235,0.4)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <Quote size={18} color="white" fill="white" />
            </div>

            <div style={{
              background: "white", borderRadius: "20px",
              padding: "44px 36px 32px",
              border: "1px solid rgba(37,99,235,0.1)",
              boxShadow: "0 8px 40px rgba(37,99,235,0.08)",
              minHeight: "200px",
              overflow: "hidden", position: "relative",
            }}>
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={current}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                >
                  {/* Stars */}
                  <div style={{ display: "flex", gap: "3px", marginBottom: "16px" }}>
                    {[...Array(testimonials[current].rating)].map((_, i) => (
                      <Star key={i} size={17} fill="#FBBF24" color="#FBBF24" />
                    ))}
                  </div>

                  {/* Review */}
                  <p style={{
                    fontFamily: "var(--font-body)", fontSize: "17px",
                    lineHeight: "1.7", color: "#334155",
                    fontWeight: "500", marginBottom: "24px",
                    fontStyle: "italic",
                  }}>
                    "{testimonials[current].review}"
                  </p>

                  {/* Author */}
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{
                      width: "42px", height: "42px", borderRadius: "12px", flexShrink: 0,
                      background: "linear-gradient(135deg, #2563EB, #38BDF8)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "white", fontWeight: "700", fontSize: "14px",
                    }}>
                      {testimonials[current].initials}
                    </div>
                    <div>
                      <p style={{ fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "15px", color: "#0F172A" }}>
                        {testimonials[current].name}
                      </p>
                      <p style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "#94A3B8" }}>
                        {testimonials[current].role}
                      </p>
                    </div>
                    {/* Verified badge */}
                    <div style={{ marginLeft: "auto" }}>
                      <span style={{
                        display: "inline-flex", alignItems: "center", gap: "4px",
                        padding: "4px 10px", borderRadius: "8px",
                        background: "rgba(5,150,105,0.08)", border: "1px solid rgba(5,150,105,0.15)",
                        fontSize: "11px", fontWeight: "600", color: "#059669",
                        fontFamily: "var(--font-body)",
                      }}>
                        ✓ Verified
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Controls */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 4px" }}>
            {/* Dots */}
            <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  style={{
                    width: i === current ? "24px" : "7px",
                    height: "7px", borderRadius: "4px",
                    background: i === current ? "#2563EB" : "rgba(37,99,235,0.2)",
                    border: "none", cursor: "pointer",
                    transition: "all 0.3s cubic-bezier(0.22,1,0.36,1)",
                    padding: 0,
                  }}
                />
              ))}
            </div>
            {/* Arrow buttons */}
            <div style={{ display: "flex", gap: "8px" }}>
              {[{ dir: -1, Icon: ChevronLeft }, { dir: 1, Icon: ChevronRight }].map(({ dir, Icon }) => (
                <motion.button
                  key={dir}
                  onClick={() => go(dir)}
                  style={{
                    width: "40px", height: "40px", borderRadius: "12px",
                    background: "white",
                    border: "1px solid rgba(37,99,235,0.15)",
                    color: "#2563EB", cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    boxShadow: "0 2px 8px rgba(15,23,42,0.06)",
                  }}
                  whileHover={{ background: "#2563EB", color: "#ffffff", scale: 1.05, boxShadow: "0 4px 16px rgba(37,99,235,0.3)" }}
                  whileTap={{ scale: 0.94 }}
                >
                  <Icon size={17} />
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
