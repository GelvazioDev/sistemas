const ACAO_PLAY   = "play";
const ACAO_PAUSE  = "pause";
const ACAO_DONE   = "done";
const ACAO_EDIT   = "edit";
const ACAO_DELETE = "delete";

function loadTasks() {
    const body = document.querySelector(".task-tbody")
    body.innerHTML = ""

    callApiFocus("GET", "focus", function (data) {
        const aListaData = data
        aListaData.forEach(function (value, key) {
            console.log("dados retornado:" + value + " KEY: " + key)
            console.log("dados - id:" + value.id)

            // CARREGA APENAS AS TAREFAS QUE ESTAO PAUSADAS OU EM PLAY, E NAO EXCLUIDAS
            const loadTask = value.status != "DONE" && value.status != "DELETE"
            if (loadTask || true) {
                body.innerHTML += ` 
                <tr class="hr-table">
                  <td>${value.id}</td>
                  <td>${value.description}</td>
                  <td>${value.status}</td>
                  <td class="btn-table">
                    <button class="btn btn-3" onclick="updateFocus('${value.id}','play')">play</button>
                    <button class="btn btn-1" onclick="updateFocus('${value.id}','pause')">pause</button>
                    <button class="btn btn-2" onclick="updateFocus('${value.id}','done')">done</button>
                    <button class="btn btn-3" onclick="updateFocus('${value.id}','edit')">Edit</button>
                    <button class="btn btn-1" onclick="updateFocus('${value.id}','delete')">Delete</button>
                    <button class="btn btn-8" onclick="detailTask('${value.id}')">Details</button>
                  </td>
                </tr>
              `
            }
        })

         // Seta o ultimo id alterado
         const id = localStorage.getItem("last_id_updated");
         if(id){
            document.querySelector("#id").value = id;
            route = "focus/" + id;
            const method = "GET";
            const executou = callApiFocus(method, route, function(data){
                document.querySelector("#description").value = data.description;
                document.querySelector("#btnStatusPlay").textContent = data.description;
            });
         }
    })
}

async function updateFocus(id, status) {
    localStorage.setItem("last_id_updated", id);

    return updateTaskPatch(id, status);
    // const id = document.querySelector("#id").value
    // console.log("ID ATUAL:" + id)

    route = "focus/" + id
    const method = "GET"
    const executou = await callApiFocus(method, route)

    if (executou) {
        console.log("EXECUTOU SEM ERROS....")
        updateTask(id, status)
    } else {
        console.log("EXECUTOU COM ERROS....")
        insertTask()
    }

    return executou
}

async function updateTask(id, status) {
    callApiFocus("PUT", "focus/" + id, function(){
        loadTasks();
    }, getBody(status, id))
}


async function updateTaskPatch(id, status) {
    callApiFocus("PATCH", "focus/" + id, function(){
        loadTasks();
    }, getBody(status, id))
}

async function insertTask() {
    await getNextId(function (nextId) {
        callApiFocus("POST", "focus", false, getBody("PLAY", nextId))
    })
}

async function getNextId(fn) {
    await callApiFocus("GET", "focus", function (data) {
        const next = parseInt(data.length) + 1
        fn(next)
    })
}

function getBody(status, id) {
    const hour   = parseInt(document.querySelector("#hora").textContent) < 10 ? "0" + parseInt(document.querySelector("#hora").textContent) : parseInt(document.querySelector("#hora").textContent);
    const minute = parseInt(document.querySelector("#minuto").textContent) < 10 ? "0" + parseInt(document.querySelector("#minuto").textContent) : parseInt(document.querySelector("#minuto").textContent);
    const second = parseInt(document.querySelector("#segundo").textContent) < 10 ? "0" + parseInt(document.querySelector("#segundo").textContent) : parseInt(document.querySelector("#segundo").textContent);
        
    let description = "";
    if(id == 1){
        description = "WORKING";
    } else if(id == 2){
        description = "RESTING";
    } else if(id == 3){
        description = "LUNCHING";
    } else if(id == 4){
        description = "FITNES";
    } else if(id == 5){
        description = "TRAVELYING";
    } else if(id == 6){
        description = "STUDYING";
    } 

    return {
        id: id,
        description,
        status,
        inicio: {
            day: "00",
            month: "00",
            year: "00",
            hour,
            minute,
            second
        },
        fim: {
            day: "00",
            month: "00",
            year: "00",
            hour: "00",
            minute: "21",
            second: "5",
        },
        tempo_atual_inicio: {
            day: "00",
            month: "00",
            year: "00",
            hour: "00",
            minute: "21",
            second: "5",
        },
        tempo_atual_fim: {
            day: "00",
            month: "00",
            year: "00",
            hour: "00",
            minute: "21",
            second: "5",
        },
        tempo_decorrido: {
            day: "00",
            month: "00",
            year: "00",
            hour: "00",
            minute: "21",
            second: "5",
        },
    }
}

