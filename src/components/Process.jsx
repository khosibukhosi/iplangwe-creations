import React from 'react'
import { motion } from 'framer-motion'

const steps = [
  { number: '01', title: 'Consultation', desc: 'We discuss your vision, space requirements, and material preferences.' },
  { number: '02', title: 'Design & 3D Model', desc: 'We provide detailed sketches and 3D renders for your approval.' },
  { number: '03', title: 'Material Selection', desc: 'Choosing the perfect hardwoods and grains for your specific project.' },
  { number: '04', title: 'The Build', desc: 'Our master artisans begin the meticulous crafting process in our workshop.' },
  { number: '05', title: 'Installation', desc: 'White-glove delivery and precision installation at your premises.' },
]

const Process = () => {
  return (
    <section id="process" className="py-24 bg-charcoal px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-oak font-bold uppercase tracking-widest text-sm mb-4 block">The Journey</span>
          <h2 className="text-4xl md:text-5xl font-playfair text-cream">Our Crafting Process</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative text-center md:text-left"
            >
              <div className="text-6xl font-playfair font-bold text-cream/5 mb-6 absolute -top-10 left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0">
                {step.number}
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-oak mb-4">{step.title}</h3>
                <p className="text-cream/60 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-4 -right-6 w-12 h-px bg-oak/20" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
