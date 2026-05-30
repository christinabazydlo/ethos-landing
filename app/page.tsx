import AnimatedPhone from "@/components/AnimatedPhone";
import TraitBreakdown from "@/components/TraitBreakdown";
import FingerprintPattern from "@/components/FingerprintPattern";
import AnimatedFingerprint from "@/components/AnimatedFingerprint";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAFAF8] font-[family-name:var(--font-jakarta)] overflow-x-hidden">

      {/* Page-load progress bar */}
      <div className="fixed top-0 left-0 right-0 z-[60]" style={{ height: 2, background: "#E8E4DC" }}>
        <div style={{ height: "100%", background: "#C4973B", animation: "pageLoad 1.2s ease-out forwards" }} />
      </div>

      {/* ── Nav ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAFAF8]/90 backdrop-blur-sm border-b border-[#E8E4DC]" style={{ marginTop: 2 }}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <FingerprintPattern size={28} stroke="#1A1A1A" />
            <span className="font-bold text-[#1A1A1A] text-lg tracking-tight">Ethos</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {[
              { href: "#fingerprint", label: "The Fingerprint" },
              { href: "#traits",      label: "Trait Breakdown" },
              { href: "#features",    label: "Features" },
              { href: "#pricing",     label: "Pricing" },
            ].map(({ href, label }) => (
              <a key={href} href={href} className="relative overflow-hidden h-5 group flex items-start">
                <div className="flex flex-col transition-transform duration-500 ease-out group-hover:-translate-y-5">
                  <span className="text-sm h-5 flex items-center text-[#6B6B6B]">{label}</span>
                  <span className="text-sm h-5 flex items-center text-[#C4973B]">{label}</span>
                </div>
              </a>
            ))}
          </div>
          <a href="#waitlist" className="bg-[#1A1A1A] text-[#FAFAF8] text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-[#333] transition-colors">
            Join the waitlist
          </a>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative pt-24 pb-0 overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle, #C4973B 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#FAFAF8] to-transparent" />

        <div className="relative max-w-6xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left — copy */}
            <div>
              {/* Logo */}
              <div className="block mb-6" data-animate="1">
                <img src="/ethos-logo.png" alt="Ethos" style={{ height: 160, width: "auto", marginLeft: "-12px" }} />
              </div>

              <div className="inline-flex items-center gap-2 bg-[#F2EFE8] border border-[#E8E4DC] rounded-full px-4 py-2 mb-7" data-animate="1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1A1A1A]" />
                <span className="text-xs font-semibold text-[#1A1A1A] tracking-wide uppercase">Join the waitlist</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1A1A1A] leading-[1.15] tracking-tight mb-5" data-animate="2">
                <span className="block whitespace-nowrap">Book recommendations</span>
                <span className="block whitespace-nowrap font-bold">built on your{" "}
                  <span style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic", fontWeight: 600, color: "#C4973B", fontSize: "1.1em" }}>
                    literary fingerprint.
                  </span>
                </span>
              </h1>

              <p className="text-lg text-[#6B6B6B] leading-relaxed mb-8 max-w-md" data-animate="3">
                Most apps track what you&apos;ve read. Ethos understands how you read — voice, prose style, moral texture — and finds books that actually fit.
              </p>

              <form
                id="waitlist"
                action="https://buttondown.com/api/emails/embed-subscribe/ethos"
                method="post"
                target="_blank"
                className="flex flex-col sm:flex-row gap-3 max-w-lg"
                data-animate="4"
              >
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  className="flex-1 bg-white border border-[#E8E4DC] rounded-lg px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#6B6B6B] focus:outline-none focus:border-[#1A1A1A] focus:ring-1 focus:ring-[#1A1A1A]"
                />
                <button type="submit" className="bg-[#1A1A1A] text-[#FAFAF8] text-sm font-semibold px-6 py-3 rounded-lg hover:bg-[#333] transition-colors whitespace-nowrap">
                  Join the waitlist
                </button>
              </form>
            </div>

            {/* Right — animated iPhone */}
            <div className="flex justify-center lg:justify-end pb-10" data-animate="5">
              <AnimatedPhone />
            </div>
          </div>
        </div>
      </section>

      {/* ── Fingerprint Section (dark) ── */}
      <section id="fingerprint" className="bg-[#222222] py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Fingerprint illustration */}
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="relative flex items-center justify-center" style={{ width: 260, height: 260 }}>
                {/* Ambient glow */}
                <div className="absolute inset-0 rounded-full blur-3xl opacity-20" style={{ background: "radial-gradient(ellipse, #C4973B 0%, transparent 70%)" }} />
                <div className="relative z-10">
                  <AnimatedFingerprint size={220} />
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 border border-[#333] rounded-full px-4 py-1.5 mb-6">
                <span className="text-xs font-semibold text-[#C4973B] tracking-wide uppercase">The fingerprint</span>
              </div>

              <h2 className="text-4xl font-extrabold text-[#FAFAF8] mb-6 leading-tight">
                It&apos;s not what you&apos;ve read. It&apos;s how you read.
              </h2>

              <p className="text-[#aaa] leading-relaxed mb-8">
                Ethos builds your literary fingerprint from the books you love — analyzing
                voice, theme, moral texture, and emotional register to understand
                how you read, not just what you&apos;ve read.
              </p>

              <ul className="space-y-5">
                {[
                  { title: "Built from your taste", body: "Rate books, build your library, and Ethos constructs a fingerprint that captures your sensibility at depth." },
                  { title: "Evolves with you", body: "Add more books and your fingerprint sharpens. Rebuild it anytime as your reading life changes." },
                  { title: "Every reader gets a character", body: "Sherlock Holmes, Jay Gatsby, Atticus Finch — your fingerprint maps to a literary archetype that reflects how you read." },
                ].map(({ title, body }) => (
                  <li key={title} className="flex gap-4">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-[#C4973B]" />
                    <div>
                      <span className="font-semibold text-[#FAFAF8]">{title} — </span>
                      <span className="text-[#888] text-sm">{body}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trait Breakdown ── */}
      <section id="traits" className="bg-[#F2EFE8] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-extrabold text-[#1A1A1A] mb-5 leading-tight">
                See exactly what shapes your taste.
              </h2>
              <p className="text-[#6B6B6B] leading-relaxed mb-6">
                Your fingerprint isn&apos;t a black box. Ethos breaks it down into the
                specific traits that define how you read — atmosphere, prose style,
                character depth, and more.
              </p>
              <p className="text-[#6B6B6B] leading-relaxed">
                Every recommendation traces back to something real in your fingerprint.
                Not &ldquo;readers like you also enjoyed&rdquo; — your specific sensibility, mapped.
              </p>
            </div>
            <div>
              <TraitBreakdown />
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section id="features" className="bg-[#FAFAF8] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1A1A] mb-4">Built for readers who take it seriously.</h2>
            <p className="text-[#6B6B6B] max-w-sm mx-auto text-sm">Everything you need to track what you love, discover what fits, and understand your own taste.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <FingerprintPattern size={22} stroke="#2D4A3E" strokeWidth={1.5} />,
                title: "Your Literary Fingerprint",
                body: "Ethos reads how you respond to voice, pacing, theme, and emotional tone — then maps that into a fingerprint that's uniquely yours.",
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2D4A3E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                    <path d="M18 3.5l.6 1.8H20.5l-1.5 1.1.6 1.8-1.6-1.1-1.6 1.1.6-1.8L15.5 5.3H17.4z" stroke="#C4973B" fill="#C4973B" />
                  </svg>
                ),
                title: "Your Character Archetype",
                body: "Every reader maps to a literary character. Discover yours and understand something true about the way you move through a book.",
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2D4A3E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                    <path d="M12 7v4M10 9h4" stroke="#C4973B" />
                  </svg>
                ),
                title: "Your Reading Life, Catalogued",
                body: "Log what you've finished, save what's next. Every book you add sharpens your fingerprint and improves every recommendation.",
              },
            ].map(({ icon, title, body }) => (
              <div key={title} className="bg-[#F2EFE8] rounded-2xl p-8 border border-[#E8E4DC]">
                <div className="w-11 h-11 rounded-xl bg-[#E8E4DC] flex items-center justify-center mb-6">{icon}</div>
                <h3 className="text-lg font-bold text-[#1A1A1A] mb-3">{title}</h3>
                <p className="text-sm text-[#6B6B6B] leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-[#6B6B6B] mt-10">More features on the way. We&apos;re just getting started.</p>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section id="pricing" className="bg-[#F2EFE8] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1A1A] mb-4">Simple pricing.</h2>
            <p className="text-[#6B6B6B] mb-8">Start free. Go deeper when you&apos;re ready.</p>
            <a href="#waitlist" className="inline-block bg-[#1A1A1A] text-[#FAFAF8] text-sm font-semibold px-8 py-3.5 rounded-xl hover:bg-[#333] transition-colors">
              Join the waitlist
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Free */}
            <div className="bg-[#FAFAF8] rounded-2xl p-8 border border-[#E8E4DC] flex flex-col">
              <div className="mb-6">
                <div className="text-xs font-semibold text-[#6B6B6B] uppercase tracking-widest mb-2">Free</div>
                <div className="text-4xl font-extrabold text-[#1A1A1A]">$0</div>
                <div className="text-sm text-[#6B6B6B] mt-1">Always free</div>
              </div>
              <ul className="space-y-3 flex-1">
                {[
                  "Your literary fingerprint",
                  "Trait breakdown — see what shapes your taste",
                  "Your character archetype",
                  "3 recommendations to start",
                  "Track reads and want-to-reads",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-[#1A1A1A]">
                    <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#1A1A1A]" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Premium */}
            <div className="rounded-2xl p-8 flex flex-col relative overflow-hidden border border-[#C4973B]/40"
              style={{ background: "linear-gradient(160deg, #1E1A12 0%, #2A2416 100%)" }}>
              <div className="absolute top-4 right-4 bg-[#C4973B] text-[#1A1A1A] text-xs font-bold px-3 py-1 rounded-full">
                Premium
              </div>
              <div className="mb-6">
                <div className="text-xs font-semibold text-[#C4973B] uppercase tracking-widest mb-2">Premium</div>
                <div className="text-4xl font-extrabold text-[#FAFAF8]">$4.99</div>
                <div className="text-sm text-[#FAFAF8]/50 mt-1">per month · or $34.99/yr</div>
              </div>
              <ul className="space-y-3 flex-1">
                {[
                  "Everything in Free",
                  "Fresh set of 14 recommendations every month",
                  "Recommendations update when you add 5 or more books",
                  "Rebuild your fingerprint as your taste evolves",
                  "Buy individual refreshes for $0.99 if you prefer",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-[#FAFAF8]">
                    <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#C4973B]" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-[#1A1A1A] py-16">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <FingerprintPattern size={32} stroke="#C4973B" />
            <div>
              <div className="font-bold text-[#FAFAF8] text-base">Ethos</div>
              <div className="text-xs text-[#6B6B6B]">Recommendations built on your literary fingerprint.</div>
            </div>
          </div>
          <p className="text-xs text-[#6B6B6B]">&copy; {new Date().getFullYear()} Ethos. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}
