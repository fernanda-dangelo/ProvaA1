// Variáveis

let ul = document.getElementById("lista");

let input = document.getElementById("item");

let button = document.getElementById("botao");

function adicionar() {
    
    let entrada = input.value;

    input.value = "";

    let listaitem = document.createElement("li");

    let textoitem = document.createElement("span");
    
    let excluir = document.createElement("button");
    
    textoitem.innerHTML = entrada;
    excluir.innerHTML = "excluir";
    
    listaitem.appendChild(textoitem);
    listaitem.appendChild(excluir);

    excluir.onclick = function deletar(){
        excluir.parentNode.remove();
    }
    
    ul.appendChild(listaitem);

    input.focus();

}