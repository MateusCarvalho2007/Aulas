window.addEventListener('load', function () {
    const pathname = window.location.pathname;

    // Página 1: Estado da Pista
    if (pathname.includes("index1.html")) {
        const form = document.getElementById("Estado");
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const dados = new FormData(form);
            const pista = dados.get("pista");

            if (pista) {
                localStorage.setItem("Estado", pista);
                window.location.href = "index2.html";
            } else {
                alert("Selecione o estado da pista.");
            }
        
        });
    }

    // Página 2: Tipo de Corrida
    if (pathname.includes("index2.html")) {
        const form = document.getElementById("Tipo");
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const dados = new FormData(form);
            const tipo = dados.get("tipo");

            if (tipo) {
                localStorage.setItem("Tipo", tipo);
                window.location.href = "index3.html";
            } else {
                alert("Selecione o tipo de corrida.");
            }
        });
    }

    // Página 3: Tempo + Resumo
    if (pathname.includes("index3.html")) {
        const form = document.getElementById("TCorrida");
        const estado = localStorage.getItem("Estado");
        const tipo = localStorage.getItem("Tipo");

        // Mostrar resumo
        document.getElementById("estado").textContent = "Estado da Pista: " + (estado || "Não definido");
        document.getElementById("tipo").textContent = "Tipo da Corrida: " + (tipo || "Não definido");

        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const dados = new FormData(form);
            const tempo = dados.get("tempo");

            if (tempo) {
                localStorage.setItem("TCorrida", tempo);
                alert("Todos os dados foram salvos com sucesso!");

                // Exibir no console (poderia redirecionar ou mostrar em uma nova página também)
                console.log("Resumo final:", {
                    Estado: localStorage.getItem("Estado"),
                    Tipo: localStorage.getItem("Tipo"),
                    TCorrida: tempo
                });
            } else {
                alert("Selecione o tempo da corrida.");
            }
        });
    }
});