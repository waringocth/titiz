import { MetadataRoute } from 'next'
import { hizmetler } from '@/data/hizmetler'
import { bolgeler } from '@/data/bolgeler'
import { blogPosts } from '@/data/blog-posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://titizcilingir.com'
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/hizmetler`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/hizmet-bolgeleri`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/hakkimizda`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/iletisim`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
  ]

  const hizmetPages: MetadataRoute.Sitemap = hizmetler.map((h) => ({
    url: `${baseUrl}/hizmetler/${h.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const ilcePages: MetadataRoute.Sitemap = bolgeler.map((b) => ({
    url: `${baseUrl}/hizmet-bolgeleri/${b.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const mahallePages: MetadataRoute.Sitemap = bolgeler.flatMap((b) =>
    b.mahalleler.map((m) => ({
      url: `${baseUrl}/hizmet-bolgeleri/${b.slug}/${m.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  )

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticPages, ...hizmetPages, ...ilcePages, ...mahallePages, ...blogPages]
}
