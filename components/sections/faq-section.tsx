"use client"

import { useState } from "react"
import { useTheme } from "@/components/theme-provider"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "What technologies do you specialize in?",
    answer:
      "I specialize in modern web technologies including React, Next.js, TypeScript, Node.js, and Tailwind CSS. I also work with databases like PostgreSQL and MongoDB, and have experience with cloud platforms like AWS and Vercel.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary depending on complexity and scope. A simple website might take 2-4 weeks, while a complex web application could take 2-6 months. I always provide detailed timelines during the initial consultation.",
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer:
      "Yes! I offer ongoing support and maintenance packages to ensure your project stays up-to-date, secure, and performing optimally. This includes bug fixes, updates, and feature enhancements as needed.",
  },
  {
    question: "What's your development process like?",
    answer:
      "I follow an agile development approach with regular check-ins and updates. The process typically includes discovery, planning, design, development, testing, and deployment phases. You'll be involved throughout to ensure the final product meets your expectations.",
  },
  {
    question: "Can you work with my existing team?",
    answer:
      "I'm experienced in collaborating with existing teams and can adapt to your current workflows and tools. Whether you need a temporary team member or long-term collaboration, I'm flexible and easy to work with.",
  },
]

export function FAQSection() {
  const { colors } = useTheme()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 px-4 relative" id="faq">
      <div className="max-w-4xl mx-auto">
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
              FAQ
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Frequently Asked <span style={{ color: colors.primary }}>Questions</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Got questions? Here are answers to some of the most common questions I receive from clients.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900/60 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden transition-all duration-300 hover:border-gray-600/50"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-800/30 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900"
                style={{ focusRingColor: colors.primary }}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                <div
                  className="flex-shrink-0 p-2 rounded-lg transition-all duration-300"
                  style={{ backgroundColor: `${colors.primary}20` }}
                >
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5" style={{ color: colors.primary }} />
                  ) : (
                    <ChevronDown className="w-5 h-5" style={{ color: colors.primary }} />
                  )}
                </div>
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6">
                  <div className="h-px mb-4 opacity-20" style={{ backgroundColor: colors.primary }} />
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
