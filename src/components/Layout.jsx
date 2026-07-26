import { Outlet, useLocation } from "react-router-dom"
import { useEffect } from "react"
import NavBar from "./NavBar"
import Footer from "./Footer"

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function Layout() {
  return (
    <div className="portfolio">
      <ScrollToTop />
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
