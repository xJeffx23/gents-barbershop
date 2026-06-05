"use client"
import { useEffect, useRef, ReactNode } from "react"

interface Props {
  children: ReactNode
  delay?: 0 | 1 | 2 | 3 | 4
  className?: string
}

export default function Reveal({ children, delay = 0, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible")
            observer.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const delayClass = delay > 0 ? ` reveal-delay-${delay}` : ""
  return (
    <div ref={ref} className={`reveal${delayClass}${className ? ` ${className}` : ""}`}>
      {children}
    </div>
  )
}
