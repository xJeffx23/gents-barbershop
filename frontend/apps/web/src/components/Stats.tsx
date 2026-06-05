import { stats } from "@/data"
import Reveal from "./Reveal"

export default function Stats() {
  return (
    <section id="stats" className="section">
      <div className="container">
        <div className="section-header">
          <Reveal>
            <h2 className="section-title">Nuestros Números Hablan</h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="section-sub">
              La calidad de nuestro servicio reflejada en la satisfacción de nuestros clientes.
            </p>
          </Reveal>
        </div>
        <div className="stats-grid">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={(i as 0 | 1 | 2 | 3 | 4)}>
              <div className="stat-card">
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
