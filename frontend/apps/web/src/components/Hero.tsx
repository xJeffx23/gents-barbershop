"use client"

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
}

export default function Hero() {
  return (
    <section id="inicio">
      <div className="hero-content">
        <div className="hero-badge">Barbería premium en Rohrmoser</div>
        <h1 className="hero-title">Estilo, precisión y presencia en cada corte.</h1>
        <p className="hero-sub">
          Una experiencia de barbería moderna para hombres que cuidan su imagen, su confianza y cada
          detalle de su estilo. Rohrmoser, San José · Abierto hasta las 8:00 p.m.
        </p>
        <div className="hero-btns">
          <button className="btn-primary">Reservar por WhatsApp</button>
          <button className="btn-secondary" onClick={() => scrollTo("servicios")}>
            Ver servicios
          </button>
        </div>
      </div>
    </section>
  )
}
