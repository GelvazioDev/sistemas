<?php

require_once 'Crud.php';

class Acolhido extends Crud {

    protected $table = 'acolhido';
    protected $subtable = 'acolhidofoto';
    private $id, $observacao, $acolhimento_id, $sexo, $desacolhimento_id, $pai, $mae, $resp, $comarca, $contato, $nome, $idade, $abreviacao, $telefone, $motivo, $cpf, $rg, $data_nasc, $entrada, $saida, $situacao, $uf, $cep, $cidade, $bairro, $endereco, $numero, $complemento;
    private $images = [];

    public function addImage($image = []) {
        $this->images[] = $image;
    }

    public function setAcolhimento($acolhimento_id) {
        if ($acolhimento_id == '') {
            $this->acolhimento_id = 0;
        } else {
            $this->acolhimento_id = $acolhimento_id;
        }
    }

    public function getAcolhimento() {
        return $this->acolhimento_id;
    }

    public function setDesacolhimento($desacolhimento_id) {
        if ($desacolhimento_id == '') {
            $this->desacolhimento_id = 0;
        } else {
            $this->desacolhimento_id = $desacolhimento_id;
        }
    }

    public function getDesacolhimento() {
        return $this->desacolhimento_id;
    }

    public function setId($id) {
        $this->id = $id;
    }

    public function setSexo($sexo) {
        $this->sexo = $sexo;
    }

    public function getSexo() {
        return $this->sexo;
    }

    public function setPai($pai) {
        $this->pai = $pai;
    }

    public function getPai() {
        return $this->pai;
    }

    public function setMae($mae) {
        $this->mae = $mae;
    }

    public function getMae() {
        return $this->mae;
    }

    public function setResp($resp) {
        $this->resp = $resp;
    }

    public function getResp() {
        return $this->resp;
    }

    public function setComarca($comarca) {
        $this->comarca = $comarca;
    }

    public function getComarca() {
        return $this->comarca;
    }

    public function setIdade($idade) {
        $this->idade = $idade;
    }

    public function getIdade() {
        return $this->idade;
    }

    public function setContato($contato) {
        $this->contato = $contato;
    }

    public function getContato() {
        return $this->contato;
    }

    public function setEntrada($entrada) {
        if ($entrada == '') {
            $this->entrada = null;
        } else {
            $this->entrada = $entrada;
        }
    }

    public function getEntrada() {
        return $this->entrada;
    }

    public function setSaida($saida) {
        if ($saida == '') {
            $this->saida = null;
        } else {
            $this->saida = $saida;
        }
    }

    public function getSaida() {
        return $this->saida;
    }

    public function setSituacao($situacao) {
        $this->situacao = $situacao;
    }

    public function getSituacao() {
        return $this->situacao;
    }

    public function setObservacao($observacao) {
        $this->observacao = $observacao;
    }

    public function getObservacao() {
        return $this->observacao;
    }

    public function setNome($nome) {
        $this->nome = $nome;
    }

    public function getNome() {
        return $this->nome;
    }

    public function setAbreviacao($abreviacao) {
        $this->abreviacao = $abreviacao;
    }

    public function getAbreviacao() {
        return $this->abreviacao;
    }

    public function setTelefone($telefone) {
        $this->telefone = $telefone;
    }

    public function getTelefone() {
        return $this->telefone;
    }

    public function setMotivo($motivo) {
        $this->motivo = $motivo;
    }

    public function getMotivo() {
        return $this->motivo;
    }

    public function setCpf($cpf) {
        $this->cpf = $cpf;
    }

    public function getCpf() {
        return $this->cpf;
    }

    public function setRg($rg) {
        $this->rg = $rg;
    }

    public function getRg() {
        return $this->rg;
    }

    public function setUf($uf) {
        $this->uf = $uf;
    }

    public function getUf() {
        return $this->uf;
    }

    public function setCep($cep) {
        $this->cep = $cep;
    }

    public function getCep() {
        return $this->cep;
    }

