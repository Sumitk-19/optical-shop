"use client";

import { useEffect, useRef } from "react";

export default function AnimatedBackground({ className = "" }) {
  const containerRef  = useRef(null);
  const animationsRef = useRef([]);

  useEffect(() => {
    const init = async () => {
      const container = containerRef.current;
      if (!container) return;

      // Handle ALL animejs export shapes (v3, v4)
      const mod = await import("animejs");
      const anime =
        typeof mod.default === "function"            ? mod.default
        : typeof mod.animate === "function"          ? mod.animate
        : typeof mod.default?.animate === "function" ? (opts) => mod.default.animate(opts)
        : null;

      if (!anime) {
        renderCSSOrbs(container);
        return;
      }

      const orbConfigs = [
        { size: 520, x: "8%",  y: "10%",  color: "rgba(37,99,235,0.22)",  duration: 9000,  delay: 0    },
        { size: 380, x: "72%", y: "5%",   color: "rgba(56,189,248,0.18)", duration: 11000, delay: 1500 },
        { size: 300, x: "55%", y: "55%",  color: "rgba(37,99,235,0.14)",  duration: 8000,  delay: 800  },
        { size: 220, x: "15%", y: "68%",  color: "rgba(56,189,248,0.12)", duration: 13000, delay: 2200 },
        { size: 160, x: "88%", y: "75%",  color: "rgba(99,102,241,0.16)", duration: 7500,  delay: 400  },
      ];

      const orbs = orbConfigs.map((cfg) => {
        const el = document.createElement("div");
        el.style.cssText = `
          position:absolute;
          width:${cfg.size}px;height:${cfg.size}px;
          left:${cfg.x};top:${cfg.y};
          background:radial-gradient(circle at 40% 40%, ${cfg.color}, transparent 70%);
          border-radius:50%;pointer-events:none;
          filter:blur(${Math.round(cfg.size * 0.08)}px);
          will-change:transform;
          transform:translate(-50%,-50%);
        `;
        container.appendChild(el);
        return { el, cfg };
      });

      orbs.forEach(({ el, cfg }) => {
        try {
          const anim = anime({
            targets: el,
            translateX: [{ value: 30, duration: cfg.duration/2 }, { value: -30, duration: cfg.duration/2 }],
            translateY: [{ value: -25, duration: cfg.duration*0.4 }, { value: 25, duration: cfg.duration*0.6 }],
            scale:      [{ value: 1.06, duration: cfg.duration*0.5 }, { value: 0.94, duration: cfg.duration*0.5 }],
            easing: "easeInOutSine",
            loop: true,
            direction: "alternate",
            delay: cfg.delay,
          });
          if (anim) animationsRef.current.push(anim);
        } catch (_) {
          el.style.animation = `orbDrift${cfg.delay % 3} ${cfg.duration}ms ease-in-out ${cfg.delay}ms infinite alternate`;
        }
      });

      // Dot-grid SVG
      const svgNS   = "http://www.w3.org/2000/svg";
      const svg     = document.createElementNS(svgNS, "svg");
      svg.setAttribute("width", "100%");
      svg.setAttribute("height", "100%");
      svg.style.cssText = "position:absolute;inset:0;pointer-events:none;opacity:0.18;";
      const defs    = document.createElementNS(svgNS, "defs");
      const pattern = document.createElementNS(svgNS, "pattern");
      pattern.setAttribute("id", "dotgrid-bg");
      pattern.setAttribute("width", "28");
      pattern.setAttribute("height", "28");
      pattern.setAttribute("patternUnits", "userSpaceOnUse");
      const dot = document.createElementNS(svgNS, "circle");
      dot.setAttribute("cx", "1.5"); dot.setAttribute("cy", "1.5");
      dot.setAttribute("r", "1.5");  dot.setAttribute("fill", "rgba(255,255,255,0.55)");
      pattern.appendChild(dot); defs.appendChild(pattern); svg.appendChild(defs);
      const rect = document.createElementNS(svgNS, "rect");
      rect.setAttribute("width", "100%"); rect.setAttribute("height", "100%");
      rect.setAttribute("fill", "url(#dotgrid-bg)");
      svg.appendChild(rect); container.appendChild(svg);

      container.style.transition = "opacity 1.2s ease";
      container.style.opacity    = "1";
    };

    init().catch(() => {
      if (containerRef.current) renderCSSOrbs(containerRef.current);
    });

    return () => {
      animationsRef.current.forEach((a) => { try { a.pause?.(); a.cancel?.(); } catch (_) {} });
      animationsRef.current = [];
      if (containerRef.current) containerRef.current.innerHTML = "";
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      style={{ zIndex: 0, opacity: 0 }}
    />
  );
}

function renderCSSOrbs(container) {
  const style = document.createElement("style");
  style.textContent = `
    @keyframes orbDrift0 { from{transform:translate(-50%,-50%) translateY(0px) scale(1);}     to{transform:translate(-50%,-50%) translateY(-30px) scale(1.06);} }
    @keyframes orbDrift1 { from{transform:translate(-50%,-50%) translateX(0px) scale(1);}     to{transform:translate(-50%,-50%) translateX(30px) scale(0.94);}  }
    @keyframes orbDrift2 { from{transform:translate(-50%,-50%) translateY(0px) scale(0.96);}  to{transform:translate(-50%,-50%) translateY(25px) scale(1.04);}  }
  `;
  document.head.appendChild(style);

  [
    { size:520, x:"8%",  y:"10%",  color:"rgba(37,99,235,0.22)",  dur:"9s",   anim:"orbDrift0" },
    { size:380, x:"72%", y:"5%",   color:"rgba(56,189,248,0.18)", dur:"11s",  anim:"orbDrift1" },
    { size:300, x:"55%", y:"55%",  color:"rgba(37,99,235,0.14)",  dur:"8s",   anim:"orbDrift2" },
    { size:220, x:"15%", y:"68%",  color:"rgba(56,189,248,0.12)", dur:"13s",  anim:"orbDrift0" },
    { size:160, x:"88%", y:"75%",  color:"rgba(99,102,241,0.16)", dur:"7.5s", anim:"orbDrift1" },
  ].forEach((cfg) => {
    const el = document.createElement("div");
    el.style.cssText = `
      position:absolute;width:${cfg.size}px;height:${cfg.size}px;
      left:${cfg.x};top:${cfg.y};
      background:radial-gradient(circle at 40% 40%, ${cfg.color}, transparent 70%);
      border-radius:50%;pointer-events:none;
      filter:blur(${Math.round(cfg.size*0.08)}px);
      animation:${cfg.anim} ${cfg.dur} ease-in-out infinite alternate;
    `;
    container.appendChild(el);
  });

  container.style.transition = "opacity 1.2s ease";
  container.style.opacity    = "1";
}
