"use client";

import Image from "next/image";
import { personalData } from "@/lib/constants";

export function About() {
  return (
    <section id="about" className="relative py-12 lg:py-16 overflow-hidden">
      {/* Decorative Side Label - Desktop Only */}
      <div className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 flex-col items-center gap-4 z-10">
        <div className="bg-indigo-900/40 backdrop-blur-sm border border-indigo-500/20 px-4 py-8 rounded-l-2xl">
          <span className="text-sm font-bold tracking-[0.3em] uppercase vertical-text text-indigo-200">
            ABOUT ME
          </span>
        </div>
        <div className="w-px h-32 bg-gradient-to-b from-indigo-500/50 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text Column - First on mobile */}
          <div className="order-1 lg:order-1 space-y-4 lg:space-y-6">
            <div className="space-y-2">
              <span className="text-secondary text-sm font-bold uppercase tracking-wider">
                Who I am?
              </span>
              <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground">
                Building tomorrow&apos;s <br /> solutions today
              </h2>
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
                {personalData.about}
              </p>
            </div>
          </div>

          {/* Image Column - Second on mobile */}
          <div className="order-2 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative group w-full max-w-[280px] sm:max-w-[320px] lg:max-w-sm">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-2xl blur-2xl group-hover:opacity-100 transition duration-700 opacity-50" />
              <div className="relative rounded-2xl overflow-hidden border border-border/50 aspect-square w-full">
                <Image
                  src={`/srujan_photo.jpg?height=400&width=400&query=professional developer portrait`}
                  alt={personalData.name}
                  width={400}
                  height={400}
                  className="object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-110 transition-all duration-700 ease-in-out"
                />
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
  );
}
