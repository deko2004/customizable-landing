"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Copy, Check } from "lucide-react"

interface ColorInputProps {
  label: string
  value: string
  onChange: (value: string) => void
  className?: string
}

const isValidHexColor = (hex: string): boolean => {
  return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(hex)
}

export function ColorInput({ label, value, onChange, className = "" }: ColorInputProps) {
  const [copied, setCopied] = useState(false)
  const isValid = isValidHexColor(value)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  return (
    <div className={`space-y-2 ${className}`}>
      <label className="block text-sm font-medium text-gray-300" htmlFor={`color-${label}`}>
        {label}
      </label>
      <div className="flex items-center gap-3">
        <input
          type="color"
          value={isValid ? value : "#000000"}
          onChange={(e) => onChange(e.target.value)}
          className="w-12 h-12 rounded-xl border-2 border-gray-600 hover:border-gray-500 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900"
          aria-label={`${label} color picker`}
        />
        <div className="flex-1 relative">
          <Input
            id={`color-${label}`}
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={`bg-gray-800 border-gray-600 text-white font-mono text-sm transition-colors ${
              !isValid ? "border-red-500 focus:border-red-500" : "border-gray-600 focus:border-gray-400"
            }`}
            placeholder="#000000"
            aria-invalid={!isValid}
            aria-describedby={!isValid ? `color-${label}-error` : undefined}
          />
          {!isValid && (
            <div id={`color-${label}-error`} className="absolute -bottom-5 left-0 text-xs text-red-400" role="alert">
              Invalid hex color
            </div>
          )}
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={copyToClipboard}
          className="text-gray-400 hover:text-white hover:bg-gray-800 p-2 transition-colors"
          aria-label={`Copy ${label} color code`}
        >
          {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
        </Button>
      </div>
    </div>
  )
}
