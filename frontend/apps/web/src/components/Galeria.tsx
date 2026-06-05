"use client"
import { galleryItems } from "@/data"
import { useDraggable } from "@/hooks/useDraggable"
import Reveal from "./Reveal"

export default function Galeria() {
  const carouselRef = useDraggable<HTMLDivElement>()

  return (
    <section id="galeria" className="section">
      <div className="container">
        <div className="section-header">
          <Reveal>
            <h2 className="section-title">Nuestro trabajo</h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="section-sub">
              Imágenes que capturan la esencia de la excelencia en cada corte y servicio que ofrecemos.
            </p>
          </Reveal>
        </div>
      </div>
      <div style={{ padding: "0 32px", maxWidth: 1232, margin: "0 auto" }}>
        <div className="gallery-carousel" ref={carouselRef}>
          {galleryItems.map((item) => (
            <div className="gallery-item" key={item.subtitle}>
              <div className={`gallery-item-bg ${item.bgClass}`} />
              <span className="gallery-icon">{item.icon}</span>
              <div className="gallery-overlay">
                <div className="gallery-label">
                  <h3>{item.subtitle}</h3>
                  <p>GENTS</p>
                </div>
                <div className="gallery-arrow">↗</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
