import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const posts = [
  {
    title: 'The Beauty of Live Edge Tables',
    excerpt: 'Exploring why live edge furniture is making a major comeback in modern interior design.',
    date: 'June 12, 2024',
    category: 'Design Tips',
    image: 'https://images.unsplash.com/photo-1549497538-301288c8531a?auto=format&fit=crop&q=80&w=600'
  },
  {
    title: 'Choosing the Right Wood for Your Space',
    excerpt: 'A guide to understanding grain patterns, durability, and color shifts in popular hardwoods.',
    date: 'May 28, 2024',
    category: 'Guides',
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=600'
  },
  {
    title: 'Modern Joinery Techniques',
    excerpt: 'How we combine traditional mortise and tenon with modern precision for lifelong durability.',
    date: 'May 15, 2024',
    category: 'Craftsmanship',
    image: 'https://images.unsplash.com/photo-1581421315159-c4bae3e435fd?auto=format&fit=crop&q=80&w=600'
  }
]

const Blog = () => {
  return (
    <section id="blog" className="py-24 px-6 bg-off-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-forest font-bold uppercase tracking-widest text-sm mb-4 block italic">Our Journal</span>
          <h2 className="text-4xl md:text-5xl font-playfair text-charcoal mb-6 text-center">Insights & Inspiration</h2>
          <div className="w-20 h-1 bg-oak mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {posts.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[16/10] overflow-hidden bg-charcoal mb-8 relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover opacity-90 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute top-4 left-4 bg-oak text-charcoal px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                  {post.category}
                </div>
              </div>
              <div className="text-forest text-xs font-bold uppercase tracking-widest mb-3">{post.date}</div>
              <h3 className="text-2xl font-playfair text-charcoal mb-4 group-hover:text-oak transition-colors">
                {post.title}
              </h3>
              <p className="text-charcoal/60 text-sm leading-relaxed mb-6">
                {post.excerpt}
              </p>
              <div className="flex items-center text-charcoal font-bold uppercase tracking-widest text-xs group-hover:translate-x-2 transition-transform">
                Read More <ArrowUpRight className="ml-1" size={14} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
