<?php

function my_autoload($className, $modulo = false) {
    $modulo = strtoupper(substr($className, 0, 3));
    
    if (strpos($className, 'Controller') !== false) {
        require_once($modulo . '/controller/' . $className . '.php');
    } else if (strpos($className, 'View') !== false) {
        require_once($modulo . '/view/' . $className . '.php');
    } else if (strpos($className, 'Persistencia') !== false) {
        require_once($modulo . '/persistencia/' . $className . '.php');
    } else if (strpos($className, 'Model') !== false) {
        require_once($modulo . '/model/' . $className . '.php');
    } else {
        // Por default busca no sistema estrutura
        require_once('SES/' . $className . '.php');
    }
}

spl_autoload_register("my_autoload");
