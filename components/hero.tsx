"use client";

import { Github, Linkedin, Mail, Download, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalData } from "@/lib/constants";
import Image from "next/image";

export function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-16 flex items-center overflow-hidden"
    >
      {/* Abstract Gradient Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 left-0 w-full h-full opacity-30"
          preserveAspectRatio="xMidYMid slice"
        >
          <path
            d="M0 800V400C300 200 600 600 900 400C1200 200 1440 400 1440 400V800H0Z"
            fill="url(#gradient-hero)"
          />
          <defs>
            <linearGradient
              id="gradient-hero"
              x1="720"
              y1="0"
              x2="720"
              y2="800"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="var(--color-primary)" stopOpacity="0.5" />
              <stop
                offset="1"
                stopColor="var(--color-secondary)"
                stopOpacity="0.2"
              />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8 lg:gap-12 items-center">
          <div className="space-y-6 lg:space-y-8 animate-in fade-in slide-in-from-left duration-1000">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              Hello, This is <br />
              <span className="text-primary">
                <span className="md:whitespace-nowrap">Muppidi </span>
                <span className="block md:inline md:whitespace-nowrap">
                  Srujan Kumar
                </span>
              </span>
              <br />
              <span className="block md:inline">I&apos;m an </span>
              <span className="text-secondary block md:inline md:whitespace-nowrap">
                Undergraduate Student
              </span>
            </h1>

            <div className="flex items-center gap-4 lg:gap-6">
              {[
                { icon: Github, href: personalData.github },
                { icon: Linkedin, href: personalData.linkedin },
                { icon: Code2, href: personalData.leetcode },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:scale-125 transition-transform duration-300"
                >
                  <social.icon className="w-5 h-5 lg:w-6 lg:h-6" />
                </a>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 lg:gap-4 pt-2 lg:pt-4">
              <Button
                onClick={scrollToContact}
                variant="outline"
                className="rounded-full px-6 py-5 lg:px-8 lg:py-6 border-2 border-primary/50 hover:bg-primary/10 transition-all duration-300 group bg-transparent"
              >
                <Mail className="mr-2 w-4 h-4 lg:w-5 lg:h-5 group-hover:rotate-12 transition-transform" />
                Contact Me
              </Button>
              <Button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1eh0NehNb5GShFTc95qsu8tlBumdkyTzV/view?usp=sharing",
                    "_blank"
                  )
                }
                className="rounded-full px-6 py-5 lg:px-8 lg:py-6 bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 transition-all duration-300"
              >
                Get Resume
                <Download className="ml-2 w-4 h-4 lg:w-5 lg:h-5" />
              </Button>
            </div>
          </div>

          <div className="animate-in fade-in slide-in-from-right duration-1000 delay-200 flex justify-center lg:justify-end">
            <div className="relative group max-w-sm lg:max-w-md w-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-background/80 backdrop-blur-xl border border-border/50 rounded-xl overflow-hidden shadow-2xl p-4 lg:p-6">
                <Image
                  src="/images/animation-500-kxa883sd.gif"
                  alt="Developer working at desk"
                  width={500}
                  height={500}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
