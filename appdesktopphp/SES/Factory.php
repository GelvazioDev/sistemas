<?php

class Factory {
    
    public static function requireModel($sModulo, $sClasse){
        $classe = $sModulo . 'Model'.$sClasse.'.php';

        $file = $sModulo . '/model/' . $classe;

        self::loadFile($file);
    } 
        
    public static function requireView($sModulo, $sClasse){
        $classe = $sModulo . 'View' .$sClasse . '.php';

        $file = $sModulo . '/view/' . $classe;

        self::loadFile($file);
    }   
    
    public static function requireController($sModulo, $sClasse){
        $classe = $sModulo . 'Controller' .$sClasse . '.php';

        $file = $sModulo . '/controller/' . $classe;

        self::loadFile($file);
    }  
    
    public static function requirePersistencia($sModulo, $sClasse){
        $classe = $sModulo . 'Persistencia' .$sClasse . '.php';
        
        $file = $sModulo . '/persistencia/' . $classe;
        
        self::loadFile($file);
    }  
    
    private static function loadFile($classe){
        try {
            include_once ($classe);
        } catch (Exception $ex){
            throw new Exception("Erro ao carregar o arquivo:" . $classe);
        }
    }
}
