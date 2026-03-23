"use client";

import { motion } from "framer-motion";
import { Star, Zap, Eye, IndianRupee, Grid2x2, Phone, MapPin } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

const ICON_MAP = { Star, Zap, Eye, IndianRupee, Grid: Grid2x2 };

const ACCENTS = [
  { color: "#2563EB", bg: "rgba(37,99,235,0.08)",  border: "rgba(37,99,235,0.15)"  },
  { color: "#7C3AED", bg: "rgba(124,58,237,0.08)", border: "rgba(124,58,237,0.15)" },
  { color: "#0891B2", bg: "rgba(8,145,178,0.08)",  border: "rgba(8,145,178,0.15)"  },
  { color: "#059669", bg: "rgba(5,150,105,0.08)",  border: "rgba(5,150,105,0.15)"  },
  { color: "#EA580C", bg: "rgba(234,88,12,0.08)",  border: "rgba(234,88,12,0.15)"  },
];

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } } };
const cardAnim = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function WhyUsSection() {
  const { whyUs, business } = siteConfig;

  return (
    <section
      id="why-us"
      style={{ background: "#ffffff", paddingTop: "96px", paddingBottom: "96px", position: "relative", overflow: "hidden" }}
    >
      <div style={{
        position: "absolute", top: "-100px", left: "-100px",
        width: "500px", height: "500px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(37,99,235,0.04) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div className="container-wide" style={{ position: "relative", zIndex: 1 }}>

        {/* Header */}
        <motion.div
          className="text-center"
          style={{ marginBottom: "56px" }}
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
              Why Choose Us
            </span>
          </div>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: "800",
            fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
            letterSpacing: "-0.03em", lineHeight: "1.1",
            color: "#0F172A", marginBottom: "14px",
          }}>
            Firozabad's{" "}
            <span style={{
              background: "linear-gradient(135deg, #2563EB, #38BDF8)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              Most Trusted
            </span>
            {" "}Optical Shop
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", color: "#64748B", maxWidth: "440px", margin: "0 auto", lineHeight: "1.65" }}>
            Five reasons thousands of customers keep coming back to us.
          </p>
        </motion.div>

        {/* Feature cards */}
        <motion.div
          variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "16px",
            marginBottom: "48px",
          }}
        >
          {whyUs.map((item, i) => {
            const Icon   = ICON_MAP[item.icon] ?? Star;
            const accent = ACCENTS[i % ACCENTS.length];
            return (
              <motion.div
                key={item.title}
                variants={cardAnim}
                style={{
                  background: "white", borderRadius: "18px",
                  padding: "28px 24px",
                  border: "1px solid rgba(15,23,42,0.07)",
                  boxShadow: "0 2px 14px rgba(15,23,42,0.05)",
                  textAlign: "center", cursor: "default",
                  position: "relative", overflow: "hidden",
                }}
                whileHover={{
                  y: -6,
                  boxShadow: `0 20px 48px rgba(15,23,42,0.1)`,
                  borderColor: accent.border,
                }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Bottom accent on hover */}
                <motion.div
                  style={{
                    position: "absolute", bottom: 0, left: "20%", right: "20%",
                    height: "2px", borderRadius: "2px 2px 0 0",
                    background: accent.color, opacity: 0,
                  }}
                  whileHover={{ opacity: 1 }}
                />

                {/* Icon */}
                <motion.div
                  style={{
                    width: "52px", height: "52px", borderRadius: "14px",
                    background: accent.bg, border: `1.5px solid ${accent.border}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto 16px",
                  }}
                  whileHover={{ scale: 1.1, rotate: [-4, 4, 0] }}
                  transition={{ duration: 0.4 }}
                >
                  <Icon size={22} style={{ color: accent.color }} strokeWidth={1.8} />
                </motion.div>

                <h3 style={{
                  fontFamily: "var(--font-display)", fontWeight: "700",
                  fontSize: "14.5px", color: "#0F172A",
                  letterSpacing: "-0.01em", marginBottom: "8px", lineHeight: "1.3",
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: "12.5px",
                  color: "#64748B", lineHeight: "1.6",
                }}>
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            position: "relative", overflow: "hidden",
            borderRadius: "24px", padding: "56px 48px",
            background: "linear-gradient(135deg, #070d1f 0%, #0d1f3d 50%, #0a1628 100%)",
            textAlign: "center",
          }}
        >
          {/* Decorative glows */}
          <div style={{
            position: "absolute", top: "-60px", right: "-60px",
            width: "280px", height: "280px", borderRadius: "50%",
            background: "radial-gradient(circle, rgba(56,189,248,0.15) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute", bottom: "-60px", left: "-60px",
            width: "240px", height: "240px", borderRadius: "50%",
            background: "radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />
          {/* Grid texture */}
          <div style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            backgroundImage: "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }} />

          <div style={{ position: "relative", zIndex: 1 }}>
            {/* Badge */}
            <div style={{ marginBottom: "20px" }}>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: "6px",
                padding: "6px 16px", borderRadius: "100px",
                background: "rgba(56,189,248,0.12)", border: "1px solid rgba(56,189,248,0.22)",
                fontSize: "12px", fontWeight: "600", color: "#38BDF8",
                fontFamily: "var(--font-body)",
              }}>
                ✨ Same Day Glasses Available
              </span>
            </div>

            <h2 style={{
              fontFamily: "var(--font-display)", fontWeight: "800",
              fontSize: "clamp(1.6rem, 3.2vw, 2.4rem)",
              letterSpacing: "-0.03em", lineHeight: "1.15",
              color: "white", marginBottom: "14px",
            }}>
              Visit Today & Get Your Glasses{" "}
              <span style={{ color: "#38BDF8" }}>Same Day!</span>
            </h2>

            <p style={{
              fontFamily: "var(--font-body)", fontSize: "15px",
              color: "rgba(255,255,255,0.5)", marginBottom: "32px",
              maxWidth: "460px", margin: "0 auto 32px", lineHeight: "1.65",
            }}>
              Walk in for a free eye checkup and walk out with perfect vision.
            </p>

            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <motion.a
                href={`tel:${business.phone}`}
                style={{
                  display: "inline-flex", alignItems: "center", gap: "9px",
                  padding: "14px 28px", borderRadius: "12px",
                  background: "linear-gradient(135deg, #2563EB, #1D4ED8)",
                  boxShadow: "0 4px 24px rgba(37,99,235,0.5)",
                  color: "white", fontSize: "15px", fontWeight: "600",
                  fontFamily: "var(--font-body)", textDecoration: "none",
                }}
                whileHover={{ scale: 1.04, y: -2, boxShadow: "0 8px 32px rgba(37,99,235,0.65)" }}
                whileTap={{ scale: 0.97 }}
              >
                <Phone size={16} /> Call Now
              </motion.a>
              <motion.a
                href="#contact"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "9px",
                  padding: "14px 28px", borderRadius: "12px",
                  background: "rgba(255,255,255,0.08)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.16)",
                  color: "rgba(255,255,255,0.9)", fontSize: "15px", fontWeight: "600",
                  fontFamily: "var(--font-body)", textDecoration: "none",
                }}
                whileHover={{ background: "rgba(255,255,255,0.13)", borderColor: "rgba(56,189,248,0.4)", y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <MapPin size={16} /> Get Directions
              </motion.a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
