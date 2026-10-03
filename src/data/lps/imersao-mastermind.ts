import type { LpConteudo } from './types';

// C2.5 Imersão e Mastermind (ficha 3.6). One House em destaque (intimista), GT House para turmas maiores.
export const imersaoMastermind: LpConteudo = {
  id: 'imersao-mastermind',
  campanha: 'C2 Eventos Corporativos',
  variantes: [{
    path: '/imersao-mastermind/',
    grupo: 'C2.5 Imersão e Mastermind',
    h1: 'Espaço para imersões e masterminds em São Paulo',
    title: 'Espaço para Imersão e Mastermind em SP | Connect Fun',
    description: 'Casas exclusivas para imersões e masterminds em SP: plenária com LED, ambientes de networking, jardim e gastronomia. De 30 a 220 pessoas. Peça orçamento.',
  }],
  subtitulo: 'Uma casa inteira para o seu evento: plenária para o conteúdo, ambientes para networking e refeições no mesmo lugar.',
  heroImg: 'casas/gt-house/jardim-aereo.jpg',
  heroAlt: 'Jardim e ambientes de networking da GT House',
  tipoEvento: 'Imersão / mastermind',
  opcoesTipo: ['Imersão / mastermind', 'Treinamento / workshop', 'Outro evento corporativo'],
  formato: {
    eyebrow: 'Imersão',
    titulo: 'Experiência premium para quem participa.',
    texto: 'Para empresários e produtores de eventos de autoridade: a casa inteira para o seu evento, com ambientes diferentes para conteúdo, networking e refeição.',
    itens: [
      { titulo: 'Casa inteira para o seu evento', texto: 'Ambientes reservados para a sua imersão, do conteúdo ao intervalo.' },
      { titulo: 'Conteúdo na plenária', texto: 'Plenária com painel de LED e som para as sessões.' },
      { titulo: 'Networking', texto: 'Jardim, lounges e mezanino para as conversas entre os participantes.' },
      { titulo: 'Refeições no mesmo lugar', texto: 'Gastronomia e bar de drinks sem sair da casa.' },
    ],
    fotos: [
      { src: 'casas/gt-house/lounge-jardim.jpg', alt: 'Lounge no jardim da GT House para networking' },
      { src: 'casas/gt-house/sala-apoio.jpg', alt: 'Ambiente reservado da GT House' },
    ],
  },
  casasIntro: 'GT House e One House: duas casas exclusivas em São Paulo. A One House, intimista, é ideal para grupos menores; a GT House recebe imersões maiores, com plenária de até 220 pessoas.',
  casaDestaqueTexto: 'One House',
  casaPrimeiro: 'one',
  faq: [
    { q: 'A casa fica exclusiva para o meu evento?', a: 'Sim, a casa inteira é preparada para o seu evento, com ambientes para conteúdo, networking e refeições.' },
    { q: 'Tem ambientes separados para networking?', a: 'Sim. A One House tem térreo, mezanino e cave; a GT House tem jardim e duas plenárias.' },
    { q: 'Incluem alimentação?', a: 'Sim. Gastronomia e bar de drinks fazem parte da solução completa, sem sair da casa.' },
    { q: 'Qual o tamanho mínimo?', a: 'Atendemos eventos a partir de cerca de 30 pessoas, até 220 na GT House.' },
    { q: 'Posso visitar antes?', a: 'Pode. Agende uma visita técnica para conhecer a casa com a sua equipe.' },
  ],
};
