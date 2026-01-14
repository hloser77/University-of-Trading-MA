"use client"

import React, { useEffect, useRef, useState, useCallback } from "react"

const certificates = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/da63nggkh/image/upload/v1764179206/WhatsApp_Image_2025-11-26_at_4.00.12_AM_ku5vhz.jpg",
    alt: "Student Certificate 1",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/da63nggkh/image/upload/v1764179202/WhatsApp_Image_2025-11-26_at_4.00.12_AM_1_zz2iib.jpg",
    alt: "Student Certificate 2",
  },
  {
    id: 3,
    image: "https://res.cloudinary.com/dd3dc5oum/image/upload/v1767446442/Salma_Bennani_xxeqft.png",
    alt: "Student Certificate 3",
  },
  {
    id: 4,
    image: "https://res.cloudinary.com/dd3dc5oum/image/upload/v1767446596/Screenshot_2026-01-03_at_14.22.48_zzhg5e.jpg",
    alt: "Student Certificate 4",
  },
  {
    id: 5,
    image: "https://res.cloudinary.com/dd3dc5oum/image/upload/v1767446278/Hind_Elidrissi_bgfelr.png",
    alt: "Student Certificate 5",
  },
  {
    id: 6,
    image: "https://res.cloudinary.com/dd3dc5oum/image/upload/v1767446477/mohamedmohamedtazitazi_qmzbmt.png",
    alt: "Student Certificate 6",
  },
  {
    id: 7,
    image: "https://res.cloudinary.com/dd3dc5oum/image/upload/v1767450225/saraelfassi_cxmtbq.png",
    alt: "Student Certificate 7",
  },
  {
    id: 8,
    image: "https://res.cloudinary.com/dd3dc5oum/image/upload/v1767449261/meriembelkhayat_xjamxu.png",
    alt: "Student Certificate 8",
  },
  {
    id: 9,
    image: "https://res.cloudinary.com/dd3dc5oum/image/upload/v1767534850/IMG_0460_tcjxbs.jpg",
    alt: "Student Certificate 9",
  },
  {
    id: 10,
    image: "https://res.cloudinary.com/dd3dc5oum/image/upload/v1767448334/Zineb_Chraibi_y0hyla.png",
    alt: "Student Certificate 10",
  },
]

/**
 * CertificatesCarousel Component
 * 
 * An infinite horizontal auto-scrolling gallery using requestAnimationFrame for smooth performance.
 * Supports manual dragging (mouse & touch) and pauses on interaction.
 */
export default function CertificatesCarousel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollerRef = useRef<HTMLDivElement>(null)

  // State for dragging and position
  const [isDragging, setIsDragging] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)
  const currentX = useRef(0)

  // Animation state
  const requestRef = useRef<number>(0)
  const speed = useRef(1) // Base speed in pixels per frame

  // Dual-layer list for infinite scroll logic
  const items = [...certificates, ...certificates]

  const animate = useCallback((time: number) => {
    if (!scrollerRef.current || isDragging || isPaused) {
      return
    }

    // Move currentX to the left
    currentX.current -= speed.current

    // Reset position for infinite loop effect
    // We only need to reset when we've scrolled half of the dual-layer content
    const scrollWidth = scrollerRef.current.scrollWidth
    const halfWidth = scrollWidth / 2

    if (halfWidth > 0 && Math.abs(currentX.current) >= halfWidth) {
      currentX.current = 0
    }

    scrollerRef.current.style.transform = `translateX(${currentX.current}px)`
    requestRef.current = requestAnimationFrame(animate)
  }, [isDragging, isPaused])

  useEffect(() => {
    if (!isPaused && !isDragging) {
      requestRef.current = requestAnimationFrame(animate)
    }
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current)
    }
  }, [animate, isPaused, isDragging])

  // Mouse & Touch Handlers
  const handleStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true)
    setIsPaused(true)

    const clientX = 'touches' in e ? (e as React.TouchEvent).touches[0].clientX : (e as React.MouseEvent).clientX
    startX.current = clientX
    scrollLeft.current = currentX.current
  }

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return

    const clientX = 'touches' in e ? (e as React.TouchEvent).touches[0].clientX : (e as React.MouseEvent).clientX
    const dragDistance = clientX - startX.current

    // Update position based on drag
    currentX.current = scrollLeft.current + dragDistance

    // Boundary check for infinite loop while dragging
    if (scrollerRef.current) {
      const halfWidth = scrollerRef.current.scrollWidth / 2
      if (currentX.current > 0) {
        currentX.current = -halfWidth
        startX.current = clientX
        scrollLeft.current = currentX.current
      } else if (Math.abs(currentX.current) >= halfWidth) {
        currentX.current = 0
        startX.current = clientX
        scrollLeft.current = currentX.current
      }

      scrollerRef.current.style.transform = `translateX(${currentX.current}px)`
    }
  }

  const handleEnd = () => {
    setIsDragging(false)
    setIsPaused(false)
  }

  return (
    <section className="relative w-full bg-background py-20 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 pointer-events-none">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Members Success Stories</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results from our community: from passing challenges to consistent payouts
          </p>
        </div>

        {/* Gradient overlays for seamless edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div
          ref={containerRef}
          className="relative overflow-hidden py-10 cursor-grab active:cursor-grabbing touch-pan-y"
          onMouseDown={handleStart}
          onMouseMove={handleMove}
          onMouseUp={handleEnd}
          onMouseLeave={handleEnd}
          onTouchStart={handleStart}
          onTouchMove={handleMove}
          onTouchEnd={handleEnd}
          onMouseEnter={() => setIsPaused(true)}
        >
          <div
            ref={scrollerRef}
            className="flex gap-6 will-change-transform"
            style={{ width: "max-content" }}
          >
            {items.map((cert, index) => (
              <div
                key={`${cert.id}-${index}`}
                className="relative flex-shrink-0 pointer-events-none"
              >
                <div className="w-64 h-44 rounded-2xl overflow-hidden border border-border bg-card shadow-sm">
                  <img
                    src={cert.image}
                    alt={cert.alt}
                    draggable={false}
                    className="w-full h-full object-cover pointer-events-none"
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-center pointer-events-none">
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full opacity-50"></div>
        </div>
      </div>
    </section>
  )
}

