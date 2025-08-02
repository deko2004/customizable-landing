"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useTheme } from "@/components/theme-provider";
import { Zap, Shield, Rocket, Palette } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Built with modern technologies for optimal performance and speed that scales with your needs.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description:
      "Enterprise-grade security with 99.9% uptime guarantee and advanced threat protection.",
  },
  {
    icon: Rocket,
    title: "Easy to Deploy",
    description:
      "One-click deployment with automatic scaling, optimization, and global CDN distribution.",
  },
  {
    icon: Palette,
    title: "Fully Customizable",
    description:
      "Customize every aspect of your experience with our advanced theme system and live preview.",
  },
];

export function FeaturesSection() {
  const { colors } = useTheme();

  return (
    <section className="py-24 px-4 relative" id="features">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="mb-6">
            <span
              className="inline-block px-4 py-2 rounded-full text-sm font-medium border backdrop-blur-sm"
              style={{
                backgroundColor: `${colors.secondary}15`,
                borderColor: `${colors.secondary}30`,
                color: colors.secondary,
              }}
            >
              Features
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Powerful <span style={{ color: colors.primary }}>Features</span>
          </h2>
          <p
            className="text-xl"
            style={{
              color: colors.secondary,
              opacity: 0.7,
              maxWidth: "48rem",
              margin: "0 auto",
              lineHeight: "1.75",
            }}
          >
            Everything you need to build, deploy, and scale your applications
            with confidence and precision.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card
                key={index}
                className="backdrop-blur-sm border transition-all duration-500 hover:scale-105 hover:shadow-2xl group relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${colors.primary}20 60%, ${colors.background}10 100%)`,
                  borderColor: `${colors.primary}40`,
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                  style={{ backgroundColor: colors.primary }}
                />
                <CardContent className="p-8 text-center relative z-10">
                  <div
                    className="inline-flex p-4 rounded-2xl mb-6 transition-all duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${colors.primary}20` }}
                  >
                    <IconComponent
                      className="w-8 h-8"
                      style={{ color: colors.primary }}
                    />
                  </div>
                  <h3
                    className="text-xl font-semibold mb-4"
                    style={{ color: colors.primary }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="leading-relaxed transition-colors"
                    style={{ color: colors.secondary, opacity: 0.8 }}
                  >
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
