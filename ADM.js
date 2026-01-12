const _URL = 'https://ypxcojmcgsicvkaapsbd.supabase.co';
const _KEY = 'SUA_MESMA_CHAVE_ANON'; 
const _supabase = supabase.createClient(_URL, _KEY);

let mcSelecionadoId = null;
let capitaoSelecionadoId = null;

async function carregarMcsAdmin() {
    const { data: mcs } = await _supabase
        .from('draft_mcs')
        .select('*')
        .eq('status', 'disponivel')
        .eq('is_capitao', false)
        .order('nome');

    const container = document.getElementById('lista-mcs');
    container.innerHTML = '';

    mcs.forEach(mc => {
        const btn = document.createElement('button');
        btn.innerText = mc.nome;
        btn.onclick = () => selecionarMC(mc.id, btn);
        container.appendChild(btn);
    });
}

function selecionarMC(id, elemento) {
    mcSelecionadoId = id;
    // Remove destaque de outros botões
    document.querySelectorAll('#lista-mcs button').forEach(b => b.classList.remove('selected'));
    elemento.classList.add('selected');
    verificarBotao();
}

function definirCapitão(id) {
    capitaoSelecionadoId = id;
    document.querySelectorAll('#lista-capitaes button').forEach(b => b.classList.remove('selected'));
    event.target.classList.add('selected');
    verificarBotao();
}

function verificarBotao() {
    if (mcSelecionadoId && capitaoSelecionadoId) {
        document.getElementById('btn-confirmar').disabled = false;
    }
}

async function confirmarEscolha() {
    const { error } = await _supabase
        .from('draft_mcs')
        .update({ 
            status: 'escolhido', 
            capitao_id: capitaoSelecionadoId 
        })
        .eq('id', mcSelecionadoId);

    if (!error) {
        alert("Escolha registrada! O telão vai atualizar.");
        mcSelecionadoId = null;
        capitaoSelecionadoId = null;
        document.getElementById('btn-confirmar').disabled = true;
        carregarMcsAdmin(); // Recarrega a lista
    } else {
        alert("Erro ao salvar: " + error.message);
    }
}

carregarMcsAdmin();