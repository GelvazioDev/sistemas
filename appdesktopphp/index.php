<?php
// Exibe erros simples
error_reporting(E_ERROR | E_WARNING | E_PARSE);

// Exibir E_NOTICE também pode ser bom para mostrar variáveis não iniciadas...
// ou com erros de digitação.
error_reporting(E_ERROR | E_WARNING | E_PARSE | E_NOTICE);

// Exibe todos os erros, exceto E_NOTICE
error_reporting(E_ALL & E_NOTICE);

// Exibe todos os erros PHP (see changelog)
error_reporting(E_ALL);

// Mesmo que error_reporting(E_ALL);
ini_set('error_reporting', E_ALL);

require_once('SES/funcoes.php');
require_once('SES/ErrorHandler.php');

ErrorHandler::getInstance();
try {
    new SESControllerRedirecionador();    
} catch(\Exception $e){
    echo $e->getMessage();
}