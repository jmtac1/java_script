// Promises em JavaScript são objetos que representam a conclusão ou falha eventual de operações assíncronas, permitindo gerenciar código assíncrono de forma mais limpa que callbacks. Elas funcionam como um "proxy" para um valor futuro, podendo estar em estado pendente**cumprida (sucesso - .then()) ou rejeitada (erro - .catch()).

function tarefa1() {
    return new Promise((resolvido, rejeitado) => {
        setTimeout(() => {
            const tarefaConcluida = true;

            if (tarefaConcluida) {
                resolvido('tarefa 1 completa');
            } else {
                rejeitado('tarefa 1 não concluida');
            }
        }, 1500);
    });
}

function tarefa2() {
    return new Promise((resolvido, rejeitado) => {
        setTimeout(() => {
            const tarefaConcluida = false;

            if (tarefaConcluida) {
                resolvido('tarefa 2 completa');
            } else {
                rejeitado('tarefa 2 não concluida');
            }
        }, 1500);
    });
}

function tarefa3() {
    return new Promise((resolvido, rejeitado) => {
        setTimeout(() => {
            const tarefaConcluida = true;

            if (tarefaConcluida) {
                resolvido('tarefa 3 completa');
            } else {
                rejeitado('tarefa 3 não concluida');
            }
        }, 1500);
    });
}

function tarefa4() {
    return new Promise((resolvido, rejeitado) => {
        setTimeout(() => {
            const tarefaConcluida = false;

            if (tarefaConcluida) {
                resolvido('tarefa 4 completa');
            } else {
                rejeitado('tarefa 4 não concluida');
            }
        }, 1500);
    });
}

tarefa1().then(valor => {console.log(valor); return tarefa2()})
         .then(valor => {console.log(valor); return tarefa3()})
         .then(valor => {console.log(valor); return tarefa4()})
         .then(valor => {console.log(valor); console.log('terminou todas as tarefas')})
         .catch(erro => console.error(erro));