async function editTask(id, acao) {
    localStorage.setItem("last_id_updated", id);
    switch (acao) {
        case ACAO_PLAY:
            // EXECUTA A ACAO PLAY
            await updateTask(id, acao);
            // CARREGA A TAREFA ATUAL NA TELA DO RELOGIO            
            break
        case ACAO_PAUSE:
            // EXECUTA A ACAO PAUSE
            // CARREGA A TAREFA ATUAL NA TELA DO RELOGIO
            break
        case ACAO_DONE:
            // EXECUTA A ACAO DONE
            break
        case ACAO_EDIT:
            // EXECUTA A ACAO EDIT
            // CARREGA A TAREFA ATUAL NA TELA DO RELOGIO
            break
        case ACAO_DELETE:
            // EXECUTA A ACAO DELETE, E APENAS MARCA COMO EXCLUIDO, MAS NAO DELETA
            // CARREGA A TAREFA ATUAL NA TELA DO RELOGIO
            break
    }

    // RECARREGA AS TASKS
    // debugger;
    //console.log("DADOS RETORNADOS - updateTask: " + data.id)

    //await loadTaskById(id);    
}


function updateTimes(id, status){
    callApiFocus("GET", "focus/" + id, function(data){
        loadTimes(status, data);
    });
}

function loadTimes(status, data){
    const hour   = parseInt(document.querySelector("#hora").textContent) < 10 ? "0" + parseInt(document.querySelector("#hora").textContent) : parseInt(document.querySelector("#hora").textContent);
    const minute = parseInt(document.querySelector("#minuto").textContent) < 10 ? "0" + parseInt(document.querySelector("#minuto").textContent) : parseInt(document.querySelector("#minuto").textContent);
    const second = parseInt(document.querySelector("#segundo").textContent) < 10 ? "0" + parseInt(document.querySelector("#segundo").textContent) : parseInt(document.querySelector("#segundo").textContent);
    
    let inicio = {};
    let fim = {};
    
    if(status == "play"){
        inicio = {
            day  : "00",
            month: "00",
            year : "00",
            hour,
            minute,
            second
        };

        fim = {
            day   : "00",
            month : "00",
            year  : "00",
            hour  : "00",
            minute: "00",
            second: "00",
        };
    } else if(status == "pause"){
        fim = {
            day  : "00",
            month: "00",
            year : "00",
            hour,
            minute,
            second
        };

        inicio = {
            day   : "00",
            month : "00",
            year  : "00",
            hour  : "00",
            minute: "00",
            second: "00",
        };
    } 

    let tempo_decorrido = {
        day: "00",
        month: "00",
        year: "00",
        hour: "00",
        minute: "00",
        second: "00",
    };

    if(status == "pause"){
        tempo_decorrido = calculaTempoDecorrido(inicio, fim);
    }
}

function calculaTempoDecorrido(inicio, fim){
    let horas = 0;
    let minutos = 0;
    let segundos = 0;
    if(inicio.hour === fim.hour){
        horas = 0;
        // inicio=16  fim = 18 - minutos = 2
        minutos = fim.minute === inicio.minute;
        segundos = fim.second === inicio.second;
    } else {
        horas = fim.hour === inicio.hour;
        // inicio=16  fim = 18 - minutos = 2
        minutos = fim.minute === inicio.minute;
        segundos = fim.second === inicio.second;
    }
}







