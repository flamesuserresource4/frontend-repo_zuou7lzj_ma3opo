import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { NAME } from '../config'

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* 3D Cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle gradient overlays for readability (won't block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/70" />

      {/* Centered Name */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center font-semibold tracking-tight"
        >
          <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl bg-gradient-to-br from-white via-white to-slate-300 bg-clip-text text-transparent drop-shadow-[0_2px_16px_rgba(255,255,255,0.2)]">
            {NAME}
          </span>
        </motion.h1>
      </div>

      {/* Minimal bottom hint */}
      <div className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center">
        <div className="h-8 w-px bg-white/40" />
      </div>
    </section>
  )
}
