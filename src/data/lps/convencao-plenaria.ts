import type { LpConteudo } from './types';

// C2.4 Convenção e Plenária (ficha 3.5). O esquema da GT House (duas plenárias) é obrigatório aqui.
export const convencaoPlenaria: LpConteudo = {
  base: '/convencao-plenaria/',
  campanha: 'C2 Eventos Corporativos',
  variantes: [{
    slug: '',
    grupo: 'C2.4 Convenção e Plenária',
    h1: 'Espaço para convenções e plenárias em São Paulo',
    title: 'Espaço para Convenção e Plenária em SP | Connect Fun',
    description: 'Espaço para convenções de vendas e plenárias em SP: duas plenárias na mesma casa, LED de 25 m², jardim e gastronomia. Até 220 pessoas. Peça orçamento.',
  }],
  subtitulo: 'Duas plenárias na mesma casa (até 220 e 170 pessoas), painel de LED, jardim e gastronomia.',
  heroImg: 'casas/gt-house/plenaria-palco.jpg',
  heroAlt: 'Plenária da GT House com palco para convenções',
  tipoEvento: 'Convenção',
  opcoesTipo: ['Convenção', 'Palestra', 'Outro evento corporativo'],
  formato: {
    eyebrow: 'Convenção',
    titulo: 'Um dia de convenção inteiro na mesma casa.',
    texto: 'Sessão principal em uma plenária, sala paralela ou almoço na outra, sem desmontar nada. E o coquetel de encerramento no jardim.',
    itens: [
      { titulo: 'Abertura e painéis', texto: 'Plenária Elevado para até 220 pessoas, com painel de LED de 25 m².' },
      { titulo: 'Almoço sem desmontar', texto: 'A Plenária Térrea recebe o almoço ou uma sala paralela enquanto a principal segue montada.' },
      { titulo: 'Premiação', texto: 'Palco, LED, som e iluminação para o momento de reconhecimento da equipe.' },
      { titulo: 'Coquetel no jardim', texto: 'Encerramento no jardim para até 120 pessoas, com bar de drinks.' },
    ],
    fotos: [
      { src: 'casas/gt-house/plenaria-terrea.jpg', alt: 'Plenária Térrea da GT House para almoço ou sala paralela' },
      { src: 'casas/gt-house/jardim-aereo.jpg', alt: 'Jardim da GT House para coquetel de encerramento' },
    ],
  },
  casasIntro: 'GT House e One House: duas casas exclusivas em São Paulo. Para convenções, a GT House tem duas plenárias na mesma casa, uma em cima da outra.',
  casaDestaqueTexto: 'GT House',
  faq: [
    { q: 'Dá para usar as duas plenárias ao mesmo tempo?', a: 'Sim. A GT House tem duas plenárias na mesma casa: dá para manter a sessão principal em uma e usar a outra como sala paralela ou para o almoço.' },
    { q: 'Comporta quantas pessoas?', a: 'Até 220 pessoas na Plenária Elevado e até 170 na Plenária Térrea, além do jardim para até 120.' },
    { q: 'Tem estrutura para premiação e palco?', a: 'Sim. Painel de LED de 25 m², som e iluminação estão inclusos no A&V.' },
    { q: 'Inclui almoço e coquetel?', a: 'Sim. Gastronomia e bar de drinks fazem parte da solução completa, do almoço ao coquetel de encerramento.' },
    { q: 'Posso visitar a casa?', a: 'Pode. Agende uma visita técnica para ver as duas plenárias e o jardim pessoalmente.' },
  ],
};
