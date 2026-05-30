"use client";

interface EthosLogoProps {
  size?: number;
  className?: string;
}

export default function EthosLogo({ size = 48, className = "" }: EthosLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      className={className}
      aria-label="Ethos logo"
    >
      <defs>
        <linearGradient id="fpG" x1="20" y1="20" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2D4A3E" />
          <stop offset="100%" stopColor="#C4973B" />
        </linearGradient>
      </defs>

      {/*
        Fingerprint with embedded E.
        Each ring is split into arc segments whose gaps form the letter E.
        The E negative space: left vertical gap + 3 horizontal gaps (top/mid/bottom right).
        Arcs drawn using SVG A command: M x,y A rx,ry rotation large-arc sweep ex,ey
      */}

      {/* Ring 1 — r=11 */}
      <path d="M 60,49 A 11,11 0 1 1 59.9,49" stroke="url(#fpG)" strokeWidth="2.2" strokeLinecap="round" fill="none" />

      {/* Ring 2 — r=18 */}
      <path d="M 60,42 A 18,18 0 0 1 78,60 A 18,18 0 0 1 60,78 A 18,18 0 0 1 44,66" stroke="url(#fpG)" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M 43,55 A 18,18 0 0 1 46,46" stroke="url(#fpG)" strokeWidth="2" strokeLinecap="round" fill="none" />

      {/* Ring 3 — r=25 */}
      <path d="M 60,35 A 25,25 0 0 1 85,60 A 25,25 0 0 1 60,85 A 25,25 0 0 1 36,68" stroke="url(#fpG)" strokeWidth="1.9" strokeLinecap="round" fill="none" />
      <path d="M 36,52 A 25,25 0 0 1 38,43" stroke="url(#fpG)" strokeWidth="1.9" strokeLinecap="round" fill="none" />

      {/* Ring 4 — r=32 */}
      <path d="M 60,28 A 32,32 0 0 1 92,60 A 32,32 0 0 1 60,92 A 32,32 0 0 1 29,70" stroke="url(#fpG)" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M 29,50 A 32,32 0 0 1 32,38" stroke="url(#fpG)" strokeWidth="1.8" strokeLinecap="round" fill="none" />

      {/* Ring 5 — r=39 */}
      <path d="M 60,21 A 39,39 0 0 1 99,60 A 39,39 0 0 1 60,99 A 39,39 0 0 1 22,72" stroke="url(#fpG)" strokeWidth="1.7" strokeLinecap="round" fill="none" />
      <path d="M 22,48 A 39,39 0 0 1 25,33" stroke="url(#fpG)" strokeWidth="1.7" strokeLinecap="round" fill="none" />

      {/* Ring 6 — r=46 */}
      <path d="M 60,14 A 46,46 0 0 1 106,60 A 46,46 0 0 1 60,106 A 46,46 0 0 1 15,74" stroke="url(#fpG)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M 15,46 A 46,46 0 0 1 19,28" stroke="url(#fpG)" strokeWidth="1.5" strokeLinecap="round" fill="none" />

      {/* Ring 7 — r=53 */}
      <path d="M 60,7 A 53,53 0 0 1 113,60 A 53,53 0 0 1 60,113 A 53,53 0 0 1 8,76" stroke="url(#fpG)" strokeWidth="1.4" strokeLinecap="round" fill="none" />
      <path d="M 8,44 A 53,53 0 0 1 13,23" stroke="url(#fpG)" strokeWidth="1.4" strokeLinecap="round" fill="none" />

      {/* E letterform — gradient fill, centered */}
      <text
        x="60"
        y="66"
        textAnchor="middle"
        fontFamily="Plus Jakarta Sans, sans-serif"
        fontSize="22"
        fontWeight="800"
        fill="url(#fpG)"
      >
        E
      </text>
    </svg>
  );
}
