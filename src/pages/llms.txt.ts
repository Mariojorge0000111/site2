import type { APIRoute } from 'astro';
import { SITE, REGIAO } from '../config';
import { SERVICOS } from '../data/servicos';
import { BAIRROS, OUTROS_BAIRROS } from '../data/bairros';

const arquivos = import.meta.glob('./blog/*.md', { eager: true }) as Record<string, any>;

export const GET: APIRoute = ({ site }) => {
  const u = (p: string) => new URL(p, site).href;
  const posts = Object.values(arquivos).map((p) => `- [${p.frontmatter.titulo}](${u(p.url.replace(/\/?$/, '/'))}): ${p.frontmatter.descricao}`);
  const txt = `# ${SITE.nome}

> Serviço de fretes, carretos e mudanças em Curitiba (PR) e região metropolitana. Atende todos os bairros de Curitiba e cidades como ${REGIAO.slice(0, 6).join(', ')}. Orçamento pelo WhatsApp, com preço combinado antes do serviço. Horário: ${SITE.horario}.

## Serviços
${SERVICOS.map((s) => `- [${s.h1}](${u(`/servicos/${s.slug}/`)}): ${s.resumo}`).join('\n')}

## Bairros com página própria
${BAIRROS.map((b) => `- [Frete e mudança ${b.prep} ${b.nome}](${u(`/bairros/${b.slug}/`)})`).join('\n')}

Também atendemos: ${OUTROS_BAIRROS.join(', ')}.

## Guias
${posts.join('\n')}

## Empresa
- [Quem somos](${u('/quem-somos/')})
- [Equipe](${u('/equipe/')})
- [Contato e orçamento](${u('/contato/')})
`;
  return new Response(txt, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