    public function setCidade($cidade) {
        $this->cidade = $cidade;
    }

    public function getCidade() {
        return $this->cidade;
    }

    public function setBairro($bairro) {
        $this->bairro = $bairro;
    }

    public function getBairro() {
        return $this->bairro;
    }

    public function setEndereco($endereco) {
        $this->endereco = $endereco;
    }

    public function getEndereco() {
        return $this->endereco;
    }

    public function setNumero($numero) {
        $this->numero = $numero;
    }

    public function getNumero() {
        return $this->numero;
    }

    public function setComplemento($complemento) {
        $this->complemento = $complemento;
    }

    public function getComplemento() {
        return $this->complemento;
    }

    public function setData_nasc($data_nasc) {
        $this->data_nasc = $data_nasc;
    }

    public function getData_nasc() {
        return $this->data_nasc;
    }

    public function insert() {

        $sql = "INSERT INTO $this->table (pai, mae, sexo, resp, acolhimento_id, desacolhimento_id, comarca, contato, entrada, saida, situacao, abreviacao,idade, observacao,uf, nome, endereco, motivo, cpf, telefone, rg, cep, cidade, bairro, numero, complemento, data_nasc)
		VALUES (:pai, :mae, :sexo, :resp, :acolhimento_id, :desacolhimento_id, :comarca, :contato, :entrada, :saida, :situacao, :abreviacao, :idade, :observacao, :uf,:nome,:endereco, :motivo,:cpf, :telefone , :rg, :cep, :cidade, :bairro, :numero, :complemento, :data_nasc)";
        $stmt = DB::prepare($sql);
        $stmt->bindValue(':pai', $this->pai);
        $stmt->bindValue(':mae', $this->mae);
        $stmt->bindValue(':sexo', $this->sexo);
        $stmt->bindValue(':resp', $this->resp);
        $stmt->bindValue(':acolhimento_id', $this->acolhimento_id);
        $stmt->bindValue(':desacolhimento_id', $this->desacolhimento_id);
        $stmt->bindValue(':comarca', $this->comarca);
        $stmt->bindValue(':contato', $this->contato);
        $stmt->bindValue(':entrada', $this->entrada);
        $stmt->bindValue(':saida', $this->saida);
        $stmt->bindValue(':situacao', $this->situacao);
        $stmt->bindValue(':abreviacao', $this->abreviacao);
        $stmt->bindValue(':idade', $this->idade);
        $stmt->bindValue(':observacao', $this->observacao);
        $stmt->bindValue(':uf', $this->uf);
        $stmt->bindValue(':nome', $this->nome);
        $stmt->bindValue(':endereco', $this->endereco);
        $stmt->bindValue(':motivo', $this->motivo);
        $stmt->bindValue(':cpf', $this->cpf);
        $stmt->bindValue(':telefone', $this->telefone);
        $stmt->bindValue(':rg', $this->rg);
        $stmt->bindValue(':cep', $this->cep);
        $stmt->bindValue(':cidade', $this->cidade);
        $stmt->bindValue(':bairro', $this->bairro);
        $stmt->bindValue(':numero', $this->numero);
        $stmt->bindValue(':complemento', $this->complemento);
        $stmt->bindValue(':data_nasc', $this->data_nasc);
        $stmt->execute();

        $sql1 = "SELECT LAST_INSERT_ID() as id";
        $stmt1 = DB::prepare($sql1);
        $stmt1->execute();
        $r = $stmt1->fetch(PDO::FETCH_OBJ);

        $result = array();

        // insere registros imagens a partir de relação array
        foreach ($this->images as $image) {
            $sql = "INSERT INTO $this->subtable (imagem, acolhido_id, descricao, ordem) VALUES (:image, :acolhido_id, :descricao, :ordem)";
            $stmt = DB::prepare($sql);
            $stmt->bindValue(':image', $image['imagem']);
            $stmt->bindValue(':descricao', $image['descricao'] ?? null);
            $stmt->bindValue(':acolhido_id', $r->id);
            $stmt->bindValue(':ordem', $image['ordem'] ?? 0);
            array_push($result, $stmt->execute());
        }

        return implode('<br/>', $result);
    }

