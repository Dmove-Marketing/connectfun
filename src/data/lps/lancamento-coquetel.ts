import type { LpConteudo } from './types';

// C2.6 Lançamento e Coquetel Corporativo (ficha 3.7). Cenografia (⚠️) fica de fora até confirmar.
export const lancamentoCoquetel: LpConteudo = {
  id: 'lancamento-coquetel',
  campanha: 'C2 Eventos Corporativos',
  variantes: [{
    path: '/lancamento-coquetel/',
    grupo: 'C2.6 Lançamento e Coquetel Corporativo',
    h1: 'Espaço para lançamento de produto e coquetel corporativo em SP',
    title: 'Espaço para Lançamento de Produto em SP | Connect Fun',
    description: 'Lançamentos de produto e coquetéis corporativos em casas exclusivas em SP: LED de 25 m², bar de drinks, jardim e A&V. Até 220 pessoas. Peça orçamento.',
  }],
  subtitulo: 'Painel de LED de 25 m², bar de drinks, jardim e pé-direito de 8 m para lançar sua marca com impacto.',
  heroImg: 'casas/gt-house/plenaria-led-lounge.jpg',
  heroAlt: 'Ambiente da GT House com painel de LED para lançamento de produto',
  tipoEvento: 'Lançamento / coquetel',
  opcoesTipo: ['Lançamento / coquetel', 'Outro evento corporativo'],
  formato: {
    eyebrow: 'Lançamento',
    titulo: 'Lance sua marca com impacto.',
    texto: 'Apresente o produto no painel de LED de 25 m², receba convidados e imprensa no jardim e feche com coquetel e bar de drinks.',
    itens: [
      { titulo: 'Apresentação no LED de 25 m²', texto: 'O painel de LED fica disponível para a apresentação do produto.' },
      { titulo: 'Recepção no jardim', texto: 'Chegada de convidados e imprensa no jardim, para até 120 pessoas.' },
      { titulo: 'Coquetel e bar de drinks', texto: 'Gastronomia e bar de drinks inclusos na proposta.' },
      { titulo: 'Lançamentos intimistas', texto: 'A One House recebe até 150 convidados em formato coquetel.' },
    ],
    fotos: [
      { src: 'casas/gt-house/plenaria-palco.jpg', alt: 'Plenária da GT House com iluminação para lançamento' },
      { src: 'casas/gt-house/lounge-jardim.jpg', alt: 'Jardim da GT House para recepção e coquetel' },
    ],
  },
  casasIntro: 'GT House e One House: duas casas exclusivas em São Paulo. A GT House tem LED de 25 m² e pé-direito de 8 m; a One House recebe lançamentos intimistas.',
  casaDestaqueTexto: 'GT House',
  faq: [
    { q: 'Dá para personalizar com a nossa marca?', a: 'Sim. O painel de LED de 25 m² fica disponível para a apresentação e para a identidade visual da sua marca.' },
    { q: 'O LED fica disponível para a apresentação?', a: 'Sim. O painel de LED faz parte do A&V incluso.' },
    { q: 'Tem bar e coquetel inclusos?', a: 'Sim. Gastronomia e bar de drinks fazem parte da solução completa.' },
    { q: 'Comporta quantos convidados?', a: 'Até 220 pessoas na GT House e até 150 em formato coquetel na One House.' },
    { q: 'Posso visitar?', a: 'Pode. Agende uma visita técnica para conhecer a casa antes do lançamento.' },
  ],
};
