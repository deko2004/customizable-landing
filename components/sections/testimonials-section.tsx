"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useTheme } from "@/components/theme-provider";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager at TechCorp",
    avatar: "/user1.webp?height=60&width=60",
    quote:
      "Working with this developer was an absolute game-changer for our project. The attention to detail, technical expertise, and ability to translate our vision into reality exceeded all expectations. The final product not only met our requirements but elevated our entire user experience.",
    rating: 5,
    company: "TechCorp",
  },
  {
    name: "Michael Chen",
    role: "Lead Developer at StartupXYZ",
    avatar: "/user2.webp?height=60&width=60",
    quote:
      "Exceptional work quality and professionalism. The code delivered was clean, well-documented, and scalable. Communication throughout the project was outstanding, and deadlines were consistently met. I would definitely recommend and work with them again.",
    rating: 5,
    company: "StartupXYZ",
  },
  {
    name: "Emily Rodriguez",
    role: "Creative Director at DesignStudio",
    avatar: "/user3.webp?height=60&width=60",
    quote:
      "The perfect blend of technical skill and creative vision. They understood our design requirements perfectly and implemented them flawlessly. The website performance improvements were remarkable, and our client satisfaction has increased significantly.",
    rating: 5,
    company: "DesignStudio",
  },
];

export function TestimonialsSection() {
  const { colors } = useTheme();

  return (
    <section className="py-24 px-4 relative" id="testimonials">
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
              Testimonials
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            What Clients <span style={{ color: colors.secondary }}>Say</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Don't just take my word for it. Here's what some of my amazing
            clients have to say about working together.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
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
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote
                    className="w-8 h-8"
                    style={{ color: colors.secondary, opacity: 0.7 }}
                  />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-current mr-1"
                      style={{ color: colors.secondary }}
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote
                  className="mb-8 italic leading-relaxed transition-colors"
                  style={{ color: colors.secondary, opacity: 0.8 }}
                >
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full mr-4 border-2"
                    style={{ borderColor: colors.secondary, opacity: 0.7 }}
                  />
                  <div>
                    <div
                      className="font-semibold text-lg transition-colors"
                      style={{ color: colors.secondary }}
                    >
                      {testimonial.name}
                    </div>
                    <div
                      className="text-sm transition-colors"
                      style={{ color: colors.secondary, opacity: 0.8 }}
                    >
                      {testimonial.role}
                    </div>
                    <div
                      className="text-xs mt-1"
                      style={{ color: colors.secondary, opacity: 0.6 }}
                    >
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
