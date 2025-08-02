"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { Mail, MessageCircle, Calendar, ArrowRight } from "lucide-react";

export function CTASection() {
  const { colors } = useTheme();

  const contactMethods = [
    {
      icon: Mail,
      label: "Email Me",
      description: "Get in touch via email",
      action: "Send Email",
    },
    {
      icon: MessageCircle,
      label: "Let's Chat",
      description: "Quick consultation call",
      action: "Start Chat",
    },
    {
      icon: Calendar,
      label: "Schedule Meeting",
      description: "Book a free consultation",
      action: "Book Now",
    },
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden" id="contact">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ backgroundColor: colors.primary }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Main CTA */}
        <div className="mb-16">
          <div className="mb-6">
            <span
              className="inline-block px-4 py-2 rounded-full text-sm font-medium border backdrop-blur-sm"
              style={{
                backgroundColor: `${colors.secondary}15`,
                borderColor: `${colors.secondary}30`,
                color: colors.secondary,
              }}
            >
              Let's Work Together
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Ready to Build Something{" "}
            <span
              className="bg-gradient-to-r bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
              }}
            >
              Amazing?
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Let's turn your vision into reality. Whether you need a complete
            digital solution or want to enhance your existing project, I'm here
            to help you succeed.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              size="lg"
              className="text-lg px-10 py-5 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl font-semibold group"
              style={{ backgroundColor: colors.primary }}
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
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
              View Portfolio
            </Button>
          </div>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-gradient-to-br from-gray-900/60 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 hover:scale-105 hover:shadow-xl"
              >
                <div
                  className="inline-flex p-4 rounded-2xl mb-6 transition-all duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${colors.primary}20` }}
                >
                  <IconComponent
                    className="w-8 h-8"
                    style={{ color: colors.primary }}
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {method.label}
                </h3>
                <p className="text-gray-400 mb-6">{method.description}</p>
                <Button
                  variant="outline"
                  className="w-full bg-transparent hover:scale-105 transition-all duration-300"
                  style={{
                    borderColor: colors.secondary,
                    color: colors.secondary,
                    backgroundColor: `${colors.secondary}10`,
                  }}
                >
                  {method.action}
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
