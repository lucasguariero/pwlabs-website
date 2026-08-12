import { BLOG_POSTS } from "@/lib/data";
import { BlogCover } from "./BlogCover";

export function Blog() {
  return (
    <section id="blog" className="section section-alt">
      <div className="container-page">
        <div className="section-header-center">
          <span className="eyebrow">Blog</span>
          <h2 className="section-title">
            Entendendo cada <strong>serviço.</strong>
          </h2>
          <p className="section-intro">
            Artigos curtos pra você entender o que cada serviço faz, quando faz sentido, e quando não faz.
          </p>
        </div>

        <div className="blog-grid reveal">
          {BLOG_POSTS.slice(0, 3).map((post, i) => (
            <article key={i} className="blog-card">
              <div className="blog-visual">
                <BlogCover slug={post.slug} className="blog-cover" />
              </div>
              <div className="blog-body">
                <div className="blog-meta">
                  <span className="blog-tag">{post.tag}</span>
                  <span className="blog-date">{post.date}</span>
                </div>
                <h3 className="blog-title">{post.title}</h3>
                <a href={`/blog/${post.slug}`} className="blog-link">
                  Ler artigo
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 12h15" />
                    <path d="M13 6l6 6-6 6" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="blog-cta-wrap reveal">
          <a href="/blog" className="btn-primary">
            Ir para Blog
            <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M4 12h15" />
              <path d="M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
