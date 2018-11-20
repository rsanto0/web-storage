function adicionar(incrementor, target) {
    
    var idElement = '#' + target;
    var value = parseInt($(idElement).val());
    value += incrementor;
    $(idElement).val(value);

    jsonObj = [];

    $("input[class=venda]").each(function(){
        var chave = $(this).attr("title");
        var valor = $(this).val();

        item = {}
        //item ["id"] = chave+"_"+value;
        item [chave+"_"+value] = valor;

        jsonObj.push(item);
    });

    jsonString = JSON.stringify(jsonObj);

    localStorage.setItem("produto_"+value, jsonString);
    
    txtValor.value = "";
}

function ler() {
    var obj = localStorage.getItem(txtProduto.value);
    if (obj != null)
        alert(obj);
    else
        alert("O item procurado não existe.")
}

function remover() {
    localStorage.removeItem(txtChave.value);
    alert("Item removido.");
}

function limpar() {
    localStorage.clear();
    alert("");
}

function alterar(id) {
    var obj = localStorage.getItem(id);

}