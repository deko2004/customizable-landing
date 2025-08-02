"use client";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { Download, MapPin, Calendar, Award } from "lucide-react";
import avatar from "../../public/avatar.webp";
export function AboutSection() {
  const { colors } = useTheme();

  const stats = [
    { icon: Award, label: "Years Experience", value: "5+" },
    { icon: Calendar, label: "Projects Completed", value: "100+" },
    { icon: MapPin, label: "Global Clients", value: "25+" },
  ];

  return (
    <section className="py-24 px-4 relative" id="about">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="mb-6">
            <span
              className="inline-block px-4 py-2 rounded-full text-sm font-medium border backdrop-blur-sm"
              style={{
                backgroundColor: `${colors.primary}15`,
                borderColor: `${colors.primary}30`,
                color: colors.primary,
              }}
            >
              About
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Meet the <span style={{ color: colors.primary }}>Creator</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div className="relative">
            <div className="relative z-10">
              <div
                className="w-full max-w-md mx-auto aspect-square rounded-3xl overflow-hidden border-4 shadow-2xl"
                style={{ borderColor: `${colors.primary}40` }}
              >
                <img
                  src="/avatar.webp"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Background decoration */}
            <div
              className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-20 blur-2xl"
              style={{ backgroundColor: colors.secondary }}
            />
            <div
              className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full opacity-20 blur-2xl"
              style={{ backgroundColor: colors.primary }}
            />
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Passionate Developer &{" "}
                <span style={{ color: colors.secondary }}>
                  Design Enthusiast
                </span>
              </h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  With over 5 years of experience in full-stack development, I
                  specialize in creating beautiful, functional, and user-centric
                  digital experiences. My passion lies in transforming complex
                  problems into elegant solutions.
                </p>
                <p>
                  I believe in the power of clean code, thoughtful design, and
                  continuous learning. Every project is an opportunity to push
                  boundaries and create something extraordinary.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new
                  technologies, contributing to open-source projects, or sharing
                  knowledge with the developer community.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center group">
                    <div
                      className="inline-flex p-3 rounded-xl mb-3 transition-all duration-300 group-hover:scale-110"
                      style={{ backgroundColor: `${colors.primary}20` }}
                    >
                      <IconComponent
                        className="w-6 h-6"
                        style={{ color: colors.primary }}
                      />
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button
                size="lg"
                className="text-lg px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl font-semibold group"
                style={{ backgroundColor: colors.primary }}
              >
                Download Resume
                <Download className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
