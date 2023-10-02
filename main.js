 // Função para adicionar um novo contato à tabela
function adicionarContato(nome, telefone) {
    const tabelaContatos = document.getElementById("contatos").getElementsByTagName('tbody')[0];
    const novaLinha = tabelaContatos.insertRow();

    const colunaNome = novaLinha.insertCell(0);
    const colunaTelefone = novaLinha.insertCell(1);

    colunaNome.innerHTML = nome;
    colunaTelefone.innerHTML = telefone;
}

// Event listener para o formulário
document.getElementById("contatoForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    
    adicionarContato(nome, telefone);

    // Limpar o formulário após adicionar o contato
    document.getElementById("nome").value = "";
    document.getElementById("telefone").value = "";
});
