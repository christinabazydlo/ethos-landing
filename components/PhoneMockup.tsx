"use client";

type PhoneColor = "dark" | "silver";
type ScreenType = "home" | "fingerprint";

export default function PhoneMockup({
  screen,
  color = "dark",
  className = "",
}: {
  screen: ScreenType;
  color?: PhoneColor;
  className?: string;
}) {
  const frameColor = color === "silver" ? "#E8E8E8" : "#1A1A1A";
  const frameBorder = color === "silver" ? "#D0D0D0" : "#333";
  const buttonColor = color === "silver" ? "#C8C8C8" : "#2a2a2a";
  const screenBg = screen === "home" ? "#FAFAF8" : "#0F0F0F";

  return (
    <div
      className={`relative mx-auto ${className}`}
      style={{ width: 260, height: 530 }}
    >
      {/* Glow effect */}
      <div
        className="absolute inset-0 rounded-[44px] blur-2xl opacity-30"
        style={{
          background:
            color === "silver"
              ? "radial-gradient(ellipse, rgba(200,200,200,0.6) 0%, transparent 70%)"
              : "radial-gradient(ellipse, rgba(45,74,62,0.5) 0%, transparent 70%)",
          transform: "scale(1.1)",
        }}
      />

      {/* Frame */}
      <div
        className="absolute inset-0 rounded-[44px] shadow-2xl"
        style={{
          background:
            color === "silver"
              ? "linear-gradient(160deg, #f0f0f0 0%, #d8d8d8 50%, #c8c8c8 100%)"
              : "linear-gradient(160deg, #2a2a2a 0%, #1a1a1a 50%, #0f0f0f 100%)",
          border: `1px solid ${frameBorder}`,
        }}
      />

      {/* Screen */}
      <div
        className="absolute overflow-hidden"
        style={{
          top: 14,
          left: 10,
          right: 10,
          bottom: 14,
          borderRadius: 36,
          background: screenBg,
        }}
      >
        {/* Status bar */}
        <div className="flex items-center justify-between px-5 pt-3 pb-1">
          <span
            className="text-[10px] font-semibold"
            style={{ color: screen === "home" ? "#1A1A1A" : "#FAFAF8" }}
          >
            9:41
          </span>
          <div className="flex items-center gap-1">
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
              {[0, 4, 8].map((x, i) => (
                <rect
                  key={x}
                  x={x}
                  y={3 - i * 0.5}
                  width="3"
                  height={7 + i * 0.5}
                  rx="0.5"
                  fill={screen === "home" ? "#1A1A1A" : "#FAFAF8"}
                />
              ))}
              <rect x="12" y="0" width="2" height="10" rx="0.5" fill={screen === "home" ? "#1A1A1A" : "#FAFAF8"} opacity="0.3" />
            </svg>
          </div>
        </div>

        {/* Dynamic island */}
        <div
          className="mx-auto -mt-1 mb-1"
          style={{
            width: 80,
            height: 20,
            background: "#0F0F0F",
            borderRadius: 999,
          }}
        />

        {screen === "home" ? <HomeScreen /> : <FingerprintScreen />}
      </div>

      {/* Side buttons */}
      {[
        { side: "left", top: 96, h: 32 },
        { side: "left", top: 144, h: 48 },
        { side: "left", top: 208, h: 48 },
        { side: "right", top: 128, h: 64 },
      ].map(({ side, top, h }, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            [side]: -3,
            top,
            width: 3,
            height: h,
            background: buttonColor,
            borderRadius: side === "left" ? "2px 0 0 2px" : "0 2px 2px 0",
          }}
        />
      ))}
    </div>
  );
}

