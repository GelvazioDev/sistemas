function playFocus() {
    console.log("Sessão de foco iniciada!")

    // setStatusFocus(1, "PLAY")

    updateFocus("PLAY")
}

function pauseFocus() {
    console.log("Sessão de foco pausada!")

    // antes de pausar a tarefa, pega a hora minuto e segundo de inicio

    route = "focus/" + 1
    const method = "GET"
    callApiFocus(method, route, function (data) {
        console.log("return of focus api!")
        console.log(data)

        // debugger
        console.log("id: " + data.id)
        console.log("description: " + data.description)
        console.log("hour: " + data.hour)
        console.log("minute" + data.minute)
        console.log("second" + data.second)
    })

    setStatusFocus(2, "PAUSE")
}

function setStatusFocus(id, status) {
    const description = document.querySelector("#description").value
    const hora = document.querySelector("#hora").textContent
    const minuto = document.querySelector("#minuto").textContent
    const segundo = document.querySelector("#segundo").textContent

    console.log("TASK:" + description)

    const body = {
        id,
        description,
        status,
        hour: hora,
        minute: minuto,
        second: segundo,
    }

    route = "focus/" + id
    const method = "PUT"
    callApiFocus(
        method,
        route,
        function (data) {
            console.log("return of focus api!")
            console.log(data)
        },
        body,
    )
}

// REGRAS DE NEGOCIOS
// id => 1  => GUARDA A HORA DE INICIO DA TAREFA
// id => 2  => GUARDA A HORA DE PAUSA DA TAREFA
// id => 3  => GUARDA O TOTAL DE HORAS TRABALHADAS NO DIA
// CRIAR UMA NOVA ROTA DE NOME FOCUSLOG - QUE DEVE GUARDAR TODAS AS VEZES QUE FOR PAUSADO OU INICIADO
// DEVE SALVAR O OBJETO TODO DE PAUSA OU INICIO, PARA LOGS

// precisa calcular o proximo id de task
// QUANDO FOR PAUSAR UMA TASK, DEVE SABER O ID DA TASK EM ANDAMENTO
// DEVE TER UMA ROTA QUE GUARDA OS DADOS DE [ID- DA TASK EM ANDAMENTO]

// DEVE TER A ACAO DE MARCAR UMA TAREFA COMO FEITA - DONE
// DEVE TER UMA LISTA DE TAREFAS DO DIA, NUMA TABELA COM TODAS AS AÇÕES[ PLAY/PAUSE/DONE]
// SO PODE TER UMA TAREFA EM PLAY, MAS PODE TER VARIAS TAREFAS EM PAUSE
// PODE TER VARIAS TAREFAS FEITAS[DONE]

// AO INICIAR UMA NOVA TAREFA, DEVE FINALIZAR A TAREFA ATUAL QUE ESTIVER ABERTA
// POR DEFAULT DEVE SER CRIADA SEMPRE UMA TAREFA DE "STANDBY", QUE SAO OS TEMPOS QUE NAO SE ESTA TRABALHANDO
// TEMPO, PRA ALMOÇAR, BANHEIRO, CAFÉ, COMPROMISSO EXTERNO, ETC

// AO FIM DO DIA CRIAR UM GRAFICO, DIARIO, SEMANAL, MENSAL E ANUAL COM O TOTAL DE
// HORAS, DIAS, MESES TRABALHADOS E O PERCENTUAL DE APROVEITAMENTO, REAL E APROXIMADO
// REAL - EXATAMENTE QUANTAS HORAS,DIAS E MESES TRABALHADO
// APROXIMADO, DEFINIR UMA META DE NO MINIMO 95% DE PRODUTIVIDADE, OU SEJA HORA TRABALHADA DIARIA, SEMANAL E MENSAL E ANUAL
// 8,6 HORAS DIARIAS
// HORAS DIARIAS = 8,8 => 8,8 X 95% =>

// function updateNextId() {}
