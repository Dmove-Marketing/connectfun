import { defineConfig } from 'astro/config';

export default defineConfig({
  // Domínio de produção — usado para canonical, og:url e og:image absolutos
  site: 'https://eventos.connectfun.com.br',

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
