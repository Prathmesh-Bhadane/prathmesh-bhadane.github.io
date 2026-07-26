import PageHead from "../components/PageHead"
import PhotoPlaceholder from "../components/PhotoPlaceholder"
import { collaborations, careerHighlights, certificate } from "../data"

export default function CareerHighlight() {
  return (
    <div className="page">
      <div className="section-inner">
        <PageHead eyebrow="Career highlight" title="Collaborations &amp; recognitions" />

        <p className="label-sm">Collaboration</p>
        <div className="collab-grid">
          {collaborations.map((c) => (
            <article className="collab-card" key={c.group}>
              <img src={c.img} class="img_class" alt="..." />
              <h3>{c.group}</h3>
              <p className="collab-card__place">{c.place}</p>
              <p className="collab-card__people">{c.people}</p>
              <p className="collab-card__context">{c.context}</p>
            </article>
          ))}
        </div>

        <p className="label-sm highlights-label">Highlights</p>
        <ol className="highlights-list">
          {careerHighlights.map((h, i) => (
            <li key={h.title}>
              <span className="highlights-list__n">{i + 1}</span>
              <div>
                <p className="highlights-list__title">{h.title}</p>
                <p className="highlights-list__detail">{h.detail}</p>
              </div>
            </li>
          ))}
          <li>
            <span className="highlights-list__n">{careerHighlights.length + 1}</span>
            <div>
              <p className="highlights-list__title">{certificate.title}</p>
              <p className="highlights-list__detail">{certificate.body}</p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  )
}
