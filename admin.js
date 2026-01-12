const DB_URL = 'https://ypxcojmcgsicvkaapsbd.supabase.co';
const DB_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlweGNvam1jZ3NpY3ZrYWFwc2JkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgxNTk4MTYsImV4cCI6MjA4MzczNTgxNn0.zdT1GTsO1sBn3bHrIMovQEkrahLD_O6IDqmX6bCNqbg';

const _supabase = supabase.createClient(DB_URL, DB_KEY);

let mcSelecionado = null;
let capitaoSelecionado = null;

async function carregarPainel() {
    const containerMcs = document.getElementById('lista-mcs');
    const containerCaps = document.getElementById('lista-capitaes');

    // Se um dos dois não existir no HTML, para aqui e avisa
    if (!containerMcs || !containerCaps) {
        console.error("ERRO: IDs 'lista-mcs' ou 'lista-capitaes' não encontrados no HTML.");
        return;
    }

    const { data: mcs, error } = await _supabase
        .from('draft_mcs')
        .select('*')
        .eq('is_capitao', false)
        .eq('status', 'disponivel')
        .order('nome');

    if (error) return console.error("Erro Supabase:", error.message);

    containerMcs.innerHTML = '';
    if (mcs.length === 0) containerMcs.innerHTML = '<p>Nenhum MC disponível.</p>';

    mcs.forEach(mc => {
        const btn = document.createElement('button');
        btn.innerText = mc.nome;
        btn.onclick = () => {
            document.querySelectorAll('#lista-mcs button').forEach(b => b.classList.remove('selected-mc'));
            btn.classList.add('selected-mc');
            mcSelecionado = mc.id;
            validarBotao();
        };
        containerMcs.appendChild(btn);
    });

    const capitães = [
        {id: 1, nome: "BUBBA"}, {id: 2, nome: "JIMMY"}, {id: 3, nome: "GURI"}, {id: 4, nome: "LUH DO CLICK"},
        {id: 5, nome: "KILLUA"}, {id: 6, nome: "PUMA"}, {id: 7, nome: "JHOW"}, {id: 8, nome: "TYRANO"}
    ];

    containerCaps.innerHTML = '';
    capitães.forEach(cap => {
        const btn = document.createElement('button');
        btn.className = 'cap-btn';
        btn.innerText = `${cap.id}. ${cap.nome}`;
        btn.onclick = () => {
            document.querySelectorAll('.cap-btn').forEach(b => b.classList.remove('selected-cap'));
            btn.classList.add('selected-cap');
            capitaoSelecionado = cap.id;
            validarBotao();
        };
        containerCaps.appendChild(btn);
    });
}

function validarBotao() {
    const btn = document.getElementById('btn-confirmar');
    if (mcSelecionado && capitaoSelecionado) {
        btn.classList.add('ready');
    }
}

async function confirmarEscolha() {
    const { error } = await _supabase
        .from('draft_mcs')
        .update({ status: 'escolhido', capitao_id: capitaoSelecionado })
        .eq('id', mcSelecionado);

    if (!error) {
        alert("Sucesso!");
        mcSelecionado = null;
        capitaoSelecionado = null;
        document.getElementById('btn-confirmar').classList.remove('ready');
        carregarPainel(); 
    }
}

document.addEventListener('DOMContentLoaded', carregarPainel);