"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const integrations = [
  {
    name: "Discord",
    logo: "https://framerusercontent.com/images/cePyGd4qoBvYjjZ1jQxzX0AO4.svg?width=60&height=60",
    verified: true,
  },
  {
    name: "YouTube",
    logo: "https://framerusercontent.com/images/M15fqYLnFAWcWK6Y7DXmxd5u0.svg?width=60&height=60",
    verified: true,
  },
  {
    name: "Whop",
    logo: "https://framerusercontent.com/images/BDLxGUSH95miFUWoE2YyvaOKQzw.svg?width=60&height=60",
    verified: true,
  },
  {
    name: "Telegram",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/512px-Telegram_2019_Logo.svg.png",
    verified: true,
  },
]

export default function Integrations() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("integrations-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  // Duplicate the integrations array for seamless infinite scroll
  const duplicatedIntegrations = [...integrations, ...integrations, ...integrations]

  return (
    <section id="integrations" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div id="integrations-section" className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-white border-2 border-accent/30 text-accent text-sm font-semibold">
                Integrations
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Seamless Integrations
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Access Lathyrus Trading content seamlessly through everyday apps.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-accent to-primary  text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl"
            >
              Get Started Now
            </motion.button>
          </motion.div>

          {/* Right Side - Infinite Scrolling Integration Cards */}
          <div className="relative h-[400px] overflow-hidden">
            {/* Gradient overlays for smooth fade effect */}
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />

            {/* Scrolling container */}
            <motion.div
              animate={{
                y: [0, -100 * integrations.length],
              }}
              transition={{
                y: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
              className="space-y-4"
            >
              {duplicatedIntegrations.map((integration, index) => (
                <motion.div
                  key={`${integration.name}-${index}`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                  transition={{ duration: 0.5, delay: (index % integrations.length) * 0.1 }}
                  whileHover={{ scale: 1.02, x: -5 }}
                  className="bg-background border border-border rounded-xl p-5 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                >
                  {/* Logo */}
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-border">
                    <img
                      src={integration.logo}
                      alt={integration.name}
                      className="w-7 h-7 object-contain"
                      loading="lazy"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      {integration.verified && (
                        <div className="w-4 h-4 rounded-full bg-[#3b82f6] flex items-center justify-center shrink-0">
                          <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      )}
                      <span className="font-semibold text-foreground truncate">{integration.name}</span>
                    </div>

                    {/* Progress bar */}
                    <div className="mt-2 h-1.5 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-[#3b82f6]"
                        initial={{ width: "0%" }}
                        animate={isVisible ? { width: "75%" } : { width: "0%" }}
                        transition={{
                          duration: 1,
                          delay: (index % integrations.length) * 0.15,
                        }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
