// codigo sincrono é executado linha por linha e espera a tarefa atual terminar para a proxima ser executada
// codigo assincrono permite que outras tarefas executem enquanto a atual ainda não executou

function func1(callback) {
    setTimeout(() => {console.log('tarefa 1');
                      callback()}, 3000);
}

function func2() {
    console.log('tarefa 2');
    console.log('tarefa 3');
    console.log('tarefa 4');
}

func1(func2);

