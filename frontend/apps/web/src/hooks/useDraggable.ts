"use client"
import { useEffect, useRef } from "react"

export function useDraggable<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let isDown = false
    let startX = 0
    let scrollLeft = 0

    const onMouseDown = (e: MouseEvent) => {
      isDown = true
      el.classList.add("dragging")
      startX = e.pageX - el.offsetLeft
      scrollLeft = el.scrollLeft
    }
    const onMouseLeave = () => { isDown = false; el.classList.remove("dragging") }
    const onMouseUp = () => { isDown = false; el.classList.remove("dragging") }
    const onMouseMove = (e: MouseEvent) => {
      if (!isDown) return
      e.preventDefault()
      const x = e.pageX - el.offsetLeft
      el.scrollLeft = scrollLeft - (x - startX) * 1.2
    }

    let touchStartX = 0
    let touchScrollLeft = 0
    const onTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].pageX
      touchScrollLeft = el.scrollLeft
    }
    const onTouchMove = (e: TouchEvent) => {
      el.scrollLeft = touchScrollLeft - (e.touches[0].pageX - touchStartX)
    }

    el.addEventListener("mousedown", onMouseDown)
    el.addEventListener("mouseleave", onMouseLeave)
    el.addEventListener("mouseup", onMouseUp)
    el.addEventListener("mousemove", onMouseMove)
    el.addEventListener("touchstart", onTouchStart, { passive: true })
    el.addEventListener("touchmove", onTouchMove, { passive: true })

    return () => {
      el.removeEventListener("mousedown", onMouseDown)
      el.removeEventListener("mouseleave", onMouseLeave)
      el.removeEventListener("mouseup", onMouseUp)
      el.removeEventListener("mousemove", onMouseMove)
      el.removeEventListener("touchstart", onTouchStart)
      el.removeEventListener("touchmove", onTouchMove)
    }
  }, [])

  return ref
}
