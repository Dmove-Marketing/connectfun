// Estrutura de conteúdo de uma LP de campanha. Cada página = um objeto deste tipo;
// o layout é único (src/components/lp/LpTemplate.astro).

export interface LpVariante {
  /** caminho completo da página, ex.: '/festa-fim-de-ano/'. Cada variante tem canonical para si mesma. */
  path: string;
  /** grupo de anúncios atendido, ex.: "C1.3 Festa de Fim de Ano" */
  grupo: string;
  h1: string;
  title: string;
  description: string;
  /** sobrescreve o tipo de evento pré-selecionado da LP nesta variante */
  tipoEvento?: string;
  /** sobrescreve o subtítulo da LP nesta variante (ênfase do grupo de anúncios) */
  subtitulo?: string;
  /** sobrescreve a frase de urgência nesta variante */
  urgencia?: string;
}

export interface LpConteudo {
  /** identificador da LP (usado em comentários/relatórios) */
  id: string;
  campanha: string;
  variantes: LpVariante[];
  subtitulo: string;
  /** frase de urgência exibida no topo e no CTA final (opcional) */
  urgencia?: string;
  heroImg: string;
  heroAlt: string;
  /** tipo de evento pré-selecionado no formulário */
  tipoEvento: string;
  /** opções do select "Tipo de evento" (a pré-selecionada deve estar aqui) */
  opcoesTipo: string[];
  formato: {
    eyebrow: string;
    titulo: string;
    texto: string;
    itens: { titulo: string; texto: string }[];
    fotos: { src: string; alt: string }[];
  };
  casasIntro: string;
  /** 'one' coloca a One House antes da GT House (ex.: imersões) */
  casaPrimeiro?: 'gt' | 'one';
  /** cards de formatos com link (página guarda-chuva) */
  cards?: { titulo: string; texto: string; href?: string }[];
  /** seção "Para agências e empresas" */
  agencias?: { titulo: string; texto: string; itens: string[] };
  /** qual casa aparece primeiro / em destaque no texto */
  casaDestaqueTexto: string;
  faq: { q: string; a: string }[];
}
