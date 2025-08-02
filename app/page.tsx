"use client";

import { ThemePanel } from "@/components/theme-panel";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { ServicesSection } from "@/components/sections/services-section";
import TechStackSection from "@/components/sections/tech-stack-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FAQSection } from "@/components/sections/faq-section";
import { CTASection } from "@/components/sections/cta-section";
import { Footer } from "@/components/sections/footer";
import { useTheme } from "@/components/theme-provider";

export default function HomePage() {
  const { colors } = useTheme();

  return (
    <div
      className="min-h-screen text-white relative overflow-x-hidden"
      style={{ backgroundColor: colors.background }}
    >
      <ThemePanel />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <ServicesSection />
      <TechStackSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}
