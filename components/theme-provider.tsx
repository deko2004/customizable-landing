"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

interface ThemeColors {
  primary: string
  secondary: string
  background: string
}

interface ThemeContextType {
  colors: ThemeColors
  updateColor: (key: keyof ThemeColors, value: string) => void
  applyPreset: (preset: ThemeColors) => void
  resetTheme: () => void
}

const defaultTheme: ThemeColors = {
  primary: "#8b5cf6",
  secondary: "#06b6d4",
  background: "#0f172a",
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [colors, setColors] = useState<ThemeColors>(defaultTheme)

  useEffect(() => {
    // Apply CSS custom properties
    Object.entries(colors).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--theme-${key}`, value)
    })
  }, [colors])

  const updateColor = (key: keyof ThemeColors, value: string) => {
    setColors((prev) => ({ ...prev, [key]: value }))
  }

  const applyPreset = (preset: ThemeColors) => {
    setColors(preset)
  }

  const resetTheme = () => {
    setColors(defaultTheme)
  }

  return (
    <ThemeContext.Provider value={{ colors, updateColor, applyPreset, resetTheme }}>{children}</ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
