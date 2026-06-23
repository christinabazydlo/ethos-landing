import AnimatedPhone from "@/components/AnimatedPhone";
import TraitBreakdown from "@/components/TraitBreakdown";
import FingerprintReveal from "@/components/FingerprintReveal";
import NavLinks from "@/components/NavLinks";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAFAF8] font-[family-name:var(--font-jakarta)] overflow-x-hidden">

      {/* ── Nav ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAFAF8]/90 backdrop-blur-sm border-b border-[#E8E4DC]">
        <div className="max-w-6xl mx-auto px-16 h-16 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <img src="/ethos-logo-icon.png" alt="" style={{ height: 28, width: "auto" }} />
            <span className="text-[#1A1A1A] text-xl tracking-tight" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 700 }}>Ethos</span>
          </div>
          <NavLinks />
          <a href="#waitlist" className="bg-[#1A1A1A] text-[#FAFAF8] text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-[#333] transition-colors">
            Join the waitlist
          </a>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative pt-24 pb-24 overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle, #D4AF37 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#FAFAF8] to-transparent" />

        <div className="relative max-w-6xl mx-auto px-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left — copy */}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-[#F2EFE8] border border-[#E8E4DC] rounded-full px-4 py-2 mb-7" data-animate="1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1A1A1A]" />
                <span className="text-xs font-semibold text-[#1A1A1A] tracking-wide uppercase">Join the waitlist</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1A1A1A] leading-[1.15] tracking-tight mb-5" data-animate="2">
                <span className="block">Never wonder</span>
                <span className="block">what to{" "}
                  <span style={{ color: "#D4AF37" }}>read next.</span>
                </span>
              </h1>

              <p className="text-lg text-[#6B6B6B] leading-relaxed mb-8 max-w-md" data-animate="3">
                Most apps track what you&apos;ve read. Ethos builds a literary fingerprint from how you read, so you always have a next book ready.
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
              <p className="text-xs text-[#6B6B6B] mt-3" data-animate="4">Your reading data stays private. Never shared.</p>
              <p className="text-xs text-[#6B6B6B] mt-1" data-animate="4">First 20 members get an extended free trial.</p>
            </div>

            {/* Right — animated iPhone */}
            <div className="flex justify-center lg:justify-end pb-10 lg:translate-x-12" data-animate="5">
              <AnimatedPhone />
            </div>
          </div>
        </div>
      </section>

      {/* ── Fingerprint Section (dark) ── */}
      <section id="fingerprint" className="bg-[#222222] py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Fingerprint illustration — centered in its column */}
            <div className="flex justify-center order-2 lg:order-1">
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 rounded-full blur-3xl opacity-25" style={{ background: "radial-gradient(ellipse, #D4AF37 0%, transparent 70%)" }} />
                <div className="relative z-10">
                  <FingerprintReveal size={230} />
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 border border-[#D4AF37]/50 rounded-full px-4 py-1.5 mb-6">
                <span className="text-xs font-semibold text-[#D4AF37] tracking-wide uppercase">The fingerprint</span>
              </div>
              <h2 className="text-4xl font-extrabold text-[#FAFAF8] mb-6 leading-tight">
                It&apos;s not what you&apos;ve read. It&apos;s how you read.
              </h2>
              <p className="text-[#aaa] leading-relaxed mb-8">
                Ethos builds your literary fingerprint from the books you love, analyzing
                voice, theme, moral texture, and emotional register to understand
                how you read, not just what you&apos;ve read.
              </p>
              <ul className="space-y-5">
                {[
                  { title: "Built from your taste", body: "Rate books, build your library, and Ethos constructs a fingerprint that captures your sensibility at depth." },
                  { title: "Evolves with you", body: "Add more books and your fingerprint sharpens. Rebuild it anytime as your reading life changes." },
                  { title: "Every reader gets a character", body: "Sherlock Holmes, Jo March, Jay Gatsby, Atticus Finch. Your fingerprint maps to a literary archetype that reflects how you read." },
                ].map(({ title, body }) => (
                  <li key={title} className="flex gap-4">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-[#D4AF37]" />
                    <div>
                      <span className="font-semibold text-[#FAFAF8]">{title}. </span>
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
        <div className="max-w-6xl mx-auto px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-extrabold text-[#1A1A1A] mb-5 leading-tight">
                See exactly what shapes your taste.
              </h2>
              <p className="text-[#6B6B6B] leading-relaxed mb-6">
                Your fingerprint isn&apos;t a black box. Ethos breaks it down into the
                specific traits that define how you read: atmosphere, prose style,
                character depth, and more.
              </p>
              <p className="text-[#6B6B6B] leading-relaxed">
                Every recommendation traces back to something real in your fingerprint.
                Not &ldquo;readers like you also enjoyed.&rdquo; Your specific sensibility, mapped.
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
        <div className="max-w-6xl mx-auto px-16">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1A1A] mb-4">Built for readers who take it seriously.</h2>
            <p className="text-[#6B6B6B] max-w-sm mx-auto text-base">Everything you need to track what you love, discover what fits, and understand your own taste.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2D4A3E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3.5 2" stroke="#D4AF37" />
                  </svg>
                ),
                title: "Always Know What's Next",
                body: "Finish a book and your next one is already waiting. Ethos keeps fresh recommendations ready so you're never sitting there wondering what to read.",
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2D4A3E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3v12" />
                    <path d="M7 10l5 5 5-5" />
                    <path d="M4 16v3a2 2 0 002 2h12a2 2 0 002-2v-3" stroke="#D4AF37" />
                  </svg>
                ),
                title: "Bring Your Existing Library",
                body: "Already tracking your reads elsewhere? Bring your library over in one import, no starting from zero.",
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2D4A3E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                    <path d="M12 7v4M10 9h4" stroke="#D4AF37" />
                  </svg>
                ),
                title: "Track Your Reading Life",
                body: "Read, Want to Read, DNF. Every book you log sharpens your fingerprint and improves every recommendation.",
              },
            ].map(({ icon, title, body }) => (
              <div key={title} className="bg-[#F2EFE8] rounded-2xl p-8 border border-[#E8E4DC]">
                <div className="w-11 h-11 rounded-xl bg-[#E8E4DC] flex items-center justify-center mb-6">{icon}</div>
                <h3 className="text-lg font-bold text-[#1A1A1A] mb-3">{title}</h3>
                <p className="text-sm text-[#6B6B6B] leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-base font-semibold text-[#6B6B6B] mt-10">More features on the way. We&apos;re just getting started.</p>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section id="pricing" className="bg-[#F2EFE8] py-24">
        <div className="max-w-6xl mx-auto px-16">
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
                  "Trait breakdown: see what shapes your taste",
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
            <div className="rounded-2xl p-8 flex flex-col relative overflow-hidden border border-[#D4AF37]/40"
              style={{ background: "linear-gradient(160deg, #1E1A12 0%, #2A2416 100%)" }}>
              <div className="absolute top-4 right-4 bg-[#D4AF37] text-[#1A1A1A] text-xs font-bold px-3 py-1 rounded-full">
                Premium
              </div>
              <div className="mb-6">
                <div className="text-xs font-semibold text-[#D4AF37] uppercase tracking-widest mb-2">Premium</div>
                <div className="text-4xl font-extrabold text-[#FAFAF8]">$4.99</div>
                <div className="text-sm text-[#FAFAF8]/50 mt-1">per month · or $34.99/yr</div>
              </div>
              <ul className="space-y-3 flex-1">
                {[
                  "Everything in Free",
                  "15 recommendations monthly, swap out what doesn't fit",
                  "Recommendations update when you add 5 or more books",
                  "Rebuild your fingerprint as your taste evolves",
                  "Buy individual refreshes for $0.99 if you prefer",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-[#FAFAF8]">
                    <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#D4AF37]" viewBox="0 0 16 16" fill="none">
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
        <div className="max-w-6xl mx-auto px-16 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-start gap-3">
            <div className="flex items-center gap-1">
              <img src="/ethos-logo-icon.png" alt="" style={{ height: 28, width: "auto", filter: "brightness(0) invert(1)", marginLeft: "-6px" }} />
              <span className="text-[#FAFAF8] text-xl tracking-tight" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 700 }}>Ethos</span>
            </div>
            <div className="text-xs text-[#6B6B6B]">Recommendations built on your literary fingerprint.</div>
            <div className="text-xs text-[#6B6B6B]">Your data is never sold, shown to advertisers, or used to train AI models.</div>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com/readethos"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-[#6B6B6B] hover:text-[#D4AF37] transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
              </svg>
              @readethos
            </a>
            <a href="/privacy" className="text-xs text-[#6B6B6B] hover:text-[#D4AF37] transition-colors">Privacy</a>
            <a href="/terms" className="text-xs text-[#6B6B6B] hover:text-[#D4AF37] transition-colors">Terms</a>
            <p className="text-xs text-[#6B6B6B]">&copy; {new Date().getFullYear()} Ethos. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
