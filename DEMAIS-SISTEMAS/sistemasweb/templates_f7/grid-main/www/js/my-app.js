//INICIALIZAÇÃO DO F7 QUANDO DISPOSITIVO ESTÁ PRONTO
document.addEventListener('deviceready', onDeviceReady, false);
var app = new Framework7({
    // App root element
    el: '#app',
    // App Name
    name: 'My App',
    // App id
    id: 'com.myapp.test',
    // Enable swipe panel
    panel: {
        swipe: true,
    },
    dialog: {
        buttonOk: 'Sim',
        buttonCancel: 'Cancelar',
    },
    // Add default routes
    routes: [
        {
            path: '/index/',
            url: 'index.html',
        },
        {
            path: '/link1/',
            url: 'link1.html',
        },
        {
            path: '/link2/',
            url: 'link2.html',
        },
        {
            path: '/link3/',
            url: 'link3.html',
        },
        {
            path: '/link4/',
            url: 'link4.html',
        },
        {
            path: '/link5/',
            url: 'link5.html',
        },
        {
            path: '/link6/',
            url: 'link6.html',
        },
    ],
    // ... other parameters
});

//Para testes direto no navegador
//var mainView = app.views.create('.view-main', { url: '/index/' });

function onDeviceReady() {
    //Quando estiver rodando no celular
    var mainView = app.views.create('.view-main', { url: '/index/' });

    //COMANDO PARA "OUVIR" O BOTAO VOLTAR NATIVO DO ANDROID 	
    document.addEventListener("backbutton", function (e) {

        if (mainView.router.currentRoute.path === '/index/') {
            e.preventDefault();
            app.dialog.confirm('Deseja sair do aplicativo?', function () {
                navigator.app.exitApp();
            });
        } else {
            e.preventDefault();
            mainView.router.back({ force: true });
        }
    }, false);

}