import Link from "next/link";

export const metadata = {
  title: "You're on the list — Ethos",
};

export default function Thanks() {
  return (
    <div className="min-h-screen bg-[#FAFAF8] font-[family-name:var(--font-jakarta)] flex items-center justify-center px-6">
      <div className="max-w-lg text-center">
        <div className="flex items-center justify-center gap-1 mb-8">
          <img src="/ethos-logo-icon.png" alt="" style={{ height: 36, width: "auto" }} />
          <span className="text-[#1A1A1A] text-2xl tracking-tight" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 700 }}>Ethos</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1A1A1A] mb-4">You&apos;re on the list.</h1>
        <p className="text-[#6B6B6B] leading-relaxed mb-8">
          Your spot on the Ethos waitlist is confirmed. When the app is ready,
          you&apos;ll be the first to know. Until then, happy reading.
        </p>
        <Link
          href="/"
          className="inline-block bg-[#1A1A1A] text-[#FAFAF8] text-sm font-semibold px-6 py-3 rounded-lg hover:bg-[#333] transition-colors"
        >
          Back to Ethos
        </Link>
      </div>
    </div>
  );
}
