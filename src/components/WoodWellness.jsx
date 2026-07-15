import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Shield, Clock, TrendingUp, Leaf, CheckCircle, Send } from 'lucide-react'

const woodTypes = [
  'Dining Table',
  'Coffee Table / Side Table',
  'Headboard & Pedestal Set',
  'TV Unit / Entertainment Unit',
  'Executive Desk',
  'Commercial Decking',
  'Architectural Cladding',
  'Kitchen Cabinetry',
  'Built-in Shelving / Wardrobe',
  'Other (specify below)'
]

const WoodWellness = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    woodType: '',
    age: '',
    description: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Wood Wellness Request:', formData)
    // Ready for backend engineer to wire up to Convex/email
    setSubmitted(true)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] overflow-y-auto bg-charcoal"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="fixed top-6 right-6 z-10 bg-cream/10 hover:bg-cream/20 text-cream p-3 rounded-full transition-colors"
          >
            <X size={24} />
          </button>

          {/* Hero Section */}
          <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=1600"
              alt="Wood restoration and care"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="text-oak font-bold uppercase tracking-widest text-sm mb-4 block">Wood Wellness Service</span>
                <h1 className="text-4xl md:text-6xl font-playfair text-cream mb-4">Preserve the Legacy</h1>
                <p className="text-cream/70 text-lg max-w-2xl">
                  Specialized maintenance and aftercare for your high-end timber assets — ensuring beauty, durability, and value for generations.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Content */}
          <div className="max-w-7xl mx-auto px-6 md:px-16 py-16">
            {/* Value Propositions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {[
                {
                  icon: Shield,
                  title: 'Longevity',
                  desc: 'Extend the life of your investment-grade woodwork with professional periodic refinishing and protective treatments.'
                },
                {
                  icon: Clock,
                  title: 'Aesthetic Preservation',
                  desc: 'Maintain the original beauty, grain, and patina that make each piece unique — preventing wear from sunlight, humidity, and daily use.'
                },
                {
                  icon: TrendingUp,
                  title: 'Asset Value Protection',
                  desc: 'Protect the value of your bespoke furniture and architectural woodwork. Well-maintained timber assets appreciate in character and worth.'
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 border border-cream/10 hover:border-oak/30 transition-colors"
                >
                  <item.icon className="text-oak mb-6" size={32} strokeWidth={1.5} />
                  <h3 className="text-xl font-playfair text-cream mb-4">{item.title}</h3>
                  <p className="text-cream/60 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* For Whom */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-playfair text-cream mb-6">For Discerning Homeowners</h2>
                <div className="space-y-4">
                  {[
                    'Heirloom furniture refinishing and restoration',
                    'Dining table re-oiling and scratch removal',
                    'Headboard and bedroom suite maintenance',
                    'Custom TV unit and shelving preservation',
                    'Antique and heritage piece care'
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="text-oak mt-0.5 flex-shrink-0" size={18} />
                      <span className="text-cream/70">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-playfair text-cream mb-6">For Commercial Partners</h2>
                <div className="space-y-4">
                  {[
                    'Boutique hotel suite furniture refurbishment programs',
                    'Fine-dining restaurant table and bar top refinishing',
                    'Retail display unit periodic maintenance',
                    'Lodge and hospitality timber asset rotation plans',
                    'Architectural cladding and decking restoration'
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="text-oak mt-0.5 flex-shrink-0" size={18} />
                      <span className="text-cream/70">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Our Process */}
            <div className="mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-playfair text-cream mb-4">Our Wellness Process</h2>
                <div className="w-20 h-1 bg-oak mx-auto" />
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { step: '01', title: 'Assessment', desc: 'We evaluate the current condition, wood type, and finish to determine the optimal care plan.' },
                  { step: '02', title: 'Cleaning & Prep', desc: 'Gentle deep cleaning removes grime, old wax, and surface contaminants without damaging the grain.' },
                  { step: '03', title: 'Refinishing', desc: 'Expert sanding, oiling, waxing, or lacquering to restore the original luster and protection.' },
                  { step: '04', title: 'Ongoing Care', desc: 'We provide care instructions and schedule periodic check-ups to keep your timber in peak condition.' }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="text-center p-6"
                  >
                    <span className="text-oak text-5xl font-playfair block mb-4">{item.step}</span>
                    <h3 className="text-lg font-playfair text-cream mb-3">{item.title}</h3>
                    <p className="text-cream/60 text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Request Form */}
            <motion.div
              id="wood-wellness-form"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto border border-cream/10 p-8 md:p-12"
            >
              <div className="text-center mb-10">
                <Leaf className="text-oak mx-auto mb-4" size={32} strokeWidth={1.5} />
                <h2 className="text-3xl md:text-4xl font-playfair text-cream mb-4">Request a Wellness Assessment</h2>
                <p className="text-cream/60">
                  Tell us about your piece and we'll prepare a tailored care plan. We'll respond within 24 hours.
                </p>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="text-oak mx-auto mb-6" size={48} strokeWidth={1.5} />
                  <h3 className="text-2xl font-playfair text-cream mb-4">Thank You</h3>
                  <p className="text-cream/60 mb-8">
                    Your wellness assessment request has been received. We'll be in touch within 24 hours to schedule a consultation.
                  </p>
                  <button
                    onClick={onClose}
                    className="bg-oak hover:bg-oak/90 text-charcoal px-8 py-3 font-bold uppercase tracking-widest text-sm transition-colors"
                  >
                    Return to Home
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-cream/80 text-sm uppercase tracking-widest mb-2 font-medium">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="e.g. Thandi Mokoena"
                        className="w-full bg-transparent border border-cream/20 px-4 py-3 text-cream placeholder-cream/30 focus:outline-none focus:border-oak transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-cream/80 text-sm uppercase tracking-widest mb-2 font-medium">
                        Contact (Phone or Email) *
                      </label>
                      <input
                        type="text"
                        name="contact"
                        value={formData.contact}
                        onChange={handleChange}
                        required
                        placeholder="e.g. +27 67 757 1280"
                        className="w-full bg-transparent border border-cream/20 px-4 py-3 text-cream placeholder-cream/30 focus:outline-none focus:border-oak transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-cream/80 text-sm uppercase tracking-widest mb-2 font-medium">
                        Type of Woodwork *
                      </label>
                      <select
                        name="woodType"
                        value={formData.woodType}
                        onChange={handleChange}
                        required
                        className="w-full bg-transparent border border-cream/20 px-4 py-3 text-cream focus:outline-none focus:border-oak transition-colors appearance-none"
                      >
                        <option value="" disabled className="bg-charcoal">Select type...</option>
                        {woodTypes.map((type, i) => (
                          <option key={i} value={type} className="bg-charcoal">{type}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-cream/80 text-sm uppercase tracking-widest mb-2 font-medium">
                        Estimated Age
                      </label>
                      <input
                        type="text"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        placeholder="e.g. 5 years, 15+ years"
                        className="w-full bg-transparent border border-cream/20 px-4 py-3 text-cream placeholder-cream/30 focus:outline-none focus:border-oak transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-cream/80 text-sm uppercase tracking-widest mb-2 font-medium">
                      Description of the Need *
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Describe the condition of your piece — scratches, fading, loose joints, water marks, or general wear..."
                      className="w-full bg-transparent border border-cream/20 px-4 py-3 text-cream placeholder-cream/30 focus:outline-none focus:border-oak transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-oak hover:bg-oak/90 text-charcoal py-4 font-bold uppercase tracking-widest text-sm transition-colors flex items-center justify-center gap-3"
                  >
                    <Send size={16} />
                    Submit Assessment Request
                  </button>

                  <p className="text-cream/40 text-xs text-center">
                    We respect your privacy. Your details will only be used to respond to your request.
                  </p>
                </form>
              )}
            </motion.div>
          </div>

          {/* Footer */}
          <div className="border-t border-cream/10 py-8 px-6 md:px-16">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-cream/40 text-sm">
                © 2026 Iplangwe Creations — Crafting Excellence Since 2009
              </p>
              <button
                onClick={onClose}
                className="text-cream/60 hover:text-oak text-sm uppercase tracking-widest transition-colors"
              >
                Back to Home
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default WoodWellness