// =================================================================
// CHAVES DE ACESSO DO SUPABASE (Suas chaves válidas)
// =================================================================
const SUPABASE_URL = 'https://fexlwjkiwlwgagrqexpe.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZleGx3amtpd2x3Z2FncnFleHBlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk4NzM1NjksImV4cCI6MjA3NTQ0OTU2OX0.ta5GK_q9Pihtoys6y2UCLim44G6H5nw_BPZ2-g9-MNk';

let supabase;

/**
 * Função para buscar dados do ranking e popular a tabela HTML.
 * @param {object} client O cliente Supabase inicializado.
 * @param {string} tabela Nome da tabela.
 * @param {string} bodyId ID do <tbody>.
 */
async function carregarRanking(client, tabela, bodyId) {
    const rankingBody = document.getElementById(bodyId);
    const colspanCount = 5; 
    
    if (!rankingBody) return;

    rankingBody.innerHTML = `<tr><td colspan="${colspanCount}" style="text-align: center; color: #ccc;">Carregando dados do ranking...</td></tr>`;

    // 2. Busca os dados no Supabase. QUERY TOTALMENTE LIMPA AGORA!
    const { data: rankingData, error: rankingError } = await client
        .from(tabela)
        .select(`
            nome_mc,
            pontos,
            bonus_twolala,
            bonus_viagem,
            posicao
        `)
        .order('posicao', { ascending: true })
        .limit(10);

    if (rankingError) {
        console.error(`Erro ao buscar o ranking da tabela ${tabela}:`, rankingError);
        // Tenta exibir a mensagem de erro de forma mais segura, caso seja um objeto sem a propriedade 'message'
        const errorMessage = rankingError.message || JSON.stringify(rankingError);
        rankingBody.innerHTML = `<tr><td colspan="${colspanCount}" style="text-align: center; color: red; font-weight: bold;">ERRO AO CARREGAR RANKING. Verifique as permissões: ${errorMessage}</td></tr>`;
        return;
    }

    if (rankingData.length === 0) {
        rankingBody.innerHTML = `<tr><td colspan="${colspanCount}" style="text-align: center; color: #ccc;">O ranking será exibido aqui após o início da liga.</td></tr>`;
        return;
    }

    rankingBody.innerHTML = '';
    
    // Certifica-se de que a lista de MCs está disponível
    // IMPORTANTE: A variável 'mcs' é definida pelo seu 'mcs.js'.
    const mcsList = typeof mcs !== 'undefined' ? mcs : [];

    rankingData.forEach(rankItem => {
        // Encontra o MC completo na lista global usando o nome (Assumindo que o nome é único)
        const mcDetalhe = mcsList.find(m => m.nome === rankItem.nome_mc);
        
        // Pega ID e Imagem da tabela completa de MCs
        const mcId = mcDetalhe ? mcDetalhe.id : 'unknown'; // Fallback para um ID genérico
        const imagemUrl = mcDetalhe ? mcDetalhe.imagem : 'images/placeholder.png'; // Fallback para placeholder
        
        const totalPontos = rankItem.pontos; 

        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="posicao">${rankItem.posicao}</td>
            <td class="mc-info">
                <div class="mc-card-link" data-mc-id="${mcId}">
                    <img src="${imagemUrl}" alt="${rankItem.nome_mc}" class="ranking-mc-img">
                    <span class="mc-nome">${rankItem.nome_mc}</span>
                </div>
            </td>
            <td class="mc-pontos" style="text-align: right;">${totalPontos}</td> 
            <td style="text-align: right;">${rankItem.bonus_twolala}</td>
            <td style="text-align: right;">${rankItem.bonus_viagem}</td>
        `;
        rankingBody.appendChild(row);
    });
}


// =================================================================
// LÓGICA DO MODAL
// =================================================================
function setupModalListeners() {
    if (typeof mcs === 'undefined' || !document.getElementById('mc-modal')) {
        console.warn("Variável 'mcs' (do mcs.js) não encontrada ou Modal não existe. O clique no MC não funcionará.");
        return;
    }

    const mcModal = document.getElementById('mc-modal');
    const modalBody = document.getElementById('modal-body-mc');
    const closeBtn = document.querySelector('#mc-modal .close-btn');

    document.querySelectorAll('.ranking-table-container').forEach(container => {
        container.addEventListener('click', (e) => {
            const mcLink = e.target.closest('.mc-card-link');
            if (mcLink) {
                const mcId = mcLink.getAttribute('data-mc-id');
                
                // Busca o MC completo na lista global 'mcs'
                const mcSelecionado = mcs.find(m => m.id == mcId); 
                
                if (mcSelecionado) {
                    let linksHTML = '';
                    if (mcSelecionado.links && mcSelecionado.links.length > 0) {
                        mcSelecionado.links.forEach(link => { linksHTML += `<a href="${link.url}" target="_blank">${link.nome}</a>`; });
                    }

                    const imagemUrl = mcSelecionado.imagem || 'images/placeholder.png';
                    const cidade = mcSelecionado.cidade || 'Não informada';
                    const titulo = mcSelecionado.titulo || 'MC da Liga';

                    modalBody.innerHTML = `
                        <img src="${imagemUrl}" alt="${mcSelecionado.nome}" class="modal-img">
                        <h3>${mcSelecionado.nome}</h3>
                        <p>${cidade}</p>
                        <p>${titulo}</p>
                        <div class="mc-modal-links">${linksHTML}</div>
                        <p class="modal-stats-footer">Estatísticas EM BREVE (by TwolalaScore)</p>
                        <div class="modal-stats-container">
                            <div class="stats-group"><p class="stats-title">Edições</p><p class="stats-item">Títulos:</p><p class="stats-item">Vices:</p></div><hr class="stats-separator">
                            <div class="stats-group"><p class="stats-title">Batalhas</p><p class="stats-item">Vitórias:</p><p class="stats-item">Win Rate:</p></div><hr class="stats-separator">
                            <div class="stats-group"><p class="stats-title">Rounds</p><p class="stats-item">Vitórias:</p><p class="stats-item">Win Rate:</p></div><hr class="stats-separator">
                            <div class="stats-group"><p class="stats-title">Twolalas:</p></div>
                        </div>`;
                    mcModal.style.display = 'block';
                }
            }
        });
    });

    closeBtn.onclick = () => { mcModal.style.display = 'none'; };
    window.onclick = event => { if (event.target === mcModal) { mcModal.style.display = 'none'; } };
}


// =================================================================
// INICIALIZAÇÃO PRINCIPAL
// =================================================================
document.addEventListener('DOMContentLoaded', () => {
    if (typeof window.supabase !== 'undefined') {
        supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
        
        carregarRanking(supabase, 'ranking_janela_manual', 'janela-ranking-body');
        carregarRanking(supabase, 'ranking_geral_manual', 'geral-ranking-body');

        setupModalListeners();

    } else {
        console.error("Erro: Biblioteca do Supabase não encontrada. Verifique o ranking.html.");
    }
});