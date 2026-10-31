// =====================================================================
// CONFIGURAÇÃO DO SITE — tudo que muda quando o site for alugado fica aqui
// =====================================================================

export const SITE = {
  nome: 'Fretes e Mudanças Curitiba',
  slogan: 'Fretes, carretos e mudanças em Curitiba e região metropolitana',
  cidade: 'Curitiba',
  estado: 'PR',

  // WhatsApp com DDI + DDD + número, só números
  whatsapp: '5555991438702',
  // Telefone exibido no site (deixe vazio para não exibir)
  telefone: '',
  mensagemWhatsapp: 'Olá! Vim pelo site e gostaria de um orçamento de frete/mudança.',

  horario: 'Segunda a sábado, das 7h às 19h',
};

export function linkWhatsapp(mensagem = SITE.mensagemWhatsapp): string {
  if (!SITE.whatsapp) return '/contato/';
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}

export const REGIAO = [
  'São José dos Pinhais', 'Pinhais', 'Colombo', 'Araucária', 'Fazenda Rio Grande',
  'Almirante Tamandaré', 'Campo Largo', 'Piraquara', 'Quatro Barras', 'Campina Grande do Sul',
];
