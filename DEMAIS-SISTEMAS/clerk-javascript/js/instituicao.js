console.log("SCRIPT DA PAGINA DE - INSTITUICAO!");

export function onPageInitInstituicao(app) {
    // 1 Group
    const buttons1 = [
        {
            text: 'Selecione a Instuição',
            label: true
        },
        {
            text: 'AMC-SC Matriz - Rio do Sul',
            strong: true,
            onClick:function(app, element){
                console.log("Clicando na action - AMC-SC Matriz - Rio do Sul");                                
                app.app.views.main.router.navigate("/matriz/", { reloadCurrent: true });
            }            
        },
        {
            text: 'Instituto Lar da Menina - Rio do Sul',
            onClick:function(app, element){
                console.log("Instituto Lar da Menina - Rio do Sul");                                
                app.app.views.main.router.navigate("/larrsl/", { reloadCurrent: true });
            }
        },
        {
            text: 'Lar Mover Caminhos PG - Presidente Getúlio',
            onClick:function(app, element){
                console.log("Lar Mover Caminhos PG - Presidente Getúlio");                                
                app.app.views.main.router.navigate("/larpg/", { reloadCurrent: true });
            }
        },
        {
            text: 'Lar Mover Caminhos RDO - Rio do Oeste',
            onClick:function(app, element){
                console.log("Lar Mover Caminhos RDO - Rio do Oeste");                                
                app.app.views.main.router.navigate("/larrdo/", { reloadCurrent: true });
            } 
        },
        {
            text: 'Lar Mover Caminhos TC - Trombudo Central',
            onClick:function(app, element){
                console.log("Lar Mover Caminhos TC - Trombudo Central");                                
                app.app.views.main.router.navigate("/lartc/", { reloadCurrent: true });
            } 
        },
        {
            text: 'Cancel',
            color: 'red'
        },
    ];

    const actions = app.actions.create({ 
        buttons: buttons1,
        on: {
            open: function () {
              console.log('Action Sheet open')
            },
            opened: function () {
                console.log('Action Sheet opened')
            },
            close: function (app) {
                console.log('Action Sheet close')
            },
            closed: function () {
                console.log('Action Sheet closed')
            }
        },
        onClick:function(app, element){
            console.log("Clicando na action");

            const elementSelected = app.app.actions.get();
        }
    },);

    return actions;
}

export function selecionarInstituicao(action) {
    action.open();
}
