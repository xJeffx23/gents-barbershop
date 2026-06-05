import Reveal from "./Reveal"

export default function Contacto() {
  return (
    <section id="contacto" className="section">
      <div className="container">
        <Reveal>
          <div className="contact-card">
            <span className="pill">Dónde encontrarnos</span>
            <h2 className="contact-title">Visitános en Rohrmoser</h2>
            <p className="contact-desc">
              GENTS BARBERSHOP está ubicada en Boulevard Ernesto Rohrmoser, Nunciatura, San José, Costa Rica.
              Abrimos hasta las 8:00 p.m.
              <br />
              Contacto: +506 6331‑3180
            </p>
            <button className="btn-primary" style={{ marginTop: 12 }}>
              Cómo llegar
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
