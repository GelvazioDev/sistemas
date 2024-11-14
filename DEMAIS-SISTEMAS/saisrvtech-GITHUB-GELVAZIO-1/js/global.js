import { login } from './auth.js';

export function inicializaPagina(pagina){
    // Analise se sera preciso este menu inferior
    // document.querySelector("#menu-inferior").style.display = "block";

    // console.log("SCRIPT DA PAGINA - " + pagina.toUpperCase());
    console.log("Inicializando Pagina:" + pagina);

    // document.querySelector("#tituloApp").innerHTML = "PAGINA - " + pagina;

    if(pagina == "INSTITUICAO"){
        document.querySelector("#menu-inferior").style.display = "none";
    } else if(pagina == "LOGINSISTEMA"){
        adicionaAcoesPagina(app, pagina);
    }
}

function adicionaAcoesPagina(app, pagina){
    if(pagina == "LOGINSISTEMA"){
        const btnEntrar = document.querySelector('#btnEntrar')
        btnEntrar.addEventListener('click', event => {
        login(app, true);

        // app.dialog.create({
        //       title: 'Título Personalizado',
        //       text: 'Este é um diálogo com mais opções.',
        //       buttons: [
        //         {
        //           text: 'Cancelar',
        //           onClick() {
        //             console.log('Diálogo cancelado');
        //           },
        //         },
        //         {
        //           text: 'Ok',
        //           onClick() {
        //             console.log('Diálogo confirmado');
        //           },
        //         },
        //       ],
        //     }).open();
        })

    }
}