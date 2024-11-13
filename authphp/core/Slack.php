<?php
/**
 * Created by Gelvazio Camargo.
 * Date: 26/09/2024
 * Time: 20:27
 */
require_once ("Utils.php");
class Slack {

    /**
     * Envia mensagem ao slack b2system - conta:gelvazio@gmail.com
     * @param $assunto
     * @param $message
     * @param string $room
     * @return bool|string
     * @throws Exception
     */
    public static function enviaMensagemSlack($assunto, $message, $room = "logsistemas") {
        try {
            $assunto = str_ireplace("<br>", "\n", $assunto);
            $assunto = str_ireplace("<br/>", "\n", $assunto);

            $message = str_ireplace("<br>", "\n", $message);
            $message = str_ireplace("<br/>", "\n", $message);

            $data = "payload=" . json_encode(array(
                    "channel" => "#{$room}",
                    "text" => "[$assunto] \n$message"
                ));

            // link de configuracao da api do slack:
            // https://api.slack.com/apps/A0744KCEGE7

            // webhooks
            // https://api.slack.com/apps/A0744KCEGE7/incoming-webhooks?
            $api_key_slack_geral = getenv("API_KEY_SLACK_GERAL");
            $api_key_slack_logs = getenv("API_KEY_SLACK_LOGS");

            $route = "";
            if ($room === "geral") {
                $route = $api_key_slack_geral;
            } else if ($room === "logsistemas") {
                $route = $api_key_slack_logs;
            }

            if($route == ""){
                throw new Exception("Slack - Não foi informado o canal!");
            }

            // You can get your webhook endpoint from your Slack settings
            $url_app = "https://hooks.slack.com/services/$route";

            $ch = curl_init($url_app);
            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
            curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

            $result = curl_exec($ch);

            curl_close($ch);

            return $result;
        } catch (Exception $ex) {
            throw new Exception("Slack - Erro ao enviar mensagem!" . $ex->getMessage() . " - Error:" . $ex->getTraceAsString());
        }
    }

}