function adicionaClickMenu(){
    const allElements = document.querySelectorAll('.inicio .btn');
    allElements.forEach(function (element) {
        element.addEventListener("click", function (e) {
            limparEstiloMenu();

            // Adiciona a classe "selected" no elemento que foi clicado
            this.classList.add("selected");
            
            // Atualiza pagina
            const id = this.id;
            console.log("id clicado:" + id);

            // vai para a pagina clicada
            // if(id == "index"){
            //     window.location.href = "index.html";
            // } else if(id == "historia"){
            //     window.location.href = "historia.html";
            // } else if(id == "produto"){
            //     window.location.href = "produto.html";
            // } else if(id == "representante"){
            //     window.location.href = "representante.html";
            // } else if(id == "contato"){
            //     window.location.href = "contato.html";
            // }

            // Forma 2
            window.location.href = id + ".html";
        });
    });    
}

function limparEstiloMenu(){
    const allElements = document.querySelectorAll('.inicio .btn');
    allElements.forEach(function (element) {
        element.classList.remove("selected");
    });    
}

adicionaClickMenu();