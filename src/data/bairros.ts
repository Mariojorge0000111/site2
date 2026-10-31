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
  'centro', 'batel', 'agua-verde', 'bigorrilho', 'portao', 'cabral', 'mossungue', 'juveve', 'reboucas',
  'cic', 'boqueirao', 'sitio-cercado', 'cajuru', 'xaxim', 'pinheirinho', 'uberaba', 'santa-felicidade',
  'jardim-das-americas',
];

const arquivos = import.meta.glob('./bairros/*.json', { eager: true }) as Record<string, { default: Bairro }>;
export const BAIRROS: Bairro[] = Object.values(arquivos)
  .map((m) => m.default)
  .sort((a, b) => ORDEM.indexOf(a.slug) - ORDEM.indexOf(b.slug));

export const bairro = (slug: string) => BAIRROS.find((b) => b.slug === slug);

// Bairros atendidos que não têm página própria (aparecem listados em /bairros/)
export const OUTROS_BAIRROS = [
  'São Francisco', 'Centro Cívico', 'Mercês', 'Prado Velho', 'Jardim Botânico', 'Alto da XV', 'Cristo Rei',
  'Hugo Lange', 'Alto da Glória', 'Bacacheri', 'Boa Vista', 'Santa Cândida', 'Campo Comprido', 'Fazendinha',
  'Novo Mundo', 'Capão Raso', 'Hauer', 'Tatuquara', 'Ahú', 'Seminário', 'Vila Izabel', 'Santa Quitéria',
  'Campina do Siqueira', 'Pilarzinho', 'São Lourenço', 'Tarumã', 'Capão da Imbuia', 'Guabirotuba',
  'Alto Boqueirão', 'Umbará', 'Campo de Santana', 'Barreirinha', 'Abranches', 'Santo Inácio', 'Orleans',
];
