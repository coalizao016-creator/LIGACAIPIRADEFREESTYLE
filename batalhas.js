const batalhas = [
    {
      codigo: "BAT001",
      nome: "Coalizão - 016",
      cidade: "Ribeirão Preto - SP",
      dia: "Sexta-feira",
      coords: [-21.171696, -47.813301],
      rede: "https://instagram.com/coalizao016",
      descricao: "Quinzenalmente as sextas-feiras a Praça Francisco Shimidt em Ribeirão Preto reune MC's de diversas cidades da região em guerra lírica e celebração da cultura hip.hop.",
      campeoes_historicos: [""],
      redes_sociais_links: [
        { nome: "Instagram", url: "https://instagram.com/coalizao016" },
        { nome: "YouTube", url: "https://www.youtube.com/@Coalizao016" },
        { nome: "TikTok", url: "https://www.tiktok.com/@Coalizao016" }
      ]
    },
    {
      codigo: "BAT002",
      nome: "Batalha da Vinte",
      cidade: "Orlândia - SP",
      dia: "Sábado",
      coords: [-20.721611, -47.885322],
      rede: "https://www.instagram.com/bdvinte_",
      descricao: "",
      campeoes_historicos: ["Segalla"],
      redes_sociais_links: [
        { nome: "Instagram", url: "https://www.instagram.com/bdvinte_" }
      ]
    },
    {
      codigo: "BAT003",
      nome: "BATALHA DA SO",
      cidade: "Sales Oliveira - SP",
      dia: "Domingo",
      coords: [-20.764994, -47.846214],
      rede: "https://www.instagram.com/batalhas.o_/",
      descricao: "",
      campeoes_historicos: ["Segalla"],
      redes_sociais_links: [
        { nome: "Instagram", url: "https://www.instagram.com/batalhas.o_" }
      ]
    },
    {
      codigo: "BAT004",
      nome: "Conexão de Rimas",
      cidade: "São Joaquim da Barra - SP",
      dia: "Sexta-feira",
      coords: [-20.583211, -47.866423],
      rede: "https://www.instagram.com/conexao_de_rima",
      descricao: "",
      campeoes_historicos: [""],
      redes_sociais_links: [
        { nome: "Instagram", url: "https://www.instagram.com/conexao_de_rima" }
      ]
    },
    {
      codigo: "BAT005",
      nome: "Batalha do um porcento",
      cidade: "Monte Alto - SP",
      dia: "Domingo",
      coords: [-21.266864, -48.476046],
      rede: "https://www.instagram.com/cacarecocla/",
      descricao: "",
      campeoes_historicos: [],
      redes_sociais_links: [ 
        { nome: "Instagram", url: "https://www.instagram.com/batalhadomorro016" }
      ]
    },
    {
      codigo: "BAT006",
      nome: "DUELO DA 3 - DD3",
      cidade: "Sertãozinho - SP",
      dia: "Sexta-feira",
      coords: [-21.130230, -48.013205],
      rede: "https://www.instagram.com/dueloda3/",
      descricao: "",
      campeoes_historicos: [],
      redes_sociais_links: [ 
        { nome: "Instagram", url: "https://www.instagram.com/dueloda3/" }
      ]
    },
    {
      codigo: "BAT007",
      nome: "BATALHA DO MORRO",
      cidade: "Morro Agudo - SP",
      dia: "Domingo",
      coords: [-20.733057, -48.058531],
      rede: "https://www.instagram.com/batalhadomorro016",
      descricao: "",
      campeoes_historicos: [],
      redes_sociais_links: [
        { nome: "Instagram", url: "https://www.instagram.com/batalhadomorro016" }
      ]
    },
    {
      codigo: "BAT008",
      nome: "Batalha H2S",
      cidade: "São Carlos - SP",
      dia: "Sábado",
      coords: [-21.999014, -47.911788],
      rede: "https://www.instagram.com/hiphopsalva016/",
      descricao: "O Hip Hop Salva é um coletivo atuante desde 2018 em São Carlos (SP), que utiliza a cultura como resposta à violência contra a juventude preta e periférica. Promove os cinco elementos do Hip Hop por meio de oficinas formativas, ocupações culturais em áreas de alta vulnerabilidade, festivais, shows, mostras e batalhas de rima. Os eventos são gratuitos, acessíveis e realizados em espaços públicos, com prioridade para artistas negros e LGBTQIA+, além de parcerias com produtores locais e política “Lixo Zero”. Já formou mais de 450 pessoas, gerou trabalho e renda para diversos artistas e é reconhecido por editais nacionais, consolidando-se como importante articulador cultural da região.",
      campeoes_historicos: [],
      redes_sociais_links: [
        { nome: "Instagram", url: "https://www.instagram.com/hiphopsalva016" },
        { nome: "YouTube", url: "https://youtube.com/@hiphopsalva" },
        { nome: "TikTok", url: "https://www.tiktok.com/@hiphopsalva016" }
      ]
    },
    {
      codigo: "BAT009",
      nome: "BATALHA DA FONTE",
      cidade: "Araraquara - SP",
      dia: "Domingo",
      coords: [-21.774665, -48.172065],
      rede: "https://www.instagram.com/batalhafonte/",
      descricao: "",
      campeoes_historicos: [],
      redes_sociais_links: [ 
        { nome: "Instagram", url: "https://www.instagram.com/batalhafonte/" }
      ]
    },
    {
      codigo: "BAT010",
      nome: "Rap Na Alta",
      cidade: "Matão - SP",
      dia: "Domingo",
      coords: [-21.610132, -48.361532],
      rede: "https://www.instagram.com/rap.naalta/",
      descricao: "",
      campeoes_historicos: [],
      redes_sociais_links: [ 
        { nome: "Instagram", url: "https://www.instagram.com/rap.naalta/" }
      ]
    },
    {
      codigo: "BAT011",
      nome: "Batalha do Raio",
      cidade: "Araraquara - SP",
      dia: "Domingo",
      coords: [-21.782919, -48.179275],
      rede: "https://www.instagram.com/batalhadoraio",
      descricao: "",
      campeoes_historicos: [],
      redes_sociais_links: [
        { nome: "Instagram", url: "https://www.instagram.com/batalhadoraio" }
      ]
    },
    {
      codigo: "BAT012",
      nome: "Batalha do Bença",
      cidade: "Ribeirão Preto - SP",
      dia: "Segunda-feira",
      coords: [-21.212927, -47.824989],
      rede: "https://www.instagram.com/batalhadobenca",
      descricao: "",
      campeoes_historicos: [],
      redes_sociais_links: [
        { nome: "Instagram", url: "https://www.instagram.com/batalhadobenca" }
      ]
    },
    {
      codigo: "BAT013",
      nome: "Batalha do Pico",
      cidade: "Ribeirão Preto - SP",
      dia: "Domingo",
      coords: [-21.144083, -47.854573],
      rede: "https://www.instagram.com/batalhadopicorp/",
      descricao: "",
      campeoes_historicos: [],
      redes_sociais_links: [
        { nome: "Instagram", url: "https://www.instagram.com/batalhadopicorp/" }
      ]
    },
    {
      codigo: "BAT014",
      nome: "Batalha dos Brodi",
      cidade: "Taquaritinga - SP",
      dia: "Sábado",
      coords: [-21.4064, -48.5058], 
      rede: "https://www.instagram.com/batalhadosbrodi",
      descricao: "Quinzenalmente aos sábados na praça do balão em Taquaritinga-SP trazendo um formato mais descontraído onde o mc sorteado pode escolher desafiar ou sortear o outro mc que irá contra, ao final de toda batalha ocorrem rodas de conversa e festividade.",
      campeoes_historicos: [],
      redes_sociais_links: [
        { nome: "Instagram", url: "https://www.instagram.com/batalhadosbrodi" }
      ]
    },
    {
      codigo: "BAT015",
      nome: "Batalha Sangue na 7",
      cidade: "Ribeirão Preto - SP",
      dia: "Quinta-feira",
      coords: [-21.182528, -47.805190], 
      rede: "https://www.instagram.com/batalhasn7",
      descricao: "",
      campeoes_historicos: [],
      redes_sociais_links: [
        { nome: "Instagram", url: "https://www.instagram.com/batalhasn7" }
      ]
    },
    {
      codigo: "BAT016",
      nome: "Batalha Do Diamante",
      cidade: "Patrocínio Paulista - SP",
      dia: "Domingo",
      coords: [-20.645917, -47.275330],
      rede: "https://www.instagram.com/batalha_do_diamante_",
      descricao: "Batalha especializada em garimpo de artistas, as joias raras da cena interiorana! Já vai para sua 3ª edição e sempre traz o hip-hop vivo e seus 4 elementos. Da cidade do garimpo pro mundo !",
      campeoes_historicos: ["Tyrano", "Doctor L"],
      redes_sociais_links: [
        { nome: "Instagram", url: "https://www.instagram.com/batalha_do_diamante_" }
      ]
    },
    {
      codigo: "BAT017",
      nome: "Batalha Leal",
      cidade: "Franca - SP",
      dia: "Domingo",
      coords: [-20.479452, -47.397541],
      rede: "https://www.instagram.com/batalha.leal",
      descricao: "A Batalha Leal é a unica batalha que ocorre na zona norte de Franca com o objetivo de mostrar o poder dos artistas locais e quebrar a ideia que essa zona é a mais 'favelada' da cidade trazendo eventos fodas.",
      campeoes_historicos: ["Nevas", "Biné"],
      redes_sociais_links: [
        { nome: "Instagram", url: "https://www.instagram.com/batalha.leal" }
      ]
    },
    {
      codigo: "BAT018",
      nome: "Batalha Nova Era",
      cidade: "Ribeirão Preto - SP",
      dia: "Quarta-feira",
      coords: [-21.1783, -47.8105],
      rede: "https://www.instagram.com/batalhanovaerarp",
      descricao: "A Batalha Nova Era é um evento de batalhas de rima freestyle que acontece toda quarta-feira na Praça XV de Novembro, no centro de Ribeirão Preto (SP). É um ponto de encontro importante para a cultura hip-hop local.",
      campeoes_historicos: ["Jimmy", "Bubba"],
      redes_sociais_links: [
        { nome: "Instagram", url: "https://www.instagram.com/batalhanovaerarp" }
      ]
    },
    {
      codigo: "BAT019",
      nome: "Batalha dos Nômades",
      cidade: "Franca - SP",
      dia: "Quinta-feira",
      coords: [-20.553615, -47.359490],
      rede: "https://www.instagram.com/batalhadosnomades016/",
      descricao: "Desde 2018, a Batalha dos Nômades vem ocupando espaços e fazendo história na cena do freestyle francano. Nascida com o espírito livre e resistência na essência, a Nômades não é só uma roda de rima — é movimento, é cultura, é vivência trocada verso a verso.",
      campeoes_historicos: ["Tyrano", "Vinicin", "Doctor L"],
      redes_sociais_links: [
        { nome: "Instagram", url: "https://www.instagram.com/batalhadosnomades016/" }
      ]
    },
    {
      codigo: "BAT020",
      nome: "Batalha dos Chavões",
      cidade: "Ibaté - SP",
      dia: "Quarta-feira",
      coords: [-21.955, -47.9969],
      rede: "https://www.instagram.com/batalhadomp016",
      descricao: "A primeira e única batalha de Ibaté 🔥🔥🔥",
      campeoes_historicos: ["Duke mc", "Ph mc", "Puma mc"],
      redes_sociais_links: [
        { nome: "Instagram", url: "https://www.instagram.com/batalhadomp016" }
      ]
    },
    {
      codigo: "BAT021",
      nome: "Batalha Das Estações",
      cidade: "Araraquara - SP",
      dia: "Segunda-feira",
      coords: [-21.7891, -48.1760],
      rede: "https://www.instagram.com/batalha_das_estacoes",
      descricao: "Batalha underground que promove eventos semanais com gravação e criação de conteúdo para artistas.",
      campeoes_historicos: ["Jhow", "Gomex", "Akira"],
      redes_sociais_links: [
        { nome: "Instagram", url: "https://www.instagram.com/batalha_das_estacoes" }
      ]
    },
    {
      codigo: "BAT022",
      nome: "Batalha dos Pombos",
      cidade: "São Carlos - SP",
      dia: "Quinta-feira",
      coords: [-22.0178, -47.8912],
      rede: "https://www.instagram.com/batalha_dospombos",
      descricao: "Movimento cultural de referência desde 2019, com mais de 200 edições, sede do regional CPBMC 2023 e presença em diversos eventos e ações socioculturais.",
      campeoes_historicos: [],
      redes_sociais_links: [
        { nome: "Instagram", url: "https://www.instagram.com/batalha_dospombos" }
      ]
    },
    {
      codigo: "BAT023",
      nome: "Batalha da Alcatéia",
      cidade: "São Carlos - SP",
      dia: "Quarta-feira",
      coords: [-22.0082, -47.8860],
      rede: "https://www.instagram.com/bdalc016",
      descricao: "Há 8 anos na Praça Brasil, é o coletivo de hiphop mais antigo em atividade na cidade, organizando batalhas, festivais, sarais e slams.",
      campeoes_historicos: ["Sonic, Stevan "],
      redes_sociais_links: [
        { nome: "Instagram", url: "https://www.instagram.com/bdalc016" }
      ]
    },
    {
      codigo: "BAT024",
      nome: "BDK Freestyle",
      cidade: "Brodowski - SP",
      dia: "Sábado, Domingo",
      coords: [-21.0003, -47.6599],
      rede: "https://www.instagram.com/bdkfreestyle_",
      descricao: "Batalha de rimas que agita os fins de semana em Brodowski.",
      campeoes_historicos: ["Tyrano"],
      redes_sociais_links: [
        { nome: "Instagram", url: "https://www.instagram.com/bdkfreestyle_" }
      ]
    },
    {
      codigo: "BAT025",
      nome: "Batalha da Ressaca",
      cidade: "Araraquara - SP",
      dia: "Terça-feira",
      coords: [-21.7893, -48.1762],
      rede: "https://www.instagram.com/batalhadaressaca",
      descricao: "Batalha de rimas que acontece às terças-feiras na Praça Santa Cruz.",
      campeoes_historicos: [],
      redes_sociais_links: [
        { nome: "Instagram", url: "https://www.instagram.com/batalhadaressaca" }
      ]
    },
    {
      codigo: "BAT026",
      nome: "Batalha dos Forasteiros",
      cidade: "Araraquara - SP",
      dia: "Sexta-feira",
      coords: [-21.8015, -48.1775],
      rede: "https://www.instagram.com/batalha_dos_forasteir0s_of",
      descricao: "Batalha de rimas que acontece às sextas-feiras na Praça do Faveral.",
      campeoes_historicos: [],
      redes_sociais_links: [
        { nome: "Instagram", url: "https://www.instagram.com/batalha_dos_forasteir0s_of" }
      ]
    },
    {
      codigo: "BAT027",
      nome: "Batalha da UBS",
      cidade: "Ribeirão Preto - SP",
      dia: "Terça-feira",
      coords: [-21.1923, -47.8285],
      rede: "",
      descricao: "Batalha de rimas que acontece às terças-feiras na Praça do Japão, na Vila Virgínia.",
      campeoes_historicos: ["Bubba", "Guri", "Killua"],
      redes_sociais_links: []
    },
    {
      codigo: "BAT028",
      nome: "Boom Battle",
      cidade: "Araraquara - SP",
      dia: "Sábado",
      coords: [-21.7889, -48.1758],
      rede: "https://www.instagram.com/boombattle016",
      descricao: "Com 8 anos de história e mais de 170 edições, é uma das batalhas mais antigas de Araraquara, promovendo cultura em ruas, escolas e universidades. Acontece mensalmente na Praça Santa Cruz.",
      campeoes_historicos: ["Jhow", "Willião", "Tvz"],
      redes_sociais_links: [
        { nome: "Instagram", url: "https://www.instagram.com/boombattle016" }
      ]
    },
    {
      codigo: "BAT029",
      nome: "Batalha da CAOS",
      cidade: "Araraquara - SP",
      dia: "Sábado",
      coords: [-21.7892, -48.1759],
      rede: "https://www.instagram.com/batalhadacaos",
      descricao: "A CAOS é um coletivo que organiza o movimento pela cidade com foco em conhecimento, diversidade e eventos sócio-educativos ao lado da roda cultural na Praça Santa Cruz.",
      campeoes_historicos: ["Jhow"],
      redes_sociais_links: [
        { nome: "Instagram", url: "https://www.instagram.com/batalhadacaos" }
      ]
    },
    {
      codigo: "BAT030",
      nome: "Batalha do Educa",
      cidade: "Ribeirão Preto - SP",
      dia: "Domingo",
      coords: [-21.1635, -47.8035],
      rede: "https://www.instagram.com/batalhadoeduca",
      descricao: "Batalha do Educa, onde o foco da rima é a educação!!",
      campeoes_historicos: ["Tyrano"],
      redes_sociais_links: [
        { nome: "Instagram", url: "https://www.instagram.com/batalhadoeduca" }
      ]
    },
    {
      codigo: "BAT031",
      nome: "Batalha na Arena",
      cidade: "Batatais - SP",
      dia: "Domingo",
      coords: [-20.885593, -47.584511],
      rede: "https://www.instagram.com/batalha.na.arena/",
      descricao: "Movimento Hip Hop, artístico e cultural em Batatais-SP.",
      campeoes_historicos: [],
      redes_sociais_links: [
        { nome: "Instagram", url: "https://www.instagram.com/batalha.na.arena/" }
      ]
    }
];