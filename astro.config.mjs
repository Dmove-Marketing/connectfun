import { defineConfig } from 'astro/config';

export default defineConfig({
  // Domínio de produção — usado para canonical, og:url e og:image absolutos
  site: 'https://eventos.connectfun.com.br',

  // Slugs antigos da C1 (antes de 03/10/2026) → slugs novos. No build estático o Astro gera
  // uma página de redirecionamento imediato com canonical no destino. O 301 de verdade fica
  // no nginx (docs/nginx-eventos.connectfun.conf).
  redirects: {
    '/confraternizacao-empresa/casas-exclusivas': '/confraternizacao-empresa/',
    '/confraternizacao-empresa/festa-de-fim-de-ano': '/festa-fim-de-ano/',
    '/confraternizacao-empresa/happy-hour-corporativo': '/happy-hour-corporativo/',
  },

  // Output estático (padrão) — gera HTML puro
  output: 'static',

  // View Transitions habilitadas
  prefetch: true,

  // Build otimizado
  build: {
    // 'always': CSS inline no HTML, elimina requisições bloqueantes (LPs são visita de página única)
    inlineStylesheets: 'always',
  },

  // Dev server
  server: {
    port: 4321,
  },
});
