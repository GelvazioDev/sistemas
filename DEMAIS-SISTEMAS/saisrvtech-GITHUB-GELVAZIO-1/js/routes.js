export function routesTeste(){
    return  [
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

                    
                   

                },
                pageBeforeRemove: function (event, page) {
                    // fazer algo antes da página ser removida do DOM
                    actions1.destroy();
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
            path: "/home/",
            url: "home.html",
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
    ];
}