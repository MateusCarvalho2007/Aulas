document.getElementById("3").addEventListener("click", function () {
    const precosTamanho = { P: 10, M: 15, G: 20 };
    const precosSabor = { queijo: 4, calabresa: 3.5, morango: 8 };

    const tamanho = document.querySelector('input[name="tamanho"]:checked');
    const sabores = document.querySelectorAll('input[name="sabor"]:checked');
    const entrega = document.getElementById("5").value;
    const quantidade = document.getElementById("2").value;

    if (!tamanho) {
        alert("Escolha um tamanho.");
        return;
    }

    if (sabores.length === 0) {
        alert("Escolha pelo menos um sabor.");
        return;
    }

    if (entrega === "Selecionar") {
        alert("Escolha entrega ou busca.");
        return;
    }

    if (!quantidade || quantidade <= 0) {
        alert("Digite uma quantidade válida.");
        return;
    }

    var precoTotal = 0 ;

    for (var i = 0; i < sabores.length; i++) {
        precoTotal += precosTamanho[tamanho.value];
        precoTotal += precosSabor[sabores[i].value];

    }

    precoTotal *= quantidade;

    if (entrega === "Entrega") {
        precoTotal += 5;
    }

    alert("O preço total é R$" + precoTotal.toFixed(2));
});