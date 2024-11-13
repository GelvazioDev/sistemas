<?php

require_once ("Utils.php");
class Token {

    public static function validaLogin($usulogin, $token) {
        $usuario = Token::getUsuarioFromLogin($usulogin);
        // Verifica se a senha é um token
        try {
            $ar = explode(".", $token);
            if (count($ar) == 3) {
                $decode = Token::decodeToken($token);
                if ($decode->usucodigo == $usuario["usucodigo"] && $decode->dataToken == date("Y-m-d")) {

                    // Verifica se esta bloqueado
                    if ($usuario["usubloqueado"]) {
                        return false;
                    }

                    return true;
                }
            }
        } catch (Exception $e) {

        }
    }

    /**
     * Gera token de autenticação
     * @param $usucodigo
     * @param $dadosAdicionais
     * @return string
     * @throws Exception
     */
    public static function encodeToken($usucodigo, $dadosAdicionais = false) {
        $jwtKey = getenv("JWT_KEY") . date("Y-m-d");

        $usucodigo = intval($usucodigo);
        $dados = array(
            "usucodigo" => $usucodigo,
            "dataToken" => date("Y-m-d")
        );

        // Coloca os dados adicionais no token
        if (is_array($dadosAdicionais)) {
            $dados = array_merge($dados, $dadosAdicionais);
        }

        require_once '../lib/jwt/jwt_helper.php';

        return JWT::encode($dados, $jwtKey);
    }

    /**
     * Decodifica o token
     * @param $token
     * @return object
     */
    public static function decodeToken($token) {
        $jwtKey = getenv("JWT_KEY") . date("Y-m-d");

        require_once '../lib/jwt/jwt_helper.php';

        return JWT::decode($token, $jwtKey);
    }

    /**
     * Retorna o usuário do banco de dados por login
     * @param $usulogin
     * @return array
     * @throws Exception
     */
    public static function getUsuarioFromLogin($usulogin) {

        $aDados = getQuery()->select("select * from usuario where upper(usulogin) = '" . (strtoupper($usulogin)) . "'");

        return $aDados;
    }
}

Token::loadVariaveis();