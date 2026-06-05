import { features } from "@/data"
import Reveal from "./Reveal"

export default function Experiencia() {
  return (
    <section id="experiencia">
      <div className="container">
        <div className="section-header">
          <Reveal>
            <h2 className="section-title">Una experiencia diseñada para vos</h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="section-sub" style={{ color: "var(--dark)", opacity: 0.65 }}>
              En GENTS, cada detalle está pensado para tu comodidad y la excelencia en el servicio.
            </p>
          </Reveal>
        </div>

        {features.map((f) => (
          <Reveal key={f.num}>
            <div className={`feature-card${f.reverse ? " reverse" : ""}`}>
              <div className="feature-content">
                <span className="feature-num">{f.num}</span>
                <h2 className="feature-name">{f.name}</h2>
                <p className="feature-desc">{f.desc}</p>
              </div>
              <div className="feature-image">
                <div style={{ position: "absolute", inset: 0 }} className={f.featClass} />
                <span className="feat-icon">{f.icon}</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
