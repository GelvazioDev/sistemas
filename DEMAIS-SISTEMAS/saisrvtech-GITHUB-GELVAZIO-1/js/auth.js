import { callApi } from './api.js';

export function voltarLogin(app) {
    // Fecha a tela de cadastro de Usuario
    app.loginScreen.close();
}

export function login(app, validar = false) {
    if(validar){
        const username = $("input#demo-username-1").val();
        const password = $("input#demo-password-1").val();
    
        if (username === "" || password === "") {
            app.dialog.alert("Usuário ou Senha inválido!", function () {
                app.loginScreen.close();
            });
    
            return false;
        }
    
        app.loginScreen.close();
    
        // Valida o login no sistema
        const method = "GET";
        const rota = "usuarios/1";
        callApi(method, rota, function (data) {});  

        app.views.main.router.navigate("/instituicao/", { reloadCurrent: true });
    }
};

export function cadastrarUsuario() {
    var username = $("input#demo-cad-username-1").val();
    var password = $("input#demo-cad-password-1").val();

    if (username == "" || password == "") {
        app.dialog.alert("Usuário ou Senha inválido!", function () {
            app.loginScreen.close();
        });

        return false;
    }

    app.dialog.alert("Usuário: " + username + "<br />Senha: " + password, function () {
        app.loginScreen.close();

        app.views.main.router.navigate("/home/", { reloadCurrent: true });
    });
};

// VALIDA A SESSAO EM CADA PAGINA
export function checkAuth({ to, from, resolve, reject }) {
    const valida = true;
    // Verificar a sessão do usuario logado
    if (/* some condition to check user is logged in */valida) {
        loadUsuarios();
        resolve();
    } else {
        reject();
    }
    
}

function loadUsuarios(){
    console.log("aqui-API...");
    const method = "GET";
    const rota = "usuarios";
    callApi(method, rota, function (data) {
        
    });
}



// Configuracoes api supabase auth
// Adicionar a apikey
// Adicionar o Authorization, que expira depois de um tempo, conforme os rate limit da api
// pode definir tempo de token no supabase mesmo
// Limites da api de autenticacao
// https://supabase.com/dashboard/project/wbgctstptayrxskwaqld/auth/rate-limits

// limites da api por tabelas

// precisa habilitar row Level Security em todas as tabelas e criar a policy que nem usuario


