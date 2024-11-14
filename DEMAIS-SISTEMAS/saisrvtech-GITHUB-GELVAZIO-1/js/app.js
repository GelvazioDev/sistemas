var LOCAL_DESENVOLVIMENTO_ATUAL = local_desenvolvimento

// import Framework7 from 'framework7';
// IMPORTS ADICIONAIS
// Import additional components

// Import components styles
// import 'framework7/components/calendar/css';
// import 'framework7/components/popup/css';
// import 'framework7/components/searchbar/css';

//var SUPABASE_API_KEY = process.env.SUPABASE_API_KEY
//var SUPABASE_API_KEY = 1;//import.meta.env.SUPABASE_API_KEY

// const SUPABASE_API_KEY = process.env.SUPABASE_API_KEY;
// const SUPABASE_API_KEY2 = import.meta.env.SUPABASE_API_KEY2;

//INICIALIZAÇÃO DO F7 QUANDO DISPOSITIVO ESTÁ PRONTO
document.addEventListener('deviceready', onDeviceReady, false)

import { checkAuth,login,voltarLogin } from './auth.js';
import { inicializaPagina } from './global.js';
import { onPageInitInstituicao,selecionarInstituicao } from './instituicao.js';

const app = new Framework7({
  // App root element
  el: '#app',
  // App Name
  name: 'SAI',
  // App id
  id: 'saisrv.tech',
  // Enable swipe panel
  panel: {
    swipe: true
  },
  dialog: {
    buttonOk: 'Sim',
    buttonCancel: 'Cancelar'
  },
  // Add default routes
  routes: [
    {
      path: '/index/',
      url: 'index.html',
      animate: false,
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
        beforeEnter: checkAuth
      }
    },
    {
      path: '/home/',
      url: 'home.html',
      animate: false,
      on: {
        pageBeforeIn: function (event, page) {
          // fazer algo antes da página ser exibida
        },
        pageAfterIn: function (event, page) {
          // fazer algo depois da página ser exibida
        },
        pageInit: function (event, page) {
          // fazer algo quando a página for inicializada
          inicializaPagina(app, 'HOME')
        },
        pageBeforeRemove: function (event, page) {
          // fazer algo antes da página ser removida do DOM
        },
        beforeEnter: checkAuth
      }
    },
    {
      path: '/loginsistema/',
      url: 'loginsistema.html',
      animate: false,
      on: {
        pageBeforeIn: function (event, page) {
          // fazer algo antes da página ser exibida
        },
        pageAfterIn: function (event, page) {
          // fazer algo depois da página ser exibida
        },
        pageInit: function (event, page) {
          // fazer algo quando a página for inicializada
          inicializaPagina(app, 'LOGINSISTEMA')
        },
        pageBeforeRemove: function (event, page) {
          // fazer algo antes da página ser removida do DOM
        },
        beforeEnter: checkAuth
      }
    },
    {
      path: '/instituicao/',
      url: 'instituicao.html',
      animate: false,
      on: {
        pageBeforeIn: function (event, page) {
          // fazer algo antes da página ser exibida
        },
        pageAfterIn: function (event, page) {
          // fazer algo depois da página ser exibida
        },
        pageInit: function (event, page) {
          // fazer algo quando a página for inicializada
          inicializaPagina(app, 'INSTITUICAO')

          const action = onPageInitInstituicao(app)
          const btnSelecionarInstituicao = document.querySelector(
            '#btnSelecionarInstituicao'
          )
          btnSelecionarInstituicao.addEventListener('click', event => {
            selecionarInstituicao(action)

            // const btnLarMatriz = document.querySelector('#lar-matriz');
            // btnLarMatriz.addEventListener('click', (event) => {
            //     app.views.main.router.navigate("/matriz/", { reloadCurrent: true });
            // });

            // console.log("aqui-API...");
            // const method = "GET";
            // const rota = "usuarios";
            // callApi(method, rota, function (data) {});
          })

          // const btnVoltarInstituicao = document.querySelector('#btnVoltarInstituicao');
          // btnVoltarInstituicao.addEventListener('click', event => {
          //   console.log('VOLTANDO.....');
          //   app.views.main.router.navigate('/loginsistema/', { reloadCurrent: true });
          //   // Atualizar a pagina
          //   // app.views.main.router.refreshPage();
          // })
        },
        pageBeforeRemove: function (event, page) {
          // fazer algo antes da página ser removida do DOM
          // actions1.destroy();
        },
        beforeEnter: checkAuth
      }
    },
    {
      path: '/matriz/',
      url: 'matriz.html',
      animate: false,
      on: {
        pageBeforeIn: function (event, page) {
          // fazer algo antes da página ser exibida
        },
        pageAfterIn: function (event, page) {
          // fazer algo depois da página ser exibida
        },
        pageInit: function (event, page) {
          // fazer algo quando a página for inicializada
          inicializaPagina(app, 'MATRIZ')
        },
        pageBeforeRemove: function (event, page) {
          // fazer algo antes da página ser removida do DOM
        },
        beforeEnter: checkAuth
      }
    },
    {
      path: '/larpg/',
      url: 'larpg.html',
      animate: false,
      on: {
        pageBeforeIn: function (event, page) {
          // fazer algo antes da página ser exibida
        },
        pageAfterIn: function (event, page) {
          // fazer algo depois da página ser exibida
        },
        pageInit: function (event, page) {
          // fazer algo quando a página for inicializada
          inicializaPagina(app, 'PRESIDENTE_GETULIO')
        },
        pageBeforeRemove: function (event, page) {
          // fazer algo antes da página ser removida do DOM
        },
        beforeEnter: checkAuth
      }
    },
    {
      path: '/larrdo/',
      url: 'larrdo.html',
      animate: false,
      on: {
        pageBeforeIn: function (event, page) {
          // fazer algo antes da página ser exibida
        },
        pageAfterIn: function (event, page) {
          // fazer algo depois da página ser exibida
        },
        pageInit: function (event, page) {
          // fazer algo quando a página for inicializada
          inicializaPagina(app, 'RIO_DO_OESTE')
        },
        pageBeforeRemove: function (event, page) {
          // fazer algo antes da página ser removida do DOM
        },
        beforeEnter: checkAuth
      }
    },
    {
      path: '/larrsl/',
      url: 'larrsl.html',
      animate: false,
      on: {
        pageBeforeIn: function (event, page) {
          // fazer algo antes da página ser exibida
        },
        pageAfterIn: function (event, page) {
          // fazer algo depois da página ser exibida
        },
        pageInit: function (event, page) {
          // fazer algo quando a página for inicializada
          inicializaPagina(app, 'RIO_DO_SUL')
        },
        pageBeforeRemove: function (event, page) {
          // fazer algo antes da página ser removida do DOM
        },
        beforeEnter: checkAuth
      }
    },
    {
      path: '/lartc/',
      url: 'lartc.html',
      animate: false,
      on: {
        pageBeforeIn: function (event, page) {
          // fazer algo antes da página ser exibida
        },
        pageAfterIn: function (event, page) {
          // fazer algo depois da página ser exibida
        },
        pageInit: function (event, page) {
          // fazer algo quando a página for inicializada
          inicializaPagina(app, 'TROMBUDO_CENTRAL')
        },
        pageBeforeRemove: function (event, page) {
          // fazer algo antes da página ser removida do DOM
        },
        beforeEnter: checkAuth
      }
    },
    {
      path: '/link1/',
      url: 'link1.html',
      animate: false,
      on: {
        pageBeforeIn: function (event, page) {
          // fazer algo antes da página ser exibida
        },
        pageAfterIn: function (event, page) {
          // fazer algo depois da página ser exibida
        },
        pageInit: function (event, page) {
          // fazer algo quando a página for inicializada
          inicializaPagina(app, 'LINK1')
        },
        pageBeforeRemove: function (event, page) {
          // fazer algo antes da página ser removida do DOM
        },
        beforeEnter: checkAuth
      }
    },
    {
      path: '/link2/',
      url: 'link2.html',
      animate: false,
      on: {
        pageBeforeIn: function (event, page) {
          // fazer algo antes da página ser exibida
        },
        pageAfterIn: function (event, page) {
          // fazer algo depois da página ser exibida
        },
        pageInit: function (event, page) {
          // fazer algo quando a página for inicializada
          inicializaPagina(app, 'LINK2')
        },
        pageBeforeRemove: function (event, page) {
          // fazer algo antes da página ser removida do DOM
        },
        beforeEnter: checkAuth
      }
    },
    {
      path: '/link3/',
      url: 'link3.html',
      animate: false,
      on: {
        pageBeforeIn: function (event, page) {
          // fazer algo antes da página ser exibida
        },
        pageAfterIn: function (event, page) {
          // fazer algo depois da página ser exibida
        },
        pageInit: function (event, page) {
          // fazer algo quando a página for inicializada
          inicializaPagina(app, 'LINK3')
        },
        pageBeforeRemove: function (event, page) {
          // fazer algo antes da página ser removida do DOM
        },
        beforeEnter: checkAuth
      }
    }
  ]
})

