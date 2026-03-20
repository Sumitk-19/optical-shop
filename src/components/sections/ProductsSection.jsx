"use client";

import { motion } from "framer-motion";
import { Tag, Eye, Sun, Glasses } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

const BADGE_STYLES = {
  blue:   { bg: "rgba(37,99,235,0.1)",   color: "#2563EB",  border: "rgba(37,99,235,0.2)"  },
  green:  { bg: "rgba(5,150,105,0.1)",   color: "#059669",  border: "rgba(5,150,105,0.2)"  },
  orange: { bg: "rgba(234,88,12,0.1)",   color: "#EA580C",  border: "rgba(234,88,12,0.2)"  },
  purple: { bg: "rgba(124,58,237,0.1)",  color: "#7C3AED",  border: "rgba(124,58,237,0.2)" },
};

// SVG illustration per product — clean vector glasses art
const PRODUCT_ILLUSTRATIONS = {
  "stylish-frames": (
    <svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
      <rect width="320" height="180" fill="#EEF2FF"/>
      {/* Decorative circles */}
      <circle cx="260" cy="30" r="60" fill="rgba(37,99,235,0.06)"/>
      <circle cx="60" cy="150" r="40" fill="rgba(56,189,248,0.08)"/>
      {/* Frame 1 - large center */}
      <rect x="95" y="62" width="130" height="56" rx="28" fill="none" stroke="#2563EB" strokeWidth="3.5"/>
      <rect x="108" y="74" width="104" height="32" rx="16" fill="rgba(37,99,235,0.08)"/>
      {/* Bridge */}
      <path d="M160 80 L160 100" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round"/>
      {/* Temple arms */}
      <path d="M95 90 L55 86" stroke="#2563EB" strokeWidth="3" strokeLinecap="round"/>
      <path d="M225 90 L265 86" stroke="#2563EB" strokeWidth="3" strokeLinecap="round"/>
      {/* Frame 2 - small top left */}
      <rect x="32" y="38" width="70" height="32" rx="16" fill="none" stroke="#7C3AED" strokeWidth="2.5"/>
      <rect x="40" y="44" width="54" height="20" rx="10" fill="rgba(124,58,237,0.08)"/>
      {/* Frame 3 - small bottom right */}
      <rect x="218" y="110" width="70" height="32" rx="16" fill="none" stroke="#EA580C" strokeWidth="2.5"/>
      <rect x="226" y="116" width="54" height="20" rx="10" fill="rgba(234,88,12,0.08)"/>
      {/* Label */}
      <text x="160" y="162" textAnchor="middle" fill="#94A3B8" fontSize="11" fontFamily="sans-serif">Stylish Frames Collection</text>
    </svg>
  ),
  "sunglasses": (
    <svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
      <rect width="320" height="180" fill="#0F172A"/>
      {/* Glow blobs */}
      <ellipse cx="100" cy="90" rx="90" ry="60" fill="rgba(56,189,248,0.07)"/>
      <ellipse cx="220" cy="90" rx="90" ry="60" fill="rgba(37,99,235,0.07)"/>
      {/* Left lens */}
      <rect x="40" y="58" width="100" height="64" rx="32" fill="rgba(15,23,42,0.9)" stroke="#38BDF8" strokeWidth="2.5"/>
      <rect x="52" y="68" width="76" height="44" rx="22" fill="rgba(56,189,248,0.12)"/>
      {/* Shine */}
      <path d="M58 74 Q72 70 80 78" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Right lens */}
      <rect x="180" y="58" width="100" height="64" rx="32" fill="rgba(15,23,42,0.9)" stroke="#38BDF8" strokeWidth="2.5"/>
      <rect x="192" y="68" width="76" height="44" rx="22" fill="rgba(56,189,248,0.12)"/>
      <path d="M198 74 Q212 70 220 78" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Bridge */}
      <path d="M140 82 Q160 76 180 82" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      {/* Temple arms */}
      <path d="M40 88 L14 84" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M280 88 L306 84" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round"/>
      {/* UV badge */}
      <rect x="122" y="142" width="76" height="22" rx="11" fill="rgba(56,189,248,0.15)" stroke="rgba(56,189,248,0.3)" strokeWidth="1"/>
      <text x="160" y="157" textAnchor="middle" fill="#38BDF8" fontSize="10" fontFamily="sans-serif" fontWeight="600">UV Protected</text>
    </svg>
  ),
  "kids-eyewear": (
    <svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
      <rect width="320" height="180" fill="#FFF7ED"/>
      {/* Fun circles bg */}
      <circle cx="40" cy="40" r="30" fill="rgba(239,68,68,0.08)"/>
      <circle cx="280" cy="140" r="35" fill="rgba(59,130,246,0.08)"/>
      <circle cx="290" cy="30" r="20" fill="rgba(168,85,247,0.08)"/>
      {/* Left lens — round fun shape */}
      <circle cx="108" cy="88" r="46" fill="none" stroke="#EF4444" strokeWidth="3.5"/>
      <circle cx="108" cy="88" r="34" fill="rgba(239,68,68,0.08)"/>
      {/* Right lens */}
      <circle cx="212" cy="88" r="46" fill="none" stroke="#3B82F6" strokeWidth="3.5"/>
      <circle cx="212" cy="88" r="34" fill="rgba(59,130,246,0.08)"/>
      {/* Bridge */}
      <path d="M154 84 Q160 80 166 84" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" fill="none"/>
      {/* Temple arms */}
      <path d="M62 88 L30 84" stroke="#EF4444" strokeWidth="3" strokeLinecap="round"/>
      <path d="M258 88 L290 84" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round"/>
      {/* Star decorations */}
      <text x="108" y="94" textAnchor="middle" fill="#EF4444" fontSize="18">★</text>
      <text x="212" y="94" textAnchor="middle" fill="#3B82F6" fontSize="18">★</text>
      {/* Label */}
      <text x="160" y="158" textAnchor="middle" fill="#94A3B8" fontSize="11" fontFamily="sans-serif">Kids Eyewear Collection</text>
    </svg>
  ),
};

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const cardAnim = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function ProductsSection() {
  const { products } = siteConfig;

  return (
    <section
      id="products"
      style={{ background: "#ffffff", paddingTop: "96px", paddingBottom: "96px", position: "relative", overflow: "hidden" }}
    >
      {/* Bg decoration */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%,-50%)",
        width: "800px", height: "800px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(37,99,235,0.025) 0%, transparent 70%)",
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
              Our Collection
            </span>
          </div>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: "800",
            fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
            letterSpacing: "-0.03em", lineHeight: "1.1",
            color: "#0F172A", marginBottom: "14px",
          }}>
            Affordable Prices,{" "}
            <span style={{
              background: "linear-gradient(135deg, #2563EB, #38BDF8)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              Premium Quality
            </span>
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", color: "#64748B", maxWidth: "440px", margin: "0 auto", lineHeight: "1.65" }}>
            Handpicked frames and eyewear for every style, age, and budget.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", marginBottom: "36px" }}
        >
          {products.map((product) => {
            const badge = BADGE_STYLES[product.badgeColor] || BADGE_STYLES.blue;
            const illustration = PRODUCT_ILLUSTRATIONS[product.id];
            return (
              <motion.div
                key={product.id}
                variants={cardAnim}
                style={{
                  background: "white", borderRadius: "20px", overflow: "hidden",
                  border: "1px solid rgba(15,23,42,0.08)",
                  boxShadow: "0 2px 20px rgba(15,23,42,0.06)",
                  cursor: "pointer",
                }}
                whileHover={{ y: -8, boxShadow: "0 24px 56px rgba(15,23,42,0.13)", borderColor: "rgba(37,99,235,0.18)" }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Illustration area */}
                <div style={{ position: "relative", height: "200px", overflow: "hidden" }}>
                  {illustration || (
                    <div style={{ width: "100%", height: "100%", background: "#EEF2FF", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Glasses size={48} style={{ color: "#C7D2FE" }} />
                    </div>
                  )}
                  {/* Badge */}
                  <div style={{
                    position: "absolute", top: "12px", left: "12px",
                    display: "inline-flex", alignItems: "center", gap: "5px",
                    padding: "5px 10px", borderRadius: "8px",
                    background: badge.bg, border: `1px solid ${badge.border}`,
                    color: badge.color, fontSize: "11px", fontWeight: "700",
                    backdropFilter: "blur(8px)",
                    fontFamily: "var(--font-body)",
                  }}>
                    <Tag size={9} />
                    {product.badge}
                  </div>
                </div>

                {/* Info row */}
                <div style={{
                  padding: "16px 20px 20px",
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  borderTop: "1px solid rgba(15,23,42,0.05)",
                }}>
                  <div>
                    <h3 style={{
                      fontFamily: "var(--font-display)", fontWeight: "700",
                      fontSize: "16px", color: "#0F172A",
                      letterSpacing: "-0.01em", marginBottom: "3px",
                    }}>
                      {product.title}
                    </h3>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "12.5px", color: "#94A3B8" }}>
                      Wide range available
                    </p>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "11px", color: "#94A3B8", marginBottom: "2px" }}>Starting from</p>
                    <p style={{
                      fontFamily: "var(--font-display)", fontWeight: "800",
                      fontSize: "22px", color: "#2563EB", letterSpacing: "-0.02em",
                    }}>
                      {product.price}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          style={{ textAlign: "center", fontFamily: "var(--font-body)", fontSize: "13px", color: "#94A3B8" }}
        >
          Starting from <strong style={{ color: "#475569" }}>₹499</strong> · All prices include lenses · Free fitting
        </motion.p>
      </div>
    </section>
  );
}
