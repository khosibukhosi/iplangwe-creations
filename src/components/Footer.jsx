import React from 'react'

const Footer = () => {
  return (
    <footer className="py-12 bg-charcoal border-t border-cream/5 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-xl font-playfair font-bold text-cream tracking-tight">
          IPLANGWE<span className="text-oak">.</span>
        </div>
        
        <div className="text-cream/40 text-[10px] uppercase tracking-widest font-medium">
          © {new Date().getFullYear()} Iplangwe Creations. All Rights Reserved.
        </div>
        
        <div className="flex gap-8">
          {['Privacy Policy', 'Terms of Service'].map((link) => (
            <a key={link} href="#" className="text-cream/40 hover:text-oak text-[10px] uppercase tracking-widest font-medium transition-colors">
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
