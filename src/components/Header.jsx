import React from 'react'
import { Menu } from 'lucide-react'

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-20 flex items-center justify-between px-5 sm:px-8 py-4 text-white/90">
      <div className="font-medium tracking-tight">Portfolio</div>
      <button
        aria-label="Menu"
        className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 backdrop-blur hover:bg-white/10 transition"
      >
        <Menu size={18} />
        <span className="hidden sm:inline text-sm">Menu</span>
      </button>
    </header>
  )
}
