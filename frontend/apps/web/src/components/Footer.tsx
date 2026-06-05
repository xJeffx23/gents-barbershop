"use client"
import { navLinks } from "@/data"

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
}

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <span className="footer-brand">GENTS BARBERSHOP</span>
        <ul className="footer-links">
          {navLinks.map((l) => (
            <li key={l.target}>
              <button onClick={() => scrollTo(l.target)}>{l.label}</button>
            </li>
          ))}
        </ul>
        <span className="footer-copy">© 2024 GENTS BARBERSHOP. Todos los derechos reservados.</span>
      </div>
    </footer>
  )
}
