import { ExternalLink } from "lucide-react"
import PageHead from "../components/PageHead"
import { publications, conferences } from "../data"

export default function Publications() {
  const cumulativeIF = publications.reduce((sum, p) => sum + parseFloat(p.if), 0)
  const avg_IF=cumulativeIF/publications.length
  const sorted = [...publications].sort((a, b) => parseInt(b.year) - parseInt(a.year) || a.n - b.n)

  return (
    <div className="page">
      <div className="section-inner">
        <PageHead
          eyebrow="Publications"
          title="Peer-reviewed papers"
          lead={`${publications.length} papers, average impact factor of roughly ${avg_IF.toFixed(
            1
          )}, listed latest first.`}
        />

        <ol className="pub-list">
          {sorted.map((p,index) => (
            <li className="pub-item" key={p.n}>
              <span className="pub-item__n">{String(index+1).padStart(2, "0")}</span>
              <div className="pub-item__body">
                <h3>{p.title}</h3>
                <p className="pub-item__authors">{p.authors}</p>
                <p className="pub-item__meta">
                  <span className="pub-item__journal">{p.journal}</span>
                  <span className="dot">&middot;</span>
                  <span>{p.year}</span>
                  <span className="dot">&middot;</span>
                  <span className="pub-item__if">IF {p.if}</span>
                  {p.status && (
                    <>
                      <span className="dot">&middot;</span>
                      <span className="pub-item__status">{p.status}</span>
                    </>
                  )}
                </p>
              </div>
              {p.doi && (
                <a
                  className="pub-item__link"
                  href={`https://doi.org/${p.doi}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open DOI for ${p.title}`}
                >
                  <ExternalLink size={15} />
                </a>
              )}
            </li>
          ))}
        </ol>

        <div className="conferences">
          <p className="label-sm">Conference presentations</p>
          <ul>
            {conferences.map((c, i) => (
              <li key={i}>
                <span className="conferences__n">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <p className="conferences__title">{c.title}</p>
                  <p className="conferences__meta">
                    {c.event} &middot; {c.year} &middot; {c.place}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
