"use client"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award } from "lucide-react"
import { achievements } from "@/lib/constants"

export function Achievements() {
  return (
    <section id="achievements" className="py-12 lg:py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <Badge variant="outline" className="mb-4">
            <Award className="w-3 h-3 mr-1" />
            Recognition
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Achievements & Certificates</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and recognitions earned through continuous learning and skill development
          </p>
        </div>

        <div className="relative">
          <div className="overflow-x-auto pb-4 scrollbar-custom snap-x snap-mandatory">
            <div className="flex gap-4 md:gap-6 px-2">
              {achievements.map((achievement) => (
                <Card
                  key={achievement.id}
                  className="group relative flex-shrink-0 w-[90vw] md:w-[380px] snap-center p-6 bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
                >
                  {/* Neon gradient border effect on hover */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />

                  <div className="space-y-4">
                    <div className="relative h-48 md:h-48 rounded-lg overflow-hidden bg-muted/10 backdrop-blur-md border border-border/30">
                      {achievement.image && (
                        <img
                          src={achievement.image || "/placeholder.svg"}
                          alt={achievement.title}
                          className="w-full h-full object-contain md:object-cover"
                        />
                      )}
                    </div>

                    {/* Achievement details */}
                    <div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {achievement.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">{achievement.issuer}</p>
                      <p className="text-xs text-muted-foreground">{achievement.date}</p>
                    </div>

                    {/* Badge or credential ID if available */}
                    {achievement.credentialId && (
                      <div className="pt-4 border-t border-border/30">
                        <p className="text-xs text-muted-foreground break-all">
                          Credential: {achievement.credentialId}
                        </p>
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center mt-4">
            <p className="text-xs text-muted-foreground md:hidden">← Swipe to view all →</p>
            <p className="text-xs text-muted-foreground hidden md:block">
              ← Scroll horizontally to view all achievements →
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-custom::-webkit-scrollbar {
          height: 8px;
        }
        .scrollbar-custom::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 4px;
        }
        .scrollbar-custom::-webkit-scrollbar-thumb {
          background: linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)));
          border-radius: 4px;
        }
        .scrollbar-custom::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)));
          opacity: 0.8;
        }
      `}</style>
    </section>
  )
}
