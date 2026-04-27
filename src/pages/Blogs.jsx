import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, User } from 'lucide-react'
import { blogPosts } from '../data/blogPosts'

export default function Blogs() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-dark pt-36 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#f6cc41" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-gray-500 text-sm mb-6">
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-300">Blog</span>
          </div>
          <div className="w-16 h-1 bg-gold mb-6" />
          <h1 className="text-4xl md:text-5xl font-black text-white mb-5">Industry Insights</h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Technical articles and insights from the Select Electrical engineering team — covering VFDs, motor control, power quality, and industrial electrical systems.
          </p>
        </div>
      </section>

      {/* Blog grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group border border-gray-100 hover:border-gold/40 hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                {/* Card header */}
                <div className="bg-dark p-6 relative overflow-hidden">
                  <div className="absolute bottom-0 right-0 w-20 h-20 bg-gold/5 rounded-full translate-x-1/2 translate-y-1/2" />
                  <div className="w-8 h-0.5 bg-gold mb-4" />
                  <h2 className="text-white font-bold text-lg leading-snug group-hover:text-gold transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                </div>

                {/* Card body */}
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 text-xs text-gray-400">
                        <Calendar size={12} />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-gray-400">
                        <User size={12} />
                        {post.author}
                      </div>
                    </div>
                    <span className="flex items-center gap-1 text-gold text-sm font-medium group-hover:gap-2 transition-all">
                      Read <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-dark mb-4">Have a Project in Mind?</h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">
            Our engineering team is ready to help with your electrical and automation challenges.
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
