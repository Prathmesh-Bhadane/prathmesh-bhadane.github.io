import { profile } from "../data"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="section-inner footer__inner">
        <p>{profile.name}</p>
        <p>&copy; {new Date().getFullYear()}. Built with real data, no filler.</p>
      </div>
    </footer>
  )
}
