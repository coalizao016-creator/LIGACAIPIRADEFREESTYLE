// agenda.js
const eventos = [
  // ** EVENTOS DE 16/10 (Quinta-feira) **
  {
    data: "2025-10-16",
    diaSemana: "Quinta-feira",
    horario: "19:00h",
    nomeBatalha: "Sangue na 7",
    cidade: "Ribeirão Preto - SP",
    status: "Edição Bate e Volta | Praça Sete de Setembro",
    linkInstagram: null
  },
  {
    data: "2025-10-16",
    diaSemana: "Quinta-feira",
    horario: "19:00h",
    nomeBatalha: "Batalha dos Pombos",
    cidade: "São Carlos - SP",
    status: "Edição Halloween (Duplas) | Praça Coronel Salles",
    linkInstagram: "https://www.instagram.com/batalha_dospombos"
  },
  {
    data: "2025-10-16",
    diaSemana: "Quinta-feira",
    horario: "19:30h",
    nomeBatalha: "Batalha dos Nômades 173ª Edição",
    cidade: "Franca - SP",
    status: "Formato Bate e Volta | Praça de Esportes - Residencial Ana Dorothea",
    linkInstagram: null
  },

  // ** EVENTOS DE 17/10 (Sexta-feira) **
  {
    data: "2025-10-17",
    diaSemana: "Sexta-feira",
    horario: "20:00h",
    nomeBatalha: "Conexão de Rimas 22ª EDT",
    cidade: "São Joaquim da Barra - SP",
    status: "Edição Duplas - Pista de Skate SJB",
    linkInstagram: "https://www.instagram.com/conexao_de_rima"
  },

  // ** EVENTOS DE 18/10 (Sábado) **
  {
    data: "2025-10-18",
    diaSemana: "Sábado",
    horario: "18:00h",
    nomeBatalha: "BATALHA DA CAOS 25ª EDIÇÃO",
    cidade: "Araraquara - SP",
    status: "Duplas Street Fighter | Praça Santa Cruz",
    linkInstagram: null
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

  // ** EVENTOS DE 20/10 (Segunda-feira) **
  {
    data: "2025-10-20",
    diaSemana: "Segunda-feira",
    horario: "20:00h",
    nomeBatalha: "Batalha Das Estações #35",
    cidade: "Araraquara - SP",
    status: "Trap Bate-Volta Desafio (2x pontos) | Praça Santa Cruz",
    linkInstagram: null
  },

  // ** EVENTOS DE 21/10 (Terça-feira) **
  {
    data: "2025-10-21",
    diaSemana: "Terça-feira",
    horario: "19:30h",
    nomeBatalha: "Batalha da UBS",
    cidade: "Local não informado - SP",
    status: "45 segundos | Praça do Japão",
    linkInstagram: null
  },

  // ** EVENTOS DE 22/10 (Quarta-feira) **
  {
    data: "2025-10-22",
    diaSemana: "Quarta-feira",
    horario: "19:00h",
    nomeBatalha: "BATALHA DO CHAVÃO 21ª EDIÇÃO",
    cidade: "Ibaté - SP",
    status: "Batalha de Sangue X 1 | R. Dr. Teixeira de Barros, 604 - Vila Santa Terezinha",
    linkInstagram: "https://www.instagram.com/batalhadomp016"
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

  // ** EVENTOS DE 24/10 (Sexta-feira) **
  {
    data: "2025-10-24",
    diaSemana: "Sexta-feira",
    horario: "19:30h",
    nomeBatalha: "Coalizão 016 - Halloween Edition",
    cidade: "Ribeirão Preto - SP",
    status: "Edição Especial Halloween | Praça Francisco Schmidt",
    linkInstagram: "https://instagram.com/coalizao016"
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

  // ** EVENTOS DE 25/10 (Sábado) **
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
    data: "2025-10-25",
    diaSemana: "Sábado",
    horario: "20:30h",
    nomeBatalha: "Batalha dos Brodi",
    cidade: "Taquaritinga - SP",
    status: "Especial Halloween (Duplas - Street Fighter) - Praça do Balão",
    linkInstagram: "https://www.instagram.com/batalhadosbrodi"
  },

  // ** EVENTOS DE 26/10 (Domingo) **
  {
    data: "2025-10-26",
    diaSemana: "Domingo",
    horario: "16:00h",
    nomeBatalha: "Batalha do Educa 3ª Edição - Halloween",
    cidade: "R. Camilo de Mattos,88 (próx. Ao Bosque)",
    status: "Temática (4/4)",
    linkInstagram: null
  },
  {
    data: "2025-10-26",
    diaSemana: "Domingo",
    horario: "17:30h",
    nomeBatalha: "RAP NA ALTA",
    cidade: "Matão - SP",
    status: "Bate e Volta | Ginásio de Esportes Décimo Chiozzini (Pista de Skate)",
    linkInstagram: null
  },
  {
    data: "2025-10-26",
    diaSemana: "Domingo",
    horario: "18:00h",
    nomeBatalha: "Batalha do Diamante 💎",
    cidade: "Patrocínio Paulista - SP",
    status: "Batalha de Dupla | Quadra bairro Jardim Glória",
    linkInstagram: null
  },
  {
    data: "2025-10-26",
    diaSemana: "Domingo",
    horario: "19:00h",
    nomeBatalha: "BATALHA SO HALLOWEEN",
    cidade: "Sales Oliveira - SP",
    status: "Edição Individual Desafio - Bate e volta | Praça Santa Rita",
    linkInstagram: null
  },

  // ** EVENTOS DE 28/10 (Terça-feira) **
  {
    data: "2025-10-28",
    diaSemana: "Terça-feira",
    horario: "19:30h",
    nomeBatalha: "Batalha da UBS",
    cidade: "Local não informado - SP",
    status: "Bate e volta | Praça do Japão",
    linkInstagram: null
  },

  // ** EVENTOS DE 31/10 (Sexta-feira) **
  {
    data: "2025-10-31",
    diaSemana: "Sexta-feira",
    horario: "20:00h",
    nomeBatalha: "Conexão de Rimas 24ª EDT",
    cidade: "São Joaquim da Barra - SP",
    status: "Especial Halloween - Pista de Skate SJB",
    linkInstagram: "https://www.instagram.com/conexao_de_rima"
  },

  // ** NOVOS EVENTOS ADICIONADOS **
  
  // ** EVENTOS DE 05/11 (Quarta-feira) **
  {
    data: "2025-11-05",
    diaSemana: "Quarta-feira", // Dia da semana de 05/11/2025 é Quarta-feira
    horario: "19:00h",
    nomeBatalha: "BATALHA DO CHAVÃO 24ª EDIÇÃO",
    cidade: "Ibaté - SP",
    status: "Batalha de Sangue X 1 | R. Dr. Teixeira de Barros, 604 - Vila Santa Terezinha",
    linkInstagram: null // Informação não fornecida
  },
  
  // ** EVENTOS DE 07/11 (Sexta-feira) **
  {
    data: "2025-11-07",
    diaSemana: "Sexta-feira", // Dia da semana de 07/11/2025 é Sexta-feira
    horario: "19:00h",
    nomeBatalha: "Coalizão 016",
    cidade: "Ribeirão Preto - SP",
    status: "Formato FMS | Praça Francisco Schmidt",
    linkInstagram: "https://instagram.com/coalizao016" // Usando o link já existente
  },

  // ** EVENTOS DE 09/11 (Domingo) **
  {
    data: "2025-11-09",
    diaSemana: "Domingo", // Dia da semana de 09/11/2025 é Domingo
    horario: "17:30h",
    nomeBatalha: "BATALHA DD3 - Edição Evento 3R's",
    cidade: "Sertãozinho - SP",
    status: "Pista de Skate da C3",
    linkInstagram: null
  },

  // ** EVENTOS DE 16/11 (Domingo) **
  {
    data: "2025-11-16",
    diaSemana: "Domingo", // Dia da semana de 16/11/2025 é Domingo
    horario: "17:00h",
    nomeBatalha: "RAP NA ALTA",
    cidade: "Matão - SP",
    status: "CASA PIPA",
    linkInstagram: null // Informação não fornecida
  }
];