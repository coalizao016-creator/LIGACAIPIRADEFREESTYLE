const DB_URL = 'https://ypxcojmcgsicvkaapsbd.supabase.co';
const DB_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlweGNvam1jZ3NpY3ZrYWFwc2JkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgxNTk4MTYsImV4cCI6MjA4MzczNTgxNn0.zdT1GTsO1sBn3bHrIMovQEkrahLD_O6IDqmX6bCNqbg';

const _supabase = supabase.createClient(DB_URL, DB_KEY);

async function atualizarDraft() {
    const { data: mcs, error } = await _supabase.from('draft_mcs').select('*').order('nome', { ascending: true });

    if (error) {
        console.error("Erro Supabase:", error.message);
        return;
    }

    const pool = document.getElementById('pool');
    if (pool) pool.innerHTML = '';

    // 1. Renderizar Capitães
    mcs.filter(m => m.is_capitao).forEach(cap => {
        const box = document.getElementById(`team-${cap.capitao_id}`);
        if (box) {
            const fotoCap = `img/${cap.nome.toLowerCase().replace(/\s+/g, '-')}.jpg`;
            box.innerHTML = `
                <div class="cap-header">
                    <img src="${fotoCap}" onerror="this.src='img/placeholder.jpg'">
                    <h3>${cap.nome}</h3>
                </div>
                <div class="picks-grid" id="picks-${cap.capitao_id}"></div>
            `;
        }
    });

    // 2. Distribuir MCs
    mcs.filter(m => !m.is_capitao).forEach(mc => {
        const fotoMC = `img/${mc.nome.toLowerCase().replace(/\s+/g, '-')}.jpg`;

        if (mc.status === 'disponivel') {
            const card = document.createElement('div');
            card.className = 'mc-card';
            card.innerHTML = `
                <img src="${fotoMC}" onerror="this.src='img/placeholder.jpg'">
                <p>${mc.nome}</p>
            `;
            if (pool) pool.appendChild(card);
        } else {
            const container = document.getElementById(`picks-${mc.capitao_id}`);
            if (container) {
                const miniCard = document.createElement('div');
                miniCard.className = 'mini-card-pick';
                miniCard.innerHTML = `
                    <img src="${fotoMC}" onerror="this.src='img/placeholder.jpg'">
                    <p>${mc.nome}</p>
                `;
                container.appendChild(miniCard);
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    atualizarDraft();
    setInterval(atualizarDraft, 5000);
});