    public function update($id) {

        $sql = "UPDATE $this->table SET pai = :pai, sexo = :sexo, mae = :mae, resp = :resp, acolhimento_id = :acolhimento_id, desacolhimento_id = :desacolhimento_id, comarca = :comarca, idade = :idade, contato = :contato, entrada = :entrada, saida = :saida, situacao = :situacao, abreviacao = :abreviacao, observacao = :observacao, uf = :uf, nome = :nome, endereco = :endereco, motivo = :motivo, cpf = :cpf, telefone = :telefone, rg = :rg, cep = :cep, cidade = :cidade, bairro = :bairro, numero = :numero, 
		complemento = :complemento, data_nasc = :data_nasc WHERE id = :id";
        $stmt = DB::prepare($sql);
        $stmt->bindValue(':pai', $this->pai);
        $stmt->bindValue(':sexo', $this->sexo);
        $stmt->bindValue(':mae', $this->mae);
        $stmt->bindValue(':resp', $this->resp);
        $stmt->bindValue(':acolhimento_id', $this->acolhimento_id);
        $stmt->bindValue(':desacolhimento_id', $this->desacolhimento_id);
        $stmt->bindValue(':comarca', $this->comarca);
        $stmt->bindValue(':idade', $this->idade);
        $stmt->bindValue(':contato', $this->contato);
        $stmt->bindValue(':entrada', $this->entrada);
        $stmt->bindValue(':saida', $this->saida);
        $stmt->bindValue(':situacao', $this->situacao);
        $stmt->bindValue(':abreviacao', $this->abreviacao);
        $stmt->bindValue(':observacao', $this->observacao);
        $stmt->bindValue(':uf', $this->uf);
        $stmt->bindValue(':nome', $this->nome);
        $stmt->bindValue(':endereco', $this->endereco);
        $stmt->bindValue(':motivo', $this->motivo);
        $stmt->bindValue(':cpf', $this->cpf);
        $stmt->bindValue(':telefone', $this->telefone);
        $stmt->bindValue(':rg', $this->rg);
        $stmt->bindValue(':cep', $this->cep);
        $stmt->bindValue(':cidade', $this->cidade);
        $stmt->bindValue(':bairro', $this->bairro);
        $stmt->bindValue(':numero', $this->numero);
        $stmt->bindValue(':complemento', $this->complemento);
        $stmt->bindValue(':data_nasc', $this->data_nasc);
        $stmt->bindValue(':id', $id);
        $stmt->execute();

        $sql2 = "DELETE FROM $this->subtable WHERE acolhido_id = :id";
        $stmt2 = DB::prepare($sql2);
        $stmt2->bindValue(':id', $id);
        $stmt2->execute();

        $result = array();

        // insere registros imagens a partir de relação array
        foreach ($this->images as $image) {
            $sql = "INSERT INTO $this->subtable (imagem, acolhido_id, descricao, ordem) VALUES (:image, :acolhido_id, :descricao, :ordem)";
            $stmt = DB::prepare($sql);
            $stmt->bindValue(':image', $image['imagem']);
            $stmt->bindValue(':descricao', $image['descricao'] ?? null);
            $stmt->bindValue(':acolhido_id', $id);
            $stmt->bindValue(':ordem', $image['ordem'] ?? 0);
            array_push($result, $stmt->execute());
        }

        return implode('<br/>', $result);

    }

    public function search($desc) {
        $desc = "%" . $desc . "%";
        $sql = "SELECT * FROM $this->table WHERE nome LIKE :desc";
        $stmt = DB::prepare($sql);
        $stmt->bindParam(':desc', $desc);
        $stmt->execute();
        return $stmt->fetchAll();
    }

