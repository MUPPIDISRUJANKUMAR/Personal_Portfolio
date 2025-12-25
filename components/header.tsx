"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Sun, Moon } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTheme } from "./theme-provider"
import { personalData } from "@/lib/constants"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark")

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50 py-3" : "bg-transparent py-5",
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2">
          <Link href="/" className="group flex items-center min-w-0 flex-shrink">
            <span className="text-base xs:text-lg sm:text-2xl font-serif italic font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-sky-400 to-emerald-400 transition-all duration-300 group-hover:opacity-80 whitespace-nowrap overflow-hidden text-ellipsis">
              {personalData.name.toUpperCase()}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center space-x-4 pl-4 border-l border-border/50">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-accent transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">EN</span>
            </div>
          </nav>

          {/* Mobile Actions */}
          <div className="flex items-center space-x-1 sm:space-x-4 md:hidden flex-shrink-0">
            <button
              onClick={toggleTheme}
              className="p-1.5 sm:p-2 rounded-full hover:bg-accent transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={toggleMenu}
              className="p-1.5 sm:p-2 rounded-md hover:bg-accent transition-colors"
              aria-label="Open menu"
            >
              {isMenuOpen ? <X className="w-5 h-5 sm:w-6 h-6" /> : <Menu className="w-5 h-5 sm:w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "absolute top-full left-0 right-0 bg-background border-b border-border/50 overflow-hidden transition-all duration-300 ease-in-out md:hidden",
          isMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="flex flex-col space-y-4 p-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-border/50">
            <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">EN - English</span>
          </div>
        </nav>
      </div>
    </header>
  )
}
