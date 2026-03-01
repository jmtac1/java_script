// "Callback Hell" (ou "Inferno de Callbacks") no JavaScript ocorre quando múltiplas funções assíncronas são aninhadas excessivamente, criando uma estrutura em pirâmide de difícil leitura e manutenção, muitas vezes chamada de "pirâmide da perdição". Isso acontece com o uso excessivo de callbacks para gerenciar o fluxo de código assíncrono. A melhor maneira de resolver isso é utilizando Promises ou async/await.

function tarefa1(callback) {
    setTimeout(() => {
        console.log('tarefa 1 completa');
        callback();
    }, 2000);
}

function tarefa2(callback) {
    setTimeout(() => {
        console.log('tarefa 2 completa');
        callback();
    }, 1000);
}

function tarefa3(callback) {
    setTimeout(() => {
        console.log('tarefa 3 completa');
        callback();
    }, 3000);
}

function tarefa4(callback) {
    setTimeout(() => {
        console.log('tarefa 4 completa');
        callback();
    }, 1500);
}

tarefa1(() => {
    tarefa2(() => {
        tarefa3(() => {
            tarefa4(() => {
                console.log('todas tarefas completas');
            });
        });
    });
});


