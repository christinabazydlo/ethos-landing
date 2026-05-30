export default function TraitBreakdown() {
  const cx = 200;
  const cy = 190;
  const maxR = 130;

  const traits = [
    { label: "Atmosphere",        angle: -90,  value: 0.75 },
    { label: "Plot Pace",         angle: -18,  value: 0.70 },
    { label: "Prose Style",       angle: 54,   value: 0.55 },
    { label: "World-building",    angle: 126,  value: 0.50 },
    { label: "Character\nDepth",  angle: 198,  value: 0.82 },
  ];

  const toRad = (deg: number) => (deg * Math.PI) / 180;
  const point = (angle: number, r: number) => ({
    x: cx + r * Math.cos(toRad(angle)),
    y: cy + r * Math.sin(toRad(angle)),
  });

  const gridPolygon = (pct: number) =>
    traits.map((t) => { const p = point(t.angle, maxR * pct); return `${p.x},${p.y}`; }).join(" ");

  const dataPolygon = traits.map((t) => { const p = point(t.angle, maxR * t.value); return `${p.x},${p.y}`; }).join(" ");

  return (
    <svg viewBox="0 0 400 380" className="w-full max-w-md mx-auto">
      {[0.33, 0.66, 1].map((pct) => (
        <polygon key={pct} points={gridPolygon(pct)} fill="none" stroke="#D8D2C8" strokeWidth="1" />
      ))}

      {traits.map((t) => {
        const outer = point(t.angle, maxR);
        return <line key={t.label} x1={cx} y1={cy} x2={outer.x} y2={outer.y} stroke="#D8D2C8" strokeWidth="1" />;
      })}

      <polygon points={dataPolygon} fill="#C4973B" fillOpacity="0.2" stroke="#C4973B" strokeWidth="2" strokeLinejoin="round" />

      {traits.map((t) => {
        const p = point(t.angle, maxR * t.value);
        return <circle key={t.label} cx={p.x} cy={p.y} r="6" fill="#1A1A1A" />;
      })}

      {traits.map((t) => {
        const labelR = maxR + 28;
        const p = point(t.angle, labelR);
        const anchor =
          t.angle > -30 && t.angle < 30 ? "middle"
          : t.angle >= 30 && t.angle < 150 ? "start"
          : t.angle >= 150 || t.angle < -150 ? "middle"
          : "end";
        const lines = t.label.split("\n");
        return (
          <text key={t.label} x={p.x} y={p.y} textAnchor={anchor} dominantBaseline="middle" fontSize="12" fontFamily="Plus Jakarta Sans, sans-serif" fill="#6B6B6B">
            {lines.map((line, i) => <tspan key={i} x={p.x} dy={i === 0 ? 0 : 15}>{line}</tspan>)}
          </text>
        );
      })}
    </svg>
  );
}
