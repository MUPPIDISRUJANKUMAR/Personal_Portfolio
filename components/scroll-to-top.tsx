"use client"

import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"
import { cn } from "@/lib/utils"

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 300px
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 p-3 md:p-4 rounded-full transition-all duration-300 shadow-lg",
        "bg-gradient-to-br from-primary to-secondary",
        "text-primary-foreground hover:scale-110 hover:shadow-xl",
        "border-2 border-primary/30",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16 pointer-events-none",
      )}
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-4 h-4 md:w-5 md:h-5" />
    </button>
  )
}
