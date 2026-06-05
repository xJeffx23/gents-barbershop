import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import QuienesSomos from "@/components/QuienesSomos"
import Stats from "@/components/Stats"
import Barberos from "@/components/Barberos"
import Testimonials from "@/components/Testimonials"
import Servicios from "@/components/Servicios"
import Galeria from "@/components/Galeria"
import Experiencia from "@/components/Experiencia"
import Contacto from "@/components/Contacto"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <QuienesSomos />
        <Stats />
        <Barberos />
        <Testimonials />
        <Servicios />
        <Galeria />
        <Experiencia />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}
