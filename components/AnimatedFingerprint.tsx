"use client";
import { useEffect, useState } from "react";

// 20 paths — outer to inner, tracing from the widest arc in to the tightest
// Each layer adds intermediate arcs between the original 9 Lucide paths
const PATHS = [
  // Outer arcs (largest to smallest radius)
  "M2 12a10 10 0 0 1 18-6",
  "M3 12a9 9 0 0 1 16-5",
  "M4 11.5a8 8 0 0 1 14.5-3.5",
  "M4.5 11a7.5 7.5 0 0 1 13.5-2.5",
  // Right side outer verticals
  "M21.8 16c.2-2 .131-5.354 0-6",
  "M20.5 16.5c.15-1.8.1-4.5 0-5",
  // Left outer arc
  "M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2",
  "M3.8 20C4.3 17.5 4.8 14.5 5 12",
  // Medium arcs
  "M9 6.8a6 6 0 0 1 9 5.2v2",
  "M9.5 7.8a5.5 5.5 0 0 1 8 3.5l-.3 2",
  "M10 8.8a4.5 4.5 0 0 1 7 2.8l-.4 1.8",
  "M10.5 9.8a3.5 3.5 0 0 1 5.5 2.2l-.3 1.5",
  // Inner detail verticals (right of center)
  "M14 13.12c0 2.38 0 6.38-1 8.88",
  "M13 12.5c0 2 0 5-.7 7.5",
  // Innermost arc
  "M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4",
  // Bottom details
  "M17.29 21.02c.12-.6.43-2.3.5-3.02",
  "M15.8 22c.1-.5.3-1.5.4-2.5",
  "M8.65 22c.21-.66.45-1.32.57-2",
  "M7.5 21.5c.15-.5.35-1.1.5-1.8",
  // Left dot
  "M2 16h.01",
];

const STAGGER  = 0.1;
const DRAW_DUR = 0.55;
const HOLD_DUR = 1.2;
const FADE_DUR = 0.5;
const TOTAL_MS = ((PATHS.length - 1) * STAGGER + DRAW_DUR + HOLD_DUR + FADE_DUR) * 1000 + 300;

export default function AnimatedFingerprint({ size = 220 }: { size?: number }) {
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setCycle((c) => c + 1), TOTAL_MS);
    return () => clearTimeout(t);
  }, [cycle]);

  const fadeDelay = (PATHS.length - 1) * STAGGER + DRAW_DUR + HOLD_DUR;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      {/* Ghost outline — faint so traced paths pop */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="absolute inset-0"
      >
        {PATHS.map((d, i) => (
          <path
            key={i}
            vectorEffect="non-scaling-stroke"
            d={d}
            stroke="#C4973B"
            strokeWidth={2}
            opacity={0.07}
          />
        ))}
      </svg>

      {/* Animated paths — traces outer to inner */}
      <svg
        key={cycle}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          filter: "drop-shadow(0 0 5px rgba(196,151,59,0.45))",
          animation: `fpFadeOut ${FADE_DUR}s ease-in ${fadeDelay}s forwards`,
        }}
      >
        {PATHS.map((d, i) => (
          <path
            key={i}
            vectorEffect="non-scaling-stroke"
            d={d}
            stroke="#C4973B"
            strokeWidth={2}
            style={{
              strokeDasharray: 2000,
              strokeDashoffset: 2000,
              animation: `drawInGold ${DRAW_DUR}s ease-in-out ${i * STAGGER}s forwards`,
            }}
          />
        ))}
      </svg>
    </div>
  );
}
