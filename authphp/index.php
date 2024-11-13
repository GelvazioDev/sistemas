<?php

require_once ("core/Utils.php");

//Slack::enviaMensagemSlack("Ola 01", "Testes 01", "geral");
//Slack::enviaMensagemSlack("Ola 02", "Testes 02");

$aDados = getQuery()->selectAll("select * from sistema1");

echo "<pre>" . print_r($aDados, true)."</pre>";

