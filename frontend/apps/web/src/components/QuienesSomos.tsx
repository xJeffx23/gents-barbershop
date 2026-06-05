import Reveal from "./Reveal"

export default function QuienesSomos() {
  return (
    <section id="quienes">
      <div className="container">
        <div className="section-header">
          <Reveal>
            <span className="pill pill-light">Quiénes somos</span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="section-title" style={{ color: "var(--dark)" }}>
              Estilo, precisión y experiencia en cada corte.
            </h2>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
