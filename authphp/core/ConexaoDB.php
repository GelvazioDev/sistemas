<?php

require_once ("Utils.php");
class ConexaoDB {

    private static  $HOST   = 'YOUR_DATABASE_HOST';
    private static  $PORT   = 'YOUR_DATABASE_PORT';
    private static  $DBNAME = 'YOUR_DATABASE_NAME';
    private static  $USER   = 'YOUR_DATABASE_USER';
    private static  $PASS   = 'YOUR_DATABASE_PASS';


    private static $conexao = null;

    public static function getInstance() {
        if (is_null(self::$conexao)) {
            self::conecta();
        }
        return self::$conexao;
    }

    public static function conecta() {
        if (is_null(self::$conexao)) {

            self::$HOST = getenv("HOST");
            self::$PORT = getenv("PORT");
            self::$DBNAME = getenv("DBNAME");
            self::$USER = getenv("USER");
            self::$PASS = getenv("PASS");

            $link = 'host=' . self::$HOST . ' port=' . self::$PORT . ' dbname=' . self::$DBNAME . ' user=' . self::$USER . ' password=' . self::$PASS;
            self::$conexao = pg_connect($link);
            if (self::$conexao === false) {
                $mensagem = 'Erro ao comunicar com banco de dados!Error:' . pg_last_error();

                Slack::enviaMensagemSlack('Erro Conectar Banco!', $mensagem);

                throw new Exception($mensagem);
            }
        }
        return self::$conexao;
    }

    public static function desconecta() {
        $bFechou = true;
        if (!is_null(self::$conexao)) {
            $bFechou = pg_close(self::$conexao);
            self::$conexao = null;
        }
        return $bFechou;
    }

    public function __destruct() {
        self::desconecta();
    }

}