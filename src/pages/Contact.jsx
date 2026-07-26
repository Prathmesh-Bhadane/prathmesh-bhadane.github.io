import { Mail, Phone, GraduationCap, MapPin, Linkedin, Download } from "lucide-react"
import PageHead from "../components/PageHead"
import PhotoPlaceholder from "../components/PhotoPlaceholder"
import Spectrum from "../components/Spectrum"
import { profile, references } from "../data"

export default function Contact() {
  return (
    <div className="page contact-page">
      <div className="contact__trace">
        <Spectrum width={1400} height={180} seed={11} peaks={4} strokeWidth={1.2} fill fillOpacity={0.06} />
      </div>

      <div className="section-inner">
        <PageHead
          eyebrow="Contact"
          title="Get in touch"
          lead="Open to conversations on MOF design, resource recovery, and catalytic gas conversion — reach out directly."
        />

        <div className="contact__layout">
          {/* <PhotoPlaceholder label="Photo" shape="circle" /> */}
          <img src="/self.jpeg" class="img_class_3" alt="..." shape="circle"/>

          <div className="contact__details">
            <a className="contact__link" href={`tel:${profile.phone.replace(/\s/g, "")}`}>
              <Phone size={16} /> {profile.phone}
            </a>
            {profile.emails.map((e) => (
              <a className="contact__link" href={`mailto:${e}`} key={e}>
                <Mail size={16} /> {e}
              </a>
            ))}
            <span className="contact__link contact__link--static">
              <MapPin size={16} /> {profile.location}
            </span>
          </div>
        </div>

        <div className="contact__buttons">
          <a className="btn btn--ghost" href={profile.linkedinUrl} target="_blank" rel="noreferrer">
            <Linkedin size={16} /> LinkedIn
          </a>
          <a className="btn btn--ghost" href={profile.scholarUrl} target="_blank" rel="noreferrer">
            <GraduationCap size={16} /> Google Scholar
          </a>
          <a className="btn btn--primary" href={profile.cvUrl} download>
            <Download size={16} /> Download CV
          </a>
        </div>

        <div className="contact__references">
          <p className="label-sm">References</p>
          <ul>
            {references.map((r) => (
              <li key={r.name}>
                <span className="contact__ref-name">{r.name}</span>
                <span className="contact__ref-aff">{r.affiliation}</span>
                <a href={`mailto:${r.email}`}>{r.email}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
