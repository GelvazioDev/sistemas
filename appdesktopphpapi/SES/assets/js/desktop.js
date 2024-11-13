var STATUS_SUCESSO = 1;
var STATUS_ERRO    = 0;

const MENSAGEM_ERRO    = "erro";
const MENSAGEM_SUCESSO = "sucesso";
const MENSAGEM_ATENCAO = "atencao";
const MENSAGEM_INFO    = "info";

function acaoConfirmar(window_id){
    // id="formulario_' . $window_id .'" 
    
    
    
    var oCodigo = $("#codigo");
    
    // verifica se o campo é chave 
    //  isfieldkey=\'' . $isKey . '\'' 

    var isChave = oCodigo.attr("isfieldkey");
    
    $("#formulario_" + window_id).submit();
}

function acaoFecharJanela(window_id){
    $("#window_" + window_id).closest('div.window').hide();
    $($("#window_" + window_id).attr('href')).hide('fast');
    
    // Remove o botao da tela do menu footer
    $("#icon_dock_" + window_id).css("display", "none");
    $("#icon_dock_" + window_id).hide('fast');

    // Stop propagation to window's top bar.
    return false;
}

function acaoAbrirJanela(oJanela){
    // mensagem aguarde    
    
    // $("#" + oJanela.id).animate({
    //     width:"200px",
    //     height:"200px",
    //     left:"500px"
    // }, 5000, 'linear');
    
    // pagina de carregamento 
    // https://www.blogson.com.br/como-executar-um-gif-durante-o-carregamento-da-pagina-loading/

    showCarregandoAjax();
    acaoAbrirJanelaPrincipal(oJanela);        
}

function acaoAbrirJanelaPrincipal(oJanela){
    var window_id = oJanela.id;
    var token_dois_fatores = 500;
    var secret = 400;    
    loadAjax({
        type : "POST",
        data : "token=" + token_dois_fatores + "&secret=" + secret + "&window_id=" + window_id + "&pagina=" + window_id,
        url  : getUrlAjax()
    }, 
    success = function(ret){
        
        if(validaAcessoLogin()){
            ret = JSON.parse(ret);
            if(parseInt(ret.status) === STATUS_SUCESSO){
    
                // Se a janela ja existe, remove ela para buscar os dados sempre atualizados 
                var oJanelaExistente = $("#window_" + window_id);
                if(oJanelaExistente != undefined){
                    $("#window_" + window_id).remove();
                }
    
                // Adiciona a tela no frame 
                $("#wrapper").append(ret.tela);
                
                // Mostra a tela
                mostraJanela(oJanela);
    
            } else {
                // mostraJanelaErro();
                alert("Erro 1: " + ret.mensagem);
            }            
        } else {
            abreTelaLogin(oJanela);
        }        
    },
    error = function(ret){
        var retorno = JSON.parse(ret.responseText);
        
        // Adiciona a tela no frame 
        var mensagem = retorno.mensagem;
        var tipoMensagem = retorno.status;
        var traceError = retorno.trace;
        
        // Adiciona o corpo da mensagem
        $("#wrapper").append(getJanelaMensagem(mensagem, traceError, tipoMensagem, window_id));

        // Mostra a tela
        mostraJanela(oJanela);
    },
    onComplete = function(){
        // Chama funcao apos completar a request
    });
}

function validaAcessoLogin(){
    return false;
}

function trataRetornoAjax(){
    
}

function abreTelaLogin(oJanela){
    
    // 60 form de exemplo de login 
    // https://www.rocketwp.com.br/60-forms-de-login-html-e-css-gratis/
    
    $("#wrapper").append(getFormularioLogin());

    // Mostra a tela
    mostraJanela(oJanela);
}

