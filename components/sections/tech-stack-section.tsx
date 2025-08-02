"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useTheme } from "@/components/theme-provider";
import { FaReact, FaNodeJs, FaDatabase, FaGithub } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiPostgresql,
  SiPrisma,
  SiVercel,
} from "react-icons/si";

const technologies = [
  {
    name: "React",
    type: "Frontend",
    proficiency: 95,
    icon: FaReact,
    color: "#61DAFB",
  },
  {
    name: "Next.js",
    type: "Framework",
    proficiency: 92,
    icon: SiNextdotjs,
    color: "#000000",
  },
  {
    name: "Tailwind",
    type: "Styling",
    proficiency: 90,
    icon: SiTailwindcss,
    color: "#38B2AC",
  },
  {
    name: "Node.js",
    type: "Backend",
    proficiency: 88,
    icon: FaNodeJs,
    color: "#339933",
  },
  {
    name: "TypeScript",
    type: "Language",
    proficiency: 85,
    icon: SiTypescript,
    color: "#3178C6",
  },
  {
    name: "PostgreSQL",
    type: "Database",
    proficiency: 87,
    icon: SiPostgresql,
    color: "#336791",
  },
  {
    name: "Prisma",
    type: "ORM",
    proficiency: 86,
    icon: SiPrisma,
    color: "#2D3748",
  },
  {
    name: "Vercel",
    type: "Deployment",
    proficiency: 89,
    icon: SiVercel,
    color: "#000000",
  },
];

export default function TechSection() {
  const { colors } = useTheme();

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Effects */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: colors.background }}
      >
        <div
          className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]"
          style={{
            background: `radial-gradient(circle at center, ${colors.primary}15 0%, transparent 70%)`,
          }}
        />
        <div className="absolute top-0 left-0 w-full h-full opacity-50">
          <div
            className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full"
            style={{
              background: `radial-gradient(circle at center, ${colors.primary}10 0%, transparent 70%)`,
              filter: "blur(40px)",
            }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full"
            style={{
              background: `radial-gradient(circle at center, ${colors.secondary}10 0%, transparent 70%)`,
              filter: "blur(40px)",
            }}
          />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4"
            style={{
              backgroundColor: `${colors.primary}15`,
              color: colors.primary,
              border: `1px solid ${colors.primary}30`,
            }}
          >
            Tech Stack
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: colors.primary }}
          >
            Technologies We <span className="text-white">Master</span>
          </h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto text-gray-300">
            Cutting-edge technologies that power our solutions
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: `${colors.primary}10`,
                backdropFilter: "blur(10px)",
                border: `1px solid ${colors.primary}20`,
              }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                style={{ backgroundColor: colors.primary }}
              />
              <CardContent className="p-6 relative z-10">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-center mb-4">
                    <tech.icon
                      className="w-12 h-12 transition-transform duration-300 group-hover:scale-110"
                      style={{ color: tech.color }}
                    />
                  </div>
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: colors.primary }}
                  >
                    {tech.name}
                  </h3>
                  <span className="text-sm text-gray-400 mb-4">
                    {tech.type}
                  </span>
                  <div className="mt-auto">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-400">Proficiency</span>
                      <span
                        className="text-sm font-medium"
                        style={{ color: tech.color }}
                      >
                        {tech.proficiency}%
                      </span>
                    </div>
                    <div className="w-full h-1 rounded-full bg-gray-700 overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500 group-hover:opacity-80"
                        style={{
                          width: `${tech.proficiency}%`,
                          backgroundColor: tech.color,
                        }}
                      />
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
