"use client";

import { motion } from "framer-motion";
import { Eye, Glasses, Sun, CircleDot, Wrench, Sparkles, Phone, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

const ICON_MAP = {
  Eye: Eye, Glasses: Glasses, Sun: Sun, CircleDot: CircleDot, Wrench: Wrench,
};

const ACCENTS = [
  { color: "#2563EB", light: "rgba(37,99,235,0.08)",  border: "rgba(37,99,235,0.15)", glow: "rgba(37,99,235,0.12)"  },
  { color: "#7C3AED", light: "rgba(124,58,237,0.08)", border: "rgba(124,58,237,0.15)", glow: "rgba(124,58,237,0.1)" },
  { color: "#0891B2", light: "rgba(8,145,178,0.08)",  border: "rgba(8,145,178,0.15)", glow: "rgba(8,145,178,0.1)"  },
  { color: "#059669", light: "rgba(5,150,105,0.08)",  border: "rgba(5,150,105,0.15)", glow: "rgba(5,150,105,0.1)"  },
  { color: "#DC2626", light: "rgba(220,38,38,0.08)",  border: "rgba(220,38,38,0.15)", glow: "rgba(220,38,38,0.1)"  },
];

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};
const cardAnim = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function ServicesSection() {
  const { services, business } = siteConfig;

  return (
    <section
      id="services"
      style={{
        background: "#F0F4FF",
        paddingTop: "96px",
        paddingBottom: "96px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle background texture */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "radial-gradient(rgba(37,99,235,0.06) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }} />
      <div style={{
        position: "absolute", top: "-120px", right: "-120px",
        width: "500px", height: "500px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "-80px", left: "-80px",
        width: "400px", height: "400px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(56,189,248,0.07) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      <div className="container-wide" style={{ position: "relative", zIndex: 1 }}>

        {/* ── Section header ── */}
        <motion.div
          className="text-center"
          style={{ marginBottom: "64px" }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Label */}
          <div style={{ marginBottom: "14px" }}>
            <span style={{
              display: "inline-flex", alignItems: "center", gap: "7px",
              padding: "5px 14px", borderRadius: "100px",
              background: "rgba(37,99,235,0.08)", border: "1px solid rgba(37,99,235,0.15)",
              fontSize: "11px", fontWeight: "700", letterSpacing: "0.1em",
              textTransform: "uppercase", color: "#2563EB",
              fontFamily: "var(--font-body)",
            }}>
              <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#2563EB", display: "inline-block" }} />
              Our Services
            </span>
          </div>

          {/* Title */}
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontWeight: "800",
            fontSize: "clamp(2rem, 3.8vw, 3rem)",
            letterSpacing: "-0.03em",
            lineHeight: "1.1",
            color: "#0F172A",
            marginBottom: "16px",
          }}>
            Complete Eye Care{" "}
            <span style={{
              background: "linear-gradient(135deg, #2563EB, #38BDF8)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              Under One Roof
            </span>
          </h2>

          {/* Subtitle */}
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "16px", lineHeight: "1.65",
            color: "#64748B", maxWidth: "480px", margin: "0 auto",
          }}>
            From testing to frames, we handle everything so you walk out seeing clearly.
          </p>
        </motion.div>

        {/* ── Cards grid ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
            marginBottom: "40px",
          }}
        >
          {services.map((service, i) => {
            const Icon   = ICON_MAP[service.icon] ?? Sparkles;
            const accent = ACCENTS[i % ACCENTS.length];
            return (
              <motion.div
                key={service.id}
                variants={cardAnim}
                style={{
                  background: "white",
                  borderRadius: "18px",
                  padding: "28px",
                  border: "1px solid rgba(15,23,42,0.07)",
                  boxShadow: "0 2px 16px rgba(15,23,42,0.05)",
                  cursor: "default",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.3s cubic-bezier(0.22,1,0.36,1)",
                }}
                whileHover={{
                  y: -6,
                  boxShadow: `0 20px 48px ${accent.glow}, 0 4px 16px rgba(15,23,42,0.08)`,
                  borderColor: accent.border,
                }}
              >
                {/* Top accent bar on hover */}
                <motion.div
                  style={{
                    position: "absolute", top: 0, left: "20px", right: "20px",
                    height: "2px", borderRadius: "0 0 4px 4px",
                    background: `linear-gradient(90deg, ${accent.color}, transparent)`,
                    opacity: 0,
                  }}
                  whileHover={{ opacity: 1 }}
                />

                {/* Icon + number row */}
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "20px" }}>
                  <div style={{
                    width: "50px", height: "50px", borderRadius: "14px", flexShrink: 0,
                    background: accent.light,
                    border: `1.5px solid ${accent.border}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <Icon size={22} style={{ color: accent.color }} strokeWidth={1.8} />
                  </div>
                  <span style={{
                    fontSize: "11px", fontWeight: "800", letterSpacing: "0.05em",
                    color: "rgba(15,23,42,0.12)", fontFamily: "var(--font-display)",
                  }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Title */}
                <h3 style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: "700",
                  fontSize: "16.5px",
                  color: "#0F172A",
                  marginBottom: "10px",
                  lineHeight: "1.3",
                  letterSpacing: "-0.01em",
                }}>
                  {service.title}
                </h3>

                {/* Description */}
                <p style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "13.5px",
                  lineHeight: "1.65",
                  color: "#64748B",
                  marginBottom: "20px",
                }}>
                  {service.description}
                </p>

                {/* Learn more link */}
                <motion.div
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "5px",
                    fontSize: "12.5px", fontWeight: "600",
                    color: accent.color, fontFamily: "var(--font-body)",
                    opacity: 0,
                  }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  Learn more
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.2, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.div>

              </motion.div>
            );
          })}
        </motion.div>

        {/* ── Bottom CTA strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
            padding: "24px 32px",
            borderRadius: "18px",
            background: "white",
            border: "1px solid rgba(37,99,235,0.1)",
            boxShadow: "0 4px 24px rgba(37,99,235,0.07)",
          }}>
            <div>
              <p style={{
                fontFamily: "var(--font-display)", fontWeight: "700",
                fontSize: "17px", color: "#0F172A", marginBottom: "4px", letterSpacing: "-0.01em",
              }}>
                Not sure which service you need?
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "13.5px", color: "#64748B" }}>
                Walk in anytime — our team will guide you for free.
              </p>
            </div>
            <motion.a
              href={`tel:${business.phone}`}
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "12px 24px", borderRadius: "12px",
                background: "linear-gradient(135deg, #2563EB, #1D4ED8)",
                boxShadow: "0 4px 20px rgba(37,99,235,0.4)",
                color: "white", fontSize: "14px", fontWeight: "600",
                fontFamily: "var(--font-body)", textDecoration: "none",
                whiteSpace: "nowrap",
              }}
              whileHover={{ scale: 1.04, y: -2, boxShadow: "0 8px 28px rgba(37,99,235,0.55)" }}
              whileTap={{ scale: 0.97 }}
            >
              <Phone size={15} />
              Call Us Free
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
