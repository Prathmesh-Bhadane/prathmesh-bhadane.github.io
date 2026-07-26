import PageHead from "../components/PageHead"
import PhotoPlaceholder from "../components/PhotoPlaceholder"
import { research, researchInterests } from "../data"

export default function Research() {
  return (
    <div className="page">
      <div className="section-inner">
        <PageHead
          eyebrow="Research interest"
          title="Focus areas"
          lead={research.focus}
        />

        <div className="interest-grid">
          {researchInterests.map((r, i) => (
            <article className="interest-card" key={r.title}>
              <span className="interest-card__n">{String(i + 1).padStart(2, "0")}</span>
              <img src={r.img} class="img_class_2" alt="..." title={r.title}/><br/>
              <h3>{r.title}</h3>
              <p>{r.detail}</p>
            </article>
          ))}
        </div>

        <div className="research__grid">
          <div className="research__skills">
            <p className="label-sm">Hands-on instrumentation &amp; techniques</p>
            <ul className="tag-list">
              {research.skills.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          <div className="research__patent card">
            <p className="label-sm">Patent</p>
            <h3>{research.patent.title}</h3>
            <p className="research__patent-inventors">{research.patent.inventors}</p>
            <p className="research__patent-meta">
              {research.patent.body} &middot; App. No. {research.patent.number} &middot; {research.patent.date}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
