<?php

use \Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;

/**
 * Chamada da api Usuario
 *
 * User: Gelvazio Camargo
 * Date: 19/10/2024
 * Time: 09:00
 */
require_once("ControllerApiBase.php");

class ControllerApiUsuario extends ControllerApiBase {

    public function getUsuario(Request $request, Response $response, array $args) {
        $sSql = "SELECT * FROM usuario ORDER BY usucodigo";
        $aDados = $this->getQuery()->selectAll($sSql);
        return $response->withJson($aDados, HttpStatusCodes::HTTP_OK);
    }

    /**
     * Retorna o token de um usuário
     * @param $usulogin
     * @return array|string
     * @throws Exception
     */
    public function getTokenUsuario(Request $request, Response $response, array $args) {

        $body = $request->getParsedBody();
        $usulogin = $body["usulogin"];

        $usuarioLogin = getUsuarioCacheFromLogin($usulogin);
        $dados = ["Mensagem" => "Usuario: " . intval(getSession("usucodigo_logado")) . ", Logou no usuario: " . intval($usuarioLogin["usucodigo"])];

        addLogSistema("USUARIO", intval($usuarioLogin["usucodigo"]), "USUARIO_LOGOU_COM_OUTRO_USUARIO", $dados, intval(getSession("usucodigo_logado")));

        return array("token" => encodeToken($usuarioLogin["usucodigo"]));

    }

    public static function isValidToken($token, $request) {
        $_SESSION["loja_meu_crediario"] = false;
        $conexaoRead = getConexaoReadReplica();
        $qrToken = pg_query_params($conexaoRead, "select usutokenapi.usucodigo,
                                                         usuario.empcodigo,
                                                         usuario.ushcodigo,
                                                         usuario.usulogin,
                                                         usuloja.lojcodigo
                                                    from usutokenapi 
                                              inner join usuario on (usuario.usucodigo = usutokenapi.usucodigo)
                                               left join usuloja on (usuloja.usucodigo = usutokenapi.usucodigo)
                                                   where usutokenapi.token = $1
                                                     and coalesce(usuario.usubloqueado, 0) = 0
                                                order by coalesce(usuloja.uljpadrao, 0) desc
                                                   limit 1", array($token));
        if ($rsToken = pg_fetch_assoc($qrToken)) {
            if (intval($rsToken["empcodigo"]) > 0) {
                // Define a sessão da loja
                if (intval($rsToken["lojcodigo"]) > 0) {
                    setSessaoSistemaByLoja(intval($rsToken["lojcodigo"]));
                } else {
                    setSessaoSistemaByEmpresa(intval($rsToken["empcodigo"]));
                }

                // Define a sessão do usuário
                $_SESSION["usucodigo_logado"] = intval($rsToken["usucodigo"]);
                $_SESSION["usulogin_logado"] = $rsToken["usulogin"];
                $_SESSION["ushcodigo_logado"] = intval($rsToken["ushcodigo"]);

                // Coloca o token na sessão
                $dadosSessao = array(
                    "usucodigo" => $rsToken["usucodigo"],
                    "empcodigo" => $rsToken["empcodigo"],
                    "lojcodigo" => $rsToken["lojcodigo"],
                    "ushcodigo" => $rsToken["ushcodigo"],
                    "usucodigo_logado" => $rsToken["usucodigo"],
                    "empcodigo_logado" => $rsToken["empcodigo"],
                    "lojcodigo_logado" => $rsToken["lojcodigo"],
                    "ushcodigo_logado" => $rsToken["ushcodigo"],
                );
                $_SESSION["token_logado"] = encodeToken($rsToken["usucodigo"], $dadosSessao);

                // Verifica se é uma loja do MeuCrediário
                $isTokenMeuCrediario = intval(getParametroLoja($rsToken["lojcodigo"], PARAM_LOJA_TOKEN_MEUCREDIARIO)) == 1;
                if ($isTokenMeuCrediario) {
                    $_SESSION["loja_meu_crediario"] = true;
                }

                // Salva o log de acesso do usuário
                if (intval($rsToken["usucodigo"]) > 0) {
                    $dadosLog = new stdClass();
                    $dadosLog->sistema = $_SERVER["HTTP_X_API_SISTEMA"];
                    $dadosLog->path = $request->getUri()->getPath();
                    $dadosLog->queryParams = $request->getQueryParams();

                    if (!stristr($dadosLog->path, "motor") && !stristr($dadosLog->path, "vendas")) {
                        $json = json_decode(file_get_contents('php://input'));
                        if ($json != "") {
                            $dadosLog->json = $json;
                        }
                    }

                    $idLogsistema = addLogSistema("USUARIO", intval($rsToken["usucodigo"]), "ACESSO_API", $dadosLog);
                    $_SESSION["id_execucao_api"] = $idLogsistema;
                    $_SESSION["tempo_execucao_api"] = microtime(true);
                }

                return true;
            }
        }

        //TODO: Isso precisa ser removido
        $uri = $request->getUri()->getPath();
        if (stristr($uri, "motor") || stristr($uri, "vendas")) {
            return true;
        }

        // Se for calculo de limite interno
        if (stristr($uri, "limite")) {
            if (isServidorProducao()) {
                $ip = getRemoteIP();
                if ($ip == "35.192.108.251" || $ip == "177.37.95.172") {
                    return true;
                }
            } else {
                return true;
            }
        }
        return false;
    }

    public function auth(Request $request, Response $response, array $args) {

        $body = $request->getParsedBody();

        $usulogin = isset($body["login"]) ?? false;
        $ususenha = isset($body["senha"]) ?? false;

        if (!$usulogin || !$ususenha) {
            $aDados = array(
                "status" => HttpStatusCodes::HTTP_UNAUTHORIZED,
                "mensagem" => HttpStatusCodes::getMessageForCode(HttpStatusCodes::HTTP_UNAUTHORIZED)
            );
            return $response->withJson($aDados, HttpStatusCodes::HTTP_UNAUTHORIZED);
        }

        if ($usulogin && $ususenha) {
            $rota = "";

            $ch = curl_init($rota);

            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, $method = "GET");
            curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
            // curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            // curl_setopt($ch, CURLOPT_TIMEOUT, 10);
            curl_setopt($ch, CURLOPT_HTTPHEADER, array(
                "Content-Type: Application/json",
                "Accept:x/y",
                "Accept:*/*",
                "mode:no-cors",
                "apikey: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndiZ2N0c3RwdGF5cnhza3dhcWxkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg5NTM5NzgsImV4cCI6MjA0NDUyOTk3OH0.6qOP2ANbwnxHosWnupL8Wbdhl7AtpZNAOrcBZ91Hzzk"
            ));

            $retornoApi = curl_exec($ch);

            curl_close($ch);

            if ($retornoApi) {
                $ret = 1;
            }
        }

        return $response->withJson(array(
            "status" => HttpStatusCodes::HTTP_UNAUTHORIZED,
            "mensagem" => HttpStatusCodes::getMessageForCode(HttpStatusCodes::HTTP_UNAUTHORIZED)
        ), HttpStatusCodes::HTTP_UNAUTHORIZED);
    }

