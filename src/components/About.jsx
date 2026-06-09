import React from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-off-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-charcoal relative z-10 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581421315159-c4bae3e435fd?auto=format&fit=crop&q=80&w=800"
                alt="Woodworking Craftsmanship"
                className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-10 -right-10 bg-oak p-8 z-20 hidden md:block">
              <div className="text-4xl font-playfair font-bold text-charcoal">15</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-charcoal/80 leading-tight">
                Years of Master <br /> Craftsmanship
              </div>
            </div>
            {/* Background decorative box */}
            <div className="absolute -top-10 -left-10 w-2/3 h-2/3 border-2 border-oak/20 z-0" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-forest font-bold uppercase tracking-widest text-sm mb-4 block italic">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-playfair text-charcoal mb-8 leading-tight">
              Honoring Tradition, <br /> Embracing Modernity
            </h2>
            <p className="text-charcoal/70 text-lg mb-8 leading-relaxed">
              At Iplangwe Creations, we believe every piece of wood has a story to tell. For over 15 years, we have been dedicated to the fine art of joinery and custom woodworking, transforming raw timber into functional masterpieces.
            </p>
            
            <ul className="space-y-4 mb-10">
              {[
                'Sustainably sourced premium hardwoods',
                'Traditional mortise and tenon joinery',
                'Custom CAD design & 3D modeling',
                'Organic oil and wax finishes',
              ].map((item) => (
                <li key={item} className="flex items-center text-charcoal/80 font-medium">
                  <div className="w-6 h-6 bg-forest/10 rounded-full flex items-center justify-center mr-3">
                    <Check className="text-forest" size={14} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <button className="bg-charcoal text-cream px-10 py-4 font-bold uppercase tracking-widest hover:bg-charcoal/90 transition-all">
              Learn More About Us
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
