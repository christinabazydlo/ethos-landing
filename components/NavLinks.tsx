"use client";

const links = [
  { href: "fingerprint", label: "The Fingerprint" },
  { href: "traits",      label: "Trait Breakdown" },
  { href: "features",    label: "Features" },
  { href: "pricing",     label: "Pricing" },
];

function smoothScrollTo(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  const start = window.scrollY;
  const target = el.getBoundingClientRect().top + start - 64; // 64px nav offset
  const distance = target - start;
  const duration = 900;
  let startTime: number | null = null;

  function easeInOutCubic(t: number) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function step(timestamp: number) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, start + distance * easeInOutCubic(progress));
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

export default function NavLinks() {
  return (
    <div className="hidden md:flex items-center gap-8">
      {links.map(({ href, label }) => (
        <button
          key={href}
          onClick={() => smoothScrollTo(href)}
          className="relative overflow-hidden h-5 group flex items-start bg-transparent border-none p-0 cursor-pointer"
        >
          <div className="flex flex-col transition-transform duration-500 ease-out group-hover:-translate-y-5">
            <span className="text-sm font-semibold h-5 flex items-center text-[#6B6B6B]">{label}</span>
            <span className="text-sm font-semibold h-5 flex items-center text-[#C4973B]">{label}</span>
          </div>
        </button>
      ))}
    </div>
  );
}
