"use client"

import { motion } from "framer-motion"
import { Button } from "@/app/components/ui/button"
import { useState, useEffect } from "react"
import Link from "next/link"

// Geometric Grid Paths
function GeometricPaths() {
  const gridSize = 40
  const paths = []
  
  for (let x = 0; x < 20; x++) {
    for (let y = 0; y < 12; y++) {
      if (Math.random() > 0.7) {
        paths.push({
          id: `grid-${x}-${y}`,
          d: `M${x * gridSize},${y * gridSize} L${(x + 1) * gridSize},${y * gridSize} L${(x + 1) * gridSize},${(y + 1) * gridSize} L${x * gridSize},${(y + 1) * gridSize} Z`,
          delay: Math.random() * 2, // fast
        })
      }
    }
  }

  return (
    <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 800 480">
      {paths.map((path) => (
        <motion.path
          key={path.id}
          d={path.d}
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: [0, 1, 0], opacity: [0, 0.6, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 4, delay: path.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </svg>
  )
}

// Organic Flow Paths
function FlowPaths() {
  const flowPaths = Array.from({ length: 12 }, (_, i) => {
    const amplitude = 50 + i * 10
    const offset = i * 60
    
    return {
      id: `flow-${i}`,
      d: `M-100,${200 + offset} Q200,${200 + offset - amplitude} 500,${200 + offset} T900,${200 + offset}`,
      strokeWidth: 1 + i * 0.3,
      opacity: 0.1 + i * 0.05,
      delay: i * 0.5
    }
  })

  return (
    <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 800 800">
      {flowPaths.map((path) => (
        <motion.path
          key={path.id}
          d={path.d}
          fill="none"
          stroke="currentColor"
          strokeWidth={path.strokeWidth}
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 0.8, 0], opacity: [0, path.opacity, path.opacity * 0.7, 0] }}
          transition={{ duration: 6, delay: path.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </svg>
  )
}

// Neural Network Paths
function NeuralPaths() {
  const nodes = Array.from({ length: 50 }, (_, i) => ({
    x: Math.random() * 800,
    y: Math.random() * 600,
    id: `node-${i}`
  }))

  const connectionSet = new Set<string>()
  const connections: { id: string, d: string, delay: number }[] = []

  nodes.forEach((node, i) => {
    nodes.forEach((target, j) => {
      if (i === j) return
      const distance = Math.hypot(node.x - target.x, node.y - target.y)
      if (distance < 120 && Math.random() > 0.6) {
        const key = `${Math.min(i,j)}-${Math.max(i,j)}`
        if (!connectionSet.has(key)) {
          connectionSet.add(key)
          connections.push({
            id: `conn-${key}`,
            d: `M${node.x},${node.y} L${target.x},${target.y}`,
            delay: Math.random() * 3
          })
        }
      }
    })
  })

  return (
    <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 800 600">
      {connections.map((conn) => (
        <motion.path
          key={conn.id}
          d={conn.d}
          stroke="currentColor"
          strokeWidth="0.5"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: [0, 1, 0], opacity: [0, 0.8, 0] }}
          transition={{ duration: 3, delay: conn.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
      {nodes.map((node) => (
        <motion.circle
          key={node.id}
          cx={node.x}
          cy={node.y}
          r="2"
          fill="currentColor"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1, 1.2, 1], opacity: [0, 0.6, 0.8, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </svg>
  )
}

// Spiral Paths
function SpiralPaths() {
  const spirals = Array.from({ length: 8 }, (_, i) => {
    const centerX = 400 + (i % 4 - 1.5) * 200
    const centerY = 300 + Math.floor(i / 4 - 0.5) * 200
    const radius = 80 + i * 15
    const turns = 3 + i * 0.5
    
    let path = `M${centerX + radius},${centerY}`
    for (let angle = 0; angle <= turns * 360; angle += 5) {
      const radian = (angle * Math.PI) / 180
      const currentRadius = radius * (1 - angle / (turns * 360))
      const x = centerX + currentRadius * Math.cos(radian)
      const y = centerY + currentRadius * Math.sin(radian)
      path += ` L${x},${y}`
    }
    
    return {
      id: `spiral-${i}`,
      d: path,
      delay: i * 0.5
    }
  })

  return (
    <svg className="absolute inset-0 w-full h-full opacity-25" viewBox="0 0 800 600">
      {spirals.map((spiral) => (
        <motion.path
          key={spiral.id}
          d={spiral.d}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 0], rotate: [0, 360] }}
          transition={{
            pathLength: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 10, repeat: Infinity, ease: "linear" },
            delay: spiral.delay
          }}
        />
      ))}
    </svg>
  )
}

export default function EnhancedBackgroundPaths({
  title = "Let's Work Together",
}: {
  title?: string
}) {
  const [currentPattern, setCurrentPattern] = useState(0)
  const patterns = ['neural', 'flow', 'geometric', 'spiral']
  const words = title.split(" ")

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPattern((prev) => (prev + 1) % patterns.length)
    }, 8000) // pattern fast switch
    return () => clearInterval(interval)
  }, [])

  const renderPattern = () => {
    switch (currentPattern) {
      case 0: return <NeuralPaths />
      case 1: return <FlowPaths />
      case 2: return <GeometricPaths />
      case 3: return <SpiralPaths />
      default: return <NeuralPaths />
    }
  }

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Dynamic Background Patterns */}
      <div className="absolute inset-0 text-slate-600 dark:text-slate-400">
        <motion.div
          key={currentPattern}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }} // smooth fade
        >
          {renderPattern()}
        </motion.div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 " />

      {/* Pattern Indicator */}
      <div className="absolute top-8 right-8 flex gap-2 z-20">
        {patterns.map((_, i) => (
          <motion.div
            key={i}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${i === currentPattern ? 'bg-slate-800 dark:bg-white' : 'bg-slate-300 dark:bg-slate-600'}`}
            animate={{ scale: i === currentPattern ? 1.2 : 1, opacity: i === currentPattern ? 1 : 0.5 }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          <div className="mb-8">
            <h1 className="text-6xl sm:text-8xl md:text-9xl font-black mb-4 tracking-tighter leading-none">
              {words.map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block mr-6 last:mr-0">
                  {word.split("").map((letter, letterIndex) => (
                    <motion.span
                      key={`${wordIndex}-${letterIndex}`}
                      initial={{ y: 100, opacity: 0, rotateX: -90 }}
                      animate={{ y: 0, opacity: 1, rotateX: 0 }}
                      transition={{ delay: wordIndex * 0.15 + letterIndex * 0.05, type: "spring", stiffness: 100, damping: 20, duration: 0.8 }}
                      className="inline-block text-transparent bg-clip-text bg-gradient-to-br from-slate-600 via-slate-700 to-slate-500 dark:from-white dark:via-slate-200 dark:to-slate-400 hover:from-blue-600 hover:to-purple-600 dark:hover:from-blue-400 dark:hover:to-purple-400 transition-all duration-700 cursor-default"
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </span>
              ))}
            </h1>
            
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }} className="text-xl md:text-2xl text-slate-300 dark:text-slate-300 font-light tracking-wide max-w-2xl mx-auto">
              Let’s work together to bring your ideas to life with dynamic and interactive designs
            </motion.p>

            {/* CTA Button */}
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.5, duration: 0.8, type: "spring", stiffness: 100 }} className="inline-block group mt-8">
              <Link href="/contact-us" >
              <div className="relative p-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-2xl group-hover:from-blue-600 group-hover:via-purple-600 group-hover:to-pink-200 transition-all duration-300">
                <Button variant="ghost" size="lg" className="relative rounded-[14px] px-12 py-6 text-lg font-semibold  dark:bg-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-900 dark:text-white transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl border-0 backdrop-blur-sm">
                  <motion.span className="flex items-center gap-3" whileHover={{ x: 2 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                    <span className="relative">
                      Contact Us
                      <motion.span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300" initial={{ width: 0 }} whileHover={{ width: "100%" }} />
                    </span>
                    <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="text-xl">→</motion.span>
                  </motion.span>
                </Button>
              </div>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
