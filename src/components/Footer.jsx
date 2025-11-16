import React from 'react'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative z-10 flex items-center justify-center py-6 text-xs text-white/60">
      © {year} — All rights reserved
    </footer>
  )
}
