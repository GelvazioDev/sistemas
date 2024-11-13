<?php
/*Responsavel por realizar obter os modelos e realizar as operaaaes no banco de dados*/
abstract class SESPersistenciaPadrao{
    
    /**
     *
     * @var SESModelPadrao
     */
    protected $Model;
    
    /**
     *
     * @var Query
     */
    private $Query;
    
    /*Responsavel por Inserir os dados no banco de dados atravas do modelo de dados*/
    abstract function insere();
    
    /*Responsavel por Alterar os dados no banco de dados atravas do modelo de dados*/
    abstract function altera();
    
    /*Responsavel por Excluir os dados no banco de dados atravas do modelo de dados*/
    abstract function exclui();
    
    /*Responsavel por Obter os dados no banco de dados atravas de um modelo de dados*/
    abstract function get();
    
    /*Responsavel por Obter todos os modelos no banco de dados atravas*/
    abstract function getAll();
    
    /*Responsavel por receber um array retornado do banco de dados e retornar um modelo de dados populado*/
    abstract function getModelFromDb($aValor);
    
    function getQuery(){
        if (!isset($this->Query)){
            $this->Query = new Query();
        }
        return $this->Query;
    }

    function setQuery(Query $Query){
        $this->Query = $Query;
    }
        
    function getModel(){
        return $this->Model;
    }

    function setModel(ModelPadrao $Model){
        $this->Model = $Model;
    }
}