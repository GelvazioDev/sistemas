function listarPedidos(){
    const modal = document.querySelector('#modal-pedido');
    modal.showModal();
    modal.style.display = 'block';

    // limpar o codigo do produto
    // document.querySelector('#codigo').value = '';
}

function fecharModal () {
  const modal = document.querySelector('#modal-pedido');
  modal.close();
  modal.style.display = 'none';
}

function detalharPedido(idPedido){
    // alert("Detalhando pedido:" + idPedido);

    // item-modal-pedido
    const modal = document.querySelector('#item-modal-pedido');
    modal.showModal();
    modal.style.display = 'block';
}


function fecharModalDetalhePedido () {
  const modal = document.querySelector('#item-modal-pedido');
  modal.close();
  modal.style.display = 'none';
}
