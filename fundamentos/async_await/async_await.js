// async/await no JavaScript simplifica o trabalho com Promises, permitindo escrever código assíncrono que parece síncrono, melhorando a legibilidade. async declara uma função assíncrona que retorna uma Promise, enquanto await pausa a execução dentro dela até que a Promise seja resolvida. Tratamento de erros é feito com try...catch.

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
            const tarefaConcluida = true;

            if (tarefaConcluida) {
                resolvido('tarefa 4 completa');
            } else {
                rejeitado('tarefa 4 não concluida');
            }
        }, 1500);
    });
}

async function fazerTarefas() {
    try {
        const tarefa1Resultado = await tarefa1();
        console.log(tarefa1Resultado);

        const tarefa2Resultado = await tarefa2();
        console.log(tarefa2Resultado);

        const tarefa3Resultado = await tarefa3();
        console.log(tarefa3Resultado);

        const tarefa4Resultado = await tarefa4();
        console.log(tarefa4Resultado);

        console.log('terminou todas as tarefas');
    } catch (erro) {
        console.error(erro);
    }

    
}

fazerTarefas();