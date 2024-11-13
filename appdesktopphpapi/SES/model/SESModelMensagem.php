<?php
/**
 * Created by PhpStorm.
 * User: gelvazio
 * Date: 18/09/2021
 * Time: 10:48
 */

class SESModelMensagem {

    const MENSAGEM_ERRO    = "erro";
    const MENSAGEM_SUCESSO = "sucesso";
    const MENSAGEM_ATENCAO = "atencao";
    const MENSAGEM_INFO    = "info";
    
    public static function showMessage($message, $tipoMensagem = self::MENSAGEM_ATENCAO){
        echo self::getCssMensagem() . '<div class=" alerta ' . $tipoMensagem . '">' . $message . '</div>';
    }    
    
    public static function getCssMensagem(){
        return "<style>
                    .alerta {
                        padding: 25px;
                        border: 1px solid gray;
                        border-radius: 3px;
                        margin: 300px auto;
                        font-size: 20px;
                        width: 150px;
                    }
                    
                    .alerta_grande {
                        padding: 5px;
                        margin: 10px auto;
                        font-size: 20px;                        
                    }
                    
                    .erro {
                        border-color: #e8273b;
                        color: #FFF;
                        background-color: #ed5565;
                    }
                    
                    .sucesso {
                        border-color: #87c940;
                        color: #FFF;
                        background-color: #a0d468;
                    }
                    
                    .atencao {
                        border-color: #f4a911;
                        color: #FFF;
                        background-color: #f6bb42;
                    }
                    
                    .info {
                        border-color: #2f80e7;
                        color: #FFF;
                        background-color: #5d9cec;
                    }
               </style>";
    }
}