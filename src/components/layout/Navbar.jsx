"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export default function Navbar() {
  const [scrolled,      setScrolled]  = useState(false);
  const [menuOpen,      setMenuOpen]  = useState(false);
  const [activeSection, setActive]    = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = siteConfig.nav.map((n) => n.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 flex justify-center"
        style={{ padding: "16px 24px" }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <header
          className="w-full transition-all duration-500"
          style={{
            maxWidth: "1100px",
            background: scrolled
              ? "rgba(8, 12, 28, 0.82)"
              : "rgba(8, 12, 28, 0.52)",
            backdropFilter: "blur(28px) saturate(200%)",
            WebkitBackdropFilter: "blur(28px) saturate(200%)",
            border: scrolled
              ? "1px solid rgba(56,189,248,0.22)"
              : "1px solid rgba(255,255,255,0.09)",
            borderRadius: "18px",
            boxShadow: scrolled
              ? "0 8px 48px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.07)"
              : "0 4px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.05)",
          }}
        >
          <div
            className="flex items-center justify-between"
            style={{ padding: "10px 20px" }}
          >

            {/* ── Logo ── */}
            <motion.a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="flex items-center no-underline shrink-0"
              style={{ gap: "10px" }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              <div
                style={{
                  width: "34px", height: "34px",
                  borderRadius: "10px",
                  background: "linear-gradient(135deg, #2563EB, #38BDF8)",
                  boxShadow: "0 2px 14px rgba(37,99,235,0.55)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "white", fontSize: "11px", fontWeight: "800",
                  letterSpacing: "-0.02em", flexShrink: 0,
                }}
              >
                CV
              </div>
              <span style={{
                fontFamily: "var(--font-display)",
                fontWeight: "700",
                fontSize: "15px",
                color: "white",
                letterSpacing: "-0.02em",
                whiteSpace: "nowrap",
              }}>
                {siteConfig.business.name}
              </span>
            </motion.a>

            {/* ── Desktop nav — evenly spaced ── */}
            <nav
              className="hidden md:flex items-center"
              style={{ gap: "4px" }}
            >
              {siteConfig.nav.map((item) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className="relative cursor-pointer border-none bg-transparent"
                    style={{
                      padding: "8px 18px",
                      borderRadius: "10px",
                      fontSize: "13.5px",
                      fontWeight: "500",
                      fontFamily: "var(--font-body)",
                      color: isActive ? "#7DD3FC" : "rgba(255,255,255,0.65)",
                      transition: "color 0.2s ease",
                      whiteSpace: "nowrap",
                    }}
                    onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.color = "rgba(255,255,255,0.95)"; }}
                    onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.color = "rgba(255,255,255,0.65)"; }}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-pill"
                        className="absolute inset-0"
                        style={{
                          borderRadius: "10px",
                          background: "rgba(56,189,248,0.1)",
                          border: "1px solid rgba(56,189,248,0.22)",
                        }}
                        transition={{ type: "spring", stiffness: 400, damping: 32 }}
                      />
                    )}
                    <span style={{ position: "relative", zIndex: 1 }}>{item.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* ── CTA + Hamburger ── */}
            <div className="flex items-center" style={{ gap: "10px" }}>
              <motion.a
                href={`tel:${siteConfig.business.phone}`}
                className="hidden sm:inline-flex items-center no-underline"
                style={{
                  gap: "7px",
                  padding: "8px 18px",
                  borderRadius: "10px",
                  background: "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)",
                  boxShadow: "0 2px 18px rgba(37,99,235,0.55)",
                  color: "white",
                  fontSize: "13.5px",
                  fontWeight: "600",
                  fontFamily: "var(--font-body)",
                  whiteSpace: "nowrap",
                }}
                whileHover={{ scale: 1.05, boxShadow: "0 4px 28px rgba(37,99,235,0.75)" }}
                whileTap={{ scale: 0.96 }}
              >
                <Phone size={13} />
                Call Now
              </motion.a>

              <button
                onClick={() => setMenuOpen((v) => !v)}
                className="md:hidden cursor-pointer border-none"
                style={{
                  padding: "8px",
                  borderRadius: "10px",
                  background: "rgba(255,255,255,0.08)",
                  color: "white",
                  alignItems: "center", justifyContent: "center",
                }}
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={menuOpen ? "x" : "menu"}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    {menuOpen ? <X size={18} /> : <Menu size={18} />}
                  </motion.div>
                </AnimatePresence>
              </button>
            </div>
          </div>
        </header>
      </motion.div>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="fixed z-40 md:hidden"
            style={{
              top: "84px", left: "16px", right: "16px",
              background: "rgba(8,12,28,0.94)",
              backdropFilter: "blur(32px)",
              border: "1px solid rgba(56,189,248,0.15)",
              borderRadius: "16px",
              boxShadow: "0 24px 64px rgba(0,0,0,0.55)",
              overflow: "hidden",
            }}
          >
            <nav style={{ padding: "12px" }}>
              {siteConfig.nav.map((item, i) => (
                <motion.button
                  key={item.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => handleNavClick(item.href)}
                  className="w-full text-left cursor-pointer border-none bg-transparent"
                  style={{
                    padding: "12px 16px",
                    borderRadius: "10px",
                    fontSize: "14px",
                    fontWeight: "500",
                    fontFamily: "var(--font-body)",
                    color: "rgba(255,255,255,0.75)",
                    display: "block",
                  }}
                  whileHover={{ background: "rgba(56,189,248,0.1)", color: "#7DD3FC" }}
                >
                  {item.label}
                </motion.button>
              ))}
              <div style={{ height: "1px", background: "rgba(255,255,255,0.07)", margin: "8px 0" }} />
              <a
                href={`tel:${siteConfig.business.phone}`}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center no-underline"
                style={{
                  gap: "8px", padding: "12px 16px",
                  borderRadius: "10px",
                  background: "linear-gradient(135deg, #2563EB, #1D4ED8)",
                  color: "white", fontSize: "14px", fontWeight: "600",
                  fontFamily: "var(--font-body)",
                }}
              >
                <Phone size={14} />
                {siteConfig.business.phone}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
