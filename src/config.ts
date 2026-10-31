// =====================================================================
// CONFIGURAÇÃO DO SITE — o que muda quando o site for alugado fica aqui
// =====================================================================

export const SITE = {
  nome: 'Mudanças e Fretes Passo Fundo',
  slogan: 'Mudanças, fretes e carretos em Passo Fundo e cidades da região',
  cidade: 'Passo Fundo',
  estado: 'RS',

  // WhatsApp com DDI + DDD + número, só números
  whatsapp: '5555991438702',
  // Telefone exibido no site (deixe vazio para não exibir)
  telefone: '',
  mensagemWhatsapp: 'Oi! Encontrei o site e quero um orçamento de mudança/frete em Passo Fundo.',

  horario: 'Segunda a sábado, das 7h30 às 18h30',
};

export function linkWhatsapp(mensagem = SITE.mensagemWhatsapp): string {
  if (!SITE.whatsapp) return '/contato/';
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}

// Cidades vizinhas (Plano Diretor de Passo Fundo e acesso rodoviário)
export const REGIAO = [
  'Marau', 'Carazinho', 'Coxilha', 'Pontão', 'Mato Castelhano', 'Ernestina', 'Santo Antônio do Planalto',
];
