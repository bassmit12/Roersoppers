"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const images = [
  "/placeholder.svg?height=600&width=1200",
  "/placeholder.svg?height=600&width=1200",
  "/placeholder.svg?height=600&width=1200",
]

export function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const prev = () => {
    setCurrentIndex((current) => (current - 1 + images.length) % images.length)
  }

  const next = () => {
    setCurrentIndex((current) => (current + 1) % images.length)
  }

  return (
    <div className="relative h-[60vh] w-full overflow-hidden">
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute h-full w-full transition-transform duration-500 ease-in-out ${
            index === currentIndex ? "translate-x-0" : "translate-x-full"
          }`}
          style={{
            transform: `translateX(${100 * (index - currentIndex)}%)`,
          }}
        >
          <Image
            src={src || "/placeholder.svg"}
            alt={`Slide ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      ))}

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-gray-800 shadow-lg transition-transform hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-gray-800 shadow-lg transition-transform hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full transition-all ${index === currentIndex ? "w-4 bg-white" : "bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

