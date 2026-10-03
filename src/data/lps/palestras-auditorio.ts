import type { LpConteudo } from './types';

// C2.3 Palestra e Auditório (ficha 3.4). Camarim e transmissão (⚠️) ficam de fora até confirmar.
export const palestrasAuditorio: LpConteudo = {
  id: 'palestras-auditorio',
  campanha: 'C2 Eventos Corporativos',
  variantes: [{
    path: '/palestras-auditorio/',
    grupo: 'C2.3 Palestra e Auditório',
    h1: 'Espaço para palestras em São Paulo, com auditório e LED',
    title: 'Espaço para Palestras e Auditório em SP | Connect Fun',
    description: 'Locação de auditório para palestras em SP: plenária de até 220 pessoas, painel de LED de 25 m², som e iluminação. Casas exclusivas. Solicite orçamento.',
  }],
  subtitulo: 'Plenárias de até 220 pessoas com painel de LED de 25 m², som e iluminação profissional inclusos.',
  heroImg: 'casas/gt-house/plenaria-palco.jpg',
  heroAlt: 'Plenária da GT House com palco e iluminação para palestras',
  tipoEvento: 'Palestra',
  opcoesTipo: ['Palestra', 'Treinamento / workshop', 'Outro evento corporativo'],
  formato: {
    eyebrow: 'Palestras',
    titulo: 'Palco, LED e som para o palestrante e o público.',
    texto: 'A Plenária Elevado da GT House recebe até 220 pessoas com painel de LED de 25 m², som e iluminação de palco inclusos.',
    itens: [
      { titulo: 'Painel de LED de 25 m²', texto: 'Apresentações e vídeos em destaque para todo o auditório.' },
      { titulo: 'Som e iluminação inclusos', texto: 'Estrutura de A&V pronta para o palestrante, sem fornecedor extra.' },
      { titulo: 'Até 220 pessoas', texto: 'Plenária Elevado para 220 pessoas e Plenária Térrea para 170.' },
      { titulo: 'Recepção no jardim', texto: 'Jardim para até 120 pessoas para a chegada do público e os intervalos.' },
    ],
    fotos: [
      { src: 'casas/gt-house/plenaria-terrea.jpg', alt: 'Plenária Térrea da GT House com cadeiras montadas' },
      { src: 'casas/gt-house/plenaria-led-lounge.jpg', alt: 'Painel de LED da GT House' },
    ],
  },
  casasIntro: 'GT House e One House: duas casas exclusivas em São Paulo. Para palestras, a GT House tem a Plenária Elevado com 220 lugares e painel de LED de 25 m².',
  casaDestaqueTexto: 'GT House',
  faq: [
    { q: 'Qual a capacidade do auditório?', a: 'A Plenária Elevado da GT House recebe até 220 pessoas e a Plenária Térrea, até 170.' },
    { q: 'O LED e o som estão inclusos?', a: 'Sim. Painel de LED, som e iluminação fazem parte do A&V incluso.' },
    { q: 'Tem espaço para recepção do público?', a: 'Sim. O jardim da GT House recebe até 120 pessoas e pode ser usado na chegada e nos intervalos.' },
    { q: 'Vocês servem coffee ou coquetel?', a: 'Sim. Gastronomia e bar de drinks fazem parte da solução completa.' },
    { q: 'Posso visitar?', a: 'Pode. Agende uma visita técnica para conhecer a plenária antes de decidir.' },
  ],
};
