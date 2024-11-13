<?php
/**
 * Created by PhpStorm.
 * User: gelvazio
 * Date: 18/09/2021
 * Time: 14:54
 */

class SAUModelUsuario {
    
    public function __construct() {
        self::validaAcesso();
    }

    public static function validaAcesso($bValidaSempre = false){
        if($bValidaSempre){
            return true;
        }
        
        $bValida = false;
        
        try {
            // Validar o acesso aqui
            throw new Exception("Acesso inválido 1 - Falta programar...");

            return true;
        } catch (Exception $ex){
            SESModelMensagem::showMessage("Acesso Inválido!", SESModelMensagem::MENSAGEM_ERRO, $ex->getMessage());
            return false;
        }
        
        return false;
    }
    
    private function validaAcessoUsuario(){
        //    $oRedirecionador = new Redirecionador();
//    $oRedirecionador->setPagina();
//    
        // Aqui validar o acesso

//    new Redirecionador();
//    return true;

        $oRedirecionador = new Redirecionador();
        $pagina = $oRedirecionador->getParametro('pagina');

        $secret = $_POST["secret"];
        $token  = $_POST["token"];

        $oDados = new stdClass();
        $oDados->mensagem = "Sucesso123";

        require_once ("ConsultaCor.php");
        $oConsultaCor = new ConsultaCor();
        $token  = $_POST["token"];
        $oJanela = $oConsultaCor->getWindow("computer", "Janela Padrão de Consulta");

        $oDados->tela = "Janela não encontrada!";
        $oDados->status = STATUS_ERRO;
        if($oJanela){
            $oDados->status = STATUS_SUCESSO;
            $oDados->tela = $oJanela;
        }

        echo json_encode($oDados);
    }
}