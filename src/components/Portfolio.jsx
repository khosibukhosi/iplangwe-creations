import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '../lib/utils'

const projects = [
  {
    title: 'Slatted TV Unit',
    category: 'Living Room',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800',
    desc: 'A bespoke slatted wall-mounted unit with integrated shelving, crafted from premium oak.',
    grid: 'md:col-span-2 md:row-span-2'
  },
  {
    title: 'Contemporary Round Coffee Table',
    category: 'Furniture',
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800',
    desc: 'A sculptural round coffee table in solid walnut, blending organic form with modern elegance.',
    grid: 'col-span-1'
  },
  {
    title: 'Rectangular Minimalist Coffee Table',
    category: 'Furniture',
    image: 'https://images.unsplash.com/photo-1532372576444-dda954194ad0?auto=format&fit=crop&q=80&w=800',
    desc: 'Clean-lined rectangular table in Kiaat hardwood, designed for understated sophistication.',
    grid: 'col-span-1'
  },
  {
    title: 'Artisan Headboard & Pedestal Set',
    category: 'Bedroom',
    image: 'https://images.unsplash.com/photo-1505693419173-42b925685a91?auto=format&fit=crop&q=80&w=800',
    desc: 'A complete bedroom suite with a statement headboard and matching pedestals in rich timber.',
    grid: 'col-span-1'
  },
  {
    title: 'Solid Hardwood Executive Desk',
    category: 'Office',
    image: 'https://images.unsplash.com/photo-1594488651083-001994be0420?auto=format&fit=crop&q=80&w=800',
    desc: 'A commanding solid hardwood desk with hidden cable management and dovetail joinery.',
    grid: 'col-span-1'
  },
  {
    title: 'Integrated Wall-Mounted TV Unit',
    category: 'Living Room',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
    desc: 'A custom floating unit with seamless cabinetry, designed to anchor the living space.',
    grid: 'md:col-span-2'
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 px-6 bg-off-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="text-forest font-bold uppercase tracking-widest text-sm mb-4 block italic">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-playfair text-charcoal">Selected Works</h2>
          </div>
          <p className="text-charcoal/60 max-w-md md:text-right">
            A curated selection of signature pieces from our WhatsApp catalog, showcasing the breadth of our bespoke craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "relative group overflow-hidden bg-charcoal",
                project.grid
              )}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-60" />
              <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-oak font-inter uppercase tracking-[0.2em] text-[10px] mb-2">{project.category}</span>
                <h3 className="text-2xl font-playfair text-cream">{project.title}</h3>
                <p className="text-cream/60 text-sm mt-2 max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500">{project.desc}</p>
                <div className="h-px w-0 group-hover:w-full bg-oak mt-4 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio