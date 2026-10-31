export interface Servico {
  slug: string;
  nome: string;          // nome curto (menu, cards)
  h1: string;
  title: string;         // <title>
  descricao: string;     // meta description
  resumo: string;        // 1 frase para cards
  imagem: string;
  imagemAlt: string;
  intro: string[];
  inclui: string[];
  quando: { titulo: string; itens: string[] };
  dicas: { titulo: string; itens: string[] };
  faq: { p: string; r: string }[];
  principal: boolean;    // um dos 5 serviços das páginas de bairro
}

export const SERVICOS: Servico[] = [
  {
    slug: 'frete',
    nome: 'Frete',
    h1: 'Frete em Passo Fundo',
    title: 'Frete em Passo Fundo: móveis, cargas e região',
    descricao: 'Frete em Passo Fundo para móveis, eletrodomésticos e cargas médias, dentro da cidade e para Marau, Carazinho e região. Peça o valor pelo WhatsApp.',
    resumo: 'Cargas médias dentro da cidade e para as cidades vizinhas, com veículo do porte certo.',
    imagem: 'servico-frete',
    imagemAlt: 'Entregador conferindo carga com prancheta ao lado de uma van aberta',
    intro: [
      'Frete é para quando a carga é maior que um carreto e menor que uma mudança. Um quarto inteiro, o estoque de uma loja, os móveis que vão para a casa dos pais em Marau.',
      'Você manda a lista e os dois endereços. A gente indica o veículo, passa o valor antes e marca o dia. Em Passo Fundo chove o ano inteiro, então a carga vai coberta.',
    ],
    inclui: [
      'Veículo escolhido pelo volume: utilitário, caminhão pequeno ou baú fechado',
      'Motorista e ajudantes, na quantidade que a carga pedir',
      'Mantas, cintas e lona para segurar e cobrir os itens',
      'Carrinho para peças pesadas como geladeira e máquina de lavar',
      'Viagens para Marau, Carazinho, Coxilha, Pontão e outras cidades vizinhas',
    ],
    quando: {
      titulo: 'Situações em que o frete resolve',
      itens: [
        'Levar móveis de um quarto ou de uma kitnet',
        'Transportar mercadoria entre loja, depósito e cliente',
        'Mandar móveis para outra cidade da região pela BR-285, BR-153 ou RS-324',
        'Buscar uma carga de vários volumes numa transportadora ou atacado',
      ],
    },
    dicas: {
      titulo: 'Para o frete sair certo',
      itens: [
        'Liste os itens e mande foto dos maiores. Assim o veículo não fica pequeno.',
        'Diga se o endereço é no Centro ou na Av. Brasil. Caminhão grande tem restrição ali.',
        'Informe andar, escada e se o prédio exige agendar o elevador.',
        'Deixe caixas fechadas e etiquetadas antes do horário marcado.',
      ],
    },
    faq: [
      { p: 'Como é calculado o valor do frete em Passo Fundo?', r: 'Pesam a distância, o volume, o porte do veículo, os andares sem elevador e o número de ajudantes. Com a lista e os endereços, você recebe o valor antes de confirmar.' },
      { p: 'Vocês fazem frete para outras cidades?', r: 'Sim. Atendemos as cidades vizinhas, como Marau, Carazinho, Coxilha, Pontão, Mato Castelhano, Ernestina e Santo Antônio do Planalto. Para destinos mais longe, consulte.' },
      { p: 'A carga fica protegida da chuva?', r: 'Sim. Usamos caminhão baú fechado sempre que o volume permite. Em veículo aberto, a carga vai coberta com lona e amarrada.' },
    ],
    principal: true,
  },
  {
    slug: 'carreto',
    nome: 'Carreto',
    h1: 'Carreto em Passo Fundo',
    title: 'Carreto em Passo Fundo: poucos itens, rápido',
    descricao: 'Carreto em Passo Fundo para um ou poucos itens: geladeira, sofá, cama, compra de loja ou de usado. Veículo pequeno, que circula bem no Centro. Peça já.',
    resumo: 'Uma geladeira, um sofá, uma compra de loja. Veículo pequeno e agenda curta.',
    imagem: 'servico-carreto',
    imagemAlt: 'Caminhão pequeno de carga branco circulando numa rua arborizada',
    intro: [
      'Carreto é a viagem curta com poucos itens. Comprou um sofá usado no São Cristóvão e precisa levar para o Boqueirão? É carreto.',
      'O veículo é pequeno. Isso deixa o preço menor e facilita parar no Centro, onde caminhão acima de 7 toneladas tem circulação restrita.',
    ],
    inclui: [
      'Utilitário ou caminhão pequeno',
      'Motorista que ajuda a carregar; ajudante extra para peças pesadas',
      'Manta e cinta para o item não riscar nem tombar',
      'Lona para dias de chuva',
      'Retirada em dois endereços na mesma viagem, se combinado',
    ],
    quando: {
      titulo: 'Quando pedir um carreto',
      itens: [
        'Buscar móvel ou eletrodoméstico comprado em loja que não entrega',
        'Trazer um item comprado de usado em grupo ou anúncio',
        'Levar uma geladeira, um fogão ou uma máquina de lavar',
        'Mudar poucos móveis de um estudante entre kitnets',
      ],
    },
    dicas: {
      titulo: 'Para o carreto ser rápido',
      itens: [
        'Meça o item e a porta antes. Evita surpresa na hora de passar.',
        'Combine com o vendedor o horário de retirada.',
        'Deixe a geladeira desligada e seca desde a noite anterior.',
        'Avise se o item está no segundo andar ou mais, sem elevador.',
      ],
    },
    faq: [
      { p: 'Qual a diferença entre carreto e frete?', r: 'O carreto leva poucos itens numa viagem curta, com veículo pequeno. O frete leva mais volume, às vezes para outra cidade, e pode precisar de caminhão maior.' },
      { p: 'O motorista ajuda a carregar?', r: 'Sim. Para peças muito pesadas ou com escada longa, o ideal é incluir um ajudante. Isso fica combinado no orçamento.' },
      { p: 'Dá para buscar a compra e levar no mesmo dia?', r: 'Depende da agenda do dia. Peça pelo WhatsApp com o endereço de retirada e de entrega e a gente confirma o horário disponível.' },
    ],
    principal: true,
  },
  {
    slug: 'mudanca-residencial',
    nome: 'Mudança residencial',
    h1: 'Mudança residencial em Passo Fundo',
    title: 'Mudança residencial em Passo Fundo: casa e apê',
    descricao: 'Mudança residencial em Passo Fundo de casa, apartamento ou kitnet. Caminhão fechado contra chuva, equipe para escada e elevador. Valor antes de fechar.',
    resumo: 'Casa, apartamento ou kitnet, com caminhão fechado e equipe para carregar.',
    imagem: 'servico-mudanca-residencial',
    imagemAlt: 'Casal desembalando caixas no apartamento novo',
    intro: [
      'Mudar de casa em Passo Fundo tem três detalhes que pesam: o tempo instável, os prédios altos e o trânsito do Centro. A gente planeja a mudança contando com os três.',
      'Você diz o que vai, de onde sai e para onde vai. Com isso definimos caminhão, equipe e horário. O valor vem antes, e você decide.',
    ],
    inclui: [
      'Caminhão baú fechado, do tamanho do imóvel',
      'Equipe para carregar, descarregar e colocar cada móvel no cômodo certo',
      'Proteção com manta, plástico e lona',
      'Desmontagem e montagem de camas e roupeiros, se contratado',
      'Embalagem de louças e frágeis, se contratado',
    ],
    quando: {
      titulo: 'Tipos de mudança que atendemos',
      itens: [
        'Kitnet ou apartamento de estudante perto da UPF, Atitus, UFFS ou IFSul',
        'Apartamento em prédio com elevador e regra de condomínio',
        'Casa ou sobrado, com móveis grandes e quintal',
        'Mudança de Passo Fundo para cidades vizinhas, ou ao contrário',
      ],
    },
    dicas: {
      titulo: 'Como preparar a mudança',
      itens: [
        'Reserve o elevador nos dois prédios com antecedência.',
        'Separe documentos, remédios e chaves numa bolsa que vai com você.',
        'Escreva o cômodo de destino em cada caixa.',
        'No inverno, marque cedo, mas não antes de a geada secar na calçada.',
      ],
    },
    faq: [
      { p: 'Quanto custa uma mudança residencial em Passo Fundo?', r: 'Depende do tamanho do imóvel, dos andares, da distância e dos serviços extras. Com a lista de móveis e os endereços, passamos um valor fechado antes de você confirmar.' },
      { p: 'Fazem mudança em dia de chuva?', r: 'Sim, com caminhão fechado e lona na hora de carregar. Se a chuva for forte demais, combinamos uma pausa ou outra data com você.' },
      { p: 'Vocês atendem prédio alto?', r: 'Sim. Usamos o elevador de serviço no horário que o condomínio liberar. Quando um móvel não cabe, avaliamos descer pela escada ou içar.' },
    ],
    principal: true,
  },
  {
    slug: 'mudanca-comercial',
    nome: 'Mudança comercial',
    h1: 'Mudança comercial em Passo Fundo',
    title: 'Mudança comercial em Passo Fundo: lojas e escritórios',
    descricao: 'Mudança comercial em Passo Fundo para escritório, loja e consultório. Plano por etapas, horário fora do expediente e ajuda com a regra de caminhão no Centro.',
    resumo: 'Escritórios, lojas e consultórios, com plano para a empresa parar o mínimo.',
    imagem: 'servico-mudanca-comercial',
    imagemAlt: 'Mulher carregando caixa com materiais de escritório',
    intro: [
      'Empresa parada custa caro. Por isso a mudança comercial começa com um plano: o que sai primeiro, o que precisa chegar funcionando e em qual horário a equipe pode trabalhar.',
      'Muitos escritórios e consultórios de Passo Fundo ficam no Centro, perto da Av. Brasil. Ali caminhão acima de 7 toneladas tem circulação restrita. A gente ajuda a ver se a sua mudança precisa de autorização.',
    ],
    inclui: [
      'Visita ou chamada de vídeo para medir o volume',
      'Plano de etapas por setor ou por sala',
      'Etiquetas por mesa, setor e destino',
      'Desmontagem e montagem de mesas, estantes e divisórias simples',
      'Transporte de arquivos, computadores e mercadoria',
    ],
    quando: {
      titulo: 'Para quem é',
      itens: [
        'Escritórios de contabilidade, advocacia e consultoria',
        'Consultórios e clínicas que mudam de sala',
        'Lojas que trocam de ponto ou levam estoque ao depósito',
        'Empresas que se mudam para Passo Fundo ou saem para a região',
      ],
    },
    dicas: {
      titulo: 'Como reduzir o tempo parado',
      itens: [
        'Faça backup e desligue servidores antes do dia marcado.',
        'Peça a cada setor para esvaziar gavetas e fechar as próprias caixas.',
        'Confirme com o síndico ou o shopping o horário de carga e descarga.',
        'Deixe a planta do novo espaço pronta, com o lugar de cada mesa.',
      ],
    },
    faq: [
      { p: 'Dá para fazer a mudança à noite ou no fim de semana?', r: 'Dá para combinar horários fora do expediente, conforme a agenda da equipe e as regras do prédio. Isso fica definido no orçamento.' },
      { p: 'Preciso de autorização para caminhão no Centro?', r: 'Caminhões com carga acima de 7 toneladas têm restrição na Av. Brasil e em pontos do Centro (Decreto 78/2021). A gente ajuda a verificar se o seu caso precisa da autorização da Secretaria de Segurança.' },
      { p: 'Vocês transportam computadores?', r: 'Sim, embalados e separados do mobiliário. Recomendamos que a sua equipe de TI desconecte e reconecte os equipamentos.' },
    ],
    principal: true,
  },
  {
    slug: 'montagem-de-moveis',
    nome: 'Montagem de móveis',
    h1: 'Montagem e desmontagem de móveis em Passo Fundo',
    title: 'Montagem de móveis em Passo Fundo: roupeiro e cama',
    descricao: 'Montagem e desmontagem de móveis em Passo Fundo: roupeiro, cama, rack e móvel planejado simples. Junto da mudança ou avulsa. Combine pelo WhatsApp.',
    resumo: 'Roupeiros, camas e racks desmontados para a viagem e montados no destino.',
    imagem: 'servico-montagem-de-moveis',
    imagemAlt: 'Marceneiro usando furadeira numa peça de madeira',
    intro: [
      'Um roupeiro de seis portas não passa inteiro pela porta da maioria dos apartamentos. Desmontado, passa, viaja mais leve e chega sem empenar.',
      'A montagem pode ir junto com a mudança ou ser pedida sozinha, para um móvel novo que chegou na caixa.',
    ],
    inclui: [
      'Desmontagem na origem e montagem no destino',
      'Parafusos e ferragens guardados em saco identificado por móvel',
      'Proteção das peças com manta e papelão',
      'Montagem de móvel novo de caixa',
      'Ajuste de portas e gavetas depois de montado',
    ],
    quando: {
      titulo: 'Quando vale chamar',
      itens: [
        'Roupeiros grandes, camas box com cabeceira e beliches',
        'Racks, painéis de TV e estantes',
        'Móvel comprado pela internet que chegou desmontado',
        'Mesa de escritório e armário de arquivo',
      ],
    },
    dicas: {
      titulo: 'Antes da desmontagem',
      itens: [
        'Esvazie o roupeiro inteiro, inclusive o maleiro.',
        'Guarde o manual se ainda tiver; ajuda na montagem.',
        'Tire fotos do móvel montado, de frente e de lado.',
        'Avise se o móvel é colado ou parafusado na parede.',
      ],
    },
    faq: [
      { p: 'Montam móvel planejado?', r: 'Montamos e desmontamos móveis modulares e de encaixe. Planejado sob medida, que depende de corte e nova fixação, pode precisar do marceneiro que fez a peça. Mande fotos para avaliarmos.' },
      { p: 'Posso pedir só a montagem, sem mudança?', r: 'Pode. Diga qual é o móvel, a marca se souber e o bairro. A gente confirma se atende e combina o horário.' },
      { p: 'E se faltar parafuso?', r: 'Na desmontagem feita por nós, as ferragens vão em saco separado por móvel. Se alguma peça do móvel já estiver gasta ou quebrada, avisamos antes de montar.' },
    ],
    principal: true,
  },
  {
    slug: 'icamento',
    nome: 'Içamento de móveis',
    h1: 'Içamento de móveis em Passo Fundo',
    title: 'Içamento de móveis em Passo Fundo: sofá e escada',
    descricao: 'Içamento e transporte de móveis grandes por escada em Passo Fundo: sofá, roupeiro e geladeira que não cabem no elevador. Avaliação por foto antes do dia.',
    resumo: 'Quando o sofá não cabe no elevador: escada, corda ou janela, com avaliação antes.',
    imagem: 'servico-icamento',
    imagemAlt: 'Dois carregadores descendo um sofá pela escada',
    intro: [
      'Passo Fundo tem cada vez mais prédios novos e altos. E nem todo elevador recebe um sofá de três lugares ou uma geladeira duplex.',
      'Nesses casos há dois caminhos: levar pela escada, com equipe e técnica, ou içar pela janela ou sacada com corda. A escolha depende do móvel, do andar e do prédio. Por isso a gente avalia antes.',
    ],
    inclui: [
      'Avaliação por foto ou vídeo do móvel, da escada e da janela',
      'Equipe treinada para descer e subir peças pesadas pela escada',
      'Içamento com corda e proteção, quando o local permite',
      'Proteção de quinas, paredes e corrimão',
      'Conversa prévia com o condomínio sobre a área de manobra',
    ],
    quando: {
      titulo: 'Quando o içamento ou a escada entram',
      itens: [
        'Sofá retrátil ou de canto que não entra no elevador',
        'Roupeiro ou cama box que não faz a curva da escada',
        'Geladeira grande em prédio sem elevador',
        'Sobrado com escada estreita ou em caracol',
      ],
    },
    dicas: {
      titulo: 'O que medir antes',
      itens: [
        'Altura, largura e profundidade do móvel.',
        'Largura da porta, do corredor e do elevador.',
        'Tamanho da janela ou da abertura da sacada.',
        'Se há fios, árvore ou toldo abaixo da janela.',
      ],
    },
    faq: [
      { p: 'Todo móvel pode ser içado?', r: 'Não. Depende do peso, do tamanho da janela e do espaço embaixo. Em alguns casos é mais seguro levar pela escada ou desmontar a peça. Avaliamos por foto antes.' },
      { p: 'Precisa de autorização do condomínio?', r: 'Na maioria dos prédios, sim. O síndico costuma definir horário e área isolada para a manobra. Vale pedir com antecedência.' },
      { p: 'Fazem içamento em dia de chuva?', r: 'Com chuva forte ou vento, não. A corda e as mãos escorregam. Nesses dias remarcamos ou levamos pela escada, se der.' },
    ],
    principal: false,
  },
  {
    slug: 'embalagem',
    nome: 'Embalagem e proteção',
    h1: 'Embalagem para mudança em Passo Fundo',
    title: 'Embalagem para mudança em Passo Fundo: frágeis',
    descricao: 'Embalagem para mudança em Passo Fundo: louças, vidros, eletrônicos e quadros com plástico-bolha, papel e caixas. Proteção extra contra umidade e frio.',
    resumo: 'Louças, vidros e eletrônicos embalados com plástico-bolha, papel e caixa certa.',
    imagem: 'servico-embalagem',
    imagemAlt: 'Plástico-bolha usado para proteger objetos frágeis',
    intro: [
      'O que mais quebra numa mudança não é o móvel grande. É o copo mal enrolado no fundo de uma caixa pesada.',
      'A gente embala os frágeis com plástico-bolha, papel e caixas do tamanho certo. Em Passo Fundo a umidade é alta boa parte do ano, então colchões, estofados e eletrônicos ganham plástico por fora.',
    ],
    inclui: [
      'Caixas de papelão em tamanhos diferentes',
      'Plástico-bolha, papel de seda e fita',
      'Filme plástico para colchões, sofás e estofados',
      'Embalagem de louças, vidros, quadros, espelhos e eletrônicos',
      'Identificação de cada caixa por cômodo e conteúdo',
    ],
    quando: {
      titulo: 'Quando faz diferença',
      itens: [
        'Cozinha com muita louça, taças e vidros',
        'TVs grandes sem a caixa original',
        'Quadros, espelhos e luminárias',
        'Mudança em dia chuvoso, quando tudo precisa de proteção extra',
      ],
    },
    dicas: {
      titulo: 'Se você for embalar parte sozinho',
      itens: [
        'Pratos vão em pé dentro da caixa, nunca deitados.',
        'Livros em caixa pequena. Caixa grande cheia de livro rasga.',
        'Preencha os vazios com papel ou pano para nada balançar.',
        'Marque FRÁGIL e o lado de cima em duas faces da caixa.',
      ],
    },
    faq: [
      { p: 'O material está incluído?', r: 'No serviço de embalagem, sim. Você também pode pedir só o material e embalar por conta própria.' },
      { p: 'Posso contratar só a embalagem dos frágeis?', r: 'Pode. É comum o cliente cuidar de roupas e livros e deixar louças, vidros e eletrônicos com a equipe.' },
      { p: 'Quando a embalagem é feita?', r: 'Em geral na véspera ou no começo do dia da mudança. Para casas grandes, pode levar mais de um dia. Isso entra no orçamento.' },
    ],
    principal: false,
  },
];

export const PRINCIPAIS = SERVICOS.filter((s) => s.principal);
export const servico = (slug: string) => SERVICOS.find((s) => s.slug === slug)!;
