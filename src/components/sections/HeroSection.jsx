"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Star, Zap, Users, ArrowRight } from "lucide-react";
import AnimatedBackground from "@/components/animations/AnimatedBackground";
import { siteConfig } from "@/config/siteConfig";

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.1 } },
};
const fadeUp = {
  hidden:  { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0,  filter: "blur(0px)", transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const statBadges = [
  { icon: Zap,   label: "Same Day Glasses"     },
  { icon: Star,  label: "Free Eye Testing"     },
  { icon: Users, label: "100+ Happy Customers" },
];

export default function HeroSection() {
  const { business, hero } = siteConfig;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(160deg, #040c1e 0%, #071224 55%, #0b1a35 100%)" }}
    >
      {/* Bg image — subtle */}
      {hero.backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.15]"
          style={{ backgroundImage: `url(${hero.backgroundImage})` }}
        />
      )}

      {/* Anime.js orbs */}
      <AnimatedBackground />

      {/* Grid dots */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(56,189,248,0.18) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.35,
        }}
      />

      {/* Glow blobs */}
      <div className="absolute pointer-events-none"
        style={{ top: "20%", left: "5%", width: "420px", height: "420px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(37,99,235,0.2) 0%, transparent 70%)", filter: "blur(50px)" }} />
      <div className="absolute pointer-events-none"
        style={{ bottom: "15%", right: "8%", width: "320px", height: "320px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(56,189,248,0.14) 0%, transparent 70%)", filter: "blur(50px)" }} />

      {/* Decorative rings */}
      <div className="absolute pointer-events-none"
        style={{ top: "-80px", right: "-80px", width: "480px", height: "480px", borderRadius: "50%",
          border: "1px solid rgba(56,189,248,0.1)" }} />
      <motion.div className="absolute pointer-events-none"
        style={{ top: "-20px", right: "-20px", width: "340px", height: "340px", borderRadius: "50%",
          border: "1px dashed rgba(56,189,248,0.12)" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      {/* ── MAIN CONTENT ── */}
      <div className="container-wide relative z-10" style={{ paddingTop: "120px", paddingBottom: "100px" }}>
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          style={{ maxWidth: "680px" }}
        >

          {/* Rating badge */}
          <motion.div variants={fadeUp} style={{ marginBottom: "28px" }}>
            <div
              style={{
                display: "inline-flex", alignItems: "center", gap: "10px",
                padding: "8px 18px", borderRadius: "100px",
                background: "rgba(255,255,255,0.06)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.11)",
                fontSize: "13px", fontWeight: "500",
                fontFamily: "var(--font-body)", color: "white",
              }}
            >
              <span style={{ display: "flex", gap: "2px" }}>
                {[...Array(5)].map((_, i) => <Star key={i} size={11} fill="#FBBF24" color="#FBBF24" />)}
              </span>
              <span style={{ color: "#FDE68A", fontWeight: "600" }}>{business.rating} Rated</span>
              <span style={{ width: "1px", height: "14px", background: "rgba(255,255,255,0.18)" }} />
              <span style={{ color: "rgba(255,255,255,0.6)" }}>{business.totalCustomers} Happy Customers</span>
            </div>
          </motion.div>

          {/* Headline — controlled size, proper line breaks */}
          <motion.div variants={fadeUp} style={{ marginBottom: "20px" }}>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: "800",
                fontSize: "clamp(2.2rem, 4.2vw, 3.6rem)",
                lineHeight: "1.08",
                letterSpacing: "-0.03em",
                color: "white",
                margin: 0,
              }}
            >
              {hero.headline}
            </h1>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: "800",
                fontSize: "clamp(2.2rem, 4.2vw, 3.6rem)",
                lineHeight: "1.08",
                letterSpacing: "-0.03em",
                margin: "4px 0 0 0",
                background: "linear-gradient(130deg, #60A5FA 0%, #38BDF8 45%, #93C5FD 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {hero.highlightedWord}
            </h1>
          </motion.div>

          {/* Subtext */}
          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "16px",
              lineHeight: "1.7",
              color: "rgba(255,255,255,0.55)",
              marginBottom: "36px",
              maxWidth: "480px",
            }}
          >
            {hero.subtext}
          </motion.p>

          {/* CTA Buttons — well-sized, properly spaced */}
          <motion.div
            variants={fadeUp}
            style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "36px", alignItems: "center" }}
          >
            <motion.a
              href={hero.ctaPrimary.href}
              style={{
                display: "inline-flex", alignItems: "center", gap: "9px",
                padding: "14px 28px",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #2563EB 0%, #1E40AF 100%)",
                boxShadow: "0 4px 24px rgba(37,99,235,0.5), inset 0 1px 0 rgba(255,255,255,0.18)",
                color: "white",
                fontSize: "15px",
                fontWeight: "600",
                fontFamily: "var(--font-body)",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
              whileHover={{ scale: 1.04, y: -2, boxShadow: "0 8px 36px rgba(37,99,235,0.7), inset 0 1px 0 rgba(255,255,255,0.18)" }}
              whileTap={{ scale: 0.97 }}
            >
              <Phone size={16} />
              {hero.ctaPrimary.label}
            </motion.a>

            <motion.a
              href={hero.ctaSecondary.href}
              style={{
                display: "inline-flex", alignItems: "center", gap: "9px",
                padding: "14px 28px",
                borderRadius: "12px",
                background: "rgba(255,255,255,0.07)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.16)",
                color: "rgba(255,255,255,0.88)",
                fontSize: "15px",
                fontWeight: "600",
                fontFamily: "var(--font-body)",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
              whileHover={{
                background: "rgba(255,255,255,0.11)",
                borderColor: "rgba(56,189,248,0.4)",
                y: -2,
              }}
              whileTap={{ scale: 0.97 }}
            >
              <MapPin size={16} />
              {hero.ctaSecondary.label}
              <ArrowRight size={14} style={{ opacity: 0.55 }} />
            </motion.a>
          </motion.div>

          {/* Stat chips */}
          <motion.div
            variants={fadeUp}
            style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}
          >
            {statBadges.map(({ icon: Icon, label }, i) => (
              <motion.div
                key={label}
                style={{
                  display: "inline-flex", alignItems: "center", gap: "7px",
                  padding: "9px 16px",
                  borderRadius: "10px",
                  background: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.09)",
                  fontSize: "13px",
                  fontWeight: "500",
                  fontFamily: "var(--font-body)",
                  color: "rgba(255,255,255,0.7)",
                }}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85 + i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{
                  background: "rgba(37,99,235,0.18)",
                  borderColor: "rgba(56,189,248,0.3)",
                  color: "rgba(255,255,255,0.95)",
                  scale: 1.04,
                }}
              >
                <Icon size={13} style={{ color: "#38BDF8", flexShrink: 0 }} />
                {label}
              </motion.div>
            ))}
          </motion.div>

        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        className="absolute cursor-pointer border-none bg-transparent"
        style={{ bottom: "36px", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
      >
        <span style={{ color: "rgba(255,255,255,0.25)", fontSize: "10px", fontWeight: "600", letterSpacing: "0.2em", textTransform: "uppercase" }}>
          Scroll
        </span>
        <div style={{
          width: "26px", height: "42px", borderRadius: "13px",
          border: "1.5px solid rgba(255,255,255,0.13)",
          display: "flex", alignItems: "flex-start", justifyContent: "center", paddingTop: "7px",
        }}>
          <motion.div
            style={{ width: "5px", height: "10px", borderRadius: "3px", background: "linear-gradient(to bottom, #38BDF8, #2563EB)" }}
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.9, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.button>

      {/* Bottom fade to white sections */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{ height: "160px", background: "linear-gradient(to bottom, transparent, #F8FAFF)" }}
      />
    </section>
  );
}
