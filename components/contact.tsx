"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react"
import { personalData } from "@/lib/constants"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`)
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
      )
      const mailtoLink = `mailto:${personalData.email}?subject=${subject}&body=${body}`

      // Open default email client
      window.location.href = mailtoLink

      // Reset form
      setFormData({ name: "", email: "", message: "" })
      alert("Your default email client will open. Please send the email from there.")
    } catch (error) {
      console.error("Error:", error)
      alert("There was an error. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative py-12 lg:py-16 overflow-hidden">
      {/* Decorative Side Label - Desktop Only */}
      <div className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 flex-col items-center gap-4 z-10">
        <div className="bg-indigo-900/40 backdrop-blur-sm border border-indigo-500/20 px-4 py-10 rounded-l-2xl">
          <span className="text-sm font-bold tracking-[0.3em] uppercase vertical-text text-indigo-200">CONTACT</span>
        </div>
        <div className="w-px h-32 bg-gradient-to-b from-indigo-500/50 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left Column: Contact Form */}
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold">Get in touch</h2>
              <p className="text-muted-foreground text-base">
                Have a project in mind or just want to say hi? Feel free to reach out!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-muted/10 border-border/50 focus:border-primary/50 py-5 lg:py-6"
                />
              </div>
              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-muted/10 border-border/50 focus:border-primary/50 py-5 lg:py-6"
                />
              </div>
              <div className="space-y-2">
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="bg-muted/10 border-border/50 focus:border-primary/50 min-h-[150px] pt-4"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 lg:py-6 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-bold rounded-xl hover:opacity-90 transition-all duration-300 disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </div>

          {/* Right Column: Contact Info & Socials */}
          <div className="space-y-10 lg:space-y-12">
            <div className="space-y-6 lg:space-y-8">
              {[
                { icon: Mail, label: "Email", value: personalData.email },
                { icon: Phone, label: "Phone", value: personalData.phone },
                { icon: MapPin, label: "Location", value: personalData.address },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 lg:gap-6 group">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-muted/20 border border-border/50 flex items-center justify-center text-primary group-hover:bg-secondary group-hover:text-secondary-foreground group-hover:scale-110 transition-all duration-500 flex-shrink-0">
                    <item.icon className="w-5 h-5 lg:w-6 lg:h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{item.label}</p>
                    <p className="text-base lg:text-lg font-medium text-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 lg:pt-8 border-t border-border/50">
              <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-4 lg:mb-6">
                Follow Me
              </p>
              <div className="flex flex-wrap gap-3 lg:gap-4">
                {[
                  { icon: Github, href: personalData.github },
                  { icon: Linkedin, href: personalData.linkedin },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-muted/20 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:scale-110 transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          transform: rotate(180deg);
        }
      `}</style>
    </section>
  )
}
