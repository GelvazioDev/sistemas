<?php

require_once 'DB.php';

abstract class Crud extends DB {

    protected $table;
    private $inicio;
    private $maximo;

    abstract public function insert();

    abstract public function update($id);

    public function setInicio($inicio) {
        $this->inicio = $inicio;
    }

    public function getInicio() {
        return $this->inicio;
    }

    public function setMaximo($maximo) {
        $this->maximo = $maximo;
    }

    public function getMaximo() {
        return $this->maximo;
    }

    public function find($id) {
        $sql = "SELECT * FROM $this->table WHERE id = :id ";
        $stmt = DB::prepare($sql);
        $stmt->bindParam(':id', $id, PDO::PARAM_INT);
        $stmt->execute();
        return $stmt->fetch();
    }

    public function findPia($id) {
        $sql = "SELECT * FROM $this->table WHERE acolhido_id = :id ";
        $stmt = DB::prepare($sql);
        $stmt->bindParam(':id', $id, PDO::PARAM_INT);
        $stmt->execute();
        return $stmt->fetch();
    }

    public function findAll() {
        $sql = "SELECT * FROM $this->table ORDER BY id DESC LIMIT $this->inicio, $this->maximo";
        $stmt = DB::prepare($sql);
        $stmt->execute();
        return $stmt->fetchAll();
    }

    //ordena por data de deposito - Receitas
    public function findAllOrder() {
        $sql = "SELECT * FROM $this->table ORDER BY data_deposito DESC LIMIT $this->inicio, $this->maximo";
        $stmt = DB::prepare($sql);
        $stmt->execute();
        return $stmt->fetchAll();
    }

    //ordena por data de vencimento - Despesas
    public function findAllOrder1() {
        $sql = "SELECT * FROM $this->table ORDER BY data_venc DESC LIMIT $this->inicio, $this->maximo";
        $stmt = DB::prepare($sql);
        $stmt->execute();
        return $stmt->fetchAll();
    }

    public function contador() {
        $sql = "SELECT COUNT(*) AS 'lista' FROM $this->table";
        $stmt = DB::prepare($sql);
        $stmt->execute();
        return $stmt->fetchAll();
    }

    public function delete($id) {
        $sql = "DELETE FROM $this->table WHERE id = :id";
        $stmt = DB::prepare($sql);
        $stmt->bindParam(':id', $id, PDO::PARAM_INT);
        return $stmt->execute();
    }


}