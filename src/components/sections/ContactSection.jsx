"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail, MessageCircle, ExternalLink, Navigation } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } } };
const slideIn = {
  hidden:  { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const contactItems = (business) => [
  {
    icon: MapPin, label: "Address", color: "#2563EB",
    bg: "rgba(37,99,235,0.08)", border: "rgba(37,99,235,0.18)",
    value: business.address,
    href: `https://maps.google.com/?q=${encodeURIComponent(business.address)}`,
  },
  {
    icon: Phone, label: "Phone", color: "#059669",
    bg: "rgba(5,150,105,0.08)", border: "rgba(5,150,105,0.18)",
    value: business.phone,
    href: `tel:${business.phone}`,
  },
  {
    icon: Clock, label: "Open Hours", color: "#7C3AED",
    bg: "rgba(124,58,237,0.08)", border: "rgba(124,58,237,0.18)",
    value: business.hours,
    href: null,
  },
  {
    icon: Mail, label: "Email", color: "#EA580C",
    bg: "rgba(234,88,12,0.08)", border: "rgba(234,88,12,0.18)",
    value: business.email,
    href: `mailto:${business.email}`,
  },
];

const locationTags = [
  { icon: "🚇", label: "Near Jama Masjid" },
  { icon: "🏢", label: "Sadar Bazar"    },
  { icon: "🅿️",  label: "Free Parking"     },
  { icon: "🛺",  label: "Easy Auto Access" },
];

export default function ContactSection() {
  const { business } = siteConfig;
  const items = contactItems(business);

  return (
    <section
      id="contact"
      style={{
        background: "#F8FAFF",
        paddingTop: "96px",
        paddingBottom: "96px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Bg decoration */}
      <div style={{
        position: "absolute", top: "-80px", right: "-80px",
        width: "480px", height: "480px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(37,99,235,0.05) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "-60px", left: "-60px",
        width: "360px", height: "360px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(56,189,248,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      {/* dot grid */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "radial-gradient(rgba(37,99,235,0.06) 1px, transparent 1px)",
        backgroundSize: "30px 30px",
      }} />

      <div className="container-wide" style={{ position: "relative", zIndex: 1 }}>

        {/* ── Header ── */}
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
              Visit Us
            </span>
          </div>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: "800",
            fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
            letterSpacing: "-0.03em", lineHeight: "1.1",
            color: "#0F172A", marginBottom: "14px",
          }}>
            Find Us Near{" "}
            <span style={{
              background: "linear-gradient(135deg, #2563EB, #38BDF8)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              Near Jama Masjid
            </span>
          </h2>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "15px",
            color: "#64748B", maxWidth: "420px", margin: "0 auto", lineHeight: "1.65",
          }}>
            Easy to reach, easy to park. Walk in anytime — no appointment needed.
          </p>
        </motion.div>

        {/* ── Two-column layout ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "28px",
          alignItems: "start",
        }}
          className="contact-grid"
        >

          {/* ── LEFT — Contact info ── */}
          <motion.div
            variants={stagger} initial="hidden"
            whileInView="visible" viewport={{ once: true }}
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            {items.map(({ icon: Icon, label, color, bg, border, value, href }) => (
              <motion.div
                key={label}
                variants={slideIn}
                style={{
                  display: "flex", alignItems: "center", gap: "16px",
                  padding: "18px 20px",
                  background: "white", borderRadius: "16px",
                  border: "1px solid rgba(15,23,42,0.07)",
                  boxShadow: "0 2px 12px rgba(15,23,42,0.05)",
                  cursor: href ? "pointer" : "default",
                  textDecoration: "none",
                  transition: "all 0.25s ease",
                }}
                whileHover={href ? {
                  x: 5,
                  boxShadow: `0 8px 28px rgba(15,23,42,0.1)`,
                  borderColor: border,
                } : {}}
                {...(href ? { as: "a" } : {})}
                onClick={href ? () => window.open(href, href.startsWith("http") ? "_blank" : "_self") : undefined}
              >
                {/* Icon box */}
                <div style={{
                  width: "44px", height: "44px", borderRadius: "12px", flexShrink: 0,
                  background: bg, border: `1.5px solid ${border}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <Icon size={18} style={{ color }} strokeWidth={1.8} />
                </div>

                {/* Text */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{
                    fontFamily: "var(--font-body)", fontSize: "10.5px",
                    fontWeight: "700", letterSpacing: "0.1em",
                    textTransform: "uppercase", color: "#94A3B8",
                    marginBottom: "3px",
                  }}>
                    {label}
                  </p>
                  <p style={{
                    fontFamily: "var(--font-body)", fontSize: "14px",
                    fontWeight: "500", color: "#1E293B",
                    lineHeight: "1.45", wordBreak: "break-word",
                  }}>
                    {value}
                  </p>
                </div>

                {/* Arrow */}
                {href && (
                  <ExternalLink size={14} style={{ color: "#CBD5E1", flexShrink: 0 }} />
                )}
              </motion.div>
            ))}

            {/* WhatsApp button */}
            <motion.a
              href={`https://wa.me/${business.whatsapp}`}
              target="_blank" rel="noopener noreferrer"
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: "10px",
                padding: "16px 24px", borderRadius: "16px",
                background: "linear-gradient(135deg, #25D366, #128C7E)",
                boxShadow: "0 4px 20px rgba(37,211,102,0.3)",
                color: "white", fontSize: "15px", fontWeight: "600",
                fontFamily: "var(--font-body)", textDecoration: "none",
                marginTop: "4px",
              }}
              whileHover={{ scale: 1.02, y: -2, boxShadow: "0 10px 32px rgba(37,211,102,0.45)" }}
              whileTap={{ scale: 0.97 }}
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </motion.a>
          </motion.div>

          {/* ── RIGHT — Map ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: "flex", flexDirection: "column", gap: "14px" }}
          >
            {/* Map card */}
            <div style={{
              borderRadius: "20px", overflow: "hidden",
              border: "1px solid rgba(37,99,235,0.12)",
              boxShadow: "0 8px 40px rgba(37,99,235,0.1)",
              background: "white",
            }}>
              {/* Map header bar */}
              <div style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "14px 18px",
                borderBottom: "1px solid rgba(15,23,42,0.06)",
                background: "white",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div style={{
                    width: "8px", height: "8px", borderRadius: "50%",
                    background: "#22C55E",
                    boxShadow: "0 0 8px rgba(34,197,94,0.6)",
                    animation: "pulse 2s infinite",
                  }} />
                  <span style={{ fontFamily: "var(--font-body)", fontSize: "13px", fontWeight: "600", color: "#1E293B" }}>
                    Live Location
                  </span>
                </div>
                <motion.a
                  href={`https://maps.google.com/?q=${encodeURIComponent(business.address)}`}
                  target="_blank" rel="noopener noreferrer"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "5px",
                    padding: "6px 12px", borderRadius: "8px",
                    background: "rgba(37,99,235,0.07)", border: "1px solid rgba(37,99,235,0.15)",
                    color: "#2563EB", fontSize: "12px", fontWeight: "600",
                    fontFamily: "var(--font-body)", textDecoration: "none",
                  }}
                  whileHover={{ background: "rgba(37,99,235,0.14)", scale: 1.03 }}
                >
                  <Navigation size={11} />
                  Open in Maps
                </motion.a>
              </div>

              {/* Iframe */}
              <div style={{ position: "relative" }}>
                <iframe
                  title="Store Location"
                  src={business.mapEmbedUrl}
                  width="100%"
                  height="320"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                {/* Gradient overlay bottom */}
                <div style={{
                  position: "absolute", bottom: 0, left: 0, right: 0, height: "40px",
                  background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.6))",
                  pointerEvents: "none",
                }} />
              </div>
            </div>

            {/* Location tag chips */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {locationTags.map(({ icon, label }) => (
                <div key={label} style={{
                  display: "inline-flex", alignItems: "center", gap: "6px",
                  padding: "8px 14px", borderRadius: "10px",
                  background: "white",
                  border: "1px solid rgba(15,23,42,0.08)",
                  boxShadow: "0 1px 6px rgba(15,23,42,0.05)",
                  fontSize: "12.5px", fontWeight: "500",
                  fontFamily: "var(--font-body)", color: "#475569",
                }}>
                  <span style={{ fontSize: "14px" }}>{icon}</span>
                  {label}
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      {/* Responsive grid fix */}
      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
