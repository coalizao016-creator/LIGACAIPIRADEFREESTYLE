// =================================================================
// CONFIGURAÇÃO ÚNICA DO SUPABASE
// =================================================================
const SUPABASE_URL = 'https://fexlwjkiwlwgagrqexpe.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZleGx3amtpd2x3Z2FncnFleHBlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk4NzM1NjksImV4cCI6MjA3NTQ0OTU2OX0.ta5GK_q9Pihtoys6y2UCLim44G6H5nw_BPZ2-g9-MNk';

let supabaseClient;

async function carregarRanking(client, tabela, bodyId) {
    const rankingBody = document.getElementById(bodyId);
    if (!rankingBody) return;

    rankingBody.innerHTML = `<tr><td colspan="5" style="text-align: center; color: #ccc;">Carregando...</td></tr>`;

    const { data: rankingData, error: rankingError } = await client
        .from(tabela)
        .select('nome_mc, pontos, bonus_twolala, bonus_viagem, posicao')
        .order('posicao', { ascending: true })
        .limit(20); 

    if (rankingError) {
        rankingBody.innerHTML = `<tr><td colspan="5" style="text-align: center; color: red;">Erro ao carregar dados.</td></tr>`;
        return;
    }

    rankingBody.innerHTML = '';
    const mcsList = typeof mcs !== 'undefined' ? mcs : [];

    rankingData.forEach(rankItem => {
        const mcDetalhe = mcsList.find(m => m.nome === rankItem.nome_mc);
        const mcId = mcDetalhe ? mcDetalhe.id : 'unknown';
        const imagemUrl = mcDetalhe ? mcDetalhe.imagem : 'images/placeholder.png';
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="posicao">${rankItem.posicao}</td>
            <td class="mc-info">
                <div class="mc-card-link" data-mc-id="${mcId}">
                    <img src="${imagemUrl}" alt="${rankItem.nome_mc}" class="ranking-mc-img">
                    <span class="mc-nome">${rankItem.nome_mc}</span>
                </div>
            </td>
            <td class="mc-pontos" style="text-align: right;">${rankItem.pontos}</td> 
            <td style="text-align: right;">${rankItem.bonus_twolala}</td>
            <td style="text-align: right;">${rankItem.bonus_viagem}</td>
        `;
        rankingBody.appendChild(row);
    });
}

function setupModalListeners() {
    const mcModal = document.getElementById('mc-modal');
    const modalBody = document.getElementById('modal-body-mc');
    const closeBtn = document.querySelector('.close-btn');

    document.addEventListener('click', (e) => {
        const mcLink = e.target.closest('.mc-card-link');
        if (mcLink && typeof mcs !== 'undefined') {
            const mcId = mcLink.getAttribute('data-mc-id');
            const mcSelecionado = mcs.find(m => m.id == mcId); 
            
            if (mcSelecionado) {
                modalBody.innerHTML = `
                    <img src="${mcSelecionado.imagem}" class="modal-img">
                    <h3>${mcSelecionado.nome}</h3>
                    <p>${mcSelecionado.cidade || 'Interior'}</p>
                    <p>${mcSelecionado.titulo || 'MC da Liga'}</p>
                `;
                mcModal.style.display = 'block';
            }
        }
    });

    if (closeBtn) closeBtn.onclick = () => mcModal.style.display = 'none';
    window.onclick = (e) => { if (e.target === mcModal) mcModal.style.display = 'none'; };
}

// INICIALIZAÇÃO
document.addEventListener('DOMContentLoaded', () => {
    if (typeof window.supabase !== 'undefined') {
        supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
        carregarRanking(supabaseClient, 'ranking_geral_manual', 'geral-ranking-body');
        setupModalListeners();
    }
});