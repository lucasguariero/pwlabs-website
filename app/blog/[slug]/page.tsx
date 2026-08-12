import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BlogCover } from "@/components/BlogCover";
import { BLOG_POSTS, WHATSAPP_URL } from "@/lib/data";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Artigo não encontrado — PWlabs" };
  return { title: `${post.title} — PWlabs`, description: post.excerpt };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <Header />
      <main>
        <section className="article-page">
          <div className="container-page article-inner">
            <div className="article-header">
              <span className="article-tag">{post.tag}</span>
              <h1 className="article-title">{post.title}</h1>
              <div className="article-meta">{post.date}</div>
            </div>

            <BlogCover slug={post.slug} className="article-cover" />

            <div className="article-body">
              {post.body.map((section, i) => (
                <section key={i} className="article-section">
                  {section.title && <h2 className="article-section-title">{section.title}</h2>}
                  <p>{section.text}</p>
                  {section.highlight && (
                    <p className="article-highlight">{section.highlight}</p>
                  )}
                </section>
              ))}
            </div>

            <div className="article-cta">
              <h3 className="article-cta-title">Faz sentido pra você?</h3>
              <p className="article-cta-text">
                Se você tá pensando em aplicar isso no seu projeto, manda mensagem que a gente troca uma ideia sem compromisso.
              </p>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <a href={WHATSAPP_URL} className="btn-primary btn-on-magenta" target="_blank" rel="noreferrer">
                  Chamar no WhatsApp
                  <svg
                    className="arrow"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M4 12h15" />
                    <path d="M13 6l6 6-6 6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}