import { notFound } from 'next/navigation';
import { getBlogBySlug, getRelatedBlogs, blogs } from '@/lib/blog-data';
import { LazyImage } from '@/components/ui/lazy-image';
import Link from 'next/link';
import Footer4Col from '@/components/ui/footer-column';

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  
  if (!blog) {
    return {
      title: 'Blog Not Found - Avantage AI',
    };
  }

  return {
    title: `${blog.title} - Avantage AI Blog`,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      images: [blog.image],
    },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const relatedBlogs = getRelatedBlogs(blog.slug, 3);

  return (
    <>
      {/* Blog Article */}
      <article className="min-h-screen bg-black text-white pt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Category Badge */}
            <div className="mb-4">
              <span className="inline-block px-4 py-1 bg-purple-600/30 border border-purple-500/50 rounded-full text-purple-300 text-sm font-semibold">
                {blog.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {blog.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 text-white/60 text-sm mb-8">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>{blog.author}</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-white/30" />
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{blog.createdAt}</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-white/30" />
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{blog.readTime}</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative w-full h-[300px] md:h-[400px] mb-12 rounded-2xl overflow-hidden">
              <LazyImage
                src={blog.image}
                fallback="https://placehold.co/1200x600?text=Blog+Image"
                inView={true}
                alt={blog.title}
                ratio={16 / 9}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Blog Content (Markdown-style) */}
            <div className="prose prose-invert prose-lg max-w-none">
              <div 
                className="blog-content text-white/80 leading-relaxed space-y-6"
                dangerouslySetInnerHTML={{ 
                  __html: blog.content
                    .replace(/^# (.+)$/gm, '<h1 class="text-4xl font-bold text-white mt-12 mb-6">$1</h1>')
                    .replace(/^## (.+)$/gm, '<h2 class="text-3xl font-bold text-white mt-10 mb-4">$1</h2>')
                    .replace(/^### (.+)$/gm, '<h3 class="text-2xl font-bold text-white mt-8 mb-3">$1</h3>')
                    .replace(/^\*\*(.+?)\*\*/gm, '<strong class="text-white font-semibold">$1</strong>')
                    .replace(/^\* (.+)$/gm, '<li class="ml-4">$1</li>')
                    .replace(/^- (.+)$/gm, '<li class="ml-4 mb-2">$1</li>')
                    .split('\n\n')
                    .map(para => {
                      if (para.startsWith('<h') || para.startsWith('<li') || para.startsWith('<strong')) {
                        return para;
                      }
                      return para.trim() ? `<p class="text-lg text-white/80 leading-relaxed mb-6">${para}</p>` : '';
                    })
                    .join('\n')
                }}
              />
            </div>

            {/* CTA Section */}
            <div className="mt-16 mb-12 p-8 md:p-12 bg-gradient-to-br from-purple-950/30 to-blue-950/30 border border-white/10 rounded-2xl backdrop-blur-sm">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-lg text-white/70 mb-6">
                Let{'\''}s discuss how AI and automation can give your business the unfair advantage it deserves.
              </p>
              <Link href="/contact">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 hover:scale-105">
                  Book a Discovery Call →
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Related Blogs Carousel */}
        {relatedBlogs.length > 0 && (
          <div className="bg-black/50 py-16 mt-12">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                  Continue Reading
                </h2>
                
                <div className="grid md:grid-cols-3 gap-8">
                  {relatedBlogs.map((relatedBlog) => (
                    <Link 
                      key={relatedBlog.slug} 
                      href={`/blogs/${relatedBlog.slug}`}
                      className="group"
                    >
                      <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 hover:bg-white/10 transition-all duration-300">
                        <div className="relative h-48 overflow-hidden">
                          <LazyImage
                            src={relatedBlog.image}
                            fallback="https://placehold.co/640x360?text=Blog+Image"
                            inView={true}
                            alt={relatedBlog.title}
                            ratio={16 / 9}
                            className="transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                        <div className="p-6">
                          <div className="mb-3">
                            <span className="inline-block px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-purple-300 text-xs font-semibold">
                              {relatedBlog.category}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-purple-300 transition-colors">
                            {relatedBlog.title}
                          </h3>
                          <p className="text-white/60 text-sm line-clamp-2 mb-4">
                            {relatedBlog.description}
                          </p>
                          <div className="flex items-center gap-2 text-white/50 text-xs">
                            <span>{relatedBlog.readTime}</span>
                            <div className="w-1 h-1 rounded-full bg-white/30" />
                            <span>{relatedBlog.createdAt}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Back to All Blogs */}
                <div className="text-center mt-12">
                  <Link href="/blogs">
                    <button className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 hover:border-white/30 transition-all duration-300">
                      ← View All Articles
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </article>

      {/* Footer */}
      <Footer4Col />
    </>
  );
}

