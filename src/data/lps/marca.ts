import type { LpConteudo } from './types';

// C3 Marca (ficha 3.8): buscas por "connect fun", "gt house" e "one house" — a página precisa
// apresentar as duas casas. Fica em /home-nova/ (noindex) até a campanha ativa de treinamento,
// que hoje aponta para a home, ser movida para /treinamento-workshop/. Depois, vira a home (path '/').
export const marca: LpConteudo = {
  id: 'marca',
  campanha: 'C3 Marca',
  variantes: [{
    path: '/home-nova/',
    grupo: 'C3.1 Connect Fun · C3.2 GT House · C3.3 One House',
    h1: 'Casas exclusivas da Connect Fun: GT House e One House',
    title: 'Connect Fun | GT House e One House · Eventos em SP',
    description: 'Connect Fun: hub de casas exclusivas para eventos corporativos. GT House (Alto de Pinheiros) e One House (Higienópolis), 30 a 220 pessoas. Peça orçamento.',
    noIndex: true,
  }],
  eyebrowHero: 'Connect Fun · site oficial',
  subtitulo: 'Hub de casas exclusivas em Alto de Pinheiros e Higienópolis, de 30 a 220 convidados, com A&V e gastronomia inclusos.',
  heroImg: 'casas/gt-house/fachada-deck.jpg',
  heroAlt: 'Fachada da GT House, casa da Connect Fun no Alto de Pinheiros',
  tipoEvento: 'Evento corporativo',
  opcoesTipo: ['Evento corporativo', 'Treinamento / workshop', 'Palestra', 'Convenção', 'Imersão / mastermind', 'Lançamento / coquetel', 'Confraternização / fim de ano'],
  formato: {
    eyebrow: 'Connect Fun',
    titulo: 'Mais de uma casa, um só atendimento.',
    texto: 'A Connect Fun reúne casas exclusivas para eventos corporativos em São Paulo. Você conta o que precisa e nós indicamos a casa ideal, com espaço, mobiliário, A&V e gastronomia em uma única proposta.',
    itens: [
      { titulo: 'GT House', texto: 'Alto de Pinheiros: duas plenárias (até 220 e 170 pessoas), painel de LED de 25 m², jardim e pé-direito de 8 m.' },
      { titulo: 'One House', texto: 'Higienópolis: casa intimista de 200 m², até 150 pessoas em coquetel, com térreo, mezanino e cave.' },
      { titulo: 'Solução completa', texto: 'A&V, gastronomia e bar de drinks inclusos, com um só fornecedor.' },
      { titulo: 'Visita técnica', texto: 'Agende uma visita para conhecer a casa antes de decidir.' },
    ],
    fotos: [
      { src: 'casas/gt-house/jardim-aereo.jpg', alt: 'Jardim da GT House visto de cima' },
      { src: 'casas/gt-house/plenaria-palco.jpg', alt: 'Plenária da GT House com palco e iluminação' },
    ],
  },
  casasIntro: 'GT House e One House: duas casas exclusivas da Connect Fun em São Paulo, para eventos corporativos de 30 a 220 convidados.',
  casaDestaqueTexto: 'GT House',
  cards: [
    { titulo: 'Eventos corporativos', texto: 'Plenárias de até 220 pessoas, LED de 25 m², A&V e gastronomia.', href: '/eventos-corporativos/' },
    { titulo: 'Treinamento e workshop', texto: 'Plenária com telão de LED, som, coffee break e almoço no mesmo lugar.', href: '/treinamento-workshop/' },
    { titulo: 'Palestras e auditório', texto: 'Plenária de até 220 pessoas com painel de LED de 25 m², som e iluminação.', href: '/palestras-auditorio/' },
    { titulo: 'Convenção e plenária', texto: 'Duas plenárias na mesma casa, jardim e gastronomia.', href: '/convencao-plenaria/' },
    { titulo: 'Imersão e mastermind', texto: 'A casa inteira para o seu evento: conteúdo, networking e refeições.', href: '/imersao-mastermind/' },
    { titulo: 'Lançamento e coquetel', texto: 'Painel de LED, bar de drinks e jardim para lançar sua marca.', href: '/lancamento-coquetel/' },
    { titulo: 'Confraternização de empresa', texto: 'Jardim, bar de drinks, jantar e festa para celebrar o ano da equipe.', href: '/espaco-confraternizacao/' },
  ],
  faq: [
    { q: 'O que é a Connect Fun?', a: 'Um hub de casas exclusivas para eventos corporativos em São Paulo. Com um só atendimento, você recebe a indicação da casa ideal e uma proposta com espaço, mobiliário, A&V e gastronomia.' },
    { q: 'Onde ficam a GT House e a One House?', a: 'A GT House fica na Av. Prof. Fonseca Rodrigues, 835, no Alto de Pinheiros. A One House fica em Higienópolis.' },
    { q: 'Qual a capacidade de cada casa?', a: 'A GT House recebe até 220 pessoas na Plenária Elevado, até 170 na Plenária Térrea e até 120 no jardim. A One House recebe até 150 pessoas em formato coquetel.' },
    { q: 'O que está incluso?', a: 'Espaço, mobiliário, A&V (som, iluminação e painel de LED) e gastronomia, com bar de drinks, em uma única proposta.' },
    { q: 'Posso visitar as casas?', a: 'Pode. Agende uma visita técnica com nosso atendimento consultivo.' },
  ],
};
