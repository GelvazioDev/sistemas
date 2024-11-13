
function loadAjaxOriginal(){
    
    var token_dois_fatores = $("#token_dois_fatores").val();
    var secret = $("#secret").val();
    $.ajax({
        cache: false,
        async: false,
        type : "POST",
        data : "token_dois_fatores=" + token_dois_fatores + "&secret=" + secret,
        url  : "index.php",
        success: function(ret) {
            ret = JSON.parse(ret);
            alert(ret.mensagem);
        }
    });
}

function testeAjax(params){
    debugger;
    // var params = params.param = [];
    //
    // loadAjax(params);

    loadAjaxOriginal();
}

function loadAjax(params){
    
    if(params.url == undefined){
        params.url = "index.php";
    }
        
    if(params.async == undefined){
        params.async = false;
    }   
    
    if(params.cache == undefined){
        params.cache = false;
    }  
    
    if(params.type == undefined){
        params.type = "POST";
    }
        
    if(params.data == undefined){
        params.data = "data=vazio";
    }  
    
    if(params.param == undefined){
        params.param = "params=vazio";
    } else {
        params.param = carregaParametrosAjax(params.param);
    }
    
    $.ajax({
        cache: params.cache,
        async: params.async,
        type : params.type,
        data : params.data,
        url  : params.url,
        success: function(ret) {
            ret = JSON.parse(ret);
            alert(ret.mensagem);
        }
    });
}

function carregaParametrosAjax(parametros){
    var retorno = "";
    for (var i = 0; i < parametros.length; i++){
        retorno = retorno + "&" + parametros.nome + "=" + parametros.valor;
    } 
    return retorno;
}