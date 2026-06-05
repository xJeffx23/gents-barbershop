import { services } from "@/data"
import Reveal from "./Reveal"

export default function Servicios() {
  return (
    <section id="servicios">
      <div className="container">
        <div className="section-header">
          <Reveal>
            <h2 className="section-title">Nuestros Servicios</h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="section-sub" style={{ color: "var(--dark)", opacity: 0.65 }}>
              Una gama completa de servicios de grooming para el hombre moderno, con la calidad y precisión que nos
              caracterizan.
            </p>
          </Reveal>
        </div>

        {services.map((s) => (
          <Reveal key={s.num}>
            <div className={`service-card${s.reverse ? " reverse" : ""}`}>
              <div className="service-content">
                <span className="service-num">{s.num}</span>
                <h2 className="service-name">{s.name}</h2>
                <p className="service-desc">{s.desc}</p>
              </div>
              <div className="service-image">
                <div className={`service-placeholder ${s.svcClass}`} />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
