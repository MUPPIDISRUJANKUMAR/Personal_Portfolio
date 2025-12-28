"use client"

import Image from "next/image"
import Link from "next/link"
import { Github, ExternalLink } from "lucide-react"
import { projects } from "@/lib/constants"
import { getTechIconPath } from "@/lib/icon-mapping"

export function Projects() {
  return (
    <section id="projects" className="py-12 lg:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <h2 className="text-4xl lg:text-5xl font-bold mb-12 text-foreground tracking-tighter">Projects</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Project Image */}
              <div className="relative w-full aspect-video mb-6 rounded-xl overflow-hidden bg-muted/30">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Project Content */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 flex-wrap">
                    {project.stack.slice(0, 3).map((tech) => {
                      const iconPath = getTechIconPath(tech)
                      return iconPath ? (
                        <div
                          key={tech}
                          className="flex items-center justify-center w-8 h-8 rounded-lg bg-muted/50 border border-border/50 relative p-1.5"
                          title={tech}
                        >
                          <Image src={iconPath} alt={tech} fill className="object-contain p-1.5" />
                        </div>
                      ) : null
                    })}
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">{project.description}</p>

                {/* Links */}
                <div className="flex items-center gap-3 pt-2">
                  {project.demo && (
                    <Link
                      href={project.demo}
                      target="_blank"
                      className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all"
                      aria-label="View Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </Link>
                  )}
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-muted/50 text-foreground rounded-lg hover:bg-muted hover:text-primary transition-all"
                      aria-label="View on GitHub"
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub</span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
