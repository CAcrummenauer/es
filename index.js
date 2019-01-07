var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var tarefas = [
    'Estudar JavaScript',
    'Estudar React',
    'Estudar React Native'
];

function adicionarTarefas() {
    listElement.innerHTML = '';
    for (tarefa of tarefas) {
        var liElement = document.createElement('li');
        var liTextElement = document.createTextNode(tarefa + ' ');

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');
        // Obter índice correspondente ao texto da tarefa
        var posicao = tarefas.indexOf(tarefa);
        linkElement.setAttribute('onclick', 'removerTarefa(' + posicao + ')');
        var linkTextElement = document.createTextNode('Remover');
        linkElement.appendChild(linkTextElement);

        liElement.appendChild(liTextElement);
        liElement.appendChild(linkElement);
        listElement.appendChild(liElement);
    }
}
adicionarTarefas();

function adicionarTarefa() {
    var liTextElement = inputElement.value;
    tarefas.push(liTextElement);
    inputElement.value = '';
    adicionarTarefas();
}

buttonElement.onclick = adicionarTarefa;

function removerTarefa(posicao) {
    tarefas.splice(posicao, 1);
    adicionarTarefas();
}