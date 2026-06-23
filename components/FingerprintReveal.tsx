"use client";
import { useState, useRef } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import FingerprintPattern from "./FingerprintPattern";
import animationData from "../data/fingerprint-scan.json";

const ARCHETYPE_DUR = 3200;
const FADE_DUR = 1200;

// Lottie canvas is 800x600. The fingerprint occupies ~270 units centered at (400,300).
// We render at 2.5x the container size (container = 320 visible canvas units),
// then crop to the container. Fingerprint fills ~84% of the visible area.
const LOTTIE_SCALE = 2.5;

type Phase = "fingerprint" | "archetype" | "fading";

export default function FingerprintReveal({ size = 380 }: { size?: number }) {
  const [phase, setPhase] = useState<Phase>("fingerprint");
  const [key, setKey] = useState(0);
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  function handleComplete() {
    setPhase("archetype");
    setTimeout(() => {
      setPhase("fading");
      setTimeout(() => {
        setKey((k) => k + 1);
        setPhase("fingerprint");
      }, FADE_DUR);
    }, ARCHETYPE_DUR);
  }

  const lottieW = size * LOTTIE_SCALE;
  const lottieH = lottieW * 0.75; // 800:600 = 4:3

  return (
    <div className="relative" style={{ width: size, height: size }}>
      {/* Lottie fingerprint — cropped and centered */}
      <div
        className="absolute inset-0"
        style={{
          overflow: "hidden",
          opacity: phase === "archetype" ? 0 : 1,
          transition: phase === "fading" ? `opacity ${FADE_DUR}ms ease-in-out` : "none",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: lottieW,
            height: lottieH,
          }}
        >
          <Lottie
            key={key}
            lottieRef={lottieRef}
            animationData={animationData}
            loop={false}
            autoplay
            onComplete={handleComplete}
            style={{ width: lottieW, height: lottieH }}
          />
        </div>
      </div>

      {/* Archetype reveal — not constrained to fingerprint size */}
      <div
        className="absolute flex flex-col items-center justify-center"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: size * 1.4,
          opacity: phase === "archetype" ? 1 : 0,
          transition: `opacity ${FADE_DUR}ms ease-in-out`,
          pointerEvents: "none",
        }}
      >
        <FingerprintPattern size={42} stroke="#D4AF37" strokeWidth={1.5} />
        <p
          className="mt-4 text-center font-semibold tracking-[0.15em] uppercase"
          style={{ color: "#D4AF37", fontSize: "0.65rem" }}
        >
          Your Literary Archetype
        </p>
        <p
          className="mt-2 text-center leading-none"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontStyle: "italic",
            fontWeight: 600,
            fontSize: `${size * 0.38}px`,
            color: "#D4AF37",
          }}
        >
          Sherlock<br />Holmes
        </p>
      </div>
    </div>
  );
}
