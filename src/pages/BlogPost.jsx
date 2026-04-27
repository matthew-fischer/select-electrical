import { Link, useParams, Navigate } from 'react-router-dom'
import { ArrowLeft, Calendar, User, ArrowRight } from 'lucide-react'
import { blogPosts } from '../data/blogPosts'

function renderSection(section, index) {
  switch (section.type) {
    case 'h2':
      return (
        <h2 key={index} className="text-2xl font-bold text-dark mt-10 mb-4">
          {section.content}
        </h2>
      )
    case 'p':
      return (
        <p key={index} className="text-gray-600 leading-relaxed mb-4">
          {section.content}
        </p>
      )
    case 'ul':
      return (
        <ul key={index} className="space-y-2 mb-6 ml-2">
          {section.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-600">
              <span className="mt-2 w-1.5 h-1.5 bg-gold rounded-full shrink-0" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      )
    default:
      return null
  }
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) return <Navigate to="/blog" replace />

  const currentIndex = blogPosts.findIndex((p) => p.slug === slug)
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null

  return (
    <>
      {/* Page hero */}
      <section className="bg-dark pt-36 pb-16 relative overflow-hidden">
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
        <div className="relative max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-2 text-gray-500 text-sm mb-6 flex-wrap">
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-gold transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-gray-300 truncate max-w-xs">{post.title}</span>
          </div>
          <div className="w-16 h-1 bg-gold mb-6" />
          <h1 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">{post.title}</h1>
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} /> {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <User size={14} /> {post.author}
            </span>
          </div>
        </div>
      </section>

      {/* Article content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">

            {/* Article body */}
            <article className="lg:col-span-3">
              <p className="text-gray-600 text-lg leading-relaxed mb-6 font-medium border-l-4 border-gold pl-5">
                {post.excerpt}
              </p>
              {post.sections.map((section, i) => renderSection(section, i))}

              {/* Back link */}
              <div className="mt-12 pt-8 border-t border-gray-100">
                <Link to="/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-gold transition-colors text-sm font-medium">
                  <ArrowLeft size={16} /> Back to all articles
                </Link>
              </div>

              {/* Prev / Next */}
              {(prevPost || nextPost) && (
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {prevPost && (
                    <Link
                      to={`/blog/${prevPost.slug}`}
                      className="group border border-gray-100 hover:border-gold/40 p-5 transition-all"
                    >
                      <div className="text-xs text-gray-400 mb-2 flex items-center gap-1">
                        <ArrowLeft size={12} /> Previous
                      </div>
                      <div className="font-semibold text-dark group-hover:text-gold transition-colors text-sm line-clamp-2">
                        {prevPost.title}
                      </div>
                    </Link>
                  )}
                  {nextPost && (
                    <Link
                      to={`/blog/${nextPost.slug}`}
                      className="group border border-gray-100 hover:border-gold/40 p-5 transition-all sm:ml-auto text-right"
                    >
                      <div className="text-xs text-gray-400 mb-2 flex items-center gap-1 justify-end">
                        Next <ArrowRight size={12} />
                      </div>
                      <div className="font-semibold text-dark group-hover:text-gold transition-colors text-sm line-clamp-2">
                        {nextPost.title}
                      </div>
                    </Link>
                  )}
                </div>
              )}
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="bg-dark p-5">
                <h3 className="text-white font-bold mb-2 text-sm">Have a Question?</h3>
                <p className="text-gray-400 text-xs mb-4 leading-relaxed">Our engineering team is ready to help with your application.</p>
                <Link to="/contact" className="btn-primary text-sm w-full flex items-center justify-center gap-2">
                  Contact Us <ArrowRight size={14} />
                </Link>
              </div>

              <div className="border border-gray-100 p-5">
                <h3 className="font-bold text-dark text-sm mb-4">More Articles</h3>
                <ul className="space-y-3">
                  {blogPosts
                    .filter((p) => p.slug !== slug)
                    .slice(0, 5)
                    .map((p) => (
                      <li key={p.slug}>
                        <Link
                          to={`/blog/${p.slug}`}
                          className="text-xs text-gray-500 hover:text-gold transition-colors leading-snug block"
                        >
                          {p.title}
                        </Link>
                      </li>
                    ))}
                </ul>
                <Link to="/blog" className="mt-4 flex items-center gap-1 text-xs text-gold font-medium hover:opacity-80 transition-opacity">
                  All articles <ArrowRight size={12} />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
