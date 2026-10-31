// Cada bairro com página própria tem um arquivo JSON em ./bairros/<slug>.json,
// com texto pesquisado e único (regra: 60%+ de conteúdo exclusivo por página).

export interface Bairro {
  slug: string;
  nome: string;
  prep: string;
  titulo: string;
  descricao: string;
  h1: string;
  sobre: string;
  secoes: { h2: string; paragrafos: string[]; lista?: string[] }[];
  servicos: Record<string, string>;
  faq: { p: string; r: string }[];
  proximos: string[];
  fontes?: string[];
}

// Ordem de exibição (bairros mais procurados primeiro)
const ORDEM = [
  'centro', 'boqueirao', 'sao-cristovao', 'petropolis', 'vera-cruz', 'vila-rodrigues', 'sao-jose',
  'lucas-araujo', 'santa-marta', 'annes',
];

const arquivos = import.meta.glob('./bairros/*.json', { eager: true }) as Record<string, { default: Bairro }>;
export const BAIRROS: Bairro[] = Object.values(arquivos)
  .map((m) => m.default)
  .sort((a, b) => ORDEM.indexOf(a.slug) - ORDEM.indexOf(b.slug));

export const bairro = (slug: string) => BAIRROS.find((b) => b.slug === slug);

// Bairros atendidos sem página própria (listados em /bairros/). Nomes dos setores do Plano Diretor.
export const OUTROS_BAIRROS = [
  'Vila Vergueiro', 'São Luiz Gonzaga', 'Vila Cruzeiro', 'Integração', 'Victor Issler', 'Roselândia',
  'Vila Mattos', 'José Alexandre Zachia', 'Valinhos', 'Vila Luiza', 'Santa Maria', 'Planaltina',
  'Nenê Graeff', 'Hípica', 'Dona Eliza', 'Cidade Universitária', 'Jardim América', 'Nossa Senhora Aparecida',
];
