// agenda.js
const eventos = [
  // ** EVENTOS DE 03/10 (Sexta-feira) - EM CURSO OU PRÓXIMOS **
  {
    data: "2025-10-03",
    diaSemana: "Sexta-feira",
    horario: "19:55h",
    nomeBatalha: "Batalha dos Forasteiros Ed. 8°",
    cidade: "Araraquara - SP",
    status: "Formato 45 segundos | Praça Santa Cruz",
    linkInstagram: null
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
  // ** NOVOS EVENTOS DE 04/10 (Sábado) **
  {
    data: "2025-10-04",
    diaSemana: "Sábado",
    horario: "18:00h",
    nomeBatalha: "Batalha do Educa 🧠 (2ª Edição)",
    cidade: "Ribeirão Preto - SP",
    status: "Semana da Educação - Bate e Volta - R. Camilo de Mattos, 88",
    linkInstagram: null
  },
  // ** EVENTOS DE 05/10 (Domingo) **
  {
    data: "2025-10-05",
    diaSemana: "Domingo",
    horario: "16:00h",
    nomeBatalha: "BDK Freestyle",
    cidade: "Brodowski - SP",
    status: "Edição de Trio",
    linkInstagram: "https://www.instagram.com/bdkfreestyle_"
  },
  // ** NOVOS EVENTOS DE 06/10 (Segunda-feira) **
  {
    data: "2025-10-06",
    diaSemana: "Segunda-feira",
    horario: "20:00h",
    nomeBatalha: "Batalha Das Estações #33",
    cidade: "Araraquara - SP",
    status: "Edição Bate-Volta | Praça Santa Cruz",
    linkInstagram: null
  },
  // ** EVENTOS DE 07/10 (Terça-feira) **
  {
    data: "2025-10-07",
    diaSemana: "Terça-feira",
    horario: "19:00h",
    nomeBatalha: "Batalha da UBS",
    cidade: "Ribeirão Preto - SP",
    status: "Edição de Duplas - Street Fighter | Praça do Japão",
    linkInstagram: null
  },
  {
    data: "2025-10-07",
    diaSemana: "Terça-feira",
    horario: "19:00h",
    nomeBatalha: "Batalha da Ressaca",
    cidade: "Araraquara - SP",
    status: "Edição de Dupla Estilo Norte | Praça Santa Cruz",
    linkInstagram: "https://www.instagram.com/batalhadaressaca"
  },
  // ** NOVOS E ATUALIZADOS EVENTOS DE 08/10 (Quarta-feira) **
  {
    data: "2025-10-08",
    diaSemana: "Quarta-feira",
    horario: "19:00h",
    nomeBatalha: "Batalha da Alcatéia 282ª Edição",
    cidade: "São Carlos - SP",
    status: "Bate e Volta (4-2-2-2) - Praça Brasil",
    linkInstagram: "https://www.instagram.com/bdalc016"
  },
  {
    data: "2025-10-08",
    diaSemana: "Quarta-feira",
    horario: "19:00h",
    nomeBatalha: "Batalha do Chavão 21ª Edição",
    cidade: "Ibaté - SP",
    status: "Batalha de Sangue | Vila Santa Terezinha",
    linkInstagram: "https://www.instagram.com/batalhadomp016"
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
  // ** EVENTOS DE 10/10 (Sexta-feira) **
  {
    data: "2025-10-10",
    diaSemana: "Sexta-feira",
    horario: "19:30h",
    nomeBatalha: "Coalizão 016 - Edição Quinzenal #1",
    cidade: "Ribeirão Preto - SP",
    status: "Edição de Duplas",
    linkInstagram: "https://instagram.com/coalizao016"
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
    data: "2025-10-10",
    diaSemana: "Sexta-feira",
    horario: "20:00h",
    nomeBatalha: "Batalha DD3 - Outubro",
    cidade: "Sertãozinho - SP",
    status: "Pista de Skate da COHAB 3",
    linkInstagram: null
  },
  // ** EVENTOS DE 11/10 (Sábado) **
  {
    data: "2025-10-11",
    diaSemana: "Sábado",
    horario: "19:00h",
    nomeBatalha: "Batalha H2S #23",
    cidade: "São Carlos - SP",
    status: "Conhecimento com tema: Direitos sexuais e reprodutivos | Pista de Skate do Santa Felícia",
    linkInstagram: null
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
  // ** EVENTOS DE 15/10 (Quarta-feira) **
  {
    data: "2025-10-15",
    diaSemana: "Quarta-feira",
    horario: "19:30h",
    nomeBatalha: "Batalha Nova Era 110ª Edição",
    cidade: "Ribeirão Preto - SP",
    status: "Batalha de Tema",
    linkInstagram: "https://www.instagram.com/batalhanovaerarp"
  },
  // ** EVENTOS DE 17/10 (Sexta-feira) **
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
  // ** EVENTOS DE 18/10 (Sábado) **
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
  // ** EVENTOS DE 22/10 (Quarta-feira) **
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
  // ** EVENTOS DE 31/10 (Sexta-feira) **
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