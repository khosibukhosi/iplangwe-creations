import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Send, Instagram, Facebook, Twitter } from 'lucide-react'
import { useMutation } from "convex/react"
import { api } from "../../convex/_generated/api"

const Contact = () => {
  const [formStatus, setFormStatus] = useState(null)
  const sendInquiry = useMutation(api.contact.sendInquiry)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      service: formData.get("service"),
      details: formData.get("details"),
    }

    setFormStatus('sending')
    try {
      await sendInquiry(data)
      setFormStatus('success')
      e.target.reset()
    } catch (error) {
      console.error(error)
      setFormStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 px-6 bg-charcoal text-cream relative overflow-hidden">
      {/* Decorative grain */}
      <div className="absolute inset-0 opacity-5 bg-wood-grain animated-grain pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="text-oak font-bold uppercase tracking-widest text-sm mb-4 block">Get in Touch</span>
            <h2 className="text-4xl md:text-5xl font-playfair mb-8">Ready to Start Your Project?</h2>
            <p className="text-cream/60 mb-12 text-lg leading-relaxed">
              Whether you have a fully-fledged design or just a rough idea, we'd love to hear from you. Let's create something extraordinary together.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-cream/5 flex items-center justify-center rounded-none border border-cream/10">
                  <Phone className="text-oak" size={20} />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-oak mb-1">Call Us</div>
                  <div className="text-lg font-medium">+27 12 345 6789</div>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-cream/5 flex items-center justify-center rounded-none border border-cream/10">
                  <Mail className="text-oak" size={20} />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-oak mb-1">Email Us</div>
                  <div className="text-lg font-medium">hello@iplangwe.com</div>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-cream/5 flex items-center justify-center rounded-none border border-cream/10">
                  <MapPin className="text-oak" size={20} />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-oak mb-1">Visit Workshop</div>
                  <div className="text-lg font-medium">123 Artisan Way, Woodville, CT</div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 border border-cream/20 flex items-center justify-center hover:bg-oak hover:text-charcoal hover:border-oak transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-cream p-10 lg:p-16"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-charcoal/40 text-[10px] uppercase tracking-widest font-bold mb-2">Full Name</label>
                  <input name="name" type="text" required className="w-full bg-transparent border-b border-charcoal/20 py-3 focus:border-oak outline-none text-charcoal transition-colors" />
                </div>
                <div>
                  <label className="block text-charcoal/40 text-[10px] uppercase tracking-widest font-bold mb-2">Email Address</label>
                  <input name="email" type="email" required className="w-full bg-transparent border-b border-charcoal/20 py-3 focus:border-oak outline-none text-charcoal transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-charcoal/40 text-[10px] uppercase tracking-widest font-bold mb-2">Service Needed</label>
                <select name="service" className="w-full bg-transparent border-b border-charcoal/20 py-3 focus:border-oak outline-none text-charcoal transition-colors appearance-none">
                  <option>Custom Furniture</option>
                  <option>Kitchen Cabinetry</option>
                  <option>Interior Design</option>
                  <option>Built-in Units</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-charcoal/40 text-[10px] uppercase tracking-widest font-bold mb-2">Project Details</label>
                <textarea name="details" rows="4" required className="w-full bg-transparent border-b border-charcoal/20 py-3 focus:border-oak outline-none text-charcoal transition-colors resize-none"></textarea>
              </div>
              <button
                type="submit"
                disabled={formStatus === 'sending'}
                className="w-full bg-charcoal text-cream py-5 font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-charcoal/90 transition-all"
              >
                {formStatus === 'sending' ? 'Sending...' : (
                  <>
                    Send Inquiry <Send size={18} />
                  </>
                )}
              </button>
              {formStatus === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-forest text-center font-bold text-sm"
                >
                  Thank you! Your inquiry has been sent successfully.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
