"use client"
import { useState } from "react"
import { navLinks } from "@/data"

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav className="nav" id="navbar">
        <button className="nav-brand" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          GENTS BARBERSHOP
        </button>
        <ul className="nav-links">
          {navLinks.map((l) => (
            <li key={l.target}>
              <button onClick={() => scrollTo(l.target)}>{l.label}</button>
            </li>
          ))}
        </ul>
        <button className="nav-cta">Reservar por WhatsApp</button>
        <button className="nav-hamburger" aria-label="Menú" onClick={() => setOpen(true)}>
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mobile-menu${open ? " open" : ""}`}>
        <button className="close-btn" onClick={() => setOpen(false)}>✕</button>
        {navLinks.map((l) => (
          <button key={l.target} onClick={() => { setOpen(false); scrollTo(l.target) }}>
            {l.label}
          </button>
        ))}
        <button className="nav-cta">Reservar por WhatsApp</button>
      </div>
    </>
  )
}
