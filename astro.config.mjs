// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { unified } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const macros = {
  '\\R': '\\mathbb{R}',
  '\\C': '\\mathbb{C}',
  '\\Q': '\\mathbb{Q}',
  '\\F': '\\mathbb{F}',
  '\\Z': '\\mathbb{Z}',
  '\\Span': '\\operatorname{Span}',
  '\\im': '\\operatorname{im}',
};

export default defineConfig({
  // Sätts av GitHub Actions. Lokalt ligger sidan i roten.
  site: process.env.SITE_URL || undefined,
  base: process.env.BASE_PATH || undefined,
  markdown: {
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [[rehypeKatex, { macros, strict: false }]],
    }),
  },
  integrations: [
    starlight({
      title: 'SF1681 Linjär algebra, fk',
      description: 'Privat studiesida för SF1681 Linjär algebra, fortsättningskurs.',
      defaultLocale: 'root',
      locales: { root: { label: 'Svenska', lang: 'sv' } },
      customCss: ['katex/dist/katex.min.css', './src/styles/custom.css'],
      head: [{ tag: 'meta', attrs: { name: 'robots', content: 'noindex, nofollow' } }],
      sidebar: [
        { label: 'Start', link: '/' },
        { label: 'Tentakarta', link: '/tentakarta/' },
        { label: 'Kända fel i källorna', link: '/kanda-fel/' },
        { label: 'Seminarier', items: [{ autogenerate: { directory: 'seminarier' } }] },
        { label: 'Moduler', items: [{ autogenerate: { directory: 'moduler' } }] },
      ],
    }),
  ],
});
