function SectionHeading({ eyebrow, title, intro }) {
  return (
    <div className="section-heading">
      <p className="section-eyebrow">{eyebrow}</p>
      <h1 className="section-title">{title}</h1>
      {intro && <p className="section-intro">{intro}</p>}
    </div>
  )
}

export default SectionHeading
