const form = document.getElementById('form-contatos');
const nomes = [];
const contatos = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
})

function adicionaLinha(){
    const inputNome = document.getElementById('nome');
    const inputContato = document.getElementById('contato');

    const contatoExiste = contatos.includes(inputContato.value);

    if(contatoExiste){
        alert('CONTATO JA CADASTRATO')
    } else{
        nomes.push(inputNome.value);
        contatos.push(inputContato.value);

        let linha = '<tr>'
        linha += `<td>${inputNome.value}</td>`
        linha += `<td>${inputContato.value}</td>`
        linha += '</tr>'

        linhas += linha

        inputNome.value = ''
        inputContato.value = ''
    }
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}