"use client";

import { useEffect, useState } from "react";

const SCREENS = [
  { src: "/screen-analyzing.png", dur: 4000 },
  { src: "/screen-reveal.png",    dur: 3500 },
  { src: "/screen-profile.png",   dur: 4000 },
  { src: "/screen-home.png",      dur: 6500 },
];

export default function AnimatedPhone() {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setVisible(false);
      setTimeout(() => {
        setIdx((i) => (i + 1) % SCREENS.length);
        setVisible(true);
      }, 700);
    }, SCREENS[idx].dur);
    return () => clearTimeout(t);
  }, [idx]);

  const isHome     = idx === 3;
  const isAnalyze  = idx === 0;

  return (
    <div className="relative mx-auto" style={{ width: 280, height: 570 }}>
      {/* Ambient glow */}
      <div className="absolute inset-0 rounded-[46px] blur-3xl opacity-30"
        style={{ background: "radial-gradient(ellipse, #D4AF37 0%, transparent 70%)", transform: "scale(1.2)" }} />

      {/* Frame */}
      <div className="absolute inset-0 rounded-[46px] shadow-2xl"
        style={{ background: "linear-gradient(160deg, #2a2a2a 0%, #1a1a1a 50%, #0f0f0f 100%)", border: "1px solid #333" }} />

      {/* Screen */}
      <div className="absolute overflow-hidden" style={{ top: 14, left: 10, right: 10, bottom: 14, borderRadius: 38, background: "#111" }}>

        {/* Screenshot layer — cross-fades */}
        <div className="absolute inset-0" style={{ opacity: visible ? 1 : 0, transition: "opacity 700ms ease-in-out" }}>
          {isHome ? (
            /* Home: absolute img scrolls upward */
            <img
              key={idx}
              src={SCREENS[idx].src}
              alt=""
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "auto",
                animation: visible ? "phoneScroll 6s ease-in-out forwards" : "none",
              }}
            />
          ) : (
            /* Other screens: cover from top (anchored top for all) */
            <img
              key={idx}
              src={SCREENS[idx].src}
              alt=""
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "50% 0%",
              }}
            />
          )}
        </div>

        {/* Status bar */}
        <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-5 pt-3 pb-1">
          <span className="text-[10px] font-semibold text-white" style={{ textShadow: "0 1px 6px rgba(0,0,0,0.9)" }}>9:41</span>
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
            {[0, 4, 8].map((x, i) => (
              <rect key={x} x={x} y={3 - i * 0.5} width="3" height={7 + i * 0.5} rx="0.5" fill="white" />
            ))}
            <rect x="12" y="0" width="2" height="10" rx="0.5" fill="white" opacity="0.3" />
          </svg>
        </div>

        {/* Dynamic island */}
        <div className="absolute z-10 left-1/2 -translate-x-1/2" style={{ top: 14, width: 80, height: 20, background: "#000", borderRadius: 999 }} />

        {/* Animated loading bar — replaces the static bar that was in the screenshot */}
        {isAnalyze && visible && (
          <div className="absolute flex gap-1" style={{ top: "52%", left: 20, right: 20, zIndex: 20 }}>
            <div className="flex-1 rounded-full overflow-hidden" style={{ height: 3, background: "#333" }}>
              <div style={{ height: "100%", background: "#D4AF37", animation: "loadBar 3.8s ease-in-out forwards" }} />
            </div>
            <div className="flex-1 rounded-full" style={{ height: 3, background: "#333" }} />
          </div>
        )}
      </div>

      {/* Side buttons */}
      {([
        { side: "left",  top: 100, h: 32 },
        { side: "left",  top: 148, h: 48 },
        { side: "left",  top: 212, h: 48 },
        { side: "right", top: 136, h: 64 },
      ] as const).map(({ side, top, h }, i) => (
        <div key={i} className="absolute"
          style={{ [side]: -3, top, width: 3, height: h, background: "#2a2a2a", borderRadius: side === "left" ? "2px 0 0 2px" : "0 2px 2px 0" }} />
      ))}
    </div>
  );
}
