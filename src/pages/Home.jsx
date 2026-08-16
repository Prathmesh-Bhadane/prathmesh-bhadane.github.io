import { Link } from "react-router-dom"
import { ArrowUpRight, Download } from "lucide-react"
import Spectrum from "../components/Spectrum"
import { Mail, Phone, GraduationCap, MapPin, Linkedin } from "lucide-react"
import PhotoPlaceholder from "../components/PhotoPlaceholder"
import { profile, stats, education, journey, nav } from "../data"

const experienceSnapshot = journey.filter((j) => j.title !== "MTech, Material Science and Engineering" && j.title !== "BE, Mechanical Engineering")

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero__trace">
          <Spectrum width={1400} height={260} seed={7} peaks={6} strokeWidth={1.2} fill fillOpacity={0.05} />
        </div>

        <div className="section-inner hero__inner">
          <p className="eyebrow">Materials engineering &middot; MOF chemistry</p>
          <h1 className="hero__name">{profile.name}</h1>
          <p className="hero__role">
            {profile.title} &mdash; {profile.institution}
          </p>
          <p className="hero__tagline">{profile.tagline}</p>

          <div className="hero__actions">
            <Link className="btn btn--primary" to="/research">
              View research
            </Link>
            <a className="btn btn--ghost" href={profile.cvUrl} download>
              <Download size={15} /> Download CV
            </a>
            <a className="btn btn--ghost" href={profile.linkedinUrl} target="_blank" rel="noreferrer">
            <Linkedin size={16} /> LinkedIn
          </a>
          <a className="btn btn--ghost" href={profile.scholarUrl} target="_blank" rel="noreferrer">
            <GraduationCap size={16} /> Google Scholar
          </a>
          </div>

          <dl className="hero__stats">
            {stats.map((s) => (
              <div className="hero__stat" key={s.label}>
                <dt>{s.value}</dt>
                <dd>{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="about-teaser">
        <div className="section-inner about-teaser__inner">
          {/* <PhotoPlaceholder label="Photo" /> */}
          <img src="/Untitled design.jpg" alt="..." />
          <div className="about-teaser__body">
            <p className="eyebrow">About me</p>
            <p className="about-teaser__text">
              I work at the intersection of materials chemistry and environmental engineering, building
              metal-organic frameworks that pull rare earth elements and heavy metals out of waste streams,
              and convert greenhouse gases into useful chemicals.
            </p>
            <Link className="text-link" to="/about">
              Read more <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <section className="snapshot">
        <div className="section-inner snapshot__inner">
          <div>
            <p className="label-sm">Education</p>
            <ul className="snapshot__list">
              {education.map((e) => (
                <li key={e.degree}>
                  <span className="snapshot__list-title">{e.degree}</span>
                  <span className="snapshot__list-meta">
                    {e.institution} &middot; {e.period}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label-sm">Experience</p>
            <ul className="snapshot__list">
              {experienceSnapshot.map((e) => (
                <li key={e.title}>
                  <span className="snapshot__list-title">{e.title}</span>
                  <span className="snapshot__list-meta">
                    {e.place} &middot; {e.period}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="quicklinks">
        <div className="section-inner quicklinks__grid">
          {nav
            .filter((n) => n.path !== "/")
            .map((n) => (
              <Link className="quicklinks__card" to={n.path} key={n.path}>
                <span>{n.label}</span>
                <ArrowUpRight size={16} />
              </Link>
            ))}
        </div>
      </section>
    </>
  )
}
