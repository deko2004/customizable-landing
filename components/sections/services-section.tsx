"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useTheme } from "@/components/theme-provider";
import { Code, Smartphone, Globe, Paintbrush } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Full-Stack Development",
    description:
      "End-to-end web application development using modern technologies like React, Node.js, and TypeScript.",
    features: [
      "Custom Web Apps",
      "API Development",
      "Database Design",
      "Performance Optimization",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    features: [
      "React Native",
      "iOS & Android",
      "App Store Deployment",
      "Push Notifications",
    ],
  },
  {
    icon: Globe,
    title: "Web Design & UX",
    description:
      "Beautiful, responsive designs that convert visitors into customers and enhance user engagement.",
    features: [
      "UI/UX Design",
      "Responsive Design",
      "User Research",
      "Prototyping",
    ],
  },
  {
    icon: Paintbrush,
    title: "Brand Identity",
    description:
      "Complete brand identity solutions including logos, color schemes, and design systems.",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Design Systems",
      "Marketing Materials",
    ],
  },
];

export function ServicesSection() {
  const { colors } = useTheme();

  return (
    <section className="py-24 px-4 relative" id="services">
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
              Services
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            What I <span style={{ color: colors.secondary }}>Offer</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital solutions tailored to bring your vision to
            life with cutting-edge technology and creative excellence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={index}
                className="backdrop-blur-xl border transition-all duration-500 hover:scale-105 hover:shadow-2xl group relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${colors.secondary}20 60%, ${colors.background}10 100%)`,
                  borderColor: `${colors.secondary}40`,
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                  style={{ backgroundColor: colors.secondary }}
                />
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-start space-x-4 mb-6">
                    <div
                      className="flex-shrink-0 p-3 rounded-2xl transition-all duration-300 group-hover:scale-110"
                      style={{ backgroundColor: `${colors.secondary}20` }}
                    >
                      <IconComponent
                        className="w-8 h-8"
                        style={{ color: colors.secondary }}
                      />
                    </div>
                    <div>
                      <h3
                        className="text-2xl font-semibold mb-3 transition-colors"
                        style={{ color: colors.secondary }}
                      >
                        {service.title}
                      </h3>
                      <p
                        className="leading-relaxed transition-colors"
                        style={{ color: colors.secondary, opacity: 0.8 }}
                      >
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center space-x-3"
                      >
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: colors.secondary }}
                        />
                        <span
                          className="text-sm"
                          style={{ color: colors.secondary, opacity: 0.8 }}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
