function enviaMensagem(room = "geral") {
    const assunto = "Mensagem de Testes";
    const message = "Minha Mensagem";
    enviaMensagemAutomatizadaSlack(assunto, message, room);
}

function enviaMensagemAutomatizadaSlack(assunto, message, room = "geral") {
    let route = "tasks";
    if (room === "geral") {
        route = "T0741R8KTHT/B0741RSGAJZ/Uh1cGpykuQNzvYHoC0fJEKUT";
    } else if (room === "relogio-do-tempo") {
        route = "T0741R8KTHT/B074TH5BBPA/2praJLSUJFlZG2r7hjrGUBqW";
    } else if (room === "easycron") {
        route = "T0741R8KTHT/B075F4WETQR/hMsWWZ9h05h4oQa92zhrFD0N";
    }

    const body = {
        channel: room,
        text: "[" + assunto + "] \n" + message,
    };

    const method = "POST";
    callApi(
        method,
        route,
        function (data) {
            console.log("retorno da api");
            console.log(data);
        },
        body
    )
}

function enviaMensagemSlack(room = "geral") {
    const assunto = document.querySelector("#assunto").value;

    const message = document.querySelector("#message").value;

    let hora = document.querySelector("#hora").textContent;
    let minuto = document.querySelector("#minuto").textContent;
    let segundo = document.querySelector("#segundo").textContent;

    if (hora < 10) {
        hora = "0" + hora
    }
    if (minuto < 10) {
        minuto = "0" + minuto
    }
    if (segundo < 10) {
        segundo = "0" + segundo
    }

    const horas = hora + ":" + minuto + ":" + segundo;

    let messageSlack = message + "\n[Mensagem enviada ás " + horas + "]";

    enviaMensagemAutomatizadaSlack(assunto, messageSlack, room);
}
