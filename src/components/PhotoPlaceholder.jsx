import { User } from "lucide-react"

export default function PhotoPlaceholder({ label = "Photo", shape = "rect", className = "" }) {
  return (
    <div className={`photo-placeholder photo-placeholder--${shape} ${className}`}>
      <User size={shape === "circle" ? 28 : 34} strokeWidth={1.3} />
      <span>{label}</span>
    </div>
  )
}
