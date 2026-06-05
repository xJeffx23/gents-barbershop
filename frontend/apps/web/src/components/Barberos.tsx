import { barbers } from "@/data"
import Reveal from "./Reveal"

export default function Barberos() {
  return (
    <section id="barberos">
      <div className="container">
        <div className="section-header">
          <Reveal>
            <h2 className="section-title">Conocé a nuestros barberos</h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="section-sub" style={{ color: "var(--dark)", opacity: 0.65 }}>
              Nuestro equipo de expertos está dedicado a la precisión, el estilo y el servicio personalizado.
            </p>
          </Reveal>
          <Reveal delay={2}>
            <button className="btn-primary" style={{ marginTop: 8 }}>
              Reservar con este barbero
            </button>
          </Reveal>
        </div>
        <Reveal>
          <div className="barbers-card">
            <div className="barbers-card-header">Expertos en estilo</div>
            {barbers.map((b) => (
              <div className="barber-row" key={b.name}>
                <div className="barber-left">
                  <div className="barber-avatar">{b.initial}</div>
                  <div>
                    <div className="barber-name">{b.name}</div>
                    <div className="barber-role">{b.role}</div>
                  </div>
                </div>
                <p className="barber-desc">{b.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
