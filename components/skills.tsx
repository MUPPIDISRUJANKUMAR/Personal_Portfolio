"use client"

import { useState } from "react"
import { skills, tools } from "@/lib/constants"
import { cn } from "@/lib/utils"
import { TooltipProvider } from "@/components/ui/tooltip"
import { getTechIcon } from "./tech-icons"
import { ChevronDown, ChevronUp } from "lucide-react"

export function Skills() {
  const [activeTab, setActiveTab] = useState<"skills" | "tools">("skills")
  const [showAll, setShowAll] = useState(false)

  const displayData = activeTab === "skills" ? skills : tools

  // Mobile: 6 (3 lines × 2 cols), Tablet: 9 (3 lines × 3 cols), Desktop: 12 (2 lines × 6 cols)
  const getInitialCount = () => {
    if (typeof window === "undefined") return 12
    if (window.innerWidth < 640) return 6 // mobile
    if (window.innerWidth < 1024) return 9 // tablet
    return 12 // desktop
  }

  const visibleSkills = showAll ? displayData : displayData.slice(0, getInitialCount())
  const hasMoreSkills = displayData.length > getInitialCount()

  return (
    <section id="skills" className="relative py-12 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 space-y-4">
          <span className="text-secondary text-sm font-bold uppercase tracking-widest">My expertise</span>
          <h2 className="text-3xl lg:text-4xl font-bold">Personal Skills & Tools</h2>
          <p className="text-muted-foreground text-lg">
            A comprehensive overview of my programming languages, frameworks, and development tools used to build
            scalable applications.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="bg-[#0f172a]/50 p-1 rounded-lg border border-border/40 flex items-center">
            <button
              onClick={() => setActiveTab("skills")}
              className={cn(
                "px-6 py-2 rounded-md text-sm font-medium transition-all duration-300",
                activeTab === "skills" ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground",
              )}
            >
              Personal Skills
            </button>
            <button
              onClick={() => setActiveTab("tools")}
              className={cn(
                "px-6 py-2 rounded-md text-sm font-medium transition-all duration-300",
                activeTab === "tools" ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground",
              )}
            >
              Developer Tools
            </button>
          </div>
        </div>

        <TooltipProvider>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {visibleSkills.map((item, i) => {
              const Icon = getTechIcon(item.name)

              return (
                <div
                  key={item.name}
                  className="animate-in fade-in zoom-in duration-500 fill-mode-both"
                  style={{ animationDelay: `${i * 30}ms` }}
                >
                  <div className="group relative flex flex-col items-center justify-center bg-background/50 backdrop-blur-sm border border-border/50 rounded-xl p-3 aspect-square w-full transition-all duration-300 hover:border-primary/50 hover:bg-muted/20 hover:-translate-y-1">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 mb-2 flex items-center justify-center">
                      {Icon ? (
                        <Icon className="w-full h-full object-contain" />
                      ) : (
                        <div className="w-full h-full bg-muted rounded flex items-center justify-center text-[10px] text-muted-foreground uppercase">
                          {item.name.substring(0, 2)}
                        </div>
                      )}
                    </div>
                    <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors text-center">
                      {item.name}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </TooltipProvider>

        {hasMoreSkills && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-2 px-6 py-3 bg-[#0f172a]/50 border border-border/40 rounded-lg text-sm font-medium text-muted-foreground hover:text-white hover:border-primary/50 transition-all duration-300"
            >
              {showAll ? (
                <>
                  Show Less
                  <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  Show More
                  <ChevronDown className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
