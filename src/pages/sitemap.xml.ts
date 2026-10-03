// Sitemap gerado no build a partir das páginas em src/pages (sem dependência extra).
import type { APIRoute } from 'astro';
import { lps } from '../data/lps';

const pages = import.meta.glob('./**/*.astro', { eager: true });

export const GET: APIRoute = ({ site }) => {
  const urls = Object.keys(pages)
    .map((file) => file.replace(/^\.\//, '').replace(/\.astro$/, '').replace(/(^|\/)index$/, ''))
    .filter((path) => !path.split('/').some((seg) => seg.startsWith('_') || seg.startsWith('[') || seg === '404'))
    .map((path) => new URL(path ? `/${path}/` : '/', site).href)
    .concat(lps.flatMap((lp) => lp.variantes.filter((v) => !v.noIndex).map((v) => new URL(v.path, site).href)))
    .sort();

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((loc) => `  <url><loc>${loc}</loc></url>`).join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
