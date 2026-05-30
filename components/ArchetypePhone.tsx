import EthosLogo from "@/components/EthosLogo";

export default function ArchetypePhone() {
  return (
    <div className="relative mx-auto" style={{ width: 280, height: 570 }}>
      {/* Glow */}
      <div
        className="absolute inset-0 rounded-[46px] blur-3xl opacity-20"
        style={{ background: "radial-gradient(ellipse, #C4973B 0%, transparent 70%)", transform: "scale(1.15)" }}
      />

      {/* Phone frame — silver */}
      <div
        className="absolute inset-0 rounded-[46px] shadow-2xl"
        style={{
          background: "linear-gradient(160deg, #f4f4f4 0%, #dcdcdc 50%, #c8c8c8 100%)",
          border: "1px solid #d0d0d0",
        }}
      />

      {/* Screen */}
      <div
        className="absolute overflow-hidden bg-[#111111]"
        style={{ top: 14, left: 10, right: 10, bottom: 14, borderRadius: 38 }}
      >
        {/* Status bar */}
        <div className="flex items-center justify-between px-5 pt-3 pb-1">
          <span className="text-[#FAFAF8] text-[10px] font-semibold">9:41</span>
          <div className="flex items-center gap-1">
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
              {[0, 4, 8].map((x, i) => (
                <rect key={x} x={x} y={3 - i * 0.5} width="3" height={7 + i * 0.5} rx="0.5" fill="#FAFAF8" />
              ))}
              <rect x="12" y="0" width="2" height="10" rx="0.5" fill="#FAFAF8" opacity="0.3" />
            </svg>
          </div>
        </div>

        {/* Dynamic island */}
        <div className="mx-auto -mt-1 mb-4" style={{ width: 80, height: 20, background: "#000", borderRadius: 999 }} />

        {/* Archetype content — exact match to Pencil screen */}
        <div className="flex flex-col items-center px-5 flex-1 h-full">
          {/* Fingerprint icon */}
          <EthosLogo size={40} className="mb-3" />

          {/* Label */}
          <p className="text-[#C4973B] text-[9px] font-bold tracking-[0.2em] uppercase mb-4">
            Your Literary Archetype
          </p>

          {/* Character name */}
          <h2 className="text-[42px] font-extrabold text-[#C4973B] leading-none mb-3 text-center" style={{ fontFamily: "Georgia, serif" }}>
            Sherlock Holmes
          </h2>

          {/* Divider */}
          <div className="w-16 h-px bg-[#C4973B]/40 mb-4" />

          {/* Description */}
          <p className="text-[#FAFAF8] text-[11px] italic text-center leading-relaxed mb-4 px-1">
            Pattern is what draws you in. You gravitate toward books built on intellect and tension: sharp plotting, layered mysteries, prose that rewards attention. You read to be challenged, and you notice what others miss.
          </p>

          {/* Sub-label */}
          <p className="text-[#666] text-[9px] text-center mb-2">
            Your archetype reflects how you read, not who you are.
          </p>
          <p className="text-[#555] text-[9px] text-center mb-6">Change in Settings</p>

          {/* Spacer */}
          <div className="flex-1" />

          {/* CTA button */}
          <div className="w-full px-2 pb-8">
            <div
              className="w-full py-3.5 rounded-2xl flex items-center justify-center"
              style={{ background: "#C4973B" }}
            >
              <span className="text-[#111] text-[12px] font-bold">Discover your full profile</span>
            </div>
          </div>
        </div>
      </div>

      {/* Side buttons */}
      {[
        { side: "left" as const, top: 100, h: 32 },
        { side: "left" as const, top: 148, h: 48 },
        { side: "left" as const, top: 212, h: 48 },
        { side: "right" as const, top: 136, h: 64 },
      ].map(({ side, top, h }, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            [side]: -3,
            top,
            width: 3,
            height: h,
            background: "#C8C8C8",
            borderRadius: side === "left" ? "2px 0 0 2px" : "0 2px 2px 0",
          }}
        />
      ))}
    </div>
  );
}
