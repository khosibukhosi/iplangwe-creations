import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Clock, Award, Users, Leaf, Wrench } from 'lucide-react'

const features = [
  { icon: Shield, title: 'Lifetime Warranty', desc: 'We stand by the structural integrity of every piece.' },
  { icon: Clock, title: 'Timely Delivery', desc: 'Strict adherence to project timelines and schedules.' },
  { icon: Award, title: 'Master Artisans', desc: 'Crafted by professionals with decades of experience.' },
  { icon: Leaf, title: 'Sustainable Wood', desc: 'Only responsibly sourced hardwoods are used.' },
  { icon: Users, title: 'Client Focused', desc: 'Direct collaboration from design to installation.' },
  { icon: Wrench, title: 'Modern Precision', desc: 'State-of-the-art tools meet traditional handcraft.' },
]

const WhyChooseUs = () => {
  return (
    <section className="py-24 px-6 bg-off-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-forest font-bold uppercase tracking-widest text-sm mb-4 block italic">Our Value</span>
            <h2 className="text-4xl md:text-5xl font-playfair text-charcoal mb-8">Why Discerning Clients <br /> Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((f, i) => (
                <div key={i} className="flex gap-4">
                  <div className="shrink-0">
                    <f.icon className="text-oak" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-charcoal mb-2">{f.title}</h3>
                    <p className="text-charcoal/60 text-sm">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-charcoal relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1541535650810-10d26f5c2abb?auto=format&fit=crop&q=80&w=800"
                alt="Wood Workshop"
                className="w-full h-full object-cover opacity-70"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-forest p-10 hidden md:block">
              <div className="text-cream text-2xl font-playfair italic font-light">
                "Quality is not an act, <br /> it is a habit."
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
