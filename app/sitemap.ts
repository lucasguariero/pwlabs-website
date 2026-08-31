import { MetadataRoute } from 'next';
import { SERVICES, BLOG_POSTS } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://pwlabs.vercel.app';

  // Rotas estáticas principais
  const staticRoutes = [
    '',
    '/servicos',
    '/blog',
    '/obrigado',
    '/politica-de-privacidade',
    '/lp/trafego-pago',
    '/lp/criacao-site',
    '/lp/automacao-whatsapp',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Rotas dinâmicas de serviços
  const serviceRoutes = SERVICES.map((service) => ({
    url: `${baseUrl}/servicos/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Rotas dinâmicas do blog
  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}