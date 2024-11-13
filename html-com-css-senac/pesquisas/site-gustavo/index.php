<?php
class Produto {

	function __construct(){
		$this->getBody();
	}
	
    protected function getBody(){
        $this->getListaProduto();
    }

    protected function getListaProduto(){
        $html= "";

        $html.= $this->getProdutosPorLinha();

        $html.= $this->getScriptProdutos();

        echo $html;
    }

    protected function getScriptProdutos(){
        return '<script>
                    var aListaProdutoAdicionado = new Array();
                    
                    function adicionaEvento(produto){                        
                        if(!aListaProdutoAdicionado.includes(produto)){
                            aListaProdutoAdicionado.push(produto)
                            alteraImagemProduto(produto)
                        }
                    }
                    
                    function alteraImagemProduto(produto){
                        console.log("produto:" + produto);
                        
                        let mudouImagem = document.querySelector(`#color-option_${produto}`);
                        
                        let circle = document.querySelector(`#color-option_${produto}`);
                        circle.addEventListener("click", (e)=>{
                            alteraImagem(e.target, produto, circle);
                        });
                    }
                    
                    function alteraImagem(target, produto, circle){                                                  
                        if(target.classList.contains("circle")){
                            circle.querySelector(".active").classList.remove("active");
                            
                            target.classList.add("active");
                                                           
                            document.querySelector(".main-images_" + produto + " .active").classList.remove("active");
                            document.querySelector(`.main-images_${produto} .${target.id}`).classList.add("active");                                                          
                        }
                    }                    
                </script>';
    }

    protected function getProdutosPorLinha(){
        $html_lista_produtos = "";

        $aListaProduto = array();

        $oProduto = new stdClass();
        $oProduto->codigo = 1;
        $oProduto->descricao = "ADDIDAS GAZE ZX 1";
        $oProduto->preco = "15,00";

        array_push($aListaProduto, $oProduto);

        $oProduto = new stdClass();
        $oProduto->codigo = 2;
        $oProduto->descricao = "ADDIDAS GAZE ZX 2";
        $oProduto->preco = "15,00";

        array_push($aListaProduto, $oProduto);

        $oProduto = new stdClass();
        $oProduto->codigo = 3;
        $oProduto->descricao = "ADDIDAS GAZE ZX 3";
        $oProduto->preco = "15,00";

        array_push($aListaProduto, $oProduto);

        $oProduto = new stdClass();
        $oProduto->codigo = 4;
        $oProduto->descricao = "ADDIDAS GAZE ZX 4";
        $oProduto->preco = "15,00";

        array_push($aListaProduto, $oProduto);

        $oProduto = new stdClass();
        $oProduto->codigo = 5;
        $oProduto->descricao = "ADDIDAS GAZE ZX 5";
        $oProduto->preco = "15,00";

        //array_push($aListaProduto, $oProduto);

        $html_lista_produtos = '<div class="produto-teste">';

        // maximo de 5 produtos por vez na tela em cada linha, por 2 linha com 10 produtos
        foreach ($aListaProduto as $produto){
            $html_lista_produtos .= $this->getProduto($produto->codigo, $produto->descricao, $produto->preco);
        }

        $html_lista_produtos .= '</div>';

        return $html_lista_produtos;
    }

    protected function getProduto($descricao, $preco, $imagem = false){
        return $this->getProdutoCompleto($descricao, $preco, $imagem);
    }

    protected function getProdutoTeste($descricao, $preco, $imagem = false){
        return '
            <link rel="stylesheet" href="templates/css/produto.css">
            <link href=\'https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css\' rel=\'stylesheet\'>
            <div class="body-produto-teste-geo">
                <div class="product-card-teste-geo">
                PRODUTO 1
                    <div class="button">
                        <div class="button-layer"></div>
                        <button>Add To Cart</button>
                    </div>
                </div>
            </div>';
    }

    private function getProdutoCompleto($idproduto, $descricao, $preco, $imagem = false){

        $functionAlteraImagem = ' onclick="alteraImagemProduto(' . $idproduto . ')"';
        $functionAdicionaEvento = ' onmouseover="adicionaEvento(' . $idproduto . ')"';

        return '<!--ARQUIVO CSS-->            
            <link rel="stylesheet" href="templates/css/produto.css">
            
            <!-- Boxicons CDN Link -->
            <link href=\'https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css\' rel=\'stylesheet\'>
            
            <div class="body-produto">
                <div class="product-card">
                    <div class="logo-cart">
                        <img src="templates/images/logo.jpg" alt="logo">
                        <i class=\'bx bx-shopping-bag\'></i>
                    </div>
                    <div class="main-images main-images_' . $idproduto . '" id="imagem_' . $idproduto . '">
                        <img id="blue" class="blue active" src="templates/images/blue.png" alt="blue">
                        <img id="pink" class="pink" src="templates/images/pink.png" alt="blue">
                        <img id="yellow" class="yellow" src="templates/images/yellow.png" alt="blue">
                    </div>
                    <div class="shoe-details">
                        <span class="shoe_name">ADDIDAS GAZE ZX</span>
                        <p>Lorem ipsum dolor sit lorenm i amet, consectetur adipisicing elit. Eum, ea, ducimus!</p>
                        <div class="stars">
                            <i class=\'bx bxs-star\' ></i>
                            <i class=\'bx bxs-star\' ></i>
                            <i class=\'bx bxs-star\' ></i>
                            <i class=\'bx bxs-star\' ></i>
                            <i class=\'bx bx-star\' ></i>
                        </div>
                    </div>
                    <div class="color-price">
                        <div class="color-option" id="color-option_' . $idproduto . '" ' . $functionAlteraImagem . $functionAdicionaEvento . '>
                            <span class="color">Colour:</span>
                            <div class="circles">
                                <span class="circle blue active"  id="blue"></span>
                                <span class="circle pink " id="pink"></span>
                                <span class="circle yellow " id="yellow"></span>
                            </div>
                        </div>
                        <div class="price">
                            <span class="price_num">$09.00</span>
                            <span class="price_letter">Nine dollar only</span>
                        </div>
                    </div>
                    <div class="button">
                        <div class="button-layer"></div>
                        <button>Add To Cart</button>
                    </div>
                </div>
            </div>';
    }
}

new Produto();


