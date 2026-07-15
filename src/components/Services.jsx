import React from 'react'
import { motion } from 'framer-motion'
import { 
  Hammer, Paintbrush, Home, Layout, 
  Settings, PenTool, Layers, Compass, RefreshCw
} from 'lucide-react'

const services = [
  {
    icon: Home,
    title: 'Custom Furniture',
    desc: 'Bespoke dining tables, chairs, and bedroom sets tailored to your space.'
  },
  {
    icon: Layout,
    title: 'Kitchen Cabinetry',
    desc: 'Modern and classic kitchen designs with precision-fitted cabinets.'
  },
  {
    icon: Compass,
    title: 'Built-in Units',
    desc: 'Wall units, bookshelves, and wardrobe systems designed to maximize space.'
  },
  {
    icon: Hammer,
    title: 'Architectural Details',
    desc: 'Custom moldings, ceiling treatments, and grand entryway doors.'
  },
  {
    icon: Layers,
    title: 'Flooring & Decking',
    desc: 'Premium hardwood flooring and outdoor timber decking solutions.'
  },
  {
    icon: PenTool,
    title: 'Interior Design',
    desc: 'Full-service design consulting for wood-centric interior transformations.'
  },
  {
    icon: Paintbrush,
    title: 'Restoration',
    desc: 'Breathing new life into heirloom pieces with expert restoration techniques.'
  },
  {
    icon: RefreshCw,
    title: 'Wood Wellness Service',
    desc: 'Specialized maintenance and aftercare — periodic refinishing and restoration to ensure the longevity of your timber assets.'
  },
  {
    icon: Settings,
    title: 'Commercial Fits',
    desc: 'Luxury hospitality and retail installations — bespoke counters, display units, and furniture for boutique hotels, fine-dining restaurants, and premium retail brands.'
  }
]

const Services = ({ onWoodWellness }) => {
  return (
    <section id="services" className="py-24 px-6 bg-charcoal text-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-oak font-bold uppercase tracking-widest text-sm mb-4 block">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-playfair mb-6">Masterful Services</h2>
            <div className="w-20 h-1 bg-oak mx-auto" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-cream/10 border border-cream/10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={service.title === 'Wood Wellness Service' ? onWoodWellness : undefined}
              className={`p-10 bg-charcoal hover:bg-charcoal/50 transition-colors group ${
                service.title === 'Wood Wellness Service' ? 'cursor-pointer' : 'cursor-default'
              }`}
            >
              <service.icon className="text-oak mb-6 group-hover:scale-110 transition-transform duration-500" size={32} strokeWidth={1.5} />
              <h3 className="text-xl font-playfair mb-4 group-hover:text-oak transition-colors">{service.title}</h3>
              <p className="text-cream/60 text-sm leading-relaxed mb-6">
                {service.desc}
              </p>
              <div className="w-0 group-hover:w-full h-px bg-oak transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services