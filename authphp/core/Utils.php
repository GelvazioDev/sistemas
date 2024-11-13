<?php

/**
 * Arquivo com funções uteis
 * User: Gelvazio Camargo
 * Date: 22/09/2024
 * Time: 23:00
 */

require_once("Slack.php");
require_once("QueryPadrao.php");
class Utils {

    public static function loadVariaveis() {
        $env = file_get_contents(__DIR__ . "/variaveis.json");
        $env = json_decode($env, true);

        putenv("JWT_KEY=" . $env["token"]["JWT_KEY"]);

        putenv("HOST="    . $env["database"]["HOST"]);
        putenv("PORT="    . $env["database"]["PORT"]);
        putenv("DBNAME="  . $env["database"]["DBNAME"]);
        putenv("USER="    . $env["database"]["USER"]);
        putenv("PASS="    . $env["database"]["PASS"]);

        putenv("API_KEY_SLACK_GERAL=" . $env["slack"]["API_KEY_SLACK_GERAL"]);
        putenv("API_KEY_SLACK_LOGS=" . $env["slack"]["API_KEY_SLACK_LOGS"]);
    }
}

Utils::loadVariaveis();