function loadMenuPagina() {
    // rodape-pagina
    document.querySelector("#menu-pagina").innerHTML = `{% load static %}
<nav class="sidebar header">
    <div class="sidebar-inner">
        <header class="sidebar-header">
            <button type="button" class="sidebar-burger" onclick="toggleSidebar()">
                <i class='bx bx-menu'></i>
            </button>
            <i class='bx bx-dollar dollar'></i>
        </header>
        <nav class="sidebar-menu">
            <button type="button" onclick="redirecionaPagina('dashboard')">
                <i style="font-size: 23px;" class="fa-solid fa-scale-balanced" title="Dashboard"></i>
                <span onclick="redirecionaPagina('dashboard')">Dashboard</span>
            </button>
            <button type="button" onclick="redirecionaPagina('despesas')">
                <i class="fa-solid fa-arrow-down" title="Despesas"></i>
                <span style="margin-left: 10px;" onclick="redirecionaPagina('despesas')">Despesas</span>
            </button>
            <button type="button" onclick="redirecionaPagina('receitas')">
                <i class="fa-solid fa-arrow-up" title="Receitas"></i>
                <span style="margin-left: 10px;" onclick="redirecionaPagina('receitas')">Receitas</span>
            </button>
            <button type="button" class="has-border" onclick="redirecionaPagina('relatorio')">
                <i class='bx bx-trending-up' title="Relatórios"></i>
                <span style="margin-left: 5px;" onclick="redirecionaPagina('relatorio')">Relatórios</span>
            </button>
            <button type="button" onclick="redirecionaPagina('dashboard')">
                <i class='bx bx-home'></i>
                <span onclick="redirecionaPagina('dashboard')">Home</span>
            </button>
            <button type="button">
                <i class='bx bx-user'></i>
                <span>Accounts</span>
            </button>
            <button type="button" class="has-border">
                <i class='bx bx-cog'></i>
                <span>Settings</span>
            </button>
            <button type="button">
                <i class='bx bx-shape-circle'></i>
                <span>Blockchain</span>
            </button>
            <button type="button">
                <i class='bx bx-data'></i>
                <span>Databases</span>
            </button>
            <button type="button">
                <i class='bx bx-speaker'></i>
                <span>AudioVibe</span>
            </button>
            <button type="button" class="has-border">
                <i class='bx bx-music'></i>
                <span>Soundblast</span>
            </button>
            <button type="button">
                <i class='bx bx-folder'></i>
                <span>Folders</span>
            </button>
            <button type="button">
                <i class='bx bx-layer'></i>
                <span>Levels</span>
            </button>
            <button type="button">
                <i class='bx bx-lock'></i>
                <span>Security</span>
            </button>
        </nav>
    </div>
</nav>`;
}

function loadRodapePagina() {
    document.querySelector("#rodape-pagina").innerHTML = `<div class="footer">
    Desenvolvido por Gelvazio Camargo para fins educacionais. &copy All Rights Reserved!
</div>`;
}

function loadDadosPagina() {
    loadMenuPagina();
    loadRodapePagina();
}

loadDadosPagina();

function logout() {
    sessionStorage.setItem("token_logado", "");
    sessionStorage.setItem("usucodigo_logado", "");

    window.location.href = "index.html";


    // LOGOUT CLERK
    if (Clerk != undefined) {
        if (Clerk) {
            Clerk.signOut();
        }
    }
}

function validaSessao() {
    const token_logado = sessionStorage.getItem("token_logado");

    // Se nao valida a sessao, manda pra pagina inicial
    if (token_logado != '54a80097f23822cb26b6d5a980968601') {
        document.querySelector("#container-alunos").style.display = "none";
        window.location.href = `index.html`;
    } else {
        document.querySelector("#container-alunos").style.display = "block";
    }
}

// Carrega o header em todas as paginas, usando Jquery
// function includeHTML(id) {
//     if (id == undefined) {
//         id = "include-html";
//     }
//     var z, i, elmnt, file, xhttp;
//
//     /* Loop through a collection of all HTML elements: */
//     z = document.getElementsByTagName("*");
//     for (i = 0; i < z.length; i++) {
//         elmnt = z[i];
//         /*search for elements with a certain atrribute:*/
//         file = elmnt.getAttribute(id);
//         if (file) {
//             /* Make an HTTP request using the attribute value as the file name: */
//             xhttp = new XMLHttpRequest();
//             xhttp.onreadystatechange = function() {
//                 if (this.readyState == 4) {
//                     if (this.status == 200) {
//                         elmnt.innerHTML = this.responseText;
//                     }
//                     if (this.status == 404) {
//                         elmnt.innerHTML = "Page not found.";
//                     }
//
//                     /* Remove the attribute, and call this function once more: */
//                     elmnt.removeAttribute("w3-include-html");
//                     includeHTML();
//                 }
//             }
//             xhttp.open("GET", file, true);
//             xhttp.send();
//
//             /* Exit the function: */
//             return;
//         }
//     }
// }

function mostraMensagem(mensagem) {
    $("#alert").show();
    document.querySelector("#alert").innerHTML = mensagem;
    // CHAMA A ACAO DE ALERTA DE SISTEMA
    document.querySelector("#acaoAlertaSistema").click();;
}