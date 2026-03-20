"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail, ArrowUpRight, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Footer() {
  const { business, footer, nav } = siteConfig;

  return (
    <footer style={{ background: "#070d1f", color: "#94A3B8", fontFamily: "var(--font-body)" }}>

      {/* ── Top divider with glow ── */}
      <div style={{ height: "1px", background: "linear-gradient(90deg, transparent 0%, rgba(56,189,248,0.3) 30%, rgba(37,99,235,0.4) 50%, rgba(56,189,248,0.3) 70%, transparent 100%)" }} />

      {/* ── Main grid ── */}
      <div
        className="container-wide"
        style={{ paddingTop: "72px", paddingBottom: "64px" }}
      >
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12"
          style={{ gap: "48px" }}
        >

          {/* ── Brand column (wider) ── */}
          <motion.div
            className="lg:col-span-4"
            custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            {/* Logo */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
              <div style={{
                width: "38px", height: "38px", borderRadius: "11px", flexShrink: 0,
                background: "linear-gradient(135deg, #2563EB, #38BDF8)",
                boxShadow: "0 4px 16px rgba(37,99,235,0.45)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "white", fontSize: "12px", fontWeight: "800", letterSpacing: "-0.02em",
              }}>
                CV
              </div>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "17px", color: "white", letterSpacing: "-0.02em" }}>
                {business.name}
              </span>
            </div>

            {/* Tagline */}
            <p style={{ fontSize: "14px", lineHeight: "1.75", color: "#64748B", marginBottom: "28px", maxWidth: "280px" }}>
              {footer.tagline}
            </p>

            {/* WhatsApp CTA */}
            <motion.a
              href={`https://wa.me/${business.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "10px 20px", borderRadius: "10px",
                background: "rgba(37,211,102,0.1)",
                border: "1px solid rgba(37,211,102,0.22)",
                color: "#4ADE80", fontSize: "13px", fontWeight: "600",
                textDecoration: "none",
              }}
              whileHover={{ background: "rgba(37,211,102,0.18)", borderColor: "rgba(37,211,102,0.4)", scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <MessageCircle size={15} />
              Chat on WhatsApp
            </motion.a>
          </motion.div>

          {/* ── Quick Links ── */}
          <motion.div
            className="lg:col-span-2"
            custom={1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            <p style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "0.1em", textTransform: "uppercase", color: "#475569", marginBottom: "20px" }}>
              Quick Links
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "4px" }}>
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    style={{ display: "flex", alignItems: "center", gap: "6px", padding: "7px 0", fontSize: "14px", color: "#64748B", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "#7DD3FC"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "#64748B"; }}
                  >
                    <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#1E3A5F", flexShrink: 0 }} />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ── Services ── */}
          <motion.div
            className="lg:col-span-3"
            custom={2} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            <p style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "0.1em", textTransform: "uppercase", color: "#475569", marginBottom: "20px" }}>
              Our Services
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "4px" }}>
              {footer.services.map((s) => (
                <li key={s}
                  style={{ display: "flex", alignItems: "center", gap: "6px", padding: "7px 0", fontSize: "14px", color: "#64748B" }}
                >
                  <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#1E3A5F", flexShrink: 0 }} />
                  {s}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ── Contact ── */}
          <motion.div
            className="lg:col-span-3"
            custom={3} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            <p style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "0.1em", textTransform: "uppercase", color: "#475569", marginBottom: "20px" }}>
              Get In Touch
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }}>

              {/* Address */}
              <li style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <div style={{
                  width: "32px", height: "32px", borderRadius: "8px", flexShrink: 0,
                  background: "rgba(37,99,235,0.12)", border: "1px solid rgba(37,99,235,0.18)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <MapPin size={14} style={{ color: "#60A5FA" }} />
                </div>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(business.address)}`}
                  target="_blank" rel="noopener noreferrer"
                  style={{ fontSize: "13.5px", lineHeight: "1.6", color: "#64748B", textDecoration: "none", paddingTop: "5px" }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "#7DD3FC"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "#64748B"; }}
                >
                  {business.address}
                </a>
              </li>

              {/* Phone */}
              <li style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <div style={{
                  width: "32px", height: "32px", borderRadius: "8px", flexShrink: 0,
                  background: "rgba(5,150,105,0.1)", border: "1px solid rgba(5,150,105,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <Phone size={14} style={{ color: "#34D399" }} />
                </div>
                <a
                  href={`tel:${business.phone}`}
                  style={{ fontSize: "13.5px", color: "#64748B", textDecoration: "none", fontWeight: "500" }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "#34D399"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "#64748B"; }}
                >
                  {business.phone}
                </a>
              </li>

              {/* Hours */}
              <li style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <div style={{
                  width: "32px", height: "32px", borderRadius: "8px", flexShrink: 0,
                  background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <Clock size={14} style={{ color: "#A78BFA" }} />
                </div>
                <span style={{ fontSize: "13.5px", color: "#64748B", lineHeight: "1.5" }}>
                  {business.hours}
                </span>
              </li>

              {/* Email */}
              <li style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <div style={{
                  width: "32px", height: "32px", borderRadius: "8px", flexShrink: 0,
                  background: "rgba(234,88,12,0.1)", border: "1px solid rgba(234,88,12,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <Mail size={14} style={{ color: "#FB923C" }} />
                </div>
                <a
                  href={`mailto:${business.email}`}
                  style={{ fontSize: "13.5px", color: "#64748B", textDecoration: "none" }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "#FB923C"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "#64748B"; }}
                >
                  {business.email}
                </a>
              </li>

            </ul>
          </motion.div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div
          className="container-wide"
          style={{
            paddingTop: "20px", paddingBottom: "20px",
            display: "flex", flexWrap: "wrap",
            alignItems: "center", justifyContent: "space-between",
            gap: "12px",
          }}
        >
          <p style={{ fontSize: "12.5px", color: "#334155", margin: 0 }}>
            © {new Date().getFullYear()}{" "}
            <span style={{ color: "#475569" }}>{business.name}</span>
            . All rights reserved.
          </p>

          {/* Right side — status badge */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#22C55E", boxShadow: "0 0 6px rgba(34,197,94,0.6)", flexShrink: 0 }} />
              <span style={{ fontSize: "12px", color: "#334155" }}>Open Now</span>
            </div>
            <span style={{ width: "1px", height: "14px", background: "#1E293B" }} />
            <p style={{ fontSize: "12px", color: "#1E293B", margin: 0 }}>
              Built with ❤️ by DevNest Studio
            </p>
          </div>
        </div>
      </div>

    </footer>
  );
}
