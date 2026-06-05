"use client"
import { testimonials } from "@/data"
import { useDraggable } from "@/hooks/useDraggable"
import Reveal from "./Reveal"

export default function Testimonials() {
  const carouselRef = useDraggable<HTMLDivElement>()

  return (
    <section id="clientes" className="section">
      <div className="container">
        <div className="section-header">
          <Reveal>
            <h2 className="section-title">Clientes que han confiado en GENTS</h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="section-sub">
              Cada visita es una oportunidad para elevar la imagen personal de quienes confían en nuestro equipo.
            </p>
          </Reveal>
        </div>
      </div>
      <div className="container">
        <div className="testimonials-carousel" ref={carouselRef}>
          {testimonials.map((t) => (
            <div className="testimonial-card" key={t.name}>
              <div className="testimonial-content">
                <div className="testimonial-top">
                  <span className="pill" style={{ width: "fit-content" }}>{t.pill}</span>
                  <h3 className="testimonial-title">{t.title}</h3>
                  <p className="testimonial-quote">{t.quote}</p>
                </div>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.initials}</div>
                  <div>
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-date">{t.date}</div>
                  </div>
                </div>
              </div>
              <div className="testimonial-image">
                <div
                  className="testimonial-image-bg"
                  style={{ background: t.imgBg }}
                >
                  <span style={{ fontSize: 64, opacity: 0.12 }}>{t.imgEmoji}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