    /**
     * Retorna se tem bloqueio de tentativas de login
     * @param $login
     * @return bool
     * @throws Exception
     */
    private function hasBloqueioTentativas($login) {

        return true;


        $maximoTentativasLogin = intval(getParamValue(PARAM_MAXIMO_TENTATIVA_LOGIN));
        $tempoBloqueioTentativasLogin = intval(getParamValue(PARAM_TEMPO_BLOQUEIO_TENTATIVA_LOGIN));

        $conexaoRead = getConexaoReadReplica();
        $query = pg_query_params($conexaoRead, "select count(1) as qtd_tentativas
                                              from tentativalogin 
                                             where login = $1
                                               and datahora > cast(current_timestamp - INTERVAL '" . $tempoBloqueioTentativasLogin . " minute' as timestamp)", array($login));
        while ($ret = db_fetch_array($query)) {
            if (intval($ret["qtd_tentativas"]) > $maximoTentativasLogin) {
                return true;
            }
        }
        return false;
    }

    /**
     * Registra tentativa se login sem sucesso
     * @param $login
     * @param $senha
     * @return void
     * @throws Exception
     */
    private function addTentativaLogin($login, $senha) {
        $conexao = getConexao();
        try {
            pg_query_params($conexao, "insert into tentativalogin (datahora, ip, login, senha, headers) 
                            values (current_timestamp, $1, $2, $3, $4)", array(getRemoteIP(), $login, $senha, getRequestLog()));
        } catch (Exception $e) {
            error_log($e->getMessage());
        }
    }

    /**
     * Retorna o usuário do banco de dados
     * @param $usulogin
     * @return array|type
     * @throws Exception
     */
    private function getUsuarioFromLogin($usulogin) {
        $query = db_query("select *
                         from usuario
                        where upper(usulogin) = '" . (strtoupper($usulogin)) . "'");
        $usuario = db_fetch_assoc($query);

        return $usuario;
    }

    /**
     * Verifica se é um usuário valido do sistema, e se o mesmo não esta bloqueado
     * @param $usulogin
     * @param $ususenha
     * @param bool $verificaBloqueado
     * @return bool
     * @throws Exception
     */
    private function isUsuario($usulogin, $ususenha, $verificaBloqueado = true) {
        // Se o login veio vazio, já retorna retorna
        if (trim($usulogin) == "") {
            return false;
        }

        $usuario = $this->getUsuarioFromLogin($usulogin);

        // Verifica se o login existe
        if (strcmp(trim(strtoupper($usuario["usulogin"])), trim(strtoupper($usulogin))) == 0) {

            // Verifica se a senha é um token
            try {
                $ar = explode(".", $ususenha);
                if (count($ar) == 3) {
                    $decode = Utils::decodeToken($ususenha);
                    if ($decode->usucodigo == $usuario["usucodigo"] && $decode->dataToken == date("Y-m-d")) {

                        if ($usuario["usubloqueado"]) {
                            return false;
                        }

                        return true;
                    }
                }
            } catch (Exception $e) {

            }

            // Valida a senha
            $hash = utf8_encode($usuario["usuhash"]);
            if (strcmp(crypt($ususenha, $hash), $hash) != 0) {
                return false;
            }

            // Verifica se esta bloqueado
            if ($verificaBloqueado && $usuario["usubloqueado"]) {
                return false;
            }

            return true;
        }

        return false;
    }

}