<?php
SAUModelUsuario::validaAcesso($bValidaSempre = true);

class SESControllerRedirecionador {

    static $oParametros = Array();

    public function __construct() {
        $this->getAllParametros();
        $this->verificaDestino();
    }

    private function verificaDestino() {
        try {
            $pagina = self::getParametro('pagina');
            if ($pagina == 'link_desktop_computer') {
                return $this->abreJanelaTeste();
            }
            
            if ($pagina) {
                $sController = 'Controller' . $_GET['pagina'];
                if (file_exists('./controller/' . $sController . '.php')) {
                    $oController = new $sController();
                    $oController->processa();
                } else {
                    throw new Exception('Pagina solicitada nao encontrada! ' . $sController);
                }
            } else {
                new SESViewDesktop();
            }
        } catch(Exception $exception){
            $e = error_get_last();
            
            SESModelMensagem::showMessage("Erro ao buscar página!<br>" . $exception->getMessage(), SESModelMensagem::MENSAGEM_ERRO);
        }
        
        return true;
    }

    private function verificaDestinoPorSetor() {
        if (self::getParametro('pagina')) {
            $sControllerCadastro = 'Controller' . $_GET['pagina'];
            if (file_exists('./controller/cadastro/' . $sControllerCadastro . '.php')) {
                $oControllerCadastro = new $sControllerCadastro();
                $oControllerCadastro->processa();
            } else {
                throw new Exception('Pagina do modulo cadastro nao encontrada! ');
            }

            $sControllerFaturamento = 'Controller' . $_GET['pagina'];
            if (file_exists('./controller/faturamento/' . $sControllerFaturamento . '.php')) {
                $oControllerFaturamento = new $sControllerFaturamento();
                $oControllerFaturamento->processa();
            } else {
                throw new Exception('Pagina do modulo faturamento nao encontrada! ' . $sControllerFaturamento);
            }

            $sControllerFinanceiro = 'Controller' . $_GET['pagina'];
            if (file_exists('./controller/financeiro/' . $sControllerFinanceiro . '.php')) {
                $oControllerFinanceiro = new $sControllerFinanceiro();
                $oControllerFinanceiro->processa();
            } else {
                throw new Exception('Pagina do modulo financeiro nao encontrada! ' . $sControllerFinanceiro);
            }

            $sControllerCompras = 'Controller' . $_GET['pagina'];
            if (file_exists('./controller/compra/' . $sControllerCompras . '.php')) {
                $oControllerCompras = new $sControllerCompras();
                $oControllerCompras->processa();
            } else {
                throw new Exception('Pagina do modulo compra nao encontrada! ' . $sControllerCompras);
            }

            $sControllerRelatorio = 'Controller' . $_GET['pagina'];
            if (file_exists('./controller/relatorio/' . $sControllerRelatorio . '.php')) {
                $oControllerRelatorio = new $sControllerRelatorio();
                $oControllerRelatorio->processa();
            } else {
                throw new Exception('Pagina do modulo relatorio nao encontrada! ' . $sControllerRelatorio);
            }

            $sControllerConfiguracao = 'Controller' . $_GET['pagina'];
            if (file_exists('./controller/configuracao/' . $sControllerConfiguracao . '.php')) {
                $oControllerConfiguracao = new $sControllerConfiguracao();
                $oControllerConfiguracao->processa();
            } else {
                throw new Exception('Pagina do modulo configuracao nao encontrada! ' . $sControllerConfiguracao);
            }
        } else if (file_exists('./controller/cadastro/ControllerHome.php')) {
            $oControllerHome = new ControllerHome();
            $oControllerHome->processa();
        } else {
            throw new Exception('Pagina home nao encontrada! ');
        }
    }

    private function getAllParametros() {
        foreach ($_GET as $chave => $valor) {
            self::$oParametros[$chave] = $valor;
        }
        foreach ($_POST as $chave => $valor) {
            self::$oParametros[$chave] = $valor;
        }
    }

    public static function getParametro($name) {
        if (isset(self::$oParametros[$name])) {
            return self::$oParametros[$name];
        }
        return false;
    }
    
    public function abreJanelaTeste(){
        if(isset($_POST["token"])){

            $oDados = new stdClass();
            $oDados->mensagem = "Janela não encontrada!";
            $oDados->tela = "Janela não encontrada!";
            $oDados->status = STATUS_ERRO;
            
           // echo json_encode($oDados);
            
            //return true;
            
            
            //    $oRedirecionador = new Redirecionador();
            //    $oRedirecionador->setPagina();
            //    
            // Aqui validar o acesso

            $secret = $_POST["secret"];
            $token  = $_POST["token"];
            
//            echo "chegou aqui 1";
                
            $oConsultaCor = false;            
            try {
                /*@var SAUViewConsultaCor $oConsultaCor*/
                $oConsultaCor = new SAUViewConsultaCor();
            } catch (\Exception $exception){
//                echo "chegou aqui 2";
                $e = error_get_last();

//                SESModelMensagem::showMessage("Erro ao buscar página!<br>
//                            " . $exception->getMessage() . "Dados do Erro" . $e, SESModelMensagem::MENSAGEM_ERRO);

                echo json_encode($oDados);
                
            }            

            if($oConsultaCor){
                $oJanela = $oConsultaCor->getWindow("computer", "Janela Padrão de Consulta");                
                $oDados->status = STATUS_SUCESSO;
                $oDados->tela = $oJanela;
            }

            echo json_encode($oDados);
        }
        return true;
    }
}


