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
			on: {
			pageBeforeIn: function (event, page) {
			// fazer algo antes da página ser exibida
			},
			pageAfterIn: function (event, page) {
			// fazer algo depois da página ser exibida
			},
			pageInit: function (event, page) {
			// fazer algo quando a página for inicializada
			},
			pageBeforeRemove: function (event, page) {
			// fazer algo antes da página ser removida do DOM
			},
		  }
        },
        {
            path: '/link1/',
            url: 'link1.html',
			on: {
			pageBeforeIn: function (event, page) {
			// fazer algo antes da página ser exibida
			},
			pageAfterIn: function (event, page) {
			// fazer algo depois da página ser exibida
			},
			pageInit: function (event, page) {
			// fazer algo quando a página for inicializada
			},
			pageBeforeRemove: function (event, page) {
			// fazer algo antes da página ser removida do DOM
			},
		  }
        },
        {
            path: '/link2/',
            url: 'link2.html',
			on: {
			pageBeforeIn: function (event, page) {
			// fazer algo antes da página ser exibida
			},
			pageAfterIn: function (event, page) {
			// fazer algo depois da página ser exibida
			},
			pageInit: function (event, page) {
			// fazer algo quando a página for inicializada
			},
			pageBeforeRemove: function (event, page) {
			// fazer algo antes da página ser removida do DOM
			},
		  }
        },
        {
            path: '/link3/',
            url: 'link3.html',
			on: {
			pageBeforeIn: function (event, page) {
			// fazer algo antes da página ser exibida
			},
			pageAfterIn: function (event, page) {
			// fazer algo depois da página ser exibida
			},
			pageInit: function (event, page) {
			// fazer algo quando a página for inicializada
			},
			pageBeforeRemove: function (event, page) {
			// fazer algo antes da página ser removida do DOM
			},
		  }
        },
        {
            path: '/link4/',
            url: 'link4.html',
			on: {
			pageBeforeIn: function (event, page) {
			// fazer algo antes da página ser exibida
			},
			pageAfterIn: function (event, page) {
			// fazer algo depois da página ser exibida
			},
			pageInit: function (event, page) {
			// fazer algo quando a página for inicializada
			},
			pageBeforeRemove: function (event, page) {
			// fazer algo antes da página ser removida do DOM
			},
		  }
        },
        {
            path: '/link5/',
            url: 'link5.html',
			on: {
			pageBeforeIn: function (event, page) {
			// fazer algo antes da página ser exibida
			},
			pageAfterIn: function (event, page) {
			// fazer algo depois da página ser exibida
			},
			pageInit: function (event, page) {
			// fazer algo quando a página for inicializada
			},
			pageBeforeRemove: function (event, page) {
			// fazer algo antes da página ser removida do DOM
			},
		  }
        },
        {
            path: '/link6/',
            url: 'link6.html',
			on: {
			pageBeforeIn: function (event, page) {
			// fazer algo antes da página ser exibida
			},
			pageAfterIn: function (event, page) {
			// fazer algo depois da página ser exibida
			},
			pageInit: function (event, page) {
			// fazer algo quando a página for inicializada
			},
			pageBeforeRemove: function (event, page) {
			// fazer algo antes da página ser removida do DOM
			},
		  }
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