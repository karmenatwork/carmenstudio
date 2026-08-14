import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        // Block known AI scrapers and training dataset bots
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'ClaudeBot',
          'anthropic-ai',
          'Google-Extended',
          'CCBot',
          'Bytespider',
          'ImagesiftBot',
          'Diffbot',
          'FacebookBot',
          'PerplexityBot',
          'Omgilibot',
        ],
        disallow: ['/'],
      },
    ],
  };
}
