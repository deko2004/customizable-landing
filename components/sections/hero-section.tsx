"use client"

import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"
import { Rocket, ArrowRight } from "lucide-react"

export function HeroSection() {
  const { colors } = useTheme()

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0" aria-hidden="true">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl animate-pulse"
          style={{ backgroundColor: colors.primary }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl animate-pulse"
          style={{ backgroundColor: colors.secondary, animationDelay: "1s" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Badge */}
        <div className="mb-8">
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border backdrop-blur-sm transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: `${colors.primary}15`,
              borderColor: `${colors.primary}30`,
              color: colors.primary,
            }}
          >
            ✨ Now with live theme customization
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
          <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Build the Future
          </span>
          <br />
          <span
            className="bg-gradient-to-r bg-clip-text text-transparent animate-pulse"
            style={{
              backgroundImage: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
            }}
          >
            Your Way
          </span>
        </h1>

        {/* Description */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Create stunning, customizable experiences with our modern platform. Designed for developers who demand
          excellence, flexibility, and pixel-perfect control.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button
            size="lg"
            className="text-lg px-10 py-5 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl font-semibold group"
            style={{ backgroundColor: colors.primary }}
          >
            Get Started Free
            <Rocket className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-lg px-10 py-5 rounded-2xl border-2 transition-all duration-300 hover:scale-105 bg-transparent backdrop-blur-sm font-semibold"
            style={{
              borderColor: colors.secondary,
              color: colors.secondary,
              backgroundColor: `${colors.secondary}10`,
            }}
          >
            View Live Demo
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
          {[
            { number: "50K+", label: "Developers", description: "Trust our platform" },
            { number: "99.9%", label: "Uptime", description: "Guaranteed reliability" },
            { number: "2M+", label: "Deployments", description: "Successfully launched" },
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-3xl font-bold mb-2 transition-colors" style={{ color: colors.primary }}>
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wider mb-1">{stat.label}</div>
              <div className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
