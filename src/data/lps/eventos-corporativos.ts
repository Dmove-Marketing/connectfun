import type { LpConteudo } from './types';

// C2.1 Evento Corporativo (ficha 3.2) — página guarda-chuva da C2.
export const eventosCorporativos: LpConteudo = {
  base: '/eventos-corporativos/',
  campanha: 'C2 Eventos Corporativos',
  variantes: [{
    slug: '',
    grupo: 'C2.1 Evento Corporativo',
    h1: 'Espaço para eventos corporativos em São Paulo',
    title: 'Espaço para Eventos Corporativos em São Paulo | Connect Fun',
    description: 'Casas exclusivas para eventos corporativos em SP: plenárias de até 220 pessoas, painel de LED de 25 m², A&V e gastronomia. Solicite seu orçamento.',
  }],
  subtitulo: 'Casas exclusivas em Pinheiros e Higienópolis, com plenárias de até 220 pessoas, A&V e gastronomia inclusos.',
  heroImg: 'casas/gt-house/fachada-deck.jpg',
  heroAlt: 'Fachada e deck da GT House, casa para eventos corporativos em São Paulo',
  tipoEvento: 'Evento corporativo',
  opcoesTipo: ['Evento corporativo', 'Treinamento / workshop', 'Palestra', 'Convenção', 'Imersão / mastermind', 'Lançamento / coquetel', 'Confraternização / fim de ano'],
  formato: {
    eyebrow: 'Eventos corporativos',
    titulo: 'Estrutura pronta para o evento da sua empresa.',
    texto: 'Do treinamento da equipe à convenção de vendas: plenárias com painel de LED, jardim, gastronomia e A&V em casas exclusivas, com um só fornecedor.',
    itens: [
      { titulo: 'Plenárias de até 220 pessoas', texto: 'Plenária Elevado com painel de LED de 25 m² e Plenária Térrea com LED de 10 m².' },
      { titulo: 'Duas plenárias na mesma casa', texto: 'Sessão principal em uma, sala paralela ou refeição na outra, sem trocar de endereço.' },
      { titulo: 'Jardim e pé-direito de 8 m', texto: 'Jardim para até 120 pessoas para recepção, coffee e networking.' },
      { titulo: 'GT House e One House', texto: 'Indicamos a casa ideal para o formato e o porte do seu evento.' },
    ],
    fotos: [
      { src: 'casas/gt-house/plenaria-palco.jpg', alt: 'Plenária da GT House montada com palco e iluminação' },
      { src: 'casas/gt-house/plenaria-terrea.jpg', alt: 'Plenária Térrea da GT House com cadeiras e lounge' },
    ],
  },
  casasIntro: 'GT House e One House: duas casas exclusivas em São Paulo. A GT House reúne duas plenárias, jardim e pé-direito de 8 m; a One House recebe eventos de até 150 pessoas em clima intimista.',
  casaDestaqueTexto: 'GT House',
  cards: [
    { titulo: 'Treinamento e workshop', texto: 'Plenária com telão de LED, som, coffee break e almoço no mesmo lugar.', href: '/treinamento-workshop/' },
    { titulo: 'Convenção e plenária', texto: 'Duas plenárias na mesma casa, até 220 pessoas, com jardim e gastronomia.', href: '/convencao-plenaria/' },
    { titulo: 'Palestras e auditório', texto: 'Plenária de até 220 pessoas com painel de LED de 25 m², som e iluminação.', href: '/palestras-auditorio/' },
    { titulo: 'Imersão e mastermind', texto: 'A casa inteira para o seu evento: conteúdo, networking e refeições.', href: '/imersao-mastermind/' },
    { titulo: 'Lançamento e coquetel', texto: 'Painel de LED, bar de drinks e jardim para lançar sua marca com impacto.', href: '/lancamento-coquetel/' },
    { titulo: 'Confraternização', texto: 'Jardim, bar de drinks, jantar e festa para celebrar o ano da equipe.', href: '/confraternizacao-empresa/' },
  ],
  agencias: {
    titulo: 'Um só fornecedor, atendimento ágil.',
    texto: 'Para agências e empresas que organizam eventos com frequência: espaço, estrutura e serviços em uma única proposta.',
    itens: [
      'Espaço, mobiliário, A&V e gastronomia com um só fornecedor',
      'Atendimento consultivo: indicamos a casa ideal para cada briefing',
      'Duas casas exclusivas, de 30 a 220 convidados',
      'Visita técnica agendada para você e o seu cliente',
    ],
  },
  faq: [
    { q: 'Que tipos de evento vocês atendem?', a: 'Eventos corporativos: treinamentos e workshops, palestras, convenções e plenárias, imersões e masterminds, lançamentos de produto, coquetéis e confraternizações de empresa.' },
    { q: 'Qual a capacidade de cada casa?', a: 'A GT House recebe até 220 pessoas na Plenária Elevado, até 170 na Plenária Térrea e até 120 no jardim. A One House recebe até 150 pessoas em formato coquetel.' },
    { q: 'O que está incluso?', a: 'Espaço, mobiliário, A&V (som, iluminação e painel de LED) e gastronomia, com bar de drinks. Tudo em uma única proposta, com atendimento consultivo.' },
    { q: 'Vocês atendem agências?', a: 'Sim. Agências e empresas contam com um só fornecedor para espaço, estrutura e serviços, e com atendimento ágil para cada briefing.' },
    { q: 'Posso visitar a casa antes?', a: 'Pode e recomendamos. Agende uma visita técnica com nosso time para conhecer os ambientes pessoalmente.' },
  ],
};
