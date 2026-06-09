import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const reviews = [
  {
    name: 'Sarah Jenkins',
    role: 'Interior Designer',
    text: 'Iplangwe creations consistently delivers pieces that become the focal point of my designs. Their attention to joinery is unparalleled.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'Homeowner',
    text: 'The custom kitchen islands they built for us exceeded all expectations. It’s truly a functional work of art.',
    rating: 5
  },
  {
    name: 'David Roberts',
    role: 'Restaurateur',
    text: 'They handled our entire restaurant fit-out. The warm oak tones have created the exact atmosphere we were aiming for.',
    rating: 5
  },
  {
    name: 'Elena Rodriguez',
    role: 'Architect',
    text: 'Their technical understanding of timber and structural integrity makes them my first choice for complex architectural woodwork.',
    rating: 5
  },
  {
    name: 'Robert Thompson',
    role: 'Homeowner',
    text: 'Expert craftsmanship. The team was professional, clean, and delivered our dining table ahead of schedule.',
    rating: 5
  },
  {
    name: 'Amanda Lee',
    role: 'Boutique Owner',
    text: 'Our display units are stunning. They managed to blend our modern brand with a very tactile, organic feel.',
    rating: 5
  }
]

const Testimonials = () => {
  return (
    <section className="py-24 bg-charcoal overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <span className="text-oak font-bold uppercase tracking-widest text-sm mb-4 block">Testimonials</span>
        <h2 className="text-4xl md:text-5xl font-playfair text-cream">Voices of Satisfaction</h2>
      </div>

      <div className="relative">
        <motion.div
          animate={{ x: [0, -1500] }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-8 w-max px-6"
        >
          {[...reviews, ...reviews].map((review, i) => (
            <div
              key={i}
              className="w-[350px] bg-off-white/5 border border-cream/10 p-10 hover:bg-off-white/10 transition-colors group"
            >
              <div className="flex text-oak mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <Quote className="text-oak/20 mb-4 group-hover:text-oak/40 transition-colors" size={40} />
              <p className="text-cream/80 mb-8 italic leading-relaxed">
                "{review.text}"
              </p>
              <div>
                <div className="font-bold text-cream">{review.name}</div>
                <div className="text-oak text-xs uppercase tracking-widest">{review.role}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
