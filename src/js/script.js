const produtos = [
    { id: 1, nome: 'Camiseta', preco: 59.99 },
    { id: 2, nome: 'Babylooks', preco: 49.99 },
    { id: 3, nome: 'Pulseiras', preco: 19.99 }
];

const carrinho = [];

function atualizarCarrinho() {
    const listaItens = document.getElementById('itens-carrinho');
    const totalElement = document.getElementById('total');
    
    listaItens.innerHTML = '';
    let total = 0;

    carrinho.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
        listaItens.appendChild(li);
        total += item.preco;
    });

    totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;
}

document.querySelectorAll('.adicionar').forEach(botao => {
    botao.addEventListener('click', (evento) => {
        const produtoId = evento.target.closest('.produto').dataset.id;
        const produto = produtos.find(p => p.id == produtoId);
        carrinho.push(produto);
        atualizarCarrinho();
    });
});

document.getElementById('finalizar').addEventListener('click', () => {
    if (carrinho.length > 0) {
        alert('Compra finalizada com sucesso!');
        // Limpar o carrinho após finalizar
        carrinho.length = 0;
        atualizarCarrinho();
    } else {
        alert('O carrinho está vazio!');
    }
});
