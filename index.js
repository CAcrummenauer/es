var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var tarefas = [
    'Estudar JavaScript',
    'Estudar React',
    'Estudar React native'
];

function adicionarTarefas() {
    for (tarefa of tarefas) {
        var liElement = document.createElement('li');
        var liTextElement = document.createTextNode(tarefa);
        liElement.appendChild(liTextElement);
        listElement.appendChild(liElement);
    }
}

adicionarTarefas();