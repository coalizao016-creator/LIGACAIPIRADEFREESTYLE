const SUPABASE_URL = 'https://ypxcojmcgsicvkaapsbd.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlweGNvam1jZ3NpY3ZrYWFwc2JkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgxNTk4MTYsImV4cCI6MjA4MzczNTgxNn0.zdT1GTsO1sBn3bHrIMovQEkrahLD_O6IDqmX6bCNqbg';
const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const WHATSAPP_DONO = "5516999999999"; 

let carrinho = [];
const urlParams = new URLSearchParams(window.location.search);
let afiliadoTag = urlParams.get('ref') || 'venda_direta';

// CARREGAR PRODUTOS
async function carregarProdutos() {
    const { data } = await _supabase.from('produtos').select('*').order('nome');
    const container = document.getElementById('lista-produtos');
    container.innerHTML = data.map(prod => `
        <div class="card-produto">
            <div class="img-box"><img src="${prod.imagem_url}"></div>
            <h3>${prod.nome}</h3>
            <p class="preco">R$ ${prod.preco.toFixed(2).replace('.',',')}</p>
            
            ${prod.nome.toLowerCase().includes('camiseta') ? `
                <div id="tamanhos-${prod.id}" class="grid-tamanhos" style="margin-bottom:10px;">
                    <div class="tamanho-btn" onclick="setTamanho('${prod.id}', 'P')">P</div>
                    <div class="tamanho-btn" onclick="setTamanho('${prod.id}', 'M')">M</div>
                    <div class="tamanho-btn" onclick="setTamanho('${prod.id}', 'G')">G</div>
                    <div class="tamanho-btn" onclick="setTamanho('${prod.id}', 'GG')">GG</div>
                </div>
            ` : ''}
            
            <button class="btn-add-cart" onclick="addAoCarrinho('${prod.id}', '${prod.nome}', ${prod.preco})">Adicionar ao Carrinho</button>
        </div>
    `).join('');
}

// LÓGICA DO CARRINHO
let tamanhosTemporarios = {};
window.setTamanho = function(id, tam) {
    tamanhosTemporarios[id] = tam;
    document.querySelectorAll(`#tamanhos-${id} .tamanho-btn`).forEach(b => {
        b.classList.toggle('selected', b.innerText === tam);
    });
};

window.addAoCarrinho = function(id, nome, preco) {
    let tam = tamanhosTemporarios[id] || "";
    if (nome.toLowerCase().includes('camiseta') && !tam) {
        alert("Selecione um tamanho primeiro!");
        return;
    }
    
    carrinho.push({ id, nome, preco, tamanho: tam });
    atualizarInterfaceCarrinho();
    alert(`${nome} adicionado!`);
};

function atualizarInterfaceCarrinho() {
    document.getElementById('cart-count').innerText = carrinho.length;
    const lista = document.getElementById('itens-carrinho');
    let total = 0;

    lista.innerHTML = carrinho.map((item, index) => {
        total += item.preco;
        return `
            <div class="item-carrinho">
                <div>
                    <strong>${item.nome}</strong> ${item.tamanho ? `(${item.tamanho})` : ''}<br>
                    R$ ${item.preco.toFixed(2).replace('.',',')}
                </div>
                <span class="btn-remover" onclick="removerItem(${index})">remover</span>
            </div>
        `;
    }).join('');

    document.getElementById('total-cart').innerText = `Total: R$ ${total.toFixed(2).replace('.',',')}`;
}

window.removerItem = function(index) {
    carrinho.splice(index, 1);
    atualizarInterfaceCarrinho();
};

window.abrirCarrinho = function() {
    if (carrinho.length === 0) { alert("Carrinho vazio!"); return; }
    document.getElementById('modal-cart').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
};

window.mostrarFormulario = function() {
    document.getElementById('form-checkout').style.display = 'block';
    document.getElementById('btn-ir-checkout').style.display = 'none';
};

window.fecharModal = function() {
    document.getElementById('modal-cart').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
};

// FINALIZAR
document.getElementById('form-venda').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const totalVenda = carrinho.reduce((acc, item) => acc + item.preco, 0);
    const resumoItens = carrinho.map(i => `${i.nome} (${i.tamanho})`).join(', ');

    const dados = {
        cliente_nome: document.getElementById('nome').value,
        whatsapp: document.getElementById('whatsapp-cli').value,
        endereco_entrega: document.getElementById('endereco').value,
        metodo_pagamento: document.getElementById('pagamento').value,
        total: totalVenda,
        afiliado_tag: afiliadoTag,
        observacao: resumoItens
    };

    const { error } = await _supabase.from('vendas').insert([dados]);
    
    if (!error) {
        let msg = `*PEDIDO MULTIPLO - COALIZÃO 016*%0A%0A`;
        carrinho.forEach(i => msg += `• ${i.nome} ${i.tamanho ? `[${i.tamanho}]` : ''}%0A`);
        msg += `%0A*Total:* R$ ${totalVenda.toFixed(2)}%0A*Cliente:* ${dados.cliente_nome}%0A*Indicado por:* ${afiliadoTag}`;
        
        window.open(`https://wa.me/${WHATSAPP_DONO}?text=${msg}`);
        location.reload();
    }
});

carregarProdutos();