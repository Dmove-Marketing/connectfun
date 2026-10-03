// Fatos das casas usados nas LPs. Fonte: "Direcionamento LPs - Índice de Qualidade (out-2026).md".
// Só entra aqui o que está confirmado — itens ⚠️ do documento ficam de fora até o cliente confirmar.

export const gtHouse = {
  nome: 'GT House',
  bairro: 'Alto de Pinheiros',
  resumo: 'Duas plenárias na mesma casa, uma em cima da outra, jardim e pé-direito de 8 m.',
  destaques: [
    { valor: '220', rotulo: 'pessoas na Plenária Elevado, com painel de LED de 25 m²' },
    { valor: '170', rotulo: 'pessoas na Plenária Térrea, com painel de LED de 10 m²' },
    { valor: '120', rotulo: 'pessoas no jardim' },
    { valor: '8 m', rotulo: 'de pé-direito' },
  ],
  andares: [
    { nome: 'Plenária Elevado', capacidade: 'até 220 pessoas', led: 'LED de 25 m²' },
    { nome: 'Plenária Térrea', capacidade: 'até 170 pessoas', led: 'LED de 10 m²' },
    { nome: 'Jardim', capacidade: 'até 120 pessoas', led: 'integrado ao térreo' },
  ],
};

export const oneHouse = {
  nome: 'One House',
  bairro: 'Higienópolis',
  resumo: 'Casa intimista de 200 m² em três ambientes: térreo, mezanino e cave.',
  destaques: [
    { valor: '200 m²', rotulo: 'de casa exclusiva' },
    { valor: '150', rotulo: 'pessoas em formato coquetel' },
    { valor: '3', rotulo: 'ambientes: térreo, mezanino e cave' },
  ],
};

// Itens que os anúncios prometem (seção 2.2 do direcionamento) — toda LP precisa mostrá-los em texto.
export const promessasAnuncio = [
  'casas exclusivas em SP',
  'Pinheiros e Higienópolis',
  'de 30 a 220 convidados',
  'plenárias de até 220 pessoas',
  'painel de LED de 25 m²',
  'pé-direito de 8 m',
  'jardim',
  'duas plenárias na mesma casa',
  'A&V e gastronomia inclusos',
  'bar de drinks',
  'atendimento consultivo',
  'agende uma visita técnica',
];
