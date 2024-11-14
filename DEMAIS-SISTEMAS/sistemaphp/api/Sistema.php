<?php 

class Sistema {

    public function __construct(){
//        require_once ("core/Acolhido.php");
//
//        $acolhido = new Acolhido();
//        $aDados = $acolhido->findAll();
//
//        echo "<pre>" . print_r($aDados, true) . "</pre>";

        $this->processaDados();
    }

    protected function processaDados(){
        require_once("core/header.php");

        require_once("core/sistema.php");
        
        require_once("core/footer.php");
    }
}

new Sistema();