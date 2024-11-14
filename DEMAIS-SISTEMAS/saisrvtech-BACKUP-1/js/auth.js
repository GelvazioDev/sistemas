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
        resolve();
    } else {
        reject();
    }
}


