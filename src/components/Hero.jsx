import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-charcoal">
      {/* Background with wood grain drift */}
      <div className="absolute inset-0 opacity-20 bg-wood-grain animated-grain" />
      
      {/* Decorative diagonal overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-transparent to-charcoal/50 z-10" />
      
      <div className="relative z-20 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-oak font-inter uppercase tracking-[0.3em] text-sm mb-6 block">
            Crafting Excellence Since 2009
          </span>
          <h1 className="text-5xl md:text-8xl font-playfair text-cream leading-tight mb-8">
            The Art of <span className="italic text-oak">Bespoke</span> <br /> Woodworking
          </h1>
          <p className="text-cream/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Elevating interiors with timeless wood creations that blend traditional techniques with modern aesthetic sensibilities.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="#portfolio"
              className="bg-oak text-charcoal px-10 py-4 font-bold uppercase tracking-widest flex items-center group transition-all"
            >
              View Gallery
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </a>
            <a
              href="#about"
              className="border border-cream/30 text-cream px-10 py-4 font-bold uppercase tracking-widest hover:bg-cream hover:text-charcoal transition-all"
            >
              Our Story
            </a>
          </div>
        </motion.div>
        
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-cream/10 pt-10"
        >
          {[
            { label: 'Projects Completed', value: '450+' },
            { label: 'Years Experience', value: '15' },
            { label: 'Master Artisans', value: '12' },
            { label: 'Happy Clients', value: '100%' },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-3xl font-playfair text-cream mb-1">{stat.value}</div>
              <div className="text-[10px] uppercase tracking-widest text-oak">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
