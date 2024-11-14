//INICIALIZAÇÃO DO F7 QUANDO DISPOSITIVO ESTÁ PRONTO
document.addEventListener('deviceready', onDeviceReady, false)

import { checkAuth,login,voltarLogin } from './auth.js';
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
  routes:[
      {
          path: "/index/",
          url: "index.html",
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
          path: "/instituicao/",
          url: "instituicao.html",
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
                  const action = onPageInitInstituicao(app);
                  const btnSelecionarInstituicao = document.querySelector('#btnSelecionarInstituicao');
                      btnSelecionarInstituicao.addEventListener('click', (event) => {
                      selecionarInstituicao(action);

                      // const btnLarMatriz = document.querySelector('#lar-matriz');
                      // btnLarMatriz.addEventListener('click', (event) => {
                      //     app.views.main.router.navigate("/matriz/", { reloadCurrent: true });
                      // });
                  });

                  const btnVoltarInstituicao = document.querySelector('#btnVoltarInstituicao')
                    btnVoltarInstituicao.addEventListener('click', event => {
                        console.log("VOLTANDO.....");
                        app.views.main.router.navigate("/index/", { reloadCurrent: true });
                    })
              },
              pageBeforeRemove: function (event, page) {
                  // fazer algo antes da página ser removida do DOM
                  // actions1.destroy();
              },
              beforeEnter: checkAuth
          }
      },
      {
          path: "/matriz/",
          url: "matriz.html",
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
        path: "/larpg/",
        url: "larpg.html",
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
        path: "/larrdo/",
        url: "larrdo.html",
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
        path: "/larrsl/",
        url: "larrsl.html",
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
        path: "/lartc/",
        url: "lartc.html",
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
          path: "/link1/",
          url: "link1.html",
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
              beforeEnter: checkAuth,
          }
      },
      {
          path: "/link2/",
          url: "link2.html",
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
              beforeEnter: checkAuth,
          }
      },
      {
          path: "/link3/",
          url: "link3.html",
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
              beforeEnter: checkAuth,
          }
      },
  ]
})

//EVENTO PARA SABER O ITEM DO MENU ATUAL
app.on('routeChange', function (route) {
  var currentRoute = route.url

  console.log(currentRoute)

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
  //Quando estiver rodando no celular
  var mainView = app.views.create('.view-main', { url: '/index/' })

  //COMANDO PARA "OUVIR" O BOTAO VOLTAR NATIVO DO ANDROID
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
  console.log('aqui-LOGIN')
  login(app, true)
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

app.views.create('.view-main')
