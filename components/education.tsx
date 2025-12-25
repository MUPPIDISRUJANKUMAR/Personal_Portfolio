"use client"

import { GraduationCap } from "lucide-react"
import { education } from "@/lib/constants"

export function Education() {
  return (
    <section id="education" className="relative py-12 lg:py-20 border-t border-border/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-12 space-y-4">
          <div className="h-px w-full max-w-md bg-gradient-to-r from-transparent via-primary to-transparent" />
          <h2 className="text-3xl font-bold tracking-wide uppercase text-foreground">Education</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Learning Animation */}
          <div className="flex justify-center items-center p-6 bg-background/50 backdrop-blur-sm rounded-3xl border border-border/50 overflow-hidden">
            <div className="relative w-full aspect-[651/538] max-w-md flex items-center justify-center">
              <img
                src="/images/online-20learning-20platform.gif"
                alt="Online Learning Platform"
                className="w-full h-full object-contain brightness-110 contrast-110"
              />
            </div>
          </div>

          {/* Right Column: Education List */}
          <div className="space-y-6">
            {education.map((item) => (
              <div
                key={item.id}
                className="glow-card group relative bg-card/40 backdrop-blur-sm border border-border/50 rounded-2xl p-6 transition-all duration-300 hover:translate-x-2"
              >
                {/* Decorative Bottom SVG */}
                <div className="absolute bottom-0 right-0 opacity-20 group-hover:opacity-40 transition-opacity">
                  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="100" cy="100" r="80" fill="var(--color-secondary)" />
                  </svg>
                </div>

                <div className="text-center mb-4">
                  <span className="text-sm font-bold text-secondary uppercase tracking-widest">{item.duration}</span>
                </div>

                <div className="flex items-start gap-6 relative z-10">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 border border-primary/30 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold uppercase tracking-tight text-foreground">{item.degree}</h3>
                    <p className="text-muted-foreground text-sm">{item.institution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
