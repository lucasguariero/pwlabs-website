import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/notes', '/api/'],
    },
    sitemap: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://pwlabs.vercel.app'}/sitemap.xml`,
  };
}