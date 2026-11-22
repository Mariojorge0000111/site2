// Cidades da região com página própria. O texto de cada uma fica em ./cidades/<slug>.json.

export interface Cidade {
  slug: string;
  nome: string;
  titulo: string;
  descricao: string;
  h1: string;
  resumo: string;
  lead: string;
  secoes: { h2: string; paragrafos: string[]; lista?: string[] }[];
  faq: { p: string; r: string }[];
}

const ORDEM = ['carazinho', 'marau'];

const arquivos = import.meta.glob('./cidades/*.json', { eager: true }) as Record<string, { default: Cidade }>;
export const CIDADES: Cidade[] = Object.values(arquivos)
  .map((m) => m.default)
  .sort((a, b) => ORDEM.indexOf(a.slug) - ORDEM.indexOf(b.slug));

export const hrefCidade = (nome: string) => {
  const c = CIDADES.find((x) => x.nome === nome);
  return c ? `/cidades/${c.slug}/` : undefined;
};
