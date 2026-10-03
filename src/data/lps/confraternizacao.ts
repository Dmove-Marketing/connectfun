import type { LpConteudo } from './types';

// Campanha C1 — Confraternização (ficha 3.1 do direcionamento).
// Uma página por grupo de anúncios, cada uma no slug do objetivo do grupo (decisão de 03/10/2026):
// a "fonte" do lead no VOE fica legível e cada página tem canonical próprio.
// Urgência de datas nov/dez fica de fora até o cliente confirmar disponibilidade.
export const confraternizacao: LpConteudo = {
  id: 'confraternizacao',
  campanha: 'C1 Confraternização',
  variantes: [
    {
      path: '/espaco-confraternizacao/',
      grupo: 'C1.1 Espaço para Confraternização',
      h1: 'Espaço para confraternização de empresa em São Paulo',
      title: 'Espaço para Confraternização de Empresa em SP | Connect Fun',
      description: 'Confraternização e festa de fim de ano da sua empresa em casas exclusivas em SP. De 30 a 220 pessoas, com gastronomia, bar e A&V. Peça seu orçamento.',
    },
    {
      path: '/confraternizacao-empresa/',
      grupo: 'C1.2 Confraternização de Empresa',
      h1: 'Confraternização de empresa em casas exclusivas em SP',
      title: 'Confraternização em Casas Exclusivas em SP | Connect Fun',
      description: 'Confraternização da sua empresa em casas exclusivas em Pinheiros e Higienópolis. De 30 a 220 pessoas, com gastronomia, bar e A&V. Peça seu orçamento.',
    },
    {
      path: '/festa-fim-de-ano/',
      grupo: 'C1.3 Festa de Fim de Ano',
      h1: 'Festa de fim de ano da sua empresa em São Paulo',
      title: 'Festa de Fim de Ano da Empresa em SP | Connect Fun',
      description: 'Festa de fim de ano da sua empresa em casas exclusivas em SP. De 30 a 220 pessoas, com jardim, bar de drinks, gastronomia e A&V. Peça seu orçamento.',
      subtitulo: 'Jantar e festa no mesmo lugar, de 30 a 220 convidados em Pinheiros e Higienópolis, com gastronomia, bar de drinks, som e iluminação inclusos.',
      urgencia: 'Novembro e dezembro são os meses mais disputados. Reserve a data da festa da sua empresa.',
    },
    {
      path: '/happy-hour-corporativo/',
      grupo: 'C1.4 Happy Hour Corporativo',
      h1: 'Happy hour corporativo em casas exclusivas em SP',
      title: 'Happy Hour Corporativo em SP | Connect Fun',
      description: 'Happy hour corporativo em casas exclusivas em SP, com jardim, bar de drinks, gastronomia e som. De 30 a 220 pessoas. Peça seu orçamento.',
      tipoEvento: 'Happy hour corporativo',
      subtitulo: 'Bar de drinks, coquetel no jardim e gastronomia para reunir sua equipe. De 30 a 220 convidados em Pinheiros e Higienópolis.',
      urgencia: 'Celebre com sua equipe: as datas de fim de ano são as mais procuradas. Garanta a sua.',
    },
  ],
  subtitulo: 'De 30 a 220 convidados em Pinheiros e Higienópolis, com gastronomia, bar de drinks, som e iluminação inclusos.',
  // Repete a promessa dos anúncios ("Reserve a data da sua empresa") sem garantir disponibilidade.
  urgencia: 'Novembro e dezembro são os meses mais disputados. Reserve a data da sua empresa.',
  heroImg: 'casas/gt-house/lounge-jardim.jpg',
  heroAlt: 'Jardim e lounge da GT House preparados para confraternização',
  tipoEvento: 'Confraternização / fim de ano',
  opcoesTipo: ['Confraternização / fim de ano', 'Happy hour corporativo', 'Outro evento corporativo'],
  formato: {
    eyebrow: 'Confraternização',
    titulo: 'Uma celebração à altura do ano da sua equipe.',
    texto: 'Jardim, bar de drinks, iluminação e pista: a casa inteira preparada para a sua empresa brindar as conquistas do ano, do happy hour ao jantar com festa.',
    itens: [
      { titulo: 'Coquetel no jardim', texto: 'Recepção ao ar livre no jardim da GT House, para até 120 pessoas, com bar de drinks.' },
      { titulo: 'Jantar e festa no mesmo lugar', texto: 'Jantar em uma plenária e festa na outra, sem desmontar nada e sem trocar de endereço.' },
      { titulo: 'Happy hour corporativo', texto: 'Formato mais leve para reunir o time depois do expediente, com bar de drinks e gastronomia.' },
      { titulo: 'Som, luz e pista', texto: 'A&V incluso: som, iluminação de festa e painel de LED para vídeos e homenagens.' },
    ],
    fotos: [
      { src: 'casas/gt-house/jardim-aereo.jpg', alt: 'Jardim da GT House com mesas e lounge visto de cima' },
      { src: 'casas/gt-house/plenaria-led-lounge.jpg', alt: 'Ambiente lounge da GT House com painel de LED' },
    ],
  },
  casasIntro: 'GT House e One House: duas casas exclusivas em São Paulo. Para a confraternização, a GT House reúne jardim e duas plenárias para jantar e festa; a One House recebe grupos menores com clima intimista.',
  casaDestaqueTexto: 'GT House',
  faq: [
    { q: 'Com quanto tempo de antecedência devo reservar?', a: 'Quanto antes, melhor: as datas de fim de ano são as mais procuradas. Fale com nosso time para verificar a disponibilidade da data da sua empresa.' },
    { q: 'Vocês cuidam de comida e bebida?', a: 'Sim. Gastronomia e bar de drinks fazem parte da solução completa, junto com mobiliário, som e iluminação. Você fala com um só fornecedor.' },
    { q: 'Qual o mínimo e o máximo de pessoas?', a: 'Atendemos confraternizações de 30 a 220 convidados. A GT House recebe até 220 pessoas na Plenária Elevado e até 120 no jardim; a One House, até 150 em formato coquetel.' },
    { q: 'Dá para fazer jantar e festa no mesmo lugar?', a: 'Sim. A GT House tem duas plenárias, uma em cima da outra: dá para servir o jantar em uma e fazer a festa na outra, sem desmontar o ambiente.' },
    { q: 'Posso visitar a casa antes?', a: 'Pode e recomendamos. Agende uma visita técnica com nosso atendimento consultivo para conhecer a casa antes de fechar.' },
  ],
};
