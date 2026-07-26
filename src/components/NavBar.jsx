import { useEffect, useState } from "react"
import { NavLink, Link } from "react-router-dom"
import { Menu, X, Download } from "lucide-react"
import { nav, profile } from "../data"

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        <Link className="navbar__mark" to="/" onClick={() => setOpen(false)}>
          <span className="navbar__mark-index">PB</span>
          <span className="navbar__mark-name">Prathmesh Bhadane</span>
        </Link>

        <nav className="navbar__links" aria-label="Page navigation">
          {nav.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) => (isActive ? "is-active" : "")}
            >
              {item.label}
            </NavLink>
          ))}
          <a className="navbar__cv" href={profile.cvUrl} download>
            <Download size={14} /> CV
          </a>
        </nav>

        <button
          className="navbar__toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <nav className="navbar__mobile" aria-label="Page navigation, mobile">
          {nav.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) => (isActive ? "is-active" : "")}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <a className="navbar__cv navbar__cv--mobile" href={profile.cvUrl} download onClick={() => setOpen(false)}>
            <Download size={14} /> Download CV
          </a>
        </nav>
      )}
    </header>
  )
}
