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
    h1: 'Frete em Curitiba',
    title: 'Frete em Curitiba: transporte de móveis e pequenas cargas',
    descricao: 'Frete em Curitiba para móveis, eletrodomésticos e pequenas cargas, com ajudantes e proteção. Todos os bairros e região metropolitana. Orçamento pelo WhatsApp.',
    resumo: 'Móveis, eletrodomésticos e pequenas cargas, com veículo do tamanho certo.',
    imagem: 'servico-frete',
    imagemAlt: 'Homem carregando um móvel para dentro de uma van de frete',
    intro: [
      'O frete é o serviço para quem precisa levar móveis, eletrodomésticos ou caixas de um endereço a outro sem contratar uma mudança completa. É a escolha certa para mudar um quarto, levar um sofá para o apartamento novo ou transportar compras grandes.',
      'Você manda o que precisa levar e os endereços, recebe o valor combinado antes e agenda o horário. No dia, os itens vão protegidos com manta e carregados com carrinho de carga.',
    ],
    inclui: [
      'Veículo adequado ao volume: utilitário, caminhonete ou caminhão baú',
      'Motorista e ajudante para carregar e descarregar, quando contratado',
      'Mantas e cintas para proteger e prender os móveis',
      'Carrinho de carga para itens pesados',
      'Desmontagem e montagem de móveis, sob pedido',
    ],
    quando: {
      titulo: 'Quando contratar um frete',
      itens: [
        'Mudança de quarto, kitnet ou estúdio',
        'Transporte de geladeira, fogão, máquina de lavar ou freezer',
        'Levar móveis para um depósito ou para a casa de familiares',
        'Transporte de estoque, materiais de escritório ou equipamentos de eventos',
      ],
    },
    dicas: {
      titulo: 'Como o frete sai mais rápido e mais barato',
      itens: [
        'Mande fotos dos itens maiores; o veículo é escolhido certo de primeira.',
        'Avise se há escada, elevador e onde o veículo pode parar.',
        'Esvazie gavetas e prateleiras antes da equipe chegar.',
        'Descongele geladeira e freezer na noite anterior.',
      ],
    },
    faq: [
      { p: 'Quanto custa um frete em Curitiba?', r: 'Depende da distância, do volume, do tipo de veículo, de escadas e do número de ajudantes. Com a lista de itens e os endereços, o valor é passado fechado antes de você confirmar.' },
      { p: 'O frete inclui ajudante?', r: 'Pode incluir. Você escolhe se o motorista carrega sozinho ou se vai com um ou mais ajudantes, conforme o peso e a quantidade de itens.' },
      { p: 'Fazem frete para a região metropolitana?', r: 'Sim. Atendemos todos os bairros de Curitiba e cidades como São José dos Pinhais, Pinhais, Colombo, Araucária, Fazenda Rio Grande, Almirante Tamandaré e Campo Largo.' },
    ],
    principal: true,
  },
  {
    slug: 'carreto',
    nome: 'Carreto',
    h1: 'Carreto em Curitiba',
    title: 'Carreto em Curitiba: transporte rápido de poucos itens',
    descricao: 'Carreto em Curitiba para poucos itens: geladeira, sofá, cama, compras de loja e da OLX. Atendimento rápido em todos os bairros. Peça orçamento pelo WhatsApp.',
    resumo: 'Poucos itens, atendimento rápido. Ideal para compras de loja e da OLX.',
    imagem: 'servico-carreto',
    imagemAlt: 'Duas vans brancas de carga estacionadas',
    intro: [
      'Carreto é o transporte rápido de poucos itens, feito com utilitário ou caminhonete. Serve para quando você precisa levar uma ou duas peças e não faz sentido pagar por um caminhão.',
      'É o serviço mais pedido para buscar compras de loja, móveis comprados na OLX ou no Facebook Marketplace e eletrodomésticos que a loja não entrega.',
    ],
    inclui: [
      'Utilitário ou caminhonete, conforme o tamanho dos itens',
      'Motorista que ajuda a carregar, ou ajudante extra se o item for pesado',
      'Proteção com manta e amarração',
      'Agendamento em horário combinado, muitas vezes no mesmo dia',
    ],
    quando: {
      titulo: 'Situações em que o carreto resolve',
      itens: [
        'Buscar um móvel comprado de particular na OLX ou no Marketplace',
        'Retirar compras em loja de móveis, eletro ou material de construção',
        'Levar um sofá, cama ou geladeira para outro endereço',
        'Descartar móveis velhos em um ponto de coleta',
      ],
    },
    dicas: {
      titulo: 'Antes de chamar o carreto',
      itens: [
        'Confirme as medidas do item e se ele passa pela porta e pelo elevador.',
        'Combine com o vendedor quem ajuda a descer o item, se for compra de particular.',
        'Tenha o endereço completo dos dois lados, com ponto de referência.',
      ],
    },
    faq: [
      { p: 'Qual a diferença entre carreto e frete?', r: 'O carreto é menor e mais rápido, para poucos itens em veículo pequeno. O frete atende volumes maiores, com caminhão e ajudantes. Na dúvida, descreva o que vai levar e indicamos o veículo certo.' },
      { p: 'Tem carreto no mesmo dia?', r: 'Muitas vezes sim, dentro de Curitiba e conforme a agenda. Quanto antes você chamar, maior a chance de encaixar no horário que precisa.' },
      { p: 'Vocês buscam móvel comprado na OLX?', r: 'Sim. Basta mandar o endereço do vendedor, o endereço de entrega e uma foto do item.' },
    ],
    principal: true,
  },
  {
    slug: 'mudanca-residencial',
    nome: 'Mudança residencial',
    h1: 'Mudança residencial em Curitiba',
    title: 'Mudança Residencial em Curitiba: casas e apartamentos',
    descricao: 'Mudança residencial em Curitiba com caminhão baú, equipe, proteção dos móveis, desmontagem e montagem. Orçamento fechado antes. Peça pelo WhatsApp.',
    resumo: 'Casa ou apartamento inteiro, com equipe, proteção e montagem dos móveis.',
    imagem: 'servico-mudanca-residencial',
    imagemAlt: 'Casal organizando caixas de mudança no apartamento novo',
    intro: [
      'Na mudança residencial, a equipe cuida do transporte da casa inteira: carregamento, proteção dos móveis, transporte e descarga no novo endereço. Você escolhe se quer incluir desmontagem, montagem e embalagem.',
      'Em Curitiba, a maior parte das mudanças envolve apartamento, com regras de condomínio, elevador de serviço e horários. Tudo isso é combinado antes, para não ter surpresa no dia.',
    ],
    inclui: [
      'Caminhão baú do tamanho do volume da casa',
      'Equipe para carregar e descarregar',
      'Proteção com manta e plástico em móveis e eletrodomésticos',
      'Desmontagem e montagem de camas, guarda-roupas e estantes',
      'Embalagem de louças e objetos frágeis, se você quiser',
    ],
    quando: {
      titulo: 'O que combinar antes da mudança',
      itens: [
        'Dia e horário permitidos pelos dois condomínios',
        'Reserva e proteção do elevador de serviço',
        'Onde o caminhão vai parar na saída e na chegada',
        'Quais móveis precisam ser desmontados ou içados',
      ],
    },
    dicas: {
      titulo: 'Para a mudança render',
      itens: [
        'Comece a embalar duas semanas antes, pelo que você usa menos.',
        'Etiquete cada caixa com o cômodo de destino.',
        'Separe documentos, remédios e carregadores numa mochila que vai com você.',
        'Evite o último e o primeiro dia do mês, quando a agenda é mais disputada.',
      ],
    },
    faq: [
      { p: 'Com quanto tempo de antecedência devo agendar?', r: 'O ideal é de uma a duas semanas, e mais cedo ainda se a data cair no fim ou no início do mês.' },
      { p: 'Quanto tempo leva uma mudança?', r: 'Um apartamento de um quarto costuma levar meio período. Casas maiores, com muitos móveis para desmontar, podem levar o dia inteiro. No orçamento você recebe uma previsão.' },
      { p: 'Preciso embalar tudo?', r: 'Não necessariamente. Você pode embalar sozinho e contratar só o transporte, ou incluir a embalagem no serviço.' },
    ],
    principal: true,
  },
  {
    slug: 'mudanca-comercial',
    nome: 'Mudança comercial',
    h1: 'Mudança comercial em Curitiba',
    title: 'Mudança Comercial em Curitiba: escritórios, lojas e clínicas',
    descricao: 'Mudança comercial em Curitiba para escritórios, lojas e clínicas, planejada para não parar o atendimento. Peça seu orçamento pelo WhatsApp.',
    resumo: 'Escritórios, lojas e clínicas, com planejamento para não parar o atendimento.',
    imagem: 'servico-mudanca-comercial',
    imagemAlt: 'Mesa de escritório moderna com notebook',
    intro: [
      'Numa empresa, cada hora parada custa dinheiro. A mudança comercial é planejada para acontecer no menor tempo possível, de preferência à noite ou no fim de semana, com cuidado redobrado com computadores, documentos e equipamentos.',
      'Caixas e móveis são identificados por setor, para que tudo seja descarregado e montado no lugar certo do novo endereço.',
    ],
    inclui: [
      'Levantamento do volume e dos itens sensíveis',
      'Mudança em horário alternativo, quando necessário',
      'Etiquetagem por setor ou sala',
      'Desmontagem e montagem de mesas, estações de trabalho e armários',
      'Transporte de equipamentos embalados e separados dos móveis pesados',
    ],
    quando: {
      titulo: 'Para quem é',
      itens: [
        'Escritórios e coworkings',
        'Lojas e pequenos comércios',
        'Clínicas, consultórios e salões',
        'Depósitos e pequenos estoques',
      ],
    },
    dicas: {
      titulo: 'Prepare a empresa para a mudança',
      itens: [
        'Faça backup dos dados antes de desligar os computadores.',
        'Etiquete os cabos de cada estação de trabalho.',
        'Confirme as regras dos prédios comerciais: muitos exigem cadastro da equipe e do veículo.',
      ],
    },
    faq: [
      { p: 'Dá para fazer a mudança no fim de semana?', r: 'Sim. Para empresas, esse costuma ser o melhor momento, porque evita parar o atendimento. É só informar no orçamento.' },
      { p: 'Vocês montam as estações de trabalho?', r: 'Sim. Mesas, estações e armários podem ser desmontados e montados no novo endereço.' },
      { p: 'Como funciona em prédio comercial?', r: 'Muitos prédios comerciais só liberam mudança em horários específicos e pedem cadastro prévio. Organizamos isso com a administração antes da data.' },
    ],
    principal: true,
  },
  {
    slug: 'montagem-de-moveis',
    nome: 'Montagem de móveis',
    h1: 'Desmontagem e montagem de móveis em Curitiba',
    title: 'Desmontagem e Montagem de Móveis para Mudança em Curitiba',
    descricao: 'Desmontagem e montagem de móveis para mudança em Curitiba: guarda-roupas, camas, mesas e estantes, com ferragens identificadas. Orçamento pelo WhatsApp.',
    resumo: 'Guarda-roupas, camas e estantes desmontados e montados no novo endereço.',
    imagem: 'servico-montagem-de-moveis',
    imagemAlt: 'Móvel de madeira com ferramentas e manual de montagem',
    intro: [
      'Guarda-roupas, camas, mesas e estantes grandes quase nunca passam inteiros por portas, escadas e elevadores. Desmontar e montar com cuidado evita peças quebradas, parafusos perdidos e móveis bambos depois da mudança.',
      'Os parafusos e ferragens de cada móvel vão em saquinhos identificados, e a montagem é feita no cômodo certo do novo endereço.',
    ],
    inclui: [
      'Desmontagem no endereço de origem',
      'Ferragens guardadas e identificadas por móvel',
      'Proteção das peças durante o transporte',
      'Montagem e nivelamento no novo endereço',
    ],
    quando: {
      titulo: 'Móveis que normalmente precisam ser desmontados',
      itens: [
        'Guarda-roupas e armários de várias portas',
        'Camas box baú, beliches e camas de casal com cabeceira',
        'Mesas grandes, racks e painéis de TV',
        'Estantes e escrivaninhas',
      ],
    },
    dicas: {
      titulo: 'Para a montagem sair perfeita',
      itens: [
        'Tire fotos do móvel montado antes da desmontagem.',
        'Guarde o manual, se ainda tiver.',
        'Móveis de MDF e MDP sofrem a cada remontagem; evite desmontar sem necessidade.',
      ],
    },
    faq: [
      { p: 'A montagem está inclusa na mudança?', r: 'Pode ser incluída. Informe no pedido quais móveis precisam ser desmontados e montados para o orçamento já considerar o tempo.' },
      { p: 'Vocês montam móvel novo, comprado na loja?', r: 'Combinamos caso a caso. O foco é a desmontagem e montagem de móveis dentro da mudança.' },
      { p: 'E se o móvel não passar pela porta?', r: 'Nesse caso pode ser necessário desmontar mais peças ou fazer o içamento pela janela ou sacada.' },
    ],
    principal: true,
  },
  {
    slug: 'icamento',
    nome: 'Içamento de móveis',
    h1: 'Içamento de móveis em Curitiba',
    title: 'Içamento de Móveis em Curitiba: quando o móvel não passa',
    descricao: 'Içamento de móveis em Curitiba para sofás, armários e geladeiras que não passam pela escada ou elevador. Avaliação do local antes. Orçamento pelo WhatsApp.',
    resumo: 'Para o sofá ou armário que não passa pela escada nem pelo elevador.',
    imagem: 'servico-icamento',
    imagemAlt: 'Carregador levando um sofá verde por um corredor',
    intro: [
      'Quando um sofá, armário ou eletrodoméstico grande não passa pela escada, pelo corredor ou pelo elevador, a saída é o içamento: subir ou descer o item pelo lado de fora do prédio, pela janela ou sacada.',
      'Antes de qualquer içamento, o local é avaliado por fotos ou visita: altura, abertura da janela, ponto de apoio e regras do condomínio.',
    ],
    inclui: [
      'Avaliação do local e do item',
      'Equipe e equipamentos de içamento com cordas',
      'Proteção do item e da fachada',
      'Combinação com o condomínio, quando necessário',
    ],
    quando: {
      titulo: 'Quando o içamento é necessário',
      itens: [
        'Sofás grandes e retráteis em prédios sem elevador',
        'Geladeiras duplex e armários que não cabem no elevador',
        'Escadas estreitas ou em caracol em sobrados',
      ],
    },
    dicas: {
      titulo: 'O que mandar para avaliar o içamento',
      itens: [
        'Fotos da janela ou sacada, por dentro e por fora',
        'Medidas do item e da abertura',
        'Andar e se há fiação ou árvores na frente',
      ],
    },
    faq: [
      { p: 'Todo móvel pode ser içado?', r: 'Não. Depende do peso, da altura e do espaço na janela ou sacada. Por isso o local é avaliado antes.' },
      { p: 'Precisa de autorização do condomínio?', r: 'Na maioria dos prédios, sim. Recomendamos avisar a administração com antecedência.' },
      { p: 'O içamento é cobrado à parte?', r: 'Sim, porque exige mais tempo, equipe e equipamento. O valor entra no orçamento depois da avaliação.' },
    ],
    principal: false,
  },
  {
    slug: 'embalagem',
    nome: 'Embalagem e proteção',
    h1: 'Embalagem para mudança em Curitiba',
    title: 'Embalagem para Mudança em Curitiba: louças e frágeis',
    descricao: 'Embalagem para mudança em Curitiba: louças, frágeis e eletrônicos protegidos com caixas, plástico-bolha e manta. Peça seu orçamento pelo WhatsApp.',
    resumo: 'Louças, frágeis e eletrônicos embalados do jeito certo.',
    imagem: 'servico-embalagem',
    imagemAlt: 'Pessoa fechando uma caixa de papelão com fita adesiva',
    intro: [
      'Embalar é a parte mais demorada da mudança, e a que mais causa quebra quando feita às pressas. Com o serviço de embalagem, louças, objetos frágeis e eletrônicos são embalados com o material e o método certos.',
      'Você pode contratar a embalagem completa da casa ou só dos itens frágeis.',
    ],
    inclui: [
      'Caixas, fita, plástico-bolha e papel',
      'Embalagem de louças, copos, taças e travessas',
      'Proteção de TVs, monitores e eletrônicos',
      'Caixas etiquetadas por cômodo',
    ],
    quando: {
      titulo: 'Vale contratar quando',
      itens: [
        'Você não tem tempo para embalar a casa',
        'Há muita louça, cristais ou objetos de valor sentimental',
        'A mudança é para outra cidade, com viagem mais longa',
      ],
    },
    dicas: {
      titulo: 'Se for embalar por conta própria',
      itens: [
        'Pratos vão em pé, como discos, nunca deitados.',
        'Caixas pequenas para itens pesados, grandes para leves.',
        'Escreva FRÁGIL e o cômodo em dois lados da caixa.',
      ],
    },
    faq: [
      { p: 'O material de embalagem está incluso?', r: 'No serviço de embalagem, sim. Se você for embalar sozinho, também é possível pedir só as caixas e o material.' },
      { p: 'Dá para embalar só os frágeis?', r: 'Sim. Muita gente embala roupas e livros sozinha e deixa só louças e eletrônicos para a equipe.' },
      { p: 'Quando a equipe embala?', r: 'Normalmente no dia anterior ou no próprio dia da mudança, conforme o volume.' },
    ],
    principal: false,
  },
];

export const PRINCIPAIS = SERVICOS.filter((s) => s.principal);
export const servico = (slug: string) => SERVICOS.find((s) => s.slug === slug)!;