function HomeScreen() {
  const books = [
    { title: "The Secret History", author: "Donna Tartt", color: "#2d3a2d" },
    { title: "Pachinko", author: "Min Jin Lee", color: "#2d2d3a" },
    { title: "Normal People", author: "Sally Rooney", color: "#3a2d2d" },
    { title: "The Night Circus", author: "Erin Morgenstern", color: "#2d3a3a" },
  ];

  return (
    <div className="flex flex-col h-full overflow-hidden">
      {/* Header */}
      <div className="px-4 pt-1 pb-3 flex items-center justify-between">
        <div>
          <div className="text-[#6B6B6B] text-[9px]">Good evening</div>
          <div className="text-[#1A1A1A] text-[13px] font-bold">Today&apos;s Selections</div>
        </div>
        <div className="w-7 h-7 rounded-full bg-[#F2EFE8] border border-[#E8E4DC] flex items-center justify-center">
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="6" r="2.5" stroke="#6B6B6B" strokeWidth="1.3" />
            <path d="M3 13c0-2.76 2.24-5 5-5s5 2.24 5 5" stroke="#6B6B6B" strokeWidth="1.3" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* Featured book */}
      <div className="mx-4 mb-3 rounded-xl overflow-hidden flex" style={{ background: "#2d3a2d", height: 110 }}>
        <div className="flex-1 p-3 flex flex-col justify-end">
          <div className="text-[#D4AF37] text-[8px] font-bold uppercase tracking-wider mb-1">Featured Pick</div>
          <div className="text-[#FAFAF8] text-[11px] font-bold leading-tight">The Secret History</div>
          <div className="text-[#FAFAF8]/60 text-[8px]">Donna Tartt</div>
        </div>
        <div className="w-20 relative">
          <div className="absolute inset-2 rounded-lg bg-[#1a2a1a] flex items-center justify-center">
            <div className="w-1 h-8 bg-[#D4AF37] opacity-40 rounded-full" />
          </div>
        </div>
      </div>

      {/* Book grid */}
      <div className="px-4 mb-2">
        <div className="text-[#6B6B6B] text-[8px] font-semibold uppercase tracking-wider mb-2">More for you</div>
        <div className="grid grid-cols-2 gap-2">
          {books.slice(1).map(({ title, author, color }) => (
            <div key={title} className="flex gap-2 items-start">
              <div
                className="w-9 h-12 rounded-md flex-shrink-0"
                style={{ background: color, border: "1px solid rgba(255,255,255,0.06)" }}
              />
              <div className="min-w-0">
                <div className="text-[#1A1A1A] text-[8px] font-semibold leading-tight line-clamp-2">{title}</div>
                <div className="text-[#6B6B6B] text-[7px] mt-0.5">{author}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tab bar */}
      <div className="mt-auto border-t border-[#E8E4DC] flex items-center justify-around px-2 py-2 bg-[#FAFAF8]">
        {[
          { label: "For You", active: true },
          { label: "Explore", active: false },
          { label: "Library", active: false },
          { label: "Profile", active: false },
        ].map(({ label, active }) => (
          <div key={label} className="flex flex-col items-center gap-0.5">
            <div className="w-4 h-4 rounded-sm" style={{ background: active ? "#2D4A3E" : "#E8E4DC" }} />
            <span className="text-[6px]" style={{ color: active ? "#2D4A3E" : "#6B6B6B" }}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function FingerprintScreen() {
  return (
    <div className="px-4 pb-4 flex flex-col h-full">
      <div className="text-[#6B6B6B] text-[10px] font-semibold uppercase tracking-widest mb-1">Your fingerprint</div>
      <div className="text-[#FAFAF8] text-base font-bold mb-4">Literary Identity</div>

      <div className="bg-[#1a1a1a] rounded-2xl p-4 mb-4 flex flex-col items-center border border-[#2a2a2a]">
        <svg width="72" height="72" viewBox="0 0 120 120" fill="none" className="mb-2">
          <defs>
            <linearGradient id="fp2" x1="20" y1="20" x2="100" y2="100" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#2D4A3E" />
              <stop offset="100%" stopColor="#D4AF37" />
            </linearGradient>
          </defs>
          {[11, 18, 25, 32, 39, 46].map((r, i) => (
            <circle
              key={r}
              cx="60" cy="60" r={r}
              stroke="url(#fp2)"
              strokeWidth={2.2 - i * 0.15}
              strokeLinecap="round"
              strokeDasharray={`${r * 4.5} ${r * 1.5}`}
              strokeDashoffset={r * i * 0.4}
            />
          ))}
          <text x="60" y="66" textAnchor="middle" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="18" fontWeight="800" fill="url(#fp2)">E</text>
        </svg>
        <div className="text-[#D4AF37] text-[11px] font-bold">Sherlock Holmes</div>
        <div className="text-[#6B6B6B] text-[9px] mt-0.5">Your literary character</div>
      </div>

      <div className="space-y-2 mb-4">
        {[
          { label: "Voice", pct: 88 },
          { label: "Themes", pct: 76 },
          { label: "Pacing", pct: 62 },
        ].map(({ label, pct }) => (
          <div key={label}>
            <div className="flex justify-between mb-0.5">
              <span className="text-[#FAFAF8] text-[9px] font-semibold">{label}</span>
            </div>
            <div className="h-1 bg-[#2a2a2a] rounded-full overflow-hidden">
              <div className="h-full rounded-full" style={{ width: `${pct}%`, background: "linear-gradient(90deg, #1A1A1A, #D4AF37)" }} />
            </div>
          </div>
        ))}
      </div>

      <button className="w-full py-2.5 rounded-xl text-[10px] font-bold text-[#FAFAF8]" style={{ background: "linear-gradient(135deg, #2D4A3E, #1e3329)" }}>
        Share my fingerprint
      </button>
    </div>
  );
}