    //RELATÓRIOS
    // PESQUISA DADOS DOS ACOLHIDOS
    public function findAllA($nome, $cidade, $idade, $sexo, $situacao, $v9, $v10) {
        if (!empty($nome)) {
            $op1 = "and id = " . $nome;
        } else {
            $op1 = '';
        }

        if (!empty($cidade)) {
            $op2 = "and cidade LIKE '%" . $cidade . "%'";
        } else {
            $op2 = '';
        }

        if (!empty($idade)) {

            //grava as idades num array
            $arr = explode(",", $idade);

            if (count($arr) > 1) {
                //pega o primeiro valor do array
                $arr1 = array_shift($arr);

                //cria um array sem o primeiro valor de arr
                $arr2 = $arr;

                foreach ($arr2 as $val) {
                    $op3[] = "or idade = " . $val . " ";
                }
                $op3a = "idade = " . $arr1;
                $op3b = implode(" ", $op3);


                $op33 = $op3a . ' ' . $op3b;
            } else {
                $op33 = "idade = " . $idade;
            }
        } else {
            $op33 = 'idade <> "" ';
        }

        if (!empty($sexo)) {
            $op4 = "and sexo = '" . $sexo . "' ";
        } else {
            $op4 = '';
        }

        if (!empty($situacao)) {
            $op5 = "and situacao = '" . $situacao . "' ";
        } else {
            $op5 = '';
        }

        if ((!empty($v9)) && (!empty($v10))) {
            //$op6 = "and (entrada <= '".$v10."' and saida >= '".$v9."' or entrada <= '".$v10."' and  saida = '' )";
            $op6 = "and ((entrada <= '" . $v10 . "' and saida >= '" . $v9 . "') or (entrada <= '" . $v10 . "' and (saida = '' or saida is null)))";
        } else {
            $op6 = '';
        }

        $sql = "SELECT * FROM $this->table where id <> ' ' " . $op1 . " " . $op2 . " and (" . $op33 . ") " . $op4 . " " . $op5 . " " . $op6 . " order by nome  ";
        $stmt = DB::prepare($sql);
        //echo $sql;
        $stmt->execute();
        return $stmt->fetchAll();
    }


    public function mostraTodos() {
        $sql = "SELECT * FROM $this->table where situacao = 'Ativo'  order by nome  ";
        $stmt = DB::prepare($sql);
        $stmt->execute();
        return $stmt->fetchAll();
    }


    public function AtualizaIdade() {
        $id = explode(' || ', $this->id);
        $idade = explode(' || ', $this->idade);

        function format($id, $idade) {
            return "idade = '{$idade}' where id = {$id}";
        }

        $valores = array_map("format", $id, $idade);

        foreach ($valores as $value) {
            $sql = "UPDATE $this->table SET " . $value . "";
            $stmt = DB::prepare($sql);
            //echo $sql.'<br>';
            $stmt->execute();
        }

        $result = array();
        return implode('<br/>', $result);

    }

    public function tempoAcolhimento($entrada, $saida) {
        /*
            if($entrada){$d1 = DateTime::createFromFormat('d/m/Y', $entrada)->format('Y-m-d'); }
            if($saida){$d2 = DateTime::createFromFormat('d/m/Y', $saida)->format('Y-m-d');
    */
        $d1 = $entrada;
        $d2 = $saida;
        if (!$saida) {
            date_default_timezone_set('America/Sao_Paulo');
            $d2 = date('Y-m-d');
            //echo $d2;
        }

        $firstDate = new DateTime($d1);
        $secondDate = new DateTime($d2);
        $intvl = $firstDate->diff($secondDate);

        $ano = $intvl->y;
        $mes = $intvl->m;
        $dia = $intvl->d;

        if ($ano > 1) {
            $a = '' . $ano . ' anos, ';
        } else {
            $a = '' . $ano . ' ano, ';
        }
        if ($mes > 1) {
            $m = '' . $mes . ' meses e ';
        } else {
            $m = '' . $mes . ' mês e ';
        }
        if ($dia > 1) {
            $d = '' . $dia . ' dias ';
        } else {
            $d = '' . $dia . ' dia';
        }

        echo $a, $m, $d;
    }
}