import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '../lib/utils'

const Navbar = ({ onWoodWellness }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Wood Wellness', href: '#wood-wellness', onClick: onWoodWellness },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Process', href: '#process' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "bg-charcoal/95 backdrop-blur-sm py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl font-playfair font-bold text-cream tracking-tight">
          IPLANGWE<span className="text-oak">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            link.onClick ? (
              <button
                key={link.name}
                onClick={() => { link.onClick(); setIsOpen(false); }}
                className="text-cream/80 hover:text-oak transition-colors text-sm uppercase tracking-widest font-medium"
              >
                {link.name}
              </button>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className="text-cream/80 hover:text-oak transition-colors text-sm uppercase tracking-widest font-medium"
              >
                {link.name}
              </a>
            )
          ))}
          <a
            href="#contact"
            className="bg-oak hover:bg-oak/90 text-charcoal px-6 py-2 rounded-none transition-all font-bold uppercase tracking-widest text-xs"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-cream"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 bg-charcoal z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-500 md:hidden",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        {navLinks.map((link) => (
            link.onClick ? (
              <button
                key={link.name}
                onClick={() => { link.onClick(); setIsOpen(false); }}
                className="text-cream text-2xl font-playfair hover:text-oak transition-colors"
              >
                {link.name}
              </button>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className="text-cream text-2xl font-playfair hover:text-oak transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            )
          ))}
        <a
          href="#contact"
          className="bg-oak text-charcoal px-8 py-3 font-bold uppercase tracking-widest"
          onClick={() => setIsOpen(false)}
        >
          Get a Quote
        </a>
      </div>
    </nav>
  )
}

export default Navbar
