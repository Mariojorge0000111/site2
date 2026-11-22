// =====================================================================
// CONFIGURAÇÃO DO SITE — o que muda quando o site for alugado fica aqui
// =====================================================================

export const SITE = {
  nome: 'Mudanças e Fretes Passo Fundo',
  slogan: 'Mudanças, fretes e carretos em Passo Fundo e cidades da região',
  cidade: 'Passo Fundo',
  estado: 'RS',
  estadoNome: 'Rio Grande do Sul',

  // WhatsApp com DDI + DDD + número, só números.
  // O DDD 55 está confirmado pelo dono. Não trocar por 54.
  whatsapp: '5555991438702',
  mensagemWhatsapp: 'Oi! Encontrei o site e quero um orçamento de mudança/frete em Passo Fundo.',

  // Texto visível e campos abaixo descrevem o mesmo horário.
  horario: 'Segunda a sábado, das 7h30 às 18h30',
  abre: '07:30',
  fecha: '18:30',
  dias: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],

  // Sede municipal de Passo Fundo (prefeitura: 28°15′46″ S, 52°24′24″ O).
  // https://www.pmpf.rs.gov.br/turismo/caracteristicas-fisicas/
  // Centro da área de serviço. O site não publica endereço de rua.
  latitude: -28.262778,
  longitude: -52.406667,
};

/** Número visível. Sai do WhatsApp: DDI 55, DDD 55 e o assinante. */
export function telefoneVisivel(numero = SITE.whatsapp): string {
  const ddi = numero.slice(0, 2);
  const ddd = numero.slice(2, 4);
  const local = numero.slice(4);
  const formatado = local.length === 9
    ? `${local.slice(0, 5)}-${local.slice(5)}`
    : local.length === 8
      ? `${local.slice(0, 4)}-${local.slice(4)}`
      : local;
  return `+${ddi} (${ddd}) ${formatado}`;
}

/** E.164 para o schema. */
export function telefoneSchema(numero = SITE.whatsapp): string {
  return `+${numero}`;
}

export function linkWhatsapp(mensagem = SITE.mensagemWhatsapp): string {
  if (!SITE.whatsapp) return '/contato/';
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}

// Cidades vizinhas (Plano Diretor de Passo Fundo e acesso rodoviário)
export const REGIAO = [
  'Marau', 'Carazinho', 'Coxilha', 'Pontão', 'Mato Castelhano', 'Ernestina', 'Santo Antônio do Planalto',
];
