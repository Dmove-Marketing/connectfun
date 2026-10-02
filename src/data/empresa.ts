// Dados institucionais da Connect Fun (fonte: ficha do cliente + site connectfun.com.br).
// Usados no rodapé, na política de privacidade e no JSON-LD. Altere aqui e reflete em todo o site.
export const empresa = {
  nome: 'Connect Fun',
  razaoSocial: 'Connect Fun Ltda',
  cnpj: '50.915.219/0001-99',
  endereco: {
    rua: 'Av. Prof. Fonseca Rodrigues, 835',
    bairro: 'Alto de Pinheiros',
    cidade: 'São Paulo',
    uf: 'SP',
    cep: '05461-010',
  },
  email: 'comercial@connectfun.com.br',
  instagram: 'https://www.instagram.com/connectfunsp/',
  site: 'https://connectfun.com.br/',
};

export const enderecoCompleto = `${empresa.endereco.rua} – ${empresa.endereco.bairro}, ${empresa.endereco.cidade} – ${empresa.endereco.uf}, ${empresa.endereco.cep}`;

export const politicaUrl = '/politica-de-privacidade/';
