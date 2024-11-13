<?php

require_once("utils.php");

$pasta = "sistemaescolar-orientacao-objeto";

$request_uri = $_SERVER['REQUEST_URI'];
$url_inicial = "";
$url_inicial_css = "../";
if($request_uri == "/" . $pasta . "/api/index.php" || $request_uri == "/" . $pasta . "/api/"){
    $url_inicial_css = "api/";
    $url_inicial = "api/";
    
    if($request_uri == "/" . $pasta . "/api/index.php"){
        $url_inicial_css = "api/";
    }
}

echo '
<!DOCTYPE html>
<html lang="pt-br">
    <head>
          <meta charset="UTF-8">
          <title>Sistema Escolar</title>
          <link rel="stylesheet" href="http://localhost/' . $pasta . '/api/css/style.css">
          <link rel="stylesheet" href="http://localhost/' . $pasta . '/api/css/button.css">
          <link rel="stylesheet" href="http://localhost/' . $pasta . '/api/css/header.css">          
          <link rel="stylesheet" href="http://localhost/' . $pasta . '/api/css/table.css">
          <script src="http://localhost/' . $pasta . '/api/js/api.js" defer async></script>          
    </head>
<body class="background-06">
    <div class="header">
        <ul>
            <li><a href="../' . $url_inicial . 'index.php">Home</a></li>
            <li><a href="../' . $url_inicial . 'aluno/consulta_aluno.php">Alunos</a></li>
            <li><a href="../' . $url_inicial . 'professor/consulta_professor.php">Professor</a></li>
            <li><a href="../' . $url_inicial . 'escola/consulta_escola.php">Escola</a></li>
            <li><a href="../' . $url_inicial . 'turma/consulta_turma.php">Turma</a></li>
            <li><a href="../' . $url_inicial . 'materia/consulta_materia.php">Matéria</a></li>            
        </ul>
        <hr>
    </div>    
    <div class="container">';
    // abre o container