// agenda.js
const eventos = [
  {
    data: "2025-09-26",
    diaSemana: "Sexta-feira",
    horario: "20:00h",
    nomeBatalha: "Batalha DD3 - Setembro",
    cidade: "Sertãozinho-SP",
    status: "Av. Hideo Takada - Pista de Skate da COHAB 3",
    linkInstagram: "https://www.instagram.com/dueloda3/"
  },
  {
    data: "2025-09-26",
    diaSemana: "Sexta-feira",
    horario: "20:00h",
    nomeBatalha: "Conexão de Rimas vs Batalha da Vinte",
    cidade: "São Joaquim da Barra - SP",
    status: "Contra",
    linkInstagram: "https://www.instagram.com/conexao_de_rima"
  },
  {
    data: "2025-09-27",
    diaSemana: "Sábado",
    horario: "19:00h",
    nomeBatalha: "Batalha H2S #22",
    cidade: "São Carlos - SP",
    status: "Edição: Conhecimento",
    linkInstagram: "https://www.instagram.com/hiphopsalva016/"
  },
  {
    data: "2025-09-27",
    diaSemana: "Sábado",
    horario: "20:00h",
    nomeBatalha: "Batalha da Vinte vs Conexão de Rimas",
    cidade: "Orlândia - SP",
    status: "Contra",
    linkInstagram: "https://www.instagram.com/bdvinte_"
  },
  {
    data: "2025-09-28",
    diaSemana: "Domingo",
    horario: "19:00h",
    nomeBatalha: "Batalha do Morro",
    cidade: "Morro Agudo - SP",
    status: "Batalha de Referência",
    linkInstagram: "https://www.instagram.com/batalhadomorro016"
  },
  {
    data: "2025-09-29",
    diaSemana: "Segunda-feira",
    horario: "20:00h",
    nomeBatalha: "Batalha Das Estações #32",
    cidade: "Araraquara - SP",
    status: "Edição 30 Segundos - Praça Santa Cruz",
    linkInstagram: "https://www.instagram.com/batalha_das_estacoes"
  },
  {
    data: "2025-10-01",
    diaSemana: "Quarta-feira",
    horario: "19:00h",
    nomeBatalha: "Batalha da Alcatéia 281ª Edição",
    cidade: "São Carlos - SP",
    status: "Bate e volta - Praça Brasil",
    linkInstagram: "https://www.instagram.com/bdalc016"
  },
  {
    data: "2025-10-01",
    diaSemana: "Quarta-feira",
    horario: "19:00h",
    nomeBatalha: "Batalha do Chavão 20ª Edição",
    cidade: "Ibaté - SP",
    status: "Batalha de Sangue | Vila Santa Terezinha",
    linkInstagram: "https://www.instagram.com/batalhadomp016"
  },
  {
    data: "2025-10-01",
    diaSemana: "Quarta-feira",
    horario: "19:30h",
    nomeBatalha: "Batalha Nova Era 108ª Edição",
    cidade: "Ribeirão Preto - SP",
    status: "Batalha de Dupla",
    linkInstagram: "https://www.instagram.com/batalhanovaerarp"
  },
  {
    data: "2025-10-02",
    diaSemana: "Quinta-feira",
    horario: "19:00h",
    nomeBatalha: "Batalha Sangue na 7",
    cidade: "Ribeirão Preto - SP",
    status: "DJ na Praça + 1ª Batalha de TAG",
    linkInstagram: "https://www.instagram.com/batalhasn7"
  },
  {
    data: "2025-10-03",
    diaSemana: "Sexta-feira",
    horario: "20:00h",
    nomeBatalha: "Conexão de Rimas 20ª EDT",
    cidade: "São Joaquim da Barra - SP",
    status: "Edição Funk - Pista de Skate SJB",
    linkInstagram: "https://www.instagram.com/conexao_de_rima"
  },
  {
    data: "2025-10-08",
    diaSemana: "Quarta-feira",
    horario: "19:30h",
    nomeBatalha: "Batalha Nova Era 109ª Edição",
    cidade: "Ribeirão Preto - SP",
    status: "Bate e Volta",
    linkInstagram: "https://www.instagram.com/batalhanovaerarp"
  },
  {
    data: "2025-10-10",
    diaSemana: "Sexta-feira",
    horario: "20:00h",
    nomeBatalha: "Conexão de Rimas 21ª EDT",
    cidade: "São Joaquim da Barra - SP",
    status: "Edição Reggae - Pista de Skate SJB",
    linkInstagram: "https://www.instagram.com/conexao_de_rima"
  },
  {
    data: "2025-10-11",
    diaSemana: "Sábado",
    horario: "20:00h",
    nomeBatalha: "Batalha da Vinte 43ª EDT",
    cidade: "Orlândia - SP",
    status: "BoomBap - Praça Mário Furtado",
    linkInstagram: "https://www.instagram.com/bdvinte_"
  },
  {
    data: "2025-10-15",
    diaSemana: "Quarta-feira",
    horario: "19:30h",
    nomeBatalha: "Batalha Nova Era 110ª Edição",
    cidade: "Ribeirão Preto - SP",
    status: "Batalha de Tema",
    linkInstagram: "https://www.instagram.com/batalhanovaerarp"
  },
  {
    data: "2025-10-17",
    diaSemana: "Sexta-feira",
    horario: "19:00h",
    nomeBatalha: "Batalha dos Pombos",
    cidade: "São Carlos - SP",
    status: "Edição Halloween (Duplas) - Praça Coronel Salles",
    linkInstagram: "https://www.instagram.com/batalha_dospombos"
  },
  {
    data: "2025-10-17",
    diaSemana: "Sexta-feira",
    horario: "20:00h",
    nomeBatalha: "Conexão de Rimas 22ª EDT",
    cidade: "São Joaquim da Barra - SP",
    status: "Edição Duplas - Pista de Skate SJB",
    linkInstagram: "https://www.instagram.com/conexao_de_rima"
  },
  {
    data: "2025-10-18",
    diaSemana: "Sábado",
    horario: "19:00h",
    nomeBatalha: "Batalha dos Brodi 19ª Edição",
    cidade: "Taquaritinga - SP",
    status: "Solo - Praça do Balão",
    linkInstagram: "https://www.instagram.com/batalhadosbrodi"
  },
  {
    data: "2025-10-18",
    diaSemana: "Sábado",
    horario: "20:00h",
    nomeBatalha: "Batalha Leal",
    cidade: "Franca - SP",
    status: "Edição 40s - Praça de Esportes City Petropolis",
    linkInstagram: "https://www.instagram.com/batalha.leal"
  },
  {
    data: "2025-10-22",
    diaSemana: "Quarta-feira",
    horario: "19:30h",
    nomeBatalha: "Batalha Nova Era 111ª Edição",
    cidade: "Ribeirão Preto - SP",
    status: "Desafio - Fechamento de Ranking",
    linkInstagram: "https://www.instagram.com/batalhanovaerarp"
  },
  {
    data: "2025-10-24",
    diaSemana: "Sexta-feira",
    horario: "20:00h",
    nomeBatalha: "Conexão de Rimas 23ª EDT",
    cidade: "São Joaquim da Barra - SP",
    status: "Formato Misto - Pista de Skate SJB",
    linkInstagram: "https://www.instagram.com/conexao_de_rima"
  },
  {
    data: "2025-10-25",
    diaSemana: "Sábado",
    horario: "19:00h",
    nomeBatalha: "Batalha dos Brodi",
    cidade: "Taquaritinga - SP",
    status: "Especial Halloween (Duplas) - Praça do Balão",
    linkInstagram: "https://www.instagram.com/batalhadosbrodi"
  },
  {
    data: "2025-10-25",
    diaSemana: "Sábado",
    horario: "20:00h",
    nomeBatalha: "Batalha da Vinte",
    cidade: "Orlândia - SP",
    status: "Edição de Temas (Halloween) - Praça Mário Furtado",
    linkInstagram: "https://www.instagram.com/bdvinte_"
  },
  {
    data: "2025-10-31",
    diaSemana: "Sexta-feira",
    horario: "20:00h",
    nomeBatalha: "Conexão de Rimas 24ª EDT",
    cidade: "São Joaquim da Barra - SP",
    status: "Especial Halloween - Pista de Skate SJB",
    linkInstagram: "https://www.instagram.com/conexao_de_rima"
  }
];