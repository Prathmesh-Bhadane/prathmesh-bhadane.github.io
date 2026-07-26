import PageHead from "../components/PageHead"
import PhotoPlaceholder from "../components/PhotoPlaceholder"
import { research, teaching, supervision, responsibilities } from "../data"

export default function About() {
  return (
    <div className="page">
      <div className="section-inner">
        <PageHead eyebrow="About me" title="Dr. Prathmesh Bhadane" />

        <div className="about__inner">
          <div className="about__lead">
            {/* <PhotoPlaceholder label="Photo" className="about__photo" /> */}
            <img src="/Untitled design.jpg" class="img_class" alt="..." />
            <p className="about__text">
              I am Dr. Prathmesh Bhadane, currently working as a Postdoctoral Researcher at the Indian Institute of Technology, Bombay (IIT Bombay) India, under the supervision of Prof. Deepti Kalsi, 
              where my research focuses on MOF-based heterogeneous catalysis for toxic gas conversion.
               I completed my PhD in Materials Engineering at the Indian Institute of Technology Gandhinagar (IITGN), India, in collaboration with the University of Birmingham (UoB), United Kingdom, under the supervision of Prof.
                Abhijit Mishra, Prof. Superb Misra, and Prof. Iseult Lynch. My doctoral research centered on the design and development of functional metal-organic frameworks (MOFs) and MOF-polymer hybrid materials for selective metal recovery, including rare earth elements (REEs) as well as broader environmental remediation applications.
            </p>
            
          </div>

          <div className="about__advisors">
            <p className="label-sm">Advisors &amp; collaborators</p>
            <ul>
              {research.advisors.map((a) => (
                <li key={a.name}>
                  <span className="about__advisor-name">{a.name}</span>
                  <span className="about__advisor-aff">{a.affiliation}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="about__teaching">
          <p className="label-sm">Teaching &amp; mentoring</p>
          <ul className="record-list">
            {teaching.map((t, i) => (
              <li key={i}>
                <p className="record-list__title">{t.role}</p>
                <p className="record-list__meta">{[t.place, t.period].filter(Boolean).join(" \u00b7 ")}</p>
                {t.detail && <p className="record-list__detail">{t.detail}</p>}
              </li>
            ))}
            <li>
              <p className="record-list__title">Research supervision &mdash; {supervision.student}</p>
              <p className="record-list__detail">{supervision.detail}</p>
            </li>
          </ul>

          {/* <p className="label-sm about__responsibility-label">Positions of responsibility</p> */}
          <ul className="record-list record-list--tight">
            {responsibilities.map((r, i) => (
              <li key={i}>
                <p className="record-list__detail">{r}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
