// A single reusable "instrument trace" motif — a jagged baseline with a few
// sharp peaks, echoing the XRD / FTIR / UV-Vis spectra this work is built on.
// Each usage gets its own seed so peaks land in different places.
function buildPath(width, height, seed = 1, peakCount = 5) {
  const points = []
  const steps = 64
  const rand = mulberry32(seed)
  const peakPositions = Array.from({ length: peakCount }, () => 0.08 + rand() * 0.84).sort((a, b) => a - b)

  for (let i = 0; i <= steps; i++) {
    const x = (i / steps) * width
    const t = i / steps
    let y = height * 0.86 + (rand() - 0.5) * height * 0.03

    for (const p of peakPositions) {
      const dist = Math.abs(t - p)
      const width_ = 0.02 + rand() * 0.015
      if (dist < width_ * 4) {
        const amp = height * (0.35 + rand() * 0.45)
        y -= amp * Math.exp(-(dist * dist) / (2 * width_ * width_))
      }
    }
    points.push([x, y])
  }

  return points.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`).join(" ")
}

function mulberry32(a) {
  return function () {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

export default function Spectrum({
  width = 800,
  height = 120,
  seed = 1,
  peaks = 5,
  stroke = "var(--highlight)",
  strokeWidth = 1.4,
  fill = false,
  fillOpacity = 0.08,
  className = "",
}) {
  const d = buildPath(width, height, seed, peaks)
  return (
    <svg
      className={`spectrum-svg ${className}`}
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {fill && <path d={`${d} L${width},${height} L0,${height} Z`} fill={stroke} opacity={fillOpacity} stroke="none" />}
      <path d={d} fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
