"use client"

import { MenuIcon } from "lucide-react"
import type React from "react"
import { useState } from "react"

interface MediaProgressBarProps {
  value?: number
  max?: number
  onChange?: (value: number) => void
  className?: string
}



export function TradeSlider({ value = 25, max = 100, onChange, className = "" }: MediaProgressBarProps) {
  const [isDragging, setIsDragging] = useState(false)

  const percentage = (value / max) * 100

  const stepMarkers = Array.from({ length: 7 }, (_, i) => (i + 1) * (100 / 8))

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true)
    updateValue(e)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      updateValue(e)
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const updateValue = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const newPercentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    const newValue = (newPercentage / 100) * max
    onChange?.(newValue)
  }

  return (
    <div className={`w-full ${className}`}>
      <div
        className="relative h-2 bg-bg-gray-shade rounded-full cursor-pointer"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {stepMarkers.map((step, index) => (
          <div
            key={index}
            className="absolute top-1/2 w-[6px] h-[6px] bg-[#ffffff20] rounded-full transform -translate-y-1/2 -translate-x-1/2"
            style={{ left: `${step}%` }}
          />
        ))}

        <div className="absolute top-0 left-0 h-full bg-green-400 rounded-full" style={{ width: `${percentage}%` }} />

        <div
          className="absolute top-1/2 w-[38px] h-[22px] bg-green-400 rounded-full transform -translate-y-1/2 -translate-x-1/2 flex items-center justify-center cursor-grab active:cursor-grabbing shadow-lg"
          style={{ left: `${percentage}%` }}
        >
          <MenuIcon className="w-3 h-3 text-bg-primary rotate-90" />
        </div>
      </div>
    </div>
  )
}
