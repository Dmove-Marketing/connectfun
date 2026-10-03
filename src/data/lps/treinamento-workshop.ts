import type { LpConteudo } from './types';

// C2.2 Treinamento e Workshop (ficha 3.3). Layouts de sala e internet (⚠️) ficam de fora até confirmar.
export const treinamentoWorkshop: LpConteudo = {
  id: 'treinamento-workshop',
  campanha: 'C2 Eventos Corporativos',
  variantes: [{
    path: '/treinamento-workshop/',
    grupo: 'C2.2 Treinamento e Workshop',
    h1: 'Espaço para treinamento e workshop em São Paulo',
    title: 'Espaço para Treinamento e Workshop em SP | Connect Fun',
    description: 'Espaço para treinamentos e workshops em SP com plenária, painel de LED, som, coffee break e almoço inclusos. De 30 a 220 pessoas. Peça seu orçamento.',
  }],
  subtitulo: 'Estrutura pronta para sua equipe: plenária com telão de LED, som, coffee break e almoço no mesmo lugar.',
  heroImg: 'casas/gt-house/plenaria-terrea.jpg',
  heroAlt: 'Plenária Térrea da GT House preparada para treinamento',
  tipoEvento: 'Treinamento / workshop',
  opcoesTipo: ['Treinamento / workshop', 'Palestra', 'Outro evento corporativo'],
  formato: {
    eyebrow: 'Treinamento',
    titulo: 'Um dia de treinamento sem se preocupar com estrutura.',
    texto: 'Sua equipe chega e encontra tudo pronto: plenária com painel de LED, som, coffee break e almoço no local, de 30 a 220 pessoas.',
    itens: [
      { titulo: 'Chegada e coffee break', texto: 'Recepção da equipe com coffee break antes do início do conteúdo.' },
      { titulo: 'Conteúdo na plenária', texto: 'Plenária com telão de LED e som para apresentações e vídeos.' },
      { titulo: 'Almoço no local', texto: 'A turma almoça na própria casa, sem perder tempo com deslocamento.' },
      { titulo: 'Turmas divididas', texto: 'Na GT House, as duas plenárias permitem dividir a equipe em turmas.' },
    ],
    fotos: [
      { src: 'casas/gt-house/plenaria-led-lounge.jpg', alt: 'Ambiente da GT House com painel de LED para apresentações' },
      { src: 'casas/gt-house/jardim-aereo.jpg', alt: 'Jardim da GT House para coffee break e intervalos' },
    ],
  },
  casasIntro: 'GT House e One House: duas casas exclusivas em São Paulo. A GT House tem duas plenárias para turmas maiores ou divididas; a One House recebe turmas menores.',
  casaDestaqueTexto: 'GT House',
  faq: [
    { q: 'Como a sala é montada?', a: 'A montagem da plenária é definida com nosso atendimento consultivo, de acordo com o formato do treinamento e o número de participantes.' },
    { q: 'Tem coffee break e almoço?', a: 'Sim. Coffee break e almoço são servidos no local; a gastronomia faz parte da solução completa.' },
    { q: 'Tem projeção?', a: 'Sim. As plenárias da GT House têm painel de LED (25 m² na Plenária Elevado e 10 m² na Térrea), com som incluso.' },
    { q: 'Dá para dividir em salas menores?', a: 'Sim. A GT House tem duas plenárias na mesma casa, o que permite dividir a equipe em turmas.' },
    { q: 'Posso visitar antes?', a: 'Pode. Agende uma visita técnica para conhecer a casa antes de decidir.' },
  ],
};
