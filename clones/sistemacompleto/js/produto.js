function listarProdutosConsulta() {
    // Listando todos os produtos
    const method = "GET";

    const codigo = parseInt(document.querySelector("#codigoConsulta").value);
    let filtroCodigo = "";
    if (codigo > 0) {
        filtroCodigo = "/?id=" + codigo;
    }

    const rota = "produtos" + filtroCodigo;

    callApi(method, rota, function (data) {
        carregaTabelaConsulta(data);
    });
}

function carregaTabelaConsulta(aListaProdutos) {
    // Se não for array, coloca como array
    if (!Array.isArray(aListaProdutos)) {
        aListaProdutos = new Array(aListaProdutos);
    }

    const tabela = document.querySelector("#tabela-produtos");
    tabela.innerHTML = "";

    aListaProdutos.forEach(function (data, key) {
        const codigo = data.id;
        const descricao = data.descricao;
        const preco = data.preco;
        const estoque = data.estoque;

        const acoes = getAcoes(codigo);
        tabela.innerHTML +=
            `
        <tr>
            <td>` +
            codigo +
            `</td>
            <td>` +
            descricao +
            `</td>
            <td>` +
            preco +
            `</td>
            <td>` +
            estoque +
            `</td>
            <td>` +
            acoes +
            `</td>
        </tr>
        `;
    });

    console.log("aqui...");
}

// CONSULTA DE PRODUTOS - ALTERAÇÃO/EXCLUSÃO, INSERÇÃO
// CONSULTA DE PRODUTOS - ALTERAÇÃO

function getAcoes(codigo) {
    return `
        <div>
            <td><button onclick="alterarProduto()">Alterar</button></td>
            <td><button onclick="excluirProduto()">Excluir</button></td>
            <td><button onclick="incluirProduto()">Incluir</button></td>
        </div>
    `;
}

function fecharModal() {
    const modal = document.querySelector("dialog");
    modal.close();

    modal.style.display = "none";
}

function incluirProduto() {
    const modal = document.querySelector("dialog");
    modal.showModal();
    // DADOS DE INCLUSAO DO PRODUTO

    modal.style.display = "block";

    proximoId(function (codigo) {
        console.log("proximo codigo:" + codigo);
        document.querySelector("#codigo").value = codigo;
    });
}

function proximoId(fn = false) {
    // REGRA DE NEGOCIOS
    // PROXIMO ID = TOTAL DE PRODUTOS + 1

    let totalProdutos = 0;
    // buscar na API TODOS OS PRODUTO E CONTAR

    const method = "GET";
    const rota = "produtos";
    callApi(method, rota, function (data) {
        totalProdutos = data.length;

        totalProdutos = parseInt(totalProdutos + 1);
        if (fn) {
            fn(totalProdutos);
        }
    });
}

function confirmarModal() {
    const codigo = document.querySelector("#codigo").value;
    const descricao = document.querySelector("#descricao").value;
    const preco = document.querySelector("#preco").value;
    const estoque = document.querySelector("#estoque").value;

    const body = {
        id: codigo,
        descricao: descricao + " - " + codigo,
        preco: preco,
        estoque: estoque,
    };
    const method = "POST";
    const rota = "produtos";
    callApiPost(
        method,
        rota,
        function (data) {
            console.log("Produto gravado!" + data);
        },
        body
    );
}
