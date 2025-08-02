"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ColorInput } from "@/components/ui/color-input"
import { useTheme } from "@/components/theme-provider"
import { Settings, X, Palette } from "lucide-react"

const presetThemes = [
  { name: "Purple Dream", primary: "#8b5cf6", secondary: "#06b6d4", background: "#0f172a" },
  { name: "Ocean Breeze", primary: "#0ea5e9", secondary: "#10b981", background: "#0c1222" },
  { name: "Sunset Glow", primary: "#f59e0b", secondary: "#ef4444", background: "#1a0f0a" },
  { name: "Forest Night", primary: "#10b981", secondary: "#8b5cf6", background: "#0a1a0f" },
  { name: "Midnight", primary: "#6366f1", secondary: "#ec4899", background: "#111827" },
  { name: "Monochrome", primary: "#6b7280", secondary: "#9ca3af", background: "#1f2937" },
]

export function ThemePanel() {
  const [isOpen, setIsOpen] = useState(false)
  const { colors, updateColor, applyPreset, resetTheme } = useTheme()

  return (
    <>
      {/* Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 z-50 p-4 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-110 group"
        style={{ backgroundColor: colors.primary }}
        aria-label="Open theme customization panel"
        aria-expanded={isOpen}
      >
        <Palette className="w-6 h-6 text-white group-hover:rotate-12 transition-transform duration-300" />
      </Button>

      {/* Panel */}
      <div
        className={`fixed top-4 right-4 z-40 transition-all duration-500 ease-in-out ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="theme-panel-title"
      >
        <Card className="w-96 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 shadow-2xl">
          <CardContent className="p-0">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-700/50">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg" style={{ backgroundColor: `${colors.primary}20` }}>
                  <Settings className="w-5 h-5" style={{ color: colors.primary }} />
                </div>
                <h2 id="theme-panel-title" className="text-lg font-semibold text-white">
                  Theme Studio
                </h2>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white hover:bg-gray-800"
                aria-label="Close theme panel"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            <div className="p-6 space-y-6">
              {/* Color Controls */}
              <div className="space-y-4">
                <h3 className="text-sm font-medium text-gray-300 uppercase tracking-wider">Custom Colors</h3>
                <ColorInput
                  label="Primary Color"
                  value={colors.primary}
                  onChange={(value) => updateColor("primary", value)}
                />
                <ColorInput
                  label="Secondary Color"
                  value={colors.secondary}
                  onChange={(value) => updateColor("secondary", value)}
                />
                <ColorInput
                  label="Background Color"
                  value={colors.background}
                  onChange={(value) => updateColor("background", value)}
                />
              </div>

              {/* Preset Themes */}
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-gray-300 uppercase tracking-wider">Quick Presets</h3>
                <div className="grid grid-cols-2 gap-2">
                  {presetThemes.map((preset, index) => (
                    <button
                      key={index}
                      onClick={() => applyPreset(preset)}
                      className="p-3 rounded-lg border border-gray-700 hover:border-gray-600 transition-all duration-200 hover:scale-105 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-gray-500"
                      aria-label={`Apply ${preset.name} theme`}
                    >
                      <div className="flex items-center space-x-1 mb-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: preset.primary }} />
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: preset.secondary }} />
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: preset.background }} />
                      </div>
                      <div className="text-xs text-gray-400 group-hover:text-white transition-colors">
                        {preset.name}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-gray-700/50">
                <Button
                  onClick={resetTheme}
                  variant="outline"
                  className="w-full border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white bg-transparent"
                >
                  Reset to Default
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  )
}