// EVENTO PARA SABER O ITEM DO MENU ATUAL
app.on('routeChange', function (route) {
  var currentRoute = route.url

  console.log('rota atual:' + currentRoute)

  document.querySelectorAll('.tab-link').forEach(function (el) {
    el.classList.remove('active')
  })

  var targetEl = document.querySelector(
    '.tab-link[href="' + currentRoute + '"]'
  )

  if (targetEl) {
    targetEl.classList.add('active')
  }
})

function onDeviceReady () {
  // Quando estiver rodando no celular
  var mainView = app.views.create('.view-main', { url: '/index/' })

  // COMANDO PARA "OUVIR" O BOTAO VOLTAR NATIVO DO ANDROID
  document.addEventListener(
    'backbutton',
    function (e) {
      if (mainView.router.currentRoute.path === '/index/') {
        e.preventDefault()
        app.dialog.confirm('Deseja sair do aplicativo?', function () {
          navigator.app.exitApp()
        })
      } else {
        e.preventDefault()
        mainView.router.back({ force: true })
      }
    },
    false
  )
}

// ACOES DA PAGINA INICIAL DEVEM FICAR AQUI, SENAO DA ERRO!
// fazer algo quando a página for inicializada
const btnEntrar = document.querySelector('#btnEntrar')
btnEntrar.addEventListener('click', event => {
  login(app, true)

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

const btnCadastrarUsuario = document.querySelector('#btnCadastrarUsuario')
btnCadastrarUsuario.addEventListener('click', event => {
  cadastrarUsuario(app, true)
})

const btnVoltarLogin = document.querySelector('#btnVoltarLogin')
btnVoltarLogin.addEventListener('click', event => {
  voltarLogin(app)
})

// CARREGA O ARQUIVO DA PAGINA INDEX
$.getScript('js/index.js')

// Install F7 Components using .use() method on class:
//app.use([Searchbar, Calendar, Popup]);

app.views.create('.view-main');

if (LOCAL_DESENVOLVIMENTO_ATUAL.SERVIDOR_DESENVOLVIMENTO) {
  // MANDA PRA ABA QUE ESTA SENDO DESENVOLVIDA AGORA

  // app.views.main.router.navigate("/larrsl/", { reloadCurrent: true });
  // app.views.main.router.navigate('/home/', { reloadCurrent: true })
  // app.views.main.router.navigate('/instituicao/', { reloadCurrent: true })

  console.log('aqui - app.js')
}
