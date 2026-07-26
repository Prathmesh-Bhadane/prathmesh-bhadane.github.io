export default function PageHead({ eyebrow, title, lead }) {
  return (
    <header className="page-head">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      {lead && <p className="section-lead">{lead}</p>}
    </header>
  )
}
