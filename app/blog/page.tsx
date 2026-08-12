import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BlogCover } from "@/components/BlogCover";
import { BLOG_POSTS } from "@/lib/data";

export const metadata = {
  title: "Blog — PWlabs",
  description: "Artigos curtos pra entender o que cada serviço faz e quando vale a pena.",
};

export default function BlogListPage() {
  return (
    <>
      <Header />
      <main>
        <section className="blog-list">
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

            <div className="blog-list-grid">
              {BLOG_POSTS.map((post) => (
                <a key={post.slug} href={`/blog/${post.slug}`} className="blog-list-card">
                  <div className="blog-visual">
                    <BlogCover slug={post.slug} className="blog-cover" />
                  </div>
                  <div className="blog-body">
                    <div className="blog-meta">
                      <span className="blog-tag">{post.tag}</span>
                      <span className="blog-date">{post.date}</span>
                    </div>
                    <h3 className="blog-title">{post.title}</h3>
                    <p style={{ color: "var(--text)", opacity: 0.75, fontSize: 14, lineHeight: 1.55, marginBottom: 16 }}>
                      {post.excerpt}
                    </p>
                    <span className="blog-link">
                      Ler artigo
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M4 12h15" />
                        <path d="M13 6l6 6-6 6" />
                      </svg>
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}