function getFormularioLogin(){
    var window_id_new = "computer";
    var tipoMensagem = "sucesso";
    var form_login = "";
    
    return '<div id="window_' + window_id_new + '" class="abs window" style="width: 600px;height: 400px;">' +
        '    <div class="abs window_inner">' +
        '        <div class="window_top">' +
        '            <span class="float_left">' +
        '                <img alt="" src="SES/assets/images/icons/icon_16_' + window_id_new + '.png"/>' +
        '                    TELA DE LOGIN                       ' +
        '                </span>' +
        '                <span class="float_right">' +
        '                <a href="#" class="window_min"></a>' +
        '                <a href="#" class="window_resize"></a>' +
        '                <a href="#icon_dock_' + window_id_new + '" class="window_close"></a>' +
        '            </span>' +
        '        </div>' +
        '        <div class="abs window_content" style="display: inline-block">' +
        '            <div id="' + window_id_new + '" class="window_main" style="min-height: 0;padding:10px;">' +
        '                <div id="main_window_' + window_id_new + '">'+
        '                   ' + form_login +
        '                </div>' +
        '            </div>' +
        '        </div>' +
        '        <div class="abs window_bottom aba_botoes">' +
        '           <div id="aba_acao">&nbsp;' +
        '               <button class="botao" onclick="acaoFecharJanela(\'' + window_id_new + '\')">Fechar</button>' +
        '           </div>' +
        '        </div>' +
        '    </div>' +
        '    <span class="abs ui-resizable-handle ui-resizable-se"></span>' +
        '</div>';
}

function getJanelaMensagem(mensagem, traceError, tipoMensagem, window_id){
    var aWindow = window_id.split("_");
    var window_id_new = aWindow[2];
    
    return '<div id="window_' + window_id_new + '" class="abs window" style="width: 1600px;height: 768px;">' +
        '    <div class="abs window_inner">' +
        '        <div class="window_top">' +
        '            <span class="float_left">' +
        '                <img alt="" src="SES/assets/images/icons/icon_16_' + window_id_new + '.png"/>' +
        '                    Atenção!!!' +
        '                </span>' +
        '                <span class="float_right">' +
        '                <a href="#" class="window_min"></a>' +
        '                <a href="#" class="window_resize"></a>' +
        '                <a href="#icon_dock_' + window_id_new + '" class="window_close"></a>' +
        '            </span>' +
        '        </div>' +
        '        <div class="abs window_content" style="display: inline-block">' +
        '            <div id="' + window_id_new + '" class="window_main" style="min-height: 0;padding:10px;">' +
        '                <div id="main_window_' + window_id_new + '">'+ 
        '                   ' + traceError + 
        '                </div>' +
        '            </div>' +
        '        </div>' +
        '        <div class="abs window_bottom aba_botoes">' +
        '           <div id="aba_acao">&nbsp;' +
        '               <button class="botao" onclick="acaoFecharJanela(\'' + window_id_new + '\')">Fechar</button>' +
        '           </div>' +        
        '        </div>' +
        '    </div>' +
        '    <span class="abs ui-resizable-handle ui-resizable-se"></span>' +
        '</div>';
}

function getUrlAjax(){
    return "index.php";
}

function maximizeRestoreJanela(oJanela){
    // Get the link's target.
    var x = $(oJanela).attr('href');
    var y = $(x).find('a').attr('href');

    // Maximize or restore the window.
    $(y).closest('div.window').show();
}

function mostraJanela(oJanela){

    // Get the link's target.
    var x = $(oJanela).attr('href');
    var y = $(x).find('a').attr('href');

    // Show the taskbar button.
    if ($(x).is(':hidden')) {
        $(x).remove().appendTo('#dock');
        $(x).show('fast');
    }

    // get the window to the center
    var sis_height = window.screen.height - 150;
    var sis_width = window.screen.width;

    var width_element = $(y).width();
    var height_element = $(y).height();

    var top = sis_height / 2 - (height_element / 2);
    var left = sis_width / 2 - (width_element / 2);

    $(y).css("top", top + "px");
    $(y).css("left", left + "px");

    // Bring window to front.
    JQD.util.window_flat();

    $(y).addClass('window_stack').show();

    // minimiza a janela
    $(y).closest('div.window').hide();

    // aguarda 1 segundo e maximiza
    setTimeout(function(){
        // Maximize or restore the window.
        $(y).closest('div.window').show();

        hideCarregandoAjax();
    }, 1000);

    adicionaFocoCamposJanela();
}

function adicionaFocoCamposJanela(){
    $("input").focus(function() {
        
        $(this)
            .parent()
            .addClass("focoAtual")
            .children("div")
            .toggle();
    });
    $("input").blur(function() {
        $(this)
            .parent()
            .removeClass("focoAtual")
            .children("div")
            .toggle();
    });

    $('<div class="tl"></div><div class="tr"></div><div class="bl"></div><div class="br"></div>')
        .appendTo("div.campo-simples");
}

